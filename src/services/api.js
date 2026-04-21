import axios from 'axios';
import { STORAGE_KEYS, API_ENDPOINTS } from '../utils/constants';
import { refreshTokenRequest } from '../store/slices/authSlice';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api',
    timeout: 15000,
});

let isRefreshing = false;
let requestQueue = [];
let reduxStore = null;

export const registerStore = (store) => {
    reduxStore = store;
};

const resolveQueue = (error, token = null) => {
    requestQueue.forEach(({ resolve, reject }) => {
        if (error) {
            reject(error);
        } else {
            resolve(token);
        }
    });

    requestQueue = [];
};

api.interceptors.request.use((config) => {
    const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        const isRefreshRequest = originalRequest?.url?.includes(API_ENDPOINTS.AUTH_REFRESH);

        if (error.response?.status !== 401 || originalRequest?._retry || isRefreshRequest) {
            return Promise.reject(error);
        }

        if (isRefreshing) {
            return new Promise((resolve, reject) => {
                requestQueue.push({ resolve, reject });
            }).then((token) => {
                originalRequest.headers.Authorization = `Bearer ${token}`;
                return api(originalRequest);
            });
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
            const refreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);

            if (!reduxStore) {
                throw new Error('Store Redux nao inicializada para renovar sessao.');
            }

            const data = await new Promise((resolve, reject) => {
                reduxStore.dispatch(
                    refreshTokenRequest({
                        refreshToken,
                        resolve,
                        reject,
                    }),
                );
            });

            localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, data.token);
            localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, data.refreshToken);
            resolveQueue(null, data.token);

            originalRequest.headers.Authorization = `Bearer ${data.token}`;
            return api(originalRequest);
        } catch (refreshError) {
            resolveQueue(refreshError, null);
            localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
            localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
            return Promise.reject(refreshError);
        } finally {
            isRefreshing = false;
        }
    },
);

export default api;
