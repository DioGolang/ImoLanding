import { useMutation } from '@tanstack/react-query';
import { LeadFormData } from '../schemas/lead.schema';
import { LeadService } from '../services/LeadService';

export const useLeadCapture = () => {
    const mutation = useMutation({
        mutationFn: LeadService.submitLead,
    });

    return {
        submitLead: mutation.mutate,
        isLoading: mutation.isLoading,
        isSuccess: mutation.isSuccess,
        error: mutation.error,
    };
};
