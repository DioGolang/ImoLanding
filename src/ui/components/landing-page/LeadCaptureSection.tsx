import type { Project } from '@/domain/types/project.types';
import { LeadCaptureForm } from '@/application/features/lead-capture/components/LeadCaptureForm';
import React from 'react';

interface LeadCaptureSectionProps {
    cta?: Project['cta'];
}

export const LeadCaptureSection = ({ cta }: LeadCaptureSectionProps) => {
    const title = cta?.title ?? 'Garanta prioridade e condições exclusivas';
    const subtitle =
        cta?.subtitle ??
        'Preencha seus dados e receba materiais completos, condições de lançamento e contato prioritário.';
    const buttonText = cta?.buttonText ?? 'Quero receber';
    const disclaimer =
        cta && 'disclaimer' in cta ? (cta as any).disclaimer : '* Seus dados são protegidos e não serão compartilhados.';

    return (
        <section
            id="contato"
            aria-labelledby="lead-capture-heading"
            className="relative py-28 font-serif bg-neutral-950"
        >
            {/* Decorative backgrounds */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-900/40 via-neutral-950 to-neutral-950" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_25%,rgba(212,182,98,0.10),transparent_60%)]" />

            <div className="relative z-10 container mx-auto px-6">
                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-14 lg:grid-cols-2 items-start">
                        {/* Copy / Value Props */}
                        <div className="relative">
              <span
                  aria-hidden="true"
                  className="mb-6 inline-block h-1 w-24 bg-gradient-to-r from-brand-gold via-brand-gold/70 to-transparent rounded"
              />
                            <h2
                                id="lead-capture-heading"
                                className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-50"
                            >
                                {title}
                                <span className="mt-4 block font-sans text-sm font-medium tracking-wide text-brand-gold/80">
                  Atendimento consultivo e informações completas
                </span>
                            </h2>
                            <p className="mt-6 font-sans text-base md:text-lg leading-relaxed text-neutral-300">
                                {subtitle}
                            </p>

                            <ul className="mt-8 space-y-3 font-sans text-sm text-neutral-300">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold shadow-[0_0_0_4px_rgba(212,182,98,0.15)]" />
                                    Plantas, materiais, diferenciais e tabela quando disponível.
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold shadow-[0_0_0_4px_rgba(212,182,98,0.15)]" />
                                    Prioridade para evento e condições de lançamento.
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold shadow-[0_0_0_4px_rgba(212,182,98,0.15)]" />
                                    Canal direto com especialista do empreendimento.
                                </li>
                            </ul>

                            <p className="mt-8 font-sans text-xs text-neutral-500">
                                {disclaimer}
                            </p>
                        </div>

                        {/* Form Card */}
                        <div className="relative">
                            <div className="relative rounded-2xl border border-neutral-800/60 bg-neutral-900/50 backdrop-blur-md p-8 shadow-[0_10px_40px_-18px_rgba(0,0,0,0.65)]">
                <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-brand-gold via-brand-gold/70 to-transparent rounded-l"
                />
                                <LeadCaptureForm buttonText={buttonText} />
                            </div>
                            <div className="mt-4 flex flex-wrap gap-4 text-[10px] font-sans uppercase tracking-wider text-neutral-500">
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" /> Sigilo
                </span>
                                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" /> Prioridade
                </span>
                                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" /> Exclusividade
                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};