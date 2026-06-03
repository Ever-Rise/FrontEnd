import { Link } from "react-router-dom";
import styles from "./styles.module.css";

import footerLogo from "../../../assets/images/Footer/imagem_footer.png";
import footerCurve from "../../../assets/images/Footer/Vector.svg";
import linkedInIcon from "../../../assets/icons/Footer/icon_linkedIn.svg";
import instagramIcon from "../../../assets/icons/Footer/icon_instagram.svg";
import githubIcon from "../../../assets/icons/Footer/icon_github.svg";

const companyLinks = [
  { label: "Sobre Nós", to: "/sobre" },
  { label: "Parceiros", to: "/parceiros" },
  { label: "Sustentabilidade", to: "/sustentabilidade" },
];

const guinchoLinks = [
  { label: "Mais Sobre o Guincho", to: "/produto" },
  { label: "Venda", to: "/vendas" },
  { label: "Manual do Guincho", to: "/manual" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/everrise-tech", icon: linkedInIcon },
  { label: "Instagram", href: "https://www.instagram.com/everrise.oficial", icon: instagramIcon },
  { label: "GitHub", href: "https://github.com/Ever-Rise", icon: githubIcon },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={footerCurve} alt="" aria-hidden="true" className={styles.topGraphic} />
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brandColumn}>
            <Link to="/" className={styles.brandLink} aria-label="Ir para a página inicial">
              <img
                src={footerLogo}
                alt="Ever Rise"
                className={styles.brandImage}
                loading="lazy"
              />
            </Link>

            <div className={styles.socialRow} aria-label="Redes sociais">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                >
                  <img src={social.icon} alt="" aria-hidden="true" className={styles.socialIcon} />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.linksGrid}>
            <nav className={styles.linkColumn} aria-label="Empresa">
              <h2 className={styles.columnTitle}>Empresa</h2>
              <ul className={styles.linkList}>
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className={styles.textLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className={styles.linkColumn} aria-label="Guincho">
              <h2 className={styles.columnTitle}>Guincho</h2>
              <ul className={styles.linkList}>
                {guinchoLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className={styles.textLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <div className={styles.legalLinks}>
            <Link to="/privacidade" className={styles.legalLink}>
              Política de Privacidade
            </Link>
            <Link to="/termos" className={styles.legalLink}>
              Termos e Condições
            </Link>
          </div>

          <p className={styles.copy}>©2026 EverRise Copyright.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;