import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRegisterWizard } from './hooks/useRegisterWizard';
import StepIdentity from "./steps/StepIdentity";
import StepCredentials from "./steps/StepCredentials";
import styles from './styles.module.css';

// Substitua pelo caminho correto da sua imagem
import imagemLateral from '../../assets/images/Register/imagem_principal.png'; 

export default function RegisterPage() {
  const { etapaAtual, avancarEtapa, voltarEtapa } = useRegisterWizard();
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const mockRegister = (name) => ({
    name,
    onChange: (e) => console.log(`Digitando no campo: ${name}`),
  });

  const mockErrors = {};

  const handleSubmitFinal = (e) => {
    e.preventDefault();
    alert('Cadastro finalizado com sucesso! (Simulação Visual)');
  };

  return (
    <main className={styles.page}>
      {/* Elementos decorativos (Posições exclusivas do Cadastro) */}
      <div className={`${styles.effect} ${styles.effectReg1}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectReg2}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectReg3}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectReg4}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectReg5}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectReg6}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectReg7}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectReg8}`} aria-hidden="true" />
      <div className={`${styles.effect} ${styles.effectReg9}`} aria-hidden="true" />

      <div className={styles.container}>
        <section className={styles.formSection}>
          <div className={styles.formCard}>
            <header className={styles.cardHeader}>
              <h1>Crie sua conta</h1>
              <p>Preencha os dados abaixo para iniciar ({etapaAtual} de 2).</p>
            </header>

            <form className={styles.form} onSubmit={etapaAtual === 2 ? handleSubmitFinal : avancarEtapa} noValidate>
              
              {/* ============ ETAPA 1 ============ */}
              {etapaAtual === 1 && (
                <>
                  <StepIdentity 
                    styles={styles} 
                    register={mockRegister} 
                    errors={mockErrors} 
                  />
                  <button type="submit" className={styles.primaryBtn}>
                      Continuar Cadastro
                    </button>
                </>
              )}

              {/* ============ ETAPA 2 ============ */}
              {etapaAtual === 2 && (
                <>
                  <StepCredentials 
                    styles={styles} 
                    register={mockRegister} 
                    errors={mockErrors}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    showConfirmPassword={showConfirmPassword}
                    setShowConfirmPassword={setShowConfirmPassword}
                  />
                  
                  <div className={styles.buttonGroup}>
                    <button type="button" onClick={voltarEtapa} className={styles.secondaryBtn}>
                      Voltar
                    </button>
                    <button type="submit" className={styles.primaryBtn}>
                      Finalizar Cadastro
                    </button>
                  </div>
                </>
              )}

            </form>

            <p className={styles.footer}>
              Já possui uma conta? <Link to="/login">Entrar</Link>
            </p>
          </div>
        </section>

        <section className={styles.imageSection}>
          <figure className={styles.imageCard}>
            <img 
              src={imagemLateral} 
              alt="EverRise Patient Transfer Device" 
            />
          </figure>
        </section>
      </div>
    </main>
  );
}