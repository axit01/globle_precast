
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <NavLink to="/" className="text-2xl font-bold tracking-tight text-white mb-4 block font-display">
                            Global Precast
                        </NavLink>
                        <p className="text-sm text-slate-400">
                            Pioneering folding wall systems for modern architectural spaces.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="md:col-span-2 grid grid-cols-2 gap-8 sm:grid-cols-3">
                        <div>
                            <h3 className="text-sm font-semibold text-slate-100 tracking-wider uppercase mb-4">
                                Company
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <NavLink to="/catalog" className="hover:text-white transition-colors duration-200">
                                        Catalog
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" className="hover:text-white transition-colors duration-200">
                                        Contact
                                    </NavLink>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors duration-200">
                                        About Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-slate-100 tracking-wider uppercase mb-4">
                                Legal
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <NavLink to="/privacy-policy" className="hover:text-white transition-colors duration-200">
                                        Privacy Policy
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/terms-of-service" className="hover:text-white transition-colors duration-200">
                                        Terms of Service
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="md:col-span-1">
                        <h3 className="text-sm font-semibold text-slate-100 tracking-wider uppercase mb-4">
                            Connect
                        </h3>
                        <div className="flex space-x-4">
                            <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-orange-600 hover:text-white transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
                    &copy; 2026 Global Precast. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
