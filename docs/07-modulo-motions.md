# Modulo Motion — referencia tecnica

> **Guia pratico para implementar animacoes:** [10-guia-uso-animacoes.md](./10-guia-uso-animacoes.md)  
> **Arquitetura:** [08-arquitetura-motion.md](./08-arquitetura-motion.md)

## Estrutura atual (kernel)

```
src/motions/
├── configs/         # DURATION, EASING_PRESETS, SCROLL_DEFAULTS, ...
├── types/           # TypeScript
├── hooks/           # useGsap, useIntersectionReveal, useReducedMotion, useMarketingIntro
├── lib/             # loadGsap(), loadThree() — dynamic import
├── primitives/      # MarketingMotionPage, ScrollReveal, MarketingHeroSection, ...
├── r3f/             # ImmersiveCanvas, useR3FBridge (ex-src/three)
└── utils/           # math, timeline
```

Pastas **nao usadas** (reservadas para expansao futura): `canvas/` (stub legado), `contexts/`, `services/`, `shaders/`.

## Hooks

| Hook | Descricao |
|------|-----------|
| `useGsap` | Registry + cleanup de timelines/tweens GSAP |
| `useIntersectionReveal` | Entrada na viewport via IntersectionObserver |
| `useScrollAnimation` | Alias legado de `useIntersectionReveal` |
| `useReducedMotion` | `prefers-reduced-motion` |
| `useMarketingIntro` | Intro padrao do hero (GSAP via `loadGsap`) |
| `useThreeCanvas` | Stub para canvas vanilla Three |

## Loaders

```js
import { loadGsap } from '@/motions/lib/loadGsap';
const { gsap, ScrollTrigger } = await loadGsap();
```

```js
import { loadThree } from '@/motions/lib/loadThree';
const THREE = await loadThree();
```

## Páginas marketing

Motion co-localizado em `src/pages/<Page>/motion/` e secoes em `sections/`.

Rotas: `/`, `/vendas`, `/produto`, `/parceiros`, `/sustentabilidade`.

## Imports

Alias `@` → `src` no `vite.config.js`.

Prefira imports diretos; evite barrel pesado em rotas sem animacao.

## Exemplos

Ver `src/motions/EXEMPLOS.md`.
