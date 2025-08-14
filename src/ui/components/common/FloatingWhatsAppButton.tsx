'use client'
import React, { useCallback, useEffect, useState } from 'react';

export interface FloatingWhatsAppButtonProps {
    phone: string;                  // Digits only: e.g. "5511999999999"
    message?: string;               // Prefilled message
    tooltip?: string;               // Hover / focus helper
    position?: 'right' | 'left';
    bottomOffsetPx?: number;
    hideOnScrollDown?: boolean;
    bounce?: boolean;
    className?: string;
    onClickTrack?: (href: string) => void;
}

export const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({
                                                                                  phone,
                                                                                  message = 'Olá, gostaria de mais informações.',
                                                                                  tooltip = 'Fale conosco via WhatsApp',
                                                                                  position = 'right',
                                                                                  bottomOffsetPx = 28,
                                                                                  hideOnScrollDown = true,
                                                                                  bounce = true,
                                                                                  className = '',
                                                                                  onClickTrack
}) => {
    const [hidden, setHidden] = useState(false);
    const [mounted, setMounted] = useState(false);
    const href = React.useMemo(() => {
        const base = `https://wa.me/${phone.replace(/\D/g, '')}`;
        const q = message ? `?text=${encodeURIComponent(message)}` : '';
        return base + q;
    }, [phone, message]);

    // Hide on scroll down (mobile friendly)
    useEffect(() => {
        setMounted(true);
        if (!hideOnScrollDown) return;
        let lastY = window.scrollY;
        const onScroll = () => {
            const y = window.scrollY;
            const goingDown = y > lastY + 8;
            const goingUp = y < lastY - 8;
            if (goingDown && !hidden) setHidden(true);
            if (goingUp && hidden) setHidden(false);
            lastY = y;
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [hideOnScrollDown, hidden]);

    const handleClick = useCallback(() => {
        onClickTrack?.(href);
    }, [onClickTrack, href]);

    return (
        <div
            className={[
                'fixed z-[60] print:hidden',
                position === 'right' ? 'right-5 sm:right-8' : 'left-5 sm:left-8',
                `bottom-[${bottomOffsetPx}px]`,
                // transition container
                'transition-all duration-500',
                hidden ? 'translate-y-40 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100',
                mounted ? '' : 'opacity-0',
            ].join(' ')}
        >
            <div className="relative group">
                {tooltip && (
                    <span
                        className={[
                            'pointer-events-none absolute -top-2',
                            position === 'right' ? 'right-16 origin-right' : 'left-16 origin-left',
                            'whitespace-nowrap rounded-md bg-neutral-900/90 px-3 py-1.5 text-xs font-sans text-neutral-200',
                            'opacity-0 translate-y-1 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0',
                            'transition-all duration-300 ease-luxury backdrop-blur-sm',
                            'shadow-[0_6px_24px_-8px_rgba(0,0,0,0.55)] border border-neutral-700/50'
                        ].join(' ')}
                        role="tooltip"
                    >
            {tooltip}
          </span>
                )}

                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tooltip || 'Contato via WhatsApp'}
                    // ring + hover states
                    className={[
                        'relative flex h-14 w-14 items-center justify-center rounded-2xl',
                        'bg-gradient-to-br from-[#25D366] to-[#128C7E]',
                        'text-white shadow-[0_8px_28px_-6px_rgba(16,185,129,0.55)]',
                        'transition-all duration-500 ease-luxury',
                        'hover:shadow-[0_10px_38px_-4px_rgba(16,185,129,0.70)] hover:scale-105',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950',
                        bounce ? 'animate-[wh-bounce_4s_ease-in-out_infinite]' : '',
                        className
                    ].join(' ')}
                    onClick={handleClick}
                    data-testid="floating-whatsapp-btn"
                >
                    <svg
                        aria-hidden="true"
                        width="28"
                        height="28"
                        viewBox="0 0 32 32"
                        fill="none"
                        className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]"
                    >
                        <path
                            fill="currentColor"
                            d="M16.04 3C9.42 3 4 8.3 4 14.82c0 2.61.92 5.02 2.48 6.98L4.63 27.7a.75.75 0 0 0 .94.99l6.3-1.97a12.5 12.5 0 0 0 4.17.69c6.62 0 12.04-5.3 12.04-11.82C28.08 8.3 22.66 3 16.04 3Zm0 21.9c-1.34 0-2.66-.2-3.91-.66a.77.77 0 0 0-.45-.03l-4.76 1.49 1.5-4.36a.76.76 0 0 0-.11-.68 9.9 9.9 0 0 1-2.15-6.43c0-5.26 4.4-9.54 9.88-9.54 5.48 0 9.96 4.28 9.96 9.54 0 5.26-4.48 9.67-9.96 9.67Zm5.44-7.24c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.73.93-.9 1.12-.17.19-.33.22-.62.07-.29-.15-1.23-.45-2.35-1.44-.87-.77-1.46-1.72-1.63-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.5.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49l-.54-.01c-.19 0-.5.07-.76.36-.26.29-.99.97-.99 2.37 0 1.4 1.02 2.75 1.16 2.94.15.19 2 3.21 4.94 4.38.69.3 1.23.48 1.65.61.69.22 1.31.19 1.8.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34Z"
                        />
                    </svg>
                    <span
                        className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/15"
                        aria-hidden="true"
                    />
                </a>
            </div>

            {/* Keyframes (scoped) */}
            <style jsx>{`
        @keyframes wh-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
        </div>
    );
};
