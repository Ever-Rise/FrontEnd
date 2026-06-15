import { useMarketingIntro } from '@/motions/hooks/useMarketingIntro';

export function useProdutoIntro(refs) {
  useMarketingIntro(refs, { enabled: true });
}
