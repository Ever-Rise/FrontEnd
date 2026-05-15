import React from 'react';
import MarketingHeroSection from '@/motions/primitives/MarketingHeroSection';
import motionStyles from '@/motions/primitives/marketingPage.module.css';

export default function HeroSection({
  heroRef,
  titleRef,
  descriptionRef,
  title,
  description,
}) {
  return (
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
  );
}
