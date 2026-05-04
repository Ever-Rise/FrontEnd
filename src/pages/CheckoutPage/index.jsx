import React from 'react';
import styles from './styles.module.css';

const PAGE_NAME = 'Finalizacao de Compra';

const CheckoutPage = () => {
  return (
    <main className={styles.container} role='main'>
      <h1 className={styles.title}>{PAGE_NAME}</h1>
      <p className={styles.description}>FODASE.</p>
    </main>
  );
};

export default CheckoutPage;

