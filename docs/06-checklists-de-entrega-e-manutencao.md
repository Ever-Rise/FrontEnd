# 06 - Checklists de entrega e manutencao

Este documento e um guia pratico para garantir qualidade e previsibilidade nas entregas.

## 1) Checklist de onboarding tecnico

1. clonar repositorio e instalar dependencias
2. executar `npm run dev`
3. ler `README.md`
4. ler `docs/01` e `docs/03`
5. abrir `src/router/index.jsx` para entender mapa de rotas
6. abrir `src/store/index.js` para entender estado global

## 2) Checklist para criar nova pagina

1. criar pasta em `src/pages/NomePagina`
2. criar `index.jsx`, `styles.js`, `index.js`
3. exportar em `src/pages/index.js`
4. registrar lazy import e rota
5. integrar menu/navegacao
6. validar layout em desktop e mobile

## 3) Checklist para feature com backend

1. definir contrato da action no slice
2. implementar worker saga
3. implementar/ajustar service
4. expor chamada no hook
5. ligar UI ao hook
6. cobrir loading, erro e estado vazio
7. validar impacto nas rotas e persistencia

## 4) Checklist para manutencao corretiva

1. reproduzir bug localmente
2. localizar camada correta do problema
3. corrigir no menor escopo possivel
4. validar regressao dos fluxos criticos
5. registrar licao aprendida no PR

## 5) Checklist de validacao antes do merge

1. `npm run build` sem erro
2. fluxo principal da feature validado
3. auth validado (login/logout/refresh)
4. sem chamadas diretas de API na UI
5. sem strings de erro tecnicas para usuario final

## 6) Playbook rapido de incidentes

### 6.1 API indisponivel

1. confirmar `VITE_API_BASE_URL`
2. verificar status do backend
3. validar mensagens de erro na UI

### 6.2 WebSocket instavel

1. verificar `VITE_WS_URL`
2. validar reconexao no `websocket.js`
3. validar se o guincho possui `id`

### 6.3 Chatbot sem resposta

1. validar endpoint de stream
2. inspecionar evento `[DONE]` ou `done`
3. validar fechamento de stream no saga

## 7) Convencoes de codigo no projeto

1. manter responsabilidades separadas por camada
2. seguir padrao `Request/Success/Failure`
3. manter mensagens de erro em pt-BR
4. evitar acoplamento direto da UI com protocolo externo
5. preferir reuso de componentes existentes

## 8) Roadmap de hardening recomendado

1. corrigir acao de bind em `useAuth`
2. alinhar regra de `PrivateRoute` com rotas existentes
3. revisar fallback para `crypto.randomUUID` em `uiSlice`
4. criar cobertura automatizada para fluxos de auth e telemetria
