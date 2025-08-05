import { apiClient } from '@/infrastructure/lib/api-client';
import type { LeadFormData } from '../schemas/lead.schema';
import type { Lead } from '@/domain/entities/lead/Lead';

class LeadService {
    private readonly endpoint = '/leads';

    async create(data: LeadFormData): Promise<Lead> {
        const response = await apiClient.post<Lead>(this.endpoint, data);
        return response.data;
    }

    // No futuro, outros métodos poderiam ser adicionados aqui:
    // async getAll(): Promise<Lead[]> { ... }
    // async getById(id: string): Promise<Lead> { ... }
}

export const leadService = new LeadService();