import heroImage from "@/assets/images/Vendas/ImgHero.svg";
import heroVideo from "@/assets/images/Vendas/VideoHero.optimized.mp4";
import styles from "./HeroSection.module.css";
import StatItem from "../../StatItem/StatItem";

const heroStats = [
    { value: "3", label: "Planos para orientar a oferta" },
    { value: "4", label: "Cenários de uso organizados" },
    { value: "1", label: "Hero sem motion pesado" },
    { value: "100%", label: "Layout pronto para evolução" },
];

export default function HeroSection() {
    return (
        <section
            className={styles.heroShell}
            id="hero"
            aria-labelledby="hero-title"
        >
            <div className={styles.heroStage}>
                <div className={styles.heroCopy}>
                    <p className={styles.eyebrow}>Planos e vendas</p>
                    <h1 id="hero-title" className={styles.heroTitle}>
                        Mobilidade com segurança e dignidade
                    </h1>

                    <p className={styles.heroDescription}>
                        Estrutura comercial clara, pronta para apresentação e
                        fácil de manter, com conteúdo separado por seção e sem
                        motion global acoplado.
                    </p>

                    <div className={styles.heroActions}>
                        <a className={styles.primaryAction} href="#planos">
                            Ver como funciona
                        </a>
                        <a className={styles.secondaryAction} href="#contato">
                            Fale com um especialista
                        </a>
                    </div>

                    <dl className={styles.heroStats}>
                        {heroStats.map((item) => (
                            <StatItem key={item.label} {...item} />
                        ))}
                    </dl>
                </div>

                <aside
                    className={styles.heroAside}
                    aria-label="Visual do produto"
                >
                    <div className={styles.mediaFrame}>
                        <img
                            className={styles.heroImage}
                            src={heroImage}
                            alt="Hero da EVERRISE em visual de produto"
                        />
                        <video
                            className={styles.heroVideo}
                            src={heroVideo}
                            poster={heroImage}
                            muted
                            playsInline
                            preload="auto"
                            aria-hidden="true"
                        />
                        <div className={styles.mediaOverlay} />
                    </div>
                </aside>
            </div>
        </section>
    );
}
