import { useRef } from 'react';

export const useThreeCanvas = () => ({
  containerRef: useRef(null),
  sceneRef: useRef(null),
  rendererRef: useRef(null),
  cameraRef: useRef(null),
  initializeThree: async () => undefined,
  startRenderLoop: () => undefined,
  stopRenderLoop: () => undefined,
  getSize: () => ({ width: 0, height: 0 }),
});
