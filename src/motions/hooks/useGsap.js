/**
 * useGsap - Hook principal para gerenciar animações GSAP
 * Oferece API simplificada e cleanup automático
 */

import { useEffect, useRef, useCallback } from 'react';

export const useGsap = (config = { debug: false, autoCleanup: true }) => {
  const animationsRef = useRef(new Map());
  const { debug, autoCleanup } = config;

  /**
   * Registra uma animação para rastreamento
   */
  const registerAnimation = useCallback((animation, id) => {
    const animId = id || `anim_${Date.now()}_${Math.random()}`;
    animationsRef.current.set(animId, animation);

    if (debug) {
      console.log(`[GSAP] Animation registered: ${animId}`);
    }

    return animId;
  }, [debug]);

  /**
   * Remove uma animação
   */
  const removeAnimation = useCallback((id) => {
    const anim = animationsRef.current.get(id);
    if (anim) {
      anim.kill?.();
      animationsRef.current.delete(id);

      if (debug) {
        console.log(`[GSAP] Animation removed: ${id}`);
      }
    }
  }, [debug]);

  /**
   * Pausa todas as animações
   */
  const pauseAll = useCallback(() => {
    animationsRef.current.forEach((anim) => anim.pause?.());
    if (debug) console.log('[GSAP] All animations paused');
  }, [debug]);

  /**
   * Retoma todas as animações
   */
  const resumeAll = useCallback(() => {
    animationsRef.current.forEach((anim) => anim.play?.());
    if (debug) console.log('[GSAP] All animations resumed');
  }, [debug]);

  /**
   * Limpa todas as animações
   */
  const clearAll = useCallback(() => {
    animationsRef.current.forEach((anim) => anim.kill?.());
    animationsRef.current.clear();

    if (debug) console.log('[GSAP] All animations cleared');
  }, [debug]);

  /**
   * Cleanup ao desmontar
   */
  useEffect(() => {
    return () => {
      if (autoCleanup) {
        clearAll();
      }
    };
  }, [autoCleanup, clearAll]);

  return {
    registerAnimation,
    removeAnimation,
    pauseAll,
    resumeAll,
    clearAll,
    getAnimationCount: () => animationsRef.current.size,
  };
};
