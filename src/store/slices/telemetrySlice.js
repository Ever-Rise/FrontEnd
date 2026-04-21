import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    fsrReading: null,
    obstacleDetected: false,
    anomalyAlert: false,
    alertHistory: [],
    wsConnected: false,
    lastUpdated: null,
};

const telemetrySlice = createSlice({
    name: 'telemetry',
    initialState,
    reducers: {
        wsConnected: (state) => {
            state.wsConnected = true;
        },
        wsDisconnected: (state) => {
            state.wsConnected = false;
        },
        receivedTelemetry: (state, { payload }) => {
            state.lastUpdated = payload.timestamp || new Date().toISOString();

            if (payload.fsrReading !== undefined) {
                state.fsrReading = payload.fsrReading;
            }

            if (payload.obstacleDetected !== undefined) {
                state.obstacleDetected = payload.obstacleDetected;
            }

            if (payload.anomalyAlert !== undefined) {
                state.anomalyAlert = Boolean(payload.anomalyAlert);
            }

            if (payload.alertEntry) {
                state.alertHistory = [payload.alertEntry, ...state.alertHistory].slice(0, 50);
            }
        },
        clearAlertHistory: (state) => {
            state.alertHistory = [];
        },
    },
});

export const { wsConnected, wsDisconnected, receivedTelemetry, clearAlertHistory } = telemetrySlice.actions;

export default telemetrySlice.reducer;
