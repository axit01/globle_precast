
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, FileText, Globe } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-24 min-h-screen bg-white font-body text-slate-800"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4"
                    >
                        Privacy Policy
                    </motion.h1>
                    <p className="text-slate-500">Last updated: February 18, 2026</p>
                </div>

                <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-orange-600">
                    <section className="mb-10">
                        <div className="flex items-center mb-4">
                            <Shield className="w-6 h-6 text-orange-600 mr-3" />
                            <h2 className="text-2xl text-slate-900 m-0">1. Introduction</h2>
                        </div>
                        <p>
                            Global Precast ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
                        </p>
                    </section>

                    <section className="mb-10">
                        <div className="flex items-center mb-4">
                            <FileText className="w-6 h-6 text-orange-600 mr-3" />
                            <h2 className="text-2xl text-slate-900 m-0">2. Information We Collect</h2>
                        </div>
                        <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 text-slate-700">
                            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.</li>
                            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <div className="flex items-center mb-4">
                            <Globe className="w-6 h-6 text-orange-600 mr-3" />
                            <h2 className="text-2xl text-slate-900 m-0">3. Use of Your Information</h2>
                        </div>
                        <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. We may use information collected about you via the Site to:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 text-slate-700">
                            <li>Process your orders and deliver products.</li>
                            <li>Send you information about our products, services, and promotions.</li>
                            <li>Respond to customer service requests and support needs.</li>
                            <li>Improve our website and product offerings.</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <div className="flex items-center mb-4">
                            <Lock className="w-6 h-6 text-orange-600 mr-3" />
                            <h2 className="text-2xl text-slate-900 m-0">4. Security of Your Information</h2>
                        </div>
                        <p>
                            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl text-slate-900 mb-4">5. Contact Us</h2>
                        <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
                        <div className="mt-4 bg-slate-50 p-6 rounded-lg border border-slate-200">
                            <p className="font-bold text-slate-900">Global Precast</p>
                            <p className="text-slate-600">Gat No. 448, Awhalwadi Malwadi Rd., Awhalwadi, Wagholi,</p>
                            <p className="text-slate-600">Tal. Haveli, Dist. Pune – 412207</p>
                            <p className="text-slate-600 mt-2">Email: info@globalprecast.com</p>
                            <p className="text-slate-600">Phone: +91 77097 06662</p>
                        </div>
                    </section>
                </div>
            </div>
        </motion.div>
    );
};

export default PrivacyPolicy;
