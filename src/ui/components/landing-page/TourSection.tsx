import type { Project } from '@/domain/types/project.types';
import Image from 'next/image';
import { Button } from '../shared/Button';
import { VideoIcon } from '../shared/Icons';

interface TourSectionProps {
    tourUrl?: string;
    previewImageUrl: string;
}

export const TourSection = ({ tourUrl, previewImageUrl }: TourSectionProps) => {
    if (!tourUrl) {
        return null;
    }
    return (
        <section id="tour-virtual" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="bg-gray-800 text-white rounded-lg shadow-2xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    {/* Coluna de Texto */}
                    <div className="text-center md:text-left flex-1">
                        <h2 className="text-4xl md:text-5xl font-bold font-serif">
                            Explore Cada Ambiente Sem Sair de Casa.
                        </h2>
                        <p className="mt-6 text-lg text-gray-300">
                            Sinta a atmosfera, perceba as dimensões e apaixone-se pelo seu futuro lar. Nosso tour virtual 360º é uma ferramenta imersiva que qualifica a sua visita e acelera a sua conexão emocional com o projeto.
                        </p>
                        <a href={tourUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="primary" className="mt-8 text-lg">
                                <VideoIcon /> Iniciar Tour Virtual
                            </Button>
                        </a>
                    </div>

                    {/* Coluna da Imagem/Link */}
                    <div className="flex-1 w-full mt-8 md:mt-0">
                        <a
                            href={tourUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
                        >
                            <Image
                                src={previewImageUrl}
                                alt="Pré-visualização do Tour Virtual 360 do apartamento decorado"
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};