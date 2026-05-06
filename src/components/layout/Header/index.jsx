import React, { useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import Button from "../../common/Button";
 
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 
  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);
 
  return (
    <header className={styles.header}>
      <div className={styles.container}>
 
        {/* Logo */}
        <div className={styles.logoWrapper}>
          <a href="/" className={styles.logo}>Ever Rise</a>
        </div>
 
        {/* Nav desktop */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link to="/" className={styles.navLink}>Home</Link>
            </li>
            <li>
              <Link to="/sobre" className={styles.navLink}>Sobre Nos</Link>
            </li>
            <li>
              <Link to="/vendas" className={styles.navLink}>Vendas</Link>
            </li>
            <li>
              <Link to="/guincho" className={styles.navLink}>Info Guincho</Link>
            </li>
            <li>
              <Link to="/parceiros" className={styles.navLink}>Parceiros</Link>
            </li>
          </ul>
        </nav>
 
        {/* Login desktop */}
        <div className={styles.desktopLogin}>
          <Button texto="Login" link="/login" />
        </div>
 
        {/* Hamburger mobile */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          <span />
          <span />
          <span />
        </button>
 
      </div>
 
      {/* Menu mobile */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <ul className={styles.mobileNavList}>
          <li>
            <Link to="/" className={styles.mobileNavLink} onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/sobre" className={styles.mobileNavLink} onClick={closeMenu}>Sobre Nos</Link>
          </li>
          <li>
            <Link to="/vendas" className={styles.mobileNavLink} onClick={closeMenu}>Vendas</Link>
          </li>
          <li>
            <Link to="/guincho" className={styles.mobileNavLink} onClick={closeMenu}>Info Guincho</Link>
          </li>
          <li>
            <Link to="/parceiros" className={styles.mobileNavLink} onClick={closeMenu}>Parceiros</Link>
          </li>
        </ul>
        <div className={styles.mobileLoginWrapper} onClick={closeMenu}>
          <Button texto="Login" link="/login" />
        </div>
      </div>
 
    </header>
  );
};
 
export default Header;