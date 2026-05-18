import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

function getReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return false;
  }
  return window.matchMedia(QUERY).matches;
}

/**
 * Respeita prefers-reduced-motion do sistema.
 */
export function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(getReducedMotion);

  useEffect(() => {
    const media = window.matchMedia(QUERY);
    const onChange = (event) => setReducedMotion(event.matches);
    media.addEventListener('change', onChange);
    setReducedMotion(media.matches);
    return () => media.removeEventListener('change', onChange);
  }, []);

  return reducedMotion;
}
