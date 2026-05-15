import { createMarketingPage } from '../shared/createMarketingPage';
import { useSustentabilidadeIntro } from './motion/useSustentabilidadeIntro';

const SustentabilidadePage = createMarketingPage({
  pageId: 'sustentabilidade',
  usePageIntro: useSustentabilidadeIntro,
  title: 'Sustentabilidade',
  description:
    'Compromisso ambiental e social da EVERRISE.',
  contentTitle: 'Impacto',
  contentBody:
    'Conteudo desta pagina em construcao. Motion leve com GSAP sob demanda.',
});

export default SustentabilidadePage;
