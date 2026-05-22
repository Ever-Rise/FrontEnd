import styles from "./BenefitsSection.module.css";
import FeatureCard from "../../FeatureCard/FeatureCard";
import { highlights } from "../../../content";

export default function BenefitsSection() {
    return (
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
    );
}
