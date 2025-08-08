import React from 'react';
import { Button } from '../shared/Button';
import { ArrowRight } from '../shared/Icons';

interface HeroSectionProps {
    headline: string;
    subheadline: string;
    ctaText: string;
    posterUrl: string;
    videoUrl?: string;
}

export const HeroSection = ({ headline, subheadline, ctaText, posterUrl, videoUrl }: HeroSectionProps) => {
    const scrollTo = (selector: string) => {
        if (typeof window !== "undefined") {
            document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="relative text-white h-screen flex items-center bg-gray-900 font-serif overflow-hidden">
            {/* Container do Vídeo/Imagem de Fundo */}
            <div className="absolute inset-0 z-0">
                {videoUrl ? (
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover" poster={posterUrl}>
                        <source src={videoUrl} type="video/mp4" />
                    </video>
                ) : (
                    // Caso não haja vídeo, usamos o poster como imagem de fundo
                    <img src={posterUrl} alt={headline} className="w-full h-full object-cover" />
                )}
            </div>

            {/* Sobreposição escura para contraste */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

            {/* Conteúdo de Texto */}
            <div className="relative container mx-auto px-6 text-center z-20">
                <h1 className="text-5xl md:text-7xl font-bold mt-4 leading-tight drop-shadow-lg">
                    {headline}
                </h1>
                <p className="mt-6 text-lg md:text-xl max-w-4xl mx-auto text-gray-200 font-sans drop-shadow-md">
                    {subheadline}
                </p>
                <div className="mt-10">
                    <Button variant="primary" className="text-lg" onClick={() => scrollTo('#contato')}>
                        {ctaText} <ArrowRight />
                    </Button>
                </div>
            </div>
        </section>
    );
};