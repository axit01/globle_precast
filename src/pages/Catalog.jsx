
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, MapPin, Phone, ShieldCheck, Layers, Hammer, Clock, DollarSign, CloudRain, Package, Users } from 'lucide-react';

const Catalog = () => {
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

    const advantages = [
        { icon: ShieldCheck, title: "High Durability", desc: "High-strength reinforced concrete designed for long service life." },
        { icon: Clock, title: "Quick Installation", desc: "Saves time with easy and fast installation processes." },
        { icon: DollarSign, title: "Cost-Effective", desc: "A solution that balances premium quality with competitive pricing." },
        { icon: CloudRain, title: "Weather Resistant", desc: "Corrosion and weather resistant, suitable for all environments." },
        { icon: Hammer, title: "Low Maintenance", desc: "Minimal maintenance required due to robust construction." },
        { icon: Layers, title: "Versatile", desc: "Suitable for various applications from residential to industrial." },
    ];

    const applications = [
        "Compound walls",
        "Industrial boundaries",
        "Warehouses",
        "Residential projects",
        "Farmhouses",
        "Construction sites"
    ];

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
                        Global Precast Catalog
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
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">About Us</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Global Precast is a trusted manufacturer of high-quality precast concrete products providing durable, cost-effective, and quick construction solutions for residential, commercial, and industrial projects. Our products are manufactured using high-grade materials and strict quality standards to ensure long service life and strength.
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
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-10 md:p-14 flex flex-col justify-center">
                                <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Our Products</h2>
                                <p className="text-slate-500 mb-8">We manufacture precast concrete components designed for strong and efficient construction needs.</p>

                                <h3 className="text-2xl font-bold text-orange-600 mb-6">75mm Precast Concrete Panels</h3>

                                <ul className="space-y-4">
                                    {[
                                        "Thickness: 75 mm",
                                        "High-strength reinforced concrete",
                                        "Durable and weather resistant",
                                        "Easy and fast installation",
                                        "Suitable for boundary walls and construction projects",
                                        "Low maintenance and long-lasting performance"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center text-slate-700">
                                            <div className="w-2 h-2 bg-orange-600 rounded-full mr-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8 pt-6 border-t border-slate-100">
                                    <p className="font-semibold text-slate-900 italic">
                                        * Custom sizes available as per requirement.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-slate-200 min-h-[400px] relative">
                                <img
                                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop"
                                    alt="Precast Concrete Panel Construction"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                            </div>
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
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-10 text-center">Product Advantages</h2>
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
                                <Package className="mr-3 text-orange-500" /> Applications
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {applications.map((app, i) => (
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
                            <Users className="mr-3 text-orange-600" /> Why Choose Global Precast
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "Reliable product quality",
                                "Timely delivery",
                                "Custom size availability",
                                "Professional service",
                                "Competitive pricing"
                            ].map((item, i) => (
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
                    <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">Quality Assurance</h2>
                    <p className="text-slate-700 max-w-3xl mx-auto text-lg">
                        Our products are manufactured using premium raw materials with proper curing and quality testing processes to ensure consistent performance and long life.
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
                    <h2 className="text-3xl font-display font-bold mb-8">Contact Us</h2>
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
