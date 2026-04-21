import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '../../common/Button';
import Input from '../../common/Input';
import { checkoutSchema } from '../../../utils/validators';
import { Container, Form } from './styles';

const CheckoutForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      planId: '',
      fullName: '',
      document: '',
      email: '',
    },
  });

  return (
    <Container>
      <Form onSubmit={handleSubmit((data) => onSubmit?.(data))} noValidate>
        <Input id='planId' label='Plano' placeholder='Plano Enterprise' error={errors.planId?.message} {...register('planId')} />
        <Input id='fullName' label='Nome completo' error={errors.fullName?.message} {...register('fullName')} />
        <Input id='document' label='CPF/CNPJ' error={errors.document?.message} {...register('document')} />
        <Input id='email' label='E-mail de cobranca' type='email' error={errors.email?.message} {...register('email')} />
        <Button type='submit' disabled={isSubmitting}>
          {isSubmitting ? 'Processando...' : 'Ir para pagamento'}
        </Button>
      </Form>
    </Container>
  );
};

export default CheckoutForm;
