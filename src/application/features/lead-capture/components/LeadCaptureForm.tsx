'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LeadSchema, LeadFormData } from '../schemas/lead.schema';
import { useLeadCapture } from '../hooks/useLeadCapture';

export const LeadCaptureForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LeadFormData>({
        resolver: zodResolver(LeadSchema),
    });

    const { submitLead, isLoading, isSuccess } = useLeadCapture();

    const onSubmit = (data: LeadFormData) => {
        submitLead(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input {...register('name')} placeholder="Name" />
            {errors.name && <span>{errors.name.message}</span>}

            <input {...register('email')} placeholder="Email" />
            {errors.email && <span>{errors.email.message}</span>}

            <input {...register('phone')} placeholder="Phone (optional)" />

            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Submitting...' : 'Submit'}
            </button>

            {isSuccess && <p>Lead captured successfully!</p>}
        </form>
    );
};
