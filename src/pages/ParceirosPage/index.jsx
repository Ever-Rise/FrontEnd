import { useState } from "react";
import styles from "./styles.module.css";
import { Footer, Header } from "../../components";

import HeroImg from '../../assets/images/Parceirosimg/imagemHero2.svg'
import Guincho1 from '../../assets/images/Parceirosimg/guinchoQuarto.svg'
import Pessoas from '../../assets/images/Parceirosimg/iconeParceiros.svg'
import Coracao from '../../assets/images/Parceirosimg/coracao.svg'
import cidade from '../../assets/images/Parceirosimg/cidades.svg'
import indice from '../../assets/images/Parceirosimg/indice.svg'
import FernandaPhoto from '../../assets/images/Parceirosimg/MulherTestimonials.svg'
import MarcosPhoto from '../../assets/images/Parceirosimg/HomemTestimonials.svg'
import Scrollline from './Scrollline.jsx';
import Logo1 from '../../assets/images/Parceirosimg/senacLogo.svg'
import Logo2 from '../../assets/images/Parceirosimg/logoProa.svg'
import Logo3 from '../../assets/images/Parceirosimg/logoDexmove.svg'
import BluenotesParceiros from './ContatoParc.jsx';

function Hero({ onParceiro }) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImage} aria-hidden="true">
        <img src={HeroImg} alt="" />
      </div>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>  
        <h1 className={styles.heroTitle}>
          Seja um parceiro e leve seu serviço a outro nível
        </h1>
        <p className={styles.heroSubtitle}>
          Unindo expertise para transformar cada experiência em cuidado real.
        </p>
        <div className={styles.heroCtas}>
          <button className={styles.btnPrimary} onClick={onParceiro}>
            Quero ser parceiro
          </button>
          <button className={styles.btnOutline}>Fale com a gente</button>
        </div>
      </div>
    </section>
  );
}

const metrics = [
  { value: "+50",    label: "parceiros ativos",  icon: Pessoas },
  { value: "+10mil", label: "vidas impactadas",  icon: Coracao },
  { value: "+120",   label: "cidades atendidas", icon: cidade  },
  { value: "98%",    label: "satisfação",        icon: indice  },
];

function FutureCare() {
  return (
    <section className={styles.futureCare}>
      <div className={styles.futureCareInner}>
        <div className={styles.futureCareLeft}>
          <div className={styles.imageWrapper}>
            <img
              src={Guincho1}
              alt="Cuidadora e paciente"
              className={styles.guinchoImage}
            />
            <div className={styles.imageOverlayText}>
              <h2 className={styles.futureCareTitle}>
                <span className={styles.highlight}>Juntos,</span> construímos <br />
                o futuro do cuidado
              </h2>
              <p className={styles.futureCareText}>
                A EverRise conecta profissionais e empresas que compartilham o mesmo
                propósito: transformar vidas através de serviços de saúde acessíveis,
                humanizados e de alta qualidade. Quando você se torna parceiro, vai além
                de um contrato — passa a fazer parte de um ecossistema comprometido com
                o bem-estar real das pessoas.
              </p>
            </div>
          </div>

          <div className={styles.metricsGrid}>
            {metrics.map((m, i) => (
              <div key={i} className={styles.metricCard}>
                <div className={styles.metricIcon}>
                  <img src={m.icon} className={styles.icone} />
                </div>
                <div className={styles.metricTextGroup}>
                  <strong className={styles.metricValue}>{m.value}</strong>
                  <span className={styles.metricLabel}>{m.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <>
      <Scrollline />
    </>
  );
}

function Partners() {
  const logos = [Logo1, Logo2, Logo3];

  return (
    <section className={styles.partners}>
      <div className={styles.partnersEyebrowWrapper}>
        <div className={styles.partnersEyebrowDecor} />
        <div className={styles.partnersEyebrowSquare} />
        <h2 className={styles.partnersEyebrowTitle}>
          PARCEIROS QUE FECHAM COM A <span className={styles.highlight}>EVERRISE</span>
        </h2>
      </div>
      <div className={styles.partnersBelt}>
        <div className={styles.partnersBeltInner}>
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className={styles.logoBox} aria-label={`Logo parceiro ${(i % logos.length) + 1}`}>
              <img
                  src={logo}
                  alt={`Parceiro ${(i % logos.length) + 1}`}
                  className={`${styles.logoImg} ${styles[`logoImg${i % logos.length}`]}`}
                />
            </div>
          ))}
       </div>
      </div>
    </section>
  );
}

const steps = [
  { number: "01", title: "Cadastro", text: "Preencha o formulário com os dados da sua empresa e área de atuação." },
  { number: "02", title: "Análise", text: "Nossa equipe revisa seu perfil e verifica o alinhamento com os nossos valores." },
  { number: "03", title: "Aprovação", text: "Você recebe o retorno e, se aprovado, assina o termo de parceria." },
  { number: "04", title: "Parceria ativa", text: "Bem-vindo à rede! Comece a crescer com suporte e visibilidade da EverRise." },
];

function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <h2 className={styles.howTitle}>Torne-se parceiro em poucos passos</h2>
      <div className={styles.stepsRow}>
        {steps.map((s, i) => (
          <div key={i} className={styles.stepCard}>
          <div className={styles.stepTop}>
            <div className={styles.stepIcon} aria-hidden="true">
              <span className={styles.stepNumber}>{s.number}</span> 
            </div>
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

const testimonials = [
  {
    name: "Fernanda Almeida",
    role: "Diretora Comercial — CuidarBem",
    text: "Desde que nos tornamos parceiros da EverRise, nossa visibilidade no mercado triplicou. A integração foi tranquila e o suporte é genuíno.",
    photo: FernandaPhoto
  },
  {
    name: "Marcos Teixeira",
    role: "CEO — MoveVida Saúde",
    text: "A parceria trouxe clientes que antes não chegavam até nós. O ecossistema deles é sério, comprometido e faz a diferença no dia a dia.",
    photo: MarcosPhoto
  },
];

function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <section className={styles.parteCinza}>
        <span className={styles.testimonialsEyebrow}>QUEM JÁ É PARCEIRO</span>
        <h2 className={styles.testimonialsTitle}>Hístorias reais que <br/>
          nos inspiram todos <br/>
          os dias.</h2>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.testimonialCard}>
              <div className={styles.testimonialQuote}>&ldquo;</div>
              <p className={styles.testimonialText}>{t.text}</p>
              <div className={styles.testimonialAuthor}>
                <img src={t.photo} alt={t.name} className={styles.testimonialPhoto} />
                <div>
                  <strong className={styles.testimonialName}>{t.name}</strong>
                  <span className={styles.testimonialRole}>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

function FinalCta({ onParceiro }) {
  return (
    <section className={styles.finalCta}>
      <div className={styles.finalCtaGlow} aria-hidden="true" />
      <div className={styles.finalCtaContent}>
        <h2 className={styles.finalCtaTitle}>
          Pronto para crescer <br/> e transformar vidas?
        </h2>
        <p className={styles.finalCtaSubtitle}>
          Junte-se a quem já faz <br/> a diferença todos os dias.
        </p>
        <button className={styles.finalCtaBtn} onClick={onParceiro}>
          Seja parceiro →
        </button>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   APP ROOT
───────────────────────────────────────── */
export default function App() {
  const [pagina, setPagina] = useState("home");

  if (pagina === "parceiro") {
    return <BluenotesParceiros onVoltar={() => setPagina("home")} />; // 👈 alteração aqui
  }

  return (
    <main className={styles.root}>
      <Header />
      <Hero onParceiro={() => setPagina("parceiro")} />
      <FutureCare />
      <Benefits />
      <Partners />
      <HowItWorks />
      <Testimonials />
      <FinalCta onParceiro={() => setPagina("parceiro")} />
      <Footer />
    </main>
  );
}