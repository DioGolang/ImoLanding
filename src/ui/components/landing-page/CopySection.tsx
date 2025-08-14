'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface DynamicHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    as: HeadingLevel;
    children: React.ReactNode;
}
function DynamicHeading({ as: Tag, children, ...rest }: DynamicHeadingProps) {
    return <Tag {...rest}>{children}</Tag>;
}

export interface CopySectionProps {
    title: string;
    text?: string;
    as?: HeadingLevel;
    id?: string;
    align?: 'left' | 'center';
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    eyebrow?: string;
    highlightWords?: string[];
    ctaLabel?: string;
    ctaHref?: string;
    className?: string;
    titleClassName?: string;
    paragraphClassName?: string;
    disableAnimation?: boolean;
    children?: React.ReactNode;
    onVisibleOnce?: () => void;
}

const maxWidthMap: Record<NonNullable<CopySectionProps['maxWidth']>, string> = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-3xl',
    xl: 'max-w-5xl',
    full: 'max-w-none'
};

export function CopySection({
                                title,
                                text,
                                as = 'h2',
                                id = 'copy-section',
                                align = 'center',
                                maxWidth = 'lg',
                                eyebrow,
                                highlightWords = [],
                                ctaLabel,
                                ctaHref,
                                className = '',
                                titleClassName = '',
                                paragraphClassName = '',
                                disableAnimation,
                                children,
                                onVisibleOnce
                            }: CopySectionProps) {
    const rootRef = useRef<HTMLElement | null>(null);
    const [visible, setVisible] = useState(disableAnimation || false);
    const tracked = useRef(false);

    useEffect(() => {
        if (disableAnimation) return;
        const el = rootRef.current;
        if (!el) return;
        const io = new IntersectionObserver(
            entries => {
                for (const e of entries) {
                    if (e.isIntersecting) {
                        setVisible(true);
                        if (!tracked.current) {
                            onVisibleOnce?.();
                            tracked.current = true;
                        }
                        io.disconnect();
                        break;
                    }
                }
            },
            { threshold: 0.2 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, [disableAnimation, onVisibleOnce]);

    const highlightSet = useMemo(() => {
        const list = Array.isArray(highlightWords) ? highlightWords : [];
        return new Set(list.map(w => w.trim()).filter(Boolean));
    }, [highlightWords]);

    const renderHighlighted = (raw: string) => {
        if (!highlightSet.size) return raw;
        return raw.split(/(\s+)/).map((chunk, i) => {
            const key = `${chunk}-${i}`;
            const plain = chunk.replace(/\W/g, '');
            if (highlightSet.has(plain)) {
                return (
                    <span key={key} className="relative inline-block text-brand-primary">
            <span
                className="bg-brand-gold/30 dark:bg-brand-gold/20 absolute inset-x-0 bottom-0 h-2 rounded-sm"
                aria-hidden="true"
            />
            <span className="relative">{chunk}</span>
          </span>
                );
            }
            return <React.Fragment key={key}>{chunk}</React.Fragment>;
        });
    };

    const headingId = `${id}-heading`;

    return (
        <section
            id={id}
            ref={rootRef}
            className={[
                'py-16 md:py-24 bg-white text-gray-800',
                'transition-opacity duration-700 ease-out motion-reduce:transition-none',
                visible ? 'opacity-100' : 'opacity-0',
                className
            ].join(' ')}
            aria-labelledby={headingId}
        >
            <div className="container mx-auto px-4">
                <div
                    className={[
                        'mx-auto',
                        maxWidthMap[maxWidth],
                        align === 'center' ? 'text-center' : 'text-left'
                    ].join(' ')}
                >
                    {eyebrow && (
                        <p
                            className="text-sm font-medium tracking-wider uppercase text-brand-primary mb-4"
                            data-testid="copy-eyebrow"
                        >
                            {eyebrow}
                        </p>
                    )}

                    <DynamicHeading
                        as={as}
                        id={headingId}
                        className={[
                            'font-bold font-serif tracking-tight',
                            'text-3xl md:text-4xl',
                            'leading-tight',
                            titleClassName
                        ].join(' ')}
                        style={{ color: 'var(--color-text-primary)' }}
                    >
                        {renderHighlighted(title)}
                    </DynamicHeading>

                    {(children || text) && (
                        <div
                            className={[
                                'mt-6 text-lg leading-relaxed',
                                'text-gray-600',
                                paragraphClassName
                            ].join(' ')}
                            style={{ color: 'var(--color-text-secondary)' }}
                            data-testid="copy-body"
                        >
                            {children ?? text}
                        </div>
                    )}

                    {ctaLabel && ctaHref && (
                        <div className="mt-10">
                            <a
                                href={ctaHref}
                                className="inline-flex items-center gap-2 rounded-lg bg-brand-primary px-6 py-3 text-white font-medium shadow hover:bg-brand-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40 transition"
                            >
                                {ctaLabel}
                                <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}