import React from 'react';
import styles from './styles.module.css';

const PAGE_NAME = 'Planos e Vendas';

const VendasPage = () => {
  return (
    <main className={styles.container} role='main'>
      <h1 className={styles.title}>{PAGE_NAME}</h1>
      <p className={styles.description}>Conteudo desta pagina em construcao para a plataforma hospitalar autonoma.</p>
    </main>
  );
};

export default VendasPage;

