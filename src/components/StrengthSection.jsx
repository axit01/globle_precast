
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Maximize2, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const StrengthSection = () => {
    const { t } = useLanguage();

    // Get features from translation file, assuming it returns an array
    const featuresData = t('strength.features');
    // Map icons to the features. Note: This relies on the order in translations.js matching this array.
    // A safer way would be to store keys in the features array or handle this differently, 
    // but for now we'll assume the order is: Durability, Space, Installation.
    const icons = [ShieldCheck, Maximize2, Layers];

    const features = Array.isArray(featuresData) ? featuresData.map((feature, index) => ({
        ...feature,
        icon: icons[index]
    })) : [];

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
                    <h2 className="text-sm font-semibold text-orange-600 tracking-wider uppercase mb-2">{t('strength.uptime')}</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">{t('strength.title')}</h3>
                    <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                        {t('strength.desc')}
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
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StrengthSection;
