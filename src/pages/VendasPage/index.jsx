import { useState, useEffect, useRef } from "react";
import "./styles.css";
import { Footer, Header } from "../../components";
import GuinchoCrianca from '../../assets/images/Vendas/FotoDaCriancaQuarto.svg';
import MulherGuincho from '../../assets/images/Vendas/Mulhernoquarto.svg';
import Praticidade from '../../assets/images/Vendas/Praticidade.svg';
import Guincho3d from '../../assets/images/Vendas/guincho3d.svg';
import EverriseSala from '../../assets/images/Vendas/EverriseSala.svg';
import GenericoSala from '../../assets/images/Vendas/GenericoSala.svg';
import EverriseCorredor from '../../assets/images/Vendas/EverriseCorredor.svg';
import GenericoCorredor from '../../assets/images/Vendas/GenericoCorredor.svg';
import EverriseQuarto from '../../assets/images/Vendas/EverriseQuarto.svg';
import GenericoQuarto from '../../assets/images/Vendas/GenericoQuarto.svg';

/* ─── IMAGES ─── */
const IMG = {
  hero: "https://images.unsplash.com/photo-1576765607924-3f7b8410a787?w=800&q=80",
  GuinchoCrianca,
  MulherGuincho,
  Praticidade,
  Guincho3d,
  EverriseSala,
  GenericoSala,
  EverriseCorredor,
  GenericoCorredor,
  EverriseQuarto,
  GenericoQuarto,
  banheiro1: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
  banheiro2: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&q=80",
  avatar1: "https://i.pravatar.cc/60?img=1",
  avatar2: "https://i.pravatar.cc/60?img=2",
  avatar3: "https://i.pravatar.cc/60?img=3",
  avatar4: "https://i.pravatar.cc/60?img=4",
  footer: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
};

/* ─── TESTIMONIALS ─── */
const testimonials = [
  { name: "Dr. Sarah Pinto", role: "Fisioterapeuta", text: "O Guincho EverRise transformou completamente a rotina dos nossos pacientes. A segurança e o conforto são incomparáveis.", img: IMG.avatar1 },
  { name: "Dr. André Faro", role: "Geriatra", text: "Recomendo fortemente para qualquer ambiente de cuidado. A facilidade de uso e a estabilidade são excepcionais.", img: IMG.avatar2 },
  { name: "Dr. Sarah Pinto", role: "Enfermeira Chefe", text: "A diferença no dia a dia dos cuidadores é enorme. Menos esforço físico e mais segurança para os pacientes.", img: IMG.avatar3 },
  { name: "Dr. André Faro", role: "Médico Intensivista", text: "Equipamento de alta qualidade. O modelo 3D interativo me ajudou a tomar a decisão de compra com confiança.", img: IMG.avatar4 },
];

/* ─── CARE ROOMS ─── */
const rooms = [
  { id: "01", label: "Sala", desc: "Transferências seguras da cadeira para a cama ou poltronas", imgs: [IMG.EverriseSala, IMG.GenericoSala] },
  { id: "02", label: "Corredor", desc: "Mobilidade prática entre ambientes sem esforço", imgs: [IMG.EverriseCorredor, IMG.GenericoCorredor] },
  { id: "03", label: "Quarto", desc: "Mais conforto e segurança na rotina de cuidados.", imgs: [IMG.EverriseQuarto, IMG.GenericoQuarto] },
  { id: "04", label: "Banheiro", desc: "Transferência com dignidade e máxima segurança", imgs: [IMG.banheiro1, IMG.banheiro2] },
];

/* ─── FAQ ─── */
const faqs = [
  "Que serviço a Ever Rise oferece?",
  "Que serviço a Ever Rise oferece?",
  "Que serviço a Ever Rise oferece?",
];

/* ─── PLANS ─── */
const plans = [
  { price: "$0/m", label: "Plano Gratuito", features: ["Acesso básico", "Suporte por email", "1 usuário"], cta: "Começar grátis", highlight: false },
  { price: "$14,99/m", label: "Plano Pro", features: ["Acesso completo", "Suporte prioritário", "5 usuários", "Relatórios avançados"], cta: "Assinar Pro", highlight: true },
  { price: "$29,99/m", label: "Plano Business", features: ["Tudo do Pro", "Suporte 24/7", "Usuários ilimitados", "API dedicada"], cta: "Assinar Business", highlight: false },
];

/* ─── SECTION HEADER ─── */
function SectionHeader({ badge, title, sub, squareStyle }) {
  return (
    <div className="section-header">
      <div className="badge-wrapper">
        <div className="partnersEyebrowSquare" style={squareStyle} />
        <div className="badge-pill">{badge}</div>
      </div>
      {title && <h2 className="section-title">{title}</h2>}
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  );
}

/* ─── HERO ─── */
function HeroSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

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

  const textOpacity = Math.max(0, 1 - progress / 0.3);

  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const initW = Math.min(500, vw * 0.5);
  const initH = initW * 0.6;

  const videoW = initW + (vw - initW) * progress;
  const videoH = initH + (vh - initH) * progress;
  const borderRadius = 24 * (1 - progress);
  const videoLeft = (vw - videoW) / 2;

  return (
    <section className="hero-section" ref={sectionRef}>
      <div className="hero-sticky">

        {/* Vídeo — atrás do texto (z-index baixo) */}
        <div
          style={{
            position: "absolute",
            width: videoW,
            height: videoH,
            top: "50%",
            left: videoLeft,
            transform: "translateY(-50%)",
            borderRadius,
            overflow: "hidden",
            zIndex: 1,
            willChange: "width, height, border-radius, left",
            alignItems:"center"
          }}
        >
          <video autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}>
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Texto centralizado — na frente do vídeo */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 clamp(20px, 5vw, 80px)",
            zIndex: 2,
            opacity: textOpacity,
            pointerEvents: textOpacity < 0.05 ? "none" : "auto",
            bottom:"300px"
          }}
        >
          <p className="hero-eyebrow">Mobilidade com segurança e dignidade</p>
          <p className="hero-desc">
            O guincho de transferência foi projetado para oferecer segurança, conforto, e praticidade na rotina de quem cuida e de quem é cuidado.
          </p>
        </div>

      </div>
      <div style={{ height: "150vh" }} />
    </section>
  );
}

/* ─── PROJECTED ─── */
function ProjectedSection() {
  const sectionRef = useRef(null);
  const [index, setIndex] = useState(0);

  const slides = [
    { title: "Movimento suave", desc: "Sistema de elevação preciso que reduz o cansaço físico do cuidador garantindo uma transição segura e confortável para o paciente, sem movimentos bruscos ou intensos.", img: IMG.GuinchoCrianca },
    { title: "Design Ergonômico", desc: "Pensado para se adaptar a diferentes ambientes e rotinas de cuidado, oferecendo flexibilidade e praticidade no dia a dia.", img: IMG.MulherGuincho },
    { title: "Tecnologia Avançada", desc: "Sensores inteligentes e controles intuitivos que garantem a máxima segurança durante todas as transferências.", img: IMG.Praticidade },
  ];

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrolled = -rect.top;
      const sectionH = el.offsetHeight;
      const newIndex = Math.min(slides.length - 1, Math.floor((scrolled / sectionH) * slides.length * 3));
      setIndex(Math.max(0, newIndex));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="projected-section" ref={sectionRef}>
      <div className="projected-sticky">
        <SectionHeader
          badge="TECNOLOGIA QUE TRANSFORMA"
          title="Projetado para o que realmente importa"
          squareStyle={{ left: "210px", transform: "translateX(0)" }}
        />
        <div className="projected-layout">
          <div className="projected-left">
            {slides.map((s, i) => (
              <div key={i} className={`projected-text-item ${i === index ? "active" : ""}`}>
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
                  className={`projected-img ${i === index ? "active" : ""}`}
                />
              ))}
            </div>
            <div className="projected-dots">
              {slides.map((_, i) => (
                <span key={i} className={`dot ${i === index ? "active" : ""}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: `${slides.length * 60}vh` }} />
    </section>
  );
}

/* ─── WINCH 3D ─── */
function Winch3DSection() {
  return (
    <section className="winch3d-section">
      <SectionHeader
        badge="COMEÇA DE TODOS OS ÂNGULOS"
        title="Guincho 3D"
        sub="Interaja com o modelo 3D e veja cada detalhe do guincho."
        squareStyle={{ left: "200px", transform: "translateX(0)" }}
      />
      <div className="winch3d-viewer">
        <img src={IMG.Guincho3d} alt="Guincho 3D" className="winch-img" />
        <div className="winch3d-controls">
          <div className="control-item"><span className="control-icon">↔</span><p>Arraste para rotacionar</p></div>
          <div className="control-item"><span className="control-icon">🖱</span><p>Passe o mouse para interagir</p></div>
          <div className="control-item"><span className="control-icon">⊕</span><p>Scroll para aproximar</p></div>
        </div>
      </div>
    </section>
  );
}

/* ─── CARE ─── */
function CareSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="care-section">
      <SectionHeader
        badge="EXPERIÊNCIA INTERATIVA"
        title="Cuidado em todos os momentos."
        sub="Navegue e descubra como o guincho se adapta a diferentes ambientes da casa, proporcionando transferências seguras e confortáveis."
        squareStyle={{ left: "500px", transform: "translateX(0)" }}
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
    <section className="testimonials-section">
      <SectionHeader
        badge="DEPOIMENTOS"
        title="Ratificado por profissionais da área da saúde"
        squareStyle={{ left: "680px", transform: "translateX(0)" }}
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
function PlansSection() {
  return (
    <section className="plans-section">
      <SectionHeader
        badge="PLANOS ACESSÍVEIS PARA TODAS AS NECESSIDADES"
        title="Escolha o plano ideal para você"
        squareStyle={{ left: "40px", transform: "translateX(0)" }}
      />
      <div className="plans-grid">
        {plans.map((p, i) => (
          <div key={i} className={`plan-card ${p.highlight ? "highlight" : ""}`}>
            <div className="plan-price">{p.price}</div>
            <div className="plan-label">{p.label}</div>
            <ul className="plan-features">
              {p.features.map((f, j) => <li key={j}>{f}</li>)}
            </ul>
            <button className={p.highlight ? "btn-primary" : "btn-outline"}>{p.cta}</button>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQSection() {
  const [open, setOpen] = useState(null);
  return (
    <section className="faq-section">
      <SectionHeader
        badge="PERGUNTAS FREQUENTES"
        title="Encontre respostas para perguntas frequentes sobre nossos serviços, preços e suporte"
        squareStyle={{ left: "100px", transform: "translateX(0)" }}
      />
      <div className="faq-list">
        {faqs.map((q, i) => (
          <div key={i} className={`faq-item ${open === i ? "open" : ""}`} onClick={() => setOpen(open === i ? null : i)}>
            <div className="faq-q">
              <span>{q}</span>
              <span className="faq-icon">{open === i ? "−" : "+"}</span>
            </div>
            {open === i && (
              <div className="faq-a">
                O Guincho EverRise oferece transferência segura, confortável e digna para pacientes com mobilidade reduzida, adaptando-se a diferentes ambientes do lar e instituições de saúde.
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── FOOTER CTA ─── */
function FooterCTA() {
  return (
    <section className="footer-cta">
      <div className="footer-cta-content">
        <div className="footer-cta-text">
          <h2>O amor continua.<br />O esforço não precisa continuar</h2>
          <button className="btn-primary large">Conheça agora</button>
        </div>
        <img src={IMG.footer} alt="Cuidador" className="footer-cta-img" />
      </div>
    </section>
  );
}

/* ─── APP ─── */
export default function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <ProjectedSection />
      <Winch3DSection />
      <CareSection />
      <TestimonialsSection />
      <PlansSection />
      <FAQSection />
      <FooterCTA />
      <Footer />
    </div>
  );
}