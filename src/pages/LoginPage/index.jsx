import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import styles from "./styles.module.css";
import eyeIcon from "../../assets/icons/login/eye.svg";
import googleIcon from "../../assets/icons/cadastro/Google - Original.svg";
import loginImage from "../../assets/images/Login/ImageLogin.svg";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, loading, error, isAuthenticated } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: location.state?.registeredEmail || "",
    password: "",
  });
  const redirectTo = location.state?.from?.pathname || "/dashboard";
  const registrationSuccess = Boolean(location.state?.registrationSuccess);

  useEffect(() => {
    if (isAuthenticated) {
      navigate(redirectTo, { replace: true });
    }
  }, [isAuthenticated, navigate, redirectTo]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    login({
      email: formData.email,
      senha: formData.password,
    });
  };

  return (
    <main className={styles.page}>
      {/* Elementos decorativos Originais */}
      <div className={`${styles.effect} ${styles.effectTopLeft}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectTopCenter}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectBottomLeft}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectBottomRight}`} aria-hidden="true" />

      {/* Novos Elementos decorativos adicionados */}
      <div className={`${styles.effect} ${styles.effectCenterLeft}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectMiddleRight}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectBottomCenter}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectTopRight}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectFarLeft}`} aria-hidden="true" />

      <div className={styles.container}>
        <section className={styles.loginSection}>
          <div className={styles.loginCard}>
            <header className={styles.cardHeader}>
              <h1>Bem vindo de volta</h1>
              <p>Insira seu e-mail e senha para acessar sua conta.</p>
            </header>

            {registrationSuccess && (
              <div className={styles.successMessage}>
                Cadastro concluído com sucesso. Faça login com seu e-mail e senha.
              </div>
            )}

            <div className={styles.divider}>
              <span>Continuar com e-mail</span>
            </div>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              {error && <div className={styles.errorMessage}>{error}</div>}

              <div className={styles.field}>
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Insira seu e-mail"
                  autoComplete="email"
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="password">Senha</label>
                <div className={styles.passwordWrapper}>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Senha"
                    autoComplete="current-password"
                    required
                  />
                  <button
                    type="button"
                    className={styles.togglePassword}
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    <img src={eyeIcon} alt="Alternar visibilidade" aria-hidden="true" />
                  </button>
                </div>
                <div className={styles.forgotWrapper}>
                  <Link to="/forgot-password" className={styles.forgotLink}>
                    Esqueceu sua senha
                  </Link>
                </div>
              </div>

              <button type="submit" className={styles.primaryBtn} disabled={loading}>
                {loading ? "Carregando..." : "Entrar"}
              </button>

              <button type="button" className={styles.googleBtn}>
                <img src={googleIcon} alt="Google" aria-hidden="true" />
                <span>Continuar com Google</span>
              </button>

              <p className={styles.footer}>
                Ainda não possui conta? <Link to="/register">Cadastre-se</Link>
              </p>

            </form>
          </div>
        </section>

        <section className={styles.imageSection}>
          <figure className={styles.imageCard}>
            <img src={loginImage} alt="Paciente utilizando equipamento" />
          </figure>
        </section>
      </div>
    </main>
  );
};

export default LoginPage;