import { put, select, takeLatest } from 'redux-saga/effects';
import {
    connectWebSocketRequest,
    disconnectWebSocketRequest,
    wsDisconnected,
} from '../slices/telemetrySlice';
import { listenTelemetryRequest } from '../slices/guinchoSlice';

function* connectWebSocketSaga({ payload }) {
    const guinchoId = payload?.id || (yield select((state) => state.guincho.id));
    yield put(listenTelemetryRequest({ id: guinchoId }));
}

function* disconnectWebSocketSaga() {
    yield put(wsDisconnected());
}

export default function* telemetrySaga() {
    yield takeLatest(connectWebSocketRequest.type, connectWebSocketSaga);
    yield takeLatest(disconnectWebSocketRequest.type, disconnectWebSocketSaga);
}
