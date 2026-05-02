'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "El Poder de los Hábitos: De la Autodestrucción al Amor Propio",
    category: "Superación",
    summary: "La historia de Diego: Cómo dejar el alcohol después de 20 años y transformar el cuerpo y la mente.",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=2076&auto=format&fit=crop",
    author: "Dra. Maricel Muñoz",
    date: "28 Abr 2026"
  },
  {
    id: 2,
    title: "Vencer la Mente para Transformar el Cuerpo",
    category: "Metabolismo",
    summary: "Se desmitifica la idea de que el metabolismo lento es una condena inevitable. Aprende a regularlo.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop",
    author: "Dra. Maricel Muñoz",
    date: "30 Abr 2026"
  },
  {
    id: 3,
    title: "El Engaño de las Calorías: Nutrición Real",
    category: "Nutrición",
    summary: "¿Por qué comerse una galleta no es igual a comerse una manzana? Descubre el impacto hormonal.",
    image: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=2006&auto=format&fit=crop",
    author: "Dra. Maricel Muñoz",
    date: "01 May 2026"
  }
];

const BlogSection = () => {
  return (
    <section id="historias" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-vital-orange font-bold tracking-widest uppercase text-sm"
            >
              Historias & Conocimiento
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold font-display text-vital-slate mt-4"
            >
              Inspiración para tu <span className="text-vital-teal">Transformación</span>
            </motion.h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-vital-teal font-bold flex items-center space-x-2 border-b-2 border-vital-teal pb-1"
          >
            <span>Ver todos los artículos</span>
            <ArrowUpRight className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col h-full bg-slate-50 rounded-[2.5rem] overflow-hidden hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-slate-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-md text-vital-teal text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex items-center space-x-4 text-slate-400 text-sm mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold font-display text-vital-slate mb-4 leading-tight hover:text-vital-teal transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-8 flex-grow">
                  {post.summary}
                </p>
                <button className="flex items-center space-x-2 text-vital-orange font-bold group">
                  <span>Leer más</span>
                  <div className="w-8 h-8 rounded-full bg-vital-orange/10 flex items-center justify-center group-hover:bg-vital-orange group-hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
