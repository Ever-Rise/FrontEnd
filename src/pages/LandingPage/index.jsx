import React, { useRef } from 'react';
import MarketingMotionPage from '@/motions/primitives/MarketingMotionPage';
import { useLandingIntro } from './motion/useLandingIntro';
import HeroSection from './sections/HeroSection';
import ContentSection from './sections/ContentSection';
import motionStyles from '@/motions/primitives/marketingPage.module.css';
import styles from './styles.module.css';

const LandingPage = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useLandingIntro({ heroRef, titleRef, descriptionRef });

  return (
    <MarketingMotionPage
      pageId="landing"
      className={`${motionStyles.container} ${styles.container}`}
    >
      <HeroSection
        heroRef={heroRef}
        titleRef={titleRef}
        descriptionRef={descriptionRef}
        title="Pagina Inicial"
        description="Plataforma hospitalar autonoma EVERRISE — motion design com GSAP e scroll reveal."
      />
      <ContentSection title="Proximos passos">
        Conteudo da landing em construcao. Efeitos piloto: intro GSAP no hero e
        revelacao ao rolar nesta secao.
      </ContentSection>
    </MarketingMotionPage>
  );
};

export default LandingPage;
