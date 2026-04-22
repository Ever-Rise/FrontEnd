# 03 - Estado global com Redux Toolkit, Saga e Persist

Este documento detalha como o estado global esta organizado, quais contratos existem e como trafegam os dados assincronos.

## 1) Composicao da store

Arquivos principais:

- `src/store/index.js`
- `src/store/rootReducer.js`
- `src/store/rootSaga.js`

Configuracao atual:

- middleware: saga
- persistencia: `redux-persist` com localStorage
- slices registrados: `auth`, `guincho`, `telemetry`, `chatbot`, `ui`

Persistencia (`persistConfig`):

- `key`: `everrise`
- `whitelist`: `auth`, `ui`
- `blacklist`: `guincho`, `telemetry`, `chatbot`

## 2) Contrato de fluxo de estado

Padrao adotado no projeto:

1. UI dispara `algumaActionRequest`.
2. Saga escuta e executa side effect.
3. Saga dispara `algumaActionSuccess` ou `algumaActionFailure`.
4. Reducer aplica alteracao de estado.
5. UI re-renderiza com base no novo estado.

Vantagens:

- previsibilidade
- rastreabilidade
- centralizacao de erro e retry

## 3) Dominio de autenticacao (`auth`)

Slice: `src/store/slices/authSlice.js`

Estado principal:

- `user`
- `token`
- `refreshToken`
- `deviceId`
- `isAuthenticated`
- `loading`
- `error`

Acoes:

- login: `loginRequest|loginSuccess|loginFailure`
- cadastro: `registerRequest|registerSuccess|registerFailure`
- logout: `logoutRequest|logoutSuccess`
- refresh: `refreshTokenRequest|refreshTokenSuccess|refreshTokenFailure`
- vinculo: `bindDeviceRequest|bindDeviceSuccess|bindDeviceFailure`
- utilitario: `clearError`

Saga: `src/store/sagas/authSaga.js`

Fluxos criticos:

1. `loginSaga`:
   - chama `authService.login`
   - salva token e refresh token no localStorage
   - despacha `loginSuccess`
2. `refreshTokenSaga`:
   - acionada no fluxo de interceptor `401`
   - renova token via `authService.refresh`
   - atualiza storage e estado
3. `bindDeviceSaga`:
   - chama `authService.bindDevice`
   - persiste `deviceId` no estado
4. `logoutSaga`:
   - chama `authService.logout`
   - remove tokens
   - reseta estado auth
   - redireciona para `/login`

## 4) Dominio do guincho (`guincho`)

Slice: `src/store/slices/guinchoSlice.js`

Estado principal:

- `id`
- `status`
- `battery`
- `connectionQuality`
- `isMoving`
- `lastCommand`
- `loading`
- `error`

Eventos relevantes:

- `status_update`
- `bateria_low`
- `obstaculo_detectado`
- `sobrecarga_detectada`

Saga: `src/store/sagas/guinchoSaga.js`

Responsabilidades:

- carregar status inicial (`fetchGuinchoSaga`)
- enviar comandos (`sendCommandSaga`)
- manter stream de telemetria (`listenTelemetrySaga`)

Resiliencia:

- reconexao com backoff exponencial
- tentativas: 1s, 2s, 4s, 8s, 16s (max 5)

## 5) Dominio de telemetria (`telemetry`)

Slice: `src/store/slices/telemetrySlice.js`

Estado principal:

- `fsrReading`
- `obstacleDetected`
- `anomalyAlert`
- `alertHistory` (max 50)
- `wsConnected`
- `lastUpdated`

Saga: `src/store/sagas/telemetrySaga.js`

Papel atual:

- camada de compatibilidade
- converte `connectWebSocketRequest` em `listenTelemetryRequest` do dominio guincho

## 6) Dominio de chatbot (`chatbot`)

Slice: `src/store/slices/chatbotSlice.js`

Estado principal:

- `messages`
- `sessionId`
- `isLoading`
- `error`

Saga: `src/store/sagas/chatbotSaga.js`

Fluxo de streaming:

1. cria `eventChannel`
2. recebe chunks do service SSE
3. despacha `appendBotChunk`
4. finaliza com `messageComplete`
5. em erro, dispara `setError`

## 7) Dominio de UI (`ui`)

Slice: `src/store/slices/uiSlice.js`

Estado principal:

- `theme`
- `sidebarOpen`
- `activeModal`
- `notifications`

Pontos importantes:

- notifications usam `crypto.randomUUID()` por default
- slice `ui` e persistido

## 8) Interceptor HTTP e renovacao de sessao

Arquivo: `src/services/api.js`

Comportamento:

1. Em request, injeta header `Authorization` quando existir token.
2. Em `401`, verifica se request pode tentar refresh.
3. Se refresh ja estiver em andamento, request entra na fila.
4. Refresh e delegado para saga via dispatch de `refreshTokenRequest`.
5. Quando refresh conclui, fila e drenada com novo token.

Isso evita tempestade de refresh concorrente.

## 9) Fluxos ponta a ponta (resumo)

Login:

1. tela -> `loginRequest`
2. saga -> `authService.login`
3. success -> `loginSuccess`
4. estado atualizado -> UI reage

Telemetria:

1. UI/hook -> `listenTelemetryRequest`
2. saga abre canal STOMP
3. evento recebido -> normalize + dispatch
4. slices `guincho` e `telemetry` atualizam

Chatbot:

1. UI -> `sendMessageRequest`
2. saga abre stream SSE
3. chunk -> `appendBotChunk`
4. fim -> `messageComplete`

## 10) Pontos de atencao atuais

1. `src/hooks/useAuth.js` referencia `qrCodeBindRequest`, mas o slice expoe `bindDeviceRequest`.
2. `src/router/PrivateRoute.jsx` redireciona para `/vinculo-dispositivo` e essa rota precisa existir no router.

Esses itens devem ser tratados como hardening tecnico para evitar regressao em auth e navegacao.
