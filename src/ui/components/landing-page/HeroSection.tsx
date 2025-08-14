import React from 'react';

interface HeroSectionProps {
    headline?: string;
    subheadline?: string;
    ctaText?: string;
    posterUrl: string;
    videoUrl?: string;
    scrollTargetSelector?: string;
    overlay?: 'none' | 'soft' | 'dark';
    blurTextBg?: boolean;
    tagline?: string;
    ctaVariant?: 'gold' | 'glass' | 'outline';
    hideContent?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
                                                            headline,
                                                            subheadline,
                                                            ctaText,
                                                            posterUrl,
                                                            videoUrl,
                                                            scrollTargetSelector = '#contato',
                                                            overlay = 'soft',
                                                            blurTextBg = true,
                                                            tagline,
                                                            ctaVariant = 'gold',
                                                            hideContent = true, // now default: no overlay text
                                                        }) => {
    const scrollTo = (selector: string) => {
        if (typeof window !== 'undefined') {
            document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const overlayElement =
        overlay === 'none'
            ? null
            : overlay === 'soft'
                ? (
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_60%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.12)_68%,rgba(0,0,0,0.28)_100%)]"
                    />
                )
                : <div aria-hidden className="absolute inset-0 bg-black/55 z-10" />;

    const ctaBase =
        'relative inline-flex items-center gap-2 rounded-full text-sm md:text-base font-semibold tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-gold/70 focus-visible:ring-offset-black transition-all';
    const ctaStyles: Record<string, string> = {
        gold: [
            ctaBase,
            'px-10 py-4 bg-gradient-to-b from-brand-gold to-brand-gold/85 text-neutral-900',
            'shadow-[0_4px_18px_-4px_rgba(212,182,98,0.55),0_0_0_1px_rgba(120,90,10,0.25)]',
            'hover:shadow-[0_6px_28px_-6px_rgba(212,182,98,0.65),0_0_0_1px_rgba(140,110,30,0.35)]',
            'after:absolute after:inset-0 after:rounded-full after:bg-[linear-gradient(115deg,rgba(255,255,255,0.55),rgba(255,255,255,0)_32%)] after:opacity-40 after:pointer-events-none',
            'active:translate-y-[1px]',
        ].join(' '),
        glass: [
            ctaBase,
            'px-10 py-4 bg-white/8 backdrop-blur-md text-neutral-50',
            'border border-white/15',
            'hover:bg-white/12 hover:border-white/25',
            'shadow-[0_2px_12px_-2px_rgba(0,0,0,0.55)]',
            'active:translate-y-[1px]',
        ].join(' '),
        outline: [
            ctaBase,
            'px-10 py-4 border border-brand-gold/55 text-brand-gold',
            'hover:bg-brand-gold hover:text-neutral-900',
            'shadow-[0_0_0_1px_rgba(212,182,98,0.4)] hover:shadow-[0_4px_20px_-4px_rgba(212,182,98,0.55)]',
            'active:translate-y-[1px]',
        ].join(' '),
    };

    return (
        <section
            id="hero"
            className="relative text-white h-[min(100vh,860px)] flex items-center justify-center font-serif overflow-hidden"
        >
            {videoUrl ? (
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={posterUrl}
                >
                    <source src={videoUrl} type="video/mp4" />
                </video>
            ) : (
                <img
                    src={posterUrl}
                    alt={headline || 'Hero media'}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                />
            )}

            {overlayElement}

            {!hideContent && (
                <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center">
                    <div
                        className={[
                            'max-w-5xl mx-auto',
                            blurTextBg ? 'relative px-6 md:px-10 py-10 rounded-2xl' : '',
                            blurTextBg
                                ? 'before:absolute before:inset-0 before:rounded-2xl before:bg-black/22 before:backdrop-blur-[3px] before:ring-1 before:ring-white/10'
                                : '',
                        ].join(' ')}
                    >
                        {tagline && (
                            <span className="relative mb-6 inline-block text-[11px] md:text-xs tracking-[0.28em] uppercase font-sans text-brand-gold/85">
                {tagline}
              </span>
                        )}
                        {headline && (
                            <h1
                                className="relative text-[2.4rem] md:text-[4rem] leading-[1.05] font-bold mx-auto bg-clip-text text-transparent bg-[linear-gradient(135deg,#ffffff_0%,#e9e4d2_38%,#d4b662_70%,#b6973f_100%)] drop-shadow-[0_6px_28px_rgba(0,0,0,0.55)]"
                            >
                                {headline}
                                <span className="block mx-auto mt-5 h-px w-32 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-70" />
                            </h1>
                        )}
                        {subheadline && (
                            <p className="relative mt-8 text-base md:text-xl max-w-3xl mx-auto font-sans text-neutral-100/95 leading-relaxed tracking-[0.01em] drop-shadow-[0_3px_18px_rgba(0,0,0,0.7)]">
                                {subheadline}
                            </p>
                        )}
                        {ctaText && (
                            <div className="relative mt-12 flex justify-center">
                                <button
                                    className={ctaStyles[ctaVariant]}
                                    onClick={() => scrollTo(scrollTargetSelector)}
                                    type="button"
                                >
                                    {ctaText}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};