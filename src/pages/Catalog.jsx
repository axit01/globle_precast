
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, MapPin, Phone, ShieldCheck, Layers, Hammer, Clock, DollarSign, CloudRain, Package, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import image1 from '../assets/1image.png';
import image2 from '../assets/2image.png';
import image3 from '../assets/3image.jpeg';
import image4 from '../assets/4image.jpeg';
import image5 from '../assets/5image.jpeg';
import image6 from '../assets/6image.jpeg';
import image7 from '../assets/7image.jpeg';
import image8 from '../assets/8image.jpeg';
import image9 from '../assets/9image.jpeg';

const Catalog = () => {
    const { t } = useLanguage();
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const worksImages = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % worksImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + worksImages.length) % worksImages.length);
    };

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    // Get arrays from translations
    const advantagesData = t('catalog.advantages') || [];
    const applicationsData = t('catalog.applications') || [];
    const panelFeaturesData = t('catalog.panelFeatures') || [];
    const whyChooseListData = t('catalog.whyChooseList') || [];

    // Icons for advantages - ensure order matches translation arrays
    const advIcons = [ShieldCheck, Clock, DollarSign, CloudRain, Hammer, Layers];

    const advantages = Array.isArray(advantagesData) ? advantagesData.map((adv, index) => ({
        ...adv,
        icon: advIcons[index] || ShieldCheck
    })) : [];


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-24 min-h-screen bg-slate-50 font-body text-slate-800"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4"
                    >
                        {t('catalog.title')}
                    </motion.h1>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100px" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-1 bg-orange-600 mx-auto rounded-full"
                    />
                </div>

                {/* About Us */}
                <motion.section
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-20 text-center max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">{t('catalog.aboutUs')}</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        {t('catalog.aboutDesc')}
                    </p>
                </motion.section>

                {/* Our Products */}
                <motion.section
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">{t('catalog.ourProducts')}</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">{t('catalog.productsDesc')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* 75mm Panel Card */}
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col hover:shadow-2xl transition-shadow duration-300 group">
                            <div className="h-72 relative overflow-hidden">
                                <img
                                    src={image1}
                                    alt={t('catalog.panelTitle')}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">{t('catalog.panelTitle')}</h3>
                                    <div className="h-1 w-12 bg-orange-500 rounded-full" />
                                </div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col bg-white">
                                <ul className="space-y-4 mb-6 flex-1">
                                    {Array.isArray(panelFeaturesData) && panelFeaturesData.map((item, i) => (
                                        <li key={i} className="flex items-start text-slate-700">
                                            <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                                            <span className="text-base">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* 55mm Panel Card */}
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col hover:shadow-2xl transition-shadow duration-300 group">
                            <div className="h-72 relative overflow-hidden">
                                <img
                                    src={image2}
                                    alt={t('catalog.panelTitle2')}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">{t('catalog.panelTitle2')}</h3>
                                    <div className="h-1 w-12 bg-orange-500 rounded-full" />
                                </div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col bg-white">
                                <ul className="space-y-4 mb-6 flex-1">
                                    {Array.isArray(t('catalog.panelFeatures2')) && t('catalog.panelFeatures2').map((item, i) => (
                                        <li key={i} className="flex items-start text-slate-700">
                                            <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                                            <span className="text-base">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="font-semibold text-slate-900 italic bg-orange-50 inline-block px-6 py-3 rounded-full border border-orange-100">
                            {t('catalog.customSizes')}
                        </p>
                    </div>
                </motion.section>

                {/* Our Works - Slider Section */}
                <motion.section
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-10 text-center">{t('catalog.ourWorks')}</h2>

                    <div className="relative group max-w-5xl mx-auto">
                        <div className="overflow-hidden rounded-3xl shadow-xl aspect-video md:aspect-[16/9] relative">
                            <motion.img
                                key={currentSlide}
                                src={worksImages[currentSlide]}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                alt={`Work Sample ${currentSlide + 1}`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all duration-300 md:-left-6 shadow-lg z-10"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all duration-300 md:-right-6 shadow-lg z-10"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Dots */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                            {worksImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-orange-500 w-8' : 'bg-white/50 hover:bg-white'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Advantages */}
                <motion.section
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-10 text-center">{t('catalog.advantagesTitle')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {advantages.map((adv, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeIn}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-4">
                                    <adv.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{adv.title}</h3>
                                <p className="text-slate-600 text-sm">{adv.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Applications & Why Choose Us */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Applications */}
                    <motion.section
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-slate-900 rounded-3xl p-10 text-white relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <h2 className="text-3xl font-display font-bold mb-8 flex items-center">
                                <Package className="mr-3 text-orange-500" /> {t('catalog.applicationsTitle')}
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {Array.isArray(applicationsData) && applicationsData.map((app, i) => (
                                    <div key={i} className="flex items-center space-x-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                                        <CheckCircle className="w-5 h-5 text-orange-500" />
                                        <span className="font-medium">{app}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Decorative BG */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                    </motion.section>

                    {/* Why Choose Us */}
                    <motion.section
                        variants={fadeIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100 flex flex-col justify-center"
                    >
                        <h2 className="text-3xl font-display font-bold text-slate-900 mb-6 flex items-center">
                            <Users className="mr-3 text-orange-600" /> {t('catalog.whyChooseTitle')}
                        </h2>
                        <ul className="space-y-4">
                            {Array.isArray(whyChooseListData) && whyChooseListData.map((item, i) => (
                                <li key={i} className="flex items-center p-3 rounded-lg hover:bg-slate-50 transition-colors">
                                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-4" />
                                    <span className="text-lg text-slate-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.section>
                </div>

                {/* Quality Assurance */}
                <motion.section
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-20 text-center bg-orange-50 rounded-2xl p-12 border border-orange-100"
                >
                    <ShieldCheck className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                    <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">{t('catalog.qualityTitle')}</h2>
                    <p className="text-slate-700 max-w-3xl mx-auto text-lg">
                        {t('catalog.qualityDesc')}
                    </p>
                </motion.section>

                {/* Footer Contact */}
                <motion.section
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white text-center"
                >
                    <h2 className="text-3xl font-display font-bold mb-8">{t('contact.title')}</h2>
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
                        <div className="flex items-start text-left max-w-xs">
                            <MapPin className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-lg mb-1">Global Precast</h4>
                                <p className="text-slate-400">
                                    Gat No. 448, Awhalwadi Malwadi Rd., Awhalwadi, Wagholi,<br />
                                    Tal. Haveli, Dist. Pune – 412207
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start text-left">
                            <Phone className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0 mt-1" />
                            <div className="space-y-1">
                                <a href="tel:+917709706662" className="block text-xl font-bold hover:text-orange-500 transition-colors">+91 77097 06662</a>
                                <a href="tel:+918530856662" className="block text-xl font-bold hover:text-orange-500 transition-colors">+91 85308 56662</a>
                            </div>
                        </div>
                    </div>
                </motion.section>

            </div>
        </motion.div>
    );
};

export default Catalog;
