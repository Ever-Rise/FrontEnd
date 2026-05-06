import React from 'react';
import styles from './styles.module.css';
import Assistente from '../../assets/icons/cadastro/assistente.svg';
import Mensagem from '../../assets/icons/cadastro/mensagem.svg';
import Interrogacao from '../../assets/icons/cadastro/interrogacao.svg';
import Seta from '../../assets/icons/cadastro/seta.svg';

const RegisterPage = () => {
  return (
    <main className={styles.cadastro}>
      <section className={styles.infos} aria-labelledby="cadastro-titulo">

        <article className={styles.acao_cadastro}>
          <header>
            <h1 id="cadastro-titulo">Cadastre-se agora</h1>
            <p>Junte-se a Ever Rise e evolua com tecnologia.</p>
          </header>

          <form noValidate>
            <div className={styles.lambel_nome}>
              <label htmlFor="nome">Nome Completo:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                maxLength={30}
                size={50}
                placeholder="Nome Completo"
                autoComplete="name"
                required
              />
            </div>

            <div className={styles.lambel_email_cadas}>
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                id="email"
                name="email"
                maxLength={50}
                size={50}
                placeholder="E-mail"
                autoComplete="email"
                required
              />
            </div>

            <div className={styles.lambel_senha_cadas}>
              <label htmlFor="senha">Senha:</label>
              <input
                type="password"
                id="senha"
                name="senha"
                maxLength={30}
                size={50}
                placeholder="Senha"
                autoComplete="new-password"
                required
              />
            </div>

            <nav className={styles.voltar} aria-label="Navegação de retorno">
              <a href="/login">
                <img src={Seta} alt="" aria-hidden="true" />
                Voltar para login
              </a>
              <hr />
            </nav>
          </form>
        </article>

        <aside className={styles.suporte_container} aria-label="Suporte prioritário">
          <h2 className={styles.suporte_titulo}>Suporte Prioritário</h2>
          <nav className={styles.suporte} aria-label="Canais de suporte">
            <a href="#" aria-label="Falar com assistente virtual">
              <img src={Assistente} alt="Assistente virtual" />
            </a>
            <a href="#" aria-label="Enviar mensagem">
              <img src={Mensagem} alt="Mensagem" />
            </a>
            <a href="#" aria-label="Central de ajuda">
              <img src={Interrogacao} alt="Ajuda" />
            </a>
          </nav>
        </aside>

      </section>

      <figure className={styles.imagem} aria-hidden="true" role="presentation" />
    </main>
  );
};

export default RegisterPage;

