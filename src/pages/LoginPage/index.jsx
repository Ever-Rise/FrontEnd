import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import eyeIcon from "../../assets/icons/login/eye.svg";
import googleIcon from "../../assets/icons/cadastro/Google - Original.svg";
import loginImage from "../../assets/images/Login/Imagem_principal.png";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className={styles.page}>
      <div className={styles.effectTopLeft} aria-hidden="true" />
      <div className={styles.effectBottomLeft} aria-hidden="true" />
      <div className={styles.effectTopRight} aria-hidden="true" />
      <div className={styles.effectBottomRight} aria-hidden="true" />

      <div className={styles.content}>
        <section className={styles.loginCard} aria-labelledby="login-title">
          <header className={styles.cardHeader}>
            <h1 id="login-title">Bem vindo de volta</h1>
            <p>Insira seu e-mail e senha para acessar sua conta.</p>
          </header>

          <div className={styles.divider}>
            <span>Continuar com e-mail</span>
          </div>

          <form className={styles.form} noValidate>
            <div className={styles.field}>
              <label htmlFor="login-email">E-mail</label>
              <input
                id="login-email"
                type="email"
                name="email"
                placeholder="Insira seu email"
                autoComplete="email"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="login-password">Password</label>
              <div className={styles.passwordWrapper}>
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Senha"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className={styles.togglePassword}
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                >
                  <img src={eyeIcon} alt="" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className={styles.options}>
              <label className={styles.remember}>
                <input type="checkbox" name="remember" />
                <span className={styles.checkmark} aria-hidden="true" />
              </label>
              <Link to="/forgot-password" className={styles.forgotLink}>
                Esqueceu sua senha
              </Link>
            </div>

            <button type="submit" className={styles.primaryBtn}>
              Criar conta
            </button>

            <button type="button" className={styles.googleBtn}>
              <img src={googleIcon} alt="" aria-hidden="true" />
              <span>Continue with Google</span>
            </button>

            <p className={styles.footer}>
              Não tem uma conta? <Link to="/register">Cadastre-se</Link>
            </p>
          </form>
        </section>

        <figure className={styles.imageCard}>
          <img src={loginImage} alt="Paciente utilizando equipamento de mobilidade em ambiente residencial" />
        </figure>
      </div>
    </main>
  );
};

export default LoginPage;
