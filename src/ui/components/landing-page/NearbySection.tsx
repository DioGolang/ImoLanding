'use client';

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Project } from '@/domain/types/project.types';

interface NearbySectionProps {
    readonly nearbyLocations: Project['nearbyLocations'];
}

export const NearbySection = ({ nearbyLocations }: NearbySectionProps) => {
    const sectionRef = useRef<HTMLElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    if (nearbyLocations.length === 0) {
        return null;
    }

    const scroll = (direction: 'left' | 'right') => {
        if (carouselRef.current) {
            const scrollAmount = carouselRef.current.clientWidth * 0.8;
            carouselRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const variants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    return (
        <section ref={sectionRef} id="proximidades" className="py-24 bg-brand-primary text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-center">
                        Viva no cenário perfeito para uma vida extraordinária.
                    </h2>
                </motion.div>

                <motion.div
                    className="relative mt-16"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <button
                        onClick={() => scroll('left')}
                        aria-label="Anterior"
                        className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-colors duration-300 hidden md:block"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>

                    <div
                        ref={carouselRef}
                        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mb-4"
                    >
                        {nearbyLocations.map((location) => (
                            <div key={location.name} className="flex-shrink-0 w-[65vw] sm:w-[40vw] md:w-[22vw] snap-center">
                                <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden group shadow-lg">
                                    <img
                                        src={location.imageUrl}
                                        alt={location.name}
                                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-6 text-white">
                                        <h3 className="font-bold text-xl">{location.name}</h3>
                                        <p className="text-sm opacity-90">{location.time}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => scroll('right')}
                        aria-label="Próximo"
                        className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-colors duration-300 hidden md:block"
                    >
                        <ArrowRight className="w-6 h-6" />
                    </button>
                </motion.div>
                <motion.p
                    variants={variants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mt-8 text-xs text-white/60"
                >
                    *Fonte Google Maps, trajeto de carro.
                </motion.p>
            </div>
        </section>
    );
};