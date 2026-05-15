import React from 'react';

export default function MarketingHeroSection({
  heroRef,
  titleRef,
  descriptionRef,
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
}) {
  return (
    <header ref={heroRef} className={className}>
      <h1 ref={titleRef} className={titleClassName}>
        {title}
      </h1>
      {description ? (
        <p ref={descriptionRef} className={descriptionClassName}>
          {description}
        </p>
      ) : null}
    </header>
  );
}
