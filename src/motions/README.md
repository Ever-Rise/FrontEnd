# Motion Module (kernel)

Infraestrutura compartilhada de animação. Timelines e cenas específicas ficam em `pages/<Page>/motion/`.

**Guia completo para implementar correções:** [`docs/10-guia-uso-animacoes.md`](../../docs/10-guia-uso-animacoes.md)  
**Exemplos de código:** [`EXEMPLOS.md`](./EXEMPLOS.md)

## Estrutura

```
src/motions/
├── configs/          # Presets, durações, easing
├── types/            # TypeScript
├── hooks/            # useGsap, useIntersectionReveal, useReducedMotion, useMarketingIntro
├── lib/              # loadGsap, loadThree (dynamic import)
├── primitives/       # MarketingMotionPage, ScrollReveal, MotionLayout
├── r3f/              # React Three Fiber (ImmersiveCanvas, useR3FBridge)
└── utils/            # math, timeline
```

## Imports recomendados

```js
import { useGsap } from '@/motions/hooks/useGsap';
import { loadGsap } from '@/motions/lib/loadGsap';
import { DURATION } from '@/motions/configs';
import MarketingMotionPage from '@/motions/primitives/MarketingMotionPage';
```

Evite `import { everything } from '@/motions'` em rotas sem animação.

## Páginas marketing

Landing, Vendas, Produto, Parceiros, Sustentabilidade — ver guia em `docs/10-guia-uso-animacoes.md`.
