import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const heroStats = [
    { value: "2 min", label: "para começar" },
    { value: "100%", label: "visão operacional" },
    { value: "24/7", label: "monitoramento" },
];

const HeroSection = () => {
    return (
        <section className={styles.hero} aria-labelledby="hero-title">
            <div className={styles.container}>
                <p className={styles.kicker}>
                    Guincho inteligente para operação sem ruído
                </p>
                <h1 id="hero-title" className={styles.title}>
                    Controle total do seu guincho, sem complicação
                </h1>
                <p className={styles.description}>
                    O EVERISE conecta famílias, clínicas e ONGs a um sistema
                    simples de rastreamento e gestão em tempo real, de qualquer
                    lugar.
                </p>

                <div className={styles.actions}>
                    <Link to="/register" className={styles.primaryAction}>
                        Contratar agora →
                    </Link>
                    <Link to="/vendas" className={styles.secondaryAction}>
                        Ver demonstração
                    </Link>
                </div>

                <dl className={styles.stats}>
                    {heroStats.map((item) => (
                        <div key={item.label} className={styles.statItem}>
                            <dt className={styles.statValue}>{item.value}</dt>
                            <dd className={styles.statLabel}>{item.label}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
};

export default HeroSection;
