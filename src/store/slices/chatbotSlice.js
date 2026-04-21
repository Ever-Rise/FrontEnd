import { createSlice } from '@reduxjs/toolkit';

const createMessageId = () => {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        return crypto.randomUUID();
    }

    return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
};

const initialState = {
    messages: [],
    sessionId: null,
    isLoading: false,
    error: null,
};

const chatbotSlice = createSlice({
    name: 'chatbot',
    initialState,
    reducers: {
        sendMessageRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        appendBotChunk: (state, { payload }) => {
            const lastMessage = state.messages[state.messages.length - 1];
            if (lastMessage && lastMessage.role === 'bot' && lastMessage.isStreaming) {
                lastMessage.content += payload.chunk;
                return;
            }

            state.messages.push({
                id: payload.id || createMessageId(),
                role: 'bot',
                content: payload.chunk || '',
                timestamp: payload.timestamp || new Date().toISOString(),
                isStreaming: true,
            });
        },
        messageComplete: (state, { payload }) => {
            state.isLoading = false;
            if (payload?.sessionId) {
                state.sessionId = payload.sessionId;
            }

            const lastMessage = state.messages[state.messages.length - 1];
            if (lastMessage && lastMessage.role === 'bot') {
                lastMessage.isStreaming = false;
            }
        },
        addUserMessage: (state, { payload }) => {
            state.messages.push({
                id: payload.id || createMessageId(),
                role: 'user',
                content: payload.content,
                timestamp: payload.timestamp || new Date().toISOString(),
                isStreaming: false,
            });
        },
        clearSession: () => initialState,
        setError: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },
    },
});

export const {
    sendMessageRequest,
    appendBotChunk,
    messageComplete,
    addUserMessage,
    clearSession,
    setError,
} = chatbotSlice.actions;

export default chatbotSlice.reducer;
