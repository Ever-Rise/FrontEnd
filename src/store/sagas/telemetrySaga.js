import { eventChannel } from 'redux-saga';
import { call, put, takeLatest, take, fork, cancel } from 'redux-saga/effects';
import { createStompClient } from '../../services/websocket';
import { WS_CHANNELS } from '../../utils/constants';
import { connectWebSocketRequest, handleTelemetryEvent } from '../slices/telemetrySlice';

const createTelemetryChannel = () => {
    return eventChannel((emit) => {
        const { client, connect, disconnect } = createStompClient({
            onConnect: () => {
                client.subscribe(WS_CHANNELS.TELEMETRY_TOPIC, (message) => {
                    const payload = JSON.parse(message.body);
                    emit({ ...payload, lastUpdated: new Date().toISOString() });
                });

                client.subscribe(WS_CHANNELS.ALERTS_TOPIC, (message) => {
                    const payload = JSON.parse(message.body);
                    emit({ anomalyAlert: payload, lastUpdated: new Date().toISOString() });
                });
            },
        });

        connect();

        return () => {
            disconnect();
        };
    });
};

function* telemetryStreamWorker() {
    const channel = yield call(createTelemetryChannel);
    try {
        while (true) {
            const event = yield take(channel);
            yield put(handleTelemetryEvent(event));
        }
    } finally {
        channel.close();
    }
}

let telemetryTask;
function* connectWebSocketWorker() {
    if (telemetryTask) {
        yield cancel(telemetryTask);
    }
    telemetryTask = yield fork(telemetryStreamWorker);
}

export default function* telemetrySaga() {
    yield takeLatest(connectWebSocketRequest.type, connectWebSocketWorker);
}
