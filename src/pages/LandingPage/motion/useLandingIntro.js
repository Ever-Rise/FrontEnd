import { useMarketingIntro } from '@/motions/hooks/useMarketingIntro';

export function useLandingIntro(refs) {
  useMarketingIntro(refs, { enabled: true });
}
