import React from 'react';
import styles from './styles.module.css';
import Assistente from '../../img/assistente.png'
import Mensagem from '../../img/mensagem.png'
import Interrogacao from '../../assets/icons/interrogacao.png'
import Seta from '../../img/seta.png'

const PAGE_NAME = 'Cadastro';

const RegisterPage = () => {
  return (
    <section className={styles.cadastro}>
            <div className={styles.infos}>
              <div className={styles.acao_cadastro}>
              <h1>Cadastre-se agora</h1>
              <p>Junte-se a Ever Rise e evolua com tecnologia.</p>
    
              <div className={styles.lambel_nome}>
                <label for="nome">Nome Completo:</label>
                <input type="text" name='nome' maxLength={30} size={50} placeholder='Nome Completo' />
              </div>
    
              <div className={styles.lambel_email_cadas}>
                <label for="senha">E-mail:</label>
                <input type="email" name='email' maxLength={30} size={50} placeholder='E-mail' />
              </div>

              <div className={styles.lambel_senha_cadas}>
                <label for="senha">Senha:</label>
                <input type="password" name='senha' maxLength={30} size={50} placeholder='Senha' />
              </div>

              <div className={styles.voltar}>
                <a href="#"> <img src={Seta} alt="seta" /> Voltar para login</a>
                <hr />
              </div>
              </div>

              <h4>SUPORTE PRIORITARIO</h4>
              <div className={styles.suporte}>
                <a href="#"><img src={Assistente} alt="icon assistente" /></a>
                <a href="#"><img src={Mensagem} alt="icon mensagem" /></a>
                <a href="#"><img src={Interrogacao} alt="icon interrogação" /></a>
              </div>
            </div>
    
            <div className={styles.imagem}></div>
          </section>
  );
};

export default RegisterPage;

