import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const ValidationEmailPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Código validado / E-mail reenviado!");
  };

  return (
    <main className={styles.page}>
      {/* 15 Elementos decorativos para preencher a tela sem imagem */}
      <div className={`${styles.effect} ${styles.effectVal1}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectVal2}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectVal3}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectVal4}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectVal5}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectVal6}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectVal7}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectVal8}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectVal9}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectVal10}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectVal11}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectVal12}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectVal13}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectVal14}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectVal15}`} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.formCard}>
          <header className={styles.cardHeader}>
            <div className={styles.iconContainer}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className={styles.icon}
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h1>Valide seu e-mail</h1>
            <p>
              Enviamos um link de validação para o e-mail <strong>seuemail@gmail.com</strong>. 
              Insira o código abaixo ou clique no link recebido para confirmar seu cadastro.
            </p>
          </header>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            
            <div className={styles.field}>
              <input 
                id="codigo"
                type="text" 
                name="codigo"
                placeholder="Insira o código" 
                aria-label="Insira o código de validação"
                required
              />
            </div>
            
            <button type="submit" className={styles.primaryBtn}>
              Reenviar e-mail de validação
            </button>

          </form>

          <div className={styles.divider}>
            <span>ou</span>
          </div>

          <Link to="/forgot-password" className={styles.secondaryBtn}>
            &lt; Alterar e-mail
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ValidationEmailPage;