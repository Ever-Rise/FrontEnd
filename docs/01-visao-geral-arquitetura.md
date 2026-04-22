# 01 - Visao geral da arquitetura

Este documento explica como o frontend foi organizado, por que cada camada existe e como os blocos se conectam.

## 1) Stack principal

- React 18 + Vite
- React Router 6
- CSS Modules
- Redux Toolkit
- Redux Saga
- Redux Persist
- Axios
- STOMP + SockJS
- SSE (EventSource)

## 2) Bootstrap da aplicacao

Arquivo de entrada: `src/main.jsx`.

Ordem de montagem:

1. `Provider`: injeta store Redux para toda a arvore.
2. `PersistGate`: restaura estado persistido (`auth` e `ui`) antes de liberar a UI.
3. `global.css`: aplica reset, tokens CSS e base visual global.
4. `RouterProvider`: ativa roteamento por browser history.

Arquivo `src/App.jsx`:

- renderiza apenas `Outlet`.
- funciona como shell de composicao para rotas filhas.

## 3) Arquitetura por camadas

### 3.1 Camada de apresentacao

Pastas:

- `src/pages`
- `src/components`
- `src/theme`

Responsabilidades:

- renderizar UI
- coletar interacao de usuario
- exibir estado e feedback (loading, erro, sucesso)

Nao deve conter:

- chamada HTTP direta
- conexao STOMP/SSE direta
- regra de resiliencia/retry

### 3.2 Camada de orquestracao local

Pasta: `src/hooks`.

Responsabilidades:

- encapsular `useSelector` e `useDispatch`
- expor interface simples para paginas e componentes
- reduzir acoplamento entre UI e detalhes da store

### 3.3 Camada de estado global

Pastas:

- `src/store/slices`
- `src/store/sagas`
- `src/store/index.js`

Responsabilidades:

- definir contrato de estado por dominio
- processar side effects assincronos
- controlar transicoes de estado previsiveis
- centralizar fluxo de erros de dominio

### 3.4 Camada de integracao

Pastas:

- `src/services`
- `src/utils/constants.js`

Responsabilidades:

- encapsular REST, SSE e STOMP
- centralizar endpoints e chaves de storage
- isolar detalhes de protocolo do restante da app

## 4) Roteamento e controle de acesso

Arquivo principal: `src/router/index.jsx`.

Padrao utilizado:

- `createBrowserRouter` com lazy loading por pagina
- fallback de carregamento com `Loader`
- `RouterErrorBoundary` para erro em renderizacao de rota
- `NotFoundPage` para wildcard `*`

Guards:

- `PublicRoute`: bloqueia `/login`, `/register`, `/forgot-password` quando usuario ja autenticado.
- `PrivateRoute`: exige `auth.isAuthenticated` e `auth.deviceId` para liberar rotas privadas.

## 5) Estado global em alto nivel

Slices registrados:

- `auth`
- `guincho`
- `telemetry`
- `chatbot`
- `ui`

Persistencia (`redux-persist` em `src/store/index.js`):

- `whitelist`: `auth`, `ui`
- `blacklist`: `guincho`, `telemetry`, `chatbot`

Racional:

- sessao e preferencias sobrevivem refresh
- dados operacionais volateis nao devem ser reaproveitados entre sessoes

## 6) Principios arquiteturais do projeto

1. Fluxo unidirecional de dados.
2. Side effect em saga, nao na UI.
3. Integracoes isoladas em service.
4. Contratos centralizados em constants/utils.
5. Mensagens de erro orientadas ao usuario em pt-BR.

## 7) Mapa rapido de navegacao no codigo

- Entrada da app: `src/main.jsx`
- Roteamento: `src/router/index.jsx`
- Store e persistencia: `src/store/index.js`
- Reducers raiz: `src/store/rootReducer.js`
- Sagas raiz: `src/store/rootSaga.js`
- Interceptor HTTP: `src/services/api.js`
- WS/STOMP: `src/services/websocket.js`
- Chat streaming SSE: `src/services/chatbotService.js`
