import { createMarketingPage } from '../shared/createMarketingPage';
import { useProdutoIntro } from './motion/useProdutoIntro';

const ProdutoPage = createMarketingPage({
  pageId: 'produto',
  usePageIntro: useProdutoIntro,
  title: 'Produto EVERRISE',
  description:
    'Conheca o produto da plataforma hospitalar autonoma.',
  contentTitle: 'Destaques',
  contentBody:
    'Conteudo desta pagina em construcao. Timelines e cenas 3D podem ser adicionadas em pages/ProdutoPage/motion/.',
});

export default ProdutoPage;
