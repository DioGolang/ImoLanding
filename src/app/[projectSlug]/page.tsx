'use client';

import { database } from '@/data/project';
import { notFound, useParams } from 'next/navigation';
import { Header } from '@/ui/components/layout/Header';
import { Footer } from '@/ui/components/layout/Footer';

import { HeroSection } from '@/ui/components/landing-page/HeroSection';
import { ContactHighlightSection } from '@/ui/components/landing-page/ContactHighlightSection';
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
import {ProblemSolutionSection} from "@/ui/components/landing-page/ProblemSolutionSection";
import {PlanikOneSection} from "@/ui/components/landing-page/PlanikOneSection";
import {NearbySection} from "@/ui/components/landing-page/NearbySection";
import {KeyDetailsSection} from "@/ui/components/landing-page/KeyDetailsSection";
import {FeaturesSection} from "@/ui/components/landing-page/FeaturesSection";


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
            <Header
                projectName={development.name}
                navLinks={navLinks}
                ctaText={development.cta.buttonText}
            />
            <main>
                {/* 1. ATENÇÃO */}
                <HeroSection
                    headline={development.headline}
                    subheadline={development.subheadline}
                    ctaText={development.cta.buttonText}
                    posterUrl={development.bannerImage}
                    //videoUrl={development.bannerVideo}
                 />

                <KeyDetailsSection unitDetails={development.unitDetails} />

                {/* 2. INTERESSE */}
                <ProblemSolutionSection />

               {/*<ContactHighlightSection />*/}

                <IntroSection
                    title="Um lugar para pertencer."
                    text={development.copy.opening}
                />

                {/* 3. DESEJO */}
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

                <NearbySection nearbyLocations={development.nearbyLocations} />

                <ExperiencesSection
                    copy={development.copy.leisure}
                    imageUrl={experienceImageUrl}
                    projectName={development.name}
                />

                <GallerySection images={development.images} projectName={development.name} />

                <FloorPlanSection floorPlans={development.floorPlans} />

                <FeaturesSection features={development.features} />

                <PlanikOneSection />

                <TourSection
                    tourUrl={development.virtualTourUrl}
                    previewImageUrl={development.images[5]}
                />

                <LeadCaptureSection />
                <StickyInquiryBar cta={development.cta} contact={development.contact} />

            </main>
            <Footer projectName={development.name} address={development.location.address} />
        </>
    );
}