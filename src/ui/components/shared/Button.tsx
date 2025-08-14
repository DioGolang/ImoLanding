import React from 'react';
import { cn } from '@/infrastructure/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}

export const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
    const baseClasses = 'px-8 py-4 rounded-md font-semibold text-center transition-all duration-300 ease-in-out transform hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg';

    const variants = {
        primary: 'bg-white text-black hover:bg-brand-gold-hover',
        secondary: 'bg-gray-800 text-black hover:bg-gray-700',
    };

    return (
        <button className={cn(baseClasses, variants[variant], className)} {...props}>
            {children}
        </button>
    );
};