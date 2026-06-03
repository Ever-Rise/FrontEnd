import { Footer, Header } from "../../components";
import styles from "./style.module.css";

import heroImage from "../../assets/images/sustentabilidade/hero.png";
import impactBackground from "../../assets/images/sustentabilidade/secao-impacto.png";
import iconSustentavel from "../../assets/icons/sustentabilidade/icon_sustentavel.svg";
import iconInteligente from "../../assets/icons/sustentabilidade/icon_inteligente.svg";
import iconSocial from "../../assets/icons/sustentabilidade/icon_social.svg";
import iconTransparente from "../../assets/icons/sustentabilidade/icon_transparente.svg";
import iconTonelada from "../../assets/icons/sustentabilidade/icon_tonelada.svg";
import iconEmpresa from "../../assets/icons/sustentabilidade/icon_empresa.svg";
import iconDestino from "../../assets/icons/sustentabilidade/icon_destino.svg";
import iconSolicite from "../../assets/icons/sustentabilidade/icon_solicite.svg";
import iconColeta from "../../assets/icons/sustentabilidade/icon_coleta.svg";
import iconAnalise from "../../assets/icons/sustentabilidade/icon_analise.svg";
import iconToken from "../../assets/icons/sustentabilidade/icon_token.svg";
import icon62kg from "../../assets/icons/sustentabilidade/icon_62kg.svg";
import icon35 from "../../assets/icons/sustentabilidade/icon_35pct.svg";
import icon3x from "../../assets/icons/sustentabilidade/icon_3x.svg";
import iconPrancheta from "../../assets/icons/sustentabilidade/icon_prancheta.svg";

const impactCards = [
  {
    icon: iconSustentavel,
    title: "Sustentável",
    description:
      "Reduzimos resíduos e prolongamos o ciclo de vida da tecnologia.",
  },
  {
    icon: iconInteligente,
    title: "Inteligente",
    description:
      "Processos eficientes e rastreáveis com tecnologia própria.",
  },
  {
    icon: iconSocial,
    title: "Social",
    description:
      "Geramos inclusão, renda e oportunidades reais para milhares de pessoas.",
  },
  {
    icon: iconTransparente,
    title: "Transparente",
    description:
      "Relatórios claros e dados auditáveis em cada etapa.",
  },
];

const impactStats = [
  { icon: iconTonelada, value: "12.250", label: "Toneladas Coletadas" },
  { icon: iconEmpresa, value: "200", label: "Empresas Parceiras" },
  { icon: iconSocial, value: "14.000", label: "Pessoas Impactadas" },
  { icon: iconDestino, value: "500", label: "Destinação Correta" },
];

const steps = [
  {
    icon: iconSolicite,
    title: "Solicite",
    description: "Preencha o formulário com os dados do equipamento.",
    side: "left",
  },
  {
    icon: iconColeta,
    title: "Coleta",
    description: "Agendamos a retirada no seu endereço sem custos.",
    side: "right",
  },
  {
    icon: iconAnalise,
    title: "Análise",
    description: "Nossa equipe avalia as peças para reuso ou reciclagem.",
    side: "left",
  },
  {
    icon: iconToken,
    title: "Token",
    description: "Você recebe seu TokenDesconto por e-mail.",
    side: "right",
  },
];

const proofCards = [
  {
    icon: iconTonelada,
    value: "47kg",
    label: "de lixo eletrônico reaproveitado por cliente",
  },
  {
    icon: icon62kg,
    value: "62kg",
    label: "CO2 evitado por empresa ao aderir ao ciclo reverso",
  },
  {
    icon: icon35,
    value: "35%",
    label: "de aumento em reputação sustentável dos parceiros",
  },
  {
    icon: icon3x,
    value: "3x",
    label: "mais engajamento nas campanhas de recolhimento",
  },
];

const tableRows = [
  { equipment: "Medial Wise IV", code: "ID-742-019", date: "10 Set 2024", status: "EM ANÁLISE" },
  { equipment: "Englix Steel", code: "ID-431-281", date: "02 Nov 2024", status: "TOKEN GERADO" },
  { equipment: "Advanced Motor Module", code: "ID-279-008", date: "19 Nov 2024", status: "CONCLUÍDO" },
];

const testimonials = [
  {
    name: "John D.",
    text:
      "United as a provider and partner to ensure a streamlined and simplified recovery journey. The service was professional and the turnaround was excellent.",
  },
  {
    name: "John D.",
    text:
      "United as a provider and partner to ensure a streamlined and simplified recovery journey. The service was professional and the turnaround was excellent.",
  },
  {
    name: "John D.",
    text:
      "United as a provider and partner to ensure a streamlined and simplified recovery journey. The service was professional and the turnaround was excellent.",
  },
  {
    name: "John D.",
    text:
      "United as a provider and partner to ensure a streamlined and simplified recovery journey. The service was professional and the turnaround was excellent.",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />

      <main id="topo">
        <section className={styles.hero} aria-labelledby="hero-title">
          <img
            src={heroImage}
            alt="Equipamento de coleta com planeta ao fundo"
            className={styles.heroImage}
          />
          <div className={styles.heroShade} aria-hidden="true" />
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 id="hero-title">Feito para cuidar de <span>pessoas</span> e do <span>planeta</span></h1>
              <div className={styles.heroButtons}>
                <a href="#contato" className={styles.primaryButton}>Quero Participar</a>
                <a href="#impacto" className={styles.secondaryButton}>Saiba mais</a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="impacto">
          <div className={styles.sectionHeading}>
            <span className={styles.sectionDecorationLeft} aria-hidden="true" />
            <h2>Impacto que transforma</h2>
            <span className={styles.sectionDecorationRight} aria-hidden="true" />
          </div>

          <div className={styles.impactGrid}>
            {impactCards.map((card) => (
              <article className={styles.impactCard} key={card.title}>
                <img src={card.icon} alt="" aria-hidden="true" className={styles.cardIcon} />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>

          <div className={styles.statsBar}>
            {impactStats.map((stat) => (
              <div className={styles.statItem} key={stat.label}>
                <img src={stat.icon} alt="" aria-hidden="true" className={styles.statIcon} />
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.howSection} id="como-funciona">
          <span className={styles.cornerAccentTopLeft} aria-hidden="true" />
          <span className={styles.cornerAccentTopRight} aria-hidden="true" />

          <div className={styles.sectionHeading}>
            <h2>Como Funciona</h2>
          </div>

          <div className={styles.stepsLayout}>
            <div className={styles.stepsColumnLeft}>
              {steps.filter((step) => step.side === "left").map((step) => (
                <article className={`${styles.stepCard} ${styles.stepCardLeft}`} key={step.title}>
                  <div className={styles.stepHeader}>
                    <h3>{step.title}</h3>
                    <span className={styles.stepIconWrap}><img src={step.icon} alt="" aria-hidden="true" /></span>
                  </div>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>

            <div className={styles.stepsRail} aria-hidden="true" />

            <div className={styles.stepsColumnRight}>
              {steps.filter((step) => step.side === "right").map((step) => (
                <article className={`${styles.stepCard} ${styles.stepCardRight}`} key={step.title}>
                  <div className={`${styles.stepHeader} ${styles.stepHeaderRight}`}>
                    <h3>{step.title}</h3>
                    <span className={styles.stepIconWrap}><img src={step.icon} alt="" aria-hidden="true" /></span>
                  </div>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection} aria-labelledby="cta-title">
          <div className={styles.ctaContent}>
            <h2 id="cta-title">Pronto para gerar impacto?</h2>
            <p>Junte-se às empresas que já estão transformando o futuro com a logística reversa.</p>
            <a href="#contato" className={styles.ctaButton}>Quero impactar agora</a>
          </div>

          <img src={impactBackground} alt="Planeta Terra com iluminação azul" className={styles.ctaImage} />
        </section>

        <section className={styles.proofSection} id="sustentabilidade">
          <div className={styles.sectionHeadingProof}>
            <h2>Cada troca conta.<br />Os números provam.</h2>
          </div>

          <div className={styles.proofGrid}>
            {proofCards.map((card) => (
              <article className={styles.proofCard} key={card.label}>
                <img src={card.icon} alt="" aria-hidden="true" className={styles.proofIcon} />
                <strong>{card.value}</strong>
                <p>{card.label}</p>
              </article>
            ))}
          </div>

          <div className={styles.requestGrid}>
            <form className={styles.requestForm}>
              <div className={styles.requestHeader}>
                <h3>Solicite logística reversa</h3>
                <span className={styles.requestHeaderIcon} aria-hidden="true"><img src={iconPrancheta} alt="" /></span>
              </div>

              <div className={styles.formGrid}>
                <label><span>Nome</span><input type="text" placeholder="Ex: Maria Silva" /></label>
                <label><span>Equipamento</span><input type="text" placeholder="Ex: Computador" /></label>
                <label><span>CEP</span><input type="text" placeholder="00.000-000" /></label>
                <label><span>Cidade</span><input type="text" placeholder="Nome da cidade" /></label>
                <label className={styles.fullWidth}><span>Observações</span><textarea rows="3" placeholder="Descreva o estado do equipamento" /></label>
              </div>

              <button className={styles.requestButton} type="button">Solicitar coleta</button>
            </form>

            <aside className={styles.couponCard} aria-label="Cupom de desconto">
              <div className={styles.couponLabel}>CUPOM DE TROCA</div>
              <div className={styles.couponCode}>RIS25-7X9K-LM2Q</div>
              <div className={styles.couponValue}>15% OFF</div>
              <div className={styles.couponMeta}><span>copie o código</span><span>para checkout</span></div>
            </aside>
          </div>

          <div className={styles.historyCard}>
            <div className={styles.historyHeader}>
              <h3>Histórico de solicitações</h3>
              <span>Filtro</span>
            </div>

            <div className={styles.historyTable}>
              <div className={styles.historyRowHead}>
                <span>Equipamento</span><span>Código ID</span><span>Data da retirada</span><span>Status</span><span>Ação</span>
              </div>

              {tableRows.map((row) => (
                <div className={styles.historyRow} key={row.code}>
                  <span>{row.equipment}</span>
                  <span>{row.code}</span>
                  <span>{row.date}</span>
                  <span><em className={styles.statusPill}>{row.status}</em></span>
                  <span className={styles.eyeAction} aria-label="Ver detalhes">◌</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.testimonialsStrip}>
            {testimonials.map((item, index) => (
              <article className={styles.testimonialCard} key={`${item.name}-${index}`}>
                <div className={styles.testimonialHeader}><span className={styles.testimonialAvatar}>{item.name[0]}</span><strong>{item.name}</strong></div>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className={styles.contactCard} id="contato">
            <div className={styles.contactTitle}><h3>Nos envie um saudação</h3></div>

            <div className={styles.contactForm}>
              <input type="text" placeholder="Seu nome" />
              <input type="email" placeholder="Seu e-mail" />
              <textarea rows="4" placeholder="Sua mensagem" />
              <div className={styles.contactFooter}>
                <div className={styles.captcha}>I'm not robot</div>
                <button type="button" className={styles.sendButton}>Send</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}