import styles from "./CtaSection.module.css";

export default function CtaSection() {
    return (
        <section
            className={styles.ctaSection}
            id="contato"
            aria-labelledby="cta-title"
        >
            <div className={styles.ctaCopy}>
                <p className={styles.sectionKicker}>Próximo passo</p>
                <h2 id="cta-title" className={styles.sectionTitle}>
                    Pronto para transformar a página em um fluxo comercial vivo
                </h2>
                <p className={styles.sectionLead}>
                    A base já está organizada por sessão. Agora você pode plugar
                    animações depois, se decidir reativar esse módulo.
                </p>
            </div>

            <div className={styles.ctaActions}>
                <a className={styles.primaryAction} href="#planos">
                    Revisar planos
                </a>
                <a className={styles.secondaryAction} href="#faq">
                    Ler dúvidas
                </a>
            </div>
        </section>
    );
}
