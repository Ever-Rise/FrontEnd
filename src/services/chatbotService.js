import { API_ENDPOINTS } from '../utils/constants';

const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://157.230.214.231:8080';

const streamMessage = ({ message, sessionId, onToken, onError, onComplete }) => {
    let resolvedSessionId = sessionId || null;

    const closeAndComplete = () => {
        onComplete?.({ sessionId: resolvedSessionId });
        eventSource.close();
    };

    const url = new URL(`${baseUrl}${API_ENDPOINTS.CHATBOT_SEND}/stream`);
    url.searchParams.set('message', message);
    if (sessionId) {
        url.searchParams.set('sessionId', sessionId);
    }

    const eventSource = new EventSource(url.toString(), {
        withCredentials: false,
    });

    eventSource.onmessage = (event) => {
        const rawData = event.data;

        if (!rawData || rawData === '[DONE]') {
            closeAndComplete();
            return;
        }

        try {
            const parsed = JSON.parse(rawData);
            const token = parsed.chunk || parsed.token || parsed.content || '';

            if (parsed.sessionId) {
                resolvedSessionId = parsed.sessionId;
            }

            if (token) {
                onToken?.(token);
            }

            if (parsed.done) {
                closeAndComplete();
            }
            return;
        } catch {
            onToken?.(rawData);
        }
    };

    eventSource.onerror = (event) => {
        onError?.(event);
        eventSource.close();
    };

    eventSource.addEventListener('done', () => {
        closeAndComplete();
    });

    return eventSource;
};

const chatbotService = {
    streamMessage,
    sendMessageSSE: ({ message, sessionId, onMessage, onError, onComplete }) => {
        return streamMessage({
            message,
            sessionId,
            onToken: onMessage,
            onError,
            onComplete: () => onComplete?.(),
        });
    },
};

export default chatbotService;
