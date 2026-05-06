import React from 'react';
import styles from './index.module.css';

const PAGE_NAME = 'Central de Controle';

const ControlePage = () => {
  return (
    <main className={styles.container} role='main'>
      <h1 className={styles.title}>{PAGE_NAME}</h1>
      <p className={styles.description}>Conteudo desta pagina em construcao para a plataforma hospitalar autonoma.</p>
    </main>
  );
};

export default ControlePage;

