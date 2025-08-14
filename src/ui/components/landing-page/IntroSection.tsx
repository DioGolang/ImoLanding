import {ScrollReveal} from "@/ui/components/shared/ScrollReveal";

interface IntroSectionProps {
    title: string;
    text: string;
}

export const IntroSection = ({ title, text }: IntroSectionProps) => {
    return (
        <section id="intro" className="py-24 bg-stone-50">
            <ScrollReveal>
            <div className="container mx-auto px-6 text-center max-w-4xl">
                <h2 className="text-4xl font-bold text-brand-primary font-serif">
                    {title}
                </h2>
                <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                    {text}
                </p>
            </div>
                </ScrollReveal>
        </section>
    );
};