import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string().email('Informe um e-mail valido'),
    password: z.string().min(6, 'A senha precisa ter no minimo 6 caracteres'),
});

export const registerStep1Schema = z
    .object({
        name: z.string().min(2, 'Nome muito curto'),
        email: z.string().email('Informe um e-mail valido'),
        confirmEmail: z.string().email('Confirme seu e-mail'),
    })
    .refine((data) => data.email === data.confirmEmail, {
        path: ['confirmEmail'],
        message: 'Os e-mails nao coincidem',
    });

export const registerStep2Schema = z
    .object({
        phone: z
            .string()
            .min(10, 'Informe um telefone valido')
            .regex(/^[\d\s()+-]+$/, 'Informe um telefone valido'),
        password: z.string().min(6, 'A senha precisa ter no minimo 6 caracteres'),
        confirmPassword: z.string().min(6, 'Confirme sua senha'),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ['confirmPassword'],
        message: 'As senhas nao coincidem',
    });

export const registerSchema = z
    .object({
        name: z.string().min(2, 'Nome muito curto'),
        email: z.string().email('Informe um e-mail valido'),
        confirmEmail: z.string().email('Confirme seu e-mail'),
        phone: z
            .string()
            .min(10, 'Informe um telefone valido')
            .regex(/^[\d\s()+-]+$/, 'Informe um telefone valido'),
        password: z.string().min(6, 'A senha precisa ter no minimo 6 caracteres'),
        confirmPassword: z.string().min(6, 'Confirme sua senha'),
    })
    .refine((data) => data.email === data.confirmEmail, {
        path: ['confirmEmail'],
        message: 'Os e-mails nao coincidem',
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ['confirmPassword'],
        message: 'As senhas nao coincidem',
    });

export const checkoutSchema = z.object({
    planId: z.string().min(1, 'Selecione um plano'),
    fullName: z.string().min(3, 'Informe seu nome completo'),
    document: z.string().min(11, 'Informe um documento valido'),
    email: z.string().email('Informe um e-mail valido'),
});
