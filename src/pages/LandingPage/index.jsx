import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import Header from "../../components/layout/Header";

/* ============================================================
   small inline icons (no external assets needed)
   ============================================================ */

const IconPerson = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" fill="#fff" />
    <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" fill="#fff" />
  </svg>
);

const IconChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <path d="M5 9l7 7 7-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconInstall = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 3v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconConnect = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="5" r="2.2" stroke="currentColor" strokeWidth="2" />
    <circle cx="5" cy="18" r="2.2" stroke="currentColor" strokeWidth="2" />
    <circle cx="19" cy="18" r="2.2" stroke="currentColor" strokeWidth="2" />
    <path d="M10.6 6.6L6.6 16M13.4 6.6l4 9.4M7.4 18h9.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconControl = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M4 19V11M10 19V5M16 19v-7M21 19H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconFamily = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="8" cy="7" r="2.6" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="16" cy="7" r="2.6" stroke="currentColor" strokeWidth="1.8" />
    <path d="M2.5 19c0-3 2.6-5 5.5-5s5.5 2 5.5 5M10.5 19c0-3 2.6-5 5.5-5s5.5 2 5.5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconClinic = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 11v6M9 14h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconOngs = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12 21s-7-4.4-9.3-8.8C1.2 9 2.7 5.6 6 4.9c2-.4 3.7.6 6 2.8 2.3-2.2 4-3.2 6-2.8 3.3.7 4.8 4.1 3.3 7.3C19 16.6 12 21 12 21z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
);

const IconCheck = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8 12.5l2.5 2.5L16 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCheckPlain = ({ className }) => (
  <svg className={className} width="15" height="15" viewBox="0 0 24 24" fill="none">
    <path d="M5 13l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconStar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.5l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17.7 5.9 21l1.5-6.8L2.2 9.5l6.9-.7z" />
  </svg>
);

const IconPlay = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const IconPortrait = () => (
  <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8.2" r="4" fill="#fff" fillOpacity="0.9" />
    <path d="M3.5 21c0-5 3.8-8 8.5-8s8.5 3 8.5 8" fill="#fff" fillOpacity="0.9" />
  </svg>
);

function InitialAvatar({ name, size = 38 }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  return (
    <span
      className={styles.avatarCircle}
      style={{ width: size, height: size, fontSize: size * 0.34 }}
    >
      {initials}
    </span>
  );
}

const LogoMark = () => (
  <svg className={styles.logoMark} viewBox="0 0 40 40" fill="none">
    <defs>
      <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40">
        <stop offset="0%" stopColor="#2a3fd0" />
        <stop offset="45%" stopColor="#8b2bd6" />
        <stop offset="100%" stopColor="#e0327e" />
      </linearGradient>
    </defs>
    <path
      d="M28 6c-8 0-14 6.2-14 14s6 14 14 14"
      stroke="url(#logoGrad)"
      strokeWidth="4.2"
      fill="none"
      strokeLinecap="round"
    />
    <circle cx="14" cy="32" r="2.6" fill="url(#logoGrad)" />
    <path d="M19 14l8 6-8 6z" fill="url(#logoGrad)" />
  </svg>
);

/* ============================================================
   decorative background shapes — echoes the soft rings, dotted
   grid and little dashes used as filler throughout the page
   ============================================================ */

const DotGrid = ({ style }) => (
  <span className={styles.dotGrid} style={style}>
    {Array.from({ length: 20 }).map((_, i) => (
      <span key={i} />
    ))}
  </span>
);

function SectionDecor({ rings = [], dots = [], dashes = [] }) {
  return (
    <div className={styles.decorLayer} aria-hidden="true">
      {rings.map((r, i) => (
        <span
          key={`r${i}`}
          className={r.tone === "peach" ? styles.ringPeach : styles.ringNavy}
          style={{ width: r.size, height: r.size, ...r.pos }}
        />
      ))}
      {dots.map((d, i) => (
        <DotGrid key={`d${i}`} style={d.pos} />
      ))}
      {dashes.map((d, i) => (
        <span key={`x${i}`} className={styles.dash} style={d.pos} />
      ))}
    </div>
  );
}

/* ============================================================
   navbar
   ============================================================ */



/* ============================================================
   hero
   ============================================================ */

function Hero() {
  return (
    

    <section className={styles.hero}>
      <SectionDecor
        rings={[
          { tone: "peach", size: 90, pos: { top: "6%", left: "-50px" } },
          { tone: "navy", size: 46, pos: { top: "2%", left: "-10px" } },
        ]}
        dots={[{ pos: { top: "8%", right: "6%" } }]}
        dashes={[{ pos: { top: "44%", left: "3%" } }]}
      />

      <h1 className={styles.heroTitle}>
        <span className={styles.navyText}>Controle total do seu guincho, sem compilação </span>
      </h1>
      <p className={styles.heroSubtitle}>
        O Ever Rise conecta famílias, clínicas e ONGs a um sistema simples de rastreamento e
        gestão em tempo real, de qualquer lugar.
      </p>
      <div className={styles.heroActions}>
        <button className={styles.btnOrange}>
          Contratar agora <IconArrowRight />
        </button>
        <button className={styles.btnOrangeSoft}>Ver demonstração</button>
      </div>
    </section>
  );
}

/* ============================================================
   founder story
   ============================================================ */

function FounderStory() {
  return (
    <section className={styles.founder}>
      <div>
        <h2 className={styles.founderHeading}>Criado por quem viveu o problema</h2>
        <p className={styles.founderText}>
          A história do Ever Rise não começou em uma prancheta isolada, mas sim na vivência prática de um problema real. Depois de enfrentar na pele a dificuldade de gerenciar um serviço de guincho, lidando com informações fragmentadas, comunicação falha e clientes sem respostas, ela se uniu aos seus amigos para mudar essa realidade.
        </p>
        <p className={styles.founderText}>
          Juntos, eles uniram forças, ideias e competências para construir o Ever Rise. O produto nasceu dessa necessidade genuína e foi totalmente desenhado para quem precisa de clareza, segurança e eficiência, sem espaço para complexidade desnecessária
        </p>
      </div>
      <div className={styles.founderImageWrap}>
        <div className={styles.founderPortrait}>
          <DotGrid style={{ top: "20px", left: "20px" }} />
          <IconPortrait />
        </div>
        <div className={styles.founderQuote}>
          <p>
            "Eu não queria mais uma ferramenta. Queria algo que fizesse o trabalho
            desaparecer — para que eu pudesse focar nas pessoas."
          </p>
          <div className={styles.founderQuoteName}>Rafa</div>
          <div className={styles.founderQuoteRole}>Idealizadora &amp; fundadora do EVERISE</div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   three steps
   ============================================================ */

function Steps() {
  const steps = [
    {
      icon: <IconInstall />,
      title: "Instalar",
      desc: "Implementação ágil sem interrupção operacional em sua frota ativa.",
    },
    {
      icon: <IconConnect />,
      title: "Conectar",
      desc: "Sincronização em tempo real com nossa rede centralizada de inteligência.",
    },
    {
      icon: <IconControl />,
      title: "Controlar",
      desc: "Gestão completa via dashboard intuitivo com KPIs de alta precisão.",
    },
  ];  

  return (
    <section className={styles.steps}>
      <SectionDecor
        rings={[{ tone: "peach", size: 110, pos: { bottom: "-40px", right: "-50px" } }]}
        dots={[{ pos: { bottom: "10%", left: "5%" } }]}
      />
      <h2 className={styles.sectionHeading}>Três passos para o controle total</h2>
      <p className={styles.sectionSubheading}>
        Simplicidade na implementação, excelência na execução.
      </p>
      <div className={styles.stepsRow}>
        <span className={styles.stepsLine} />
        {steps.map((s, i) => (
          <div className={styles.step} key={s.title}>
            <span className={styles.stepIcon}>{s.icon}</span>
            <span className={styles.stepNumber}>{i + 1}</span>
            <h3 className={styles.stepTitle}>{s.title}</h3>
            <p className={styles.stepDesc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   audience cards
   ============================================================ */

function Audience() {
  const cards = [
    {
      icon: <IconFamily />,
      title: "Família",
      label: "USO DOMÉSTICO",
      text: "Foco total em segurança e rastreamento em tempo real para garantir que quem você ama esteja sempre protegido.",
      items: ["Alertas de proximidade", "Botão de pânico digital"],
      action: null,
    },
    {
      icon: <IconClinic />,
      title: "Clínicas",
      label: "OPERAÇÕES MÉDICAS",
      text: "Garantia estrita de SLA, histórico completo de movimentação e total conformidade com normas de saúde.",
      items: ["Controle rigoroso de SLA", "Logs de auditoria imutáveis"],
      action: { type: "button", label: "Contatar Consultor" },
    },
    {
      icon: <IconOngs />,
      title: "ONGs",
      label: "MISSÕES SOCIAIS",
      text: "Transparência absoluta e relatórios automáticos de impacto social para doadores e stakeholders.",
      items: ["Relatórios de transparência", "Dashboard de doadores"],
      action: { type: "link", label: "Saber mais" },
    },
  ];

  return (
    <section className={styles.audience}>
      <SectionDecor dots={[{ pos: { top: "0", right: "4%" } }]} />
      <div className={styles.audienceHeadingWrap}>
        <h2 className={styles.audienceHeading}>Feito para quem não pode errar</h2>
        <span className={styles.audienceHeadingLine} />
      </div>
      <p className={styles.audienceText}>
        Adaptamos nossa tecnologia para os ambientes mais exigentes, onde cada segundo e
        cada dado importam.
      </p>
      <div className={styles.cardsRow}>
        {cards.map((c) => (
          <div className={styles.card} key={c.title}>
            <span className={styles.cardIcon}>{c.icon}</span>
            <h3 className={styles.cardTitle}>{c.title}</h3>
            <p className={styles.cardLabel}>{c.label}</p>
            <p className={styles.cardText}>{c.text}</p>
            <ul className={styles.cardList}>
              {c.items.map((it) => (
                <li key={it}>
                  <IconCheck className={styles.cardCheck} />
                  {it}
                </li>
              ))}
            </ul>
            {c.action?.type === "button" && (
              <button className={styles.cardButton}>{c.action.label}</button>
            )}
            {c.action?.type === "link" && (
              <a className={styles.cardLink} href="#">
                {c.action.label} <IconArrowRight />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   video showcase — scroll-driven fullscreen animation
   ============================================================ */

function VideoShowcase() {
  const sectionRef = useRef(null);
  const boxRef = useRef(null);
  const introRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function applyFrame(progress) {
      const box = boxRef.current;
      const intro = introRef.current;
      if (!box) return;

      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const startWidth = Math.min(900, vw * 0.78);
      const startHeight = startWidth * (9 / 16);
      const width = startWidth + (vw - startWidth) * progress;
      const height = startHeight + (vh - startHeight) * progress;
      const radius = 28 * (1 - progress);

      box.style.width = `${width}px`;
      box.style.height = `${height}px`;
      box.style.borderRadius = `${radius}px`;

      if (intro) {
        intro.style.opacity = `${Math.max(0, 1 - progress * 2.2)}`;
      }
    }

    if (prefersReduced) {
      applyFrame(0);
      return;
    }

    function onScroll() {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh;
      let raw = total > 0 ? -rect.top / total : 0;
      raw = Math.min(1, Math.max(0, raw));
      // reach full-screen a bit before the section ends, then hold
      const progress = Math.min(1, raw / 0.72);
      applyFrame(progress);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className={styles.videoSection} ref={sectionRef}>
      <div className={styles.videoIntro} ref={introRef}>
        <h2 className={styles.sectionHeading}>Veja o EVERISE em ação</h2>
        <p>
          Descubra como nossa plataforma simplifica a gestão de guinchos e frotas através de
          uma interface intuitiva e automações poderosas.
        </p>
      </div>
      <div className={styles.videoStickyWrap}>
        <div className={styles.videoBox} ref={boxRef}>
          <button className={styles.playButton} aria-label="Reproduzir vídeo de demonstração">
            <IconPlay />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   testimonials
   ============================================================ */

function Testimonials() {
  const testimonials = [
    {
      text: "A EVERISE mudou a forma como gerencio meus caminhões. O tempo de resposta caiu pela metade e a satisfação dos clientes subiu instantaneamente.",
      name: "Carlos Oliveira",
      role: "Logística Express",
    },
    {
      text: "Implementação rápida e um suporte excepcional. Para nossa ONG, a transparência dos relatórios foi o diferencial que precisávamos.",
      name: "Mariana Costa",
      role: "Fundação Vidas",
    },
    {
      text: "O controle de SLA é cirúrgico. Finalmente temos visibilidade real sobre cada atendimento em nossas clínicas parceiras.",
      name: "Ricardo Santos",
      role: "MedCore Group",
    },
  ];

  return (
    <section className={styles.testimonials}>
      <h2 className={styles.sectionHeading}>O que dizem nossos parceiros</h2>
      <div className={styles.testimonialsRow}>
        {testimonials.map((t) => (
          <div className={styles.testimonialCard} key={t.name}>
            <div className={styles.stars}>
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} />
              ))}
            </div>
            <p className={styles.testimonialText}>"{t.text}"</p>
            <div className={styles.testimonialPerson}>
              <InitialAvatar name={t.name} />
              <div>
                <div className={styles.testimonialName}>{t.name}</div>
                <div className={styles.testimonialRole}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   pricing
   ============================================================ */

function Pricing() {
  const plans = [
    {
      name: "ESSENCIAL",
      price: "R$97,00",
      note: "/mês por usuário",
      features: ["Rastreamento básico", "Até 3 operadores", "Suporte por e-mail", "Relatórios mensais"],
      cta: "Começar agora",
      popular: false,
    },
    {
      name: "PROFISSIONAL",
      price: "R$197,00",
      note: "/mês por usuário",
      features: [
        "Rastreamento tempo real",
        "Operadores ilimitados",
        "Suporte prioritário 24/7",
        "Relatórios e alertas",
        "Integração via API",
      ],
      cta: "Começar agora",
      popular: true,
    },
    {
      name: "ENTERPRISE",
      price: "Custom",
      note: "sob consulta",
      features: ["Tudo do Profissional", "Onboarding dedicado", "SLA garantido", "White-label disponível"],
      cta: "Falar com vendas",
      popular: false,
    },
  ];

  return (
    <section className={styles.pricing}>
      <SectionDecor rings={[{ tone: "navy", size: 56, pos: { top: "0", left: "-30px" } }]} />
      <h2 className={styles.sectionHeading}>Escolha o plano ideal</h2>
      <p className={styles.sectionSubheading}>Sem surpresas. Sem letras miúdas. Cancele quando quiser.</p>
      <div className={styles.pricingRow}>
        {plans.map((p) => (
          <div
            key={p.name}
            className={`${styles.pricingCard} ${p.popular ? styles.pricingCardPopular : ""}`}
          >
            {p.popular && <span className={styles.popularBadge}>POPULAR</span>}
            <p className={styles.planName}>{p.name}</p>
            {p.price === "Custom" ? (
              <p className={styles.planPriceCustom}>{p.price}</p>
            ) : (
              <p className={styles.planPrice}>{p.price}</p>
            )}
            <p className={styles.planPriceNote}>{p.note}</p>
            <ul className={styles.planFeatures}>
              {p.features.map((f) => (
                <li key={f}>
                  <IconCheckPlain className={styles.planCheck} />
                  {f}
                </li>
              ))}
            </ul>
            <button className={styles.planButton}>{p.cta}</button>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   final CTA
   ============================================================ */

function CTA() {
  return (
    <section className={styles.cta}>
      <span className={styles.ctaGlow} aria-hidden="true" />
      <h2 className={styles.ctaHeading}>Pronto para elevar seu padrão operacional?</h2>
      <p className={styles.ctaText}>
        Junte-se a centenas de gestores que já transformaram seus processos com a EVERISE.
      </p>
      <div className={styles.ctaActions}>
        <button className={styles.btnOrange}>Iniciar Teste Gratuito</button>
        <button className={styles.btnOutline}>Falar com Especialista</button>
      </div>
    </section>
  );
}

/* ============================================================
   app
   ============================================================ */

export default function App() {
  return (
    <div className={styles.page}>
      <Hero />
      <FounderStory />
      <Steps />
      <Audience />
      <VideoShowcase />
      <Testimonials />
      <Pricing />
      <CTA />
    </div>
  );
}