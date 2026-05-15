# Checklist Motion

Use antes de entregar alteracoes em paginas marketing.

## Estrutura

- [ ] Animacao especifica da pagina em `pages/<Page>/motion/`, nao no kernel
- [ ] Secoes em `pages/<Page>/sections/` ou primitives reutilizaveis
- [ ] GSAP/Three via `loadGsap()` / `loadThree()` ou `React.lazy` — sem import estatico global

## Paginas

- [ ] Landing, Vendas, Produto, Parceiros, Sustentabilidade usam `MarketingMotionPage` ou padrao equivalente
- [ ] Login, dashboard, controle **nao** importam `@/motions/lib` nem `@/motions/r3f`

## Qualidade

- [ ] `useGsap().registerAnimation` em timelines manuais
- [ ] Testado com `prefers-reduced-motion: reduce`
- [ ] Navegacao entre rotas nao deixa animacao ativa (cleanup)
- [ ] Build: chunks `vendor-gsap` / `vendor-framer` so aparecem ao carregar rotas marketing

## Documentacao

- [ ] Guia: [10-guia-uso-animacoes.md](./10-guia-uso-animacoes.md)
- [ ] Exemplos: `src/motions/EXEMPLOS.md`
