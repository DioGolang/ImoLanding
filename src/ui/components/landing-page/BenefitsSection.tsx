import type { Project } from "@/domain/types/project.types";

interface BenefitsSectionProps {
    readonly benefits: Readonly<Project['benefits']>;
}

const IconPlaceholder = ({ name }: { name: string }) => (
    <div
        className="flex items-center justify-center w-16 h-16 rounded-full bg-opacity-10"
        style={{ backgroundColor: 'var(--color-secondary)' }}
    >
        <span
            className="text-2xl font-bold"
            style={{ color: 'var(--color-primary)' }}
        >
            {name.charAt(0)}
        </span>
    </div>
);

export function BenefitsSection({ benefits }: BenefitsSectionProps) {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {benefits.map((benefit) => (
                        <div key={benefit.title} className="flex flex-col items-center text-center">
                            <IconPlaceholder name={benefit.icon} />
                            <h3
                                className="mt-5 text-xl font-bold"
                                style={{ color: 'var(--color-text-primary)' }}
                            >
                                {benefit.title}
                            </h3>
                            <p
                                className="mt-2 text-base leading-relaxed"
                                style={{ color: 'var(--color-text-secondary)' }}
                            >
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}