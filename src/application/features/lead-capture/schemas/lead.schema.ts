import { z } from 'zod';

export const LeadSchema = z.object({
    name: z.string().min(3, { message: 'O nome deve ter no mínimo 3 caracteres.' }),
    email: z.string().email({ message: 'Por favor, insira um e-mail válido.' }),
    phone: z.string().min(10, { message: 'numero invalido' }),
});

export type LeadFormData = z.infer<typeof LeadSchema>;