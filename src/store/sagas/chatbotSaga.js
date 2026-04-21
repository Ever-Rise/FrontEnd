import { eventChannel } from 'redux-saga';
import { call, put, take, takeLatest } from 'redux-saga/effects';
import chatbotService from '../../services/chatbotService';
import {
    sendMessageRequest,
    appendBotChunk,
    messageComplete,
    setError,
} from '../slices/chatbotSlice';

const createChatStreamChannel = ({ message, sessionId }) => {
    return eventChannel((emit) => {
        const stream = chatbotService.streamMessage({
            message,
            sessionId,
            onToken: (chunk) => emit({ type: 'chunk', chunk }),
            onError: (error) => emit({ type: 'error', error }),
            onComplete: (metadata) => emit({ type: 'done', metadata }),
        });

        return () => {
            stream?.close?.();
        };
    });
};

function* sendMessageWorker({ payload }) {
    const channel = yield call(createChatStreamChannel, payload);
    try {
        let accumulatedMessage = '';

        while (true) {
            const event = yield take(channel);

            if (event.type === 'chunk') {
                accumulatedMessage += event.chunk;
                yield put(appendBotChunk({ chunk: event.chunk }));
            }

            if (event.type === 'done') {
                yield put(
                    messageComplete({
                        sessionId: event.metadata?.sessionId || payload.sessionId || null,
                        content: accumulatedMessage,
                    }),
                );
                break;
            }

            if (event.type === 'error') {
                throw event.error || new Error('Falha na conexao com o chatbot.');
            }
        }
    } catch {
        yield put(setError('Nao foi possivel processar sua mensagem no momento. Tente novamente.'));
    } finally {
        channel.close();
    }
}

export default function* chatbotSaga() {
    yield takeLatest(sendMessageRequest.type, sendMessageWorker);
}
