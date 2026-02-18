
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const BenefitsSection = () => {
    const { t } = useLanguage();
    const benefits = t('benefits.features') || [];

    return (
        <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/20 skew-x-12 transform origin-top-right mix-blend-overlay pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h2 className="text-orange-500 font-medium tracking-widest uppercase mb-4">{t('benefits.whyChooseUs')}</h2>
                    <h3 className="text-4xl md:text-6xl font-display font-bold leading-tight" style={{ whiteSpace: 'pre-line' }}>
                        {t('benefits.designedFor')}
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-12">
                        {Array.isArray(benefits) && benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group flex items-start space-x-6 hover:bg-slate-800/50 p-6 -mx-6 rounded-2xl transition-colors duration-300"
                            >
                                <div className="flex-shrink-0 mt-1">
                                    <CheckCircle className="w-8 h-8 text-orange-500 group-hover:text-orange-400 transition-colors" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold font-display mb-2 group-hover:text-white transition-colors">{benefit.title}</h4>
                                    <p className="text-slate-400 group-hover:text-slate-200 transition-colors leading-relaxed">
                                        {benefit.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-full min-h-[500px] bg-slate-800 rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src="/src/assets/2image.png"
                            alt="Premium Architectural Detail"
                            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
