import { useEffect, useRef, useState } from "react";
import "./Scrollline.css";
import iconeMao from '../../assets/images/Parceirosimg/iconeMao.svg'
import iconeClip from '../../assets/images/Parceirosimg/iconeClip.svg'
import iconeFoguete from '../../assets/images/Parceirosimg/iconeFoguete.svg'

/* ─── DOT GRID (importado do padrão visual da tela de Vendas) ─── */
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

/* ─── DECOR LAYER (importado do padrão visual da tela de Vendas) ─── */
function DecorLayer({ children }) {
  return (
    <div className="decor-layer" aria-hidden="true">
      {children}
    </div>
  );
}

export default function ScrollLine() {
  const pathRef = useRef(null);
  const containerRef = useRef(null);
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const checkSize = () => {
      const w = window.innerWidth;
      if (w <= 480)       setScreenSize("small-mobile");
      else if (w <= 768)  setScreenSize("mobile");
      else if (w <= 1024) setScreenSize("tablet");
      else                setScreenSize("desktop");
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const totalLength = path.getTotalLength();
    path.style.strokeDasharray = totalLength;
    path.style.strokeDashoffset = totalLength;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = windowHeight * 0.7;
      const end = -rect.height * 0.8;
      const raw = (start - rect.top) / (start - end);
      const clamped = Math.min(1, Math.max(0, raw));
      path.style.strokeDashoffset = totalLength * (1 - clamped);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [screenSize]);

  // ── Desktop: original, sem tocar ──
  const desktopPath = `
    M 0 200
    C 250 200, 500 200, 750 300
    C 1000 400, 1000 600, 750 700
    C 500 800, 250 800, 250 950
    C 250 1100, 500 1100, 750 1100
    C 1000 1100, 1000 1300, 750 1400
    C 500 1500, 250 1500, 0 1600
  `;

  // ── Tablet: mesmo estilo S do desktop, proporcional a 1000x1200 ──
  const tabletPath = `
    M 0 150
    C 220 150, 500 150, 750 260
    C 1000 370, 1000 530, 750 620
    C 500 710, 250 710, 250 820
    C 250 930, 500 930, 750 930
    C 1000 930, 1000 1060, 750 1140
    C 500 1220, 250 1220, 0 1300
  `;

  // ── Mobile ──
  const mobilePath = `
    M 200 80
    C 350 80, 400 180, 380 280
    C 360 380, 100 400, 80 520
    C 60 640, 300 660, 340 780
    C 380 900, 100 920, 80 1020
    C 60 1100, 250 1100, 320 1200
    C 360 1260, 200 1320, 180 1380
  `;

  // ── Small Mobile ──
  const smallMobilePath = `
    M 200 60
    C 340 60, 390 160, 370 250
    C 350 340, 80 360, 60 460
    C 40 560, 300 580, 340 680
    C 370 760, 80 800, 60 880
    C 40 960, 260 980, 320 1060
    C 360 1120, 200 1160, 180 1190
  `;

  const config = {
    desktop:        { viewBox: "0 0 1000 1800", path: desktopPath,      strokeWidth: "18" },
    tablet:         { viewBox: "0 0 1000 1400", path: tabletPath,       strokeWidth: "16" },
    mobile:         { viewBox: "0 0 400 1400",  path: mobilePath,       strokeWidth: "14" },
    "small-mobile": { viewBox: "0 0 400 1200",  path: smallMobilePath,  strokeWidth: "14" },
  };

  const { viewBox, path: activePath, strokeWidth } = config[screenSize];

  const isDesktop = screenSize === "desktop";
  const isTablet  = screenSize === "tablet";
  const isMobile  = screenSize === "mobile" || screenSize === "small-mobile";

  return (
    <div className="page-wrapper">

      <section className="hero-section">
        {/* ── Decoração do hero (padrão Vendas) ── */}
        <DecorLayer>
          <span className="ring-peach" style={{ width: 180, height: 180, top: "-15%", left: "-70px" }} />
          <span className="ring-navy" style={{ width: 90, height: 90, top: "-5%", left: "-10px" }} />
          <span className="ring-peach" style={{ width: 130, height: 130, bottom: "-10%", right: "-50px" }} />
          <span className="dash-deco" style={{ top: "18%", right: "8%" }} />
          <span className="dash-deco" style={{ bottom: "15%", left: "10%", transform: "rotate(90deg)" }} />
        </DecorLayer>

        <div className="badge-wrapper">
          <div className="partnersEyebrowSquare" />
          <div className="badge-pill">BENEFÍCIOS DE SER PARCEIRO</div>
        </div>

        <p className="hero-sub">Mais benefício para você e <br /> mais impacto para todos</p>
      </section>

      <section className="line-section" ref={containerRef}>

        {/* ── Decoração da linha (padrão Vendas, adaptada por breakpoint) ── */}
        <DecorLayer>
          {isDesktop && (
            <>
 <span className="ring-peach" style={{ width: 220, height: 220, top: "28%", left: "260px" }} />
    <span className="ring-navy" style={{ width: 100, height: 100, top: "8%", right: "40px" }} />

    {/* NOVO: par de anéis à direita, igual ao combo do topo esquerdo */}
    <span className="ring-peach" style={{ width: 180, height: 180, top: "2%", right: "10px" }} />

    <span className="ring-peach" style={{ width: 200, height: 200, top: "68%", right: "-50px" }} />
    <DotGrid style={{ bottom: "880px", left: "18px" }} count={30} cols={6} />
    <DotGrid style={{ bottom: "110px", left: "402px" }} count={30} cols={6} />
    <DotGrid style={{ bottom: "1050px", right: "18px" }} count={30} cols={6} />
    <span className="dash-deco" style={{ top: "15%", left: "5%" }} />
    <span className="dash-deco" style={{ bottom: "25%", right: "8%", transform: "rotate(90deg)" }} />
  </>
            
          )}

          {isTablet && (
            <>
              <span className="ring-peach" style={{ width: 200, height: 200, top: "26%", left: "180px" }} />
              <span className="ring-navy" style={{ width: 80, height: 80, top: "6%", right: "20px" }} />
              <span className="ring-peach" style={{ width: 160, height: 160, top: "66%", right: "-30px" }} />
              <DotGrid style={{ bottom: "700px", right: "18px" }} count={20} cols={5} />
              <span className="dash-deco" style={{ top: "18%", left: "5%" }} />
            </>
          )}

          {isMobile && (
            <>
              <span className="ring-peach" style={{ width: 140, height: 140, top: "10px", right: "-40px" }} />
              <span className="ring-peach" style={{ width: 120, height: 120, top: "50%", left: "-40px" }} />
              <DotGrid style={{ bottom: "60px", right: "10px" }} count={12} cols={4} />
              <span className="dash-deco" style={{ bottom: "20%", left: "6%" }} />
            </>
          )}
        </DecorLayer>

        {/* ── Cards: conteúdo mantido ── */}
        <div className="card card--left card--1">
          <div className="card-icon"><img src={iconeMao} alt="" /></div>
          <h3>Parcerias estratégicas</h3>
          <p>Acesse uma rede qualificada de empresas e profissionais alinhados com o propósito de cuidar, ampliando sua presença no mercado.</p>
        </div>

        <div className="card card--right card--2">
          <div className="card-icon"><img src={iconeClip} alt="" /></div>
          <h3>Integração</h3>
          <p>Conecte seus sistemas e processos à plataforma EverRise de forma simples, garantindo fluidez operacional e experiência unificada.</p>
        </div>

        <div className="card card--left card--3">
          <div className="card-icon"><img src={iconeFoguete} alt="" /></div>
          <h3>Crescimento conjunto</h3>
          <p>Compartilhamos resultados, aprendizados e oportunidades para que cada parceiro cresça de forma sustentável e com impacto real.</p>
        </div>

        <svg
          className="scroll-line-svg"
          viewBox={viewBox}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1800" gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stopColor="#4D00B5" />
              <stop offset="68%"  stopColor="#FEB42D" />
              <stop offset="100%" stopColor="#c9860b" />
            </linearGradient>
          </defs>

          <path
            ref={pathRef}
            className="animated-path"
            d={activePath}
            fill="none"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="url(#lineGrad)"
          />
        </svg>
      </section>

    </div>
  );
}