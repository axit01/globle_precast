
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const { language, setLanguage, t } = useLanguage();

    const isHome = location.pathname === '/';

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.catalog'), path: '/catalog' },
        { name: t('nav.contact'), path: '/contact' },
    ];

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'mr', label: 'मराठी' },
        { code: 'hi', label: 'हिंदी' }
    ];

    // Dynamic classes based on scroll and page
    const navBackgroundClass = 'bg-white/10 backdrop-blur-md border-b border-white/10 shadow-sm transition-all duration-300';

    const textColorClass = (isHome && !isScrolled)
        ? 'text-white hover:text-orange-400'
        : 'text-slate-600 hover:text-orange-600';

    const mobileButtonClass = (isHome && !isScrolled)
        ? 'text-white hover:bg-white/20'
        : 'text-slate-600 hover:bg-slate-100';

    return (
        <nav className={`fixed w-full z-50 border-b transition-all duration-300 ${navBackgroundClass}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <NavLink to="/" className="flex-shrink-0 flex items-center">
                        <img
                            src={logo}
                            alt="Global Precast"
                            className="h-[72px] w-auto"
                        />
                    </NavLink>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive
                                            ? 'text-orange-500 bg-orange-50/10'
                                            : textColorClass
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>

                        {/* Language Selector */}
                        <div className="relative group">
                            <button className={`flex items-center space-x-1 focus:outline-none transition-colors duration-200 ${textColorClass}`}>
                                <Globe className="w-5 h-5" />
                                <span className="uppercase text-sm font-medium">{language}</span>
                            </button>
                            <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right ring-1 ring-black ring-opacity-5">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => setLanguage(lang.code)}
                                        className={`block w-full text-left px-4 py-2 text-sm ${language === lang.code ? 'bg-orange-50 text-orange-600' : 'text-slate-700 hover:bg-slate-50'}`}
                                    >
                                        {lang.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden items-center space-x-4">
                        {/* Mobile Language Selector */}
                        <div className="relative">
                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className={`appearance-none bg-transparent font-medium py-1 pr-4 pl-1 focus:outline-none ${textColorClass}`}
                            >
                                {languages.map((lang) => (
                                    <option key={lang.code} value={lang.code} className="text-slate-900">{lang.code.toUpperCase()}</option>
                                ))}
                            </select>
                        </div>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors ${mobileButtonClass}`}
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 overflow-hidden shadow-lg"
                        id="mobile-menu"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `block px-3 py-2 rounded-md text-base font-medium ${isActive
                                            ? 'text-orange-600 bg-orange-50'
                                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
