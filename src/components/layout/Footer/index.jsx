import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <section
                    className={styles.brandSection}
                    aria-labelledby="footer-brand"
                >
                    <Link to="/" className={styles.brand}>
                        Ever Rise
                    </Link>
                    <p id="footer-brand" className={styles.brandDescription}>
                        Controle operacional claro, rápido e focado em quem
                        precisa responder sem ruído.
                    </p>
                </section>

                <nav className={styles.footerNav} aria-label="Links do rodapé">
                    <section
                        className={styles.linkGroup}
                        aria-labelledby="footer-company-links"
                    >
                        <h2
                            id="footer-company-links"
                            className={styles.linkGroupTitle}
                        >
                            Empresa
                        </h2>
                        <ul className={styles.list}>
                            <li>
                                <Link to="/sobre" className={styles.link}>
                                    Sobre Nós
                                </Link>
                            </li>
                            <li>
                                <Link to="/vendas" className={styles.link}>
                                    Soluções
                                </Link>
                            </li>
                            <li>
                                <Link to="/parceiros" className={styles.link}>
                                    Parceiros
                                </Link>
                            </li>
                        </ul>
                    </section>

                    <section
                        className={styles.linkGroup}
                        aria-labelledby="footer-product-links"
                    >
                        <h2
                            id="footer-product-links"
                            className={styles.linkGroupTitle}
                        >
                            Produto
                        </h2>
                        <ul className={styles.list}>
                            <li>
                                <Link to="/register" className={styles.link}>
                                    Criar conta
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" className={styles.link}>
                                    Entrar
                                </Link>
                            </li>
                            <li>
                                <Link to="/vendas" className={styles.link}>
                                    Falar com vendas
                                </Link>
                            </li>
                        </ul>
                    </section>
                </nav>
            </div>

            <div className={styles.bottomBar}>
                <p className={styles.copy}>
                    ©2026 EverRise. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
