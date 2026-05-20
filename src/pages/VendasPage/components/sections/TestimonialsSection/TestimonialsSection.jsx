import styles from "./TestimonialsSection.module.css";
import TestimonialCard from "../../TestimonialCard/TestimonialCard";
import { testimonials } from "../../../content";

export default function TestimonialsSection() {
    return (
        <section className={styles.section} aria-labelledby="depoimentos-title">
            <div className={styles.sectionHeader}>
                <p className={styles.sectionKicker}>Depoimentos</p>
                <h2 id="depoimentos-title" className={styles.sectionTitle}>
                    Prova social em uma estrutura simples de manter
                </h2>
            </div>

            <div className={styles.testimonialGrid}>
                {testimonials.map((item) => (
                    <TestimonialCard key={item.author} {...item} />
                ))}
            </div>
        </section>
    );
}
