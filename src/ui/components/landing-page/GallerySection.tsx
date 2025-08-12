import type { Project } from '@/domain/types/project.types';
import Image from 'next/image';

interface GallerySectionProps {
    readonly images: Readonly<Project['images']>;
    projectName: string;
}

export const GallerySection = ({ images, projectName }: GallerySectionProps) => {
    const galleryItems = [
        { src: images[0], alt: `Fachada do ${projectName}`, label: "Fachada" },
        { src: images[2], alt: `Lobby do ${projectName}`, label: "Lobby" },
        { src: images[3], alt: `Piscina do ${projectName}`, label: "Piscina" },
        { src: images[5], alt: `Living decorado do ${projectName}`, label: "Living" },
        { src: images[4], alt: `Quadra de Beach Tennis do ${projectName}`, label: "Beach Tennis" },
        { src: images[6], alt: `Suíte master do ${projectName}`, label: "Suíte Master" },
    ];

    return (
        <section id="galeria" className="py-24 bg-stone-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-primary font-serif">
                        Uma Obra de Arte em Cada Detalhe.
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        A prova visual da sofisticação e a materialização da nossa promessa.
                    </p>
                </div>

                {/* Grelha responsiva */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {galleryItems.map((image) => (
                        <div key={image.src} className="group relative overflow-hidden rounded-lg shadow-lg aspect-w-4 aspect-h-3">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Sobreposição que aparece no hover */}
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex items-end justify-start p-6">
                                <h3 className="text-white text-2xl font-serif font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    {image.label}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};