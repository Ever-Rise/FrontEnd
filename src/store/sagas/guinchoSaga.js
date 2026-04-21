import { eventChannel } from 'redux-saga';
import { call, put, takeLatest, take, cancelled, delay, select } from 'redux-saga/effects';
import guinchoService from '../../services/guinchoService';
import { createStompClient } from '../../services/websocket';
import {
    fetchGuinchoRequest,
    fetchGuinchoSuccess,
    fetchGuinchoFailure,
    sendCommandRequest,
    sendCommandSuccess,
    sendCommandFailure,
    listenTelemetryRequest,
    updateBattery,
    updateConnectionQuality,
    updateStatusFromTelemetry,
    setEmergency,
} from '../slices/guinchoSlice';
import { receivedTelemetry, wsConnected, wsDisconnected } from '../slices/telemetrySlice';

const MAX_RETRIES = 5;

const getErrorMessage = (error, fallbackMessage) => {
    return error?.response?.data?.message || fallbackMessage;
};

function createTelemetryChannel(guinchoId) {
    return eventChannel((emit) => {
        const destination = `/ws/guincho/${guinchoId}`;

        const { client, connect, disconnect } = createStompClient({
            onConnect: () => {
                emit({ type: 'connected' });

                client.subscribe(destination, (message) => {
                    try {
                        const payload = JSON.parse(message.body);
                        emit({ type: 'message', payload });
                    } catch {
                        emit({ type: 'error', error: new Error('Evento de telemetria invalido recebido.') });
                    }
                });
            },
            onError: () => {
                emit({ type: 'error', error: new Error('Falha na conexao STOMP.') });
            },
        });

        connect();

        return () => {
            disconnect();
        };
    });
}

function normalizeGuinchoStatus(eventType, payload) {
    if (eventType === 'status_update') {
        return {
            status: payload.status,
            isMoving: payload.isMoving,
        };
    }

    if (eventType === 'obstaculo_detectado' || eventType === 'sobrecarga_detectada') {
        return {
            status: 'ERRO',
            isMoving: false,
        };
    }

    return null;
}

function* handleTelemetryEvent(payload) {
    const eventType = payload?.type || payload?.event;

    if (payload?.connectionQuality !== undefined) {
        yield put(updateConnectionQuality(payload.connectionQuality));
    }

    if (payload?.battery !== undefined) {
        yield put(updateBattery(payload.battery));
    }

    const statusData = normalizeGuinchoStatus(eventType, payload);
    if (statusData) {
        yield put(updateStatusFromTelemetry(statusData));
    }

    if (eventType === 'sobrecarga_detectada') {
        yield put(setEmergency());
    }

    yield put(receivedTelemetry(payload));
}

function* fetchGuinchoSaga() {
    try {
        const { data } = yield call(guinchoService.fetchStatus);
        yield put(fetchGuinchoSuccess(data));
    } catch (error) {
        yield put(fetchGuinchoFailure(getErrorMessage(error, 'Nao foi possivel carregar o status do guincho.')));
    }
}

function* sendCommandSaga({ payload }) {
    try {
        const { data } = yield call(guinchoService.sendCommand, payload);
        yield put(sendCommandSuccess(data));
    } catch (error) {
        yield put(sendCommandFailure(getErrorMessage(error, 'Nao foi possivel enviar o comando ao guincho.')));
    }
}

function* runTelemetryStream(guinchoId) {
    const channel = yield call(createTelemetryChannel, guinchoId);

    try {
        while (true) {
            const event = yield take(channel);

            if (event.type === 'connected') {
                yield put(wsConnected());
                continue;
            }

            if (event.type === 'error') {
                throw event.error;
            }

            yield call(handleTelemetryEvent, event.payload);
        }
    } finally {
        if (yield cancelled()) {
            yield put(wsDisconnected());
        }

        channel.close();
    }
}

function* listenTelemetrySaga({ payload }) {
    const guinchoId = payload?.id || (yield select((state) => state.guincho.id));

    if (!guinchoId) {
        yield put(fetchGuinchoFailure('ID do guincho nao informado para iniciar telemetria.'));
        return;
    }

    let retries = 0;

    while (true) {
        try {
            yield call(runTelemetryStream, guinchoId);
            return;
        } catch (error) {
            yield put(wsDisconnected());

            if (retries >= MAX_RETRIES) {
                yield put(
                    fetchGuinchoFailure(
                        getErrorMessage(error, 'Falha na telemetria do guincho apos varias tentativas.'),
                    ),
                );
                return;
            }

            const retryDelay = 1000 * 2 ** retries;
            retries += 1;
            yield delay(retryDelay);
        }
    }
}

export default function* guinchoSaga() {
    yield takeLatest(fetchGuinchoRequest.type, fetchGuinchoSaga);
    yield takeLatest(sendCommandRequest.type, sendCommandSaga);
    yield takeLatest(listenTelemetryRequest.type, listenTelemetrySaga);
}
