# EVERRISE FrontEnd

Frontend web da plataforma EVERRISE para operacao, monitoramento e suporte do guincho hospitalar autonomo.

## Sumario

- [Visao geral](#visao-geral)
- [Tecnologias](#tecnologias)
- [Arquitetura do projeto](#arquitetura-do-projeto)
- [Como executar localmente](#como-executar-localmente)
- [Scripts](#scripts)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Fluxo de estado global](#fluxo-de-estado-global)
- [Como criar novas paginas](#como-criar-novas-paginas)
- [Guia completo na pasta docs](#guia-completo-na-pasta-docs)
- [Status de manutencao](#status-de-manutencao)

## Visao geral

Este projeto entrega a interface operacional da EVERRISE com:

- autenticacao e sessao persistida
- painel de guincho com telemetria em tempo real
- streaming de chatbot
- paginas institucionais e fluxo de checkout

## Tecnologias

- React 18
- Vite
- Styled Components
- React Router
- Redux Toolkit
- Redux Saga
- Redux Persist
- Axios
- STOMP + SockJS

## Arquitetura do projeto

Organizacao em camadas:

- Apresentacao: `src/pages`, `src/components`, `src/theme`
- Orquestracao local: `src/hooks`
- Estado global: `src/store/slices`, `src/store/sagas`, `src/store/index.js`
- Integracao externa: `src/services`
- Utilitarios e contratos: `src/utils`

Entrada da aplicacao:

1. `src/main.jsx` monta Provider, PersistGate, ThemeProvider e RouterProvider
2. `src/App.jsx` renderiza `Outlet`
3. `src/router/index.jsx` controla roteamento, lazy loading e guards

## Como executar localmente

Pre-requisitos:

- Node.js 18+
- npm 9+

Passos:

1. Instalar dependencias:

```bash
npm install
```

2. Subir ambiente dev:

```bash
npm run dev
```

3. Abrir a URL exibida no terminal (normalmente http://localhost:5173)

## Scripts

- `npm run dev`: ambiente local com HMR
- `npm run build`: build de producao
- `npm run preview`: sobe build local para validacao
- `npm run lint`: lint do projeto

## Estrutura de pastas

```text
src/
	components/
	hooks/
	locales/
	pages/
	router/
	services/
	store/
		sagas/
		slices/
	theme/
	utils/
```

## Fluxo de estado global

Setup atual em `src/store/index.js`:

- Persist com localStorage
- whitelist: `auth`, `ui`
- blacklist: `guincho`, `telemetry`, `chatbot`

Fluxo padrao:

1. UI dispara action `*Request`
2. Saga processa side effect
3. Saga despacha `*Success` ou `*Failure`
4. Slice atualiza estado
5. UI reage automaticamente

Integracao importante:

- Interceptor 401 em `src/services/api.js` dispara `refreshTokenRequest` na saga
- fila de requests e resolvida apos renovar token

## Como criar novas paginas

Padrao de pagina em `src/pages/NomePage/`:

- `index.jsx`
- `styles.js`
- `index.js`

Passos:

1. Criar pasta e arquivos da pagina
2. Registrar lazy import em `src/router/index.jsx`
3. Adicionar rota no bloco correto (publico ou privado)
4. Se necessario, criar hook e integrar store/saga/service

## Guia completo na pasta docs

Documentacao detalhada:

- [docs/README.md](docs/README.md)
- [docs/01-visao-geral-arquitetura.md](docs/01-visao-geral-arquitetura.md)
- [docs/02-guia-desenvolvimento-paginas.md](docs/02-guia-desenvolvimento-paginas.md)
- [docs/03-estado-global-redux-saga-persist.md](docs/03-estado-global-redux-saga-persist.md)
- [docs/04-operacao-manutencao.md](docs/04-operacao-manutencao.md)

## Status de manutencao

Pontos mapeados para estabilizacao:

1. `src/hooks/useAuth.js` referencia `qrCodeBindRequest`, enquanto o slice atual usa `bindDeviceRequest`.
2. `src/router/PrivateRoute.jsx` redireciona para `/vinculo-dispositivo`; confirmar existencia da rota no roteador.

Recomendacao:

- abrir um PR curto de hardening para ajustar esses dois pontos e reduzir risco de regressao em autenticacao/roteamento.
