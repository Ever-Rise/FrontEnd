import React from 'react';
import styles from './style.module.css';
import Header from '../../components/layout/Header';

// Imagens de Fundo e Destaque
import heroImg from '../../assets/images/sustentabilidade/hero.png';
import impactoImg from '../../assets/images/sustentabilidade/secao-impacto.png';
import contatoImg from '../../assets/images/sustentabilidade/secao-contato.png';

// Ícones
import iconSustentavel from '../../assets/icons/sustentabilidade/icon-sustentavel.png';
import iconInteligente from '../../assets/icons/sustentabilidade/icon-inteligente.png';
import iconPessoas from '../../assets/icons/sustentabilidade/icon-pessoas.png';
import iconTransparente from '../../assets/icons/sustentabilidade/icon-transparente.png';
import iconColetados from '../../assets/icons/sustentabilidade/icon-coletados.png';
import iconEmpresas from '../../assets/icons/sustentabilidade/icon-empresas.png';
import iconDestinacao from '../../assets/icons/sustentabilidade/icon-destinacao.png';
import iconSolicite from '../../assets/icons/sustentabilidade/icon-solicite.png';
import iconColeta from '../../assets/icons/sustentabilidade/icon-coleta.png';
import iconAnalise from '../../assets/icons/sustentabilidade/icon-analise.png';
import iconToken from '../../assets/icons/sustentabilidade/icon-token.png';

const Sustentabilidade = () => {
  return (
    <div className={styles.container}>
      <Header />
      
      {/* Hero Section */}
      <header className={styles.hero} style={{ backgroundImage: `url(${heroImg})` }}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Feito para cuidar de <span className={styles.highlightBlue}>pessoas</span> e do <span className={styles.highlightBlue}>planeta</span>
          </h1>
          <div className={styles.heroButtons}>
            <button className={styles.btnPrimary}>Quero reciclar</button>
            <button className={styles.btnSecondary}>Saiba mais</button>
          </div>
        </div>
      </header>

      {/* Impact Section */}
      <section className={styles.impactSection}>
        <h2 className={styles.sectionTitle}>Impacto que transforma</h2>
        <div className={styles.impactGrid}>
          <div className={styles.impactCard}>
            <img src={iconSustentavel} alt="Sustentável" className={styles.cardIcon} />
            <h3>Sustentável</h3>
            <p>Reduzimos resíduos e protegemos o meio ambiente.</p>
          </div>
          <div className={styles.impactCard}>
            <img src={iconInteligente} alt="Inteligente" className={styles.cardIcon} />
            <h3>Inteligente</h3>
            <p>Processo otimizado com tecnologia própria.</p>
          </div>
          <div className={styles.impactCard}>
            <img src={iconPessoas} alt="Social" className={styles.cardIcon} />
            <h3>Social</h3>
            <p>Apoiamos comunidades e pessoas que precisam.</p>
          </div>
          <div className={styles.impactCard}>
            <img src={iconTransparente} alt="Transparente" className={styles.cardIcon} />
            <h3>Transparente</h3>
            <p>Rastreabilidade em cada etapa.</p>
          </div>
        </div>
        
        {/* Statistics Bar */}
        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <img src={iconColetados} alt="Coletados" className={styles.statIcon} />
            <strong>12.353</strong>
            <span>Produtos Coletados</span>
          </div>
          <div className={styles.statItem}>
            <img src={iconEmpresas} alt="Empresas" className={styles.statIcon} />
            <strong>100</strong>
            <span>Empresas Parceiras</span>
          </div>
          <div className={styles.statItem}>
            <img src={iconPessoas} alt="Impactadas" className={styles.statIcon} />
            <strong>15.000</strong>
            <span>Pessoas Impactadas</span>
          </div>
          <div className={styles.statItem}>
            <img src={iconDestinacao} alt="Destinação" className={styles.statIcon} />
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
            <div className={styles.timelineIcon}>
              <img src={iconSolicite} alt="Solicite" />
            </div>
          </div>
          
          <div className={`${styles.timelineItem} ${styles.right}`}>
            <div className={styles.timelineIcon}>
              <img src={iconColeta} alt="Coleta" />
            </div>
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
            <div className={styles.timelineIcon}>
              <img src={iconAnalise} alt="Análise" />
            </div>
          </div>

          <div className={`${styles.timelineItem} ${styles.right}`}>
            <div className={styles.timelineIcon}>
              <img src={iconToken} alt="Avaliação" />
            </div>
            <div className={styles.timelineContent}>
              <h3>Avaliação e Desconto</h3>
              <p>Definimos o valor final do desconto com base na análise do guincho.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection} style={{ backgroundImage: `url(${impactoImg})` }}>
        <div className={styles.ctaContent}>
          <h2>Pronto para gerar impacto?</h2>
          <p>Junte-se a nós para um futuro mais sustentável.</p>
          <button className={styles.btnPrimary}>Quero impactar agora</button>
        </div>
      </section>

      {/* Form & Evaluation Section */}
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
            <textarea placeholder="Descrição do estado do equipamento"></textarea>
            <button type="submit" className={styles.btnPrimaryFull}>Enviar Solicitação</button>
          </form>
        </div>
        
        <div className={styles.evaluationContainer}>
          <div className={styles.evaluationBox}>
            <img src={iconAnalise} alt="Processo de Análise" className={styles.evaluationIcon} />
            <h3 className={styles.evaluationTitle}>Análise Técnica</h3>
            <p className={styles.evaluationText}>
              A devolução do seu guincho passará por uma análise técnica especializada da nossa equipe. 
              O valor do seu desconto será definido proporcionalmente ao estado de conservação e peças reaproveitáveis do equipamento entregue.
            </p>
          </div>
        </div>
      </section>

      {/* Footer / Newsletter */}
      <footer className={styles.footer} style={{ backgroundImage: `url(${contatoImg})` }}>
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

export default SustentabilidadePage;

