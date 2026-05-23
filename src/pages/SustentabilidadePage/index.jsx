import React from "react";
import styles from "./style.module.css";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

import heroImg from "../../assets/images/sustentabilidade/hero.png";
import impactoImg from "../../assets/images/sustentabilidade/secao-impacto.png";
import contatoImg from "../../assets/images/sustentabilidade/secao-contato.png";
import sparklesImg from "../../assets/images/sustentabilidade/fundosBrilhos.png";
import sparklesSoftImg from "../../assets/images/sustentabilidade/fundoBrilho2.png";
import sparklesAltImg from "../../assets/images/sustentabilidade/fundoBrilho3.png";

import iconSustentavel from "../../assets/icons/sustentabilidade/icon-sustentavel.png";
import iconInteligente from "../../assets/icons/sustentabilidade/icon-inteligente.png";
import iconPessoas from "../../assets/icons/sustentabilidade/icon-pessoas.png";
import iconTransparente from "../../assets/icons/sustentabilidade/icon-transparente.png";
import iconColetados from "../../assets/icons/sustentabilidade/icon-coletados.png";
import iconEmpresas from "../../assets/icons/sustentabilidade/icon-empresas.png";
import iconDestinacao from "../../assets/icons/sustentabilidade/icon-destinacao.png";
import iconSolicite from "../../assets/icons/sustentabilidade/icon-solicite.png";
import iconColeta from "../../assets/icons/sustentabilidade/icon-coleta.png";
import iconAnalise from "../../assets/icons/sustentabilidade/icon-analise.png";
import iconToken from "../../assets/icons/sustentabilidade/icon-token.png";

const impactCards = [
    {
        icon: iconSustentavel,
        title: "Sustentável",
        description:
            "Reduzimos resíduos e prolongamos o ciclo de vida de cada material.",
    },
    {
        icon: iconInteligente,
        title: "Inteligente",
        description:
            "Processos rastreáveis com tecnologia própria para escala e controle.",
    },
    {
        icon: iconPessoas,
        title: "Social",
        description:
            "Geramos renda, oportunidades e impacto direto nas comunidades.",
    },
    {
        icon: iconTransparente,
        title: "Transparente",
        description:
            "Cada etapa é auditável e acompanhada com indicadores claros.",
    },
];

const impactStats = [
    { icon: iconColetados, value: "12.250", label: "Toneladas coletadas" },
    { icon: iconEmpresas, value: "200", label: "Empresas parceiras" },
    { icon: iconPessoas, value: "14.000", label: "Pessoas impactadas" },
    { icon: iconDestinacao, value: "500", label: "Destinação correta" },
];

const processSteps = [
    {
        icon: iconSolicite,
        title: "Solicite",
        description: "Preencha o formulário com os dados do equipamento.",
    },
    {
        icon: iconColeta,
        title: "Coleta",
        description: "Agendamos a retirada no seu endereço sem custos.",
    },
    {
        icon: iconAnalise,
        title: "Análise",
        description: "A equipe avalia peças e define reuso ou reciclagem.",
    },
    {
        icon: iconToken,
        title: "Token",
        description: "Você recebe o retorno com token ou desconto por e-mail.",
    },
];

const highlights = [
    { value: "47kg", label: "desviados do descarte" },
    { value: "62kg", label: "reaproveitados com rastreio" },
    { value: "35%", label: "de aumento em recuperação" },
    { value: "3h", label: "para retorno inicial" },
];

const testimonials = [
    {
        name: "John D.",
        role: "Operações",
        text: "O fluxo ficou objetivo, o acompanhamento é claro e o time responde rápido em cada etapa.",
    },
    {
        name: "John B.",
        role: "Compras",
        text: "A proposta é visualmente forte e transmite a confiança que faltava para a nossa operação.",
    },
    {
        name: "John S.",
        role: "Logística",
        text: "Conseguimos centralizar solicitações, triagem e retorno sem quebrar a experiência do usuário.",
    },
    {
        name: "Aline R.",
        role: "Sustentabilidade",
        text: "O layout ajuda a comunicar impacto, métricas e jornada de forma consistente e elegante.",
    },
];

const infoRows = [
    { label: "Coleta", value: "Sem custo" },
    { label: "Triagem", value: "Diagnóstico técnico" },
    { label: "Token", value: "Até 15% OFF" },
];

const sectionBgStyle = (image) => ({
    ["--section-glow"]: `url(${image})`,
});

const Sustentabilidade = () => {
    return (
        <div className={styles.container}>
            <Header />

            <main className={styles.main}>
                <section
                    className={styles.hero}
                    style={{
                        backgroundImage: `linear-gradient(90deg, rgba(4, 10, 18, 0.92) 0%, rgba(4, 10, 18, 0.72) 40%, rgba(4, 10, 18, 0.18) 100%), url(${heroImg})`,
                    }}
                >
                    <div className={styles.shell}>
                        <div className={styles.heroGrid}>
                            <div className={styles.heroCopy}>
                                <span className={styles.heroEyebrow}>
                                    Logística reversa inteligente
                                </span>
                                <h1 className={styles.heroTitle}>
                                    Feito para cuidar de <span>pessoas</span> e
                                    do <span>planeta</span>
                                </h1>
                                <p className={styles.heroText}>
                                    Uma jornada visualmente impactante para
                                    transformar descarte em impacto mensurável,
                                    com transparência e tecnologia.
                                </p>

                                <div className={styles.heroActions}>
                                    <button className={styles.primaryAction} type="button">
                                        Quero participar
                                    </button>
                                    <button className={styles.secondaryAction} type="button">
                                        Saiba mais
                                    </button>
                                </div>
                            </div>

                            <div className={styles.heroBadge}>
                                <span>Impacto ao vivo</span>
                                <strong>Monitoramento + rastreio + retorno</strong>
                                <p>
                                    Uma composição escura, com brilho verde e
                                    azul, para destacar a operação sustentável.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="impacto"
                    className={styles.impactSection}
                    style={sectionBgStyle(sparklesImg)}
                >
                    <div className={styles.shell}>
                        <header className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>
                                Impacto que transforma
                            </h2>
                        </header>

                        <div className={styles.impactGrid}>
                            {impactCards.map((card) => (
                                <article key={card.title} className={styles.impactCard}>
                                    <img
                                        src={card.icon}
                                        alt={card.title}
                                        className={styles.cardIcon}
                                    />
                                    <h3>{card.title}</h3>
                                    <p>{card.description}</p>
                                </article>
                            ))}
                        </div>

                        <div className={styles.statsBar}>
                            {impactStats.map((stat) => (
                                <article key={stat.label} className={styles.statItem}>
                                    <img
                                        src={stat.icon}
                                        alt={stat.label}
                                        className={styles.statIcon}
                                    />
                                    <strong>{stat.value}</strong>
                                    <span>{stat.label}</span>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section
                    className={styles.processSection}
                    style={sectionBgStyle(sparklesSoftImg)}
                >
                    <div className={styles.shell}>
                        <header className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>Como funciona</h2>
                        </header>

                        <div className={styles.timeline}>
                            {processSteps.map((step, index) => (
                                <article
                                    key={step.title}
                                    className={`${styles.timelineItem} ${
                                        index % 2 === 0 ? styles.timelineLeft : styles.timelineRight
                                    }`}
                                >
                                    <div className={styles.timelineCard}>
                                        <div className={styles.timelineHead}>
                                            <span className={styles.timelineStepNumber}>
                                                0{index + 1}
                                            </span>
                                            <h3>{step.title}</h3>
                                        </div>
                                        <p>{step.description}</p>
                                    </div>

                                    <div className={styles.timelineIcon}>
                                        <img src={step.icon} alt={step.title} />
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section
                    className={styles.ctaSection}
                    style={{
                        backgroundImage: `linear-gradient(90deg, rgba(6, 12, 22, 0.94) 0%, rgba(6, 12, 22, 0.84) 48%, rgba(6, 12, 22, 0.2) 100%), url(${impactoImg})`,
                    }}
                >
                    <div className={styles.shell}>
                        <div className={styles.ctaContent}>
                            <span className={styles.ctaEyebrow}>Pronto para gerar impacto?</span>
                            <h2>Transforme descarte em retorno positivo.</h2>
                            <p>
                                Um bloco de conversão com contraste forte, texto
                                curto e visual de planeta para fechar a narrativa
                                da página.
                            </p>
                            <button className={styles.primaryAction} type="button">
                                Quero impactar agora
                            </button>
                        </div>
                    </div>
                </section>

                <section
                    className={styles.metricsSection}
                    style={sectionBgStyle(sparklesAltImg)}
                >
                    <div className={styles.shell}>
                        <header className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>
                                Cada troca conta. Os números provam.
                            </h2>
                            <p className={styles.sectionLead}>
                                A composição abaixo reforça a operação com
                                números, formulário e um resumo de benefícios em
                                um único bloco.
                            </p>
                        </header>

                        <div className={styles.metricsGrid}>
                            {highlights.map((metric) => (
                                <article key={metric.label} className={styles.metricCard}>
                                    <strong>{metric.value}</strong>
                                    <span>{metric.label}</span>
                                </article>
                            ))}
                        </div>

                        <div className={styles.formGrid}>
                            <form className={styles.formCard}>
                                <div className={styles.formHeader}>
                                    <span className={styles.formBadge}>Solicite logística reversa</span>
                                    <h3>Organize coleta e análise em poucos passos.</h3>
                                    <p>
                                        O formulário foi desenhado para ficar legível,
                                        compacto e responsivo em telas grandes e pequenas.
                                    </p>
                                </div>

                                <div className={styles.formFields}>
                                    <label>
                                        <span>Nome</span>
                                        <input type="text" placeholder="Seu nome" />
                                    </label>
                                    <label>
                                        <span>E-mail</span>
                                        <input type="email" placeholder="voce@exemplo.com" />
                                    </label>
                                    <label>
                                        <span>Cidade</span>
                                        <input type="text" placeholder="São Paulo" />
                                    </label>
                                    <label>
                                        <span>CEP</span>
                                        <input type="text" placeholder="00000-000" />
                                    </label>
                                    <label className={styles.formFullWidth}>
                                        <span>Detalhes do equipamento</span>
                                        <textarea placeholder="Descreva o estado do equipamento, volume e urgência" />
                                    </label>
                                </div>

                                <button type="submit" className={styles.primaryActionFull}>
                                    Solicitar coleta
                                </button>
                            </form>

                            <aside className={styles.offerCard}>
                                <div className={styles.offerGlow} />
                                <span className={styles.offerBadge}>Token de retorno</span>
                                <h3>Até 15% OFF no primeiro ciclo</h3>
                                <p>
                                    A análise técnica identifica reaproveitamento,
                                    reciclagem e o retorno ideal para o usuário.
                                </p>

                                <div className={styles.offerPrice}>
                                    <strong>R$ 25 - 79K</strong>
                                    <span>LM20</span>
                                </div>

                                <div className={styles.offerRows}>
                                    {infoRows.map((row) => (
                                        <div key={row.label}>
                                            <span>{row.label}</span>
                                            <strong>{row.value}</strong>
                                        </div>
                                    ))}
                                </div>

                                <div className={styles.offerList}>
                                    <div>
                                        <img src={iconSolicite} alt="Solicite" />
                                        <span>Solicitação recebida</span>
                                    </div>
                                    <div>
                                        <img src={iconColeta} alt="Coleta" />
                                        <span>Agenda de retirada</span>
                                    </div>
                                    <div>
                                        <img src={iconAnalise} alt="Análise" />
                                        <span>Triagem e diagnóstico</span>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>

                <section className={styles.testimonialSection}>
                    <div className={styles.shell}>
                        <header className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>Confiança em cada entrega</h2>
                        </header>

                        <div className={styles.testimonialGrid}>
                            {testimonials.map((testimonial) => (
                                <article key={testimonial.name} className={styles.testimonialCard}>
                                    <div className={styles.avatar}>{testimonial.name.charAt(0)}</div>
                                    <div>
                                        <strong>{testimonial.name}</strong>
                                        <span>{testimonial.role}</span>
                                    </div>
                                    <p>{testimonial.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section
                    className={styles.newsletterSection}
                    style={{
                        backgroundImage: `linear-gradient(90deg, rgba(9, 14, 25, 0.92) 0%, rgba(9, 14, 25, 0.72) 56%, rgba(9, 14, 25, 0.18) 100%), url(${contatoImg})`,
                    }}
                >
                    <div className={styles.shell}>
                        <div className={styles.newsletterCard}>
                            <div className={styles.newsletterContent}>
                                <span className={styles.ctaEyebrow}>Futuro melhor começa com escolhas conscientes.</span>
                                <h2>Receba novidades sobre logística reversa.</h2>
                                <p>
                                    Um bloco de fechamento com atmosfera suave,
                                    folhas à direita e uma chamada clara para
                                    inscrição.
                                </p>
                                <div className={styles.newsletterForm}>
                                    <input type="email" placeholder="Insira seu e-mail" />
                                    <button type="button" className={styles.primaryAction}>
                                        Inscrever-se
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Sustentabilidade;
