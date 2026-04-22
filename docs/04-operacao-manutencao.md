# 04 - Operacao, manutencao e troubleshooting

Este documento e o guia de operacao diaria do projeto.

## 1) Subir ambiente local

Pre-requisitos:

- Node.js 18+
- npm 9+

Comandos:

```bash
npm install
npm run dev
```

Validacao de build:

```bash
npm run build
npm run preview
```

## 2) Variaveis de ambiente

Variaveis reconhecidas pela aplicacao:

- `VITE_API_BASE_URL` (default `http://localhost:8080/api`)
- `VITE_WS_URL` (default `http://localhost:8080/ws`)

Boas praticas:

1. Nunca versionar segredos em `.env`.
2. Manter defaults somente para ambiente local.
3. Validar endpoint de API e WS sempre que trocar backend.

## 3) Procedimento seguro para manutencao

Sequencia recomendada para alteracoes com estado global:

1. Ajustar contrato do slice.
2. Ajustar saga (fluxo e tratamento de erro).
3. Ajustar service (integracao externa).
4. Ajustar hook (interface para UI).
5. Ajustar pagina/componente.
6. Validar rotas e persistencia.

Evita inconsistencias entre camadas.

## 4) Playbook de evolucao por tipo de demanda

### 4.1 Nova pagina sem backend

1. Criar pasta da pagina.
2. Registrar rota.
3. Integrar menu/navegacao.
4. Validar responsividade.

### 4.2 Nova tela com backend

1. Definir action `*Request/*Success/*Failure` no slice.
2. Implementar worker saga.
3. Implementar service.
4. Expor no hook.
5. Conectar na UI.

### 4.3 Ajuste em auth

1. Validar impacto em localStorage (`everrise_token` e `everrise_refresh_token`).
2. Validar interceptor `401` em `src/services/api.js`.
3. Validar redirecionamento em `PrivateRoute` e `PublicRoute`.

### 4.4 Ajuste em telemetria

1. Validar `guincho.id` antes de abrir stream.
2. Validar eventos STOMP esperados.
3. Validar reconexao com backoff.

## 5) Testes manuais minimos por dominio

Auth:

1. login valido
2. login invalido
3. refresh apos `401`
4. logout

Guincho e telemetria:

1. carregar status
2. enviar comando
3. simular queda de conexao e reconexao
4. validar alerta de emergencia

Chatbot:

1. enviar pergunta
2. receber resposta incremental
3. encerrar stream corretamente
4. validar erro amigavel quando backend cai

## 6) Troubleshooting rapido

### 6.1 Login nao funciona

Verificar:

1. endpoint `AUTH_LOGIN` em `src/utils/constants.js`
2. payload enviado pelo formulario
3. escrita de token no localStorage
4. `auth.error` no estado

### 6.2 Requisicoes com `401` em cascata

Verificar:

1. `registerStore(store)` em `src/store/index.js`
2. dispatch de `refreshTokenRequest`
3. resposta do backend em `/auth/refresh`

### 6.3 Telemetria nao atualiza

Verificar:

1. `guincho.id` definido
2. canal `/ws/guincho/{id}` no backend
3. eventos com `type` esperado

### 6.4 Navegacao redireciona para rota inexistente

Verificar:

1. regra em `src/router/PrivateRoute.jsx`
2. existencia da rota no `src/router/index.jsx`

## 7) Divida tecnica registrada

1. `src/hooks/useAuth.js` usa `qrCodeBindRequest` e o slice define `bindDeviceRequest`.
2. `src/router/PrivateRoute.jsx` redireciona para `/vinculo-dispositivo`, rota ausente na tabela de rotas atual.

Recomendacao:

- abrir PR de estabilizacao com foco nesses dois itens.
