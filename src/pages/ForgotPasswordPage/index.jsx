import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importado useNavigate
import styles from './styles.module.css';
import imagemLateral from '../../assets/images/Forgot/imagem_principal.png';

const ForgotPasswordPage = () => {
  const navigate = useNavigate(); // Inicializado o hook de navegação

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aqui você pode adicionar a lógica de validação do e-mail
    console.log("Enviando e-mail para recuperação...");
    
    // Redireciona para a tela de validação
    navigate('/email-validation');
  };

  return (
    <main className={styles.page}>
      {/* 9 Elementos decorativos exclusivos da Recuperação de Senha */}
      <div className={`${styles.effect} ${styles.effectFgt1}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectFgt2}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectFgt3}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectFgt4}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectFgt5}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectFgt6}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectFgt7}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectFgt8}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectFgt9}`} aria-hidden="true" />

      <div className={styles.container}>
        <section className={styles.formSection}>
          <div className={styles.formCard}>
            <header className={styles.cardHeader}>
              <h1>Esqueceu sua senha?</h1>
              <p>Insira seu e-mail abaixo para receber um código de recuperação.</p>
            </header>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              
              <div className={styles.field}>
                <label htmlFor="email">E-mail</label>
                <input 
                  id="email"
                  type="email" 
                  name="email"
                  placeholder="Insira seu e-mail" 
                  autoComplete="email"
                  required
                />
              </div>
              
              {/* Botão sem a tag <link> interna, disparando o handleSubmit */}
              <button type="submit" className={styles.primaryBtn}>
                Enviar código
              </button>

            </form>

            <div className={styles.divider}>
              <span>ou</span>
            </div>

            <Link to="/login" className={styles.secondaryBtn}>
              &lt; Voltar para o login
            </Link>
          </div>
        </section>

        <section className={styles.imageSection}>
          <figure className={styles.imageCard}>
            <img 
              src={imagemLateral} 
              alt="Paciente utilizando equipamento de transferência" 
            />
          </figure>
        </section>
      </div>
    </main>
  );
};

export default ForgotPasswordPage;