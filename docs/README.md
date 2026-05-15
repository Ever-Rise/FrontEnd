# Manual Tecnico EVERRISE FrontEnd

Este diretorio contem o manual completo para entender, evoluir e manter o projeto.

## Publico alvo

- pessoas entrando no projeto pela primeira vez
- pessoas que vao criar novas paginas e funcionalidades
- pessoas responsaveis por manutencao e sustentacao
- revisores tecnicos e lideranca de engenharia

## Mapa da documentacao

1. [01 - Visao geral da arquitetura](./01-visao-geral-arquitetura.md)
2. [02 - Guia de desenvolvimento de paginas](./02-guia-desenvolvimento-paginas.md)
3. [03 - Estado global com Redux Toolkit, Saga e Persist](./03-estado-global-redux-saga-persist.md)
4. [04 - Operacao, manutencao e troubleshooting](./04-operacao-manutencao.md)
5. [05 - Integracoes, servicos e protocolos](./05-integracoes-servicos-e-protocolos.md)
6. [06 - Checklists de entrega e manutencao](./06-checklists-de-entrega-e-manutencao.md)

### Motion / animacoes (paginas marketing)

7. [07 - Modulo motions (referencia tecnica)](./07-modulo-motions.md)
8. [08 - Arquitetura motion](./08-arquitetura-motion.md)
9. [09 - Checklist motion](./09-checklist-motion.md)
10. **[10 - Guia de uso das animacoes](./10-guia-uso-animacoes.md)** — leia este ao implementar ou corrigir efeitos nas telas

## Ordem sugerida de leitura

1. Comece pelo documento 01 para formar o mapa mental da arquitetura.
2. Leia o documento 03 para entender o fluxo de estado e side effects.
3. Use o documento 02 para criar paginas seguindo o padrao atual.
4. Consulte os documentos 04, 05 e 06 no trabalho diario de manutencao.
5. Ao trabalhar em Landing, Vendas, Produto, Parceiros ou Sustentabilidade, use o documento **10** e os exemplos em `src/motions/EXEMPLOS.md`.

## Resultado esperado apos leitura

Ao concluir este manual, qualquer pessoa deve conseguir:

- rodar o projeto localmente
- localizar rapidamente cada camada da arquitetura
- criar telas e fluxos novos seguindo o padrao existente
- diagnosticar problemas comuns de auth, telemetria e chatbot
- executar manutencao com baixo risco de regressao
