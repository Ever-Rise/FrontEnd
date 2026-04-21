import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { registerStore } from '../services/api';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const persistConfig = {
    key: 'everrise',
    storage,
    whitelist: ['auth', 'ui'],
    blacklist: ['guincho', 'telemetry', 'chatbot'],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(sagaMiddleware),
});

registerStore(store);
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
