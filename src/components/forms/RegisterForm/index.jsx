import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '../../common/Input';
import { REGISTER_ROLES, registerSchema } from '../../../utils/validators';
import styles from './styles.module.css';

const RegisterForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      role: REGISTER_ROLES[0],
      password: '',
      confirmPassword: '',
    },
  });

  return (
    <section className={styles.container} role='region'>
      <form className={styles.form} onSubmit={handleSubmit((data) => onSubmit?.(data))} noValidate>
        <Input id='name' label='Nome completo' error={errors.name?.message} {...register('name')} />
        <Input id='email' label='E-mail' type='email' error={errors.email?.message} {...register('email')} />
        <div className={styles.field}>
          <label htmlFor='role'>Tipo de acesso</label>
          <select id='role' {...register('role')}>
            <option value='FAMILIA'>Família</option>
            <option value='VISITANTE'>Visitante</option>
          </select>
          {errors.role?.message ? <span className={styles.errorText}>{errors.role.message}</span> : null}
        </div>
        <Input id='password' label='Senha' type='password' error={errors.password?.message} {...register('password')} />
        <Input
          id='confirmPassword'
          label='Confirmar senha'
          type='password'
          error={errors.confirmPassword?.message}
          {...register('confirmPassword')}
        />
        <button type='submit' disabled={isSubmitting} className={styles.submitButton}>
          {isSubmitting ? 'Cadastrando...' : 'Criar conta'}
        </button>
      </form>
    </section>
  );
};

export default RegisterForm;
