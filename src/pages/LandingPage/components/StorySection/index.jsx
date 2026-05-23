import styles from "./styles.module.css";

const StorySection = () => {
    return (
        <section className={styles.section} aria-labelledby="story-title">
            <div className={styles.container}>
                <article className={styles.storyCard}>
                    <div>
                        <p className={styles.kicker}>Origem do produto</p>
                        <h2 id="story-title" className={styles.title}>
                            Criado por quem viveu o problema
                        </h2>
                        <p className={styles.description}>
                            Rafa construiu o EVERISE depois de enfrentar, na
                            pele, a dificuldade de gerenciar um serviço de
                            guincho com informações fragmentadas, comunicação
                            falha e clientes sem respostas.
                        </p>
                        <p className={styles.description}>
                            O produto nasceu da necessidade real e foi desenhado
                            para quem precisa de clareza, não de mais
                            complexidade.
                        </p>
                    </div>

                    <figure className={styles.quote}>
                        <blockquote className={styles.quoteText}>
                            “Eu não queria mais uma ferramenta. Queria algo que
                            fizesse o trabalho desaparecer para que eu pudesse
                            focar nas pessoas.”
                        </blockquote>
                        <figcaption className={styles.quoteCaption}>
                            <span className={styles.quoteName}>Rafa</span>
                            <span className={styles.quoteRole}>
                                Idealizadora e fundadora do EVERISE
                            </span>
                        </figcaption>
                    </figure>
                </article>
            </div>
        </section>
    );
};

export default StorySection;
