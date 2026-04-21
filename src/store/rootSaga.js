import { all, fork } from 'redux-saga/effects';
import authSaga from './sagas/authSaga';
import guinchoSaga from './sagas/guinchoSaga';
import telemetrySaga from './sagas/telemetrySaga';
import chatbotSaga from './sagas/chatbotSaga';

export default function* rootSaga() {
    yield all([
        fork(authSaga),
        fork(guinchoSaga),
        fork(telemetrySaga),
        fork(chatbotSaga),
    ]);
}
