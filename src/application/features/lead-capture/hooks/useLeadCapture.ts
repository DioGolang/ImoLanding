'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { leadService } from '../services/LeadService';
import type { LeadFormData } from '../schemas/lead.schema';

export const useLeadCapture = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        // A função que será executada quando a mutação for acionada.
        // Ela recebe os dados do formulário e os passa para o nosso serviço de API.
        mutationFn: (data: LeadFormData) => leadService.create(data),

        // Callback executado em caso de sucesso na chamada à API.
        onSuccess: (data) => {
            console.log('Lead created successfully!', data);
            // Aqui você poderia, por exemplo, invalidar uma query que lista todos os leads
            // para que a lista seja atualizada automaticamente em outro lugar da aplicação.
            // queryClient.invalidateQueries({ queryKey: ['leads'] });
        },

        // Callback executado em caso de erro.
        onError: (error) => {
            // O tratamento de erro global já acontece no api-client,
            // mas aqui podemos adicionar lógicas específicas para esta mutação se necessário.
            console.error('Error creating lead:', error);
        },
    });

    return {
        createLead: mutation.mutate,
        isPending: mutation.isPending,
        isSuccess: mutation.isSuccess,
        isError: mutation.isError,
        error: mutation.error,
    };
};