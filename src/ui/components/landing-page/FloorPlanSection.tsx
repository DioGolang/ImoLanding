'use client';

import React, { useState, useId, useCallback } from 'react';
import Image from 'next/image';
import type { Project } from '@/domain/types/project.types';
import { cn } from '@/infrastructure/lib/utils';

interface FloorPlanSectionProps {
    readonly floorPlans: Readonly<Project['floorPlans']>;
}

type NormalizedPlan = {
    id?: string;
    name: string;
    area?: string;
    imageUrl: string;
    description?: string;
    features?: string[];
    downloadUrl?: string;
};

export const FloorPlanSection = ({ floorPlans }: FloorPlanSectionProps) => {
    if (!floorPlans || floorPlans.length === 0) return null;

    // Normalize defensive shape
    const plans: NormalizedPlan[] = floorPlans.map((p: any) => ({
        id: p?.id,
        name: p?.name ?? 'Planta',
        area: p?.area,
        imageUrl: p?.imageUrl,
        description: p?.description,
        features: Array.isArray(p?.features) ? p.features : [],
        downloadUrl: p?.downloadUrl
    }));

    const [activeIndex, setActiveIndex] = useState(0);
    const [zoomOpen, setZoomOpen] = useState(false);
    const activePlan = plans[activeIndex];
    const groupId = useId();

    const handleSelect = useCallback((idx: number) => {
        setActiveIndex(idx);
    }, []);

    return (
        <section
            id="plantas"
            className="relative py-28 bg-neutral-950 font-serif"
            aria-labelledby="floorplans-heading"
        >
            {/* Decorative backdrop layers */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-900/50 via-neutral-950 to-neutral-950" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(212,182,98,0.12),transparent_60%)]" />
            <div className="relative z-10 container mx-auto px-6">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <h2
                        id="floorplans-heading"
                        className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-50"
                    >
                        Plantas Inteligentes
                        <span className="mt-3 block text-sm font-sans font-medium tracking-wide text-brand-gold/80">
              Versatilidade e eficiência para elevar seu estilo de vida
            </span>
                    </h2>
                    <p className="mt-5 font-sans text-base md:text-lg text-neutral-300 leading-relaxed">
                        Selecione a configuração ideal e visualize cada detalhe com clareza. Design pensado para conforto, fluxo e valorização patrimonial.
                    </p>
                </div>

                {/* Tabs / selectors */}
                <div
                    role="tablist"
                    aria-label="Plantas disponíveis"
                    className="mx-auto mb-10 flex w-full max-w-5xl flex-wrap justify-center gap-3"
                >
                    {plans.map((plan, idx) => {
                        const selected = idx === activeIndex;
                        return (
                            <button
                                key={plan.id ?? `${plan.name}-${idx}`}
                                role="tab"
                                aria-selected={selected}
                                aria-controls={`plan-panel-${groupId}-${idx}`}
                                id={`plan-tab-${groupId}-${idx}`}
                                onClick={() => handleSelect(idx)}
                                className={cn(
                                    'relative rounded-full px-5 py-2.5 font-sans text-sm font-medium tracking-wide transition',
                                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60',
                                    selected
                                        ? 'bg-brand-gold text-neutral-500 shadow-[0_0_0_1px_rgba(212,182,98,0.35),0_6px_24px_-4px_rgba(212,182,98,0.45)]'
                                        : 'bg-neutral-800/40 text-neutral-300 hover:text-neutral-100 hover:bg-neutral-500'
                                )}
                            >
                <span className="flex items-center gap-2">
                  {plan.name}
                    {plan.area && (
                        <span
                            className={cn(
                                'rounded-md border px-1.5 py-0.5 text-[11px] font-semibold tracking-wide',
                                selected
                                    ? 'border-neutral-900/20 bg-neutral-900/10 text-neutral-900'
                                    : 'border-neutral-600/40 bg-neutral-700/40 text-neutral-200'
                            )}
                        >
                      {plan.area}
                    </span>
                    )}
                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Active panel */}
                <div
                    id={`plan-panel-${groupId}-${activeIndex}`}
                    role="tabpanel"
                    aria-labelledby={`plan-tab-${groupId}-${activeIndex}`}
                    className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5"
                >
                    {/* Image / viewer */}
                    <div className="relative order-2 lg:order-1 lg:col-span-3">
                        <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-neutral-800/60 bg-neutral-900/40 backdrop-blur-sm shadow-[0_10px_40px_-12px_rgba(0,0,0,0.7)]">
                            <Image
                                key={activePlan.imageUrl}
                                src={activePlan.imageUrl}
                                alt={`Planta ${activePlan.name}${activePlan.area ? ` - ${activePlan.area}` : ''}`}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 60vw"
                                className="object-contain p-4 transition-opacity duration-300"
                            />
                            <button
                                onClick={() => setZoomOpen(true)}
                                className="absolute right-4 top-4 rounded-md bg-neutral-800/70 px-3 py-1.5 text-xs font-sans tracking-wide text-neutral-200 backdrop-blur focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60 hover:bg-neutral-700/70"
                                aria-label="Expandir planta"
                            >
                                Zoom
                            </button>
                        </div>
                        <p className="mt-3 text-center font-sans text-xs text-neutral-500">
                            * Imagem ilustrativa sujeita a ajustes técnicos e comerciais.
                        </p>
                    </div>

                    {/* Details */}
                    <div className="order-1 lg:order-2 lg:col-span-2 flex flex-col">
                        <div className="relative flex-1 rounded-2xl border border-neutral-800/60 bg-neutral-900/35 p-7 backdrop-blur-md shadow-[0_8px_32px_-12px_rgba(0,0,0,0.55)]">
              <span
                  className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-brand-gold via-brand-gold/70 to-transparent"
                  aria-hidden="true"
              />
                            <h3 className="mb-4 text-2xl font-bold tracking-tight text-neutral-50">
                                {activePlan.name}
                            </h3>
                            {activePlan.description && (
                                <p className="mb-6 font-sans text-sm leading-relaxed text-neutral-300">
                                    {activePlan.description}
                                </p>
                            )}

                            {/* Feature chips */}
                            {activePlan.features && activePlan.features.length > 0 && (
                                <ul className="mb-6 flex flex-wrap gap-2">
                                    {activePlan.features.map((f, i) => (
                                        <li
                                            key={`${f}-${i}`}
                                            className="rounded-full border border-neutral-700/60 bg-neutral-800/50 px-3 py-1 font-sans text-[11px] font-medium uppercase tracking-wide text-neutral-300"
                                        >
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            <div className="mt-auto flex flex-wrap items-center gap-4">
                                {activePlan.downloadUrl && (
                                    <a
                                        href={activePlan.downloadUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center gap-2 rounded-md border border-brand-gold/50 bg-brand-gold px-5 py-2.5 font-sans text-sm font-semibold text-neutral-900 shadow-[0_6px_22px_-6px_rgba(212,182,98,0.55)] transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60"
                                    >
                                        Download PDF
                                    </a>
                                )}
                                <button
                                    onClick={() => {
                                        const contact = document.querySelector('#contato');
                                        contact?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }}
                                    className="inline-flex items-center rounded-md border border-neutral-700/70 bg-neutral-800/60 px-5 py-2.5 font-sans text-sm font-medium text-neutral-200 transition hover:bg-neutral-700/60 hover:text-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60"
                                >
                                    Quero mais detalhes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Zoom Modal */}
            {zoomOpen && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Ampliação planta ${activePlan.name}`}
                    className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    onClick={() => setZoomOpen(false)}
                >
                    <div
                        className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/90 p-4"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setZoomOpen(false)}
                            className="absolute right-4 top-4 rounded-md bg-neutral-800/70 px-3 py-1.5 text-xs font-sans text-neutral-300 hover:bg-neutral-700/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60"
                            aria-label="Fechar zoom"
                        >
                            Fechar
                        </button>
                        <div className="relative mx-auto aspect-[4/3] w-full">
                            <Image
                                src={activePlan.imageUrl}
                                alt={`Planta ampliada ${activePlan.name}`}
                                fill
                                sizes="100vw"
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};