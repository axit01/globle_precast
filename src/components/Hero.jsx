
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/50 z-10" />
                {/* High-quality architectural image from assets */}
                <img
                    src="/src/assets/1image.png"
                    alt="Modern Architecture"
                    className="w-full h-full object-cover opacity-60"
                />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-6"
                    style={{ whiteSpace: 'pre-line' }}
                >
                    {t('hero.title')}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl mx-auto mb-10"
                >
                    {t('hero.subtitle')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href="/catalog"
                        className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-md font-medium transition-all shadow-lg hover:shadow-orange-500/25"
                    >
                        {t('hero.viewCollection')}
                    </a>
                    <a
                        href="/contact"
                        className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-md font-medium transition-all backdrop-blur-sm"
                    >
                        {t('hero.contactUs')}
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="w-1 h-1 bg-white rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
