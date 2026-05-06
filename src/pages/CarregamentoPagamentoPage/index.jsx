import React from 'react';
import styles from './index.module.css';
import Seguranca from '../../assets/icons/CarregamentoPage/Segurança.svg';

const PAGE_NAME = 'Status de Pagamento';

const PagamentoPage = () => {
  return (
    <main className={styles.container} role='main'>
      <div className={styles.content}>

        

        <h2>
          Processando seu pagamento
        </h2>

        <p>Isso pode levar alguns segundos.
        <br /> Não feche esta página.</p>

        <div className={styles.loader}>
          <div className={styles.linha}></div>
        </div>

        <div className={styles.seguranca}>
          <img src={Seguranca} alt="Ícone de segurança" />
          <p className={styles.segurancaTexto}> Ambiente  100%   Seguro </p>
        </div>

      </div>
    </main>
  );
};

export default PagamentoPage;

