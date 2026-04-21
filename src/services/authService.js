import api from './api';
import { API_ENDPOINTS } from '../utils/constants';

const authService = {
    login: (payload) => api.post(API_ENDPOINTS.AUTH_LOGIN, payload),
    register: (payload) => api.post(API_ENDPOINTS.AUTH_REGISTER, payload),
    logout: () => api.post(API_ENDPOINTS.AUTH_LOGOUT),
    refresh: (payload) => api.post(API_ENDPOINTS.AUTH_REFRESH, payload),
    bindDevice: (payload) => api.post(API_ENDPOINTS.AUTH_BIND_DEVICE, payload),
};

export default authService;
