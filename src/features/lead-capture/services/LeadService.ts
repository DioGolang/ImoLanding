import { LeadFormData } from '../schemas/lead.schema';
import { LeadEntity } from '@/entities/lead/Lead';
import { apiClient } from '@/lib/api-client';

export const LeadService = {
    async submitLead(data: LeadFormData): Promise<LeadEntity> {
        const response = await apiClient.post('/leads', data);
        return new LeadEntity(response.data);
    },
};
