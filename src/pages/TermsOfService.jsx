
import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, HelpCircle, FileText } from 'lucide-react';

const TermsOfService = () => {
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
                        Terms of Service
                    </motion.h1>
                    <p className="text-slate-500">Last updated: February 18, 2026</p>
                </div>

                <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-orange-600">
                    <section className="mb-12">
                        <div className="flex items-start mb-4">
                            <span className="bg-orange-100 p-2 rounded-lg text-orange-600 mr-4 mt-1">
                                <FileText className="w-5 h-5" />
                            </span>
                            <div>
                                <h2 className="text-2xl mt-0 mb-4">1. Acceptance of Terms</h2>
                                <p>
                                    By accessing and using the Global Precast website and services, you accept and agree to be bound by the terms and provision of this agreement.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <div className="flex items-start mb-4">
                            <span className="bg-orange-100 p-2 rounded-lg text-orange-600 mr-4 mt-1">
                                <CheckCircle className="w-5 h-5" />
                            </span>
                            <div>
                                <h2 className="text-2xl mt-0 mb-4">2. Use of Services</h2>
                                <p>
                                    You agree to use our website and services only for lawful purposes. You are prohibited from:
                                </p>
                                <ul className="list-disc pl-5 mt-4 text-slate-700 space-y-2">
                                    <li>Violating any applicable laws or regulations.</li>
                                    <li>Infringing upon the rights of others.</li>
                                    <li>Interfering with or disrupting the functionality of the website.</li>
                                    <li>Attempting to gain unauthorized access to our systems.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <div className="flex items-start mb-4">
                            <span className="bg-orange-100 p-2 rounded-lg text-orange-600 mr-4 mt-1">
                                <AlertCircle className="w-5 h-5" />
                            </span>
                            <div>
                                <h2 className="text-2xl mt-0 mb-4">3. Intellectual Property</h2>
                                <p>
                                    The content, layout, design, data, databases and graphics on this website are protected by intellectual property laws. Unless expressly permitted in writing, you agree not to verify, modify, copy, reproduce, display, distribute, or create derivative works from the content.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <div className="flex items-start mb-4">
                            <span className="bg-orange-100 p-2 rounded-lg text-orange-600 mr-4 mt-1">
                                <HelpCircle className="w-5 h-5" />
                            </span>
                            <div>
                                <h2 className="text-2xl mt-0 mb-4">4. Limitation of Liability</h2>
                                <p>
                                    In no event shall Global Precast, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <h2 className="text-2xl mt-0 mb-4 text-slate-900">5. Governing Law</h2>
                        <p className="mb-4">
                            These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                        </p>
                        <p>
                            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                        </p>
                    </section>
                </div>
            </div>
        </motion.div>
    );
};

export default TermsOfService;
