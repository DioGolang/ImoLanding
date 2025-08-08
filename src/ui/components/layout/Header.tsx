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
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (selector: string) => {
        document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    return (
        <header className={cn(
            "sticky top-0 z-50 text-white font-serif transition-all duration-300",
            isScrolled ? "bg-brand-primary bg-opacity-90 backdrop-blur-md shadow-lg" : "bg-black bg-opacity-30"
        )}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-3xl font-bold tracking-wider">
                    {brandName} <span className="text-brand-gold">{brandSuffix}</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8 text-lg">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href); }} className="hover:text-brand-gold transition-colors duration-300">
                            {link.label}
                        </a>
                    ))}
                </nav>
                <div className="hidden md:block">
                    <Button variant="primary" onClick={() => scrollTo('#contato')}>Agende sua visita</Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
                        {isMenuOpen ? <XIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-900 bg-opacity-95">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        {navLinks.map(link => (
                            <a key={link.href} href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href); }} className="hover:text-brand-gold transition-colors duration-300 text-lg">
                                {link.label}
                            </a>
                        ))}
                        <Button variant="primary" className="mt-4" onClick={() => scrollTo('#contato')}>
                            Agende sua visita privativa
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
};