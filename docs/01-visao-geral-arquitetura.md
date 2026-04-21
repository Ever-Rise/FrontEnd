# 01 - Visao geral da arquitetura

## Stack principal

- React 18 com Vite
- React Router
- Styled Components
- Redux Toolkit
- Redux Saga
- Redux Persist
- Axios
- WebSocket STOMP com SockJS

## Fluxo de bootstrap da aplicacao

1. O entrypoint e `src/main.jsx`.
2. A arvore React e montada com:
   - `Provider` (Redux)
   - `PersistGate` (rehydration do estado persistido)
   - `ThemeProvider` (tema visual)
   - `RouterProvider` (rotas)
3. O componente `src/App.jsx` atua como casca da aplicacao e renderiza `Outlet`.

## Estrutura em camadas

### Camada de apresentacao

- `src/pages/`: telas de rota.
- `src/components/`: blocos reutilizaveis (common, forms, layout, guincho, telemetry, chatbot).
- `src/theme/`: tema, breakpoints e estilos globais.

Responsabilidade:
- Renderizar UI
- Coletar interacao do usuario
- Disparar acoes para hooks/store

Nao deve:
- Conhecer detalhes de HTTP/WS
- Conter regra de side effect complexo

### Camada de orquestracao local

- `src/hooks/`: ponte entre UI e estado global.

Responsabilidade:
- Expor estado de slices
- Expor metodos dispatchaveis (ex: login, fetchGuincho, connect)

### Camada de estado global

- `src/store/slices/`: estado e reducers (sincrono)
- `src/store/sagas/`: side effects (assincrono)
- `src/store/index.js`: configuracao da store e persistencia

Responsabilidade:
- Definir contratos de estado
- Centralizar efeitos assincronos
- Garantir recuperacao de sessao com persistencia

### Camada de integracao

- `src/services/`: acesso a API REST, SSE e WS
- `src/utils/constants.js`: endpoints, chaves de storage e enums

Responsabilidade:
- Encapsular chamadas externas
- Esconder detalhes de protocolo e autenticacao

## Roteamento e acesso

Arquivo principal: `src/router/index.jsx`.

- Rotas publicas: landing e paginas institucionais.
- Rotas de autenticacao: sob `PublicRoute` (`/login`, `/register`, `/forgot-password`).
- Rotas privadas: sob `PrivateRoute` (`/dashboard`, `/controle`, etc).
- Fallback 404: rota `*`.

Regras de guarda:
- `PrivateRoute` exige `auth.isAuthenticated`.
- `PrivateRoute` tambem exige `auth.deviceId` e redireciona para `/vinculo-dispositivo` se ausente.
- `PublicRoute` redireciona para `/dashboard` quando ja autenticado.

## Convencoes de pastas

### Pagina

Padrao por pagina em `src/pages/NomePage/`:
- `index.jsx` -> componente da tela
- `styles.js` -> styled components da tela
- `index.js` -> reexport default

### Modulo reutilizavel

Padrao em `src/components/Modulo/Componente/`:
- `index.jsx`
- `styles.js` (quando necessario)
- `index.js`

## Principios para manutencao

- UI desacoplada de IO externo.
- Toda chamada assincrona relevante deve passar por saga.
- Estado que representa sessao deve ficar no slice correspondente e persistir por contrato.
- Mensagens de erro para o usuario final em pt-BR.
