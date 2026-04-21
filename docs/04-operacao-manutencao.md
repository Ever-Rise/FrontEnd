# 04 - Operacao, manutencao e troubleshooting

## Como rodar o projeto

Pre-requisitos:
- Node.js 18+
- npm 9+

Passos:
1. `npm install`
2. `npm run dev`
3. Abrir URL exibida pelo Vite

Build local:
- `npm run build`
- `npm run preview`

## Variaveis de ambiente esperadas

Usadas atualmente no frontend:
- `VITE_API_BASE_URL` (default: `http://localhost:8080/api`)
- `VITE_WS_URL` (default: `http://localhost:8080/ws`)

## Processo seguro para manutencao

1. Entenda o fluxo funcional no modulo impactado.
2. Identifique em que camada a mudanca pertence.
3. Altere primeiro contratos de estado (slice), depois efeito (saga), depois integracao (service), por fim UI.
4. Validar regressao em rotas privadas/publicas.
5. Validar persistencia apos refresh da pagina.

## Como adicionar nova feature com estado global

1. Criar ou estender slice em `src/store/slices/`.
2. Criar saga correspondente em `src/store/sagas/` com watcher `takeLatest` ou `takeEvery`.
3. Registrar saga no `src/store/rootSaga.js`.
4. Criar/ajustar service em `src/services/`.
5. Expor no hook em `src/hooks/`.
6. Consumir na pagina/componente.

## Estrategia de testes manuais recomendada

Auth:
- login valido
- login invalido
- refresh apos 401
- logout e redirecionamento

Guincho/Telemetria:
- fetch de status
- envio de comando
- queda de WS e reconexao
- evento de emergencia e bloqueio visual

Chatbot:
- envio de mensagem
- recepcao incremental de chunks
- encerramento de stream
- erro de rede e mensagem amigavel

## Troubleshooting rapido

### Tela nao autentica mesmo com credenciais validas

Verificar:
- endpoint `AUTH_LOGIN`
- formato do payload de login
- token salvo em `everrise_token`
- erro no estado `auth.error`

### Requests retornam 401 em cascata

Verificar:
- se `registerStore(store)` esta executando em `src/store/index.js`
- se `refreshTokenRequest` esta chegando na saga
- se backend devolve token no refresh

### Telemetria nao atualiza dashboard

Verificar:
- `guincho.id` definido antes de iniciar listener
- canal `/ws/guincho/{id}` no backend
- eventos com tipo esperado (`status_update`, `bateria_low`, `obstaculo_detectado`, `sobrecarga_detectada`)

### Redirecionamento estranho em rota privada

Verificar:
- `auth.isAuthenticated`
- `auth.deviceId`
- existencia de rota para `/vinculo-dispositivo`

## Divida tecnica registrada

1. Hook `useAuth` usa action `qrCodeBindRequest`, mas o slice define `bindDeviceRequest`.
2. Rota `/vinculo-dispositivo` e referenciada no guard, mas nao esta registrada no router atual.

Recomendacao:
- corrigir os dois pontos em um pequeno PR de estabilizacao para reduzir bugs de navegacao e vinculo de dispositivo.
