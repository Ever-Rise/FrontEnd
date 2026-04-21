export const EQUIPMENT_STATES = Object.freeze({
    DESLIGADO: 'DESLIGADO',
    PRONTO: 'PRONTO',
    EM_MOVIMENTO: 'EM_MOVIMENTO',
    PAUSADO: 'PAUSADO',
    ERRO: 'ERRO',
    EMERGENCIA: 'EMERGENCIA',
});

export const API_ENDPOINTS = Object.freeze({
    AUTH_LOGIN: '/auth/login',
    AUTH_REGISTER: '/auth/register',
    AUTH_LOGOUT: '/auth/logout',
    AUTH_REFRESH: '/auth/refresh',
    AUTH_BIND_DEVICE: '/auth/device/bind',
    GUINCHO_STATUS: '/guincho/status',
    GUINCHO_COMMAND: '/guincho/command',
    CHECKOUT_CREATE: '/checkout/create',
    CHATBOT_SEND: '/chatbot/message',
});

export const WS_CHANNELS = Object.freeze({
    TELEMETRY_TOPIC: '/topic/telemetria',
    ALERTS_TOPIC: '/topic/alertas',
    GUINCHO_STATUS_TOPIC: '/topic/guincho/status',
    TELEMETRY_SEND: '/app/telemetria',
});

export const STORAGE_KEYS = Object.freeze({
    PERSIST_ROOT: 'persist:everrise',
    AUTH_TOKEN: 'everrise_token',
    REFRESH_TOKEN: 'everrise_refresh_token',
});
