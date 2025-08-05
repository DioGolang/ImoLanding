import { z } from 'zod';
import { LeadSchema } from '../schemas/lead.schema';

export type LeadFormData = z.infer<typeof LeadSchema>;

export interface LeadDTO {
    id: string;
    name: string;
    email: string;
    phone?: string;
    createdAt: string; // ISO 8601
}