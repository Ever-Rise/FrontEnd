import React, { useRef } from 'react';
import MarketingMotionPage from '@/motions/primitives/MarketingMotionPage';
import MarketingHeroSection from '@/motions/primitives/MarketingHeroSection';
import MarketingContentSection from '@/motions/primitives/MarketingContentSection';
import { useMarketingIntro } from '@/motions/hooks/useMarketingIntro';
import motionStyles from '@/motions/primitives/marketingPage.module.css';

/**
 * Factory para páginas marketing com motion (GSAP intro + scroll reveal).
 */
export function createMarketingPage({
  pageId,
  title,
  description,
  contentTitle,
  contentBody,
  extraClassName,
  usePageIntro = useMarketingIntro,
}) {
  function MarketingPage() {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);

    usePageIntro({ heroRef, titleRef, descriptionRef });

    const containerClass = [motionStyles.container, extraClassName]
      .filter(Boolean)
      .join(' ');

    return (
      <MarketingMotionPage pageId={pageId} className={containerClass}>
        <MarketingHeroSection
          heroRef={heroRef}
          titleRef={titleRef}
          descriptionRef={descriptionRef}
          title={title}
          description={description}
          className={motionStyles.hero}
          titleClassName={motionStyles.heroTitle}
          descriptionClassName={motionStyles.heroDescription}
        />
        <MarketingContentSection title={contentTitle}>
          {contentBody}
        </MarketingContentSection>
      </MarketingMotionPage>
    );
  }

  MarketingPage.displayName = `${pageId}Page`;
  return MarketingPage;
}
