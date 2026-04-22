import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '../../common/Button';
import Input from '../../common/Input';
import { registerSchema } from '../../../utils/validators';
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
      password: '',
      confirmPassword: '',
    },
  });

  return (
    <section className={styles.container} role='region'>
      <form className={styles.form} onSubmit={handleSubmit((data) => onSubmit?.(data))} noValidate>
        <Input id='name' label='Nome completo' error={errors.name?.message} {...register('name')} />
        <Input id='email' label='E-mail' type='email' error={errors.email?.message} {...register('email')} />
        <Input id='password' label='Senha' type='password' error={errors.password?.message} {...register('password')} />
        <Input
          id='confirmPassword'
          label='Confirmar senha'
          type='password'
          error={errors.confirmPassword?.message}
          {...register('confirmPassword')}
        />
        <Button type='submit' disabled={isSubmitting}>
          {isSubmitting ? 'Cadastrando...' : 'Criar conta'}
        </Button>
      </form>
    </section>
  );
};

export default RegisterForm;
