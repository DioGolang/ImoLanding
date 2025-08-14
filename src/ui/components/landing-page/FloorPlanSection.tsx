'use client';

import type { Project } from '@/domain/types/project.types';
import { cn } from '@/infrastructure/lib/utils';
import Image from 'next/image';
import React, { useState } from 'react';

interface FloorPlanSectionProps {
    readonly floorPlans: Readonly<Project['floorPlans']>;
}

export const FloorPlanSection = ({ floorPlans }: FloorPlanSectionProps) => {
    const [activePlanIndex, setActivePlanIndex] = useState(0);

    if (!floorPlans || floorPlans.length === 0) {
        return null;
    }

    const activePlan = floorPlans[activePlanIndex];

    return (
        <section id="plantas" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-primary font-serif">
                        Plantas Inteligentes para o Seu Estilo de Vida
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Escolha o layout que melhor se adapta às suas necessidades.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* Separadores para escolher a planta */}
                    <div className="flex justify-center border-b border-gray-200 mb-8">
                        {floorPlans.map((plan, index) => (
                            <button
                                key={plan.name}
                                onClick={() => setActivePlanIndex(index)}
                                className={cn(
                                    'px-6 py-3 font-semibold font-sans transition-colors duration-300',
                                    activePlanIndex === index
                                        ? 'border-b-2 border-brand-gold text-brand-primary'
                                        : 'text-gray-500 hover:text-brand-primary'
                                )}
                            >
                                {plan.name} - {plan.area}
                            </button>
                        ))}
                    </div>

                    {/* Imagem da Planta Ativa */}
                    <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden bg-gray-100">
                        <Image
                            src={activePlan.imageUrl}
                            alt={`Planta do ${activePlan.name} com ${activePlan.area}`}
                            fill
                            style={{ objectFit: 'contain' }}
                            sizes="100vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};