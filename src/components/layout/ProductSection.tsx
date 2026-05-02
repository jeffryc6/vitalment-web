'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, CheckCircle2 } from 'lucide-react';

const products = [
  {
    name: "Earth's Creation: A THRU Z Multi Vitamin",
    subtitle: "Soporte Integral para el Cuerpo",
    description: "Multivitamínico de alta potencia con cobertura completa de nutrientes para optimizar tu metabolismo y fortalecer tu sistema inmunológico.",
    image: "/products/ec1.jpeg",
    benefits: ["Energía y Metabolismo", "Salud Cardiovascular", "Apoyo Inmunológico", "Nutrición Celular"]
  },
  {
    name: "Earth's Creation: Natural Triple Omega 3,6,9",
    subtitle: "Salud del Corazón y Cerebro",
    description: "Mezcla premium de ácidos grasos esenciales para mantener niveles saludables de colesterol y apoyar la función cognitiva.",
    image: "/products/ec2.jpeg",
    benefits: ["Pescado, Linaza y Onagra", "Función Cerebral", "Salud Cardiovascular", "Bienestar de la Piel"]
  },
  {
    name: "Earth's Creation: Vitamin D3 + K2",
    subtitle: "Salud Ósea e Inmunológica",
    description: "Combinación sinérgica para una máxima absorción de calcio y un sistema inmunológico impenetrable.",
    image: "/products/ec3.jpeg",
    benefits: ["Densidad Ósea", "Absorción Superior", "Salud Arterial", "Vitalidad Diaria"]
  },
  {
    name: "Earth's Creation: Apple Cider Vinegar Gummies",
    subtitle: "Salud Digestiva Simplificada",
    description: "Gomitas deliciosas con 'La Madre' para apoyar la digestión, el metabolismo y el control natural del apetito.",
    image: "/products/ec4.jpeg",
    benefits: ["Digestión Saludable", "Control de Peso", "Desintoxicación Natural", "Sabor Increíble"]
  },
  {
    name: "Earth's Creation: Magnesium Citrate Gummies",
    subtitle: "Relajación y Recuperación",
    description: "Relajante muscular natural diseñado para reducir la tensión, mejorar el sueño y acelerar la recuperación física.",
    image: "/products/ec5.jpeg",
    benefits: ["Relajación Muscular", "Mejor Calidad de Sueño", "Reducción de Estrés", "Recuperación Post-Entreno"]
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
