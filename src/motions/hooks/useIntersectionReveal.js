/**
 * Revelação por viewport via IntersectionObserver (sem GSAP).
 */

import { useEffect, useRef, useCallback } from 'react';

export const useIntersectionReveal = (config = {}) => {
  const {
    trigger,
    threshold = 0.1,
    rootMargin = '0px',
    onEnter,
    onLeave,
  } = config;

  const triggerRef = useRef(null);
  const observerRef = useRef(null);

  const setupScrollDetection = useCallback(
    (element) => {
      if (!element) return undefined;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            onEnter?.(entry);
          } else {
            onLeave?.(entry);
          }
        },
        { threshold, rootMargin },
      );

      observer.observe(element);
      observerRef.current = observer;

      return () => observer.unobserve(element);
    },
    [onEnter, onLeave, threshold, rootMargin],
  );

  useEffect(() => {
    if (!trigger) return undefined;

    const element =
      typeof trigger === 'string'
        ? document.querySelector(trigger)
        : trigger?.current ?? trigger;

    if (element) {
      triggerRef.current = element;
      return setupScrollDetection(element);
    }
    return undefined;
  }, [trigger, setupScrollDetection]);

  useEffect(() => {
    return () => observerRef.current?.disconnect();
  }, []);

  return { triggerRef };
};

/** @deprecated Use useIntersectionReveal */
export const useScrollAnimation = useIntersectionReveal;
