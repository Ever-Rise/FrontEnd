import styles from "./styles.module.css";

/* ─────────────────────────────────────────
   NAVBAR
───────────────────────────────────────── */
function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLogo}>
        <span className={styles.logoMark}>Ever</span>
        <span className={styles.logoMarkBlue}>Rise</span>
      </div>
      <ul className={styles.navLinks}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Work</a></li>
        <li><a href="#">Pages</a></li>
      </ul>
      <button className={styles.navLogin}>Login</button>
    </nav>
  );
}

/* ─────────────────────────────────────────
   1. HERO
───────────────────────────────────────── */
function Hero() {
  return (
    <section className={styles.hero}>
      <Navbar />
      <div className={styles.heroImage} aria-hidden="true" />
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <span className={styles.heroBadge}>Programa de Parcerias</span>
        <h1 className={styles.heroTitle}>
          Seja um parceiro e leve seu serviço a outro nível
        </h1>
        <p className={styles.heroSubtitle}>
          Unindo expertise para transformar cada experiência em cuidado real.
        </p>
        <div className={styles.heroCtas}>
          <button className={styles.btnPrimary}>Quero ser parceiro</button>
          <button className={styles.btnOutline}>Fale com a gente</button>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   2. FUTURE CARE
───────────────────────────────────────── */
const metrics = [
  { value: "+50", label: "parceiros ativos" },
  { value: "+10mil", label: "vidas impactadas" },
  { value: "+120", label: "cidades atendidas" },
  { value: "98%", label: "satisfação" },
];

function FutureCare() {
  return (
    <section className={styles.futureCare}>
      <div className={styles.futureCareInner}>
        <div className={styles.futureCareLeft}>
          <h2 className={styles.futureCareTitle}>
            <span className={styles.highlight}>Juntos,</span> construímos o futuro do cuidado
          </h2>
          <p className={styles.futureCareText}>
            A EverRise conecta profissionais e empresas que compartilham o mesmo
            propósito: transformar vidas através de serviços de saúde acessíveis,
            humanizados e de alta qualidade. Quando você se torna parceiro, vai além
            de um contrato — passa a fazer parte de um ecossistema comprometido com
            o bem-estar real das pessoas.
          </p>
          <div className={styles.metricsGrid}>
            {metrics.map((m, i) => (
              <div key={i} className={styles.metricCard}>
                <div className={styles.metricIcon} aria-hidden="true" />
                <strong className={styles.metricValue}>{m.value}</strong>
                <span className={styles.metricLabel}>{m.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.futureCareRight}>
          {/* Imagem do guincho com cuidadora e paciente */}
          <img
            src=""
            alt="Cuidadora e paciente"
            className={styles.guinchoImage}
          />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   3. BENEFITS
───────────────────────────────────────── */
const benefits = [
  {
    title: "Parcerias estratégicas",
    text: "Acesse uma rede qualificada de empresas e profissionais alinhados com o propósito de cuidar, ampliando sua presença no mercado.",
  },
  {
    title: "Integração",
    text: "Conecte seus sistemas e processos à plataforma EverRise de forma simples, garantindo fluidez operacional e experiência unificada.",
  },
  {
    title: "Crescimento conjunto",
    text: "Compartilhamos resultados, aprendizados e oportunidades para que cada parceiro cresça de forma sustentável e com impacto real.",
  },
];

function Benefits() {
  return (
    <section className={styles.benefits}>
      <div className={styles.benefitsHeader}>
        <span className={styles.benefitsEyebrow}>BENEFÍCIOS DE SER PARCEIROS</span>
        <h2 className={styles.benefitsTitle}>
          Mais benefício para você e mais impacto para todos
        </h2>
      </div>

      <div className={styles.benefitsTrack}>
        {/* Wavy SVG path behind cards */}
        <svg
          className={styles.wavePath}
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0,100 C150,20 300,180 500,100 C700,20 900,180 1200,100"
            fill="none"
            stroke="#2F6BFF"
            strokeWidth="3"
            strokeDasharray="10 6"
          />
        </svg>

        <div className={styles.benefitsCards}>
          {benefits.map((b, i) => (
            <div key={i} className={`${styles.benefitCard} ${styles[`benefitCard${i}`]}`}>
              <div className={styles.benefitIcon} aria-hidden="true" />
              <h3 className={styles.benefitCardTitle}>{b.title}</h3>
              <p className={styles.benefitCardText}>{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   4. PARTNERS (logo carousel)
───────────────────────────────────────── */
function Partners() {
  const logos = Array.from({ length: 8 });
  return (
    <section className={styles.partners}>
      <h2 className={styles.partnersTitle}>
        Parceiros que fecham com a <span className={styles.highlight}>EverRise</span>
      </h2>
      <div className={styles.partnersBelt}>
        <div className={styles.partnersBeltInner}>
          {[...logos, ...logos].map((_, i) => (
            <div key={i} className={styles.logoBox} aria-label={`Logo parceiro ${(i % 8) + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   5. HOW IT WORKS
───────────────────────────────────────── */
const steps = [
  { number: "01", title: "Cadastro", text: "Preencha o formulário com os dados da sua empresa e área de atuação." },
  { number: "02", title: "Análise", text: "Nossa equipe revisa seu perfil e verifica o alinhamento com os nossos valores." },
  { number: "03", title: "Aprovação", text: "Você recebe o retorno e, se aprovado, assina o termo de parceria." },
  { number: "04", title: "Parceria ativa", text: "Bem-vindo à rede! Comece a crescer com suporte e visibilidade da EverRise." },
];

function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <span className={styles.howEyebrow}>PASSO A PASSO</span>
      <h2 className={styles.howTitle}>Torne-se parceiro em poucos passos</h2>
      <div className={styles.stepsRow}>
        {steps.map((s, i) => (
          <div key={i} className={styles.stepCard}>
            <div className={styles.stepTop}>
              <div className={styles.stepIcon} aria-hidden="true" />
              <span className={styles.stepNumber}>{s.number}</span>
            </div>
            <div className={styles.stepConnector} />
            <h3 className={styles.stepTitle}>{s.title}</h3>
            <p className={styles.stepText}>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   6. TESTIMONIALS
───────────────────────────────────────── */
const testimonials = [
  {
    name: "Fernanda Almeida",
    role: "Diretora Comercial — CuidarBem",
    text: "Desde que nos tornamos parceiros da EverRise, nossa visibilidade no mercado triplicou. A integração foi tranquila e o suporte é genuíno.",
  },
  {
    name: "Marcos Teixeira",
    role: "CEO — MoveVida Saúde",
    text: "A parceria trouxe clientes que antes não chegavam até nós. O ecossistema deles é sério, comprometido e faz a diferença no dia a dia.",
  },
];

function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <span className={styles.testimonialsEyebrow}>DEPOIMENTOS</span>
      <h2 className={styles.testimonialsTitle}>Quem já é parceiro</h2>
      <div className={styles.testimonialsGrid}>
        {testimonials.map((t, i) => (
          <div key={i} className={styles.testimonialCard}>
            <div className={styles.testimonialQuote}>&ldquo;</div>
            <p className={styles.testimonialText}>{t.text}</p>
            <div className={styles.testimonialAuthor}>
              {/* Foto circular — placeholder */}
              <img
                src=""
                alt={t.name}
                className={styles.testimonialPhoto}
              />
              <div>
                <strong className={styles.testimonialName}>{t.name}</strong>
                <span className={styles.testimonialRole}>{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   7. FINAL CTA
───────────────────────────────────────── */
function FinalCta() {
  return (
    <section className={styles.finalCta}>
      <div className={styles.finalCtaGlow} aria-hidden="true" />
      <div className={styles.finalCtaContent}>
        <h2 className={styles.finalCtaTitle}>
          Pronto para crescer e transformar vidas?
        </h2>
        <p className={styles.finalCtaSubtitle}>
          Junte-se a quem já faz a diferença todos os dias.
        </p>
        <button className={styles.finalCtaBtn}>Seja parceiro →</button>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   APP ROOT
───────────────────────────────────────── */
export default function App() {
  return (
    <main className={styles.root}>
      <Hero />
      <FutureCare />
      <Benefits />
      <Partners />
      <HowItWorks />
      <Testimonials />
      <FinalCta />
    </main>
  );
}