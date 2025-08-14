import React from 'react';

interface ContactHighlightSectionProps {
    title?: string;
    subtitle?: string;
    ctaText?: string;
    scrollTargetSelector?: string;
}

export const ContactHighlightSection: React.FC<ContactHighlightSectionProps> = ({
                                                                                    title = 'Agende sua visita exclusiva',
                                                                                    subtitle = 'Converse com especialista e descubra cada detalhe deste projeto singular.',
                                                                                    ctaText = 'Fale agora',
                                                                                    scrollTargetSelector = '#contato',
                                                                                }) => {
    const scrollTo = (selector: string) => {
        document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section
            className="relative bg-neutral-950 py-24 px-6 font-serif overflow-hidden"
            aria-labelledby="contact-highlight-heading"
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(212,182,98,0.08),transparent_65%)]" />
            <div className="relative max-w-5xl mx-auto text-center">
                <h2
                    id="contact-highlight-heading"
                    className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-50"
                >
                    {title}
                    <span className="block mt-4 text-base md:text-lg font-sans font-normal text-neutral-300 leading-relaxed">
            {subtitle}
          </span>
                </h2>
                <div className="mt-12 flex justify-center">
                    <button
                        onClick={() => scrollTo(scrollTargetSelector)}
                        className="relative inline-flex items-center gap-2 rounded-full px-10 py-4 bg-gradient-to-b from-brand-gold to-brand-gold/85 text-neutral-900 font-semibold text-sm md:text-base shadow-[0_4px_18px_-4px_rgba(212,182,98,0.55)] hover:shadow-[0_6px_28px_-6px_rgba(212,182,98,0.65)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60 active:translate-y-[1px] after:absolute after:inset-0 after:rounded-full after:bg-[linear-gradient(115deg,rgba(255,255,255,0.55),rgba(255,255,255,0)_32%)] after:opacity-40"
                        type="button"
                    >
                        {ctaText}
                    </button>
                </div>
            </div>
        </section>
    );
};