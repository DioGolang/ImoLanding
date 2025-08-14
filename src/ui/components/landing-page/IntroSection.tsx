import {ScrollReveal} from "@/ui/components/shared/ScrollReveal";

interface IntroSectionProps {
    title: string;
    text: string;
}

export const IntroSection = ({ title, text }: IntroSectionProps) => {
    return (
        <section id="intro" className="py-24 bg-brand-light text-text-secondary">
            <ScrollReveal>
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <h2 className="text-4xl font-bold text-text-primary font-serif">
                        {title}
                    </h2>
                    <p className="mt-6 text-lg leading-relaxed">
                        {text}
                    </p>
                </div>
            </ScrollReveal>
        </section>
    );
};