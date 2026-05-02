'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Zap, Sparkles, Target, Users, Activity } from 'lucide-react';

const PillarCard = ({ icon: Icon, title, description, color, delay }: { icon: any, title: string, description: string, color: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
  >
    <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
      <Icon className="w-7 h-7 text-white" />
    </div>
    <h3 className="text-2xl font-bold font-display text-vital-slate mb-4">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </motion.div>
);

const Pillars = () => {
  const pillars = [
    {
      icon: Activity,
      title: "Nutrición con Ciencia",
      description: "Suplementos de grado clínico diseñados por Earth's Creation para optimizar tu metabolismo y asegurar que cada nutriente cuente en tu proceso.",
      color: "bg-vital-orange",
      delay: 0.1
    },
    {
      icon: Brain,
      title: "Resiliencia Mental",
      description: "Fórmulas avanzadas para el cerebro que apoyan la calma y el enfoque, permitiéndote mantener la fortaleza mental necesaria para tu cambio.",
      color: "bg-vital-teal",
      delay: 0.2
    },
    {
      icon: Heart,
      title: "Recuperación Vital",
      description: "Magnesio y Omegas de alta pureza para acelerar la recuperación física tras accidentes o entrenamientos intensos.",
      color: "bg-teal-600",
      delay: 0.3
    },
    {
      icon: Users,
      title: "Comunidad Vital",
      description: "Más que productos, somos una red de personas compartiendo historias de superación real apoyadas por nutrición de clase mundial.",
      color: "bg-slate-700",
      delay: 0.4
    }
  ];

  return (
    <section id="pilares" className="py-24 bg-vital-bg">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-vital-teal font-bold tracking-widest uppercase text-sm"
          >
            Acompañamiento 360°
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-display text-vital-slate mt-4 mb-6"
          >
            Ciencia Médica y <span className="text-vital-orange">Fortaleza Mental</span>
          </motion.h2>
          <p className="text-slate-600 text-lg">
            Combinamos diferentes disciplinas para asegurar una recuperación y transformación real y duradera.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <PillarCard key={index} {...pillar} />
          ))}
        </div>
        
        {/* Additional Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
                { label: "Casos de Éxito", value: "500+", icon: Target },
                { label: "Años de Exp.", value: "15+", icon: Sparkles },
                { label: "Comunidad", value: "2k+", icon: Users },
                { label: "Metodología", value: "360°", icon: Heart }
            ].map((stat, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="text-center"
                >
                    <div className="flex justify-center mb-2">
                        <stat.icon className="w-5 h-5 text-vital-orange" />
                    </div>
                    <div className="text-3xl font-bold text-vital-slate">{stat.value}</div>
                    <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
