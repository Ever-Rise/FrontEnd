import { useState, useEffect, useRef } from "react";
import "./styles.css";
import React from "react";
import styles from "./styles.module.css";
import Header from "../../components/layout/Header";
import heroBg from "../../assets/images/ManualPage/heroBackground.jpg";

const componentes = [
  {
    icon: "🔄",
    titulo: "Eixo de rotação prateado e preto",
    descricao:
      "Permite rotação precisa do mastro e braço de elevação, garantindo reposicionamento seguro do paciente em diferentes ângulos.",
    tag: "Estrutura principal",
  },
  {
    icon: "🖥",
    titulo: "Unidade de controle BP-8 135",
    descricao:
      "Painel compacto com botões de ação e conexão integrada — gerencia todas as funções do equipamento com precisão.",
    tag: "Controle e conectividade",
  },
  {
    icon: "🔋",
    titulo: "Bateria extra de 3800 mAh",
    descricao:
      "Mastro vertical com bateria recarregável integrada e slot de extensão para operações de longa duração sem interrupção.",
    tag: "Autonomia energética",
  },
  {
    icon: "🤝",
    titulo: "Alça de fixação do sling reforçada",
    descricao:
      "Sistema de encaixe com trava dupla de segurança, distribuindo carga uniformemente para o conforto e proteção do paciente.",
    tag: "Segurança do paciente",
  },
  {
    icon: "📡",
    titulo: "Roteador Wi-Fi integrado",
    descricao:
      "Conexão de dados estável para monitoramento remoto 24/7, transmissão de dados biométricos e atualizações de firmware.",
    tag: "Conectividade",
  },
];

const funcionalidades = [
  {
    icon: "🤖",
    titulo: "Controle automático",
    descricao: "Algoritmos preditivos para movimentação suave sem intervenção manual constante.",
  },
  {
    icon: "⚖️",
    titulo: "Ajuste de força",
    descricao: "Distribuição inteligente de torque baseada na massa e centro de gravidade do paciente.",
  },
  {
    icon: "📱",
    titulo: "Painel digital",
    descricao: "Interface OLED de alta definição com dados biométricos em tempo real.",
  },
  {
    icon: "🛡",
    titulo: "Monitoramento",
    descricao: "Vigilância contínua 24/7 com alerta direto à central de enfermagem.",
  },
  {
    icon: "📻",
    titulo: "Sensores IR",
    descricao: "Detecção de obstáculos e proximidade com precisão milimétrica infravermelha.",
  },
];

const alertas = [
  {
    tipo: "s",
    label: "SAFETY_HOLD",
    code: "CODE 042",
    titulo: "Equipamento pausado por segurança",
    descricao: "Verificar sensores de obstrução lateral antes de retomar a operação.",
  },
  {
    tipo: "e",
    label: "EMERGÊNCIA",
    code: "CODE 911",
    titulo: "Parada imediata acionada",
    descricao: "Liberar botão de emergência rotacional para reestabelecer operação.",
  },
  {
    tipo: "o",
    label: "SOBRECARGA",
    code: "CODE 088",
    titulo: "Peso acima do limite detectado",
    descricao: "Reduzir carga para menos de 250 kg antes de continuar.",
  },
  {
    tipo: "op",
    label: "OPERACIONAL",
    code: "CODE 001",
    titulo: "Sistema pronto para uso",
    descricao: "Todos os sistemas verificados. Continuar operação normalmente.",
  },
];

const manutencao = [
  {
    icon: "🔋",
    titulo: "Carregamento",
    descricao: "Carregar por 4h após cada turno. Ciclo de bateria Li-ion otimizado.",
    btn: "Ver protocolo de energia",
  },
  {
    icon: "💧",
    titulo: "Limpeza",
    descricao: "Usar apenas álcool isopropílico 70%. Evitar contato direto com o painel.",
    btn: "Guia de esterilização",
  },
  {
    icon: "📦",
    titulo: "Armazenamento",
    descricao: "Manter em local seco entre 15°C e 30°C. Travar rodas ao guardar.",
    btn: "Condições ideais",
  },
];

const faqs = [
  {
    pergunta: "Quanto tempo dura a bateria em uso contínuo?",
    resposta:
      "A bateria principal oferece até 8 horas de uso contínuo. Com a bateria extra de 3800 mAh acoplada, a autonomia pode chegar a 12 horas. Recomenda-se sempre carregar ao término de cada turno.",
  },
  {
    pergunta: "O que fazer em caso de queda de energia durante o uso?",
    resposta:
      "O sistema possui bateria de emergência integrada que mantém o equipamento operacional por até 20 minutos adicionais. Durante esse período, abaixe o paciente com segurança e transfira para superfície estável.",
  },
  {
    pergunta: "Como calibrar os sensores de peso?",
    resposta:
      'Acesse Configurações → Calibração no painel BP-8 135. Retire qualquer carga do sling, pressione "Calibrar Zero" e aguarde 10 segundos. Repita com peso de referência de 50 kg para calibração completa.',
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

<<<<<<< HEAD
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
=======
            {/* HERO */}
            <section className={styles.hero}>
                <div className={styles.heroText}>
                    <h1 className={styles.heroTitle}>
                        O futuro da mobilidade assistida
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Tecnologia, engenharia e inovação integradas em um
                        guincho inteligente criado para transformar mobilidade e
                        cuidado.
                    </p>
                    <div className={styles.heroButtons}>
                        <button className={styles.btnPrimary}>
                            Quero ser parceiro
                        </button>
                        <button className={styles.btnSecondary}>
                            Fale com a gente
                        </button>
                    </div>
                </div>
            </section>

            {/* POR QUE A EVER RISE? */}
            <section id="why" className={styles.whySection}>
                <div className={styles.pillWrap}>
                    <span className={styles.pill}>
                        <span className={styles.pillDot} />
                        Porque conhecer a Ever Rise?
                    </span>
                </div>
                <h2 className={styles.sectionTitle}>
                    Tecnologia que transforma mobilidade em autonomia.
                </h2>
                <div className={styles.cardsRow}>
                    {features.map((f) => (
                        <div key={f.title} className={styles.featureCard}>
                            <span className={styles.featureIcon}>{f.icon}</span>
                            <div className={styles.featureTitle}>{f.title}</div>
                            <p className={styles.featureDesc}>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* COMPONENTES */}
            <section id="components" className={styles.componentsSection}>
                <div className={styles.pillWrap}>
                    <span className={styles.pill}>
                        <span className={styles.pillDot} />
                        Cada detalhe pensado com precisão
                    </span>
                </div>
                <p className={styles.componentsSubtitle}>
                    Explore os componentes internos e descubra como engenharia,
                    hardware e estrutura trabalham juntos
                </p>
                <div className={styles.techGrid}>
                    {techComponents.map((t) => (
                        <div key={t.title} className={styles.techCard}>
                            <span className={styles.techCardIcon}>
                                {t.icon}
                            </span>
                            <div className={styles.techCardTitle}>
                                {t.title}
                            </div>
                            <p className={styles.techCardDesc}>{t.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ESPECIFICAÇÕES */}
            <section id="specs" className={styles.specsSection}>
                <div className={styles.pillWrap}>
                    <span className={styles.pill}>
                        <span className={styles.pillDot} />
                        Especificações
                    </span>
                </div>
                <h2 className={styles.sectionTitle}>
                    Excelência em Engenharia para o Cuidado e Dignidade
                </h2>
                <div className={styles.specsGrid}>
                    {specs.map((s) => (
                        <div key={s.title} className={styles.specItem}>
                            <div className={styles.specIconCircle}>
                                {s.icon}
                            </div>
                            <div className={styles.specItemTitle}>
                                {s.title}
                            </div>
                            <ul className={styles.specList}>
                                {s.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* TECNOLOGIA QUE MOVE O FUTURO */}
            <section className={styles.techMoveSection}>
                <h2 className={styles.techMoveTitle}>
                    Tecnologia que move o <span>futuro</span>
                </h2>
                <p className={styles.techMoveSubtitle}>
                    Integração de hardware inteligente, inteligência artificial
                    e software avançado para entregar performance, segurança e
                    autonomia em cada movimento.
                </p>
                <div className={styles.techMoveGrid}>
                    {techMoves.slice(0, 3).map((t) => (
                        <div key={t.title} className={styles.techMoveCard}>
                            <span className={styles.techMoveCardIcon}>
                                {t.icon}
                            </span>
                            <div className={styles.techMoveCardTitle}>
                                {t.title}
                            </div>
                            <p className={styles.techMoveCardDesc}>{t.desc}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.techMoveGridBottom}>
                    {techMoves.slice(3).map((t) => (
                        <div key={t.title} className={styles.techMoveCard}>
                            <span className={styles.techMoveCardIcon}>
                                {t.icon}
                            </span>
                            <div className={styles.techMoveCardTitle}>
                                {t.title}
                            </div>
                            <p className={styles.techMoveCardDesc}>{t.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CONTATO */}
            <section id="contact" className={styles.contactSection}>
                <div className={styles.contactText}>
                    <h2 className={styles.contactTitle}>
                        Excelência que você sente,{" "}
                        <span>confiança que você vê</span>
                    </h2>
                    <p className={styles.contactSubtitle}>
                        EverRise movendo vidas com segurança, tecnologia e
                        propósito.
                    </p>
                    <div className={styles.contactLabel}>
                        Fale com a EverRise
                    </div>
                    <p className={styles.contactDesc}>
                        Estamos prontos para falar com você
                    </p>
                    <ul className={styles.contactInfoList}>
                        {contactInfo.map((c) => (
                            <li key={c.text}>
                                <span>{c.icon}</span>
                                <span>{c.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.contactImage}>
                    <div className={styles.contactVisual}>🏥</div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className={styles.footer}>
                © 2024 <strong>EverRise</strong>. Todos os direitos reservados.
                Mobilidade com dignidade.
            </footer>
        </>
>>>>>>> 5f2348656b67eeb1bf9adf21d15b99614b68e3aa
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

function AnimatedSection({ children, className = "", delay = 0 }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={`fade-up ${visible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionTitle({ children }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} className={`sec-title fade-up ${visible ? "visible" : ""}`}>
      <h2>{children}</h2>
      <div className="title-line" />
    </div>
  );
}

export default function ManualEverRise() {
  const [faqAberto, setFaqAberto] = useState(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="manual-wrap">
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-decor">
          <div className="hero-ring ring-1" />
          <div className="hero-ring ring-2" />
          <div className="hero-dots" />
          <div className="hero-pill" />
        </div>
        <div className={`hero-content ${heroVisible ? "hero-in" : ""}`}>
          <h1 className="hero-title">
            Manual Inteligente <span className="brand">EverRise</span>
          </h1>
          <p className="hero-sub">
            Tudo o que você precisa para operar o sistema com máxima precisão e segurança
            no ambiente hospitalar de alta performance.
          </p>
          <div className="hero-btns">
            <button className="btn-amber">
              <span className="btn-icon">💬</span> Abrir chat com Fin
            </button>
            <button className="btn-dark">Explorar Recursos</button>
          </div>
        </div>
      </section>

      <div className="content-pad">
        {/* INÍCIO RÁPIDO */}
        <AnimatedSection className="quick-start">
          <div className="qs-left">
            <p className="qs-label">— Início Rápido</p>
            {[
              {
                n: 1,
                titulo: "Montar",
                desc: "Posicione a base articulada e certifique-se de que os braços extensores estejam travados.",
              },
              {
                n: 2,
                titulo: "Ligar",
                desc: "Pressione o botão principal por 3 segundos para iniciar o diagnóstico automático.",
              },
              {
                n: 3,
                titulo: "Conectar",
                desc: "Sincronize com a rede hospitalar para monitoramento remoto centralizado.",
              },
            ].map((s) => (
              <div className="qs-step" key={s.n}>
                <div className="step-num">{s.n}</div>
                <div>
                  <h4>{s.titulo}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="qs-right">
            <div className="qs-imgs-row">
              <div className="qs-img">🔧<span>Montagem</span></div>
              <div className="qs-img">🔌<span>Ativação</span></div>
            </div>
            <div className="qs-img qs-img-full">📶<span>Conexão à rede</span></div>
          </div>
        </AnimatedSection>

        {/* COMPONENTES */}
        <SectionTitle>Componentes Principais</SectionTitle>
        <div className="comps-list">
          {componentes.map((c, i) => (
            <AnimatedSection key={i} delay={i * 60}>
              <div className="comp-card">
                <div className="comp-icon">{c.icon}</div>
                <div className="comp-info">
                  <h4>{c.titulo}</h4>
                  <p>{c.descricao}</p>
                  <span className="comp-tag">{c.tag}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* FUNCIONALIDADES */}
        <SectionTitle>Funcionalidades de Elite</SectionTitle>
        <div className="feat-grid">
          {funcionalidades.map((f, i) => (
            <AnimatedSection key={i} delay={i * 70}>
              <div className="feat-card">
                <span className="feat-icon">{f.icon}</span>
                <h4>{f.titulo}</h4>
                <p>{f.descricao}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* ALERTAS */}
        <SectionTitle>Monitoramento de Segurança</SectionTitle>
        <div className="alerts-grid">
          {alertas.map((a, i) => (
            <AnimatedSection key={i} delay={i * 60}>
              <div className={`alert-card alert-${a.tipo}`}>
                <div className="alert-top">
                  <span className="alert-lbl">{a.label}</span>
                  <span className="alert-code">{a.code}</span>
                </div>
                <h4>{a.titulo}</h4>
                <p>{a.descricao}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* MANUTENÇÃO */}
        <SectionTitle>Ciclo de Manutenção</SectionTitle>
        <div className="maint-grid">
          {manutencao.map((m, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className="maint-card">
                <span className="maint-icon">{m.icon}</span>
                <h4>{m.titulo}</h4>
                <p>{m.descricao}</p>
                <button className="maint-btn">{m.btn}</button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* FAQ */}
        <SectionTitle>Perguntas Frequentes</SectionTitle>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <AnimatedSection key={i} delay={i * 60}>
              <div className={`faq-item ${faqAberto === i ? "open" : ""}`}>
                <button
                  className="faq-q"
                  onClick={() => setFaqAberto(faqAberto === i ? null : i)}
                  aria-expanded={faqAberto === i}
                >
                  <span>{f.pergunta}</span>
                  <span className="faq-chevron">{faqAberto === i ? "▲" : "▼"}</span>
                </button>
                <div className="faq-a">
                  <p>{f.resposta}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection>
          <div className="cta-banner">
            <div className="cta-bg-ring cta-ring-1" />
            <div className="cta-bg-ring cta-ring-2" />
            <h2>Ainda precisa de ajuda especializada?</h2>
            <p>
              Nossa equipe de engenharia e o assistente Fin estão disponíveis 24/7 para
              garantir que sua operação nunca pare.
            </p>
            <div className="cta-contacts">
              <div className="cta-contact">📞 0800 555 2000</div>
              <div className="cta-contact">✉️ suporte@everrise.med</div>
            </div>
            <button className="btn-amber cta-cta-btn">💬 Falar com Fin agora</button>
            <div className="enc-badge">🔒 AES Encryption Active</div>
          </div>
        </AnimatedSection>
      </div>

      <div className="bottom-space" />
    </div>
  );
}