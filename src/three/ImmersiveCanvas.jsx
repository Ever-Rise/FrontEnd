import React, { useRef, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { R3FBridgeProvider, useR3FBridge } from "./useR3FBridge";
import { Mesh } from "three";

function SceneContent() {
  const meshRef = useRef();
  const { camera, scene } = useThree();
  const bridge = useR3FBridge();

  useEffect(() => {
    // register camera and a sample object
    bridge.registerCamera(camera);
    bridge.registerScene(scene);
    if (meshRef.current) bridge.registerObject("sampleBox", meshRef.current);

    return () => {
      // cleanup: dispose geometry/material
      if (meshRef.current) {
        try {
          meshRef.current.geometry?.dispose?.();
          meshRef.current.material?.dispose?.();
        } catch (e) {}
      }
    };
  }, [bridge, camera, scene]);

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshStandardMaterial color="#6c5ce7" />
      </mesh>
      <OrbitControls />
    </>
  );
}

export default function ImmersiveCanvas({ style, className }) {
  return (
    <R3FBridgeProvider>
      <Canvas
        camera={{ position: [0, 0, 5] }}
        style={style}
        className={className}
      >
        <SceneContent />
      </Canvas>
    </R3FBridgeProvider>
  );
}
