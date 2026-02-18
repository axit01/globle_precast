
import React from 'react';
import Hero from '../components/Hero';
import StrengthSection from '../components/StrengthSection';
import BenefitsSection from '../components/BenefitsSection';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white"
        >
            <Hero />
            <StrengthSection />
            <BenefitsSection />
        </motion.div>
    );
};

export default Home;
