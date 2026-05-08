import React from 'react';
import styles from './styles.module.css';
import Assistente from '../../assets/icons/cadastro/assistente.svg';
import Mensagem from '../../assets/icons/cadastro/mensagem.svg';
import Interrogacao from '../../assets/icons/cadastro/interrogacao.svg';
import Seta from '../../assets/icons/cadastro/seta.svg';

const ForgotPasswordPage = () => {
  return (
    <main className={styles.recuperar_senha}>
      <article className={styles.infos_email}>
        <section className={styles.acao_recuperar} aria-labelledby="forgot-password-title">
          <header>
            <h1 id="forgot-password-title">Esqueceu sua senha?</h1>
            <p>Informe seu e-mail e enviaremos instruções para recuperar sua senha.</p>
          </header>

          <form className={styles.lambel_email_recuperar} noValidate>
            <label htmlFor="email">E-mail:</label>
            <input
              id="email"
              type="email"
              name="email"
              maxLength={30}
              size={50}
              placeholder="E-mail"
              aria-required="true"
              autoComplete="email"
            />
          </form>

          <nav className={styles.voltar_recuperar} aria-label="Navegação de retorno">
            <a href="#">
              <img src={Seta} alt="" aria-hidden="true" />
              Voltar para login
            </a>
            <hr />
          </nav>

          <aside className={styles.suporte_section} aria-labelledby="suporte-titulo">
            <h2 id="suporte-titulo">Suporte Prioritário</h2>
            <nav className={styles.suporte_recuperar} aria-label="Canais de suporte">
              <a href="#" aria-label="Falar com assistente">
                <img src={Assistente} alt="" aria-hidden="true" />
              </a>
              <a href="#" aria-label="Enviar mensagem">
                <img src={Mensagem} alt="" aria-hidden="true" />
              </a>
              <a href="#" aria-label="Perguntas frequentes">
                <img src={Interrogacao} alt="" aria-hidden="true" />
              </a>
            </nav>
          </aside>
        </section>
      </article>

      <figure className={styles.imagem} aria-hidden="true" role="presentation" />
    </main>
  );
};

export default ForgotPasswordPage;