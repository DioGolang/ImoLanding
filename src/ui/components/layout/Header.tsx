'use client';
import React, { useState, useEffect } from 'react';
import { Button } from '../shared/Button';
import { MenuIcon, XIcon } from '../shared/Icons';
import { cn } from '@/infrastructure/lib/utils';

interface HeaderProps {
    projectName: string;
    navLinks: { href: string; label: string }[];
}

export const Header = ({ projectName, navLinks }: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [brandName, brandSuffix] = projectName.split(' ');

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 8);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (selector: string) => {
        document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsMenuOpen(false);
    };

    const linkBase =
        'relative px-0.5 py-0.5 text-sm tracking-wide uppercase font-medium text-neutral-200/90 hover:text-brand-gold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60 rounded';

    return (
        <header
            className={cn(
                'sticky top-0 z-50 font-serif transition-colors duration-500 border-b',
                isScrolled
                    ? 'bg-gradient-to-r from-neutral-950/90 via-neutral-900/85 to-neutral-800/85 backdrop-blur-md border-neutral-800 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.55)]'
                    : 'bg-neutral-950/40 border-transparent'
            )}
        >
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                <a
                    href="#"
                    className="group text-2xl font-bold tracking-wider text-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60 rounded"
                    aria-label="Home"
                >
                    <span className="text-neutral-100">{brandName}</span>{' '}
                    <span className="text-brand-gold group-hover:drop-shadow-[0_0_4px_rgba(212,182,98,0.55)] transition">
            {brandSuffix}
          </span>
                </a>

                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={e => {
                                e.preventDefault();
                                scrollTo(link.href);
                            }}
                            className={linkBase}
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
                        Agende sua visita
                    </Button>
                </div>

                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(o => !o)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMenuOpen}
                        className="p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/60 text-neutral-200 hover:text-brand-gold transition"
                    >
                        {isMenuOpen ? <XIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>

            <div
                className={cn(
                    'md:hidden overflow-hidden transition-[max-height,opacity] duration-400 ease-out backdrop-blur-sm',
                    isMenuOpen
                        ? 'max-h-96 opacity-100 bg-neutral-950/90 border-t border-neutral-800'
                        : 'max-h-0 opacity-0'
                )}
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
                            className={cn(linkBase, 'text-base')}
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button
                        variant="primary"
                        className="w-11/12 max-w-sm !bg-brand-gold !text-neutral-900 hover:brightness-110 focus-visible:ring-2 focus-visible:ring-brand-gold/60"
                        onClick={() => scrollTo('#contato')}
                    >
                        Agende sua visita privativa
                    </Button>
                </nav>
            </div>
        </header>
    );
};