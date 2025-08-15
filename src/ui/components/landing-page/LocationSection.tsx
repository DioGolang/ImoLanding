'use client';

import React, { useRef } from 'react';
import type { Project } from '@/domain/types/project.types';
import { motion, useInView, Variants } from 'framer-motion';
import { MapPin } from 'lucide-react';

interface LocationSectionProps {
    location: Project['location'];
    copy: string;
}

export const LocationSection = ({ location, copy }: LocationSectionProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    // CORREÇÃO: A URL do mapa foi construída corretamente com encodeURIComponent.
    const mapQuery = encodeURIComponent(`${location.address}, ${location.neighborhood}, ${location.city}`);
    const mapEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

    const variants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.2 }
        }
    };

    return (
        <section ref={ref} id="localizacao" className="py-24 bg-white dark:bg-black text-gray-800 dark:text-gray-200">
            <motion.div
                className="container mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center"
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {/* Coluna de Texto */}
                <motion.div variants={variants} className="order-2 md:order-1">
                    <p className="font-serif text-lg font-medium text-brand-gold">
                        O Equilíbrio Perfeito
                    </p>
                    <h2 className="mt-2 text-4xl font-bold font-serif text-brand-primary dark:text-neutral-100">
                        O privilégio de estar aqui.
                    </h2>
                    <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                        {copy}
                    </p>
                    <p className='mt-6 font-semibold text-gray-800 dark:text-gray-100'>
                        {location.address} - {location.neighborhood}, {location.city}
                    </p>
                    <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-8 px-6 py-3 font-semibold text-brand-primary dark:text-neutral-900 bg-brand-gold/20 dark:bg-brand-gold/80 rounded-full hover:bg-brand-gold/30 dark:hover:bg-brand-gold/90 transition-colors duration-300"
                    >
                        <MapPin className="w-5 h-5" />
                        Ver no Google Maps
                    </a>
                </motion.div>

                {/* Coluna do Mapa */}
                <motion.div variants={variants} className="order-1 md:order-2 w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                    <iframe
                        src={mapEmbedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Mapa da localização de ${location.neighborhood}`}
                    ></iframe>
                </motion.div>
            </motion.div>
        </section>
    );
};