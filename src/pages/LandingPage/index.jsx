import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./styles.module.css";
import Header from "../../components/layout/Header";

const glassCards = [
    {
        rotation: -15,
        label: "A Origem",
        src: "WhatsApp Image 2026-06-05 at 17.18.43.jpeg",
        alt: "Rafa — fundador do EVERISE",
    },
    {
        rotation: 5,
        label: "A Plataforma",
        src: "WhatsApp Image 2026-06-05 at 17.18.43.jpeg",
        alt: "Dashboard EVERISE em uso",
    },
    {
        rotation: 25,
        label: "O Impacto",
        src: "WhatsApp Image 2026-06-05 at 17.18.43.jpeg",
        alt: "Operação EVERISE em campo",
    },
];

const steps = [
    {
        delay: 100,
        title: "Instalar",
        description:
            "Implementação ágil sem interrupção operacional em sua frota ativa.",
        icon: (
            <svg
                viewBox="0 0 24 24"
                width="28"
                height="28"
                fill="none"
                stroke="rgba(253, 116, 44, 1)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
                <polyline points="9 10 12 13 15 10" />
                <line x1="12" y1="6" x2="12" y2="13" />
            </svg>
        ),
    },
    {
        delay: 300,
        title: "Conectar",
        description:
            "Sincronização em tempo real com nossa rede centralizada de inteligência.",
        icon: (
            <svg
                viewBox="0 0 24 24"
                width="28"
                height="28"
                fill="none"
                stroke="rgba(253, 116, 44, 1)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="5" r="3" />
                <circle cx="5" cy="19" r="3" />
                <circle cx="19" cy="19" r="3" />
                <line x1="8.59" y1="7.41" x2="15.42" y2="14.24" />
                <line x1="15.41" y1="7.41" x2="8.59" y2="14.24" />
                <circle cx="12" cy="12" r="1" fill="rgba(253, 116, 44, 1)" />
            </svg>
        ),
    },
    {
        delay: 500,
        title: "Controlar",
        description:
            "Gestão completa via dashboard intuitivo com KPIs de alta precisão.",
        icon: (
            <svg
                viewBox="0 0 24 24"
                width="28"
                height="28"
                fill="none"
                stroke="rgba(253, 116, 44, 1)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
                <path d="M2 20h20" />
            </svg>
        ),
    },
];

const targetCards = [
    {
        modifier: "Family",
        delay: 100,
        badge: "Uso Doméstico",
        title: "Família",
        label: "Família",
        hint: "Passe o mouse para ver",
        features: [
            "Alertas de proximidade",
            "Botão de pânico digital",
            "Rastreamento em tempo real",
        ],
        icon: (
            <svg
                viewBox="0 0 24 24"
                width="56"
                height="56"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
    {
        modifier: "Clinics",
        delay: 250,
        badge: "Operações Médicas",
        title: "Clínicas",
        label: "Clínicas",
        hint: "Passe o mouse para ver",
        features: [
            "Controle rigoroso de SLA",
            "Logs de auditoria imutáveis",
            "Conformidade com normas",
        ],
        icon: (
            <svg
                viewBox="0 0 24 24"
                width="56"
                height="56"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect x="3" y="4" width="18" height="14" rx="2" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <line x1="12" y1="14" x2="12" y2="18" />
                <line x1="10" y1="16" x2="14" y2="16" />
            </svg>
        ),
    },
    {
        modifier: "Ngos",
        delay: 400,
        badge: "Missões Sociais",
        title: "ONGs",
        label: "ONGs",
        hint: "Passe o mouse para ver",
        features: [
            "Relatórios de transparência",
            "Dashboard de doadores",
            "Impacto social automático",
        ],
        icon: (
            <svg
                viewBox="0 0 24 24"
                width="56"
                height="56"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
        ),
    },
];

const reviews = [
    {
        stars: "★★★★★",
        text: "Reduzimos o tempo de resposta dos nossos guinchos pela metade. A precisão do mapa e os alertas automáticos mudaram nossa operação.",
        name: "Marcos Silva",
        role: "Diretor de Logística",
    },
    {
        stars: "★★★★★",
        text: "A conformidade com as normas de saúde e os relatórios de auditoria imutáveis nos deram total segurança jurídica na clínica.",
        name: "Dra. Sandra Rocha",
        role: "Gestora Hospitalar",
    },
    {
        stars: "★★★★★",
        text: "Uso o rastreamento doméstico para monitorar o deslocamento dos meus pais idosos. O botão de pânico digital me traz muita paz.",
        name: "Thiago Ramos",
        role: "Uso Familiar",
    },
    {
        stars: "★★★★★",
        text: "Os relatórios automatizados de impacto social facilitaram muito a nossa prestação de contas com os investidores da ONG.",
        name: "Beatriz Mendes",
        role: "Fundadora de Instituição Social",
    },
    {
        stars: "★★★★★",
        text: "Interface extremamente limpa e direta ao ponto. Toda a nossa equipe se adaptou ao dashboard em menos de dois dias.",
        name: "Carlos Eduardo",
        role: "Supervisor de Frota",
    },
];

const pricingPlans = [
    {
        variant: "default",
        name: "ESSENCIAL",
        currency: "R$",
        amount: "97,00",
        period: "/mês por usuário",
        features: [
            "Rastreamento básico",
            "Até 3 operadores",
            "Suporte por e-mail",
            "Relatórios mensais",
        ],
        buttonClass: styles.planBtnOrange,
        buttonText: "Começar agora",
    },
    {
        variant: "featured",
        name: "PROFISSIONAL",
        currency: "R$",
        amount: "197,00",
        period: "/mês por usuário",
        features: [
            "Rastreamento tempo real",
            "Operadores ilimitados",
            "Suporte prioritário 24/7",
            "Relatórios e alertas",
            "Integração via API",
        ],
        buttonClass: styles.planBtnOrange,
        buttonText: "Começar agora",
    },
    {
        variant: "default",
        name: "Enterprise",
        currency: "",
        amount: "Custom",
        period: "sob consulta",
        features: [
            "Tudo do Profissional",
            "Onboarding dedicado",
            "SLA garantido",
            "White-label disponível",
        ],
        buttonClass: styles.planBtnTranslucent,
        buttonText: "Falar com vendas",
    },
];

const getModifierClass = (modifier) => {
    const key = `flipCard${modifier}`;
    return styles[key] || "";
};

function LandingPage() {
    useEffect(() => {
        AOS.init({ once: true, offset: 120 });
    }, []);

    return (
        <>
            <div className={styles.content}>
                <Header />
            </div>


            <section className={styles.heroContainer}>
                <h1
                    className={styles.heroTitle}
                    data-aos="fade-down"
                    data-aos-duration="1000"
                >
                    Controle total do seu guincho, sem complicação
                </h1>

                <p
                    className={styles.heroDescription}
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                >
                    O EVERISE conecta famílias, clínicas e ONGs a um sistema
                    simples de rastreamento e gestão em tempo real, de qualquer
                    lugar.
                </p>

                <div
                    className={styles.ctaGroup}
                    data-aos="zoom-in"
                    data-aos-delay="400"
                    data-aos-duration="800"
                >
                    <a
                        href="#"
                        className={`${styles.btn} ${styles.btnPrimary}`}
                    >
                        Contratar agora
                    </a>
                    <a
                        href="#"
                        className={`${styles.btn} ${styles.btnSecondary}`}
                    >
                        Ver demonstração
                    </a>
                </div>
            </section>

            <section className={styles.aboutSection}>
                <div className={styles.aboutContainer}>
                    <div
                        className={styles.aboutContent}
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <h2 className={styles.aboutTitle}>
                            Criado por quem viveu o problema
                        </h2>
                        <p className={styles.aboutParagraph}>
                            Rafa construiu o EVERISE depois de enfrentar, na
                            pele, a dificuldade de gerenciar um serviço de
                            guincho com informações fragmentadas, comunicação
                            falha e clientes sem respostas.
                        </p>
                        <p className={styles.aboutParagraph}>
                            O produto nasceu da necessidade real — e foi
                            desenhado para quem precisa de clareza, não de mais
                            complexidade.
                        </p>
                    </div>

                    <div
                        className={styles.aboutGlassWrapper}
                        data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        <div className={styles.glassContainer}>
                            {glassCards.map((card) => (
                                <div
                                    key={card.label}
                                    className={styles.glassCard}
                                    style={{ "--r": card.rotation }}
                                >
                                    <img
                                        className={styles.glassCardImg}
                                        src={card.src}
                                        alt={card.alt}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.stepsSection}>
                <div
                    className={styles.stepsHeader}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <h2 className={styles.stepsMainTitle}>
                        Três passos para o controle total
                    </h2>
                    <p className={styles.stepsSubtitle}>
                        Simplicidade na implementação, excelência na execução.
                    </p>
                </div>

                <div className={styles.stepsContainer}>
                    <div className={styles.stepsConnectingLine} />
                    {steps.map((step, index) => (
                        <div
                            key={step.title}
                            className={styles.stepCard}
                            data-aos="fade-up"
                            data-aos-delay={step.delay}
                            data-aos-duration="800"
                        >
                            <div className={styles.stepIconWrapper}>
                                {step.icon}
                            </div>
                            <div className={styles.stepNumber}>{index + 1}</div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDescription}>
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.targetsSection}>
                <div className={styles.targetsContainer}>
                    <div
                        className={styles.targetsHeader}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <h2 className={styles.targetsMainTitle}>
                            Feito para quem não pode errar
                        </h2>
                        <p className={styles.targetsSubtitle}>
                            Adaptamos nossa tecnologia para os ambientes mais
                            exigentes, onde cada segundo e cada dado importam.
                        </p>
                    </div>

                    <div className={styles.cardsGrid}>
                        {targetCards.map((card) => (
                            <div
                                key={card.title}
                                className={`${styles.flipCard} ${getModifierClass(card.modifier)}`}
                                data-aos="zoom-in-up"
                                data-aos-delay={card.delay}
                                data-aos-duration="800"
                            >
                                <div className={styles.flipCardInner}>
                                    <div className={styles.flipBack}>
                                        <div className={styles.flipBackContent}>
                                            {card.icon}
                                            <span
                                                className={styles.flipBackLabel}
                                            >
                                                {card.label}
                                            </span>
                                            <span
                                                className={styles.flipBackHint}
                                            >
                                                {card.hint}
                                            </span>
                                        </div>
                                    </div>

                                    <div className={styles.flipFront}>
                                        <div className={styles.flipBubbles}>
                                            <div
                                                className={styles.flipBubble}
                                            ></div>
                                            <div
                                                className={styles.flipBubble}
                                            ></div>
                                            <div
                                                className={styles.flipBubble}
                                            ></div>
                                        </div>
                                        <div
                                            className={styles.flipFrontContent}
                                        >
                                            <span className={styles.flipBadge}>
                                                {card.badge}
                                            </span>
                                            <div className={styles.flipInfo}>
                                                <div
                                                    className={
                                                        styles.flipInfoHeader
                                                    }
                                                >
                                                    <h3
                                                        className={
                                                            styles.flipCardTitle
                                                        }
                                                    >
                                                        {card.title}
                                                    </h3>
                                                    <svg
                                                        className={
                                                            styles.flipBookmark
                                                        }
                                                        fill="#feb42d"
                                                        viewBox="0,0,256,256"
                                                        width="16px"
                                                        height="16px"
                                                    >
                                                        <g>
                                                            <g transform="scale(8,8)">
                                                                <path d="M25,27l-9,-6.75l-9,6.75v-23h18z" />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <div
                                                    className={
                                                        styles.flipFeatures
                                                    }
                                                >
                                                    {card.features.map(
                                                        (feature) => (
                                                            <div
                                                                key={feature}
                                                                className={
                                                                    styles.flipFeatureRow
                                                                }
                                                            >
                                                                <svg
                                                                    viewBox="0 0 24 24"
                                                                    width="13"
                                                                    height="13"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="3"
                                                                >
                                                                    <polyline points="20 6 9 17 4 12" />
                                                                </svg>
                                                                {feature}
                                                            </div>
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.videoSection}>
                <div className={styles.videoContainer}>
                    <div
                        className={styles.videoHeader}
                        data-aos="fade-down"
                        data-aos-duration="1000"
                    >
                        <h2 className={styles.videoMainTitle}>
                            Veja o EVERISE in ação
                        </h2>
                        <p className={styles.videoSubtitle}>
                            Descubra como nossa plataforma simplifica a gestão
                            de guinchos e frotas através de uma interface
                            intuitiva e automações poderosas.
                        </p>
                    </div>
                    <div
                        className={styles.videoMockup}
                        data-aos="zoom-in"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        <div className={styles.videoOverlay}>
                            <button
                                className={styles.playButton}
                                aria-label="Play video"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                    fill="#ffffff"
                                >
                                    <polygon points="5 3 19 12 5 21 5 3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.reviewsSection}>
                <div className={styles.reviewsContainer}>
                    <div
                        className={styles.reviewsHeader}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <h2 className={styles.reviewsMainTitle}>
                            Quem usa, confia no controle total
                        </h2>
                        <p className={styles.reviewsSubtitle}>
                            Veja o depoimento de quem transformou a gestão
                            operacional e a segurança com o EVERISE.
                        </p>
                    </div>
                    <div
                        className={styles.carouselTicker}
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        <div className={styles.carouselTrack}>
                            {reviews.concat(reviews).map((review, index) => (
                                <div
                                    key={`${review.name}-${index}`}
                                    className={styles.reviewCard}
                                >
                                    <div className={styles.reviewStars}>
                                        {review.stars}
                                    </div>
                                    <p className={styles.reviewText}>
                                        {review.text}
                                    </p>
                                    <div className={styles.reviewUser}>
                                        <span className={styles.userName}>
                                            {review.name}
                                        </span>
                                        <span className={styles.userRole}>
                                            {review.role}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.pricingSection}>
                <div className={styles.pricingContainer}>
                    <div
                        className={styles.pricingHeader}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <h2 className={styles.pricingMainTitle}>
                            Escolha o plano ideal
                        </h2>
                        <p className={styles.pricingSubtitle}>
                            Sem surpresas. Sem letras miúdas. Cancele quando
                            quiser.
                        </p>
                    </div>
                    <div className={styles.pricingGrid}>
                        {pricingPlans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`${styles.priceCard} ${plan.variant === "featured" ? styles.priceCardFeatured : ""}`}
                                data-aos={
                                    plan.variant === "featured"
                                        ? "zoom-in"
                                        : plan.name === "ESSENCIAL"
                                          ? "fade-right"
                                          : "fade-left"
                                }
                                data-aos-delay={
                                    plan.variant === "featured" ? 100 : 200
                                }
                                data-aos-duration="800"
                            >
                                {plan.variant === "featured" && (
                                    <div className={styles.popularBadge}>
                                        POPULAR
                                    </div>
                                )}
                                <div className={styles.priceCardHeader}>
                                    <span className={styles.planName}>
                                        {plan.name}
                                    </span>
                                    <div className={styles.planPrice}>
                                        {plan.currency && (
                                            <span className={styles.currency}>
                                                {plan.currency}
                                            </span>
                                        )}
                                        <span className={styles.amount}>
                                            {plan.amount}
                                        </span>
                                        <span className={styles.period}>
                                            {plan.period}
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.planFeatures}>
                                    {plan.features.map((feature) => (
                                        <div
                                            key={feature}
                                            className={styles.planFeatureItem}
                                        >
                                            <svg
                                                viewBox="0 0 24 24"
                                                width="16"
                                                height="16"
                                                fill="none"
                                                stroke="#66bb6a"
                                                strokeWidth="3"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <a
                                    href="#"
                                    className={`${styles.planBtn} ${plan.buttonClass}`}
                                >
                                    {plan.buttonText}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div
                    className={styles.ctaContainer}
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                >
                    <h2 className={styles.ctaTitle}>
                        Pronto para elevar seu padrão operacional?
                    </h2>
                    <p className={styles.ctaSubtitle}>
                        Junte-se a centenas de gestores que já transformaram
                        seus processos com a EVERISE.
                    </p>
                    <div className={styles.ctaButtons}>
                        <a href="#" className={styles.btnPrimaryOrange}>
                            Iniciar Teste Gratuito
                        </a>
                        <a href="#" className={styles.btnSecondaryOutline}>
                            Falar com Especialista
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LandingPage;
