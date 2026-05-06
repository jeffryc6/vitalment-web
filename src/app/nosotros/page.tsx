'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Heart, Target, Eye, Shield, Activity, Users, Lightbulb } from 'lucide-react';

export default function NosotrosPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const valores = [
    {
      icon: <Heart className="w-6 h-6 text-vital-orange" />,
      title: "Empatía Radical",
      desc: "No juzgamos el punto de partida de nadie. Entendemos que cada persona lucha batallas silenciosas y nuestro deber es escuchar antes de recetar."
    },
    {
      icon: <Shield className="w-6 h-6 text-vital-orange" />,
      title: "Resiliencia Auténtica",
      desc: "Creemos en el poder del 'quiebre'. Sabemos que de los momentos más oscuros nacen las transformaciones más duraderas."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-vital-orange" />,
      title: "Ciencia y Rigurosidad",
      desc: "Todo nuestro acompañamiento, desde la suplementación hasta la terapia psicológica, está respaldado por profesionales certificados y evidencia científica."
    },
    {
      icon: <Activity className="w-6 h-6 text-vital-orange" />,
      title: "Integralidad (Visión 360°)",
      desc: "No separamos la mente del cuerpo. Abordamos al ser humano como un todo interconectado, donde el descanso, el movimiento, la nutrición y el pensamiento son igual de importantes."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Usamos un div con bg oscuro detrás del nav para que los links blancos sean visibles si no hay Hero con fondo oscuro, 
          o creamos un pequeño header visual */}
      <div className="bg-vital-slate">
        <Navbar />
        <div className="pt-32 pb-16 px-6 text-center max-w-4xl mx-auto">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold font-display text-white mb-6"
          >
            Sobre Nosotros
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-teal-100"
          >
            El Poder de Volver a Empezar
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-20 space-y-24">
        
        {/* Intro */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-slate-100"
        >
          <h2 className="text-3xl font-bold text-vital-slate mb-8 flex items-center">
            <span className="text-vital-teal mr-3">🌿</span> Un ecosistema de resiliencia humana
          </h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              En VitalMente no somos solo una clínica digital de salud; somos un ecosistema de resiliencia humana.
            </p>
            <p>
              Nacimos de una verdad innegable que la industria del bienestar suele ignorar: <strong>es imposible transformar el cuerpo si la mente está rota.</strong> Vimos cómo las dietas estrictas, los gimnasios y los programas de salud corporativa tradicionales fracasaban una y otra vez porque solo trataban los síntomas superficiales, ignorando la carga emocional, el estrés y los hábitos destructivos que originan el problema.
            </p>
            <p>
              Comprendimos que <strong>tocar fondo no es el final</strong>, sino el cimiento más sólido para reconstruirse. Por ello, creamos una plataforma única en su clase que fusiona la rigurosidad de la ciencia médica y psicológica con la fuerza inspiradora de la superación personal real.
            </p>
            <div className="bg-vital-teal/5 border-l-4 border-vital-teal p-6 mt-8 italic text-slate-700">
              "Ya sea que busques sanar tu relación con la comida, superar una etapa de ansiedad, recuperarte de una lesión física o que seas una empresa buscando proteger la salud mental de tus colaboradores para formar un equipo de alto rendimiento, en VitalMente encontrarás un refugio seguro. Somos médicos, psicólogos, nutricionistas, coaches de vida y, sobre todo, seres humanos que entienden que el verdadero éxito comienza cuando decides vencer a tu mente para transformar tu vida."
            </div>
          </div>
        </motion.section>

        {/* Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-gradient-to-br from-vital-teal to-teal-800 text-white rounded-[3rem] p-10 md:p-12 shadow-lg"
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-6 font-display">Nuestra Misión</h2>
            <p className="text-teal-50 text-lg leading-relaxed">
              Democratizar el acceso a la salud integral —Mente, Cuerpo y Espíritu— brindando a personas y organizaciones las herramientas médicas, terapéuticas y motivacionales necesarias para romper sus ciclos de autodestrucción. Nos dedicamos a acompañar a cada usuario en su proceso diario de sanación mediante telepsicología profesional, nutrición científica, bienestar físico y el poder de la empatía, demostrando que siempre es posible levantarse y construir una versión más fuerte de sí mismos.
            </p>
          </motion.section>

          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-gradient-to-br from-vital-slate to-slate-800 text-white rounded-[3rem] p-10 md:p-12 shadow-lg"
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-6 font-display">Nuestra Visión</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Ser la plataforma global líder y el estándar de oro en bienestar integral y salud mental corporativa. Aspiramos a transformar radicalmente la cultura del bienestar en la sociedad y en las empresas, erradicando el estigma de pedir ayuda psicológica. Visualizamos un mundo donde la resiliencia sea el motor principal de organizaciones altamente productivas y de seres humanos plenamente felices y conscientes de su poder interior.
            </p>
          </motion.section>
        </div>

        {/* Valores Fundamentales */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-vital-slate mb-4">
              Nuestros Valores Fundamentales
            </h2>
            <p className="text-xl text-slate-500">
              Los pilares que sostienen el ecosistema VitalMente
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {valores.map((valor, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
                  {valor.icon}
                </div>
                <h3 className="text-xl font-bold text-vital-slate mb-3">{valor.title}</h3>
                <p className="text-slate-600 leading-relaxed">{valor.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

      </div>
      <Footer />
    </main>
  );
}
