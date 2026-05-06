import React from 'react';
import styles from './styles.module.css';


const PAGE_NAME = 'Acesso da Plataforma';

const LoginPage = () => {
  return (
      <section className={styles.email}>
        <div className={styles.info}>
          <div className={styles.acao_login}>
          <h1>Bem-Vindo de volta</h1>
          <p>Insira seu e-mail e senha para acessar a sua conta.</p>
          <p className={styles.linha}>Continuar com e-mail </p>

          <div className={styles.lambel_email}>
            <label for="email">E-mail:</label>
            <input type="email" name='email' maxLength={30} size={50} placeholder='Insira seu e-mail' />
          </div>

          <div className={styles.lambel_senha}>
            <label for="senha">Senha:</label>
            <input type="password" name='senha' maxLength={30} size={50} placeholder='Insira sua Senha' />
          </div>

          <div className={styles.recuperar}>
              <label><input type="checkbox" /> Lembrar senha</label>
              <a href="#" >Esqueceu sua senha</a>
          </div>
          </div>

          <button className={styles.criar}>Criar conta</button>
          <button className={styles.google}>
             Continue with Google</button>
          <p className={styles.log_in}>Already Have An Acconunt? <a href="#">Log in</a></p>
        </div>

        <div className={styles.imagem}></div>
      </section>
  );
};

export default LoginPage;

