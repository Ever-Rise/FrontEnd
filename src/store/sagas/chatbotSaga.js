import { eventChannel } from 'redux-saga';
import { call, put, take, takeLatest } from 'redux-saga/effects';
import chatbotService from '../../services/chatbotService';
import {
    sendMessageRequest,
    appendBotChunk,
    sendMessageSuccess,
    sendMessageFailure,
} from '../slices/chatbotSlice';

const createChatStreamChannel = ({ message, sessionId }) => {
    return eventChannel((emit) => {
        const stream = chatbotService.sendMessageSSE({
            message,
            sessionId,
            onMessage: (chunk) => emit({ type: 'chunk', chunk }),
            onError: (error) => emit({ type: 'error', error }),
            onComplete: () => emit({ type: 'done' }),
        });

        return () => {
            stream?.close?.();
        };
    });
};

function* sendMessageWorker({ payload }) {
    const channel = yield call(createChatStreamChannel, payload);
    try {
        while (true) {
            const event = yield take(channel);

            if (event.type === 'chunk') {
                yield put(appendBotChunk({ chunk: event.chunk }));
            }

            if (event.type === 'done') {
                yield put(sendMessageSuccess({ sessionId: payload.sessionId }));
                break;
            }

            if (event.type === 'error') {
                throw new Error('Falha na conexao com o chatbot.');
            }
        }
    } catch (error) {
        yield put(sendMessageFailure(error.message || 'Falha no atendimento virtual.'));
    } finally {
        channel.close();
    }
}

export default function* chatbotSaga() {
    yield takeLatest(sendMessageRequest.type, sendMessageWorker);
}
