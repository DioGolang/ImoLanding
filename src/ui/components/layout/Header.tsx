'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from '../shared/Icons';
import { cn } from '@/infrastructure/lib/utils';
import { Button } from '../shared/Button';

interface HeaderProps {
    projectName: string;
    navLinks: { href: string; label: string }[];
    ctaText: string;
}

const Logo = ({ projectName }: { projectName: string }) => {
    const [brandName, ...rest] = projectName.split(' ');
    const brandSuffix = rest.join(' ');

    return (
        <a
            href="#"
            className="group text-2xl font-bold tracking-wider text-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60 rounded"
            aria-label="Home"
        >
            <span className="text-neutral-100">{brandName}</span>{' '}
            {brandSuffix && (
                <span className="text-brand-gold group-hover:drop-shadow-[0_0_4px_rgba(212,182,98,0.55)] transition">
                    {brandSuffix}
                </span>
            )}
        </a>
    );
};

const DesktopNav = ({ navLinks, ctaText, scrollTo }: { navLinks: HeaderProps['navLinks'], ctaText: string, scrollTo: (selector: string) => void }) => {
    const linkClasses = 'relative px-0.5 py-0.5 text-sm tracking-wide uppercase font-medium text-neutral-200/90 hover:text-brand-gold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60 rounded';

    return (
        <>
            <nav className="hidden md:flex items-center gap-8">
                {navLinks.map(link => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={e => {
                            e.preventDefault();
                            scrollTo(link.href);
                        }}
                        className={linkClasses}
                    >
                        {link.label}
                    </a>
                ))}
            </nav>
            <div className="hidden md:block">
                <Button
                    variant="primary"
                    className="!bg-brand-gold !text-neutral-900 hover:brightness-110 focus-visible:ring-2 focus-visible:ring-brand-gold/60"
                    onClick={() => scrollTo('#contato')}
                >
                    {ctaText}
                </Button>
            </div>
        </>
    );
};

// Sub-componente para a Navegação Mobile com Animação
const MobileNav = ({ navLinks, ctaText, isOpen, scrollTo }: { navLinks: HeaderProps['navLinks'], ctaText: string, isOpen: boolean, scrollTo: (selector: string) => void }) => {
    const linkClasses = 'relative px-0.5 py-0.5 text-base tracking-wide uppercase font-medium text-neutral-200/90 hover:text-brand-gold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60 rounded';

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="md:hidden absolute top-full left-0 w-full bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800"
                >
                    <nav className="flex flex-col items-center gap-4 py-5">
                        {navLinks.map(link => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={e => {
                                    e.preventDefault();
                                    scrollTo(link.href);
                                }}
                                className={linkClasses}
                            >
                                {link.label}
                            </a>
                        ))}
                        <Button
                            variant="primary"
                            className="w-11/12 max-w-sm mt-4 !bg-brand-gold !text-neutral-900 hover:brightness-110 focus-visible:ring-2 focus-visible:ring-brand-gold/60"
                            onClick={() => scrollTo('#contato')}
                        >
                            {ctaText}
                        </Button>
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
};


// Componente Principal Refatorado
export const Header = ({ projectName, navLinks, ctaText }: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Verifica o estado inicial no carregamento
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (selector: string) => {
        document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsMenuOpen(false);
    };

    return (
        <header
            className={cn(
                'sticky top-0 z-50 font-serif transition-all duration-300 border-b',
                isScrolled
                    ? 'bg-neutral-950/80 backdrop-blur-md border-neutral-800 shadow-lg'
                    : 'bg-transparent border-transparent'
            )}
        >
            <div className="container mx-auto flex items-center justify-between px-6 py-4 relative">
                <Logo projectName={projectName} />
                <DesktopNav navLinks={navLinks} ctaText={ctaText} scrollTo={scrollTo} />

                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(o => !o)}
                        aria-label="Alternar menu de navegação"
                        aria-expanded={isMenuOpen}
                        className="p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60 text-neutral-200 hover:text-brand-gold transition"
                    >
                        {isMenuOpen ? <XIcon /> : <MenuIcon />}
                    </button>
                </div>

                <MobileNav navLinks={navLinks} ctaText={ctaText} isOpen={isMenuOpen} scrollTo={scrollTo} />
            </div>
        </header>
    );
};