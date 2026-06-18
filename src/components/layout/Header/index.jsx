import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import headerLogo from "../../../assets/images/Header/logo_sem_fundo.png";
import profileIcon from "../../../assets/icons/Header/icon_perfil.svg";

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

    const [isScrolled, setIsScrolled] = useState(false);

        useEffect(() => {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 0);
            };

            window.addEventListener("scroll", handleScroll);

            return () => window.removeEventListener("scroll", handleScroll);
        }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
            <div className={styles.container}>
                {/* Logo */}
                <div className={styles.logoWrapper}>
                    <Link to="/" className={styles.logo} aria-label="Ir para a página inicial">
                        <img
                            src={headerLogo}
                            alt="Ever Rise"
                            className={styles.logoImage}
                        />
                    </Link>
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
                                Sobre Nós
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/vendas" className={navLinkClassName}>
                                Venda
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/sobre-guincho" className={navLinkClassName}>
                                Sobre Guincho
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
                        <span className={styles.loginIconWrap} aria-hidden="true">
                            <img src={profileIcon} alt="" className={styles.loginIcon} />
                        </span>
                        Login
                        <span className={styles.loginChevron} aria-hidden="true" />
                    </Link>
                </div>

                {/* Hamburger mobile */}
                <button
                    className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
                    onClick={toggleMenu}
                    aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
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
                            to="/sobre-guincho"
                            className={mobileNavLinkClassName}
                            onClick={closeMenu}
                        >
                            Sobre Guincho
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
