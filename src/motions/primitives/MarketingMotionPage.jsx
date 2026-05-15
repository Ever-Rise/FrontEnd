import React from 'react';
import MotionLayout from './MotionLayout.jsx';

/**
 * Wrapper Framer Motion para páginas marketing (não usar no router global).
 */
export default function MarketingMotionPage({ children, pageId, className }) {
  return (
    <MotionLayout id={pageId}>
      <main className={className}>{children}</main>
    </MotionLayout>
  );
}
