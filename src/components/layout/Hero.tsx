'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-vital-slate pt-20">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-vital-teal rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-vital-orange rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-white/20"
          >
            <Star className="w-4 h-4 text-vital-orange fill-vital-orange" />
            <span className="text-white text-sm font-medium">Transformación Integral Real</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold font-display text-white mb-6 leading-tight"
          >
            El poder de <span className="text-transparent bg-clip-text bg-gradient-to-r from-vital-teal to-vital-orange">levantarse</span> y volver a empezar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-slate-300 mb-10 max-w-3xl"
          >
            <strong>Historias reales de resiliencia.</strong> Superación tras accidentes, cambios profundos de hábitos y reconstrucción mental. 
            Te acompañamos con nutrición clínica, psicología y medicina integral.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="bg-vital-orange hover:bg-vital-orange/90 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-vital-orange/20 transition-all flex items-center justify-center space-x-2">
              <span>Ver Historias de Éxito</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-10 py-4 rounded-full font-bold text-lg border border-white/10 transition-all">
              Conoce al Equipo Médico
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/5"
          >
            {/* Placeholder for a high-quality transformation video or image */}
            <div className="absolute inset-0 bg-gradient-to-t from-vital-slate via-transparent to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" 
              alt="Health and Wellness"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 left-8 z-20 text-left">
              <div className="flex -space-x-2 mb-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-vital-slate bg-slate-400 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="User" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-vital-slate bg-vital-teal flex items-center justify-center text-xs text-white font-bold">
                  +500
                </div>
              </div>
              <p className="text-white font-medium">Más de 500 vidas transformadas este año</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
