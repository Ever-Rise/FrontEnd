import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import eyeIcon from "../../assets/icons/login/eye.svg";
import googleIcon from "../../assets/icons/cadastro/Google - Original.svg";
import loginImage from "../../assets/images/Login/ImageLogin.svg";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Integração com Spring Boot (Ajuste a URL conforme sua API)
      const response = await fetch("http://localhost:8080/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Credenciais inválidas");
      }

      const data = await response.json();
      // localStorage.setItem("token", data.token);
      // navigate("/dashboard");
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
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
                  placeholder="Insira seu email"
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
                {loading ? "Carregando..." : "Criar conta"}
              </button>

              <button type="button" className={styles.googleBtn}>
                <img src={googleIcon} alt="Google" aria-hidden="true" />
                <span>Continue with Google</span>
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