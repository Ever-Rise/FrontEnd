import React, { createContext, useContext, useRef, useEffect } from 'react';
import { loadGsap } from '../lib/loadGsap.js';

const R3FBridgeContext = createContext(null);

export function R3FBridgeProvider({ children }) {
  const cameraRef = useRef(null);
  const sceneRef = useRef(null);
  const objects = useRef(new Map());
  const timelines = useRef([]);

  useEffect(() => {
    return () => {
      timelines.current.forEach((tl) => {
        try {
          tl.kill?.();
        } catch {
          /* noop */
        }
      });
      timelines.current = [];
      objects.current.clear();
      cameraRef.current = null;
      sceneRef.current = null;
    };
  }, []);

  async function tweenTo(target, vars = {}, opts = {}) {
    const { gsap } = await loadGsap();
    const tl = gsap.timeline(opts.timeline || {});

    if (target.camera && cameraRef.current) {
      const cam = cameraRef.current;
      if (target.camera.position) {
        tl.to(cam.position, {
          ...target.camera.position,
          duration: opts.duration || 1,
        });
      }
      if (target.camera.rotation) {
        tl.to(
          cam.rotation,
          { ...target.camera.rotation, duration: opts.duration || 1 },
          0,
        );
      }
    }

    Object.keys(target).forEach((key) => {
      if (key === 'camera') return;
      const obj = objects.current.get(key);
      if (obj) {
        tl.to(
          obj,
          { ...target[key], duration: opts.duration || 1 },
          opts.offset || 0,
        );
      }
    });

    timelines.current.push(tl);
    return tl;
  }

  function registerCamera(ref) {
    cameraRef.current = ref;
  }
  function registerScene(ref) {
    sceneRef.current = ref;
  }
  function registerObject(key, ref) {
    objects.current.set(key, ref);
  }

  return (
    <R3FBridgeContext.Provider
      value={{ registerCamera, registerScene, registerObject, tweenTo }}
    >
      {children}
    </R3FBridgeContext.Provider>
  );
}

export function useR3FBridge() {
  const ctx = useContext(R3FBridgeContext);
  if (!ctx) {
    throw new Error('useR3FBridge must be used within R3FBridgeProvider');
  }
  return ctx;
}
