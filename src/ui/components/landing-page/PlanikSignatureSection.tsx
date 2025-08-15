'use client';

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import Image from 'next/image';
import { Gem, Palette, Handshake } from 'lucide-react';

const pillars = [
    {
        icon: <Gem className="w-7 h-7 text-brand-gold" />,
        title: "Qualidade Inegociável",
        description: "Com um time próprio de engenharia, lideramos cada etapa com rigor e uma obsessão pelo resultado final, do projeto à entrega."
    },
    {
        icon: <Palette className="w-7 h-7 text-brand-gold" />,
        title: "Design com Intenção",
        description: "Não seguimos fórmulas. Cada projeto nasce com critério para refletir a identidade de quem vai viver ali, dialogando com seu tempo e espaço."
    },
    {
        icon: <Handshake className="w-7 h-7 text-brand-gold" />,
        title: "Relacionamento Próximo",
        description: "Sua jornada é acompanhada por um gerente exclusivo, dedicado a entender e antecipar cada detalhe, do primeiro contato às chaves."
    }
];

export const PlanikSignatureSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    return (
        <section ref={ref} className="py-24 bg-white dark:bg-neutral-900 overflow-hidden">
            <motion.div
                className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                {/* Coluna de Texto */}
                <motion.div variants={itemVariants}>
                    <p className="font-serif text-lg font-medium text-brand-gold">
                        A ASSINATURA PLANIK
                    </p>
                    <h2 className="mt-2 text-3xl md:text-4xl font-serif font-bold text-brand-primary dark:text-neutral-100">
                        Não construímos apenas lugares para morar. Construímos lugares para pertencer.
                    </h2>
                    <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-300">
                        Em um mercado de escolhas genéricas, a Planik escolheu fazer diferente. Para nós, criar é oferecer significado e propósito que vão além da aparência. É a materialização da sua identidade em forma de lar.
                    </p>

                    <div className="mt-12 space-y-8 border-t border-neutral-200 dark:border-neutral-800 pt-8">
                        {pillars.map((pillar) => (
                            <motion.div key={pillar.title} variants={itemVariants} className="flex items-start gap-5">
                                <div className="flex-shrink-0 pt-1">
                                    {pillar.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-brand-primary dark:text-white">{pillar.title}</h3>
                                    <p className="mt-1 text-neutral-600 dark:text-neutral-300">{pillar.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Coluna de Imagem */}
                <motion.div
                    variants={itemVariants}
                    className="relative w-full h-[450px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl"
                >
                    <Image
                        src="/images/taj-residences/tag-lobby.jpg"
                        alt="Lobby sofisticado de um empreendimento Planik, demonstrando a qualidade da assinatura da marca"
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};