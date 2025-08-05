import { database } from '@/data/project';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { HeroSection } from '@/ui/components/landing-page/HeroSection';
import { BenefitsSection } from '@/ui/components/landing-page/BenefitsSection';
import { CTASection } from '@/ui/components/landing-page/CTASection';
import { CopySection } from '@/ui/components/landing-page/CopySection';
import {GallerySection} from "@/ui/components/landing-page/GallerySection";

type Props = {
    params: { projectSlug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { projectSlug } = params;
    const development = database.Project.find(
        (p) => p.slug === projectSlug
    );

    if (!development) {
        return { title: 'Empreendimento não encontrado' };
    }

    return {
        title: `${development.name} | ${development.location.neighborhood}`,
        description: development.subheadline,
    };
}

export async function generateStaticParams() {
    return database.Project.map((development) => ({
        projectSlug: development.slug,
    }));
}

export default function RealEstateDevelopmentPage({ params }: Props) {
    const { projectSlug } = params;
    const development = database.Project.find(
        (p) => p.slug === projectSlug
    );

    if (!development) {
        notFound();
    }

    const globalColorStyles = `
    :root {
      --color-primary: ${development.colors.primary};
      --color-secondary: ${development.colors.secondary};
      --color-text-primary: ${development.colors.textPrimary};
      --color-text-secondary: ${development.colors.textSecondary};
    }
  `;

    return (
        <div className="w-full">
            <style>{globalColorStyles}</style>

            <HeroSection
                headline={development.headline}
                subheadline={development.subheadline}
                imageUrl={development.images[0]} // Usamos a primeira imagem como destaque
            />

            <CopySection
                title="Uma Obra de Arte Habitável"
                text={development.copy.opening}
            />

            <BenefitsSection benefits={development.benefits} />

            <GallerySection images={development.images} projectName={development.name} />

            {/*/!* Aqui entrarão os outros componentes: galeria, localização, etc. *!/*/}

            <CTASection cta={development.cta} />
        </div>
    );
}