import { useState, useEffect, useRef } from "react";
import "./styles.css";
import { Footer, Header } from "../../components";
import { useNavigate } from "react-router-dom";

import GuinchoCrianca from '../../assets/images/Vendas/FotoDaCriancaQuarto.svg';
import MulherGuincho from '../../assets/images/Vendas/Mulhernoquarto.svg';
import Praticidade from '../../assets/images/Vendas/Praticidade.svg';
// import Guincho3d from '../../assets/images/Vendas/guincho3d.svg';
import EverriseSala from '../../assets/images/Vendas/EverriseSala.svg';
import GenericoSala from '../../assets/images/Vendas/GenericoSala.svg';
import EverriseCorredor from '../../assets/images/Vendas/EverriseCorredor.svg';
import GenericoCorredor from '../../assets/images/Vendas/GenericoCorredor.svg';
import EverriseQuarto from '../../assets/images/Vendas/EverriseQuarto.svg';
import GenericoQuarto from '../../assets/images/Vendas/GenericoQuarto.svg';
import VideoHero from '../../assets/images/Vendas/VideoHero.mp4'
import EverriseBanheiro from '../../assets/images/Vendas/imagemBanheiro.svg'
import GenericoBanheiro from '../../assets/images/Vendas/genericoBanheiro.svg'
import Mariana from '../../assets/images/Vendas/DraMariana.svg'
import Ana from '../../assets/images/Vendas/DraAndrea.svg'
import Andre from '../../assets/images/Vendas/DrAndre.svg'
import Eduardo from '../../assets/images/Vendas/DrEduardo.svg'
import Guincho1 from '../../assets/images/Vendas/GuinchoFrente.svg';
import Guincho2 from '../../assets/images/Vendas/GuinchoMeioEsquerdo.svg';
import Guincho3 from '../../assets/images/Vendas/GuinchoMeioDireito.svg';
import Guincho4 from '../../assets/images/Vendas/GuinchoEsquerdo.svg';
import Guincho5 from '../../assets/images/Vendas/GuinchoDireito.svg';
import Guincho6 from '../../assets/images/Vendas/CostaEsquerdo.svg';
import Guincho7 from '../../assets/images/Vendas/CostaDireito.svg';
import Guincho8 from '../../assets/images/Vendas/CostasGuincho.svg';


/* ─── IMAGES ─── */
const IMG = {
  VideoHero,
  GuinchoCrianca,
  MulherGuincho,
  Praticidade,
  GuinchoCarrossel: [Guincho1, Guincho2, Guincho3, Guincho4, Guincho5, Guincho6, Guincho7, Guincho8],
  EverriseSala,
  GenericoSala,
  EverriseCorredor,
  GenericoCorredor,
  EverriseQuarto,
  GenericoQuarto,
  EverriseBanheiro,
  GenericoBanheiro,
  Mariana,
  Ana,
  Andre,
  Eduardo,
  footer: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
};

/* ─── TESTIMONIALS ─── */
const testimonials = [
  { name: "Dra. Ana Ribeiro", role: "Fisioterapeuta", text: "O Guincho EverRise transformou completamente a rotina dos nossos pacientes. A segurança e o conforto são incomparáveis.", img: IMG.Ana },
  { name: "Dr. André Faro", role: "Geriatra", text: "Recomendo fortemente para qualquer ambiente de cuidado. A facilidade de uso e a estabilidade são excepcionais.", img: IMG.Andre },
  { name: "Dr. Eduardo Almeida", role: "Enfermeira Chefe", text: "A diferença no dia a dia dos cuidadores é enorme. Menos esforço físico e mais segurança para os pacientes.", img: IMG.Eduardo },
  { name: "Dra. Mariana Costa", role: "Médico Intensivista", text: "Equipamento de alta qualidade. O modelo 3D interativo me ajudou a tomar a decisão de compra com confiança.", img: IMG.Mariana },
];

/* ─── CARE ROOMS ─── */
const rooms = [
  { id: "01", label: "Sala", desc: "Transferências seguras da cadeira para a cama ou poltronas", imgs: [IMG.EverriseSala, IMG.GenericoSala] },
  { id: "02", label: "Corredor", desc: "Mobilidade prática entre ambientes sem esforço", imgs: [IMG.EverriseCorredor, IMG.GenericoCorredor] },
  { id: "03", label: "Quarto", desc: "Mais conforto e segurança na rotina de cuidados.", imgs: [IMG.EverriseQuarto, IMG.GenericoQuarto] },
  { id: "04", label: "Banheiro", desc: "Transferência com dignidade e máxima segurança", imgs: [IMG.EverriseBanheiro, IMG.GenericoBanheiro] },
];


/* ─── FAQ ─── */
const faqs = [
  {
    q: "Que serviço a Ever Rise oferece?",
    a: "O Guincho EverRise oferece transferência segura, confortável e digna para pacientes com mobilidade reduzida, adaptando-se a diferentes ambientes do lar e instituições de saúde.",
  },
  {
    q: "Qual é a principal função do guincho da Everrise?",
    a: "Sua função principal é auxiliar na movimentação e transferência de pacientes entre cama, cadeira e outros ambientes, reduzindo o esforço físico do cuidador e o risco de quedas ou lesões.",
  },
  {
    q: "Quais são os benefícios de utilizar um guincho hospitalar Everrise?",
    a: "Entre os principais benefícios estão mais segurança nas transferências, redução de dores e lesões para cuidadores, maior autonomia e dignidade para o paciente, e praticidade no dia a dia de cuidado.",
  },
];
/* ─── PLANS ─── */
const plans = [
  {
    label: "1º PLANO",
    name: "ESSENTIAL",
    price: "R$ 6.000",
    features: [
      { text: "Capacidade: 100 kg" },
      { text: "Motores 12V" },
      { text: "Bateria Chumbo-Ácido 12V", sub: "3 a 4h de autonomia" },
      { text: "Conectado via aplicativo" },
      { text: "Operação manual", sub: "comandos via app" },
    ],
    cta: "Escolher plano",
    highlight: false,
  },
  {
    label: "2º PLANO",
    name: "STANDARD",
    price: "R$ 10.000",
    features: [
      { text: "Capacidade: 120 kg" },
      { text: "Motores DC 24V" },
      { text: "Bateria Chumbo-Ácido 24V", sub: "até 8h de autonomia" },
      { text: "Sensores ultrassônicos", sub: "parada a 30cm" },
      { text: "App com monitoramento" },
    ],
    cta: "Escolher plano",
    highlight: true,
  },
  {
    label: "3º PLANO",
    name: "PRO",
    nameSuffix: "AUTONOMOUS",
    price: "R$ 16.000",
    features: [
      { text: "Capacidade: 150 kg" },
      { text: "Motores industriais 24V", sub: "alto torque" },
      { text: "Bateria Lítio LiFePO4 24V", sub: "até 14h de autonomia" },
      { text: "Visão computacional (YOLOv5n)", sub: "segurança inteligente" },
      { text: "App completo com IA e relatórios" },
    ],
    cta: "Escolher plano",
    highlight: false,
  },
];

/* ─── DOT GRID ─── */
function DotGrid({ style, count = 30, cols = 6 }) {
  return (
    <span
      className="dot-grid-deco"
      style={{ ...style, gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      aria-hidden="true"
    >
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} />
      ))}
    </span>
  );
}

/* ─── DECOR LAYER ─── */
function DecorLayer({ children }) {
  return (
    <div className="decor-layer" aria-hidden="true">
      {children}
    </div>
  );
}

/* ─── SECTION HEADER ─── */
function SectionHeader({ badge, title, sub }) {
  return (
    <div className="section-header">
      <div className="badge-wrapper">
        <div className="badge-inner">
          <div className="partnersEyebrowSquare" />
          <div className="badge-pill">{badge}</div>
        </div>
      </div>
      {title && <h2 className="section-title">{title}</h2>}
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  );
}

/* ─── HERO SECTION ─── */
function HeroSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [dims, setDims] = useState({ vw: window.innerWidth, vh: window.innerHeight });

  /* Update dims on resize so video recalculates */
  useEffect(() => {
    const onResize = () => setDims({ vw: window.innerWidth, vh: window.innerHeight });
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrolled = -rect.top;
      const totalScroll = el.offsetHeight - window.innerHeight;
      const p = Math.max(0, Math.min(1, scrolled / totalScroll));
      setProgress(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { vw, vh } = dims;

  const textOpacity = Math.max(0, 1 - progress / 0.3);


const initW =
  vw < 480
    ? vw * 0.90
    : vw < 768
    ? vw * 0.82
    : Math.min(600, vw * 0.55);
const initH = initW * 0.56;

const isMobileHero = vw < 768;
const initTop = vw < 768 ? 55 : 62;

// No mobile, o vídeo cresce só até 96% da largura (nunca fullscreen)
const maxW = isMobileHero ? vw * 0.96 : vw;
const maxH = isMobileHero ? maxW * 0.56 : vh;

const videoW = initW + (maxW - initW) * progress;
const videoH = initH + (maxH - initH) * progress;
const borderRadius = 24 * (1 - progress);
const videoLeft = (vw - videoW) / 2;
const videoTop = isMobileHero ? 50 : initTop + (50 - initTop) * progress;

  return (
    <section ref={sectionRef} style={{ position: "relative", height: vw < 768 ? "50vh" : "300vh" }}>
      <div style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        overflow: "hidden",
      }}>
        <DecorLayer>
          <span className="ring-peach" style={{ width: 200, height: 200, top: "5%", left: "-80px" }} />
          <span className="ring-navy" style={{ width: 90, height: 90, top: "3%", left: "-20px" }} />
          <span className="ring-peach" style={{ width: 140, height: 140, bottom: "8%", right: "-60px" }} />
          <DotGrid style={{ top: "10%", right: "4%" }} count={42} cols={7} />
          <DotGrid style={{ bottom: "12%", left: "3%" }} count={30} cols={6} />
          <span className="dash-deco" style={{ top: "44%", left: "5%" }} />
          <span className="dash-deco" style={{ bottom: "30%", right: "8%", transform: "rotate(90deg)" }} />
        </DecorLayer>

        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "38%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
          opacity: textOpacity,
          pointerEvents: textOpacity < 0.05 ? "none" : "auto",
          padding: "0 clamp(16px, 5vw, 80px)",
          textAlign: "center",
        }}>
          <p
            className="hero-eyebrow"
            style={{
              background: "linear-gradient(90deg, #3B1FA8 0%, #6B2FD9 40%, #F97316 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              top:"100px"
            }}
          >
            Mobilidade com segurança e dignidade
          </p>
        </div>

        <div style={{
          position: "absolute",
          width: videoW,
          height: videoH,
          top: `${videoTop}%`,
          left: videoLeft,
          transform: isMobileHero ? "translateY(-50%)" : "translateY(-50%)",
          borderRadius,
          overflow: "hidden",
          zIndex: 1,
        }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          >
            <source src={IMG.VideoHero} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

/* ─── PROJECTED ─── */
function ProjectedSection() {
  const sectionRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const slides = [
    { title: "Movimento suave", desc: "Sistema de elevação preciso que reduz o cansaço físico do cuidador garantindo uma transição segura e confortável para o paciente, sem movimentos bruscos ou intensos.", img: IMG.GuinchoCrianca },
    { title: "Design Ergonômico", desc: "Pensado para se adaptar a diferentes ambientes e rotinas de cuidado, oferecendo flexibilidade e praticidade no dia a dia.", img: IMG.MulherGuincho },
    { title: "Tecnologia Avançada", desc: "Sensores inteligentes e controles intuitivos que garantem a máxima segurança durante todas as transferências.", img: IMG.Praticidade },
  ];

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrolled = -rect.top;
      const totalScroll = el.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrolled / totalScroll));
      const newIndex = Math.min(slides.length - 1, Math.floor(progress * slides.length));
      setIndex(newIndex);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="projected-section" ref={sectionRef} style={{ marginTop: "200px" }}>
      <div className="projected-sticky">
        <DecorLayer>
          <span className="ring-peach" style={{ width: 220, height: 220, top: "-60px", left: "-80px" }} />
          <span className="ring-navy" style={{ width: 100, height: 100, top: "-20px", left: "-30px" }} />
          <span className="dash-deco" style={{ bottom: "20%", right: "6%" }} />
        </DecorLayer>

        <SectionHeader
          badge="TECNOLOGIA QUE TRANSFORMA"
          title="Projetado para o que realmente importa"
          squareStyle={{ left: "210px", transform: "translateX(0)" }}
        />

        <div className="projected-layout">
          <div className="projected-left">
            {slides.map((s, i) => (
              <div
                key={i}
                className={`projected-text-item ${i === index ? "active" : ""}`}
                /* On mobile all items stay visible; on desktop scroll drives opacity */
                style={isMobile ? { opacity: 1 } : undefined}
              >
                <span className="icon-bullet">⚡</span>
                <div>
                  <strong>{s.title}</strong>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="projected-right">
            <div className="projected-images">
              {slides.map((s, i) => (
                <img
                  key={i}
                  src={s.img}
                  alt={s.title}
                  className={`projected-img ${
                    isMobile
                      ? i === 0 ? "active" : ""   /* mobile: show first by default */
                      : i === index ? "active" : ""
                  }`}
                />
              ))}
            </div>
            <div className="projected-dots">
              {slides.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === index ? "active" : ""}`}
                  onClick={() => setIndex(i)}
                  style={{ cursor: "pointer" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: `${slides.length * 80}vh` }} />
    </section>
  );
}

/* ─── WINCH 3D ─── */
function Winch3DSection() {
  const [index, setIndex] = useState(0);
  const images = IMG.GuinchoCarrossel;

  const goPrev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const goNext = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <section className="winch3d-section" style={{ position: "relative", overflow: "hidden", marginTop: "60px" }}>
      <DecorLayer>
        <span className="ring-peach" style={{ width: 110, height: 110, bottom: "-40px", right: "-50px" }} />
        <span className="ring-navy" style={{ width: 56, height: 56, top: 0, left: "-30px" }} />
        <DotGrid style={{ bottom: "10%", left: "5%" }} />
        <DotGrid style={{ top: "10%", right: "4%" }} count={42} cols={7} />
        <span className="dash-deco" style={{ top: "15%", left: "5%" }} />
        <span className="dash-deco" style={{ bottom: "25%", right: "8%", transform: "rotate(90deg)" }} />
      </DecorLayer>

      <SectionHeader
  badge="COMEÇA DE TODOS OS ANGULAS"
  title="Veja cada detalhe do guincho"
/>

      <div className="winch3d-viewer">
        <div className="winch-carousel">
          <img
            src={images[index]}
            alt={`Guincho - foto ${index + 1}`}
            className="winch-img"
          />

          <button className="carousel-arrow carousel-arrow-left" onClick={goPrev} aria-label="Foto anterior">
            ←
          </button>
          <button className="carousel-arrow carousel-arrow-right" onClick={goNext} aria-label="Próxima foto">
            →
          </button>
        </div>

        <div className="carousel-dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={`carousel-dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CARE ─── */
function CareSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="care-section" style={{ position: "relative", overflow: "hidden" }}>
      <DecorLayer>
        <span className="ring-peach" style={{ width: 160, height: 160, bottom: "-40px", right: "-60px" }} />
        <span className="ring-navy" style={{ width: 70, height: 70, top: "30%", right: "2%" }} />
        <span className="dash-deco" style={{ top: "15%", left: "5%" }} />
        <span className="dash-deco" style={{ bottom: "25%", right: "8%", transform: "rotate(90deg)" }} />
      </DecorLayer>

     <SectionHeader
  badge="EXPERIENCIA INTERATIVA"
  title="Cuidado em todosos momentos."
/>
      <div className="care-layout">
        <div className="care-tabs">
          {rooms.map((r, i) => (
            <button key={i} className={`care-tab ${i === active ? "active" : ""}`} onClick={() => setActive(i)}>
              <span className="tab-num">{r.id}</span>
              <div>
                <strong>{r.label}</strong>
                <p>{r.desc}</p>
              </div>
            </button>
          ))}
        </div>
        <div className="care-images">
          <div className="care-compare-grid">
            <div className="care-compare-col">
              <div className="care-winch-label">Guincho EverRise</div>
              <img src={rooms[active].imgs[0]} alt={rooms[active].label} className="care-img fade-in" />
            </div>
            <div className="care-compare-col">
              <div className="care-winch-label">Guincho Generico</div>
              <img src={rooms[active].imgs[1]} alt={rooms[active].label} className="care-img fade-in" />
            </div>
          </div>
          <button className="btn-outline-small">Salte para explorar os ambientes</button>
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
function TestimonialsSection() {
  return (
    <section className="testimonials-section" style={{ position: "relative", overflow: "hidden" }}>
      <DecorLayer>
        <DotGrid style={{ top: "6%", left: "2%" }} count={42} cols={7} />
        <DotGrid style={{ bottom: "6%", right: "2%" }} count={42} cols={7} />
        <span className="ring-peach" style={{ width: 180, height: 180, top: "-50px", right: "-60px" }} />
        <span className="ring-navy" style={{ width: 80, height: 80, top: "-20px", right: "-20px" }} />
        <span className="ring-peach" style={{ width: 140, height: 140, bottom: "-40px", left: "-50px" }} />
      </DecorLayer>

<SectionHeader
  badge="Depoimentos"
  title="Ratificado por profissonais da área da saúde"
/>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <p className="testimonial-text">"{t.text}"</p>
            <div className="testimonial-author">
              <img src={t.img} alt={t.name} />
              <div>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


/* ─── PLANS ─── */
/* ─── PLANS ─── */
function PlansSection() {
  const navigate = useNavigate();

  const escolherPlano = (plano) => {
    navigate("/checkout", { state: { plano } });
  };

  return (
    <section className="plans-section" style={{ position: "relative", overflow: "hidden" }}>
      <DecorLayer>
        <span className="ring-navy" style={{ width: 56, height: 56, top: 0, left: "-30px" }} />
        <span className="ring-peach" style={{ width: 160, height: 160, bottom: "-40px", right: "-60px" }} />
        <DotGrid style={{ top: "6%", right: "4%" }} count={30} cols={6} />
        <DotGrid style={{ bottom: "10%", left: "5%" }} count={30} cols={6} />
        <span className="dash-deco" style={{ top: "20%", left: "5%" }} />
        <span className="dash-deco" style={{ bottom: "20%", right: "8%", transform: "rotate(90deg)" }} />
      </DecorLayer>

      <SectionHeader
        badge="PLANOS ACESSÍVEIS PARA TODAS AS NECESSIDADES"
        title="Escolha o plano ideal para você"
      />
      <div className="plans-grid">
        {plans.map((p, i) => (
          <div key={i} className={`plan-card ${p.highlight ? "highlight" : ""}`}>
            <span className="plan-ribbon">{p.label}</span>

            <div className="plan-name-row">
              <div>
                <div className="plan-name">{p.name}</div>
                {p.nameSuffix && <div className="plan-name-suffix">{p.nameSuffix}</div>}
              </div>
            </div>

            <div className="plan-invest-box">
              <span className="plan-invest-label">INVESTIMENTO</span>
              <div className="plan-price">{p.price}</div>
            </div>

            <ul className="plan-features">
              {p.features.map((f, j) => (
                <li key={j}>
                  <span className="feature-check">✓</span>
                  <span>
                    {f.text}
                    {f.sub && <span className="feature-sub"> ({f.sub})</span>}
                  </span>
                </li>
              ))}
            </ul>

            <button className="plan-btn" onClick={() => escolherPlano(p)}>
              {p.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
/* ─── FAQ ─── */
function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="faq-section" style={{ position: "relative", overflow: "hidden" }}>
      <DecorLayer>
        <span className="ring-peach" style={{ width: 120, height: 120, top: "-40px", left: "-50px" }} />
        <span className="ring-navy" style={{ width: 60, height: 60, top: "-15px", left: "-15px" }} />
        <DotGrid style={{ bottom: "8%", right: "2%" }} count={30} cols={6} />
        <span className="dash-deco" style={{ bottom: "20%", left: "6%" }} />
      </DecorLayer>

      <SectionHeader
        badge="Perguntas frequentes"
        title="Encontre respostas para perguntas frequentes sobre nossos serviços, preços e suporte para ajudá-lo a tomar decisões informadas com confiança"
      />
      <div className="faq-list">
        {faqs.map((item, i) => (
          <div key={i} className={`faq-item ${open === i ? "open" : ""}`} onClick={() => setOpen(open === i ? null : i)}>
            <div className="faq-q">
              <span>{item.q}</span>
              <span className="faq-icon">{open === i ? "−" : "+"}</span>
            </div>
            {open === i && (
              <div className="faq-a">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}


/* ─── APP ─── */
export default function App() {
  const [pagina, setPagina] = useState("home");
  const [planoEscolhido, setPlanoEscolhido] = useState(null);

  const irParaCheckout = (plano) => {
    setPlanoEscolhido(plano);
    setPagina("checkout");
    window.scrollTo(0, 0);
  };

  if (pagina === "checkout") {
    return <Checkout plano={planoEscolhido} onVoltar={() => setPagina("home")} />;
  }

  return (
    <div className="app">
      <Header />
      <HeroSection />
      <ProjectedSection />
      <Winch3DSection />
      <CareSection />
      <TestimonialsSection />
      <PlansSection onEscolherPlano={irParaCheckout} />
      <FAQSection />
      {/* <FooterCTA /> */}
      <Footer />
    </div>
  );
}