'use client';

import React, { useRef, useMemo } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { cn } from '@/infrastructure/lib/utils';

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
    children?: React.ReactNode;
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
                                children,
                            }: CopySectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const highlightSet = useMemo(() => new Set(highlightWords), [highlightWords]);

    const renderHighlighted = (raw: string) => {
        if (highlightSet.size === 0) return raw;
        return raw.split(/(\s+)/).map((chunk, i) => {
            const key = `${chunk}-${i}`;
            const plain = chunk.replace(/\W/g, '');
            if (highlightSet.has(plain)) {
                return (
                    <span key={key} className="relative inline-block text-brand-primary dark:text-brand-gold">
                        <span className="relative z-10">{chunk}</span>
                    </span>
                );
            }
            return <React.Fragment key={key}>{chunk}</React.Fragment>;
        });
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
    };

    return (
        <motion.section
            ref={ref}
            id={id}
            className={cn('py-16 md:py-24 bg-white dark:bg-black', className)}
            aria-labelledby={`${id}-heading`}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <div className="container mx-auto px-4">
                <div className={cn('mx-auto', maxWidthMap[maxWidth], align === 'center' ? 'text-center' : 'text-left')}>
                    {eyebrow && (
                        <motion.p
                            variants={itemVariants}
                            className="text-sm font-semibold tracking-wider uppercase text-brand-gold mb-4"
                        >
                            {eyebrow}
                        </motion.p>
                    )}

                    <motion.div variants={itemVariants}>
                        <DynamicHeading
                            as={as}
                            id={`${id}-heading`}
                            className={cn('font-bold font-serif tracking-tight text-3xl md:text-4xl leading-tight text-brand-primary dark:text-neutral-100', titleClassName)}
                        >
                            {renderHighlighted(title)}
                        </DynamicHeading>
                    </motion.div>

                    {(children || text) && (
                        <motion.div
                            variants={itemVariants}
                            className={cn('mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300', paragraphClassName)}
                        >
                            {children ?? text}
                        </motion.div>
                    )}

                    {ctaLabel && ctaHref && (
                        <motion.div variants={itemVariants} className="mt-10">
                            <a
                                href={ctaHref}
                                className="inline-flex items-center gap-2 rounded-lg bg-brand-primary px-6 py-3 text-white font-medium shadow hover:bg-brand-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40 transition"
                            >
                                {ctaLabel}
                                <span aria-hidden="true">→</span>
                            </a>
                        </motion.div>
                    )}
                </div>
            </div>
        </motion.section>
    );
}