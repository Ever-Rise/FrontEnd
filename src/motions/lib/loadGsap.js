let gsapPromise = null;

/**
 * Carrega GSAP + ScrollTrigger sob demanda (code-split).
 */
export async function loadGsap() {
  if (!gsapPromise) {
    gsapPromise = (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      return { gsap, ScrollTrigger };
    })();
  }
  return gsapPromise;
}
