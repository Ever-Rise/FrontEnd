// Componente de página simples — refs removidas por serem não usadas
import heroImage from "@/assets/images/Vendas/ImgHero.svg";
import heroVideo from "@/assets/images/Vendas/VideoHero.optimized.mp4";
import styles from "./styles.module.css";
import StatItem from "./components/StatItem/StatItem";
import FeatureCard from "./components/FeatureCard/FeatureCard";
import PlanCard from "./components/PlanCard/PlanCard";
import UseCaseCard from "./components/UseCaseCard/UseCaseCard";
import TestimonialCard from "./components/TestimonialCard/TestimonialCard";
import FaqItem from "./components/FaqItem/FaqItem";

const highlights = [
    {
        title: "Mais segurança",
        description:
            "Fluxos pensados para reduzir risco, evitar movimentos bruscos e apoiar equipes em deslocamentos assistidos.",
    },
    {
        title: "Menos esforço",
        description:
            "Estruture a compra por fases, com implantação progressiva, treinamento e acompanhamento de uso.",
    },
    {
        title: "Base pronta",
        description:
            "A página fica organizada por seção, sem dependência de motion para renderizar ou manter o conteúdo.",
    },
];

const plans = [
    {
        name: "Essencial",
        badge: "Entrada",
        summary:
            "Para equipes que querem começar com foco em operação e validação.",
        features: [
            "Setup inicial orientado pelo time comercial.",
            "Estrutura base para uso assistido.",
            "Onboarding e alinhamento do fluxo de adoção.",
        ],
        action: "Conferir com vendas",
    },
    {
        name: "Operacional",
        badge: "Mais escolhido",
        summary:
            "Para rotinas com maior volume e necessidade de acompanhamento próximo.",
        features: [
            "Acompanhamento de implantação por etapas.",
            "Ajustes de configuração conforme a rotina da equipe.",
            "Roteiro de ativação com foco em eficiência.",
        ],
        action: "Solicitar proposta",
    },
    {
        name: "Enterprise",
        badge: "Escala",
        summary:
            "Para instituições com integrações, múltiplas áreas e processos mais complexos.",
        features: [
            "Plano comercial sob medida.",
            "Integrações e governança definidas por necessidade.",
            "Suporte dedicado para implantação e expansão.",
        ],
        action: "Falar com especialista",
    },
];

const useCases = [
    {
        title: "Sala",
        description:
            "Transferências mais seguras da origem até a área de destino, com foco em estabilidade.",
    },
    {
        title: "Corredor",
        description:
            "Mobilidade prática entre ambientes com controle simples e movimentos suaves.",
    },
    {
        title: "Quarto",
        description:
            "Apoio à movimentação de pacientes com dignidade e menor esforço físico.",
    },
    {
        title: "Banheiro",
        description:
            "Fluxo mais cuidadoso em ambientes apertados, com atenção à ergonomia e segurança.",
    },
];

const testimonials = [
    {
        quote: "A proposta comercial ficou muito mais clara quando a apresentação foi organizada por etapas e por contexto de uso.",
        author: "Dr. Sarah Chen",
        role: "Profissional de saúde",
    },
    {
        quote: "A estrutura da página ajuda a equipe a entender valor, operação e próximos passos sem depender de um bloco único de texto.",
        author: "Marina Alves",
        role: "Gestão hospitalar",
    },
    {
        quote: "O material ficou pronto para evoluir com motion e, ao mesmo tempo, já serve bem para apresentação comercial.",
        author: "Rafael Lima",
        role: "Operações",
    },
];

const faqItems = [
    {
        question: "Posso começar com um plano menor e evoluir depois?",
        answer: "Sim. A proposta é permitir adoção por etapas, com atualização de escopo conforme a maturidade da operação.",
    },
    {
        question: "A página já está pronta para animações?",
        answer: "Ela está pronta para funcionar sem motion. As animações podem ser adicionadas depois, por seção, se necessário.",
    },
    {
        question: "Há suporte para implantação?",
        answer: "Sim. O fluxo comercial pode incluir onboarding, alinhamento técnico e acompanhamento inicial.",
    },
    {
        question: "Posso adaptar o conteúdo para novos planos?",
        answer: "Sim. Os cards estão modelados em arrays para facilitar edição, reordenação ou expansão futura.",
    },
];

export default function VendasPage() {
    return (
        <main className={styles.page}>
            <section className={styles.heroShell} id="hero">
                <div className={styles.heroStage}>
                    <div className={styles.heroCopy}>
                        <p className={styles.eyebrow}>Planos e vendas</p>
                        <h1 className={styles.heroTitle}>
                            Mobilidade com segurança e dignidade
                        </h1>
                    
                        <div className={styles.heroActions}>
                            <a className={styles.primaryAction} href="#planos">
                                Ver como funciona
                            </a>
                            <a
                                className={styles.secondaryAction}
                                href="#contato"
                            >
                                Fale com um especialista
                            </a>
                        </div>

                        <dl className={styles.heroStats}>
                            <StatItem
                                value="3"
                                label="Planos para orientar a oferta"
                            />
                            <StatItem
                                value="4"
                                label="Cenários de uso organizados"
                            />
                            <StatItem
                                value="1"
                                label="Hero sem motion pesado"
                            />
                            <StatItem
                                value="100%"
                                label="Layout pronto para evolução"
                            />
                        </dl>
                    </div>

                    <aside
                        className={styles.heroAside}
                        aria-label="Visual do produto"
                    >

                        <div className={styles.mediaFrame}>
                            <img
                                className={styles.heroImage}
                                src={heroImage}
                                alt="Hero da EVERRISE em visual de produto"
                            />
                            <video
                                className={styles.heroVideo}
                                src={heroVideo}
                                poster={heroImage}
                                muted
                                playsInline
                                preload="auto"
                                aria-hidden="true"
                            />
                            <div className={styles.mediaOverlay} />
                        </div>
                    </aside>
                </div>
            </section>

            <section
                className={styles.section}
                aria-labelledby="beneficios-title"
                id="beneficios"
            >
                <div className={styles.sectionHeader}>
                    <p className={styles.sectionKicker}>Estrutura comercial</p>
                    <h2 id="beneficios-title" className={styles.sectionTitle}>
                        O que esta versão resolve agora
                    </h2>
                    <p className={styles.sectionLead}>
                        O conteúdo foi separado em blocos menores para manter a
                        página simples de manter, sem motion global acoplado.
                    </p>
                </div>

                <div className={styles.featureGrid}>
                    {highlights.map((item) => (
                        <FeatureCard key={item.title} {...item} />
                    ))}
                </div>
            </section>

            <section
                className={styles.section}
                aria-labelledby="planos-title"
                id="planos"
            >
                <div className={styles.sectionHeader}>
                    <p className={styles.sectionKicker}>Planos</p>
                    <h2 id="planos-title" className={styles.sectionTitle}>
                        Organização comercial em três níveis
                    </h2>
                    <p className={styles.sectionLead}>
                        Cada card foi pensado como um bloco independente, para
                        você editar, ordenar ou estender sem mexer na estrutura
                        principal da página.
                    </p>
                </div>

                <div className={styles.planGrid}>
                    {plans.map((plan) => (
                        <PlanCard key={plan.name} plan={plan} />
                    ))}
                </div>
            </section>

            <section className={styles.section} aria-labelledby="casos-title">
                <div className={styles.sectionHeader}>
                    <p className={styles.sectionKicker}>Casos de uso</p>
                    <h2 id="casos-title" className={styles.sectionTitle}>
                        Cenários para apresentar o valor do produto
                    </h2>
                    <p className={styles.sectionLead}>
                        Em vez de um bloco único e pesado, a página agora separa
                        a comunicação por ambiente e contexto de uso.
                    </p>
                </div>

                <div className={styles.useCaseGrid}>
                    {useCases.map((item) => (
                        <UseCaseCard key={item.title} {...item} />
                    ))}
                </div>
            </section>

            <section
                className={styles.section}
                aria-labelledby="depoimentos-title"
            >
                <div className={styles.sectionHeader}>
                    <p className={styles.sectionKicker}>Depoimentos</p>
                    <h2 id="depoimentos-title" className={styles.sectionTitle}>
                        Prova social em uma estrutura simples de manter
                    </h2>
                </div>

                <div className={styles.testimonialGrid}>
                    {testimonials.map((item) => (
                        <TestimonialCard key={item.author} {...item} />
                    ))}
                </div>
            </section>

            <section
                className={styles.section}
                aria-labelledby="faq-title"
                id="faq"
            >
                <div className={styles.sectionHeader}>
                    <p className={styles.sectionKicker}>FAQ</p>
                    <h2 id="faq-title" className={styles.sectionTitle}>
                        Perguntas frequentes
                    </h2>
                </div>

                <div className={styles.faqList}>
                    {faqItems.map((item) => (
                        <FaqItem key={item.question} {...item} />
                    ))}
                </div>
            </section>

            <section
                className={styles.ctaSection}
                id="contato"
                aria-labelledby="cta-title"
            >
                <div className={styles.ctaCopy}>
                    <p className={styles.sectionKicker}>Próximo passo</p>
                    <h2 id="cta-title" className={styles.sectionTitle}>
                        Pronto para transformar a página em um fluxo comercial
                        vivo
                    </h2>
                    <p className={styles.sectionLead}>
                        A base já está organizada por sessão. Agora você pode
                        plugar animações depois, se decidir reativar esse
                        módulo.
                    </p>
                </div>

                <div className={styles.ctaActions}>
                    <a className={styles.primaryAction} href="#planos">
                        Revisar planos
                    </a>
                    <a className={styles.secondaryAction} href="#faq">
                        Ler dúvidas
                    </a>
                </div>
            </section>
        </main>
    );
}
