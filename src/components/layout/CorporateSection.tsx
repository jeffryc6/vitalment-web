'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, TrendingUp, ShieldCheck } from 'lucide-react';

const CorporateSection = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-vital-orange" />,
      title: "Aumenta la Productividad",
      description: "Equipos sanos y apoyados emocionalmente rinden hasta un 30% más y reducen sus niveles de burnout."
    },
    {
      icon: <Users className="w-8 h-8 text-vital-orange" />,
      title: "Retención de Talento",
      description: "Convierte tu empresa en un lugar donde la gente quiere quedarse, ofreciendo beneficios que cambian vidas."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-vital-orange" />,
      title: "Gestión Anónima y Segura",
      description: "Tus colaboradores tienen un espacio 100% confidencial, mientras tú recibes métricas agregadas del clima organizacional."
    }
  ];

  return (
    <section id="corporate" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-vital-teal/10 px-4 py-2 rounded-full mb-6"
          >
            <Building2 className="w-4 h-4 text-vital-teal" />
            <span className="text-vital-teal font-bold text-sm">VitalMente Corporate</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-display text-vital-slate mb-6"
          >
            Potencia el bienestar de tu equipo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500"
          >
            Implementa un Programa de Asistencia al Empleado (EAP) de nueva generación. Combina psicología, nutrición y actividad física en una sola plataforma.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-50 rounded-3xl p-8 hover:shadow-lg transition-all border border-slate-100 group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-vital-slate mb-4">{benefit.title}</h3>
              <p className="text-slate-500 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-vital-slate rounded-3xl p-8 md:p-12 text-center flex flex-col md:flex-row items-center justify-between shadow-2xl"
        >
          <div className="text-left mb-8 md:mb-0 md:mr-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">¿Listo para transformar tu empresa?</h3>
            <p className="text-slate-400 max-w-xl">
              Agenda una demostración con nuestro equipo y descubre cómo podemos adaptar VitalMente a las necesidades específicas de tu planilla.
            </p>
          </div>
          <button className="w-full md:w-auto bg-vital-teal hover:bg-vital-teal/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all whitespace-nowrap shadow-md">
            Solicitar Demo B2B
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CorporateSection;
