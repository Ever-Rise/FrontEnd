import React from 'react';
import styles from './style.module.css';
import Header from '../../components/layout/Header';

const Sustentabilidade = () => {
  return (
    <div className={styles.container}>
      <Header />
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Feito para cuidar de <span className={styles.highlightBlue}>pessoas</span> e do <span className={styles.highlightBlue}>planeta</span>
          </h1>
          <div className={styles.heroButtons}>
            <button className={styles.btnPrimary}>Quero reciclar</button>
            <button className={styles.btnSecondary}>Saiba mais</button>
          </div>
        </div>
        <div className={styles.heroImage}>
          {/* Imagem do guincho será inserida aqui */}
          <div className={styles.imagePlaceholder}>[Imagem do Guincho]</div>
        </div>
      </header>

      {/* Impact Section */}
      <section className={styles.impactSection}>
        <h2 className={styles.sectionTitle}>Impacto que transforma</h2>
        <div className={styles.impactGrid}>
          <div className={styles.impactCard}>
            <span className={styles.icon}>🍃</span>
            <h3>Sustentável</h3>
            <p>Reduzimos resíduos e protegemos o meio ambiente.</p>
          </div>
          <div className={styles.impactCard}>
            <span className={styles.icon}>♻️</span>
            <h3>Inteligente</h3>
            <p>Processo otimizado com tecnologia própria.</p>
          </div>
          <div className={styles.impactCard}>
            <span className={styles.icon}>👥</span>
            <h3>Social</h3>
            <p>Apoiamos comunidades e pessoas que precisam.</p>
          </div>
          <div className={styles.impactCard}>
            <span className={styles.icon}>🛡️</span>
            <h3>Transparente</h3>
            <p>Rastreabilidade em cada etapa.</p>
          </div>
        </div>
        
        {/* Statistics Bar */}
        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <strong>12.353</strong>
            <span>Produtos Coletados</span>
          </div>
          <div className={styles.statItem}>
            <strong>100</strong>
            <span>Empresas Parceiras</span>
          </div>
          <div className={styles.statItem}>
            <strong>15.000</strong>
            <span>Pessoas Impactadas</span>
          </div>
          <div className={styles.statItem}>
            <strong>100</strong>
            <span>Destinação Correta</span>
          </div>
        </div>
      </section>

      {/* How it Works (Timeline) */}
      <section className={styles.howItWorks}>
        <h2 className={styles.sectionTitle}>Como Funciona</h2>
        <div className={styles.timeline}>
          <div className={`${styles.timelineItem} ${styles.left}`}>
            <div className={styles.timelineContent}>
              <h3>Solicite</h3>
              <p>Preencha o formulário com os dados do equipamento.</p>
            </div>
            <div className={styles.timelineIcon}>📄</div>
          </div>
          
          <div className={`${styles.timelineItem} ${styles.right}`}>
            <div className={styles.timelineIcon}>🚚</div>
            <div className={styles.timelineContent}>
              <h3>Coleta</h3>
              <p>Agendamos a retirada no seu endereço.</p>
            </div>
          </div>

          <div className={`${styles.timelineItem} ${styles.left}`}>
            <div className={styles.timelineContent}>
              <h3>Análise</h3>
              <p>A empresa analisa o equipamento entregue para reuso ou reciclagem.</p>
            </div>
            <div className={styles.timelineIcon}>🔬</div>
          </div>

          <div className={`${styles.timelineItem} ${styles.right}`}>
            <div className={styles.timelineIcon}>🏷️</div>
            <div className={styles.timelineContent}>
              <h3>Avaliação e Desconto</h3>
              <p>Definimos o valor final do desconto com base na análise do guincho.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Pronto para gerar impacto?</h2>
          <p>Junte-se a nós para um futuro mais sustentável.</p>
          <button className={styles.btnPrimary}>Quero impactar agora</button>
        </div>
        <div className={styles.ctaGlobe}>
           <div className={styles.imagePlaceholder}>[Imagem do Planeta]</div>
        </div>
      </section>

      {/* Form & Coupon Section */}
      <section className={styles.formSection}>
        <div className={styles.formContainer}>
          <h3 className={styles.formTitle}>Solicitação de Logística Reversa</h3>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="Sobrenome" />
            </div>
            <input type="email" placeholder="E-mail" />
            <div className={styles.inputGroup}>
              <input type="text" placeholder="CEP" />
              <input type="text" placeholder="Cidade" />
            </div>
            <textarea placeholder="Descrição do equipamento"></textarea>
            <button type="submit" className={styles.btnPrimaryFull}>Enviar Solicitação</button>
          </form>
        </div>
        
        <div className={styles.couponContainer}>
          <div className={styles.couponBox}>
            <span className={styles.couponCode}>RI528-7X9K-LM2Q</span>
            <span className={styles.couponDiscount}>15% OFF</span>
            <button className={styles.btnCopy}>Copiar Código</button>
          </div>
        </div>
      </section>

      {/* Footer / Newsletter */}
      <footer className={styles.footer}>
        <div className={styles.newsletter}>
          <h3>Futuro melhor começa com escolhas conscientes.</h3>
          <div className={styles.newsletterInput}>
            <input type="email" placeholder="Insira seu e-mail" />
            <button className={styles.btnPrimary}>Inscrever-se</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Sustentabilidade;