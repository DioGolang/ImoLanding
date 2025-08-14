// src/ui/components/common/WhatsAppButtonWrapper.tsx
'use client';

import React from 'react';
import { FloatingWhatsAppButton } from '@/ui/components/common/FloatingWhatsAppButton';

interface WhatsAppButtonWrapperProps {
    phone: string;
    message: string;
}

export function WhatsAppButtonWrapper({ phone, message }: WhatsAppButtonWrapperProps) {
    const handleClickTrack = (href: string) => {
        window.gtag?.('event', 'click_whatsapp', { href });
    };

    return (
        <FloatingWhatsAppButton
            phone={phone}
            message={message}
            tooltip="Fale conosco via WhatsApp"
            position="right"
            bottomOffsetPx={32}
            hideOnScrollDown
            bounce
            onClickTrack={handleClickTrack}
        />
    );
}