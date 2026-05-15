import React from 'react';
import ScrollReveal from './ScrollReveal.jsx';
import styles from './marketingPage.module.css';

export default function MarketingContentSection({ title, children }) {
  return (
    <ScrollReveal className={styles.revealSection}>
      <h2 className={styles.revealTitle}>{title}</h2>
      <p className={styles.revealText}>{children}</p>
    </ScrollReveal>
  );
}
