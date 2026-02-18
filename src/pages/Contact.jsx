
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Send, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct mailto link
        const subject = `Project Inquiry from ${formData.name}`;
        const body = `Name: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage:%0A${formData.message}`;

        window.location.href = `mailto:info@globalprecast.conteact?subject=${subject}&body=${body}`;

        // Optional: Reset form or show success message
        // setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="min-h-screen pt-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-6">{t('contact.title')}</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        {t('contact.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">{t('contact.name')}</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                    placeholder={t('contact.name')}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">{t('contact.email')}</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">{t('contact.message')}</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                                    placeholder={t('contact.message')}
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-4 rounded-lg transition-all shadow-lg hover:shadow-orange-500/25 flex items-center justify-center space-x-2"
                            >
                                <span>{t('contact.send')}</span>
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info & Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-12"
                    >
                        {/* Info Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Address */}
                            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 flex items-start space-x-4">
                                <MapPin className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-slate-900 mb-2">{t('contact.headquarters')}</h3>
                                    <a
                                        href="https://maps.app.goo.gl/hVekDZPofm8Pz3sy5"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-600 leading-relaxed hover:text-orange-600 transition-colors"
                                    >
                                        Gat No. 448, Awhalwadi Malwadi Rd., Awhalwadi, Wagholi, Tal. Haveli, Dist. Pune – 412207
                                    </a>
                                </div>
                            </div>
                            {/* Phone */}
                            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 flex items-start space-x-4">
                                <Phone className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-slate-900 mb-2">{t('contact.phone')}</h3>
                                    <div className="flex flex-col space-y-1">
                                        <a href="tel:+917709706662" className="text-slate-600 hover:text-orange-600 transition-colors">
                                            +91 77097 06662
                                        </a>
                                        <a href="tel:+918530856662" className="text-slate-600 hover:text-orange-600 transition-colors">
                                            +91 85308 56662
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Email */}
                            <div className="sm:col-span-2 bg-white p-6 rounded-xl shadow-md border border-slate-100 flex items-start space-x-4">
                                <Mail className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-slate-900 mb-2">{t('contact.emailText')}</h3>
                                    <a href="mailto:info@globalprecast.com" className="text-slate-600 hover:text-orange-600 transition-colors">
                                        info@globalprecast.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Live Google Maps Embed */}
                        <div className="w-full h-80 bg-slate-200 rounded-xl overflow-hidden relative shadow-md group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.3563919655845!2d73.9938333!3d18.5647222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c21fceac5099%3A0x2e8edf193a11c838!2sGlobal%20Precast!5e0!3m2!1sen!2sin!4v1711234567890!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Global Precast Location"
                            ></iframe>
                            {/* Overlay Button */}
                            <a
                                href="https://maps.app.goo.gl/hVekDZPofm8Pz3sy5"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-md shadow-lg font-medium text-sm text-slate-900 hover:bg-orange-50 hover:text-orange-600 transition-colors z-10 flex items-center space-x-2"
                            >
                                <MapPin className="w-4 h-4" />
                                <span>Open in Maps</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
