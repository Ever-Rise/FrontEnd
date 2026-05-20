import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brandBlock}>
                    <Link to="/" className={styles.brand}>
                        Ever Rise
                    </Link>
                    <p className={styles.description}>
                        Controle operacional claro, rápido e focado em quem
                        precisa responder sem ruído.
                    </p>
                </div>

                <nav className={styles.nav} aria-label="Links do rodape">
                    <div>
                        <p className={styles.navTitle}>Empresa</p>
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
                    </div>

                    <div>
                        <p className={styles.navTitle}>Produto</p>
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
                    </div>
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
