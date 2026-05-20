import styles from "./PlansSection.module.css";
import PlanCard from "../../PlanCard/PlanCard";
import { plans } from "../../../content";

export default function PlansSection() {
    return (
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
                    Cada card foi pensado como um bloco independente, para você
                    editar, ordenar ou estender sem mexer na estrutura principal
                    da página.
                </p>
            </div>

            <div className={styles.planGrid}>
                {plans.map((plan) => (
                    <PlanCard key={plan.name} plan={plan} />
                ))}
            </div>
        </section>
    );
}
