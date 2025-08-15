'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/infrastructure/lib/utils';
import type { Project } from '@/domain/types/project.types';
import {
    Wifi, Waves, Lightbulb, BatteryCharging, Thermometer, Droplets,
    ParkingCircle, Box, MoveVertical, Sofa, Archive, Trash2, Wind,
    ArrowUpDown, CookingPot, Flame, HelpCircle
} from 'lucide-react';

interface FeaturesSectionProps {
    readonly features: Project['features'];
}

type Category = 'common' | 'unit';

const iconMap: { [key: string]: React.ReactNode } = {
    Wifi: <Wifi className="w-10 h-10 text-brand-primary dark:text-neutral-200" />,
    Waves: <Waves className="w-10 h-10 text-brand-primary dark:text-neutral-200" />,
    Lightbulb: <Lightbulb className="w-10 h-10 text-brand-primary dark:text-neutral-200" />,
    BatteryCharging: <BatteryCharging className="w-10 h-10 text-brand-primary dark:text-neutral-200" />,
    Thermometer: <Thermometer className="w-10 h-10 text-brand-primary dark:text-neutral-200" />,
    Droplets: <Droplets className="w-10 h-10 text-brand-primary dark:text-neutral-200" />,
    ParkingCircle: <ParkingCircle className="w-10 h-10 text-brand-primary dark:text-neutral-200" />,
    Box: <Box className="w-10 h-10 text-brand-primary dark:text-neutral-200" />,
    MoveVertical: <MoveVertical className="w-10 h-10 text-brand-primary dark:text-neutral-200" />,
    Sofa: <Sofa className="w-10 h-10 text-brand-primary dark:text-neutral-200" />,
    Archive: <Archive className="w-10 h-10 text-brand-primary dark:text-neutral-200" />,
    Trash2: <Trash2 className="w-10 h-10 text-brand-primary dark:text-neutral-200" />,
    Wind: <Wind className="w-10 h-10 text-brand-primary dark:text-neutral-200" />,
    ArrowUpDown: <ArrowUpDown className="w-10 h-10 text-brand-primary dark:text-neutral-200" />,
    CookingPot: <CookingPot className="w-10 h-10 text-brand-primary dark:text-neutral-200" />,
    Flame: <Flame className="w-10 h-10 text-brand-primary dark:text-neutral-200" />,
    HelpCircle: <HelpCircle className="w-10 h-10 text-brand-primary dark:text-neutral-200" />, // Ícone de fallback
};


export const FeaturesSection = ({ features }: FeaturesSectionProps) => {
    const [activeTab, setActiveTab] = useState<Category>('common');

    const items = useMemo(() => ({
        common: features.filter(f => f.category === 'common'),
        unit: features.filter(f => f.category === 'unit'),
    }), [features]);

    const activeItems = items[activeTab];

    if (!features || features.length === 0) return null;

    return (
        <section id="diferenciais" className="py-24 bg-white dark:bg-black">
            <div className="container mx-auto px-6">
                <div className="flex justify-center border-b border-neutral-200 dark:border-neutral-800">
                    <button
                        onClick={() => setActiveTab('common')}
                        className={cn(
                            'px-8 py-3 font-semibold text-lg transition-colors',
                            activeTab === 'common' ? 'text-brand-primary dark:text-brand-gold border-b-2 border-brand-primary dark:border-brand-gold' : 'text-neutral-500 hover:text-brand-primary dark:hover:text-white'
                        )}
                    >
                        Áreas Comuns
                    </button>
                    <button
                        onClick={() => setActiveTab('unit')}
                        className={cn(
                            'px-8 py-3 font-semibold text-lg transition-colors',
                            activeTab === 'unit' ? 'text-brand-primary dark:text-brand-gold border-b-2 border-brand-primary dark:border-brand-gold' : 'text-neutral-500 hover:text-brand-primary dark:hover:text-white'
                        )}
                    >
                        Unidades
                    </button>
                </div>

                <div className="mt-16 relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0, transition: { staggerChildren: 0.05, duration: 0.5 } }}
                            exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12"
                        >
                            {activeItems.map(item => (
                                <motion.div
                                    key={item.title}
                                    className="text-center flex flex-col items-center"
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <div className="flex items-center justify-center h-24 w-24 bg-neutral-100 dark:bg-neutral-900 rounded-full">
                                        {/* Usamos o mapa para renderizar o ícone correto */}
                                        {iconMap[item.icon] || iconMap['HelpCircle']}
                                    </div>
                                    <h3 className="mt-6 font-bold text-lg text-brand-primary dark:text-white">{item.title}</h3>
                                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{item.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};