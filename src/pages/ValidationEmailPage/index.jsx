import React from 'react';
import styles from './styles.module.css';
import Relogio from '../../assets/icons/validação/relogio.svg';
import Seta from '../../assets/icons/cadastro/seta.svg';
import Email from '../../assets/icons/validação/email.svg';
import { Link } from 'react-router-dom';

const PAGE_NAME = 'Validação';

const ValidationEmailPage = () => {
  return (
      <div className={styles.container}>
      {/* Linhas decorativas de fundo */}
      <div className={`${styles.line} ${styles.lineOrange1}`}></div>
      <div className={`${styles.line} ${styles.linePurple1}`}></div>
      <div className={`${styles.line} ${styles.lineOrange2}`}></div>
      <div className={`${styles.line} ${styles.linePurple2}`}></div>
      <div className={`${styles.line} ${styles.linePurple3}`}></div>

      {/* Card Principal */}
      <div className={styles.card}>
        {/* Ícone de Email */}
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

        <h1 className={styles.title}>Valide seu e-mail</h1>
        
        <p className={styles.description}>
          Enviamos um link de validação para o e-mail <strong>seuemail@gmail.com</strong>. 
          Clique no link para confirmar o seu Cadastro
        </p>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.inputWrapper}>
            <input 
              type="text" 
              placeholder="Insira código" 
              className={styles.input} 
              aria-label="Insira o código de validação"
            />
          </div>
          
          <button type="submit" className={styles.buttonSubmit}>
            Reenviar e-mail de validação
          </button>
        </form>

        <div className={styles.dividerContainer}>
          <div className={styles.lineDivider}></div>
          <span className={styles.dividerText}>ou</span>
          <div className={styles.lineDivider}></div>
        </div>

        <button className={styles.buttonBack}>
        <Link to="/forgot-password" className={styles.buttonBack}>
          &lt; Alterar e-mail
        </Link>
        </button>
      </div>
    </div>
  );
};

export default ValidationEmailPage;