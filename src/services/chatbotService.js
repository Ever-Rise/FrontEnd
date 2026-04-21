import { API_ENDPOINTS } from '../utils/constants';

const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

const chatbotService = {
    sendMessageSSE: ({ message, sessionId, onMessage, onError, onComplete }) => {
        const url = new URL(`${baseUrl}${API_ENDPOINTS.CHATBOT_SEND}/stream`);
        url.searchParams.set('message', message);
        if (sessionId) {
            url.searchParams.set('sessionId', sessionId);
        }

        const eventSource = new EventSource(url.toString(), {
            withCredentials: false,
        });

        eventSource.onmessage = (event) => {
            onMessage?.(event.data);
        };

        eventSource.onerror = (event) => {
            onError?.(event);
            eventSource.close();
        };

        eventSource.addEventListener('done', () => {
            onComplete?.();
            eventSource.close();
        });

        return eventSource;
    },
};

export default chatbotService;
