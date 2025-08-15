'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, ListPlus } from 'lucide-react';
import type { Project } from '@/domain/types/project.types';

interface StickyInquiryBarProps {
    cta: Project['cta'];
    contact: Project['contact'];
}

export const StickyInquiryBar: React.FC<StickyInquiryBarProps> = ({ cta, contact }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const whatsappLink = `https://wa.me/${contact.whatsapp}`;
    const telLink = `tel:${contact.phone.replace(/\D/g, '')}`;

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    // Posicionamento base para o container flutuante
                    className="fixed bottom-4 right-4 z-40"
                >
                    {/* ================================================================== */}
                    {/* Layout para Desktop (com os textos e botões atualizados) */}
                    {/* ================================================================== */}
                    <div className="hidden md:block bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-2xl ring-1 ring-black/5 dark:ring-white/10 w-64 space-y-3">
                        <a
                            href="#contato"
                            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-brand-primary hover:bg-brand-primary/90 dark:bg-brand-gold dark:hover:brightness-110 rounded-md transition-colors"
                        >
                            <ListPlus className="w-4 h-4" />
                            Solicitar Contato
                        </a>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors"
                        >
                            <MessageSquare className="w-4 h-4" />
                            WhatsApp
                        </a>
                        <a href={telLink} className="w-full inline-flex items-center justify-center gap-2 text-sm text-neutral-600 dark:text-neutral-300 hover:text-brand-primary dark:hover:text-white">
                            <Phone className="w-4 h-4" />
                            ou Ligue: {contact.phone}
                        </a>
                    </div>

                    {/* Layout para Mobile (barra inferior) */}
                    <div className="md:hidden fixed inset-x-4 bottom-4 rounded-xl shadow-2xl bg-white dark:bg-neutral-800 ring-1 ring-black/5 dark:ring-white/10 flex overflow-hidden font-medium text-sm">
                        <a
                            href="#contato"
                            className="flex-1 flex items-center justify-center text-center py-3 text-white bg-brand-primary hover:bg-brand-primary/90"
                        >
                            Solicitar Contato
                        </a>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-3 text-white bg-green-600 hover:bg-green-500"
                            aria-label="WhatsApp"
                        >
                            WhatsApp
                        </a>
                        <a
                            href={telLink}
                            className="flex-1 flex items-center justify-center text-center py-3 text-neutral-900 bg-brand-gold hover:brightness-110"
                        >
                            ou Ligue
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};