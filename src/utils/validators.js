import { z } from 'zod';

export const REGISTER_ROLES = ['FAMILIA', 'VISITANTE'];

export const loginSchema = z.object({
    email: z.string().email('Informe um e-mail valido'),
    password: z.string().min(6, 'A senha precisa ter no minimo 6 caracteres'),
});

export const registerStep1Schema = z
    .object({
        name: z.string().min(2, 'Nome muito curto'),
        email: z.string().email('Informe um e-mail valido'),
        role: z.enum(REGISTER_ROLES, {
            required_error: 'Selecione o tipo de acesso',
        }),
    });

export const registerStep2Schema = z
    .object({
        password: z.string().min(8, 'A senha precisa ter no minimo 8 caracteres'),
        confirmPassword: z.string().min(8, 'Confirme sua senha'),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ['confirmPassword'],
        message: 'As senhas nao coincidem',
    });

export const registerSchema = z
    .object({
        name: z.string().min(2, 'Nome muito curto'),
        email: z.string().email('Informe um e-mail valido'),
        role: z.enum(REGISTER_ROLES, {
            required_error: 'Selecione o tipo de acesso',
        }),
        password: z.string().min(8, 'A senha precisa ter no minimo 8 caracteres'),
        confirmPassword: z.string().min(8, 'Confirme sua senha'),
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
