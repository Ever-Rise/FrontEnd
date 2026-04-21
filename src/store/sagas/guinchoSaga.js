import { eventChannel } from 'redux-saga';
import { call, put, takeLatest, take, fork, cancel } from 'redux-saga/effects';
import guinchoService from '../../services/guinchoService';
import { createStompClient } from '../../services/websocket';
import { WS_CHANNELS } from '../../utils/constants';
import {
    fetchGuinchoRequest,
    fetchGuinchoSuccess,
    fetchGuinchoFailure,
    sendCommandRequest,
    sendCommandSuccess,
    sendCommandFailure,
    telemetryReceived,
    listenTelemetryRequest,
} from '../slices/guinchoSlice';

function* fetchGuinchoWorker() {
    try {
        const { data } = yield call(guinchoService.fetchStatus);
        yield put(fetchGuinchoSuccess(data));
    } catch {
        yield put(fetchGuinchoFailure());
    }
}

function* sendCommandWorker({ payload }) {
    try {
        const { data } = yield call(guinchoService.sendCommand, payload);
        yield put(sendCommandSuccess(data));
    } catch {
        yield put(sendCommandFailure());
    }
}

const createTelemetrySocketChannel = () => {
    return eventChannel((emit) => {
        const { client, connect, disconnect } = createStompClient({
            onConnect: () => {
                client.subscribe(WS_CHANNELS.GUINCHO_STATUS_TOPIC, (message) => {
                    emit(JSON.parse(message.body));
                });
            },
        });

        connect();

        return () => {
            disconnect();
        };
    });
};

function* listenTelemetryWorker() {
    const channel = yield call(createTelemetrySocketChannel);
    try {
        while (true) {
            const payload = yield take(channel);
            yield put(telemetryReceived(payload));
        }
    } finally {
        channel.close();
    }
}

let telemetryTask;
function* startTelemetryListener() {
    if (telemetryTask) {
        yield cancel(telemetryTask);
    }
    telemetryTask = yield fork(listenTelemetryWorker);
}

export default function* guinchoSaga() {
    yield takeLatest(fetchGuinchoRequest.type, fetchGuinchoWorker);
    yield takeLatest(sendCommandRequest.type, sendCommandWorker);
    yield takeLatest(listenTelemetryRequest.type, startTelemetryListener);
}
