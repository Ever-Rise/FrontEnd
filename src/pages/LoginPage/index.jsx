import React from 'react';
import styles from './styles.module.css';
import Olho from '../../assets/icons/eye.svg';
import Google from '../../assets/icons/Google - Original.svg';

const LoginPage = () => {
  return (
    <main className={styles.email}>
      <section className={styles.info} aria-labelledby="login-title">
        <section className={styles.acao_login}>
          <header>
            <h1 id="login-title">Bem-Vindo de volta</h1>
            <p>Insira seu e-mail e senha para acessar a sua conta.</p>
          </header>

          <form noValidate>
            <fieldset>
              <legend className={styles.linha}>Continuar com e-mail</legend>

              <div className={styles.lambel_email}>
                <label htmlFor="email">E-mail:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  maxLength={30}
                  size={50}
                  placeholder="Insira seu e-mail"
                  autoComplete="email"
                  required
                />
              </div>

              <div className={styles.lambel_senha}>
                <label htmlFor="senha">Senha:</label>
                <div className={styles.inputWrapper}>
                  <input
                    type="password"
                    id="senha"
                    name="senha"
                    maxLength={30}
                    size={50}
                    placeholder="Insira sua Senha"
                    autoComplete="current-password"
                    required
                  />
                  <button
                    type="button"
                    className={styles.olho}
                    aria-label="Mostrar ou ocultar senha"
                  >
                    <img src={Olho} alt="" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className={styles.recuperar}>
                <label>
                  <input type="checkbox" name="lembrar" /> Lembrar senha
                </label>
                <a href="#">Esqueceu sua senha?</a>
              </div>
            </fieldset>

            <button type="submit" className={styles.criar}>
              Criar conta
            </button>
          </form>

          <div className={styles.social}>
            <button type="button" className={styles.google}>
              <img src={Google} alt="" aria-hidden="true" />
              Continuar com Google
            </button>
          </div>

          <p className={styles.log_in}>
            Já tem uma conta? <a href="/login">Log in</a>
          </p>
        </section>
      </section>

      <aside className={styles.imagem} aria-hidden="true" />
    </main>
  );
};

export default LoginPage;