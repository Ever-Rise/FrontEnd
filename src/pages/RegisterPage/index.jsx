import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import authService from '../../services/authService';
import { REGISTER_ROLES, registerSchema, registerStep1Schema } from '../../utils/validators';
import { getRegisterStepFromSearch } from '../../router/registerRoutes';
import StepIdentity from './steps/StepIdentity';
import StepCredentials from './steps/StepCredentials';
import styles from './styles.module.css';
import imagemLateral from '../../assets/images/Register/imagem_principal.png';

export default function RegisterPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [submitError, setSubmitError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const etapaAtual = getRegisterStepFromSearch(`?${searchParams.toString()}`);

  const defaultEmail = useMemo(() => location.state?.registeredEmail || '', [location.state]);

  const {
    register,
    handleSubmit,
    getValues,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: '',
      email: defaultEmail,
      role: REGISTER_ROLES[0],
      password: '',
      confirmPassword: '',
    },
    mode: 'onTouched',
  });

  useEffect(() => {
    if (location.state?.registeredEmail) {
      setSubmitError('');
    }
  }, [location.state]);

  const isStepTwo = etapaAtual === 2;

  const goToStepTwo = async () => {
    setSubmitError('');
    clearErrors();

    const { name, email, role } = getValues();
    const validation = registerStep1Schema.safeParse({ name, email, role });

    if (validation.success) {
      setSearchParams({ etapa: '2' });
      return;
    }

    validation.error.issues.forEach((issue) => {
      const fieldName = issue.path[0];
      if (fieldName) {
        setError(fieldName, { type: 'manual', message: issue.message });
      }
    });
  };

  const goBackToStepOne = () => {
    setSubmitError('');
    setSearchParams({ etapa: '1' });
  };

  const handleRegister = handleSubmit(async () => {
    setSubmitError('');
    clearErrors();

    const values = getValues();
    const validation = registerSchema.safeParse(values);

    if (!validation.success) {
      validation.error.issues.forEach((issue) => {
        const fieldName = issue.path[0];
        if (fieldName) {
          setError(fieldName, { type: 'manual', message: issue.message });
        }
      });
      return;
    }

    try {
      await authService.register({
        nome: validation.data.name.trim(),
        email: validation.data.email.trim(),
        senha: validation.data.password,
        role: validation.data.role,
      });

      navigate('/login', {
        replace: true,
        state: {
          registeredEmail: validation.data.email.trim(),
          registrationSuccess: true,
        },
      });
    } catch (error) {
      const status = error?.response?.status;
      const backendMessage = error?.response?.data?.message;

      if (status === 400 && backendMessage) {
        setSubmitError(backendMessage);
        return;
      }

      if (status === 500) {
        setSubmitError('Nao foi possivel concluir o cadastro. Verifique se o e-mail ja esta em uso.');
        return;
      }

      setSubmitError(backendMessage || 'Nao foi possivel concluir o cadastro. Tente novamente.');
    }
  });

  return (
    <main className={styles.page}>
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
              <p>Preencha os dados abaixo para iniciar.</p>
            </header>

            {submitError && <div className={styles.errorMessage}>{submitError}</div>}

            <form
              className={styles.form}
              onSubmit={isStepTwo ? handleRegister : (e) => { e.preventDefault(); goToStepTwo(); }}
              noValidate
            >
              {!isStepTwo ? (
                <StepIdentity styles={styles} register={register} errors={errors} />
              ) : (
                <StepCredentials
                  styles={styles}
                  register={register}
                  errors={errors}
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  showConfirmPassword={showConfirmPassword}
                  setShowConfirmPassword={setShowConfirmPassword}
                />
              )}

              <div className={styles.buttonGroup}>
                {!isStepTwo ? (
                  <button type="button" onClick={goToStepTwo} className={styles.primaryBtn} disabled={isSubmitting}>
                    Continuar Cadastro
                  </button>
                ) : (
                  <>
                    <button type="button" onClick={goBackToStepOne} className={styles.secondaryBtn} disabled={isSubmitting}>
                      Voltar
                    </button>
                    <button type="submit" className={styles.primaryBtn} disabled={isSubmitting}>
                      {isSubmitting ? 'Criando conta...' : 'Finalizar Cadastro'}
                    </button>
                  </>
                )}
              </div>
            </form>

            <p className={styles.footer}>
              Já possui uma conta? <Link to="/login">Entrar</Link>
            </p>
          </div>
        </section>

        <section className={styles.imageSection}>
          <figure className={styles.imageCard}>
            <img src={imagemLateral} alt="EverRise Patient Transfer Device" />
          </figure>
        </section>
      </div>
    </main>
  );
}