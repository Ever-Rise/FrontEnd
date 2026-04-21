# 03 - Estado global (Redux Toolkit + Saga + Persist)

Este documento descreve em detalhes o setup atual do estado global e o que foi implementado.

## O que foi implementado

- Store com Redux Toolkit + Saga + Persist em `src/store/index.js`.
- Persistencia com `redux-persist`:
  - storage: localStorage
  - whitelist: `auth`, `ui`
  - blacklist: `guincho`, `telemetry`, `chatbot`
- Integracao do interceptor 401 com saga de refresh via `registerStore` em `src/services/api.js`.
- Slices completos para auth, guincho, telemetry, chatbot e ui.
- Sagas completas para auth, guincho, chatbot e telemetry.
- Telemetria STOMP via `eventChannel` com reconexao exponencial.
- Chatbot streaming SSE por chunks.

## Composicao da store

- `src/store/rootReducer.js`: combina reducers.
- `src/store/rootSaga.js`: executa watchers de todos os modulos.
- `src/store/index.js`: cria middleware saga, aplica persistReducer e exporta `store` e `persistor`.

## Persistencia

Persistido:
- `auth`
- `ui`

Nao persistido:
- `guincho`
- `telemetry`
- `chatbot`

Racional:
- Dados de equipamento e telemetria sao volateis e devem refletir o estado corrente do backend.
- Sessao e preferencias de interface precisam sobreviver a refresh de pagina.

## Slice de autenticacao

Arquivo: `src/store/slices/authSlice.js`

Estado:
- user
- token
- refreshToken
- deviceId
- isAuthenticated
- loading
- error

Acoes:
- loginRequest/loginSuccess/loginFailure
- registerRequest/registerSuccess/registerFailure
- logoutRequest/logoutSuccess
- refreshTokenRequest/refreshTokenSuccess/refreshTokenFailure
- bindDeviceRequest/bindDeviceSuccess/bindDeviceFailure
- clearError

Saga: `src/store/sagas/authSaga.js`

Fluxos:
1. loginSaga:
   - chama `POST /auth/login`
   - salva token/refreshToken no localStorage
   - despacha loginSuccess
2. refreshTokenSaga:
   - disparada pelo interceptor 401 em `src/services/api.js`
   - chama `POST /auth/refresh`
   - atualiza tokens e resolve fila de requests
3. bindDeviceSaga:
   - chama `POST /auth/device/bind`
   - salva `deviceId` no estado
4. logoutSaga:
   - chama `POST /auth/logout`
   - limpa tokens
   - limpa estado auth via logoutSuccess
   - redireciona para `/login`

Todos os fluxos:
- usam try/catch
- retornam mensagens de erro em pt-BR

## Slice do guincho

Arquivo: `src/store/slices/guinchoSlice.js`

Estado:
- id
- status (`DESLIGADO|PRONTO|EM_MOVIMENTO|PAUSADO|ERRO|EMERGENCIA`)
- battery
- connectionQuality
- isMoving
- lastCommand
- loading
- error

Acoes:
- fetchGuinchoRequest/Success/Failure
- sendCommandRequest/Success/Failure
- listenTelemetryRequest
- updateStatusFromTelemetry
- updateBattery
- updateConnectionQuality
- setEmergency

Comportamento critico:
- `setEmergency` muda status para `EMERGENCIA` imediatamente, sem esperar retorno de saga.

Saga: `src/store/sagas/guinchoSaga.js`

Watchers:
- `takeLatest(fetchGuinchoRequest, fetchGuinchoSaga)`
- `takeLatest(sendCommandRequest, sendCommandSaga)`
- `takeLatest(listenTelemetryRequest, listenTelemetrySaga)`

Telemetria via eventChannel:
- Assina canal STOMP: `/ws/guincho/{id}`
- Eventos tratados:
  - `status_update`
  - `bateria_low`
  - `obstaculo_detectado`
  - `sobrecarga_detectada`

Reconexao:
- Backoff exponencial com max 5 retries:
  - 1s
  - 2s
  - 4s
  - 8s
  - 16s

## Slice de telemetria

Arquivo: `src/store/slices/telemetrySlice.js`

Estado:
- fsrReading
- obstacleDetected
- anomalyAlert
- alertHistory (limite 50)
- wsConnected
- lastUpdated

Acoes:
- connectWebSocketRequest
- disconnectWebSocketRequest
- wsConnected
- wsDisconnected
- receivedTelemetry
- clearAlertHistory

Regra de historico:
- Sempre que entra alerta, aplica `slice(0, 50)` para manter no maximo 50 itens.

Saga: `src/store/sagas/telemetrySaga.js`

Papel atual:
- Ponte de compatibilidade para hooks legados.
- `connectWebSocketRequest` dispara `listenTelemetryRequest` do guincho.

## Slice de chatbot

Arquivo: `src/store/slices/chatbotSlice.js`

Estado:
- messages
- sessionId
- isLoading
- error

Acoes:
- sendMessageRequest
- appendBotChunk
- messageComplete
- addUserMessage
- clearSession
- setError

Saga: `src/store/sagas/chatbotSaga.js`

Fluxo:
1. chama `chatbotService.streamMessage()`
2. a cada token SSE, despacha `appendBotChunk`
3. ao encerrar stream, despacha `messageComplete`
4. em erro, despacha `setError` com mensagem pt-BR

## Slice de UI

Arquivo: `src/store/slices/uiSlice.js`

Estado:
- theme
- sidebarOpen
- activeModal
- notifications

Acoes:
- toggleTheme
- toggleSidebar
- openModal
- closeModal
- addNotification
- removeNotification

## Interceptor HTTP e refresh de token

Arquivo: `src/services/api.js`

Resumo:
- Request interceptor injeta Authorization quando ha token.
- Response interceptor trata 401.
- Se refresh ja estiver em andamento, requests entram em fila.
- O refresh e delegado para `refreshTokenSaga` via dispatch de `refreshTokenRequest`.
- Ao concluir refresh, fila e resolvida com novo token.

## Fluxo de ponta a ponta (exemplo)

Exemplo login:
1. tela despacha `loginRequest`
2. authSaga chama service
3. response gera `loginSuccess`
4. reducer atualiza estado
5. auth/ui persistem em localStorage

Exemplo telemetria:
1. hook dispara `listenTelemetryRequest`
2. guinchoSaga conecta STOMP
3. eventos entram no channel
4. saga atualiza slices `guincho` e `telemetry`
5. dashboard reage automaticamente aos novos dados

## Pontos de atencao para manutencao

- Em `src/hooks/useAuth.js`, o hook usa `qrCodeBindRequest`; no slice atual a acao e `bindDeviceRequest`.
- `PrivateRoute` redireciona para `/vinculo-dispositivo`, rota que precisa existir no router para evitar navegacao quebrada.
- `uiSlice` usa `crypto.randomUUID()` para notificacao; garantir ambiente com suporte ou fallback se necessario.
