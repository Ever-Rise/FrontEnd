import api from './api';
import { API_ENDPOINTS } from '../utils/constants';

const guinchoService = {
    fetchStatus: () => api.get(API_ENDPOINTS.GUINCHO_STATUS),
    sendCommand: (payload) => api.post(API_ENDPOINTS.GUINCHO_COMMAND, payload),
};

export default guinchoService;
