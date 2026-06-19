import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { Footer, Header } from "../../components";


/* ============================================================
   small inline icons (no external assets needed)
   ============================================================ */

const IconPerson = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" fill="#fff" />
    <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" fill="#fff" />
  </svg>
);

const IconChevronDown = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M5 9l7 7 7-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconInstall = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
    <path d="M12 3v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconConnect = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="5" r="2.2" stroke="currentColor" strokeWidth="2" />
    <circle cx="5" cy="18" r="2.2" stroke="currentColor" strokeWidth="2" />
    <circle cx="19" cy="18" r="2.2" stroke="currentColor" strokeWidth="2" />
    <path d="M10.6 6.6L6.6 16M13.4 6.6l4 9.4M7.4 18h9.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconControl = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
    <path d="M4 19V11M10 19V5M16 19v-7M21 19H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconFamily = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <circle cx="8" cy="7" r="2.6" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="16" cy="7" r="2.6" stroke="currentColor" strokeWidth="1.8" />
    <path d="M2.5 19c0-3 2.6-5 5.5-5s5.5 2 5.5 5M10.5 19c0-3 2.6-5 5.5-5s5.5 2 5.5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconClinic = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 11v6M9 14h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconOngs = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <path d="M12 21s-7-4.4-9.3-8.8C1.2 9 2.7 5.6 6 4.9c2-.4 3.7.6 6 2.8 2.3-2.2 4-3.2 6-2.8 3.3.7 4.8 4.1 3.3 7.3C19 16.6 12 21 12 21z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
);

const IconCheck = ({ className }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8 12.5l2.5 2.5L16 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCheckPlain = ({ className }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M5 13l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconStar = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.5l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17.7 5.9 21l1.5-6.8L2.2 9.5l6.9-.7z" />
  </svg>
);

const IconPlay = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const IconPortrait = () => (
  <svg width="160" height="160" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8.2" r="4" fill="#fff" fillOpacity="0.9" />
    <path d="M3.5 21c0-5 3.8-8 8.5-8s8.5 3 8.5 8" fill="#fff" fillOpacity="0.9" />
  </svg>
);

/* ============================================================
   sub-components
   ============================================================ */

function InitialAvatar({ name, size = 44 }) {
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

const DotGrid = ({ style, count = 30, cols = 6 }) => (
  <span className={styles.dotGrid} style={{ ...style, gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} />
    ))}
  </span>
);

/* ============================================================
   data
   ============================================================ */

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

const audienceCards = [
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
  {
    text: "Nunca imaginei que seria tão simples ter controle total da minha frota. A interface é intuitiva e o suporte é excelente.",
    name: "Ana Beatriz",
    role: "TransFácil",
  },
  {
    text: "Os relatórios automáticos economizaram horas de trabalho toda semana. Recomendo a todos os gestores de frota.",
    name: "Fernando Lopes",
    role: "Grupo Expresso",
  },
];

const testimonialsRow2 = [
  {
    text: "A integração com nosso sistema foi perfeita. Em menos de 24 horas já tínhamos visibilidade total da frota.",
    name: "Patrícia Mendes",
    role: "CargoPrime",
  },
  {
    text: "O dashboard é intuitivo e o suporte responde rapidíssimo. Melhor investimento que fizemos este ano.",
    name: "Thiago Alves",
    role: "VelozLog",
  },
  {
    text: "Usamos para monitorar nossas ambulâncias. A precisão do rastreamento é impressionante.",
    name: "Dra. Camila Ferreira",
    role: "Clínica Saúde Total",
  },
  {
    text: "Como ONG, precisávamos de transparência para nossos doadores. O EVERISE nos deu exatamente isso.",
    name: "João Pedro Nunes",
    role: "Instituto Esperança",
  },
  {
    text: "Reduziu nosso custo operacional em 30% no primeiro mês. Os alertas automáticos fazem toda a diferença.",
    name: "Sílvia Rocha",
    role: "TransRota Sul",
  },
];

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

/* ============================================================
   Infinite Testimonials Carousel — single row
   ============================================================ */

function TestimonialsCarouselRow({ items, direction = "left" }) {
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);

  const allItems = [...items, ...items, ...items];
  const speed = direction === "left" ? 0.35 : -0.35;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function getLoopWidth() {
      const cards = track.querySelectorAll(`.${styles.testimonialCard}`);
      if (cards.length === 0) return 0;
      const cardW = cards[0].offsetWidth;
      const gap = 22;
      return (cardW + gap) * items.length;
    }

    function animate() {
      if (!pausedRef.current) {
        posRef.current -= speed;
        const loopW = getLoopWidth();
        if (loopW > 0) {
          if (posRef.current <= -loopW) posRef.current += loopW;
          if (posRef.current > 0) posRef.current -= loopW;
        }
        track.style.transform = `translateX(${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    }

    animRef.current = requestAnimationFrame(animate);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [speed, items.length]);

  return (
    <div
      className={styles.carouselViewport}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <div className={styles.carouselTrack} ref={trackRef}>
        {allItems.map((t, idx) => (
          <div className={styles.testimonialCard} key={idx}>
            <div className={styles.stars}>
              {Array.from({ length: 5 }).map((_, i) => <IconStar key={i} />)}
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
    </div>
  );
}

/* ============================================================
   Audience Card with flip interaction
   ============================================================ */

function AudienceCard({ c }) {
  const [flipped, setFlipped] = React.useState(false);

  return (
    <div
      className={`${styles.cardFlipWrapper} ${flipped ? styles.cardFlipped : ""}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className={styles.cardFlipInner}>
        {/* FRONT */}
        <div className={`${styles.card} ${styles.cardFront}`}>
          <span className={styles.cardIcon}>{c.icon}</span>
          <h3 className={styles.cardTitle}>{c.title}</h3>
          <p className={styles.cardLabel}>{c.label}</p>
          <p className={styles.cardText}>{c.text}</p>
          <ul className={styles.cardList}>
            {c.items.map((item) => (
              <li key={item}>
                <IconCheck className={styles.cardCheck} />
                {item}
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

        {/* BACK */}
        <div className={`${styles.card} ${styles.cardBack}`}>
          <span className={styles.cardIcon}>{c.icon}</span>
          <h3 className={styles.cardTitle}>{c.title}</h3>
          <p className={styles.cardBackText}>
            {c.title === "Família" && "Seus entes queridos merecem o máximo em segurança. Com alertas em tempo real e botão de pânico, você fica tranquilo onde quer que esteja."}
            {c.title === "Clínicas" && "Cada segundo importa na saúde. Nosso sistema garante SLA rigoroso e rastreabilidade total, mantendo sua operação em conformidade e seus pacientes seguros."}
            {c.title === "ONGs" && "Missões sociais exigem confiança. Com relatórios automáticos e dashboards transparentes, seus doadores acompanham cada passo do impacto gerado."}
          </p>
          {c.action?.type === "button" && (
            <button className={styles.cardButton}>{c.action.label}</button>
          )}
          {c.action?.type === "link" && (
            <a className={styles.cardLink} href="#">
              {c.action.label} <IconArrowRight />
            </a>
          )}
        </div>
      </div>
    </div>
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
      const startWidth = Math.min(860, vw * 0.80);
      const startHeight = startWidth * (9 / 16);
      const width = startWidth + (vw - startWidth) * progress;
      const height = startHeight + (vh - startHeight) * progress;
      const radius = 24 * (1 - progress);

      box.style.width = `${width}px`;
      box.style.height = `${height}px`;
      box.style.borderRadius = `${radius}px`;

      if (intro) {
        // Fade text out quickly as scroll begins
        const textOpacity = Math.max(0, 1 - progress * 4);
        intro.style.opacity = `${textOpacity}`;
        intro.style.transform = `translateY(${-progress * 50}px)`;
        intro.style.pointerEvents = progress > 0.2 ? "none" : "";
        // Collapse intro height once invisible so it doesn't push box down
        intro.style.marginBottom = progress > 0.3 ? `-${intro.offsetHeight * Math.min(1, (progress - 0.3) / 0.3)}px` : "";
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
      <div className={styles.videoStickyWrap}>
        <div className={styles.videoIntro} ref={introRef}>
          <h2 className={styles.sectionHeading}>Veja o EVERISE em ação</h2>
          <p>
            Descubra como nossa plataforma simplifica a gestão de guinchos e frotas através de
            uma interface intuitiva e automações poderosas.
          </p>
        </div>
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
   typing headline
   ============================================================ */

function TypingHeadline({ text, className }) {
  const [displayed, setDisplayed] = React.useState("");
  const [done, setDone] = React.useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    indexRef.current = 0;

    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        indexRef.current += 1;
        setDisplayed(text.slice(0, indexRef.current));
        if (indexRef.current >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, 38);
      return () => clearInterval(interval);
    }, 300);

    return () => clearTimeout(delay);
  }, [text]);

  return (
    <span className={className}>
      {displayed}
      {!done && <span className={styles.typingCursor}>|</span>}
    </span>
  );
}

/* ============================================================
   app
   ============================================================ */

export default function App() {
  return (
    <>
      <div className={styles.page}>

        {/* ── HERO ── */}
        <section className={styles.hero}>
          <div className={styles.decorLayer} aria-hidden="true">
            <span className={styles.ringPeach} style={{ width: 200, height: 200, top: "5%", left: "-80px" }} />
            <span className={styles.ringNavy} style={{ width: 90, height: 90, top: "3%", left: "-20px" }} />
            <span className={styles.ringPeach} style={{ width: 140, height: 140, bottom: "8%", right: "-60px" }} />
            <DotGrid style={{ top: "10%", right: "4%" }} count={42} cols={7} />
            <DotGrid style={{ bottom: "12%", left: "3%" }} count={30} cols={6} />
            <span className={styles.dash} style={{ top: "44%", left: "5%" }} />
            <span className={styles.dash} style={{ bottom: "30%", right: "8%", transform: "rotate(90deg)" }} />
          </div>

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <TypingHeadline
                text="Controle total do seu guincho, sem compilação"
                className={styles.navyText}
              />
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
          </div>
        </section>

        {/* ── FOUNDER STORY ── */}
        <section className={styles.founder}>
          <div className={styles.decorLayer} aria-hidden="true">
            <span className={styles.ringPeach} style={{ width: 220, height: 220, top: "-60px", left: "-80px" }} />
            <span className={styles.ringNavy} style={{ width: 100, height: 100, top: "-20px", left: "-30px" }} />
            <DotGrid style={{ bottom: "8%", left: "2%" }} count={42} cols={7} />
            <DotGrid style={{ top: "6%", right: "2%" }} count={42} cols={7} />
            <span className={styles.dash} style={{ bottom: "20%", right: "6%" }} />
          </div>

          <div className={styles.founderLeft}>
            <h2 className={styles.founderHeading}>Criado por quem viveu o problema</h2>
            <p className={styles.founderText}>
              A história da Ever Rise não começou em uma prancheta isolada, mas sim na vivência prática de um problema real. Depois da Rafa e Dona Lidia (Sua mãe) enfrentar na pele a dificuldade de gerenciar um guincho, lidando com equipamento sem segurança. Ela se uniu aos seus amigos para mudar essa realidade.
            </p>
            <p className={styles.founderText}>
              Juntos, eles uniram forças, ideias e competências para construir a Ever Rise. O produto nasceu dessa necessidade genuína e foi totalmente desenhado para quem precisa de clareza, segurança e eficiência, sem espaço para complexidade desnecessária.
            </p>
          </div>

          <div className={styles.founderImageWrap}>
            {/* Troque o comentário abaixo pela sua imagem real:
                <img src="/sua-imagem.jpg" alt="Rafa, fundadora da EVERISE" />
                Enquanto isso, o placeholder abaixo será exibido. */}
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

        {/* ── STEPS ── */}
        <section className={styles.steps}>
          <div className={styles.decorLayer} aria-hidden="true">
            <span className={styles.ringPeach} style={{ width: 110, height: 110, bottom: "-40px", right: "-50px" }} />
            <DotGrid style={{ bottom: "10%", left: "5%" }} />
          </div>

          <h2 className={styles.sectionHeading}>Três passos para o controle total</h2>
          <p className={styles.sectionSubheading}>Simplicidade na implementação, excelência na execução.</p>

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

        {/* ── AUDIENCE ── */}
        <section className={styles.audience}>
          <div className={styles.decorLayer} aria-hidden="true">
            <DotGrid style={{ top: 0, right: "4%" }} />
            <DotGrid style={{ bottom: "10%", left: "2%" }} count={42} cols={7} />
            <span className={styles.ringPeach} style={{ width: 160, height: 160, bottom: "-40px", right: "-60px" }} />
            <span className={styles.ringNavy} style={{ width: 70, height: 70, top: "30%", right: "2%" }} />
            <span className={styles.dash} style={{ top: "15%", left: "5%" }} />
            <span className={styles.dash} style={{ bottom: "25%", right: "8%", transform: "rotate(90deg)" }} />
          </div>

          <div className={styles.audienceHeadingWrap}>
            <h2 className={styles.audienceHeading}>Feito para quem não pode errar</h2>
            <span className={styles.audienceHeadingLine} />
          </div>

          <p className={styles.audienceText}>
            Adaptamos nossa tecnologia para os ambientes mais exigentes, onde cada segundo e
            cada dado importam.
          </p>

          <div className={styles.cardsRow}>
            {audienceCards.map((c) => (
              <AudienceCard key={c.title} c={c} />
            ))}
          </div>
        </section>

        {/* ── VIDEO SHOWCASE ── */}
        <VideoShowcase />

        {/* ── TESTIMONIALS ── */}
        <section className={styles.testimonials}>
          <div className={styles.decorLayer} aria-hidden="true">
            <DotGrid style={{ top: "6%", left: "2%" }} count={42} cols={7} />
            <DotGrid style={{ bottom: "6%", right: "2%" }} count={42} cols={7} />
            <span className={styles.ringPeach} style={{ width: 180, height: 180, top: "-50px", right: "-60px" }} />
            <span className={styles.ringNavy} style={{ width: 80, height: 80, top: "-20px", right: "-20px" }} />
            <span className={styles.ringPeach} style={{ width: 140, height: 140, bottom: "-40px", left: "-50px" }} />
            <span className={styles.dash} style={{ top: "20%", right: "6%" }} />
            <span className={styles.dash} style={{ bottom: "20%", left: "6%", transform: "rotate(90deg)" }} />
          </div>

          <h2 className={styles.sectionHeading}>O que dizem nossos parceiros</h2>

          <div className={styles.carouselDouble}>
            <TestimonialsCarouselRow items={testimonials} direction="left" />
            <TestimonialsCarouselRow items={testimonialsRow2} direction="right" />
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className={styles.pricing}>
          <div className={styles.decorLayer} aria-hidden="true">
            <span className={styles.ringNavy} style={{ width: 56, height: 56, top: 0, left: "-30px" }} />
          </div>

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

        {/* ── CTA ── */}
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

      </div>
    </>
  );
}