import { useState, useEffect, useRef } from "react";
import { Footer, Header } from "../../components";
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

import "./styles.css";

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

function FadeUp({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={`fade-up ${className} ${visible ? "visible" : ""}`}
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
    <div className="manual">

      <Header />

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-bg" />
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

      <Footer />

    </div>
  );
}