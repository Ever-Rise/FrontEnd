import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const CtaSection = () => {
    return (
        <section className={styles.section} aria-labelledby="cta-title">
            <div className={styles.container}>
                <p className={styles.kicker}>Pronto para avançar</p>
                <h2 id="cta-title" className={styles.title}>
                    Pronto para ter controle total?
                </h2>
                <p className={styles.description}>
                    Junte-se a quem já transformou a gestão operacional. Sem
                    burocracia, comece hoje.
                </p>

                <div className={styles.actions}>
                    <Link to="/register" className={styles.primaryAction}>
                        Contratar agora →
                    </Link>
                    <Link to="/login" className={styles.secondaryAction}>
                        Falar com a equipe
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
