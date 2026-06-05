import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import confirm from '../../assets/icons/PagamentoPage/confirm.svg';
import caminhao from '../../assets/icons/PagamentoPage/caminhao.svg';
import email from '../../assets/icons/PagamentoPage/email.png';

const PagamentoPage = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.container} role='main'>
      {/* Ondas de background — idênticas ao CarregamentoPagamentoPage */}
      <div className={styles.waveTop} />
      <div className={styles.waveBottom} />

      <div className={styles.content}>

        {/* Ícone de confirmação */}
        <div className={styles.iconWrapper}>
          <img src={confirm} alt='Confirmação de pagamento' className={styles.confirmIcon} />
        </div>

        <h1 className={styles.title}>Compra realizada com sucesso!</h1>

        <p className={styles.description}>
          Seu pedido foi confirmado e já está em processamento.
        </p>

        {/* Card branco com detalhes do pedido */}
        <div className={styles.infoCard}>
          <div className={styles.infoRow}>
            <div className={styles.infoCell}>
              <span className={styles.infoLabel}>PEDIDO</span>
              <span className={styles.infoValueBlue}>#123456</span>
            </div>
            <div className={styles.infoDividerV} />
            <div className={styles.infoCell}>
              <span className={styles.infoLabel}>PRODUTO</span>
              <span className={styles.infoValue}>Guincho Ever Rise</span>
            </div>
          </div>

          <div className={styles.infoDividerH} />

          <div className={styles.infoCell} style={{ padding: '20px 28px' }}>
            <span className={styles.infoLabel}>ENDEREÇO DE ENTREGA</span>
            <span className={styles.infoValue}>Av. Paulista, 1000 - São Paulo, SP</span>
          </div>

          <div className={styles.infoDividerH} />

          <div className={styles.infoCell} style={{ padding: '20px 28px' }}>
            <span className={styles.infoLabel}>PREVISÃO DE ENTREGA</span>
            <div className={styles.deliveryRow}>
              <img src={caminhao} alt="caminhão" className={styles.truckIcon} />
              <span className={styles.infoValue}>2-5 dias úteis</span>
            </div>
          </div>
        </div>

        {/* Aviso de e-mail */}
        <div className={styles.emailRow}>
          <img src={email} alt="email" className={styles.emailIcon} />
          <span className={styles.emailText}>Você receberá atualizações por e-mail</span>
        </div>

        {/* Botões */}
        <div className={styles.buttons}>
          <button
            className={styles.btnPrimary}
            type='button'
            onClick={() => navigate('/rastreio')}
          >
            Acompanhar pedido →
          </button>
          <button
            className={styles.btnSecondary}
            type='button'
            onClick={() => navigate('/')}
          >
            Voltar ao site
          </button>
        </div>

      </div>
    </main>
  );
};

export default PagamentoPage;