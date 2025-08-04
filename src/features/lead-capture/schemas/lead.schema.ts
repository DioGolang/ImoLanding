import { z } from 'zod';

export const LeadSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email'),
    phone: z.string().optional(),
});

export type LeadFormData = z.infer<typeof LeadSchema>;
