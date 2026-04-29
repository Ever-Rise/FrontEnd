/**
 * Vector Math Utilities
 * Cálculos vetoriais para animações 3D
 */

/**
 * Criar vetor 3D
 */
export const vec3 = (x = 0, y = 0, z = 0) => ({ x, y, z });

/**
 * Criar vetor 2D
 */
export const vec2 = (x = 0, y = 0) => ({ x, y });

/**
 * Adicionar vetores
 */
export const add = (a, b) => ({
  x: a.x + b.x,
  y: a.y + b.y,
  z: a.z + b.z,
});

/**
 * Subtrair vetores
 */
export const subtract = (a, b) => ({
  x: a.x - b.x,
  y: a.y - b.y,
  z: a.z - b.z,
});

/**
 * Escalar vetor
 */
export const scale = (v, scalar) => ({
  x: v.x * scalar,
  y: v.y * scalar,
  z: v.z * scalar,
});

/**
 * Magnitude (comprimento do vetor)
 */
export const magnitude = (v) => Math.sqrt(v.x * v.x + v.y * v.y + (v.z * v.z || 0));

/**
 * Normalizar vetor
 */
export const normalize = (v) => {
  const mag = magnitude(v);
  if (mag === 0) return vec3();
  return scale(v, 1 / mag);
};

/**
 * Produto escalar (dot product)
 */
export const dot = (a, b) => a.x * b.x + a.y * b.y + (a.z * b.z || 0);

/**
 * Produto vetorial (cross product)
 */
export const cross = (a, b) => ({
  x: a.y * b.z - a.z * b.y,
  y: a.z * b.x - a.x * b.z,
  z: a.x * b.y - a.y * b.x,
});

/**
 * Distância entre vetores
 */
export const distance = (a, b) => magnitude(subtract(a, b));

/**
 * Interpolação linear (lerp)
 */
export const lerp = (a, b, t) => {
  const clampedT = Math.max(0, Math.min(1, t));
  return {
    x: a.x + (b.x - a.x) * clampedT,
    y: a.y + (b.y - a.y) * clampedT,
    z: a.z + (b.z - a.z) * clampedT,
  };
};

/**
 * Smooth interpolation (smooth step)
 */
export const smoothstep = (a, b, t) => {
  const smoothT = t * t * (3 - 2 * t);
  return lerp(a, b, smoothT);
};

/**
 * Clampar valor entre min e max
 */
export const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

/**
 * Map valor de um range para outro
 */
export const map = (value, inMin, inMax, outMin, outMax) => {
  return ((value - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
};
