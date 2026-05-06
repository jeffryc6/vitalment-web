'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const MobileAppTeaser = () => {
  return (
    <section className="py-24 bg-vital-slate text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-vital-teal/20 to-vital-orange/20 rounded-[3rem] p-12 md:p-20 relative border border-white/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-vital-teal/10 blur-3xl rounded-full"></div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
            <div className="lg:w-2/3 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6">
                <Smartphone className="w-4 h-4 text-vital-teal" />
                <span className="text-sm font-bold uppercase tracking-wider">Próximamente</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Lleva tu bienestar en el <span className="text-vital-teal">bolsillo</span>.
              </h2>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl">
                Descubre VitalMente Mobile: El ecosistema visual que integra terapia, ejercicio y analítica biométrica en una sola interfaz diseñada para la calma.
              </p>
              <Link 
                href="/app-movil" 
                className="inline-flex items-center space-x-3 bg-vital-teal hover:bg-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-xl"
              >
                <span>Explorar el Ecosistema Móvil</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="lg:w-1/3">
              <motion.div 
                initial={{ y: 20 }}
                animate={{ y: -20 }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                className="w-full max-w-[280px] mx-auto border-[6px] border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600" 
                  alt="App Preview" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppTeaser;
