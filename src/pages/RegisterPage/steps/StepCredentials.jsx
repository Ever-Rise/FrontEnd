import React from 'react';
import eyeIcon from '../../../assets/icons/login/eye.svg';

const PasswordField = ({
  styles,
  id,
  label,
  placeholder,
  autoComplete,
  register,
  error,
  show,
  onToggle,
}) => (
  <div className={styles.field}>
    <label htmlFor={id}>{label}</label>
    <div className={styles.passwordWrapper}>
      <input
        id={id}
        type={show ? 'text' : 'password'}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...register}
      />
      <button
        type="button"
        className={styles.togglePassword}
        onClick={onToggle}
        aria-label={show ? 'Ocultar senha' : 'Mostrar senha'}
      >
        <img src={eyeIcon} alt="" aria-hidden="true" />
      </button>
    </div>
    {error && (
      <span id={`${id}-error`} className={styles.fieldError} role="alert">
        {error.message}
      </span>
    )}
  </div>
);

const StepCredentials = ({
  styles,
  register,
  errors,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword,
}) => (
  <>
    <PasswordField
      styles={styles}
      id="register-password"
      label="Senha"
      placeholder="Crie uma senha"
      autoComplete="new-password"
      register={register('password')}
      error={errors.password}
      show={showPassword}
      onToggle={() => setShowPassword((prev) => !prev)}
    />

    <PasswordField
      styles={styles}
      id="register-confirm-password"
      label="Confirmar senha"
      placeholder="Repita a senha"
      autoComplete="new-password"
      register={register('confirmPassword')}
      error={errors.confirmPassword}
      show={showConfirmPassword}
      onToggle={() => setShowConfirmPassword((prev) => !prev)}
    />
  </>
);

export default StepCredentials;