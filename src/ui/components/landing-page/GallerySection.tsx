import React, { useState, useCallback, useEffect, useRef } from 'react';
import type { Project } from '@/domain/types/project.types';
import Image from 'next/image';

interface GallerySectionProps {
    readonly images: Readonly<Project['images']>;
    projectName: string;
}

type RawImage =
    | string
    | {
    src: string;
    label?: string;
    alt?: string;
};

type GalleryItem = {
    src: string;
    label: string;
    alt: string;
};

const deriveLabel = (src: string, fallbackIndex: number) => {
    const base = src.split('/').pop()?.split('.')[0] || `imagem-${fallbackIndex + 1}`;
    return base
        .replace(/[-_]+/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase())
        .trim();
};

export const GallerySection = ({ images, projectName }: GallerySectionProps) => {
    const galleryItems: GalleryItem[] = (images as RawImage[])
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
        .filter(g => g.src);

    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const isOpen = lightboxIndex !== null;
    const touchStartX = useRef<number | null>(null);

    const close = useCallback(() => setLightboxIndex(null), []);
    const next = useCallback(
        () =>
            setLightboxIndex(i =>
                i === null ? 0 : (i + 1) % galleryItems.length
            ),
        [galleryItems.length]
    );
    const prev = useCallback(
        () =>
            setLightboxIndex(i =>
                i === null ? 0 : (i - 1 + galleryItems.length) % galleryItems.length
            ),
        [galleryItems.length]
    );

    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close();
            else if (e.key === 'ArrowRight') next();
            else if (e.key === 'ArrowLeft') prev();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isOpen, close, next, prev]);

    if (galleryItems.length === 0) return null;

    return (
        <section id="galeria" className="py-24 bg-stone-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-primary font-serif">
                        Uma Obra de Arte em Cada Detalhe.
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        A prova visual da sofisticação e a materialização da nossa promessa.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {galleryItems.map((image, i) => (
                        <button
                            key={image.src}
                            type="button"
                            onClick={() => setLightboxIndex(i)}
                            className="group relative overflow-hidden rounded-lg shadow-lg aspect-[4/3] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/60"
                            aria-label={`Abrir imagem ${image.label}`}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                priority={i < 3}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-end p-6">
                                <h3 className="text-white text-2xl font-serif font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                    {image.label}
                                </h3>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {isOpen && lightboxIndex !== null && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Galeria ampliada (${lightboxIndex + 1} de ${galleryItems.length})`}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
                    onClick={close}
                    onTouchStart={e => {
                        touchStartX.current = e.touches[0].clientX;
                    }}
                    onTouchEnd={e => {
                        if (touchStartX.current === null) return;
                        const delta = e.changedTouches[0].clientX - touchStartX.current;
                        if (Math.abs(delta) > 50) {
                            delta < 0 ? next() : prev();
                        }
                        touchStartX.current = null;
                    }}
                >
                    <div
                        className="relative w-full max-w-5xl"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-900/90 p-4">
                            <Image
                                key={galleryItems[lightboxIndex].src}
                                src={galleryItems[lightboxIndex].src}
                                alt={galleryItems[lightboxIndex].alt}
                                fill
                                sizes="100vw"
                                className="object-contain"
                                priority
                            />
                            <button
                                onClick={close}
                                className="absolute top-4 right-4 px-3 py-1.5 text-xs rounded-md bg-neutral-800/70 text-neutral-200 hover:bg-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/60"
                                aria-label="Fechar"
                            >
                                Fechar
                            </button>
                            <button
                                onClick={prev}
                                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-neutral-800/60 hover:bg-neutral-700 p-3 text-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/60"
                                aria-label="Anterior"
                            >
                                ‹
                            </button>
                            <button
                                onClick={next}
                                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-neutral-800/60 hover:bg-neutral-700 p-3 text-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/60"
                                aria-label="Próxima"
                            >
                                ›
                            </button>
                            <div className="absolute bottom-3 left-0 right-0 flex flex-col items-center gap-2 px-4">
                <span className="text-xs font-medium text-neutral-300">
                  {galleryItems[lightboxIndex].label} ({lightboxIndex + 1}/{galleryItems.length})
                </span>
                                <div className="flex gap-1">
                                    {galleryItems.map((_, idx) => (
                                        <button
                                            key={idx}
                                            aria-label={`Ir para imagem ${idx + 1}`}
                                            onClick={() => setLightboxIndex(idx)}
                                            className={`h-2 w-2 rounded-full ${
                                                idx === lightboxIndex
                                                    ? 'bg-brand-primary'
                                                    : 'bg-neutral-600 hover:bg-neutral-500'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};