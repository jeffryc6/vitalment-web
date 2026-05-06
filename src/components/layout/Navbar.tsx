'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Heart, Brain, Dumbbell, ShoppingCart, Calendar, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AppointmentModal from './AppointmentModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Terapia Individual', href: '/#personal' },
    { name: 'Para Empresas', href: '/#corporate' },
    { name: 'App Móvil', href: '/app-movil' },
    { name: 'Suplementos', href: '/productos' },
    { name: 'Historias', href: '/#historias' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <img 
                src="/logo.png" 
                alt="VitalMente Logo" 
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`font-medium transition-colors hover:text-vital-orange ${scrolled ? 'text-vital-slate' : 'text-white'}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 border-l border-white/20 pl-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className={`font-semibold transition-all flex items-center space-x-2 ${scrolled ? 'text-vital-teal hover:text-vital-orange' : 'text-white hover:text-vital-orange'}`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar Cita</span>
                </button>
                <Link href="/auth/login" className="relative bg-vital-teal hover:bg-vital-teal/90 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-md hover:shadow-lg flex items-center space-x-2">
                  <span>Portal / Ingresar</span>
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${scrolled ? 'text-vital-slate' : 'text-white'} hover:text-vital-orange transition-colors`}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-4 text-base font-medium text-vital-slate hover:text-vital-orange hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="space-y-3 pt-2">
                  <button 
                    onClick={() => { setIsOpen(false); setIsModalOpen(true); }}
                    className="w-full bg-white border-2 border-vital-teal text-vital-teal px-6 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-slate-50 transition"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Agendar Cita</span>
                  </button>
                  <Link href="/auth/login" onClick={() => setIsOpen(false)} className="w-full bg-vital-teal text-white px-6 py-4 rounded-xl font-bold shadow-md flex items-center justify-center space-x-2 hover:bg-vital-teal/90 transition">
                    <User className="w-5 h-5" />
                    <span>Portal / Ingresar</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
