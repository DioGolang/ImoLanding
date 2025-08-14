import React from 'react';
import { Button } from '../shared/Button';
import { ArrowRight } from '../shared/Icons';

interface HeroSectionProps {
    headline: string;
    subheadline: string;
    ctaText: string;
    posterUrl: string;      // fallback image (also used as video poster)
    videoUrl?: string;      // optional mp4
    scrollTargetSelector?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
                                                            headline,
                                                            subheadline,
                                                            ctaText,
                                                            posterUrl,
                                                            videoUrl,
                                                            scrollTargetSelector = '#contato'
                                                        }) => {
    const scrollTo = (selector: string) => {
        if (typeof window !== 'undefined') {
            document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="hero"
            className="relative text-white h-screen flex items-center justify-center bg-brand-primary font-serif overflow-hidden"
        >
            {/* Background media (video > image > gradient) */}
            {videoUrl ? (
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    // eslint-disable-next-line jsx-a11y/media-has-caption
                    poster={posterUrl}
                >
                    <source src={videoUrl} type="video/mp4" />
                </video>
            ) : posterUrl ? (
                <img
                    src={posterUrl}
                    alt={headline || 'Banner'}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                />
            ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-primary/70" />
            )}

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60 z-10" />

            {/* Text content */}
            <div className="relative container mx-auto px-6 text-center z-20 flex flex-col items-center">
                <h1 className="text-4xl md:text-6xl font-bold mt-4 max-w-4xl leading-tight drop-shadow-lg">
                    {headline}
                </h1>
                <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-200 font-sans drop-shadow-md">
                    {subheadline}
                </p>
                <div className="mt-10">
                    <Button
                        variant="primary"
                        className="text-lg px-10 py-4"
                        onClick={() => scrollTo(scrollTargetSelector)}
                    >
                        {ctaText} <ArrowRight />
                    </Button>
                </div>
            </div>
        </section>
    );
};