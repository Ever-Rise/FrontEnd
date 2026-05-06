import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import Button from "../../common/Button";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <a href="/" className={styles.logo}>Ever Rise</a>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link to="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/sobre" className={styles.navLink}>
                Sobre Nos
              </Link>
            </li>
            <li>
              <Link to="/vendas" className={styles.navLink}>
                Vendas
              </Link>
            </li>
            <li>
              <Link to="/guincho" className={styles.navLink}>
                Info Guincho
              </Link>
            </li>
            <li>
              <Link to="/parceiros" className={styles.navLink}> parceiros </Link>
            </li>
          </ul>
        </nav>

        <Button texto="Login" link="/login" />

        

      </div>
    </header>
  );
};

export default Header;