import { call, put, takeLatest } from 'redux-saga/effects';
import authService from '../../services/authService';
import { STORAGE_KEYS } from '../../utils/constants';
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

const getErrorMessage = (error, fallbackMessage) => {
    return error?.response?.data?.message || fallbackMessage;
};

function* loginSaga({ payload }) {
    try {
        const { data } = yield call(authService.login, payload);

        if (data?.token) {
            localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, data.token);
        }

        if (data?.refreshToken) {
            localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, data.refreshToken);
        }

        yield put(loginSuccess(data));
    } catch (error) {
        yield put(loginFailure(getErrorMessage(error, 'Nao foi possivel realizar o login.')));
    }
}

function* registerSaga({ payload }) {
    try {
        yield call(authService.register, payload);
        yield put(registerSuccess());
    } catch (error) {
        yield put(registerFailure(getErrorMessage(error, 'Nao foi possivel concluir o cadastro.')));
    }
}

function* refreshTokenSaga({ payload }) {
    try {
        const refreshToken = payload?.refreshToken || localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);

        if (!refreshToken) {
            throw new Error('Token de atualizacao ausente.');
        }

        const { data } = yield call(authService.refresh, { refreshToken });

        if (!data?.token) {
            throw new Error('Resposta invalida na renovacao de sessao.');
        }

        localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, data.token);

        if (data?.refreshToken) {
            localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, data.refreshToken);
        }

        yield put(refreshTokenSuccess(data));

        if (typeof payload?.resolve === 'function') {
            payload.resolve(data);
        }
    } catch (error) {
        localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
        localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
        yield put(refreshTokenFailure(getErrorMessage(error, 'Nao foi possivel renovar sua sessao.')));

        if (typeof payload?.reject === 'function') {
            payload.reject(error);
        }
    }
}

function* bindDeviceSaga({ payload }) {
    try {
        const { data } = yield call(authService.bindDevice, payload);
        yield put(bindDeviceSuccess(data));
    } catch (error) {
        yield put(bindDeviceFailure(getErrorMessage(error, 'Nao foi possivel vincular o dispositivo via QR Code.')));
    }
}

function* logoutSaga() {
    try {
        yield call(authService.logout);

        localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
        localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);

        yield put(logoutSuccess());

        window.location.assign('/login');
    } catch (error) {
        yield put(loginFailure(getErrorMessage(error, 'Nao foi possivel encerrar a sessao.')));
    }
}

export default function* authSaga() {
    yield takeLatest(loginRequest.type, loginSaga);
    yield takeLatest(registerRequest.type, registerSaga);
    yield takeLatest(refreshTokenRequest.type, refreshTokenSaga);
    yield takeLatest(bindDeviceRequest.type, bindDeviceSaga);
    yield takeLatest(logoutRequest.type, logoutSaga);
}
