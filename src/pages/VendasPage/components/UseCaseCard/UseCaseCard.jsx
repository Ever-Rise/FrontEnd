import React from "react";
import styles from "./UseCaseCard.module.css";

export default function UseCaseCard({ title, description }) {
    return (
        <article className={styles.useCaseCard}>
            <h3 className={styles.useCaseTitle}>{title}</h3>
            <p className={styles.useCaseDescription}>{description}</p>
        </article>
    );
}
