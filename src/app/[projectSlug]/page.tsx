import { database } from '@/data/project';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// Importação dos componentes de UI que vamos criar a seguir
import { HeroSection } from '@/ui/components/landing-page/HeroSection';
// import { BenefitsSection } from '@/ui/components/landing-page/BenefitsSection';
// import { CTASection } from '@/ui/components/landing-page/CTASection';
// import { CopySection } from '@/ui/components/landing-page/CopySection';


// Tipagem para as props do componente, fornecidas pelo Next.js
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


// O componente da página em si
export default function RealEstateDevelopmentPage({ params }: Props) {
    const { projectSlug } = params;
    const development = database.Project.find(
        (p) => p.slug === projectSlug
    );

    // Se o slug na URL não corresponder a nenhum empreendimento em nossos dados,
    // renderizamos a página de "Não Encontrado" (404) do Next.js.
    if (!development) {
        notFound();
    }

    // Injetando as cores do empreendimento como variáveis CSS globais
    // para que os componentes filhos possam usá-las facilmente com Tailwind CSS.
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

            {/* Cada seção da landing page é um componente que recebe apenas os dados
        de que precisa, seguindo o princípio da responsabilidade única. */}

            <HeroSection
                headline={development.headline}
                subheadline={development.subheadline}
                imageUrl={development.images[0]} // Usamos a primeira imagem como destaque
            />

            {/*<CopySection*/}
            {/*    title="Uma Obra de Arte Habitável"*/}
            {/*    text={development.copy.opening}*/}
            {/*/>*/}

            {/*<BenefitsSection benefits={development.benefits} />*/}

            {/*/!* Aqui entrarão os outros componentes: galeria, localização, etc. *!/*/}

            {/*<CTASection cta={development.cta} />*/}
        </div>
    );
}