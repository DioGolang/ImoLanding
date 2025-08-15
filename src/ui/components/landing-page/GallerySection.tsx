'use client';

import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import type { Project } from '@/domain/types/project.types';
import Image from 'next/image';
import {motion, AnimatePresence, Variants, useInView} from 'framer-motion';
import { X, ArrowLeft, ArrowRight, Expand } from 'lucide-react';

interface GallerySectionProps {
    readonly images: Readonly<Project['images']>;
    projectName: string;
}

type RawImage = string | { src: string; label?: string; alt?: string };

type GalleryItem = {
    src: string;
    label: string;
    alt: string;
};

const deriveLabel = (src: string, fallbackIndex: number): string => {
    const base = src.split('/').pop()?.split('.')[0] || `imagem-${fallbackIndex + 1}`;
    return base
        .replace(/[-_]+/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase())
        .trim();
};

export const GallerySection = ({ images, projectName }: GallerySectionProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const galleryItems: GalleryItem[] = useMemo(() =>
        (images as RawImage[])
            .filter(Boolean)
            .map((img, i) => {
                if (typeof img === 'string') {
                    const label = deriveLabel(img, i);
                    return { src: img, label, alt: `${label} do ${projectName}` };
                }
                const label = img.label?.trim() || deriveLabel(img.src, i);
                return {
                    src: img.src,
                    label,
                    alt: img.alt?.trim() || `${label} do ${projectName}`
                };
            })
            .filter(g => g.src), [images, projectName]);

    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const isOpen = lightboxIndex !== null;

    const close = useCallback(() => setLightboxIndex(null), []);

    const changeImage = (direction: 'next' | 'prev') => {
        if (lightboxIndex === null) return;
        const total = galleryItems.length;
        const nextIndex = direction === 'next'
            ? (lightboxIndex + 1) % total
            : (lightboxIndex - 1 + total) % total;
        setLightboxIndex(nextIndex);
    };

    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close();
            else if (e.key === 'ArrowRight') changeImage('next');
            else if (e.key === 'ArrowLeft') changeImage('prev');
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isOpen, close]);

    if (galleryItems.length === 0) return null;

    const containerVariants: Variants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    return (
        <section ref={ref} id="galeria" className="py-24 bg-stone-50 dark:bg-black">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-primary dark:text-neutral-50 font-serif">
                        Uma Obra de Arte em Cada Detalhe.
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        A prova visual da sofisticação e a materialização da nossa promessa.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {galleryItems.map((image, i) => (
                        <motion.button
                            key={image.src}
                            variants={itemVariants}
                            onClick={() => setLightboxIndex(i)}
                            className="group relative overflow-hidden rounded-lg shadow-lg aspect-[4/3] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-gold"
                            aria-label={`Abrir imagem ${image.label}`}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                priority={i < 6}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-500 opacity-0 group-hover:opacity-100 flex items-end justify-between p-4">
                                <h3 className="text-white text-lg font-bold drop-shadow-md">{image.label}</h3>
                                <Expand className="w-6 h-6 text-white opacity-80" />
                            </div>
                        </motion.button>
                    ))}
                </motion.div>
            </div>

            <AnimatePresence>
                {isOpen && lightboxIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        role="dialog"
                        aria-modal="true"
                        className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
                        onClick={close}
                    >
                        {/* Botão de Fechar */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1, transition: { delay: 0.3 } }}
                            onClick={close}
                            className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full"
                            aria-label="Fechar"
                        >
                            <X className="w-6 h-6 text-white" />
                        </motion.button>

                        {/* Navegação */}
                        <motion.button onClick={(e) => { e.stopPropagation(); changeImage('prev'); }} className="absolute left-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full" aria-label="Anterior"><ArrowLeft className="w-6 h-6 text-white" /></motion.button>
                        <motion.button onClick={(e) => { e.stopPropagation(); changeImage('next'); }} className="absolute right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full" aria-label="Próxima"><ArrowRight className="w-6 h-6 text-white" /></motion.button>

                        {/* Conteúdo do Lightbox */}
                        <motion.div
                            layout
                            className="relative w-full max-w-5xl aspect-[16/10]"
                            onClick={e => e.stopPropagation()}
                        >
                            <AnimatePresence initial={false} mode="wait">
                                <motion.div
                                    key={lightboxIndex}
                                    initial={{ opacity: 0.5, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0.5, scale: 0.95 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="w-full h-full"
                                >
                                    <Image
                                        src={galleryItems[lightboxIndex].src}
                                        alt={galleryItems[lightboxIndex].alt}
                                        fill
                                        sizes="100vw"
                                        className="object-contain rounded-lg"
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>
                            <div className="absolute -bottom-8 left-0 right-0 text-center text-white/80 text-sm">
                                {galleryItems[lightboxIndex].label} ({lightboxIndex + 1} / {galleryItems.length})
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};