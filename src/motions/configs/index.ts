/**
 * Configurações globais do módulo Motion
 * Centraliza constantes, presets e valores padrão
 */

import type { EasingType, PerformanceConfig } from '../types';

// ===== EASINGS PRESETS =====
export const EASING_PRESETS: Record<string, EasingType> = {
  // Entrada suave
  easeInQuad: 'power1.in',
  easeInCubic: 'power2.in',
  easeInQuart: 'power3.in',
  easeInQuint: 'power4.in',

  // Saída suave
  easeOutQuad: 'power1.out',
  easeOutCubic: 'power2.out',
  easeOutQuart: 'power3.out',
  easeOutQuint: 'power4.out',

  // Entrada e Saída
  easeInOutQuad: 'power1.inOut',
  easeInOutCubic: 'power2.inOut',
  easeInOutQuart: 'power3.inOut',
  easeInOutQuint: 'power4.inOut',

  // Especiais
  easeInSine: 'sine.in',
  easeOutSine: 'sine.out',
  easeInOutSine: 'sine.inOut',

  easeInExpo: 'expo.in',
  easeOutExpo: 'expo.out',
  easeInOutExpo: 'expo.inOut',

  easeInCirc: 'circ.in',
  easeOutCirc: 'circ.out',
  easeInOutCirc: 'circ.inOut',

  easeInBack: 'back.in',
  easeOutBack: 'back.out',
  easeInOutBack: 'back.inOut',

  easeInElastic: 'elastic.in',
  easeOutElastic: 'elastic.out',
  easeInOutElastic: 'elastic.inOut',

  // Linear
  linear: 'none',
};

// ===== DURAÇÕES PADRÃO (em segundos) =====
export const DURATION = {
  instant: 0.1,
  fast: 0.3,
  normal: 0.6,
  slow: 1,
  verySlow: 1.5,
  glacial: 2,
} as const;

// ===== DELAYS PADRÃO (em segundos) =====
export const DELAY = {
  none: 0,
  tiny: 0.05,
  small: 0.1,
  medium: 0.2,
  large: 0.5,
  veryLarge: 1,
} as const;

// ===== CONFIGURAÇÕES THREE.JS PADRÃO =====
export const THREE_DEFAULTS = {
  renderer: {
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance' as const,
    precision: 'highp' as const,
  },
  camera: {
    fov: 75,
    near: 0.1,
    far: 1000,
    position: { x: 0, y: 0, z: 5 },
  },
  lights: {
    ambient: { intensity: 0.5, color: 0xffffff },
    directional: { intensity: 0.8, color: 0xffffff, position: { x: 5, y: 5, z: 5 } },
  },
} as const;

// ===== SCROLL TRIGGER DEFAULTS =====
export const SCROLL_DEFAULTS = {
  start: 'top 80%',
  end: 'top 20%',
  scrub: 1,
  markers: false,
  anticipatePin: 1,
} as const;

// ===== CORES PADRÃO =====
export const COLOR_PALETTE = {
  primary: '#FF6B6B',
  secondary: '#4ECDC4',
  accent: '#FFE66D',
  success: '#95E1D3',
  danger: '#FF6B6B',
  warning: '#FFA07A',
  info: '#74B9FF',
  dark: '#2D3436',
  light: '#F5F6FA',
} as const;

// ===== PERFORMANCE CONFIG =====
export const PERFORMANCE_DEFAULTS: PerformanceConfig = {
  targetFPS: 60,
  reduceQualityThreshold: 30,
  disableAnimationsThreshold: 15,
  cleanupTimeout: 60000, // 60 segundos
} as const;

// ===== STAGGER DEFAULTS =====
export const STAGGER = {
  default: 0.1,
  fast: 0.05,
  slow: 0.2,
} as const;

// ===== PRESETS DE ANIMAÇÕES COMUNS =====
export const ANIMATION_PRESETS = {
  fadeIn: {
    duration: DURATION.normal,
    easing: EASING_PRESETS.easeOutCubic,
    opacity: { from: 0, to: 1 },
  },
  fadeOut: {
    duration: DURATION.normal,
    easing: EASING_PRESETS.easeInCubic,
    opacity: { from: 1, to: 0 },
  },
  slideInLeft: {
    duration: DURATION.normal,
    easing: EASING_PRESETS.easeOutCubic,
    x: { from: -100, to: 0 },
  },
  slideInRight: {
    duration: DURATION.normal,
    easing: EASING_PRESETS.easeOutCubic,
    x: { from: 100, to: 0 },
  },
  scaleUp: {
    duration: DURATION.normal,
    easing: EASING_PRESETS.easeOutCubic,
    scale: { from: 0.8, to: 1 },
  },
  rotate: {
    duration: DURATION.slow,
    easing: EASING_PRESETS.linear,
    rotation: 360,
  },
  bounce: {
    duration: DURATION.normal,
    easing: EASING_PRESETS.easeOutElastic,
    y: { from: 0, to: 20, repeat: -1, yoyo: true },
  },
} as const;
