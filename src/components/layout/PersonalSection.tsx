'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Heart, Brain, Star, Clock } from 'lucide-react';

const PersonalSection = () => {
  const benefits = [
    {
      title: "Match Inteligente",
      description: "No pierdas tiempo buscando. Nuestro algoritmo te conecta con el especialista ideal según tu perfil y necesidades.",
      icon: <Brain className="w-6 h-6 text-vital-teal" />
    },
    {
      title: "Terapia y Coaching",
      description: "Accede a psicólogos clínicos, nutricionistas y coaches de vida en un solo lugar.",
      icon: <Heart className="w-6 h-6 text-vital-orange" />
    },
    {
      title: "Flexibilidad Total",
      description: "Agenda sesiones desde la comodidad de tu casa, en horarios que se adapten a tu ritmo de vida.",
      icon: <Clock className="w-6 h-6 text-vital-teal" />
    }
  ];

  return (
    <section id="personal" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Imagen / Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-vital-teal/5 rounded-full blur-3xl"></div>
            <div className="relative bg-slate-100 rounded-[2rem] p-4 shadow-2xl rotate-2">
               <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" 
                alt="Bienestar Personal" 
                className="rounded-[1.5rem] w-full h-[500px] object-cover -rotate-2 hover:rotate-0 transition-transform duration-500"
              />
              {/* Tarjeta flotante */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-[240px] border border-slate-100">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                </div>
                <p className="text-sm font-medium text-vital-slate italic">"La mejor decisión que he tomado para mi paz mental."</p>
                <p className="text-xs text-slate-400 mt-2">— Cliente Satisfecho</p>
              </div>
            </div>
          </motion.div>

          {/* Contenido */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm font-bold text-vital-teal uppercase tracking-widest mb-4">Bienestar Individual</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-vital-slate mb-6 leading-tight">
              Toma el control de tu <span className="text-vital-orange text-gradient">paz mental</span> hoy mismo.
            </h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              No necesitas ser parte de una empresa para acceder a la red clínica más robusta de la región. VitalMente ofrece atención personalizada para quienes buscan superar límites, sanar y redescubrir su mejor versión.
            </p>

            <div className="space-y-6 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-2 bg-slate-50 rounded-lg flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-vital-slate">{benefit.title}</h4>
                    <p className="text-slate-500 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-vital-orange hover:bg-vital-orange/90 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              Comenzar mi transformación
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PersonalSection;
