import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: null,
    status: 'DESLIGADO',
    battery: 0,
    connectionQuality: 0,
    isMoving: false,
    lastCommand: null,
    loading: false,
    error: null,
};

const guinchoSlice = createSlice({
    name: 'guincho',
    initialState,
    reducers: {
        fetchGuinchoRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchGuinchoSuccess: (state, { payload }) => {
            state.loading = false;
            state.id = payload.id ?? state.id;
            state.status = payload.status ?? state.status;
            state.battery = payload.battery ?? state.battery;
            state.connectionQuality = payload.connectionQuality ?? state.connectionQuality;
            state.isMoving = payload.isMoving ?? state.isMoving;
        },
        fetchGuinchoFailure: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        sendCommandRequest: (state, { payload }) => {
            state.loading = true;
            state.error = null;
            state.lastCommand = payload;
        },
        sendCommandSuccess: (state, { payload }) => {
            state.loading = false;
            state.status = payload.status ?? state.status;
            state.isMoving = payload.isMoving ?? state.isMoving;
            state.lastCommand = payload.command ?? state.lastCommand;
        },
        sendCommandFailure: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        updateStatusFromTelemetry: (state, { payload }) => {
            state.status = payload.status ?? state.status;
            state.isMoving = payload.isMoving ?? state.isMoving;
        },
        updateBattery: (state, { payload }) => {
            state.battery = payload;
        },
        updateConnectionQuality: (state, { payload }) => {
            state.connectionQuality = payload;
        },
        setEmergency: (state) => {
            state.status = 'EMERGENCIA';
            state.isMoving = false;
        },
    },
});

export const {
    fetchGuinchoRequest,
    fetchGuinchoSuccess,
    fetchGuinchoFailure,
    sendCommandRequest,
    sendCommandSuccess,
    sendCommandFailure,
    updateStatusFromTelemetry,
    updateBattery,
    updateConnectionQuality,
    setEmergency,
} = guinchoSlice.actions;

export default guinchoSlice.reducer;
