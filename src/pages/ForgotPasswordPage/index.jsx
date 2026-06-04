import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import imagemLateral from '../../assets/images/Forgot/imagem_principal.png';

const ForgotPasswordPage = () => {
  return (
    <div className={styles.container}>
      {/* Linhas decorativas de fundo */}
      <div className={`${styles.line} ${styles.lineOrange1}`}></div>
      <div className={`${styles.line} ${styles.linePurple1}`}></div>
      <div className={`${styles.line} ${styles.lineOrange2}`}></div>
      <div className={`${styles.line} ${styles.linePurple2}`}></div>
      <div className={`${styles.line} ${styles.linePurple3}`}></div>

      {/* Conteúdo Principal Dividido */}
      <div className={styles.mainContent}>
        
        {/* Lado Esquerdo: Card de Formulário */}
        <div className={styles.card}>
          <h1 className={styles.title}>Esqueceu sua senha?</h1>
          
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>E-mail</label>
              <input 
                id="email"
                type="email" 
                placeholder="Insira seu email" 
                className={styles.input} 
                required
              />
            </div>
            
            <button type="submit" className={styles.buttonSubmit}>
              Enviar código
            </button>
          </form>

          <div className={styles.dividerContainer}>
            <div className={styles.lineDivider}></div>
          </div>

          <Link to="/login" className={styles.buttonBack}>
            &lt; Voltar para login
          </Link>
        </div>

        {/* Lado Direito: Imagem */}
        <div className={styles.imageContainer}>
          <img 
            src={imagemLateral} 
            alt="Pessoa utilizando equipamento de transferência" 
            className={styles.image}
          />
        </div>

      </div>
    </div>
  );
};

export default ForgotPasswordPage;