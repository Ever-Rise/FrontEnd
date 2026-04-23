/**
 * useThreeCanvas - Hook para inicializar e gerenciar canvas Three.js
 */

import { useEffect, useRef, useCallback } from 'react';

export const useThreeCanvas = (config = {}) => {
  const {
    width = typeof window !== 'undefined' ? window.innerWidth : 1024,
    height = typeof window !== 'undefined' ? window.innerHeight : 768,
    backgroundColor = '#000000',
    alpha = true,
  } = config;

  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const animationIdRef = useRef(null);

  /**
   * Inicializar contexto Three.js
   */
  const initializeThree = useCallback(async () => {
    if (!containerRef.current) return;

    try {
      // Three.js será importado após instalação
      console.log('[THREE] Canvas ready for Three.js integration', {
        container: containerRef.current,
        width,
        height,
        backgroundColor,
      });

      return {
        container: containerRef.current,
        config: { width, height, backgroundColor, alpha },
      };
    } catch (error) {
      console.error('[THREE] Failed to initialize:', error);
    }
  }, [width, height, backgroundColor, alpha]);

  /**
   * Responsividade
   */
  const handleResize = useCallback(() => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    if (rendererRef.current) {
      rendererRef.current.setSize(newWidth, newHeight);
    }

    if (cameraRef.current) {
      cameraRef.current.aspect = newWidth / newHeight;
      cameraRef.current.updateProjectionMatrix?.();
    }
  }, []);

  /**
   * Render loop
   */
  const startRenderLoop = useCallback((onRender) => {
    const loop = () => {
      onRender?.();
      animationIdRef.current = requestAnimationFrame(loop);
    };
    loop();
  }, []);

  /**
   * Stop render loop
   */
  const stopRenderLoop = useCallback(() => {
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
    }
  }, []);

  /**
   * Cleanup
   */
  useEffect(() => {
    initializeThree();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      stopRenderLoop();

      // Dispose Three.js resources
      rendererRef.current?.dispose?.();
    };
  }, [initializeThree, handleResize, stopRenderLoop]);

  return {
    containerRef,
    sceneRef,
    rendererRef,
    cameraRef,
    initializeThree,
    startRenderLoop,
    stopRenderLoop,
    getSize: () => ({ width, height }),
  };
};
