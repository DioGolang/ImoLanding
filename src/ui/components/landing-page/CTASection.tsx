import { LeadCaptureForm } from '@/application/features/lead-capture/components/LeadCaptureForm';
import type { Project } from '@/domain/types/project.types';

interface CTASectionProps {
    cta: Project['cta'];
}

export function CTASection({ cta }: CTASectionProps) {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 flex flex-col items-center">
                <div className="text-center mb-10 max-w-2xl">
                    <h2
                        className="text-3xl md:text-4xl font-bold"
                        style={{ color: 'var(--color-text-primary)' }}
                    >
                        {cta.title}
                    </h2>
                    <p
                        className="mt-4 text-lg"
                        style={{ color: 'var(--color-text-secondary)' }}
                    >
                        {cta.subtitle}
                    </p>
                </div>
                <div className="w-full max-w-md p-8 bg-gray-50 rounded-lg shadow-lg border border-gray-200">
                    <LeadCaptureForm buttonText={cta.buttonText} />
                </div>
            </div>
        </section>
    );
}