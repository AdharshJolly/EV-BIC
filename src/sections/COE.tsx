"use client";

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const COE = () => {
    return (
        <div className="bg-transparent py-24 sm:py-32 border-t border-brand-secondary/30 relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="mx-auto max-w-3xl lg:text-center mb-16">
                    <Badge variant="outline" className="mb-4 text-brand-accent border-brand-accent/30 bg-brand-accent/5 uppercase tracking-widest">Innovation Hub</Badge>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 font-display"
                    >
                        Center of <span className="text-brand-accent">Excellence</span>
                    </motion.h2>
                </div>

                {/* Content Section 1: Introduction */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="order-2 lg:order-1">
                        <p className="text-lg leading-relaxed text-brand-muted mb-6">
                            The Centre of Excellence in E-Mobility at Christ University, Kengeri Campus, plays a critical role in shaping the future of transportation and addressing global challenges related to sustainability and energy efficiency.
                        </p>
                        <p className="text-lg leading-relaxed text-brand-muted mb-6">
                            This centre focuses on cutting-edge research and development in key areas such as <span className="text-white font-medium">Energy Storage Systems, Advanced Powertrain Technologies, Software-Driven Vehicles, and Sustainable Transportation.</span>
                        </p>
                        <h3 className="text-2xl font-bold text-white mb-4">A Globally Recognized Innovation Hub</h3>
                        <p className="text-lg leading-relaxed text-brand-muted">
                            CoE in E-Mobility is a globally recognized innovation hub driving the future of sustainable mobility. We collaborate with industry to deliver cost-effective, cutting-edge solutions that enhance competitiveness and accelerate the transition to clean, efficient, and intelligent transportation systems.
                        </p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                        <div className="space-y-4 pt-8">
                            <div className="relative h-48 rounded-2xl overflow-hidden border border-brand-secondary/50">
                                <Image src="/images/COE-1.jpeg" alt="COE Lab 1" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="relative h-40 rounded-2xl overflow-hidden border border-brand-secondary/50">
                                <Image src="/images/COE-2.jpeg" alt="COE Lab 2" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="relative h-40 rounded-2xl overflow-hidden border border-brand-secondary/50">
                                <Image src="/images/COE-3.jpeg" alt="COE Lab 3" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="relative h-48 rounded-2xl overflow-hidden border border-brand-secondary/50">
                                <Image src="/images/COE-4.jpeg" alt="COE Lab 4" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="relative h-48 rounded-2xl overflow-hidden border border-brand-secondary/50">
                                <Image src="/images/COE-5.jpeg" alt="COE Lab 5" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Content Section 3: CSR Initiative */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="bg-brand-secondary/5 border border-brand-secondary/30 rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-brand-accent/5 blur-3xl rounded-full transform -translate-y-1/2"></div>
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-6">Strategic Partnership</h3>
                        <p className="text-lg leading-relaxed text-brand-muted mb-8">
                            Centre of Excellence in E-Mobility is a CSR initiative of <span className="text-brand-accent">Safran Engineering Services India Ltd</span> in association with <span className="text-white">IEEE</span> and <span className="text-white">CHRIST (Deemed to be University)</span>.
                        </p>
                        <p className="text-lg leading-relaxed text-brand-muted">
                            The Centre is dedicated in advancing the research and development of Electric Mobility technologies. We are a community of professors and students who combine our knowledge and insights from our specialized fields to solve problems and attain successful outputs.
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default COE;
