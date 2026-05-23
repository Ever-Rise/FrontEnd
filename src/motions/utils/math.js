export const vec3 = (x = 0, y = 0, z = 0) => ({ x, y, z });
export const vec2 = (x = 0, y = 0) => ({ x, y });
export const add = (a, b) => ({ x: a.x + b.x, y: a.y + b.y, z: a.z + b.z });
export const subtract = (a, b) => ({ x: a.x - b.x, y: a.y - b.y, z: a.z - b.z });
export const scale = (v, scalar) => ({ x: v.x * scalar, y: v.y * scalar, z: v.z * scalar });
export const magnitude = (v) => Math.sqrt(v.x * v.x + v.y * v.y + (v.z * v.z || 0));
export const normalize = (v) => (magnitude(v) === 0 ? vec3() : scale(v, 1 / magnitude(v)));
export const dot = (a, b) => a.x * b.x + a.y * b.y + (a.z * b.z || 0);
export const cross = (a, b) => ({ x: a.y * b.z - a.z * b.y, y: a.z * b.x - a.x * b.z, z: a.x * b.y - a.y * b.x });
export const distance = (a, b) => magnitude(subtract(a, b));
export const lerp = (a, b, t) => {
  const clampedT = Math.max(0, Math.min(1, t));
  return { x: a.x + (b.x - a.x) * clampedT, y: a.y + (b.y - a.y) * clampedT, z: a.z + (b.z - a.z) * clampedT };
};
export const smoothstep = (a, b, t) => lerp(a, b, t * t * (3 - 2 * t));
export const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
export const map = (value, inMin, inMax, outMin, outMax) => ((value - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
