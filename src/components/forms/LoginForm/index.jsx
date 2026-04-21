import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '../../common/Button';
import Input from '../../common/Input';
import { loginSchema } from '../../../utils/validators';
import { Form, Container } from './styles';

const LoginForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <Container>
      <Form onSubmit={handleSubmit((data) => onSubmit?.(data))} noValidate>
        <Input
          id='email'
          label='E-mail'
          type='email'
          placeholder='seu@email.com'
          error={errors.email?.message}
          {...register('email')}
        />
        <Input
          id='password'
          label='Senha'
          type='password'
          placeholder='Sua senha'
          error={errors.password?.message}
          {...register('password')}
        />
        <Button type='submit' disabled={isSubmitting}>
          {isSubmitting ? 'Entrando...' : 'Entrar'}
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
