import React from 'react';
import styles from './styles.module.css';
import Relogio from '../../assets/icons/validação/relogio.svg';
import Seta from '../../assets/icons/cadastro/seta.svg';
import Email from '../../assets/icons/validação/email.svg';

const PAGE_NAME = 'Validação';

const ValidationEmailPage = () => {
  return (
    <main className={styles.validacao}>
      <article className={styles.pergunta}>
        <section className={styles.acao_validacao} aria-labelledby="validation-title">

          <figure aria-hidden="true">
            <img src={Email} alt="" />
          </figure>

          <h1 id="validation-title">Valide seu e-mail</h1>

          <p>
            Enviamos um link de validação para o e-mail{' '}
            <strong>seuemail@gmail.com</strong>. Clique no link para confirmar
            o seu Cadastro.
          </p>

          <aside className={styles.spam_aviso} aria-label="Dica sobre e-mail não recebido">
            <button type="button" className={styles.btn_email}>
              <img src={Relogio} alt="" aria-hidden="true" />
              <div className={styles.btn_email_texto}>
                <h2>Não recebeu o e-mail?</h2>
                <p>Verifique sua caixa de spam ou lixo eletrônico</p>
              </div>
            </button>
          </aside>

          <div className={styles.lambel_btn_reenciar}>
            <button type="button" className={styles.btn_reenviar}>
              Reenviar e-mail de validação
            </button>
          </div>

          <footer className={styles.voltar}>
            <p aria-hidden="true">ou</p>
            <hr />
            <nav aria-label="Navegação de retorno">
              <a href="#">
                <img src={Seta} alt="" aria-hidden="true" />
                Voltar para login
              </a>
            </nav>
          </footer>

        </section>
      </article>
    </main>
  );
};

export default ValidationEmailPage;