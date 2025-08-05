import type { Project } from '@/domain/types/project.types';
import Image from 'next/image';

interface GallerySectionProps {
    images: Readonly<Project['images']>;
    projectName: string;
}

export function GallerySection({ images, projectName }: GallerySectionProps) {
    const [mainImage, ...otherImages] = images;

    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2
                        className="text-3xl md:text-4xl font-bold"
                        style={{ color: 'var(--color-text-primary)' }}
                    >
                        Conheça cada detalhe
                    </h2>
                    <p
                        className="mt-4 text-lg"
                        style={{ color: 'var(--color-text-secondary)' }}
                    >
                        Imagens que capturam a essência do {projectName}.
                    </p>
                </div>

                {/* Grelha principal que organiza as imagens */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Coluna da Imagem Principal */}
                    {mainImage && (
                        <div className="w-full h-full min-h-[400px] relative rounded-lg overflow-hidden">
                            <Image
                                src={mainImage}
                                alt={`Imagem principal do ${projectName}`}
                                fill
                                style={{ objectFit: 'cover' }}
                                className="hover:scale-105 transition-transform duration-300"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    )}


                    <div className="grid grid-cols-2 gap-4">
                        {otherImages.map((image, index) => (
                            <div
                                key={image} // Usar a URL da imagem como chave é mais seguro
                                className="w-full h-full min-h-[192px] relative rounded-lg overflow-hidden"
                            >
                                <Image
                                    src={image}
                                    alt={`Imagem ${index + 2} do ${projectName}`}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}