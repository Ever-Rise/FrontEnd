# Guia de uso — animações (Motion)

Manual para implementar e corrigir animações no EverRise FrontEnd **depois** que a arquitetura motion já estiver no projeto.

**Leitura rápida:** use este documento no dia a dia. Detalhes de arquitetura: [08-arquitetura-motion.md](./08-arquitetura-motion.md). Checklist antes de entregar: [09-checklist-motion.md](./09-checklist-motion.md).

---

## 1. Onde usar motion (e onde não usar)

### Páginas **com** motion (marketing)

| Rota | Pasta | Hook de intro |
|------|--------|----------------|
| `/` | `src/pages/LandingPage/` | `motion/useLandingIntro.js` |
| `/vendas` | `src/pages/VendasPage/` | `motion/useVendasIntro.js` |
| `/produto` | `src/pages/ProdutoPage/` | `motion/useProdutoIntro.js` |
| `/parceiros` | `src/pages/ParceirosPage/` | `motion/useParceirosIntro.js` |
| `/sustentabilidade` | `src/pages/SustentabilidadePage/` | `motion/useSustentabilidadeIntro.js` |

### Páginas **sem** motion pesado

Login, dashboard, controle, checkout, etc. **Não importe** `loadGsap`, `loadThree` nem `@/motions/r3f` nessas telas. Micro-interações leves podem usar Framer **só no componente** (ex.: um botão), sem wrapper de página.

---

## 2. Três camadas (onde colocar cada código)

```
src/motions/              → KERNEL (compartilhado): configs, hooks, loaders, primitives
src/pages/<Page>/motion/  → SÓ desta página: timelines, ScrollTrigger, cenas 3D
src/pages/<Page>/sections/→ Markup/CSS das seções (opcional; pode ficar no index.jsx)
```

| O que você está fazendo | Onde colocar |
|-------------------------|--------------|
| Preset de duração/easing usado em várias páginas | `src/motions/configs/index.ts` |
| Loader GSAP / Three | Já existe: `src/motions/lib/loadGsap.js`, `loadThree.js` |
| Hero + intro igual em várias páginas | Primitives: `MarketingHeroSection`, `useMarketingIntro` |
| Timeline exclusiva da Landing | `src/pages/LandingPage/motion/useLandingIntro.js` (ou novo arquivo) |
| Cena 3D só da Landing | `src/pages/LandingPage/motion/LandingHeroScene.jsx` + `lazy()` |
| Pin/scrub de uma seção da Vendas | `src/pages/VendasPage/motion/useVendasScroll.js` |

**Regra de ouro:** se a animação existe **só numa página**, o código fica em `pages/<Page>/motion/`, não em `src/motions/`.

---

## 3. Qual biblioteca usar

| Efeito | Use | Não use |
|--------|-----|---------|
| Entrada suave da página (fade leve) | `MarketingMotionPage` (Framer) | GSAP para tudo |
| Hero ao carregar (fade + slide) | `useMarketingIntro` ou hook em `motion/` | `import gsap from 'gsap'` estático no topo |
| Seção aparece ao rolar | `ScrollReveal` ou `useIntersectionReveal` | Framer para scroll longo |
| Pin, scrub, storytelling no scroll | GSAP + `ScrollTrigger` via `loadGsap()` | Só IntersectionObserver |
| Produto 3D / partículas | `ImmersiveCanvas` ou cena em `motion/` + `lazy()` | Three no `main.jsx` ou router |
| Hover em botão | CSS ou Framer no componente | GSAP |

---

## 4. Padrão atual de uma página marketing

A **Landing** é o modelo completo. As outras quatro usam `createMarketingPage` com hook em `motion/`.

### 4.1 Landing (referência manual)

Arquivo: `src/pages/LandingPage/index.jsx`

1. `useRef` para hero, título e descrição.
2. `useLandingIntro({ heroRef, titleRef, descriptionRef })` — carrega GSAP sob demanda.
3. `MarketingMotionPage` — wrapper Framer (só nesta rota).
4. `MarketingHeroSection` — markup do hero com refs.
5. `MarketingContentSection` — bloco com `ScrollReveal` ao rolar.

### 4.2 Outras páginas marketing (factory)

Arquivo: `src/pages/VendasPage/index.jsx` (exemplo)

```jsx
import { createMarketingPage } from '../shared/createMarketingPage';
import { useVendasIntro } from './motion/useVendasIntro';

export default createMarketingPage({
  pageId: 'vendas',
  usePageIntro: useVendasIntro,
  title: 'Planos e Vendas',
  description: '...',
  contentTitle: 'Ofertas',
  contentBody: '...',
});
```

Para **customizar** além do factory, copie o padrão da `LandingPage/index.jsx` e monte seções à mão.

---

## 5. Passo a passo: adicionar uma nova seção com scroll reveal

Na Landing (ou qualquer página marketing):

```jsx
import MarketingContentSection from '@/motions/primitives/MarketingContentSection';

// Dentro do JSX da página:
<MarketingContentSection title="Nossa missao">
  Texto da secao que anima ao entrar na viewport.
</MarketingContentSection>
```

Ou, com controle total:

```jsx
import ScrollReveal from '@/motions/primitives/ScrollReveal';
import motionStyles from '@/motions/primitives/marketingPage.module.css';

<ScrollReveal className={motionStyles.revealSection}>
  <h2>Titulo</h2>
  <p>Conteudo</p>
</ScrollReveal>
```

`ScrollReveal` já respeita `prefers-reduced-motion` e carrega GSAP só quando necessário.

---

## 6. Passo a passo: animação GSAP customizada na página

**Nunca** faça `import gsap from 'gsap'` no topo de arquivos que entram em rotas leves. Use o loader:

```jsx
import { useEffect, useRef } from 'react';
import { loadGsap } from '@/motions/lib/loadGsap';
import { useGsap } from '@/motions/hooks/useGsap';
import { useReducedMotion } from '@/motions/hooks/useReducedMotion';
import { DURATION, EASING_PRESETS } from '@/motions/configs';

export function useMinhaTimeline(refs) {
  const reducedMotion = useReducedMotion();
  const { registerAnimation } = useGsap();

  useEffect(() => {
    if (reducedMotion) return undefined;

    let cancelled = false;

    (async () => {
      const { gsap, ScrollTrigger } = await loadGsap();
      if (cancelled || !refs.cardRef?.current) return;

      const tl = gsap.timeline();
      tl.from(refs.cardRef.current, {
        opacity: 0,
        y: 40,
        duration: DURATION.normal,
        ease: EASING_PRESETS.easeOutCubic,
      });

      registerAnimation(tl, 'minha-timeline');
    })();

    return () => {
      cancelled = true;
    };
  }, [reducedMotion, refs.cardRef, registerAnimation]);
}
```

Salve em `src/pages/ProdutoPage/motion/useProdutoFeatures.js` e chame no `index.jsx` da página.

### ScrollTrigger (pin / scrub)

```jsx
const { gsap, ScrollTrigger } = await loadGsap();

gsap.to(element, {
  scrollTrigger: {
    trigger: sectionRef.current,
    start: 'top center',
    end: 'bottom center',
    scrub: true,
    pin: true,
  },
  opacity: 1,
  y: 0,
});
```

Use presets de `SCROLL_DEFAULTS` em `@/motions/configs` para manter consistência.

---

## 7. Passo a passo: cena 3D (Three / R3F)

1. Crie o componente **só na página**, ex.: `src/pages/ProdutoPage/motion/ProdutoHeroScene.jsx`.
2. No `index.jsx` da página, carregue com lazy:

```jsx
import { lazy, Suspense } from 'react';
import Loader from '@/components/common/Loader';

const ProdutoHeroScene = lazy(() => import('./motion/ProdutoHeroScene'));

// No JSX:
<Suspense fallback={<Loader />}>
  <ProdutoHeroScene />
</Suspense>
```

3. Dentro da cena, use o que já existe no kernel:

```jsx
import { ImmersiveCanvas } from '@/motions/r3f';
// ou monte Canvas + useR3FBridge para tween de camera
```

4. Para tween da câmera com GSAP: `useR3FBridge` + `loadGsap()` (bridge já usa o loader).

**Não** importe `@/motions/r3f` em páginas de login/dashboard.

---

## 8. Hooks e primitives — referência rápida

### Hooks (`@/motions/hooks/...`)

| Hook | Função |
|------|--------|
| `useGsap` | Registra animações e faz `kill` no unmount |
| `useReducedMotion` | `true` se o usuário prefere menos movimento |
| `useMarketingIntro` | Intro padrão hero (opacity + y) |
| `useIntersectionReveal` | Entra/sai da viewport (IntersectionObserver) |
| `useScrollAnimation` | **Alias legado** → mesmo que `useIntersectionReveal` |

### Primitives (`@/motions/primitives/...`)

| Componente | Função |
|------------|--------|
| `MarketingMotionPage` | Wrapper Framer + `<main>` |
| `MarketingHeroSection` | Hero com refs para intro |
| `MarketingContentSection` | Seção com título + `ScrollReveal` |
| `ScrollReveal` | Revela bloco ao rolar |
| `MotionLayout` | Só animação enter da página (usado por `MarketingMotionPage`) |

### Configs (`@/motions/configs`)

- `DURATION`, `DELAY`, `EASING_PRESETS`
- `SCROLL_DEFAULTS`, `STAGGER`, `ANIMATION_PRESETS`

### Imports recomendados

```js
// Bom — tree-shaking
import { loadGsap } from '@/motions/lib/loadGsap';
import { useGsap } from '@/motions/hooks/useGsap';
import { DURATION } from '@/motions/configs';

// Evite em arquivos compartilhados por muitas rotas
import { everything } from '@/motions';
```

Alias `@` → `src` está em `vite.config.js`.

---

## 9. Estilos iniciais (evitar “flash” antes do GSAP)

O CSS compartilhado está em `src/motions/primitives/marketingPage.module.css`:

- `.heroTitle` e `.heroDescription` começam com `opacity: 0` e `translateY(24px)`.
- Com `prefers-reduced-motion: reduce`, ficam visíveis sem animação.

Ao criar novos elementos animados por GSAP, defina estado inicial no CSS **ou** com `gsap.set` antes do `gsap.to`.

---

## 10. Estender o intro de uma página

Hoje `useLandingIntro` só repassa para `useMarketingIntro`:

```js
// src/pages/LandingPage/motion/useLandingIntro.js
import { useMarketingIntro } from '@/motions/hooks/useMarketingIntro';

export function useLandingIntro(refs) {
  useMarketingIntro(refs, { enabled: true });
}
```

Para intro **diferente** na Landing, substitua o corpo por uma timeline própria (seção 6) ou estenda:

```js
export function useLandingIntro(refs) {
  useMarketingIntro(refs);
  useMinhaTimelineExtra(refs); // outro hook no mesmo motion/
}
```

---

## 11. O que **não** fazer

1. Envolver o **router global** com `MarketingMotionPage` ou `MotionLayout`.
2. `import gsap from 'gsap'` em `main.jsx`, `App.jsx` ou componentes usados no dashboard.
3. Colocar timelines específicas da Vendas em `src/motions/` (vai virar monólito).
4. Esquecer `registerAnimation` / cleanup ao criar timelines manuais.
5. Ignorar `useReducedMotion()` em animações longas, pin ou 3D.
6. Usar `useScrollAnimation` esperando ScrollTrigger — o nome é legado; o hook usa **IntersectionObserver**. Para ScrollTrigger, use `loadGsap()` diretamente.

---

## 12. Checklist ao corrigir / entregar uma tela marketing

- [ ] Motion só nesta rota (sem imports pesados em layout global)
- [ ] GSAP/Three via `loadGsap()` / `loadThree()` ou `lazy()`
- [ ] `useGsap().registerAnimation` em timelines criadas à mão
- [ ] Testado com `prefers-reduced-motion: reduce` no DevTools
- [ ] Navegação rápida entre rotas não deixa animação “fantasma”
- [ ] Build: chunk `vendor-gsap` não aparece ao abrir só `/login` (Network no DevTools)

---

## 13. Árvore de arquivos útil

```
src/motions/
├── configs/           # DURATION, EASING_PRESETS, SCROLL_DEFAULTS
├── hooks/             # useGsap, useMarketingIntro, useReducedMotion, ...
├── lib/               # loadGsap, loadThree
├── primitives/        # MarketingMotionPage, ScrollReveal, ...
└── r3f/               # ImmersiveCanvas, useR3FBridge

src/pages/LandingPage/
├── index.jsx
├── styles.module.css  # estilos só desta página
└── motion/
    └── useLandingIntro.js

src/pages/shared/
└── createMarketingPage.jsx   # factory das outras 4 marketing
```

---

## 14. Exemplos de código

Mais snippets comentados: [`src/motions/EXEMPLOS.md`](../src/motions/EXEMPLOS.md).

Resumo da arquitetura: [`src/motions/README.md`](../src/motions/README.md).
