import React from 'react';
import type { Project } from '@/domain/types/project.types';
import {
    CreativeIcon,
    EVChargerIcon,
    GeneratorIcon,
    ResortIcon,
    SignatureIcon,
} from '@/ui/components/shared/Icons';
import { cn } from '@/infrastructure/lib/utils';

interface BenefitsSectionProps {
    readonly benefits: Readonly<Project['benefits']>;
}

const iconMap = {
    Signature: <SignatureIcon />,
    Customize: <CreativeIcon />,
    Resort: <ResortIcon />,
    Generator: <GeneratorIcon />,
    EVCharger: <EVChargerIcon />,
} as const;

type IconKey = keyof typeof iconMap;

interface BenefitCardProps {
    iconName: string;
    title: string;
    description: string;
    index: number;
}

const BenefitCard = ({ iconName, title, description, index }: BenefitCardProps) => {
    const iconElement = (iconMap as Record<string, React.ReactNode>)[iconName] ?? null;

    return (
        <div
            className={cn(
                'group relative rounded-xl border border-neutral-800/60 bg-neutral-900/40',
                'backdrop-blur-sm p-6 md:p-7 flex flex-col items-center text-center',
                'transition-all duration-400',
                'hover:border-brand-gold/40 hover:shadow-[0_8px_32px_-8px_rgba(212,182,98,0.25)]',
                'hover:bg-neutral-900/55'
            )}
            style={{ animationDelay: `${index * 50}ms` }}
        >
      <span
          className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition
        bg-[radial-gradient(circle_at_50%_35%,rgba(212,182,98,0.10),transparent_70%)]"
          aria-hidden="true"
      />
            <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-neutral-800/70 ring-1 ring-neutral-700 group-hover:ring-brand-gold/60 transition">
                <span className="text-brand-gold [&>svg]:h-7 [&>svg]:w-7">{iconElement}</span>
            </div>
            <h3 className="relative font-serif text-lg font-semibold tracking-wide text-neutral-100">
                {title}
                <span className="block h-px w-8 mx-auto mt-2 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-70" />
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                {description}
            </p>
        </div>
    );
};

export const BenefitsSection = ({ benefits }: BenefitsSectionProps) => {
    if (!benefits?.length) return null;

    return (
        <section
            id="beneficios"
            aria-labelledby="benefits-heading"
            className="relative py-28 bg-neutral-950"
        >
            {/* Decorative backdrop */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-900/40 via-neutral-950 to-neutral-950" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(212,182,98,0.10),transparent_60%)]" />
            <div className="relative z-10 container mx-auto px-6">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2
                        id="benefits-heading"
                        className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-neutral-50"
                    >
                        Benefícios Exclusivos
                        <span className="block mt-3 text-sm font-sans font-medium tracking-wide text-brand-gold/80">
                Diferenciais que elevam seu patrimônio e estilo de vida
              </span>
                    </h2>
                </div>
                <div
                    className={cn(
                        'grid gap-6',
                        'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'
                    )}
                >
                    {benefits.map((benefit: any, i: number) => (
                        <BenefitCard
                            key={benefit.id ?? `${benefit.icon}-${benefit.title}-${i}`}
                            iconName={benefit.icon as IconKey}
                            title={benefit.title}
                            description={benefit.description}
                            index={i}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};