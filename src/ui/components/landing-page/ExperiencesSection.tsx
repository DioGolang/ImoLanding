import type { Project } from '@/domain/types/project.types';
import Image from 'next/image';

interface ExperiencesSectionProps {
    copy: string;
    imageUrl: string;
    projectName: string;
}

export const ExperiencesSection = ({ copy, imageUrl, projectName }: ExperiencesSectionProps) => {
    return (
        <section id="diferenciais" className="py-24 bg-brand-primary text-white">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* Coluna da Imagem */}
                <div className="w-full aspect-w-4 aspect-h-3 relative rounded-lg overflow-hidden shadow-2xl">
                    <Image
                        src={imageUrl}
                        alt={`Área de lazer do ${projectName}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                {/* Coluna do Texto */}
                <div>
                    <h2 className="text-4xl font-bold font-serif">
                        Cenários para as suas melhores memórias.
                    </h2>
                    <p className="mt-6 text-gray-300 text-lg leading-relaxed">
                        {copy}
                    </p>
                </div>
            </div>
        </section>
    );
};