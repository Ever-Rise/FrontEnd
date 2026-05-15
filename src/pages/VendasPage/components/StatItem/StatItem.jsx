import React from "react";
import styles from "./StatItem.module.css";

export default function StatItem({ value, label }) {
    return (
        <div className={styles.statItem}>
            <strong className={styles.statValue}>{value}</strong>
            <span className={styles.statLabel}>{label}</span>
        </div>
    );
}
