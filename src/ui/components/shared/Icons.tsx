'use client';
import React from 'react';

type IconProps = {
    children: React.ReactNode;
    className?: string;
};
export const IconWrapper = ({ children, className = '' }: IconProps) => (
    <svg
        className={`w-8 h-8 inline-block ${className}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {children}
    </svg>
);

export const SignatureIcon = () => <IconWrapper><path d="M22 10.5c0 .8-.3 1.5-.8 2s-1.2.8-2 .8H8.5c-.8 0-1.5-.3-2-.8s-.8-1.2-.8-2 .3-1.5.8-2 1.2-.8 2-.8h10.2c.8 0 1.5.3 2 .8s.8 1.2.8 2zM7 15h2M15 15h2M2 10.5h1.5" /><path d="M7.5 10.5c0-1.2.4-2.3 1.2-3.2s1.9-1.5 3.1-1.5 2.3.5 3.2 1.5 1.2 2 1.2 3.2" /></IconWrapper>;
export const CreativeIcon = () => <IconWrapper><path d="M12 3a9 9 0 0 0 9 9 9 9 0 1 1-9-9Z" /><path d="m9 12 2-2 4 4" /><path d="M12 12h.01" /></IconWrapper>;
export const GeneratorIcon = () => <IconWrapper><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" /><path d="M12 12v6" /><path d="m15 9-3 3-3-3" /></IconWrapper>;
export const ResortIcon = () => <IconWrapper><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /><path d="m14 14-2-2-2 2" /></IconWrapper>;
export const EVChargerIcon = () => <IconWrapper><path d="M5 12V6a2 2 0 0 1 2-2h4v4h4v4h-4V8h-4v4Z" /><path d="M8 16h1a2 2 0 0 1 2 2v4" /><path d="M12 16h-1a2 2 0 0 0-2 2v4" /><path d="M17 14h.01" /><path d="M17 18h.01" /></IconWrapper>;
export const VideoIcon = () => <IconWrapper><path d="m22 8-6 4 6 4V8Z" /><rect x="2" y="6" width="14" height="12" rx="2" ry="2"></rect></IconWrapper>;
export const ArrowRight = () => <IconWrapper><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></IconWrapper>;
export const MenuIcon = () => <IconWrapper><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></IconWrapper>;
export const XIcon = () => <IconWrapper><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></IconWrapper>;