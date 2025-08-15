import { LeadCaptureForm } from '@/application/features/lead-capture/components/LeadCaptureForm';
import React from 'react';

export const LeadCaptureSection = () => {
    return (
        <section
            id="contato"
            aria-labelledby="lead-capture-heading"
            className="relative py-28 bg-neutral-950"
        >
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                {/* Copy */}
                <div>
                    <h2
                        id="lead-capture-heading"
                        className="font-serif text-4xl font-bold text-white"
                    >
                        Sinta a exclusividade de um pé-direito com <span className="text-brand-gold">5,48 metros.</span>
                    </h2>
                    <p className="mt-6 text-lg text-neutral-300">
                        Este é um convite para um grupo seleto. Com torre única e apenas 38 unidades, o NUV Moema é um projeto para poucos.
                    </p>
                    <ul className="mt-8 space-y-3 font-sans text-neutral-300">
                        <li className="flex items-start gap-3">
                            <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold shadow-[0_0_0_4px_rgba(212,182,98,0.15)]" />
                            Receba a planta, materiais e condições exclusivas de pré-lançamento.
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold shadow-[0_0_0_4px_rgba(212,182,98,0.15)]" />
                            Tenha prioridade na escolha das melhores unidades.
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1 h-2 w-2 rounded-full bg-brand-gold shadow-[0_0_0_4px_rgba(212,182,98,0.15)]" />
                            Converse diretamente com um especialista do empreendimento.
                        </li>
                    </ul>
                </div>

                {/* Form Card */}
                <div className="relative rounded-2xl border border-neutral-800/60 bg-neutral-900/50 backdrop-blur-md p-8 shadow-2xl">
                    <h3 className="text-2xl font-bold text-white text-center mb-6">Garanta sua Unidade Agora</h3>
                    <LeadCaptureForm buttonText="Quero Acesso Prioritário" />
                    <p className="mt-4 text-center text-xs text-neutral-500">
                        * Seus dados são protegidos. Não enviamos spam.
                    </p>
                </div>
            </div>
        </section>
    );
};