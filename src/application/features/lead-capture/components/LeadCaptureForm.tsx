'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LeadSchema, LeadFormData } from '../schemas/lead.schema';
import { useLeadCapture } from '../hooks/useLeadCapture';

import { Button } from '@/ui/components/shared/Button';
import { Input } from '@/ui/components/shared/Input';
import { Label } from '@/ui/components/shared/Label';

interface LeadCaptureFormProps {
    buttonText: string;
}

export function LeadCaptureForm({ buttonText }: LeadCaptureFormProps) {
    const { createLead, isPending, isSuccess, isError } = useLeadCapture();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<LeadFormData>({
        resolver: zodResolver(LeadSchema),
    });

    const onSubmit = (data: LeadFormData) => {
        createLead(data, {
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
            <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                    id="name"
                    placeholder="Seu nome completo"
                    {...register('name')}
                />
                {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    {...register('email')}
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>

            <Button type="submit" disabled={isPending} className="w-full">
                {isPending ? 'Enviando...' : buttonText}
            </Button>

            {isSuccess && <p className="text-sm text-green-600">Lead capturado com sucesso!</p>}
            {isError && <p className="text-sm text-red-500">Ocorreu um erro. Tente novamente.</p>}
        </form>
    );
}