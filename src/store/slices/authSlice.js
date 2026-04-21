import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: null,
    refreshToken: null,
    deviceId: null,
    isAuthenticated: false,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, { payload }) => {
            state.loading = false;
            state.user = payload.user;
            state.token = payload.token;
            state.refreshToken = payload.refreshToken;
            state.deviceId = payload.deviceId || null;
            state.isAuthenticated = true;
        },
        loginFailure: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
            state.isAuthenticated = false;
        },
        registerRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        registerSuccess: (state) => {
            state.loading = false;
        },
        registerFailure: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        logoutRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        logoutSuccess: () => initialState,
        refreshTokenRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        refreshTokenSuccess: (state, { payload }) => {
            state.loading = false;
            state.token = payload.token;
            state.refreshToken = payload.refreshToken;
            state.isAuthenticated = true;
        },
        refreshTokenFailure: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
            state.isAuthenticated = false;
        },
        bindDeviceRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        bindDeviceSuccess: (state, { payload }) => {
            state.loading = false;
            state.deviceId = payload.deviceId;
        },
        bindDeviceFailure: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
});

export const {
    loginRequest,
    loginSuccess,
    loginFailure,
    registerRequest,
    registerSuccess,
    registerFailure,
    logoutRequest,
    logoutSuccess,
    refreshTokenRequest,
    refreshTokenSuccess,
    refreshTokenFailure,
    bindDeviceRequest,
    bindDeviceSuccess,
    bindDeviceFailure,
    clearError,
} = authSlice.actions;

export default authSlice.reducer;
