import React, { useRef, useEffect, useState, useCallback } from 'react';
import { loadGsap } from '../lib/loadGsap.js';
import { DURATION, EASING_PRESETS } from '../configs/index.ts';
import { useIntersectionReveal } from '../hooks/useIntersectionReveal.js';
import { useReducedMotion } from '../hooks/useReducedMotion.js';
import { useGsap } from '../hooks/useGsap.js';

/**
 * Revela conteúdo ao entrar na viewport (IO + GSAP opcional).
 */
export default function ScrollReveal({
  children,
  className,
  as: Component = 'section',
  disabled = false,
}) {
  const sectionRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const { registerAnimation } = useGsap();
  const [revealed, setRevealed] = useState(reducedMotion);
  const [sectionNode, setSectionNode] = useState(null);

  const setSectionRef = useCallback((node) => {
    sectionRef.current = node;
    setSectionNode(node);
  }, []);

  useIntersectionReveal({
    trigger: sectionNode,
    onEnter: () => setRevealed(true),
  });

  useEffect(() => {
    if (disabled || reducedMotion || !revealed || !sectionRef.current) {
      return undefined;
    }

    let cancelled = false;

    (async () => {
      const { gsap } = await loadGsap();
      if (cancelled || !sectionRef.current) return;

      const anim = gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: DURATION.normal,
          ease: EASING_PRESETS.easeOutCubic,
        },
      );
      registerAnimation(anim, 'scroll-reveal');
    })();

    return () => {
      cancelled = true;
    };
  }, [disabled, reducedMotion, revealed, registerAnimation]);

  const style =
    reducedMotion || revealed
      ? undefined
      : { opacity: 0, transform: 'translateY(32px)' };

  return (
    <Component ref={setSectionRef} className={className} style={style}>
      {children}
    </Component>
  );
}
