# EVERRISE FrontEnd

Aplicacao frontend da plataforma EVERRISE para operacao do guincho, monitoramento de telemetria, autenticacao de usuarios e suporte assistido por chatbot.

Este README e a visao executiva do projeto. O manual completo, detalhe por detalhe, esta na pasta `docs`.

## Sumario

- [Objetivo do projeto](#objetivo-do-projeto)
- [Stack tecnologica](#stack-tecnologica)
- [Como rodar localmente](#como-rodar-localmente)
- [Scripts disponiveis](#scripts-disponiveis)
- [Arquitetura em camadas](#arquitetura-em-camadas)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Fluxo de uma funcionalidade](#fluxo-de-uma-funcionalidade)
- [Manual completo em docs](#manual-completo-em-docs)
- [Riscos tecnicos conhecidos](#riscos-tecnicos-conhecidos)

## Objetivo do projeto

Entregar uma interface web que permita:

- autenticar usuarios e manter sessao
- visualizar dados operacionais do guincho
- enviar comandos para o equipamento
- acompanhar alertas de telemetria em tempo real
- utilizar chatbot com resposta em streaming
- navegar por paginas institucionais e fluxo de checkout

## Stack tecnologica

- React 18
- Vite
- React Router 6
- Styled Components
- Redux Toolkit
- Redux Saga
- Redux Persist
- Axios
- STOMP + SockJS
- SSE (EventSource) para chatbot

## Como rodar localmente

Pre-requisitos:

- Node.js 18+
- npm 9+

Passo a passo:

1. Instale dependencias:

```bash
npm install
```

1. Rode o ambiente de desenvolvimento:

```bash
npm run dev
```

1. Abra a URL mostrada no terminal (normalmente `http://localhost:5173`).

Variaveis de ambiente esperadas:

- `VITE_API_BASE_URL` (default: `http://localhost:8080/api`)
- `VITE_WS_URL` (default: `http://localhost:8080/ws`)

## Scripts disponiveis

- `npm run dev`: servidor local com hot reload
- `npm run build`: build de producao
- `npm run preview`: sobe a build localmente
- `npm run lint`: lint de codigo

## Arquitetura em camadas

O projeto segue divisao por responsabilidade:

- Apresentacao: `src/pages`, `src/components`, `src/theme`
- Orquestracao local: `src/hooks`
- Estado global: `src/store/slices`, `src/store/sagas`, `src/store/index.js`
- Integracoes externas: `src/services`
- Contratos e utilitarios: `src/utils`

Fluxo de bootstrap:

1. `src/main.jsx` monta `Provider`, `PersistGate`, `ThemeProvider` e `RouterProvider`.
2. `src/App.jsx` atua como casca e renderiza `Outlet`.
3. `src/router/index.jsx` define rotas, lazy loading, guards e fallback.

## Estrutura de pastas

```text
src/
  assets/
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

## Fluxo de uma funcionalidade

Fluxo padrao no projeto:

1. Componente/Pagina dispara action `*Request`.
2. Saga escuta a action e executa side effect.
3. Service realiza integracao externa (REST, SSE ou WS).
4. Saga despacha `*Success` ou `*Failure`.
5. Slice atualiza estado.
6. UI renderiza novo estado automaticamente.

Exemplo importante:

- Em `src/services/api.js`, o interceptor de `401` dispara `refreshTokenRequest` para saga de autenticacao e usa fila para repetir requests pendentes apos renovar token.

## Manual completo em docs

Leia os documentos abaixo na ordem:

1. [docs/README.md](docs/README.md)
2. [docs/01-visao-geral-arquitetura.md](docs/01-visao-geral-arquitetura.md)
3. [docs/02-guia-desenvolvimento-paginas.md](docs/02-guia-desenvolvimento-paginas.md)
4. [docs/03-estado-global-redux-saga-persist.md](docs/03-estado-global-redux-saga-persist.md)
5. [docs/04-operacao-manutencao.md](docs/04-operacao-manutencao.md)
6. [docs/05-integracoes-servicos-e-protocolos.md](docs/05-integracoes-servicos-e-protocolos.md)
7. [docs/06-checklists-de-entrega-e-manutencao.md](docs/06-checklists-de-entrega-e-manutencao.md)

## Motion Architecture

Adicionada arquitetura de motion baseada em Framer Motion + GSAP + Three.js. Leia [docs/motion-architecture.md](docs/motion-architecture.md) para detalhes e guias de integração.

## Riscos tecnicos conhecidos

1. `src/hooks/useAuth.js` usa `qrCodeBindRequest`, mas o slice expoe `bindDeviceRequest`.
2. `src/router/PrivateRoute.jsx` redireciona para `/vinculo-dispositivo`, rota que precisa existir no roteador.

Recomendacao:

- tratar esses dois itens em um PR de hardening para evitar regressao de login e navegacao.
