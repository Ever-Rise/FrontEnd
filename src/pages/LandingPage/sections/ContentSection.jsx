import React from 'react';
import MarketingContentSection from '@/motions/primitives/MarketingContentSection';

export default function ContentSection({ title, children }) {
  return (
    <MarketingContentSection title={title}>{children}</MarketingContentSection>
  );
}
