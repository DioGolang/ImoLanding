import Image from 'next/image';

interface HeroSectionProps {
    headline: string;
    subheadline: string;
    imageUrl: string;
}

export function HeroSection({ headline, subheadline, imageUrl }: HeroSectionProps) {
    return (
        <section
            className="relative flex items-center justify-center w-full min-h-[70vh] text-white"
        >
            {/* Comentário: O componente <Image> do Next.js é usado para a imagem de fundo.
        - layout="fill" e objectFit="cover" fazem a imagem cobrir toda a seção.
        - priority indica ao Next.js para carregar esta imagem primeiro,
          pois é a mais importante da página (melhora a métrica LCP).
        - a classe 'brightness-50' do Tailwind escurece a imagem para que o texto
          branco por cima fique mais legível.
      */}
            <Image
                src={imageUrl}
                alt={headline}
                fill
                style={{ objectFit: 'cover' }}
                priority
                className="z-0 brightness-50"
            />

            <div className="relative z-10 text-center p-4 max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg" style={{ color: 'white' }}>
                    {headline}
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
                    {subheadline}
                </p>
            </div>
        </section>
    );
}