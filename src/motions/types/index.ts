export type EasingType = string;

export type PerformanceConfig = {
  targetFPS: number;
  reduceQualityThreshold: number;
  disableAnimationsThreshold: number;
  cleanupTimeout?: number;
  cleanupTimeout: number;
}

// ===== TIPOS PARA VECTOR MATH =====
export interface Vector2 {
  x: number;
  y: number;
}

export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export interface Vector4 {
  x: number;
  y: number;
  z: number;
  w: number;
}

// ===== TIPOS PARA SHADERS =====
export interface ShaderMaterial {
  vertexShader: string;
  fragmentShader: string;
  uniforms: Record<string, any>;
}
