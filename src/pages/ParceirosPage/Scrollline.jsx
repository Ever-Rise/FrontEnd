import { useEffect, useRef } from "react";
import "./ScrollLine.css";
import iconeMao from '../../assets/images/Parceirosimg/iconeMao.svg'
import iconeClip from '../../assets/images/Parceirosimg/iconeClip.svg'
import iconeFoguete from '../../assets/images/Parceirosimg/iconeFoguete.svg'

export default function ScrollLine() {
  const pathRef = useRef(null);
  const containerRef = useRef(null);

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
  }, []);

  return (
    <div className="page-wrapper">

      {/* Texto original do hero do Scrollline */}
    <section className="hero-section">
        <div className="eyebrow-wrapper">
            <div className="eyebrow-decor" />
            <div className="eyebrow-square" />
            <h1 className="hero-title">BENEFICIOS DE SER PARCEIRO</h1>
        </div>
        <p className="hero-sub">Mais benefício para você e <br /> mais impacto para todos</p>
    </section>

      <section className="line-section" ref={containerRef}>

        <div className="card card--left card--1">
          <div className="card-icon"> <img src={iconeMao} alt="" /></div>
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
          viewBox="0 0 1000 1800"
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
            d="
              M 0 200
              C 250 200, 500 200, 750 300
              C 1000 400, 1000 600, 750 700
              C 500 800, 250 800, 250 950
              C 250 1100, 500 1100, 750 1100
              C 1000 1100, 1000 1300, 750 1400
              C 500 1500, 250 1500, 0 1600
            "
            fill="none"
            strokeWidth="18"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="url(#lineGrad)"
          />
        </svg>
      </section>


    </div>
  );
}