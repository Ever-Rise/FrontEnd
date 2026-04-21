import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: 'light',
    sidebarOpen: true,
    activeModal: null,
    notifications: [],
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
        toggleSidebar: (state) => {
            state.sidebarOpen = !state.sidebarOpen;
        },
        openModal: (state, { payload }) => {
            state.activeModal = payload;
        },
        closeModal: (state) => {
            state.activeModal = null;
        },
        addNotification: (state, { payload }) => {
            state.notifications.push({
                id: payload.id || crypto.randomUUID(),
                type: payload.type,
                message: payload.message,
                duration: payload.duration ?? 4000,
            });
        },
        removeNotification: (state, { payload }) => {
            state.notifications = state.notifications.filter((notification) => notification.id !== payload);
        },
    },
});

export const {
    toggleTheme,
    toggleSidebar,
    openModal,
    closeModal,
    addNotification,
    removeNotification,
} = uiSlice.actions;

export default uiSlice.reducer;
