import React from "react";
import styles from "./FaqItem.module.css";

export default function FaqItem({ question, answer }) {
    return (
        <details className={styles.faqItem}>
            <summary className={styles.faqQuestion}>{question}</summary>
            <p className={styles.faqAnswer}>{answer}</p>
        </details>
    );
}
