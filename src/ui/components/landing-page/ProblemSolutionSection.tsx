import React from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { BuildingIcon, KeyIcon, MapPinIcon, CheckCircle2 } from "lucide-react";

const challengesAndSolutions = [
    {
        problem: { icon: <BuildingIcon className="w-8 h-8" />, text: "Apartamentos antigos, com plantas genéricas e sem personalidade." },
        solution: { icon: <CheckCircle2 className="w-8 h-8 text-green-500" />, title: "Amplitude e Luz de uma Casa", text: "Pé-direito duplo de 5,48m em um projeto de arquitetura autoral, que valoriza o seu espaço e a sua identidade." }
    },
    {
        problem: { icon: <MapPinIcon className="w-8 h-8" />, text: "A dificuldade de unir tranquilidade com acesso rápido aos pontos-chave da cidade." },
        solution: { icon: <CheckCircle2 className="w-8 h-8 text-green-500" />, title: "Localização Privilegiada", text: "Na calma da Av. Jamaris, mas a minutos do Parque Ibirapuera e dos melhores pontos de Moema." }
    },
    {
        problem: { icon: <KeyIcon className="w-8 h-8" />, text: "Falta de privacidade e exclusividade em grandes condomínios." },
        solution: { icon: <CheckCircle2 className="w-8 h-8 text-green-500" />, title: "Exclusividade Real", text: "Apenas 38 unidades em torre única, garantindo um ambiente seleto e com total privacidade para sua família." }
    }
];

export const ProblemSolutionSection = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const containerVariants: Variants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section ref={ref} className="py-24 bg-neutral-50 dark:bg-neutral-950">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-primary dark:text-neutral-100">
                        Sua busca pelo apartamento ideal termina aqui.
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-600 dark:text-neutral-300">
                        Entendemos o que você valoriza. Por isso, criamos um projeto que responde a cada uma de suas expectativas.
                    </p>
                </motion.div>

                <motion.div
                    className="mt-20 grid md:grid-cols-3 gap-8 items-start"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {challengesAndSolutions.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg overflow-hidden h-full flex flex-col"
                        >
                            {/* Parte do Problema */}
                            <div className="p-8 space-y-4">
                                <div className="flex items-center justify-center h-16 w-16 mx-auto bg-red-100/50 dark:bg-red-900/20 rounded-full text-red-500 dark:text-red-400">
                                    {item.problem.icon}
                                </div>
                                <div>
                                    <p className="font-semibold text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400">O Desafio</p>
                                    <p className="mt-1 font-medium text-neutral-800 dark:text-neutral-100">{item.problem.text}</p>
                                </div>
                            </div>

                            {/* Parte da Solução */}
                            <div className="bg-green-50 dark:bg-green-900/20 p-8 space-y-4 border-t-2 border-green-200 dark:border-green-500/30 flex-grow">
                                <div className="flex items-center justify-center h-16 w-16 mx-auto bg-white dark:bg-neutral-800 rounded-full shadow-md text-green-500">
                                    {item.solution.icon}
                                </div>
                                <div>
                                    <p className="font-semibold text-sm uppercase tracking-wide text-green-600 dark:text-green-400">A Solução NUV</p>
                                    <h3 className="mt-1 font-bold text-xl text-brand-primary dark:text-white">{item.solution.title}</h3>
                                    <p className="mt-2 text-neutral-600 dark:text-neutral-300">{item.solution.text}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};