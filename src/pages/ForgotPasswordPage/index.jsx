import React from 'react';
import styles from './styles.module.css';
import Assistente from '../../assets/icons/cadastro/assistente.svg';
import Mensagem from '../../assets/icons/cadastro/mensagem.svg';
import Interrogacao from '../../assets/icons/cadastro/interrogacao.svg';
import Seta from '../../assets/icons/cadastro/seta.svg';

const PAGE_NAME = 'Recuperar Senha';

const ForgotPasswordPage = () => {
  return (
    <section className={styles.recuperar_senha}>
      <div className={styles.infos_email}>
        <div className={styles.acao_recuperar}>
          <h1>Esqueceu sua senha?</h1>
          <p>Informe seu e-mail e enviaremos instruções para recuperar sua senha.</p>

          <div className={styles.lambel_email_recuperar}>
            <label for="senha">E-mail:</label>
            <input type="email" name='email' maxLength={30} size={50} placeholder='E-mail' />
          </div>

          <div className={styles.voltar_recuperar}>
            <a href="#"><img src={Seta} alt="seta" /> Voltar para login</a>
            <hr />
          </div>

          <h4>SUPORTE PRIORITARIO</h4>
          <div className={styles.suporte_recuperar}>
            <a href="#"><img src={Assistente} alt="icon assistente" /></a>
            <a href="#"><img src={Mensagem} alt="icon mensagem" /></a>
            <a href="#"><img src={Interrogacao} alt="icon interrogação" /></a>
          </div>
        </div>
      </div>

      <div className={styles.imagem}></div>
    </section>        

  );
};

export default ForgotPasswordPage;

