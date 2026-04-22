# 05 - Integracoes, servicos e protocolos

Este documento descreve como o frontend conversa com backend e canais em tempo real.

## 1) Visao geral da camada de services

Pasta: `src/services`.

Arquivos principais:

- `api.js`: cliente Axios e interceptor de auth
- `authService.js`: endpoints de autenticacao
- `guinchoService.js`: status e comandos de guincho
- `chatbotService.js`: streaming SSE do chatbot
- `websocket.js`: cliente STOMP com SockJS

Regra de arquitetura:

- nenhuma pagina deve chamar endpoint direto
- toda chamada externa deve passar por `services`

## 2) Endpoints e constantes

Arquivo: `src/utils/constants.js`.

Contratos mapeados:

- `API_ENDPOINTS.AUTH_LOGIN`
- `API_ENDPOINTS.AUTH_REGISTER`
- `API_ENDPOINTS.AUTH_LOGOUT`
- `API_ENDPOINTS.AUTH_REFRESH`
- `API_ENDPOINTS.AUTH_BIND_DEVICE`
- `API_ENDPOINTS.GUINCHO_STATUS`
- `API_ENDPOINTS.GUINCHO_COMMAND`
- `API_ENDPOINTS.CHECKOUT_CREATE`
- `API_ENDPOINTS.CHATBOT_SEND`

Chaves de storage:

- `STORAGE_KEYS.AUTH_TOKEN`
- `STORAGE_KEYS.REFRESH_TOKEN`

## 3) Protocolo HTTP (Axios)

Arquivo: `src/services/api.js`.

Comportamento de request:

1. le token em localStorage
2. injeta `Authorization: Bearer <token>` quando existir

Comportamento de response:

1. ignora erros que nao sejam `401`
2. para `401`, evita retry infinito com `_retry`
3. evita tentar refresh no proprio endpoint de refresh
4. usa fila para requests concorrentes durante refresh

Fluxo de refresh:

1. dispatch de `refreshTokenRequest`
2. `authSaga` chama `authService.refresh`
3. tokens atualizados
4. fila resolvida com token novo

## 4) Protocolo STOMP + SockJS

Arquivos:

- `src/services/websocket.js`
- `src/store/sagas/guinchoSaga.js`

Destino atual de telemetria:

- `/ws/guincho/{id}`

Regras implementadas:

- reconexao manual com backoff exponencial
- maximo de 5 tentativas
- notificacao de conexao/desconexao para slice de telemetria

Mapeamento de eventos esperados:

- `status_update`
- `bateria_low`
- `obstaculo_detectado`
- `sobrecarga_detectada`

## 5) Protocolo SSE do chatbot

Arquivo: `src/services/chatbotService.js`.

Endpoint de stream:

- `${VITE_API_BASE_URL}${API_ENDPOINTS.CHATBOT_SEND}/stream`

Parametros:

- `message` (obrigatorio)
- `sessionId` (opcional)

Comportamento:

1. cria `EventSource`
2. recebe chunk por `onmessage`
3. interpreta JSON quando possivel
4. encerra em `[DONE]` ou evento `done`

Observacoes:

- cada chunk alimenta `appendBotChunk`
- fechamento da stream gera `messageComplete`

## 6) Como adicionar uma nova integracao externa

Exemplo: novo endpoint REST.

1. adicionar constante em `src/utils/constants.js`
2. adicionar metodo no service do dominio
3. criar action `*Request/*Success/*Failure` no slice
4. criar worker e watcher na saga
5. expor no hook
6. conectar na UI

Exemplo: novo evento de telemetria.

1. mapear evento no `guinchoSaga`
2. normalizar payload para estado interno
3. atualizar slice de telemetria se necessario
4. validar dashboard

## 7) Erros comuns na camada de integracao

1. endpoint alterado no backend sem atualizar constants
2. side effect feito na pagina em vez de saga
3. token atualizado no storage, mas nao no estado
4. stream SSE nao encerrada corretamente
5. canal STOMP sem id de guincho definido

## 8) Checklist de seguranca e resiliencia

1. requests autenticadas sempre com bearer token
2. refresh de token com fila para concorrencia
3. retry com limite para evitar loop infinito
4. mensagens de erro amigaveis para usuario
5. limpeza de recursos de stream/canal no teardown
