import { createMarketingPage } from '../shared/createMarketingPage';
import { useParceirosIntro } from './motion/useParceirosIntro';

const ParceirosPage = createMarketingPage({
  pageId: 'parceiros',
  usePageIntro: useParceirosIntro,
  title: 'Rede de Parceiros',
  description:
    'Parceiros da plataforma hospitalar autonoma EVERRISE.',
  contentTitle: 'Parcerias',
  contentBody:
    'Conteudo desta pagina em construcao. Scroll reveal e intro GSAP ativos nesta rota.',
});

export default ParceirosPage;
