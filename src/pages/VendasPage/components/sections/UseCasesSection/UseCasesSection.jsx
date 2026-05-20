import styles from "./UseCasesSection.module.css";
import UseCaseCard from "../../UseCaseCard/UseCaseCard";
import { useCases } from "../../../content";

export default function UseCasesSection() {
    return (
        <section className={styles.section} aria-labelledby="casos-title">
            <div className={styles.sectionHeader}>
                <p className={styles.sectionKicker}>Casos de uso</p>
                <h2 id="casos-title" className={styles.sectionTitle}>
                    Cenários para apresentar o valor do produto
                </h2>
                <p className={styles.sectionLead}>
                    Em vez de um bloco único e pesado, a página agora separa a
                    comunicação por ambiente e contexto de uso.
                </p>
            </div>

            <div className={styles.useCaseGrid}>
                {useCases.map((item) => (
                    <UseCaseCard key={item.title} {...item} />
                ))}
            </div>
        </section>
    );
}
