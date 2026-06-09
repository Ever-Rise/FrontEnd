import React from "react";
import styles from "./styles.module.css";
import Header from "../../components/layout/Header";
import heroBg from "./heroBackground.jpg.png";

// ── data ────────────────────────────────────────────────────────
const features = [
    {
        icon: "🛡️",
        title: "Acessível",
        desc: "Construído com materiais acessíveis: PETG, EVA Foam, componentes de mercado. Pensado para famílias reais, não para hospitais de alto padrão.",
    },
    {
        icon: "🕹️",
        title: "Autônomo",
        desc: "Controlado remotamente via plataforma web. O paciente ou cuidador opera o guincho de qualquer lugar, sem depender de profissional presente.",
    },
    {
        icon: "🔒",
        title: "Seguro",
        desc: "Sensor FSR 402, trava mecânica e botão físico failsafe que funciona sem internet. Segurança que não depende de nenhuma conexão.",
    },
];

const techComponents = [
    {
        icon: "🖥️",
        title: "Raspberry Pi 4",
        desc: "Processamento potente e eficiente para máxima performance.",
    },
    {
        icon: "📡",
        title: "ESP32",
        desc: "Microcontrolador de alta performance para comunicação e controle inteligente.",
    },
    {
        icon: "🎯",
        title: "Sensor de Pressão FSR 402",
        desc: "Detecção precisa de pressão para segurança total nas transferências.",
    },
    {
        icon: "📷",
        title: "Câmera USB",
        desc: "Monitoramento em tempo real para mais controle e tranquilidade.",
    },
    {
        icon: "⚙️",
        title: "Motores e Sistema de Tração",
        desc: "Movimentos suaves, estáveis e seguros em qualquer situação.",
    },
    {
        icon: "🔋",
        title: "Fonte de Alimentação",
        desc: "Energia estável e confiável para operação contínua e segura.",
    },
];

const specs = [
    {
        icon: "🏗️",
        title: "Estrutura e Base",
        items: ["MDF (base e estrutura)", "Ferro (suporte e reforço)"],
    },
    {
        icon: "🎨",
        title: "Revestimento e Design",
        items: [
            "PETG (carcaça impressa 3D)",
            "EVA Foam (revestimento de proteção)",
        ],
    },
    {
        icon: "✅",
        title: "Sistema de Segurança",
        items: [
            "Cinto de Segurança de Alta Tenacidade",
            "Estabilidade Operacional",
        ],
    },
];

const techMoves = [
    {
        icon: "⟨⟩",
        title: "Algoritmo PID",
        desc: "Precisão e estabilidade para movimentos suaves e controle em tempo real.",
    },
    {
        icon: "🤖",
        title: "Módulos de IA Embarcados",
        desc: "Inteligência embarcada para decisões autônomas com alta performance.",
    },
    {
        icon: "🎤",
        title: "Reconhecimento de Voz",
        desc: "Interação natural e intuitiva através de comandos de voz inteligentes.",
    },
    {
        icon: "👁️",
        title: "Visão Computacional",
        desc: "Câmeras e IA trabalhando juntas para identificar obstáculos em tempo real.",
    },
    {
        icon: "🖥️",
        title: "Interface Web Responsiva",
        desc: "Acesse, monitore e controle de qualquer lugar com uma interface moderna e rápida.",
    },
];

const contactInfo = [
    { icon: "📞", text: "(11) 00000-0000" },
    { icon: "✉️", text: "everisepirororo@gmail.com" },
    { icon: "📷", text: "@EverRise" },
];

// ── component ────────────────────────────────────────────────────
export default function EverRise() {
    return (
        <>
            <div className={styles.content}>
                <Header />
            </div>

            {/* HERO */}
            <section
                className={styles.hero}
                style={{ backgroundImage: `url(${heroBg})` }}
            >
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
    );
}
