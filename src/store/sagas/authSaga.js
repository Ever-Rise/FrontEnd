import { call, put, takeLatest } from 'redux-saga/effects';
import authService from '../../services/authService';
import {
    loginRequest,
    loginSuccess,
    loginFailure,
    registerRequest,
    registerSuccess,
    registerFailure,
    logoutRequest,
    logoutSuccess,
    refreshTokenRequest,
    refreshTokenSuccess,
    refreshTokenFailure,
    bindDeviceRequest,
    bindDeviceSuccess,
    bindDeviceFailure,
} from '../slices/authSlice';

function* loginWorker({ payload }) {
    try {
        const { data } = yield call(authService.login, payload);
        yield put(loginSuccess(data));
    } catch (error) {
        yield put(loginFailure(error.response?.data?.message || 'Nao foi possivel realizar o login.'));
    }
}

function* registerWorker({ payload }) {
    try {
        yield call(authService.register, payload);
        yield put(registerSuccess());
    } catch (error) {
        yield put(registerFailure(error.response?.data?.message || 'Nao foi possivel concluir o cadastro.'));
    }
}

function* logoutWorker() {
    try {
        yield call(authService.logout);
        yield put(logoutSuccess());
        window.location.assign('/login');
    } catch (error) {
        yield put(loginFailure(error.response?.data?.message || 'Nao foi possivel encerrar a sessao.'));
    }
}

function* refreshTokenWorker({ payload }) {
    try {
        const { data } = yield call(authService.refresh, payload);
        yield put(refreshTokenSuccess(data));
    } catch (error) {
        yield put(refreshTokenFailure(error.response?.data?.message || 'Sua sessao expirou. Faça login novamente.'));
    }
}

function* bindDeviceWorker({ payload }) {
    try {
        const { data } = yield call(authService.bindDevice, payload);
        yield put(bindDeviceSuccess(data));
    } catch (error) {
        yield put(bindDeviceFailure(error.response?.data?.message || 'Nao foi possivel vincular o dispositivo por QR Code.'));
    }
}

export default function* authSaga() {
    yield takeLatest(loginRequest.type, loginWorker);
    yield takeLatest(registerRequest.type, registerWorker);
    yield takeLatest(logoutRequest.type, logoutWorker);
    yield takeLatest(refreshTokenRequest.type, refreshTokenWorker);
    yield takeLatest(bindDeviceRequest.type, bindDeviceWorker);
}
