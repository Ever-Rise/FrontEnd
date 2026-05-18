let threePromise = null;

/**
 * Carrega Three.js sob demanda (code-split).
 */
export async function loadThree() {
  if (!threePromise) {
    threePromise = import('three').then((mod) => mod.default ?? mod);
  }
  return threePromise;
}
