
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Send, Mail } from 'lucide-react';

const Contact = () => {
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
        const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);

        window.location.href = `mailto:axitkatharotiya2005@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-24 min-h-screen bg-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4"
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                    >
                        Have a project in mind? Let's discuss how our folding wall systems can transform your space.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100"
                    >
                        <h2 className="text-2xl font-bold font-display text-slate-800 mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Project Details</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                            >
                                <span>Send Message</span>
                                <Send className="w-4 h-4 ml-2" />
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-12 pl-0 md:pl-12 pt-8"
                    >
                        <div>
                            <h3 className="text-xl font-bold font-display text-slate-900 mb-6 border-b border-slate-200 pb-2 inline-block">
                                Contact Information
                            </h3>
                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-orange-100 p-3 rounded-lg text-orange-600">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-1">Headquarters</p>
                                        <a
                                            href="https://maps.app.goo.gl/hVekDZPofm8Pz3sy5"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-lg text-slate-900 font-medium leading-relaxed hover:text-orange-600 transition-colors block"
                                        >
                                            Gat No. 448, Awhalwadi Malwadi Rd.,<br />
                                            Awhalwadi, Wagholi,<br />
                                            Tal. Haveli, Dist. Pune – 412207
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-orange-100 p-3 rounded-lg text-orange-600">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-1">Phone</p>
                                        <div className="space-y-1">
                                            <a href="tel:+917709706662" className="block text-lg text-slate-900 font-medium hover:text-orange-600 transition-colors">+91 77097 06662</a>
                                            <a href="tel:+918530856662" className="block text-lg text-slate-900 font-medium hover:text-orange-600 transition-colors">+91 85308 56662</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-orange-100 p-3 rounded-lg text-orange-600">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-1">Email</p>
                                        <a href="mailto:info@globalprecast.com" className="text-lg text-slate-900 font-medium hover:text-orange-600 transition-colors">info@globalprecast.com</a>
                                    </div>
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
                            <a
                                href="https://maps.app.goo.gl/WsjVZceNcoNwdXL57"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-slate-900 text-sm font-medium px-4 py-2 rounded-lg shadow-lg flex items-center transition-all opacity-80 hover:opacity-100"
                            >
                                <MapPin className="w-4 h-4 mr-2 text-orange-600" />
                                Open in Maps
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
