import React, { useState } from "react";
import styles from "./styles.module.css";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const closeMenu = () => setMenuOpen(false);
    const isLoginPage = location.pathname === "/login";
    const navLinkClassName = ({ isActive }) =>
        `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`;
    const mobileNavLinkClassName = ({ isActive }) =>
        `${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ""}`;

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* Logo */}
                <div className={styles.logoWrapper}>
                    <a href="/" className={styles.logo}>
                        Ever Rise
                    </a>
                </div>

                {/* Nav desktop */}
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li>
                            <NavLink to="/" end className={navLinkClassName}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/sobre" className={navLinkClassName}>
                                Sobre Nos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/vendas" className={navLinkClassName}>
                                Vendas
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/produto" className={navLinkClassName}>
                                Info Guincho
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/parceiros"
                                className={navLinkClassName}
                            >
                                Parceiros
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/sustentabilidade"
                                className={navLinkClassName}
                            >
                                Sustentabilidade
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* Login desktop */}
                <div className={styles.desktopLogin}>
                    <Link
                        to="/login"
                        className={`${styles.loginLink} ${isLoginPage ? styles.loginLinkActive : ""}`}
                    >
                        Login
                    </Link>
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
            <div
                className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
            >
                <ul className={styles.mobileNavList}>
                    <li>
                        <NavLink
                            to="/"
                            end
                            className={mobileNavLinkClassName}
                            onClick={closeMenu}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/sobre"
                            className={mobileNavLinkClassName}
                            onClick={closeMenu}
                        >
                            Sobre Nos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/vendas"
                            className={mobileNavLinkClassName}
                            onClick={closeMenu}
                        >
                            Vendas
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/produto"
                            className={mobileNavLinkClassName}
                            onClick={closeMenu}
                        >
                            Info Guincho
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/parceiros"
                            className={mobileNavLinkClassName}
                            onClick={closeMenu}
                        >
                            Parceiros
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/sustentabilidade"
                            className={mobileNavLinkClassName}
                            onClick={closeMenu}
                        >
                            Sustentabilidade
                        </NavLink>
                    </li>
                </ul>
                <div className={styles.mobileLoginWrapper}>
                    <Link
                        to="/login"
                        className={`${styles.loginLink} ${styles.mobileLoginLink} ${isLoginPage ? styles.loginLinkActive : ""}`}
                        onClick={closeMenu}
                    >
                        Login
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
