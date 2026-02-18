
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Maximize2, Layers } from 'lucide-react';

const StrengthSection = () => {
    const features = [
        {
            icon: ShieldCheck,
            title: "Reinforced Durability",
            description: "High-strength M-40 grade concrete reinforced with 3mm high carbon tensile steel (PC wire) for exceptional longevity."
        },
        {
            icon: Maximize2,
            title: "Space Maximization",
            description: "Replace bulky 6-9 inch brick walls with our efficient 75mm (3-inch) panels, gaining valuable floor space."
        },
        {
            icon: Layers,
            title: "Rapid Installation",
            description: "Factory-made, re-usable folding systems that significantly reduce construction time and labor costs."
        }
    ];

    return (
        <section className="py-24 bg-white text-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-semibold text-orange-600 tracking-wider uppercase mb-2">Build to Last</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">The Strength of Precast</h3>
                    <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                        Combining industrial robustness with modern aesthetics, our folding wall systems redefine structural integrity.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-slate-50 p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group"
                        >
                            <div className="bg-white rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6 shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                                <feature.icon className="w-8 h-8 text-slate-700 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                            </div>
                            <h4 className="text-2xl font-bold font-display text-slate-900 mb-4">{feature.title}</h4>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StrengthSection;
