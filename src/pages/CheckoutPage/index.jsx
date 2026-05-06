import React from 'react';
import styles from './styles.module.css';
<<<<<<< HEAD
impot

const PAGE_NAME = 'Finalizacao de Compra';

=======
import Header from '../../components/layout/Header';
 
>>>>>>> 6b5d8c3056ba5bba7abc824317eaee4566857a87
const CheckoutPage = () => {
  const [delivery, setDelivery] = React.useState('standard');
  const [paymentTab, setPaymentTab] = React.useState('card');
 
  return (
    <main className={styles.container} role="main">
      <Header />
 
      <div className={styles.page}>
        <h1 className={styles.title}>Inicie sua sessão para finalizar a compra</h1>
 
        <div className={styles.layout}>
 
          {/* ── COLUNA ESQUERDA — fiel ao Figma ── */}
          <div className={styles.left}>
 
            {/* Informações Pessoais */}
            <h2 className={styles.sectionTitle}>Informações Pessoais</h2>
 
            <div className={styles.inputCard}>
              <label className={styles.label}>Nome Completo</label>
              <input className={styles.input} placeholder="Ex: Carlos Silva" />
            </div>
 
            <div className={styles.inputCard}>
              <label className={styles.label}>Email</label>
              <input className={styles.input} placeholder="seu@email.com" />
            </div>
 
            <div className={styles.inputRow}>
              <div className={styles.inputCard}>
                <label className={styles.label}>CPF</label>
                <input className={styles.input} placeholder="000-000-000-00" />
              </div>
              <div className={styles.inputCard}>
                <label className={styles.label}>Telefone</label>
                <input className={styles.input} placeholder="(11) 99999-9999" />
              </div>
            </div>
 
            {/* Endereço de Entrega */}
            <h2 className={styles.sectionTitleSpaced}>Endereço de Entrega</h2>
 
            <div className={styles.inputCard}>
              <label className={styles.label}>Endereço de Entrega</label>
              <input className={styles.input} placeholder="Rua, avenida" />
            </div>
 
            <div className={styles.inputRow}>
              <div className={styles.inputCard}>
                <label className={styles.label}>CEP</label>
                <input className={styles.input} placeholder="000-00000" />
              </div>
              <div className={styles.inputCard}>
                <label className={styles.label}>Número</label>
                <input className={styles.input} placeholder="0" />
              </div>
            </div>
 
            <div className={styles.inputCard}>
              <label className={styles.label}>Complemento</label>
              <input className={styles.input} placeholder="bloco" />
            </div>
 
            {/* Forma de Entrega */}
            <h2 className={styles.sectionTitleSpaced}>Forma de Entrega</h2>
 
            <div className={styles.deliveryOptions}>
              <div
                className={`${styles.deliveryOption} ${delivery === 'standard' ? styles.selected : ''}`}
                onClick={() => setDelivery('standard')}
              >
                <div className={styles.deliveryOptionHeader}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="3" width="15" height="13" />
                    <path d="M16 8h4l3 3v5h-7V8z" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                  Standard
                </div>
                <div className={styles.deliveryMeta}>5-8 dias úteis</div>
                <div className={`${styles.deliveryPrice} ${styles.deliveryPriceFree}`}>Grátis</div>
              </div>
 
              <div
                className={`${styles.deliveryOption} ${delivery === 'express' ? styles.selected : ''}`}
                onClick={() => setDelivery('express')}
              >
                <div className={styles.deliveryOptionHeader}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                  Express
                </div>
                <div className={styles.deliveryMeta}>1-2 dias úteis</div>
                <div className={styles.deliveryPrice}>R$ 45,00</div>
              </div>
            </div>
 
            {/* Pagamento */}
            <h2 className={styles.sectionTitleSpaced}>Pagamento</h2>
 
            <div className={styles.paymentTabs}>
              <button
                className={`${styles.paymentTab} ${paymentTab === 'card' ? styles.active : ''}`}
                onClick={() => setPaymentTab('card')}
              >
                💳 Cartão de Crédito
              </button>
              <button
                className={`${styles.paymentTab} ${paymentTab === 'pix' ? styles.active : ''}`}
                onClick={() => setPaymentTab('pix')}
              >
                ⚡ PIX
              </button>
              <button
                className={`${styles.paymentTab} ${paymentTab === 'boleto' ? styles.active : ''}`}
                onClick={() => setPaymentTab('boleto')}
              >
                🧾 Boleto
              </button>
            </div>
 
            {paymentTab === 'card' && (
              <>
                <div className={styles.inputCard}>
                  <label className={styles.label}>Número do Cartão</label>
                  <input className={styles.input} placeholder="0000 0000 0000 0000" />
                </div>
                <div className={styles.inputRow}>
                  <div className={styles.inputCard}>
                    <label className={styles.label}>Validade</label>
                    <input className={styles.input} placeholder="MM/AA" />
                  </div>
                  <div className={styles.inputCard}>
                    <label className={styles.label}>CVV</label>
                    <input className={styles.input} placeholder="123" />
                  </div>
                </div>
              </>
            )}
 
            {paymentTab === 'pix' && (
              <div className={styles.inputCard}>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>
                  Após confirmar, você receberá o QR Code para pagamento via PIX.
                </p>
              </div>
            )}
 
            {paymentTab === 'boleto' && (
              <div className={styles.inputCard}>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>
                  O boleto será gerado após a confirmação. Prazo de 3 dias úteis para compensação.
                </p>
              </div>
            )}
          </div>
 
          {/* ── COLUNA DIREITA — não alterada ── */}
          <div className={styles.right}>
            <div className={styles.orderCard}>
              <div className={styles.productRow}>
                <div className={styles.productThumb}>🏗️</div>
                <div className={styles.productInfo}>
                  <div className={styles.productName}>Guincho de Transferência Ever Rise</div>
                  <div className={styles.inStock}>Em estoque</div>
                </div>
              </div>
 
              <div className={styles.summaryRows}>
                <div className={styles.summaryRow}>
                  <span>Subtotal</span>
                  <span className={styles.summaryRowValue}>R$ 14.850,00</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Frete</span>
                  <span className={styles.summaryRowFree}>Grátis</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Impostos</span>
                  <span className={styles.summaryRowInc}>Inclusos</span>
                </div>
                <div className={styles.divider} />
                <div className={styles.totalRow}>
                  <span>Total</span>
                  <span className={styles.totalValue}>R$ 14.850,00</span>
                </div>
              </div>
 
                
              <button className={styles.checkoutBtn}>Finalizar Pagamento</button>
            </div>
 
            <div className={styles.supportCard}>
              <div className={styles.supportIcon}>🛡️</div>
              <div>
                <div className={styles.supportTitle}>Suporte Técnico Prioritário</div>
                <div className={styles.supportText}>
                  Ao finalizar este pedido, você recebe 1 ano de suporte dedicado 24/7 para sua instituição.
                </div>
              </div>
            </div>
          </div>
 
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;