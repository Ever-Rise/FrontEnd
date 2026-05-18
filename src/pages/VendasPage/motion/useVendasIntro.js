import { useMarketingIntro } from '@/motions/hooks/useMarketingIntro';

export function useVendasIntro(refs) {
  useMarketingIntro(refs, { enabled: true });
}
