import React from 'react';

const StepIdentity = ({ styles, register, errors }) => (
  <>
    <div className={styles.field}>
      <label htmlFor="register-name">Nome Completo</label>
      <input
        id="register-name"
        type="text"
        placeholder="Insira seu nome completo"
        autoComplete="name"
        aria-invalid={Boolean(errors.name)}
        aria-describedby={errors.name ? 'register-name-error' : undefined}
        {...register('name')}
      />
      {errors.name && (
        <span id="register-name-error" className={styles.fieldError} role="alert">
          {errors.name.message}
        </span>
      )}
    </div>

    <div className={styles.field}>
      <label htmlFor="register-email">E-mail</label>
      <input
        id="register-email"
        type="email"
        placeholder="Insira seu e-mail"
        autoComplete="email"
        aria-invalid={Boolean(errors.email)}
        aria-describedby={errors.email ? 'register-email-error' : undefined}
        {...register('email')}
      />
      {errors.email && (
        <span id="register-email-error" className={styles.fieldError} role="alert">
          {errors.email.message}
        </span>
      )}
    </div>

    <div className={styles.field}>
      <label htmlFor="register-confirm-email">Confirmar e-mail</label>
      <input
        id="register-confirm-email"
        type="email"
        placeholder="Confirme seu e-mail"
        autoComplete="email"
        aria-invalid={Boolean(errors.confirmEmail)}
        aria-describedby={errors.confirmEmail ? 'register-confirm-email-error' : undefined}
        {...register('confirmEmail')}
      />
      {errors.confirmEmail && (
        <span id="register-confirm-email-error" className={styles.fieldError} role="alert">
          {errors.confirmEmail.message}
        </span>
      )}
    </div>
  </>
);

export default StepIdentity;