import { useEffect } from 'react';
import { loadGsap } from '../lib/loadGsap.js';
import { DURATION, EASING_PRESETS } from '../configs/index.ts';
import { useGsap } from './useGsap.js';
import { useReducedMotion } from './useReducedMotion.js';

/**
 * Intro GSAP para páginas marketing (hero title + description).
 */
export function useMarketingIntro(refs, options = {}) {
  const { heroRef, titleRef, descriptionRef } = refs;
  const { enabled = true } = options;
  const reducedMotion = useReducedMotion();
  const { registerAnimation } = useGsap();

  useEffect(() => {
    if (!enabled || reducedMotion) return undefined;

    let cancelled = false;

    (async () => {
      const { gsap } = await loadGsap();
      if (cancelled) return;

      const targets = [heroRef, titleRef, descriptionRef]
        .map((ref) => ref?.current)
        .filter(Boolean);

      if (!targets.length) return;

      gsap.set(targets, { opacity: 0, y: 24 });

      const tl = gsap.timeline({ defaults: { ease: EASING_PRESETS.easeOutCubic } });

      if (heroRef?.current) {
        tl.to(heroRef.current, { opacity: 1, y: 0, duration: DURATION.normal });
      }
      if (titleRef?.current) {
        tl.to(
          titleRef.current,
          { opacity: 1, y: 0, duration: DURATION.fast },
          '-=0.35',
        );
      }
      if (descriptionRef?.current) {
        tl.to(
          descriptionRef.current,
          { opacity: 1, y: 0, duration: DURATION.fast },
          '-=0.2',
        );
      }

      registerAnimation(tl, 'marketing-intro');
    })();

    return () => {
      cancelled = true;
    };
  }, [
    enabled,
    reducedMotion,
    heroRef,
    titleRef,
    descriptionRef,
    registerAnimation,
  ]);
}
