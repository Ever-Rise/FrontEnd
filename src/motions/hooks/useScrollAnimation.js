/**
 * useScrollAnimation - Hook para animações de scroll com GSAP
 */

import { useEffect, useRef, useCallback } from 'react';

export const useScrollAnimation = (config = {}) => {
  const {
    trigger,
    start = 'top 80%',
    end = 'top 20%',
    scrub = 1,
    markers = false,
    onEnter,
    onLeave,
  } = config;

  const triggerRef = useRef(null);
  const observerRef = useRef(null);

  /**
   * Detectar scroll com IntersectionObserver
   */
  const setupScrollDetection = useCallback((element) => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onEnter?.();
        } else {
          onLeave?.();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    observerRef.current = observer;

    return () => {
      observer.unobserve(element);
    };
  }, [onEnter, onLeave]);

  /**
   * Inicializar
   */
  useEffect(() => {
    if (!trigger) return;

    const element = typeof trigger === 'string' ? document.querySelector(trigger) : trigger;
    if (element) {
      triggerRef.current = element;
      return setupScrollDetection(element);
    }
  }, [trigger, setupScrollDetection]);

  /**
   * Cleanup
   */
  useEffect(() => {
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return {
    triggerRef,
    config: {
      start,
      end,
      scrub,
      markers,
    },
  };
};
