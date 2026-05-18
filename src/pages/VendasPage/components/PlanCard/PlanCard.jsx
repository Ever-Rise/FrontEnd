import React from "react";
import styles from "./PlanCard.module.css";

export default function PlanCard({ plan }) {
    return (
        <article className={styles.planCard}>
            <div className={styles.planHeader}>
                <span className={styles.planBadge}>{plan.badge}</span>
                <h3 className={styles.planName}>{plan.name}</h3>
            </div>
            <p className={styles.planSummary}>{plan.summary}</p>
            <ul className={styles.planList}>
                {plan.features.map((feature) => (
                    <li key={feature} className={styles.planListItem}>
                        {feature}
                    </li>
                ))}
            </ul>
            <a className={styles.planAction} href="#contato">
                {plan.action}
            </a>
        </article>
    );
}
