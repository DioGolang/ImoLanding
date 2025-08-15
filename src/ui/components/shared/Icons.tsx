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
export const SecurityIcon = () => (
    <IconWrapper>
        <path d="M12 22s8-4 8-10V7.2a2 2 0 0 0-1.2-1.8L12 3 5.2 5.4A2 2 0 0 0 4 7.2V12c0 6 8 10 8 10Z" />
        <path d="m9.2 12 2.1 2.1 3.5-3.5" />
    </IconWrapper>
);

export const SustainabilityIcon = () => (
    <IconWrapper>
        <path d="M12 22c4.4 0 8-3.6 8-8 0-3.2-2.7-6-6-6-1.6 0-3 .6-4.1 1.7A5.8 5.8 0 0 0 12 22Z" />
        <path d="M2 12c0 2.9 1.6 5.5 4 6.9-.6-4.4 1.9-8.3 5.5-9.9a8 8 0 0 0-9.5 3Z" />
        <path d="M12 12v4l2 2" />
    </IconWrapper>
);

export const BuildingIcon = () => <IconWrapper><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><rect x="2" y="8" width="20" height="12" rx="2" /><path d="M12 12h.01" /></IconWrapper>;
export const MapPinIcon = () => <IconWrapper><path d="M21.3 12.3a9 9 0 1 1-12.6 0 9 9 0 0 1 12.6 0z" /><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /></IconWrapper>;
export const KeyIcon = () => <IconWrapper><path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4" /></IconWrapper>;
