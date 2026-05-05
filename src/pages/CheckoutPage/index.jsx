import React from 'react';
import styles from './styles.module.css';
import Header from '../../components/layout/Header';

const PAGE_NAME = 'Finalizacao de Compra';

const CheckoutPage = () => {
  return (
    <main className={styles.container} role='main'>
      <Header />
    </main>
  );
};

export default CheckoutPage;

