import type { Project } from '@/domain/types/project.types';
import { LeadCaptureForm } from '@/application/features/lead-capture/components/LeadCaptureForm';

interface LeadCaptureSectionProps {
    cta: Project['cta'];
}

export const LeadCaptureSection = ({ cta }: LeadCaptureSectionProps) => {
    return (
        <section id="contato" className="py-24 bg-brand-gold">
            <div className="container mx-auto px-6 text-center text-white">
                <h2 className="text-4xl md:text-5xl font-bold font-serif">
                    {cta.title}
                </h2>
                <p className="mt-6 text-lg max-w-3xl mx-auto text-gray-200">
                    {cta.subtitle}
                </p>

                {/* Container do Formulário */}
                <div className="mt-10 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-2xl">
                    {/* O formulário em si, com texto do botão dinâmico */}
                    <LeadCaptureForm buttonText={cta.buttonText} />
                </div>

                <p className="mt-8 text-sm text-gray-200">
                    Fale com um de nossos consultores exclusivos e descubra pessoalmente
                    por que este é o seu próximo grande legado.
                </p>
            </div>
        </section>
    );
};