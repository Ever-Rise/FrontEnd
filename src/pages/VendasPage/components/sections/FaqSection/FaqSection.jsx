import styles from "./FaqSection.module.css";
import FaqItem from "../../FaqItem/FaqItem";
import { faqItems } from "../../../content";

export default function FaqSection() {
    return (
        <section
            className={styles.section}
            aria-labelledby="faq-title"
            id="faq"
        >
            <div className={styles.sectionHeader}>
                <p className={styles.sectionKicker}>FAQ</p>
                <h2 id="faq-title" className={styles.sectionTitle}>
                    Perguntas frequentes
                </h2>
            </div>

            <div className={styles.faqList}>
                {faqItems.map((item) => (
                    <FaqItem key={item.question} {...item} />
                ))}
            </div>
        </section>
    );
}
