import React from 'react';
import { motion, useInView, Variants } from 'framer-motion';

const testimonials = [
    { quote: "Finalmente um projeto que entende o que é exclusividade. O pé-direito duplo foi o que me conquistou.", author: "Futuro Morador de Moema" },
    { quote: "A localização é perfeita. Tranquilidade e conveniência, sem abrir mão de nada. Era exatamente o que buscávamos.", author: "Casal - Vila Nova Conceição" },
    { quote: "A Planik entrega um padrão de qualidade e personalização que não se encontra no mercado. É um investimento seguro.", author: "Investidor do Itaim" }
];

export const SocialProofSection = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    // Aplica o tipo Variants explicitamente
    const sectionVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: (i: number) => ({ // Adiciona tipo ao 'i' para clareza
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
        }),
    };

    return (
        <section ref={ref} className="py-24 bg-white dark:bg-black">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-primary dark:text-neutral-100">
                        O que nossos clientes valorizam:
                    </h2>
                </motion.div>
                <motion.div
                    className="mt-16 grid md:grid-cols-3 gap-8"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={{ visible: { transition: { staggerChildren: 0.2 } } }} // Simplificado
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="bg-neutral-100 dark:bg-neutral-900 p-8 rounded-xl shadow-lg"
                            custom={index}
                            variants={cardVariants}
                        >
                            <p className="text-lg italic text-neutral-700 dark:text-neutral-200">"{testimonial.quote}"</p>
                            <p className="mt-6 font-bold text-right text-brand-primary dark:text-brand-gold">- {testimonial.author}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};