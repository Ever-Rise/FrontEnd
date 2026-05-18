import { useMarketingIntro } from '@/motions/hooks/useMarketingIntro';

export function useParceirosIntro(refs) {
  useMarketingIntro(refs, { enabled: true });
}
