import React from 'react';
import styles from './styles.module.css';

const PAGE_NAME = 'Pagina Inicial';

const LandingPage = () => {
  return (
    <main className={styles.container} role='main'>
      <h1 className={styles.title}>{PAGE_NAME}</h1>
      <p className={styles.description}>Conteudo.</p>
    </main>
  );
};

export default LandingPage;

