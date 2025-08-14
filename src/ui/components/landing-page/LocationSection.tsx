import type { Project } from '@/domain/types/project.types';

interface LocationSectionProps {
    location: Project['location'];
    copy: string;
}

export const LocationSection = ({ location, copy }: LocationSectionProps) => {
    const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
        `${location.address}, ${location.city}`
    )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

    return (
        <section id="localizacao" className="py-24 bg-white text-gray-800">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="order-2 md:order-1">
                    <h2 className="text-4xl font-bold font-serif text-brand-primary">
                        O Privilégio de Estar Aqui.
                    </h2>
                    <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                        {copy}
                    </p>
                    <p className='mt-4 font-semibold text-gray-800'>
                        {location.address} - {location.neighborhood}, {location.city}
                    </p>
                </div>

                <div className="order-1 md:order-2 w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                    <iframe
                        src={mapEmbedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Mapa da localização de ${location.neighborhood}`}
                    ></iframe>
                </div>
            </div>
        </section>
    );
};