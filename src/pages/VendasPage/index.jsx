import { createMarketingPage } from '../shared/createMarketingPage';
import { useVendasIntro } from './motion/useVendasIntro';

const VendasPage = createMarketingPage({
  pageId: 'vendas',
  usePageIntro: useVendasIntro,
  title: 'Planos e Vendas',
  description:
    'Conheca os planos da plataforma hospitalar autonoma EVERRISE.',
  contentTitle: 'Ofertas',
  contentBody:
    'Conteudo desta pagina em construcao. Animacoes GSAP carregadas apenas nesta rota.',
});

export default VendasPage;
