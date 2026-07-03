import axios from 'axios';
import { STORAGE_KEYS } from '../utils/constants';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://157.230.214.231:8080',
    timeout: 15000,
});

export const registerStore = () => {};

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
        if (error.response?.status === 401) {
            localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
            localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);

            if (window.location.pathname !== '/login') {
                window.location.assign('/login');
            }
        }

        return Promise.reject(error);
    },
);

export default api;
