import React from "react";
import styles from "./TestimonialCard.module.css";

export default function TestimonialCard({ quote, author, role }) {
    return (
        <figure className={styles.testimonialCard}>
            <blockquote className={styles.testimonialQuote}>{quote}</blockquote>
            <figcaption className={styles.testimonialMeta}>
                <strong>{author}</strong>
                <span>{role}</span>
            </figcaption>
        </figure>
    );
}
