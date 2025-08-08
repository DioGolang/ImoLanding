'use client';

import { database } from '@/data/project';
import { notFound, useParams } from 'next/navigation';
import { Header } from '@/ui/components/layout/Header';
import { Footer } from '@/ui/components/layout/Footer';

import { HeroSection } from '@/ui/components/landing-page/HeroSection';

export default function RealEstateDevelopmentPage() {
    const params = useParams();
    const projectSlug = params.empreendimentoSlug as string;

    const development = database.Project.find(
        (p) => p.slug === projectSlug
    );

    if (!development) {
        notFound();
    }

    const navLinks = [
        { href: '#beneficios', label: 'Benefícios' },
        { href: '#localizacao', label: 'Localização' },
        { href: '#galeria', label: 'Galeria' },
        { href: '#contato', label: 'Contato' },
    ];

    return (
        <>
            <Header projectName={development.name} navLinks={navLinks} />
            <main>
                {/* Passamos todos os dados necessários para a HeroSection */}
                <HeroSection
                    headline={development.headline}
                    subheadline={development.subheadline}
                    ctaText={development.cta.buttonText}
                    posterUrl={development.images[0]}
                    // videoUrl="/videos/taj-residences.mp4" // Você precisará adicionar um vídeo na pasta public/
                />

                {/*
          Aqui entrarão as outras seções:
          <IntroSection ... />
          <BenefitsSection ... />
          <LocationSection ... />
          <GallerySection ... />
          <LeadCaptureSection ... />
        */}
            </main>
            <Footer projectName={development.name} address={development.location.address} />
        </>
    );
}