import styles from "./styles.module.css";

const audiences = [
    {
        title: "Família",
        description:
            "Segurança e tranquilidade em momentos críticos. Rastreamento em tempo real e comunicação direta com o operador.",
        subtitle: "Uso doméstico e emergências",
    },
    {
        title: "Clínicas",
        description:
            "Gestão de frotas com SLA definido, histórico de atendimentos e relatórios automáticos para compliance.",
        subtitle: "Operações médicas e logística",
    },
    {
        title: "ONGs",
        description:
            "Plano especial com preço acessível, gestão transparente e relatórios de impacto para prestação de contas.",
        subtitle: "Missões de impacto social",
    },
];

const AudienceSection = () => {
    return (
        <section className={styles.section} aria-labelledby="audience-title">
            <div className={styles.container}>
                <p className={styles.kicker}>Para quem foi feito</p>
                <h2 id="audience-title" className={styles.title}>
                    Feito para quem não pode errar
                </h2>
                <p className={styles.description}>
                    Cada perfil tem necessidades diferentes. O EVERISE foi
                    desenhado para atender todos com precisão.
                </p>

                <div className={styles.grid}>
                    {audiences.map((audience) => (
                        <article key={audience.title} className={styles.card}>
                            <p className={styles.subtitle}>
                                {audience.subtitle}
                            </p>
                            <h3 className={styles.cardTitle}>
                                {audience.title}
                            </h3>
                            <p className={styles.cardDescription}>
                                {audience.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AudienceSection;
