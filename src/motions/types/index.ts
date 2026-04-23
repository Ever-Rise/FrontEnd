/**
 * Types do módulo Motion
 * Definições centralizadas para tipagem em todo o módulo
 */

// ===== TIPOS PARA THREE.JS =====
export interface ThreeSceneConfig {
  width?: number;
  height?: number;
  backgroundColor?: string | number;
  alpha?: boolean;
  antialias?: boolean;
  powerPreference?: 'low-power' | 'high-performance' | 'default';
}

export interface ThreeSceneInstance {
  scene: any;
  camera: any;
  renderer: any;
  container: HTMLElement;
}

// ===== TIPOS PARA GSAP =====
export interface GsapAnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
  stagger?: number | { amount: number; from?: 'start' | 'center' | 'end' | 'edges' };
  onComplete?: () => void;
  onStart?: () => void;
  onUpdate?: () => void;
}

export interface ScrollTriggerConfig {
  trigger: string | HTMLElement;
  start?: string;
  end?: string;
  scrub?: number | boolean;
  markers?: boolean;
  pin?: boolean | string | HTMLElement;
  anticipatePin?: number;
  onEnter?: (self: any) => void;
  onLeave?: (self: any) => void;
  onEnterBack?: (self: any) => void;
  onLeaveBack?: (self: any) => void;
}

// ===== TIPOS PARA MOUSE & INTERAÇÃO =====
export interface MousePosition {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
  velocityX?: number;
  velocityY?: number;
}

export interface InteractionConfig {
  enableMouse?: boolean;
  enableTouch?: boolean;
  smoothness?: number;
  throttleMs?: number;
}

// ===== TIPOS PARA TIMELINES =====
export interface TimelineSequence {
  id: string;
  duration: number;
  delay?: number;
  target: any;
  vars: any;
}

// ===== TIPOS DE EASING =====
export type EasingType =
  | 'power1.inOut'
  | 'power1.in'
  | 'power1.out'
  | 'power2.inOut'
  | 'power2.in'
  | 'power2.out'
  | 'power3.inOut'
  | 'power3.in'
  | 'power3.out'
  | 'power4.inOut'
  | 'power4.in'
  | 'power4.out'
  | 'sine.inOut'
  | 'sine.in'
  | 'sine.out'
  | 'expo.inOut'
  | 'expo.in'
  | 'expo.out'
  | 'circ.inOut'
  | 'circ.in'
  | 'circ.out'
  | 'back.inOut'
  | 'back.in'
  | 'back.out'
  | 'elastic.inOut'
  | 'elastic.in'
  | 'elastic.out'
  | 'none';

// ===== CONTEXTO DE MOTION =====
export interface MotionContextValue {
  isPaused: boolean;
  isMuted: boolean;
  reduceMotion: boolean;
  quality: 'high' | 'medium' | 'low';
  fps: number;
  togglePause: () => void;
  toggleMute: () => void;
}

// ===== CONFIGURAÇÃO DE PERFORMANCE =====
export interface PerformanceConfig {
  targetFPS: number;
  reduceQualityThreshold: number;
  disableAnimationsThreshold: number;
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
