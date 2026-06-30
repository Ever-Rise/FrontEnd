import { useState, useEffect, useRef } from "react";
import {
  FiActivity,
  FiBatteryCharging,
  FiWifi,
  FiShield,
  FiArrowRight,
  FiPauseCircle,
  FiAlertTriangle,
  FiAlertOctagon,
  FiCheckCircle,
  FiBatteryCharging as FiCharge,
  FiDroplet,
  FiArchive,
  FiPhone,
  FiMail,
  FiSend,
  FiMessageCircle
} from "react-icons/fi";
import { Footer, Header } from "../../components";

import "./styles.css";

/* ============================================================
   Decorações de fundo (anéis, dots, dash) — apenas visual
   ============================================================ */

const DotGrid = ({ style, count = 30, cols = 6 }) => (
  <span
    className="dot-grid"
    style={{ ...style, gridTemplateColumns: `repeat(${cols}, 1fr)` }}
  >
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} />
    ))}
  </span>
);

function DecorLayer({ children }) {
  return (
    <div className="decor-layer" aria-hidden="true">
      {children}
    </div>
  );
}

/* ============================================================
   Partículas do hero (canvas, cores do Manual: roxo/laranja)
   ============================================================ */

function HeroParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let W, H, particles, rafId;
    const COUNT = 50;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };

    const makeP = () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2.5 + 0.8,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.5 + 0.2,
      isAccent: Math.random() > 0.5
    });

    const init = () => {
      resize();
      particles = Array.from({ length: COUNT }, makeP);
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(4,16,98,${0.06 * (1 - d / 120)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.isAccent
          ? `rgba(253,116,44,${p.alpha})`
          : `rgba(77,0,181,${p.alpha})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10;
        if (p.y > H + 10) p.y = -10;
      });

      rafId = requestAnimationFrame(draw);
    };

    init();
    draw();

    const onResize = () => resize();
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-particles" />;
}

/* ============================================================
   Cursor glow sutil (segue o mouse)
   ============================================================ */

function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isCoarse || prefersReduced) return;

    const el = glowRef.current;
    if (!el) return;

    let rafId;
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    function loop() {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      el.style.left = currentX + "px";
      el.style.top = currentY + "px";
      rafId = requestAnimationFrame(loop);
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    rafId = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" />;
}

const funcionalidades = [
  {
    icon: <FiActivity />,
    titulo: "Monitoramento inteligente",
    descricao: "Acompanhe dados em tempo real e comportamento operacional."
  },
  {
    icon: <FiBatteryCharging />,
    titulo: "Gestão de energia",
    descricao: "Controle automático para melhor autonomia."
  },
  {
    icon: <FiWifi />,
    titulo: "Conectividade contínua",
    descricao: "Sincronização estável para acompanhamento remoto."
  },
  {
    icon: <FiShield />,
    titulo: "Segurança avançada",
    descricao: "Proteção operacional e alertas inteligentes."
  }
];

const statusSeguranca = [
  {
    code: "042",
    icon: <FiPauseCircle />,
    titulo: "SAFETY_HOLD",
    resumo: "Equipamento pausado por segurança",
    tone: "neutral",
    procedimento: "Verificar sensores de obstrução lateral antes de retomar a operação."
  },
  {
    code: "911",
    icon: <FiAlertOctagon />,
    titulo: "EMERGÊNCIA",
    resumo: "Parada imediata acionada",
    tone: "danger",
    procedimento: "Liberar o botão de emergência rotacional para reiniciar o sistema."
  },
  {
    code: "088",
    icon: <FiAlertTriangle />,
    titulo: "SOBRECARGA",
    resumo: "Peso acima do limite detectado",
    tone: "warning",
    procedimento: "Reduzir a carga para menos de 250kg e aguardar reset automático."
  },
  {
    code: "001",
    icon: <FiCheckCircle />,
    titulo: "OPERACIONAL",
    resumo: "Sistema pronto para uso",
    tone: "success",
    procedimento: "Nenhuma ação necessária. Continuar operação normal."
  }
];

const manutencao = [
  {
    icon: <FiCharge />,
    titulo: "Carregamento",
    texto: "Carregar por 4h após cada turno. Ciclo de bateria Li-Ion otimizado.",
    progresso: 70,
    cta: "Ver protocolo de energia"
  },
  {
    icon: <FiDroplet />,
    titulo: "Limpeza",
    texto: "Utilizar apenas álcool isopropílico 70%. Evite contato direto com o painel.",
    progresso: 45,
    cta: "Guia de esterilização"
  },
  {
    icon: <FiArchive />,
    titulo: "Armazenamento",
    texto: "Manter em local seco entre 15°C e 30°C. Travar rodas ao guardar.",
    progresso: 90,
    cta: "Condições ideais"
  }
];

function useInView() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function FadeUp({ children, delay = 0, className = "", variant = "up" }) {
  const [ref, visible] = useInView();
  const variantClass =
    variant === "left" ? "reveal-left" :
    variant === "right" ? "reveal-right" :
    variant === "scale" ? "reveal-scale" : "fade-up";

  return (
    <div
      ref={ref}
      className={`${variantClass} ${className} ${visible ? (variant === "up" ? "visible" : "reveal-visible") : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function ManualEverRise() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [panelRef, panelVisible] = useInView();
  const [securityRef, securityVisible] = useInView();
  const [maintenanceRef, maintenanceVisible] = useInView();
  const [activeStatus, setActiveStatus] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const selected = statusSeguranca[activeStatus];

  return (
    <>
      <CursorGlow />
      <Header />
      <div className="manual">

        {/* ===== HERO ===== */}
        <section className="hero">
          <div className="hero-bg" />

          <DecorLayer>
            <span className="ring ring-accent" style={{ width: 200, height: 200, top: "6%", left: "-80px" }} />
            <span className="ring ring-primary" style={{ width: 90, height: 90, top: "4%", left: "-20px" }} />
            <span className="ring ring-accent" style={{ width: 140, height: 140, bottom: "10%", right: "-60px" }} />
            <DotGrid style={{ top: "12%", right: "4%" }} count={42} cols={7} />
            <DotGrid style={{ bottom: "14%", left: "3%" }} count={30} cols={6} />
            <span className="dash" style={{ top: "44%", left: "5%" }} />
            <span className="dash" style={{ bottom: "30%", right: "8%", transform: "rotate(90deg)" }} />
          </DecorLayer>

          <div className={`container hero-content ${heroVisible ? "show" : ""}`}>
            <h1>
              Controle total do seu equipamento
              <span> sem complicação</span>
            </h1>
            <p>
              Tudo que você precisa para monitorar, operar e gerenciar
              recursos com precisão.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">
                Abrir suporte <FiArrowRight />
              </button>
              <button className="btn-secondary">Explorar recursos</button>
            </div>
          </div>
          <div className="hero-scroll-cue">
            <span>Veja o painel</span>
            <div className="scroll-line" />
          </div>
        </section>

      {/* ===== PAINEL ===== */}
      <section className="panel" ref={panelRef}>
        <DecorLayer>
          <DotGrid style={{ top: "8%", left: "2%" }} count={30} cols={6} />
          <span className="dash" style={{ bottom: "18%", right: "6%" }} />
        </DecorLayer>
        <div className={`container panel-grid ${panelVisible ? "show" : ""}`}>
          <div className="panel-text">
            <span className="eyebrow">PAINEL DE CONTROLE</span>
            <h2>Tudo sob seu comando, em uma só tela</h2>
            <p>
              Acompanhe status, energia, conectividade e monitoramento do seu
              equipamento em tempo real, direto do manual.
            </p>
          </div>
          <div className="dashboard">
            <div className="dashboard-main">
              <span>Status atual</span>
              <h2>Operacional</h2>
              <div className="status">
                <div className="dot" />
                Sistema ativo
              </div>
            </div>
            <div className="dashboard-row">
              <div className="dashboard-small">
                <span>Bateria</span>
                <h3>87%</h3>
              </div>
              <div className="dashboard-small">
                <span>Monitoramento</span>
                <h3>24/7</h3>
              </div>
              <div className="dashboard-small">
                <span>Conexão</span>
                <h3>Online</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES 2x2 ===== */}
      <section className="features">
        <DecorLayer>
          <span className="ring ring-accent" style={{ width: 160, height: 160, top: "-40px", right: "-60px" }} />
          <DotGrid style={{ bottom: "10%", left: "3%" }} count={30} cols={6} />
        </DecorLayer>
        <div className="container">
          <div className="section-title">
            <span>RECURSOS</span>
            <h2>Funcionalidades do sistema</h2>
          </div>
          <div className="features-grid">
            {funcionalidades.map((item, index) => (
              <FadeUp key={index} delay={index * 100}>
                <div className="feature-card">
                  <div className="feature-icon">{item.icon}</div>
                  <h3>{item.titulo}</h3>
                  <p>{item.descricao}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SEGURANÇA ===== */}
      <section className="security" ref={securityRef}>
        <DecorLayer>
          <DotGrid style={{ top: "6%", right: "3%" }} count={30} cols={6} />
          <span className="dash" style={{ top: "20%", left: "4%" }} />
        </DecorLayer>
        <div className={`container security-wrap ${securityVisible ? "show" : ""}`}>
          <div className="section-title section-title-left">
            <span>SEGURANÇA</span>
            <h2>Monitoramento de segurança</h2>
          </div>

          {/* Fileira de status clicáveis */}
          <div className="sec-tabs">
            {statusSeguranca.map((item, index) => (
              <button
                key={item.code}
                className={`sec-tab tone-${item.tone} ${activeStatus === index ? "active" : ""}`}
                onClick={() => setActiveStatus(index)}
              >
                <span className="sec-tab-icon">{item.icon}</span>
                <span className="sec-tab-label">
                  <strong>{item.titulo}</strong>
                  <small>CODE {item.code}</small>
                </span>
              </button>
            ))}
          </div>

          {/* Painel de detalhe */}
          <div className={`sec-detail tone-${selected.tone}`}>
            <div className="sec-detail-left">
              <span className="sec-detail-code">CODE: {selected.code}</span>
              <h3>{selected.titulo}</h3>
              <p>{selected.resumo}</p>
            </div>
            <div className="sec-detail-right">
              <div className="sec-detail-icon">{selected.icon}</div>
              <div className="sec-detail-proc">
                <span>Procedimento</span>
                <p>{selected.procedimento}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MANUTENÇÃO ===== */}
      <section className="maintenance" ref={maintenanceRef}>
        <DecorLayer>
          <span className="ring ring-primary" style={{ width: 110, height: 110, bottom: "-30px", left: "-40px" }} />
          <DotGrid style={{ top: "8%", right: "4%" }} count={30} cols={6} />
        </DecorLayer>
        <div className={`container ${maintenanceVisible ? "show" : ""}`}>
          <div className="section-title section-title-left">
            <span>CUIDADOS</span>
            <h2>Ciclo de manutenção</h2>
          </div>
          <div className="maintenance-grid">
            {manutencao.map((item, index) => (
              <FadeUp key={item.titulo} delay={index * 120}>
                <div className="maintenance-card">
                  <div className="maintenance-icon">{item.icon}</div>
                  <h3>{item.titulo}</h3>
                  <p>{item.texto}</p>
                  <div className="maintenance-bar">
                    <div className="maintenance-bar-fill" style={{ width: `${item.progresso}%` }} />
                  </div>
                  <button className="maintenance-cta">{item.cta}</button>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SUPORTE ===== */}
      <section className="support">
        <div className="container">
          <div className="support-card">
            <div className="support-text">
              <h2>Ainda precisa de ajuda especializada?</h2>
              <p>
                Nossa equipe de engenharia e o assistente Fin estão disponíveis
                24/7 para garantir que sua operação nunca pare.
              </p>
              <div className="support-contacts">
                <div className="support-contact">
                  <span className="support-contact-icon"><FiPhone /></span>
                  <div>
                    <small>TELEFONE</small>
                    <strong>0800 555 2000</strong>
                  </div>
                </div>
                <div className="support-contact">
                  <span className="support-contact-icon"><FiMail /></span>
                  <div>
                    <small>E-MAIL</small>
                    <strong>suporte@everrise.med</strong>
                  </div>
                </div>
              </div>
              <button className="btn-support">
                <FiMessageCircle />
                Falar com Fin agora
              </button>
            </div>

            <div className="support-chat">
              <div className="support-chat-header">
                <span className="support-chat-avatar"><FiMessageCircle /></span>
                <div>
                  <strong>Fin</strong>
                  <small>Online agora</small>
                </div>
              </div>
              <div className="support-chat-body">
                <div className="bubble bubble-bot">
                  Olá! Identifiquei que você está revisando o Guia de Segurança.
                  Deseja que eu explique o código 042?
                </div>
                <div className="bubble bubble-user">
                  Sim, por favor. O que significa exatamente?
                </div>
                <div className="bubble bubble-bot bubble-typing">
                  <span /><span /><span />
                </div>
              </div>
              <div className="support-chat-input">
                <input type="text" placeholder="Escreva sua dúvida..." disabled />
                <button><FiSend /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>
      <Footer />
    </>
  );
}