interface CopySectionProps {
    title: string;
    text: string;
}

export function CopySection({ title, text }: CopySectionProps) {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2
                        className="text-3xl md:text-4xl font-bold"
                        style={{ color: 'var(--color-text-primary)' }}
                    >
                        {title}
                    </h2>
                    <p
                        className="mt-6 text-lg leading-relaxed"
                        style={{ color: 'var(--color-text-secondary)' }}
                    >
                        {text}
                    </p>
                </div>
            </div>
        </section>
    );
}