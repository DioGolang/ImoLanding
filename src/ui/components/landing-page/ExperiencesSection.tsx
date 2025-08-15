'use client';

import React, { useRef } from 'react';
import type { Project } from '@/domain/types/project.types';
import Image from 'next/image';
import { motion, useInView, Variants } from 'framer-motion';
import Link from 'next/link';

interface ExperiencesSectionProps {
    copy: string;
    imageUrl: string;
    projectName: string;
    eyebrow?: string;
    cta?: {
        label: string;
        href: string;
    };
}

export const ExperiencesSection = ({ copy, imageUrl, projectName, eyebrow, cta }: ExperiencesSectionProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const containerVariants: Variants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } }
    };

    const textVariants: Variants = {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const imageVariants: Variants = {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <motion.section
            ref={ref}
            id="experiencias"
            className="py-24 bg-brand-primary text-white overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <motion.div
                    variants={imageVariants}
                    className="w-full aspect-[4/3] relative rounded-lg overflow-hidden shadow-2xl"
                >
                    <Image
                        src={imageUrl}
                        alt={`Área de lazer do ${projectName}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="transition-transform duration-500 group-hover:scale-105"
                    />
                </motion.div>

                <motion.div variants={textVariants}>
                    {eyebrow && (
                        <p className="font-semibold text-brand-gold mb-4 uppercase tracking-widest">{eyebrow}</p>
                    )}
                    <h2 className="text-4xl font-bold font-serif">
                        Cenários para as suas melhores memórias.
                    </h2>
                    <p className="mt-6 text-gray-300 text-lg leading-relaxed">
                        {copy}
                    </p>
                    {cta && (
                        <div className="mt-8">
                            <Link
                                href={cta.href}
                                className="inline-block px-8 py-3 font-semibold text-neutral-900 bg-brand-gold rounded-full hover:brightness-110 transition-transform hover:scale-105"
                            >
                                {cta.label}
                            </Link>
                        </div>
                    )}
                </motion.div>
            </div>
        </motion.section>
    );
};