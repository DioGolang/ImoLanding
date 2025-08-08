import type {Metadata} from "next";
import {Playfair_Display, Source_Sans_3} from 'next/font/google';
import "./globals.css";
import {QueryProvider} from "@/infrastructure/lib/query-provider";

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['700'],
    variable: '--font-playfair',
});
const sourceSans = Source_Sans_3({
    subsets: ['latin'],
    weight: ['400', '600'],
    variable: '--font-source-sans',
});

export const metadata: Metadata = {
    title: 'Planik',
    description: 'Empreedimentos',
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className="!scroll-smooth">
        <body className={`${playfair.variable} ${sourceSans.variable} font-sans bg-white`}>
        <QueryProvider>
            {children}
        </QueryProvider>
        </body>
        </html>
    );
}
