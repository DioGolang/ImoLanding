'use client';
import React, { useEffect, useState } from 'react';

interface StickyInquiryBarProps {
    whatsappLink?: string;
    phone?: string;
    ctaLabel?: string;
    ctaHref?: string;
}
export const StickyInquiryBar: React.FC<StickyInquiryBarProps> = ({
                                                                      whatsappLink = 'https://wa.me/5500000000000',
                                                                      phone = '(00) 0000-0000',
                                                                      ctaLabel = 'Quero saber mais',
                                                                      ctaHref = '#contato'
                                                                  }) => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 320);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return (
        <div
            className={`fixed inset-x-0 bottom-0 z-40 md:hidden transition-transform duration-300 ${
                visible ? 'translate-y-0' : 'translate-y-full'
            }`}
        >
            <div className="mx-4 mb-4 rounded-xl shadow-xl bg-white ring-1 ring-black/5 flex overflow-hidden">
                <a
                    href={whatsappLink}
                    className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium text-white bg-green-600 hover:bg-green-500"
                    aria-label="WhatsApp"
                >
                    WhatsApp
                </a>
                <a
                    href={`tel:${phone.replace(/\D/g, '')}`}
                    className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium text-brand-primary bg-brand-gold hover:brightness-110"
                >
                    {phone}
                </a>
                <a
                    href={ctaHref}
                    className="flex-1 flex items-center justify-center py-3 text-sm font-medium text-white bg-brand-primary hover:bg-brand-primary/90"
                >
                    {ctaLabel}
                </a>
            </div>
        </div>
    );
};