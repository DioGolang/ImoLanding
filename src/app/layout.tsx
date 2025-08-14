import type { Metadata } from 'next';
import { Playfair_Display, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import { QueryProvider } from '@/infrastructure/lib/query-provider';
import React from 'react';
import {WhatsAppButtonWrapper} from "@/ui/components/common/WhatsAppButtonWrapper";

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['700'],
    variable: '--font-playfair'
});
const sourceSans = Source_Sans_3({
    subsets: ['latin'],
    weight: ['400', '600'],
    variable: '--font-source-sans'
});

export const metadata: Metadata = {
    title: 'Planik',
    description: 'Empreedimentos',
    applicationName: 'Planik',
    icons: [{ rel: 'icon', url: '/favicon.ico' }],
    openGraph: {
        title: 'Planik',
        description: 'Empreedimentos',
        type: 'website',
        locale: 'pt_BR',
        siteName: 'Planik',
        url: 'https://example.com'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Planik',
        description: 'Empreedimentos'
    },
    themeColor: [
        { media: '(prefers-color-scheme: dark)', color: '#0b0b0a' },
        { media: '(prefers-color-scheme: light)', color: '#f9f9f7' }
    ],
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1
    }
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Planik',
    url: 'https://example.com'
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '5511999999999';
    const message = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || 'Olá, gostaria de mais informações.';

    return (
        <html
            lang="pt-BR"
            className="!scroll-smooth"
            suppressHydrationWarning
        >
        <head>
            <script
                // Dark mode persistence (no flash)
                dangerouslySetInnerHTML={{
                    __html: `
(function(){
 try {
   const ls = localStorage.getItem('theme');
   const m = window.matchMedia('(prefers-color-scheme: dark)').matches;
   if (ls === 'dark' || (!ls && m)) document.documentElement.classList.add('dark');
 } catch(e){}
})();`
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </head>
        <body
            className={[
                playfair.variable,
                sourceSans.variable,
                // base + dark handled by .dark root
                'font-sans antialiased bg-[radial-gradient(circle_at_22%_25%,rgba(212,182,98,0.08),transparent_65%),radial-gradient(circle_at_80%_75%,rgba(212,182,98,0.05),transparent_60%),linear-gradient(180deg,var(--bg-base),var(--bg-base))',
                'dark:bg-[radial-gradient(circle_at_80%_25%,rgba(212,182,98,0.10),transparent_60%),radial-gradient(circle_at_20%_75%,rgba(212,182,98,0.06),transparent_65%),linear-gradient(180deg,#070707,#0d0d0c_55%,#10100f)]',
                'min-h-dvh text-[color:var(--fg-base)]'
            ].join(' ')}
        >
        <QueryProvider>{children}</QueryProvider>
        <WhatsAppButtonWrapper phone={phone} message={message} />
        </body>
        </html>
    );
}