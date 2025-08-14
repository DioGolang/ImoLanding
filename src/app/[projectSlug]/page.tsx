'use client';

import { database } from '@/data/project';
import { notFound, useParams } from 'next/navigation';
import { Header } from '@/ui/components/layout/Header';
import { Footer } from '@/ui/components/layout/Footer';

import { HeroSection } from '@/ui/components/landing-page/HeroSection';
import {IntroSection} from "@/ui/components/landing-page/IntroSection";
import {BenefitsSection} from "@/ui/components/landing-page/BenefitsSection";
import { CopySection } from '@/ui/components/landing-page/CopySection';
import {LocationSection} from "@/ui/components/landing-page/LocationSection";
import {ExperiencesSection} from "@/ui/components/landing-page/ExperiencesSection";
import {GallerySection} from "@/ui/components/landing-page/GallerySection";
import {LeadCaptureSection} from "@/ui/components/landing-page/LeadCaptureSection";
import {TourSection} from "@/ui/components/landing-page/TourSection";
import {FloorPlanSection} from "@/ui/components/landing-page/FloorPlanSection";
import { StickyInquiryBar } from '@/ui/components/landing-page/StickyInquiryBar';


export default function RealEstateDevelopmentPage() {
    const params = useParams();
    const projectSlug = params.projectSlug as string;

    const development = database.projects.find(
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

    const experienceImageUrl = [...development.images].find(img => img.includes('fachada')) || development.images[8];
    return (
        <>
            <Header projectName={development.name} navLinks={navLinks} />
            <main>
                <HeroSection
                    headline={development.headline}
                    subheadline={development.subheadline}
                    ctaText={development.cta.buttonText}
                    posterUrl={development.bannerImage}
                    videoUrl={development.bannerVideo}
                 />

                <IntroSection
                    title="Um lugar para pertencer."
                    text={development.copy.opening}
                />
                <BenefitsSection benefits={development.benefits} />

                <CopySection
                    id="sobre"
                    eyebrow="Sobre o Empreendimento"
                    title="Arquitetura que combina conforto e elegância"
                    text="Cada metro foi planejado para maximizar a iluminação natural, criar fluxos inteligentes e proporcionar experiências memoráveis em família."
                    highlightWords={['conforto', 'elegância']}
                    ctaLabel="Fale com um consultor"
                    ctaHref="#contato"
                />

                <LocationSection
                    location={development.location}
                    copy={development.copy.location}
                />

                <ExperiencesSection
                    copy={development.copy.leisure}
                    imageUrl={experienceImageUrl}
                    projectName={development.name}
                />

                <GallerySection images={development.images} projectName={development.name} />

                <FloorPlanSection floorPlans={development.floorPlans} />

                <TourSection
                    tourUrl={development.virtualTourUrl}
                    previewImageUrl={development.images[5]}
                />

                <LeadCaptureSection cta={development.cta} />
                <StickyInquiryBar whatsappLink="https://wa.me/5548999999999" phone="(48) 99999-9999" />

            </main>
            <Footer projectName={development.name} address={development.location.address} />
        </>
    );
}