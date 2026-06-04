import React, { useState } from 'react';
import { useRegisterWizard } from './hooks/useRegisterWizard';
import StepIdentity from "./steps/StepIdentity";
import StepCredentials from "./steps/StepCredentials";
import styles from './styles.module.css';

// Substitua pelo caminho correto da sua imagem do guincho/paciente
import imagemLateral from '../../assets/images/Register/imagem_principal.png'; 

export default function RegisterPage() {
  const { etapaAtual, avancarEtapa, voltarEtapa } = useRegisterWizard();
  
  // Estados locais para controlar a visualização das senhas do subcomponente
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Mock simulado do 'register' do react-hook-form para o visual funcionar sem quebrar
  const mockRegister = (name) => ({
    name,
    onChange: (e) => console.log(`Digitando no campo: ${name}`),
  });

  // Mock de erros vazio para não travar a renderização visual
  const mockErrors = {};

  const handleSubmitFinal = (e) => {
    e.preventDefault();
    alert('Cadastro finalizado com sucesso! (Simulação Visual)');
  };

  return (
    <div className={styles.container}>
      {/* Linhas decorativas de fundo */}
      <div className={`${styles.line} ${styles.lineOrange1}`}></div>
      <div className={`${styles.line} ${styles.linePurple1}`}></div>
      <div className={`${styles.line} ${styles.lineOrange2}`}></div>
      <div className={`${styles.line} ${styles.linePurple2}`}></div>

      <div className={styles.mainContent}>
        
        {/* Lado Esquerdo: Card de Formulário */}
        <div className={styles.card}>
          <h1 className={styles.title}>Cadastro</h1>

          <form onSubmit={etapaAtual === 2 ? handleSubmitFinal : avancarEtapa}>
            <div className={styles.formContent}>
              
              {/* ============ ETAPA 1 ============ */}
              {etapaAtual === 1 && (
                <>
                  <StepIdentity 
                    styles={styles} 
                    register={mockRegister} 
                    errors={mockErrors} 
                  />
                  <button type="submit" className={styles.buttonSubmit}>
                    Continuar Cadastro &gt;
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
                    <button type="button" onClick={voltarEtapa} className={styles.buttonBack}>
                      &lt; Voltar anterior
                    </button>
                    <button type="submit" className={styles.buttonSubmit}>
                      Finalizar Cadastro
                    </button>
                  </div>
                </>
              )}

            </div>
          </form>
        </div>

        {/* Lado Direito: Imagem Ilustrativa do Produto */}
        <div className={styles.imageContainer}>
          <img 
            src={imagemLateral} 
            alt="EverRise Patient Transfer Device" 
            className={styles.image}
          />
        </div>

      </div>
    </div>
  );
}