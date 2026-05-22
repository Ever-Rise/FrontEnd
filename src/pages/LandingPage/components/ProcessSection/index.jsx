import styles from "./styles.module.css";

const steps = [
    {
        number: "01",
        title: "Instalar",
        description: "Baixe o app e crie sua conta em menos de 2 minutos.",
    },
    {
        number: "02",
        title: "Conectar",
        description:
            "Vincule seus dispositivos, clínica ou profissional de saúde.",
    },
    {
        number: "03",
        title: "Controlar",
        description:
            "Acompanhe tudo em tempo real e receba alertas personalizados.",
    },
];

const ProcessSection = () => {
    return (
        <section className={styles.section} aria-labelledby="process-title">
            <div className={styles.container}>
                <p className={styles.kicker}>Fluxo simples</p>
                <h2 id="process-title" className={styles.title}>
                    Três passos para o controle total
                </h2>

                <ol className={styles.list}>
                    {steps.map((step) => (
                        <li key={step.number} className={styles.item}>
                            <p className={styles.number}>{step.number}</p>
                            <h3 className={styles.itemTitle}>{step.title}</h3>
                            <p className={styles.itemDescription}>
                                {step.description}
                            </p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default ProcessSection;
