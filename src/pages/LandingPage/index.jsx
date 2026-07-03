import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { Footer, Header } from "../../components";
import fotoLipe from "../../assets/images/LandingPage/rafaELipe.jpeg"

/* ============================================================
   Icons
   ============================================================ */

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
   Sub-components
   ============================================================ */

function InitialAvatar({ name, size = 44 }) {
  const initials = name.split(" ").map((n) => n[0]).slice(0, 2).join("");

  return (
    <span
      className={styles.avatarCircle}
      style={{ width: size, height: size, fontSize: size * 0.34 }}
    >
      {initials}
    </span>
  );
}

const DotGrid = ({ style, count = 30, cols = 6 }) => (
  <span
    className={styles.dotGrid}
    style={{ ...style, gridTemplateColumns: `repeat(${cols}, 1fr)` }}
  >
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} />
    ))}
  </span>
);

/* ── Contador animado (único efeito com IntersectionObserver,
   pontual e autocontido) ─────────────────────────────────── */
function Counter({ end, suffix = "", duration = 1800 }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const isFloat = String(end).includes(".");
          function update(now) {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(2, -10 * progress);
            const v = end * eased;
            setValue(isFloat ? parseFloat(v.toFixed(1)) : Math.round(v));
            if (progress < 1) requestAnimationFrame(update);
          }
          requestAnimationFrame(update);
          io.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className={styles.statsNum}>
      {value}{suffix}
    </span>
  );
}

/* ── Card de público com flip no hover (hover/clique = useState
   simples, igual ao padrão dos hotspots do SobreGuincho) ───── */
function AudienceCard({ c }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`${styles.cardFlipWrapper} ${flipped ? styles.cardFlipped : ""}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((prev) => !prev)}
    >
      <div className={styles.cardFlipInner}>
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

        <div className={`${styles.card} ${styles.cardBack}`}>
          <span className={styles.cardIcon}>{c.icon}</span>
          <h3 className={styles.cardTitle}>{c.title}</h3>
          <p className={styles.cardBackText}>{c.backText}</p>
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
   Data
   ============================================================ */

const steps = [
  { icon: <IconInstall />, title: "Instalar", desc: "Implementação ágil sem interrupção operacional em sua frota ativa." },
  { icon: <IconConnect />, title: "Conectar", desc: "Sincronização em tempo real com nossa rede centralizada de inteligência." },
  { icon: <IconControl />, title: "Controlar", desc: "Gestão completa via dashboard intuitivo com KPIs de alta precisão." },
];

const audienceCards = [
  {
    icon: <IconFamily />,
    title: "Família",
    label: "USO DOMÉSTICO",
    text: "Foco total em segurança e rastreamento em tempo real para garantir que quem você ama esteja sempre protegido.",
    items: ["Alertas de proximidade", "Botão de pânico digital"],
    backText: "Seus entes queridos merecem o máximo em segurança. Com alertas em tempo real e botão de pânico, você fica tranquilo onde quer que esteja.",
    action: null,
  },
  {
    icon: <IconClinic />,
    title: "Clínicas",
    label: "OPERAÇÕES MÉDICAS",
    text: "Garantia estrita de SLA, histórico completo de movimentação e total conformidade com normas de saúde.",
    items: ["Controle rigoroso de SLA", "Logs de auditoria imutáveis"],
    backText: "Cada segundo importa na saúde. Nosso sistema garante SLA rigoroso e rastreabilidade total, mantendo sua operação em conformidade e seus pacientes seguros.",
    action: { type: "button", label: "Contatar Consultor" },
  },
  {
    icon: <IconOngs />,
    title: "ONGs",
    label: "MISSÕES SOCIAIS",
    text: "Transparência absoluta e relatórios automáticos de impacto social para doadores e stakeholders.",
    items: ["Relatórios de transparência", "Dashboard de doadores"],
    backText: "Missões sociais exigem confiança. Com relatórios automáticos e dashboards transparentes, seus doadores acompanham cada passo do impacto gerado.",
    action: { type: "link", label: "Saber mais" },
  },
];

const testimonials = [
  { text: "A EVERISE mudou a forma como gerencio meus caminhões. O tempo de resposta caiu pela metade e a satisfação dos clientes subiu instantaneamente.", name: "Carlos Oliveira", role: "Logística Express" },
  { text: "Implementação rápida e um suporte excepcional. Para nossa ONG, a transparência dos relatórios foi o diferencial que precisávamos.", name: "Mariana Costa", role: "Fundação Vidas" },
  { text: "O controle de SLA é cirúrgico. Finalmente temos visibilidade real sobre cada atendimento em nossas clínicas parceiras.", name: "Ricardo Santos", role: "MedCore Group" },
  { text: "Nunca imaginei que seria tão simples ter controle total da minha frota. A interface é intuitiva e o suporte é excelente.", name: "Ana Beatriz", role: "TransFácil" },
  { text: "Os relatórios automáticos economizaram horas de trabalho toda semana. Recomendo a todos os gestores de frota.", name: "Fernando Lopes", role: "Grupo Expresso" },
];

const testimonialsRow2 = [
  { text: "A integração com nosso sistema foi perfeita. Em menos de 24 horas já tínhamos visibilidade total da frota.", name: "Patrícia Mendes", role: "CargoPrime" },
  { text: "O dashboard é intuitivo e o suporte responde rapidíssimo. Melhor investimento que fizemos este ano.", name: "Thiago Alves", role: "VelozLog" },
  { text: "Usamos para monitorar nossas ambulâncias. A precisão do rastreamento é impressionante.", name: "Dra. Camila Ferreira", role: "Clínica Saúde Total" },
  { text: "Como ONG, precisávamos de transparência para nossos doadores. O EVERISE nos deu exatamente isso.", name: "João Pedro Nunes", role: "Instituto Esperança" },
  { text: "Reduziu nosso custo operacional em 30% no primeiro mês. Os alertas automáticos fazem toda a diferença.", name: "Sílvia Rocha", role: "TransRota Sul" },
];

const plans = [
  { name: "ESSENCIAL", price: "R$97,00", note: "/mês por usuário", features: ["Rastreamento básico", "Até 3 operadores", "Suporte por e-mail", "Relatórios mensais"], cta: "Começar agora", popular: false },
  { name: "PROFISSIONAL", price: "R$197,00", note: "/mês por usuário", features: ["Rastreamento tempo real", "Operadores ilimitados", "Suporte prioritário 24/7", "Relatórios e alertas", "Integração via API"], cta: "Começar agora", popular: true },
  { name: "ENTERPRISE", price: "Custom", note: "sob consulta", features: ["Tudo do Profissional", "Onboarding dedicado", "SLA garantido", "White-label disponível"], cta: "Falar com vendas", popular: false },
];

const statsData = [
  { value: 500, suffix: "+", label: "Empresas ativas" },
  { value: 98.7, suffix: "%", label: "Uptime garantido" },
  { value: 42, suffix: "%", label: "Redução de custo" },
  { value: 24, suffix: "/7", label: "Suporte disponível" },
];

/* ============================================================
   Página
   ============================================================ */

export default function EveriseLanding() {
  const [videoExpanded, setVideoExpanded] = useState(false);

  return (
    <>
      <Header />

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
              Controle total do seu guincho, sem complicação
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

          <div className={styles.scrollHint} aria-hidden="true">
            <div className={styles.scrollHintMouse}>
              <div className={styles.scrollHintDot} />
            </div>
          </div>
        </section>

        {/* ── FOUNDER ── */}
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
            <div className={styles.founderPortrait}>
              <DotGrid style={{ top: "20px", left: "20px" }} />
              <img
                src={fotoLipe}
                alt="Rafa - Fundadora da Ever Rise"
                className={styles.founderImg}
              />
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

        {/* ── VÍDEO ── */}
<section className={styles.videoSection}>
  <div className={styles.videoIntro}>
    <h2 className={styles.sectionHeading}>Veja o Ever Rise em ação</h2>
    <p>
      Descubra como nossa plataforma simplifica a gestão de guinchos e frotas através de
      uma interface intuitiva e automações poderosas.
    </p>
  </div>

  <div className={styles.videoScrollWrap}>
    <div className={styles.videoBox}>
      <div className={styles.videoInner}>
        <button className={styles.playButton} aria-label="Reproduzir vídeo de demonstração">
          <IconPlay />
        </button>
      </div>
    </div>
  </div>
</section>

        {/* ── TESTIMONIALS (marquee 100% CSS) ── */}
        <section className={styles.testimonials}>
          <div className={styles.decorLayer} aria-hidden="true">
            <DotGrid style={{ top: "6%", left: "2%" }} count={42} cols={7} />
            <DotGrid style={{ bottom: "6%", right: "2%" }} count={42} cols={7} />
            <span className={styles.ringPeach} style={{ width: 180, height: 180, top: "-50px", right: "-60px" }} />
            <span className={styles.ringNavy} style={{ width: 80, height: 80, top: "-20px", right: "-20px" }} />
            <span className={styles.ringPeach} style={{ width: 140, height: 140, bottom: "-40px", left: "-50px" }} />
          </div>

          <h2 className={styles.sectionHeading}>O que dizem nossos parceiros</h2>

          <div className={styles.carouselDouble}>
            <div className={styles.carouselRow}>
              <div className={styles.carouselTrack}>
                {[...testimonials, ...testimonials].map((t, idx) => (
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

            <div className={`${styles.carouselRow} ${styles.carouselRowReverse}`}>
              <div className={styles.carouselTrack}>
                {[...testimonialsRow2, ...testimonialsRow2].map((t, idx) => (
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

      <Footer />
    </>
  );
}