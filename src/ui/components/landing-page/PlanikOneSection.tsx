import React from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { Gem, Palette, Handshake } from 'lucide-react';
import Image from 'next/image';

const pillars = [
    {
        icon: <Gem className="w-8 h-8 text-brand-gold" />,
        title: "Qualidade Superior",
        description: "Desde a escolha dos materiais até a execução, nosso time próprio de engenharia lidera cada etapa com rigor e obsessão pelo resultado final."
    },
    {
        icon: <Palette className="w-8 h-8 text-brand-gold" />,
        title: "Personalização com Critério",
        description: "Adapte layouts, acabamentos e soluções técnicas com liberdade total, sempre com a curadoria estética e o acompanhamento de nossos especialistas."
    },
    {
        icon: <Handshake className="w-8 h-8 text-brand-gold" />,
        title: "Relacionamento Exclusivo",
        description: "Do primeiro contato à entrega das chaves, você é acompanhado por um gerente dedicado a entender e antecipar cada detalhe da sua jornada."
    }
];

export const PlanikOneSection = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    return (
        <section ref={ref} id="planik-one" className="py-24 bg-white dark:bg-black overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Coluna de Imagem */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="relative w-full h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/images/taj-residences/tag-12.jpg" // Usando uma imagem de ambiente sofisticado da galeria
                            alt="Casal feliz em um ambiente de luxo que representa a personalização Planik One"
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </motion.div>

                    {/* Coluna de Texto */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <motion.p
                            variants={itemVariants}
                            className="font-serif text-lg font-medium text-brand-gold"
                        >
                            PLANIK ONE
                        </motion.p>
                        <motion.h2
                            variants={itemVariants}
                            className="mt-2 text-3xl md:text-4xl font-serif font-bold text-brand-primary dark:text-neutral-100"
                        >
                            Alto padrão, de verdade, começa em você.
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            className="mt-6 text-lg text-neutral-600 dark:text-neutral-300"
                        >
                            Para quem não aceita viver o comum, o Planik One é nosso programa de personalização que eleva a sua experiência, colocando você no centro de cada decisão.
                        </motion.p>

                        <div className="mt-10 space-y-8">
                            {pillars.map((pillar) => (
                                <motion.div key={pillar.title} variants={itemVariants} className="flex items-start gap-5">
                                    <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 bg-brand-gold/10 rounded-full">
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
                </div>
            </div>
        </section>
    );
};