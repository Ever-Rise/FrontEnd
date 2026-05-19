import React from 'react';
import styles from './style.module.css';
import Header from '../../components/layout/Header';

import heroImg from '../../assets/images/sustentabilidade/hero.png';
import impactoImg from '../../assets/images/sustentabilidade/secao-impacto.png';
import contatoImg from '../../assets/images/sustentabilidade/secao-contato.png';

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

const impactCards = [
  {
    icon: iconSustentavel,
    title: 'Sustentável',
    description: 'Reduzimos resíduos e preservamos o ciclo de vida dos materiais.',
  },
  {
    icon: iconInteligente,
    title: 'Inteligente',
    description: 'Processo rastreável, eficiente e integrado com tecnologia própria.',
  },
  {
    icon: iconPessoas,
    title: 'Social',
    description: 'Geramos renda e oportunidades para milhares de pessoas.',
  },
  {
    icon: iconTransparente,
    title: 'Transparente',
    description: 'Relatórios claros e dados auditáveis em cada etapa.',
  },
];

const impactStats = [
  { icon: iconColetados, value: '12.250', label: 'Toneladas Coletadas' },
  { icon: iconEmpresas, value: '200', label: 'Empresas Parceiras' },
  { icon: iconPessoas, value: '14.000', label: 'Pessoas Impactadas' },
  { icon: iconDestinacao, value: '500', label: 'Destinação Correta' },
];

const processSteps = [
  {
    icon: iconSolicite,
    title: 'Solicite',
    description: 'Preencha o formulário com os dados do equipamento.',
  },
  {
    icon: iconColeta,
    title: 'Coleta',
    description: 'Agendamos a retirada no seu endereço sem custos.',
  },
  {
    icon: iconAnalise,
    title: 'Análise',
    description: 'Nossa equipe avalia as peças para reuso ou reciclagem.',
  },
  {
    icon: iconToken,
    title: 'Token',
    description: 'Você recebe seu token/desconto por e-mail.',
  },
];

const timelineClassNames = [styles.left, styles.right, styles.left, styles.right];

const Sustentabilidade = () => {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <section className={styles.hero} style={{ backgroundImage: `url(${heroImg})` }}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Feito para cuidar de <span className={styles.highlightBlue}>pessoas</span> e do{' '}
              <span className={styles.highlightBlue}>planeta</span>
            </h1>
            <div className={styles.heroButtons}>
              <button className={styles.btnPrimary}>Quero reciclar</button>
              <button className={styles.btnSecondary}>Saiba mais</button>
            </div>
          </div>
        </section>

        <section className={styles.impactSection}>
          <h2 className={styles.sectionTitle}>Impacto que transforma</h2>
          <p className={styles.sectionLead}>
            Cada etapa foi pensada para comunicar confiança, simplicidade e resultado mensurável.
          </p>

          <div className={styles.impactGrid}>
            {impactCards.map((card) => (
              <article key={card.title} className={styles.impactCard}>
                <img src={card.icon} alt={card.title} className={styles.cardIcon} />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>

          <div className={styles.statsBar}>
            {impactStats.map((stat) => (
              <div key={stat.label} className={styles.statItem}>
                <img src={stat.icon} alt={stat.label} className={styles.statIcon} />
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.howItWorks}>
          <h2 className={styles.sectionTitle}>Como Funciona</h2>
          <div className={styles.timeline}>
            {processSteps.map((step, index) => (
              <div key={step.title} className={`${styles.timelineItem} ${timelineClassNames[index]}`}>
                <div className={styles.timelineContent}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <div className={styles.timelineIcon}>
                  <img src={step.icon} alt={step.title} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.ctaSection} style={{ backgroundImage: `url(${impactoImg})` }}>
          <div className={styles.ctaContent}>
            <h2>Pronto para gerar impacto?</h2>
            <p>Junte-se a nós para transformar o descarte em retorno positivo para o planeta e para as pessoas.</p>
            <button className={styles.btnPrimary}>Quero impactar agora</button>
          </div>
        </section>

        <section className={styles.numbersSection}>
          <div className={styles.numbersHeader}>
            <h2 className={styles.sectionTitle}>Cada troca conta. Os números provam.</h2>
            <p className={styles.sectionLead}>
              A experiência foi organizada para deixar os indicadores em evidência e reforçar a confiança na operação.
            </p>
          </div>

          <div className={styles.metricsGrid}>
            {impactStats.map((stat) => (
              <article key={stat.label} className={styles.metricCard}>
                <img src={stat.icon} alt={stat.label} className={styles.metricIcon} />
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.formSection}>
          <div className={styles.formContainer}>
            <h3 className={styles.formTitle}>Solicite logística reversa</h3>
            <p className={styles.formSubtitle}>
              Preencha os dados abaixo e siga para a etapa de coleta com a identidade visual da página.
            </p>

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
              <textarea placeholder="Descreva o estado do equipamento"></textarea>
              <button type="submit" className={styles.btnPrimaryFull}>
                Solicitar coleta
              </button>
            </form>
          </div>

          <aside className={styles.evaluationContainer}>
            <div className={styles.evaluationBox}>
              <img src={iconAnalise} alt="Processo de análise" className={styles.evaluationIcon} />
              <h3 className={styles.evaluationTitle}>Análise técnica</h3>
              <p className={styles.evaluationText}>
                A devolução passa por uma avaliação especializada para definir reaproveitamento, reciclagem e o desconto final.
              </p>
              <div className={styles.evaluationList}>
                <div>
                  <strong>1.</strong>
                  <span>Recebimento da solicitação</span>
                </div>
                <div>
                  <strong>2.</strong>
                  <span>Triagem e diagnóstico</span>
                </div>
                <div>
                  <strong>3.</strong>
                  <span>Retorno com token</span>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </main>

      <footer className={styles.footer} style={{ backgroundImage: `url(${contatoImg})` }}>
        <div className={styles.newsletter}>
          <h3>Futuro melhor começa com escolhas conscientes.</h3>
          <p>Receba novidades sobre logística reversa, impacto e novas campanhas.</p>
          <div className={styles.newsletterInput}>
            <input type="email" placeholder="Insira seu e-mail" />
            <button className={styles.btnPrimary}>Inscrever-se</button>
          </div>
        </div>

        <div className={styles.footerLinks}>
          <div>
            <h4>Empresa</h4>
            <a href="/">Sobre nós</a>
            <a href="/">Soluções</a>
            <a href="/">Blog</a>
          </div>
          <div>
            <h4>Contato</h4>
            <a href="/">Suporte</a>
            <a href="/">Parcerias</a>
            <a href="/">Imprensa</a>
          </div>
          <div>
            <h4>Legal</h4>
            <a href="/">Privacidade</a>
            <a href="/">Termos</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Sustentabilidade;