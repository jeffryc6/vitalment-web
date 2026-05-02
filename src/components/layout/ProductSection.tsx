'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, CheckCircle2 } from 'lucide-react';

const products = [
  {
    name: "A THRU Z Multi Vitamin",
    subtitle: "Whole Body Support",
    description: "Más que un multivitamínico promedio. Cobertura completa de nutrientes para energía, metabolismo, y salud inmunológica.",
    image: "/products/Screenshot 2026-05-02 141409.png",
    benefits: ["Energía y Metabolismo", "Salud del Corazón y Cerebro", "Apoyo Inmunológico", "Cobertura Total"]
  },
  {
    name: "Natural Triple Omega 3,6,9",
    subtitle: "Heart Health",
    description: "El poder del Omega 3-6-9. Apoya la salud del corazón, cerebro, piel y función inmunológica.",
    image: "/products/Screenshot 2026-05-02 141416.png",
    benefits: ["Linaza, Pescado y Onagra", "Salud Cardiovascular", "Niveles de Colesterol", "Apoyo a la Piel"]
  },
  {
    name: "Vitamin D3 + K2",
    subtitle: "Bone Health",
    description: "Apoyo inmunológico en el que puedes confiar y mejor absorción de calcio para huesos fuertes.",
    image: "/products/Screenshot 2026-05-02 141423.png",
    benefits: ["Apoyo Inmunológico", "Mejor Absorción de Calcio", "Huesos Saludables", "Salud del Corazón"]
  },
  {
    name: "Apple Cider Vinegar Gummies",
    subtitle: "Gut Health Made Easy",
    description: "Salud intestinal fácil. Gomitas con 'La Madre' para mejor digestión y control del apetito.",
    image: "/products/Screenshot 2026-05-02 141429.png",
    benefits: ["Mejor Digestión", "Menos Hinchazón", "Apoyo al Metabolismo", "Control de Apetito"]
  },
  {
    name: "Magnesium Citrate Gummies",
    subtitle: "Relax & Recover",
    description: "Relajación muscular natural. Apoya la calma, el sueño y reduce la tensión muscular.",
    image: "/products/Screenshot 2026-05-02 141436.png",
    benefits: ["Calma y Sueño", "Reduce la Tensión", "Relajación Muscular", "Sabor Delicioso"]
  }
];

const ProductSection = () => {
  return (
    <section id="productos" className="py-24 bg-teal-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-vital-orange font-bold tracking-widest uppercase text-sm"
          >
            Nutrición Científica
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-display text-teal-900 mt-4 mb-4"
          >
            Nuestros Aliados <span className="text-vital-orange">Nutricionales</span>
          </motion.h2>
          <p className="text-teal-700 max-w-2xl mx-auto text-lg">
            Suplementos de alta calidad diseñados para apoyar tu cuerpo mientras fortaleces tu mente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-teal-100 flex flex-col hover:shadow-2xl transition-all group"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                   <h3 className="text-xl font-bold font-display text-white leading-tight">{product.name}</h3>
                   <p className="text-vital-orange font-semibold text-sm">{product.subtitle}</p>
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-slate-600 text-sm mb-6 flex-grow">{product.description}</p>
                <div className="space-y-3 mb-8">
                  {product.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-vital-teal shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-vital-teal hover:bg-teal-800 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-teal-900/10">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Añadir al Carrito</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
