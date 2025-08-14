'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Button } from '../shared/Button';
import { VideoIcon } from '../shared/Icons';

interface TourSectionProps {
    tourUrl?: string;
    previewImageUrl?: string;
    heading?: string;
    subheading?: string;
    ctaLabel?: string;
}

export const TourSection = ({
                                tourUrl,
                                previewImageUrl,
                                heading = 'Explore Cada Ambiente Sem Sair de Casa',
                                subheading = 'Viva a experiência imersiva do tour 360º e sinta a atmosfera antes mesmo da visita presencial.',
                                ctaLabel = 'Iniciar Tour Virtual'
                            }: TourSectionProps) => {
    if (!tourUrl) return null;

    const [open, setOpen] = useState(false);
    const [iframeReady, setIframeReady] = useState(false);
    const closeBtnRef = useRef<HTMLButtonElement | null>(null);

    const openModal = useCallback(() => {
        setOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setOpen(false);
        setIframeReady(false);
    }, []);

    // ESC to close
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open, closeModal]);

    // Focus close button when modal opens
    useEffect(() => {
        if (open && closeBtnRef.current) {
            closeBtnRef.current.focus();
        }
    }, [open]);

    return (
        <section
            id="tour-virtual"
            aria-labelledby="tour-heading"
            className="relative py-28 bg-neutral-950 font-serif"
        >
            {/* Decorative background */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-900/50 via-neutral-950 to-neutral-950" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_25%,rgba(212,182,98,0.12),transparent_65%)]" />

            <div className="relative z-10 container mx-auto px-6">
                <div className="mx-auto max-w-5xl grid gap-14 lg:grid-cols-2 items-center">
                    {/* Text */}
                    <div>
                        <h2
                            id="tour-heading"
                            className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-50"
                        >
                            {heading}
                            <span className="mt-4 block font-sans text-sm font-medium tracking-wide text-brand-gold/80">
                  Tour Virtual 360°
                </span>
                        </h2>
                        <p className="mt-6 font-sans text-base md:text-lg leading-relaxed text-neutral-300">
                            {subheading}
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Button
                                variant="primary"
                                onClick={openModal}
                                aria-haspopup="dialog"
                                aria-controls="tour-dialog"
                                className="inline-flex items-center gap-2"
                            >
                                <VideoIcon /> {ctaLabel}
                            </Button>
                            <a
                                href={tourUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center rounded-md border border-neutral-700/70 bg-neutral-800/60 px-5 py-2.5 font-sans text-sm font-medium text-neutral-200 transition hover:bg-neutral-700/60 hover:text-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60"
                            >
                                Abrir em nova guia
                            </a>
                        </div>
                        <p className="mt-5 font-sans text-xs text-neutral-500">
                            *Carregamos o tour somente após sua interação para melhor desempenho.
                        </p>
                    </div>

                    {/* Preview */}
                    <div className="relative">
                        <div className="group relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-neutral-800/60 bg-neutral-900/40 backdrop-blur-sm shadow-[0_10px_40px_-14px_rgba(0,0,0,0.65)]">
                            {previewImageUrl ? (
                                <Image
                                    src={previewImageUrl}
                                    alt="Pré-visualização do tour virtual"
                                    fill
                                    sizes="(max-width:1024px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                                    priority
                                />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center bg-neutral-800/30">
                  <span className="font-sans text-sm text-neutral-400">
                    Preview indisponível
                  </span>
                                </div>
                            )}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-900/0 to-transparent" />
                            <button
                                onClick={openModal}
                                className="absolute inset-0 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60"
                                aria-label="Abrir tour virtual em modal"
                            >
                <span className="relative inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-3 font-sans text-sm font-semibold text-neutral-900 shadow-[0_6px_22px_-6px_rgba(212,182,98,0.55)] transition hover:brightness-110">
                  <VideoIcon /> Assistir Agora
                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Lightbox */}
            {open && (
                <div
                    id="tour-dialog"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Tour virtual 360"
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
                    onClick={closeModal}
                >
                    <div
                        className="relative w-full max-w-6xl"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/90">
                            {!iframeReady && (
                                <div className="absolute inset-0 animate-pulse bg-neutral-800/40 flex items-center justify-center font-sans text-sm text-neutral-400">
                                    Carregando tour...
                                </div>
                            )}
                            <iframe
                                src={tourUrl}
                                title="Tour virtual 360"
                                className={`h-full w-full ${iframeReady ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
                                allow="fullscreen; xr-spatial-tracking; gyroscope; accelerometer"
                                allowFullScreen
                                loading="eager"
                                referrerPolicy="no-referrer-when-downgrade"
                                onLoad={() => setIframeReady(true)}
                            />
                            <button
                                ref={closeBtnRef}
                                onClick={closeModal}
                                className="absolute right-4 top-4 rounded-md bg-neutral-800/70 px-3 py-1.5 text-xs font-sans text-neutral-200 hover:bg-neutral-700/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60"
                                aria-label="Fechar"
                            >
                                Fechar
                            </button>
                        </div>
                        <div className="mt-3 flex justify-between px-1">
              <span className="font-sans text-[11px] tracking-wide text-neutral-400">
                Use Esc para fechar
              </span>
                            <a
                                href={tourUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-sans text-[11px] text-brand-gold/80 hover:text-brand-gold"
                            >
                                Abrir em nova guia
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};