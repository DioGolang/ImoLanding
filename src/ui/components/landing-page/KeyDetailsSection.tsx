'use client';

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { Ruler, BedDouble, Car, Expand } from 'lucide-react';
import type { Project } from '@/domain/types/project.types';

const iconMap = {
    Ruler: <Ruler className="w-8 h-8 text-brand-gold" />,
    BedDouble: <BedDouble className="w-8 h-8 text-brand-gold" />,
    Car: <Car className="w-8 h-8 text-brand-gold" />,
    Expand: <Expand className="w-8 h-8 text-brand-gold" />,
};

interface KeyDetailsSectionProps {
    readonly unitDetails: Project['unitDetails'];
}

export const KeyDetailsSection = ({ unitDetails }: KeyDetailsSectionProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const containerVariants: Variants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section ref={ref} className="bg-brand-primary text-white">
            <motion.div
                className="container mx-auto px-6 py-20"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold">
                        A Exclusividade em Duas Perspectivas
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-neutral-300">
                        Escolha entre a sofisticação de um apartamento com a amplitude de uma casa ou a magnificência de uma cobertura duplex.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {/* Coluna Apartamento Tipo */}
                    <motion.div variants={itemVariants} className="bg-brand-primaryTint p-8 rounded-lg border border-white/10">
                        <h3 className="text-2xl font-serif font-bold text-center mb-8">Apartamento Tipo</h3>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            {unitDetails.tipo.map(item => (
                                <div key={item.label}>
                                    {iconMap[item.icon]}
                                    <p className="text-3xl md:text-4xl font-bold font-serif text-brand-gold mt-2">{item.value}</p>
                                    <p className="mt-1 text-xs text-neutral-300 uppercase tracking-wider">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Coluna Cobertura Duplex */}
                    <motion.div variants={itemVariants} className="bg-brand-primaryTint p-8 rounded-lg border border-white/10">
                        <h3 className="text-2xl font-serif font-bold text-center mb-8">Cobertura Duplex</h3>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            {unitDetails.cobertura.map(item => (
                                <div key={item.label}>
                                    {iconMap[item.icon]}
                                    <p className="text-3xl md:text-4xl font-bold font-serif text-brand-gold mt-2">{item.value}</p>
                                    <p className="mt-1 text-xs text-neutral-300 uppercase tracking-wider">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};