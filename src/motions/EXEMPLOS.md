# Exemplos — módulo Motion

Copie e adapte estes trechos ao corrigir páginas marketing.  
Guia completo: [`docs/10-guia-uso-animacoes.md`](../../docs/10-guia-uso-animacoes.md).

---

## 1. Página marketing completa (padrão Landing)

```jsx
import React, { useRef } from 'react';
import MarketingMotionPage from '@/motions/primitives/MarketingMotionPage';
import MarketingHeroSection from '@/motions/primitives/MarketingHeroSection';
import MarketingContentSection from '@/motions/primitives/MarketingContentSection';
import { useLandingIntro } from './motion/useLandingIntro';
import motionStyles from '@/motions/primitives/marketingPage.module.css';

export default function LandingPage() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useLandingIntro({ heroRef, titleRef, descriptionRef });

  return (
    <MarketingMotionPage pageId="landing" className={motionStyles.container}>
      <MarketingHeroSection
        heroRef={heroRef}
        titleRef={titleRef}
        descriptionRef={descriptionRef}
        title="Titulo"
        description="Subtitulo"
        className={motionStyles.hero}
        titleClassName={motionStyles.heroTitle}
        descriptionClassName={motionStyles.heroDescription}
      />
      <MarketingContentSection title="Secao">
        Conteudo com scroll reveal.
      </MarketingContentSection>
    </MarketingMotionPage>
  );
}
```

---

## 2. GSAP customizado (sempre com loadGsap + useGsap)

```jsx
import { useEffect, useRef } from 'react';
import { loadGsap } from '@/motions/lib/loadGsap';
import { useGsap } from '@/motions/hooks/useGsap';
import { useReducedMotion } from '@/motions/hooks/useReducedMotion';
import { DURATION, EASING_PRESETS } from '@/motions/configs';

export function useHeroStagger() {
  const listRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const { registerAnimation } = useGsap();

  useEffect(() => {
    if (reducedMotion || !listRef.current) return undefined;

    let cancelled = false;

    (async () => {
      const { gsap } = await loadGsap();
      if (cancelled) return;

      const items = listRef.current.querySelectorAll('[data-animate]');
      const tl = gsap.from(items, {
        opacity: 0,
        y: 20,
        stagger: 0.08,
        duration: DURATION.fast,
        ease: EASING_PRESETS.easeOutCubic,
      });

      registerAnimation(tl, 'hero-stagger');
    })();

    return () => {
      cancelled = true;
    };
  }, [reducedMotion, registerAnimation]);

  return { listRef };
}
```

---

## 3. ScrollTrigger (pin / scrub)

```jsx
import { useEffect, useRef } from 'react';
import { loadGsap } from '@/motions/lib/loadGsap';
import { useGsap } from '@/motions/hooks/useGsap';
import { useReducedMotion } from '@/motions/hooks/useReducedMotion';
import { SCROLL_DEFAULTS } from '@/motions/configs';

export function usePinnedSection() {
  const sectionRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const { registerAnimation } = useGsap();

  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return undefined;

    let cancelled = false;
    let scrollTriggerInstance;

    (async () => {
      const { gsap, ScrollTrigger } = await loadGsap();
      if (cancelled) return;

      const anim = gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: SCROLL_DEFAULTS.start,
          end: '+=400',
          scrub: SCROLL_DEFAULTS.scrub,
          pin: true,
        },
        opacity: 1,
      });

      scrollTriggerInstance = anim.scrollTrigger;
      registerAnimation(anim, 'pinned-section');
    })();

    return () => {
      cancelled = true;
      scrollTriggerInstance?.kill();
    };
  }, [reducedMotion, registerAnimation]);

  return { sectionRef };
}
```

---

## 4. Revelação por viewport (sem GSAP)

```jsx
import { useRef } from 'react';
import { useIntersectionReveal } from '@/motions/hooks/useIntersectionReveal';

export function MeuBloco() {
  const ref = useRef(null);

  useIntersectionReveal({
    trigger: ref,
    onEnter: () => ref.current?.classList.add('is-visible'),
    onLeave: () => ref.current?.classList.remove('is-visible'),
  });

  return <section ref={ref}>Conteudo</section>;
}
```

---

## 5. Cena 3D lazy na página

```jsx
// index.jsx da pagina
import { lazy, Suspense } from 'react';
import Loader from '@/components/common/Loader';

const HeroScene = lazy(() => import('./motion/HeroScene'));

export default function ProdutoPage() {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <HeroScene />
      </Suspense>
    </main>
  );
}
```

```jsx
// motion/HeroScene.jsx
import { ImmersiveCanvas } from '@/motions/r3f';

export default function HeroScene() {
  return (
    <ImmersiveCanvas
      style={{ width: '100%', height: '400px' }}
    />
  );
}
```

---

## 6. Página app normal (sem motion pesado)

```jsx
// Login, Dashboard, etc. — sem @/motions/lib ou r3f
import React from 'react';
import styles from './styles.module.css';

export default function LoginPage() {
  return (
    <main className={styles.container}>
      <h1>Login</h1>
    </main>
  );
}
```

---

## 7. Constantes úteis

```js
import {
  DURATION,
  EASING_PRESETS,
  SCROLL_DEFAULTS,
  STAGGER,
  ANIMATION_PRESETS,
} from '@/motions/configs';
```
