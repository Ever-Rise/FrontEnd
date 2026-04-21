import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    fsrReading: null,
    obstacleDetected: false,
    anomalyAlert: false,
    alertHistory: [],
    wsConnected: false,
    lastUpdated: null,
};

const buildAlertEntry = (type, message, payload) => ({
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    type,
    message,
    timestamp: new Date().toISOString(),
    payload,
});

const telemetrySlice = createSlice({
    name: 'telemetry',
    initialState,
    reducers: {
        connectWebSocketRequest: () => { },
        disconnectWebSocketRequest: () => { },
        wsConnected: (state) => {
            state.wsConnected = true;
        },
        wsDisconnected: (state) => {
            state.wsConnected = false;
        },
        receivedTelemetry: (state, { payload }) => {
            state.lastUpdated = payload.timestamp || new Date().toISOString();

            const eventType = payload.type || payload.event;

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

            if (eventType === 'obstaculo_detectado') {
                state.obstacleDetected = true;
                state.alertHistory = [
                    buildAlertEntry('obstaculo_detectado', 'Obstaculo detectado pelo guincho.', payload),
                    ...state.alertHistory,
                ].slice(0, 50);
            }

            if (eventType === 'sobrecarga_detectada') {
                state.anomalyAlert = true;
                state.alertHistory = [
                    buildAlertEntry('sobrecarga_detectada', 'Sobrecarga detectada no sistema.', payload),
                    ...state.alertHistory,
                ].slice(0, 50);
            }

            if (eventType === 'bateria_low') {
                state.alertHistory = [
                    buildAlertEntry('bateria_low', 'Bateria em nivel baixo.', payload),
                    ...state.alertHistory,
                ].slice(0, 50);
            }
        },
        clearAlertHistory: (state) => {
            state.alertHistory = [];
        },
    },
});

export const {
    connectWebSocketRequest,
    disconnectWebSocketRequest,
    wsConnected,
    wsDisconnected,
    receivedTelemetry,
    clearAlertHistory,
} = telemetrySlice.actions;

export default telemetrySlice.reducer;
