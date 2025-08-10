import type { Project } from '@/domain/types/project.types';
// Importamos todos os nossos ícones
import {
    CreativeIcon,
    EVChargerIcon,
    GeneratorIcon,
    ResortIcon,
    SignatureIcon,
} from '@/ui/components/shared/Icons';
import React from 'react';

interface BenefitsSectionProps {
    readonly benefits: Readonly<Project['benefits']>;
}

interface BenefitCardProps {
    iconName: string;
    title: string;
    children: React.ReactNode;
}

const iconMap: Record<string, React.ReactNode> = {
    Signature: <SignatureIcon />,
    Customize: <CreativeIcon />,
    Resort: <ResortIcon />,
    Generator: <GeneratorIcon />,
    EVCharger: <EVChargerIcon />,
};

const BenefitCard = ({ iconName, title, children }: BenefitCardProps) => {
    // A lógica para escolher o ícone agora está dentro do próprio cartão.
    const iconElement = iconMap[iconName] || null;

    return (
        <div className="bg-white p-8 rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="text-brand-gold inline-block mb-5">{iconElement}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 font-serif">{title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm">{children}</p>
        </div>
    );
};


export const BenefitsSection = ({ benefits }: BenefitsSectionProps) => {
    return (
        <section id="beneficios" className="py-24 bg-stone-100">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {benefits.map((benefit) => (
                        <BenefitCard
                            key={benefit.title}
                            iconName={benefit.icon}
                            title={benefit.title}
                        >
                            {benefit.description}
                        </BenefitCard>
                    ))}
                </div>
            </div>
        </section>
    );
};