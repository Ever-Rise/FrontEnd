// Configurações centrais para adaptividade e acessibilidade de motion
export const MOBILE_BREAKPOINT = 768;

export function isMobile() {
    if (typeof window === 'undefined') return false;
    return window.innerWidth <= MOBILE_BREAKPOINT;
}

export function prefersReducedMotion() {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function getMotionIntensity() {
    // intensidade: 0 (off) -> 1 (full)
    if (prefersReducedMotion()) return 0;
    if (isMobile()) return 0.4;
    // heurística simples para máquinas fracas
    const concurrency = navigator.hardwareConcurrency || 4;
    return concurrency >= 8 ? 1 : 0.7;
}
