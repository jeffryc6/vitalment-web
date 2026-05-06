'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Palette, 
  Moon, 
  Zap, 
  Layout, 
  Video, 
  Activity, 
  Watch, 
  Trophy, 
  BarChart3,
  Heart,
  Brain,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export default function MobileAppPage() {
  const principles = [
    {
      title: "Calma Visual",
      desc: "Espacios negativos y paletas naturales para reducir la fatiga cognitiva y el estrés digital.",
      icon: <Sparkles className="w-6 h-6 text-vital-teal" />
    },
    {
      title: "Personalización",
      desc: "La interfaz se adapta a tu estado de ánimo, sugiriendo contenidos basados en tu energía diaria.",
      icon: <Palette className="w-6 h-6 text-vital-orange" />
    },
    {
      title: "Seguridad",
      desc: "Diseño que transmite confianza y privacidad, esencial para salud mental y datos médicos.",
      icon: <ShieldCheck className="w-6 h-6 text-vital-teal" />
    }
  ];

  const modules = [
    {
      title: "Home Feed: Tu Refugio",
      desc: "Un diario vivo que te saluda y presenta metas mediante Soft UI. Acceso a meditación, actividad física y motivación.",
      icon: <Layout className="w-8 h-8" />,
      color: "bg-vital-teal"
    },
    {
      title: "Módulo Mente",
      desc: "Terapia en alta fidelidad con Glassmorfismo. Herramientas terapéuticas y botones S.O.S sin perder conexión visual.",
      icon: <Video className="w-8 h-8" />,
      color: "bg-vital-orange"
    },
    {
      title: "Módulo Cuerpo",
      desc: "Yoga inmersivo con guías de alineación y gimnasio con tracking de analítica de fuerza.",
      icon: <Activity className="w-8 h-8" />,
      color: "bg-vital-slate"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-vital-slate overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-vital-teal/10 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/20 text-white text-sm"
              >
                <Smartphone className="w-4 h-4 text-vital-teal" />
                <span>VitalMente Mobile: El Ecosistema Visual</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight font-display"
              >
                La interfaz del bienestar en <span className="text-vital-teal">2026</span>.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-slate-300 leading-relaxed mb-10"
              >
                Descubre un diseño equilibrado entre tecnología, calma y resultados corporativos. El ADN de nuestra interfaz está centrado en la resiliencia humana.
              </motion.p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-vital-teal text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-teal-600 transition flex items-center space-x-2">
                  <Smartphone className="w-5 h-5" />
                  <span>Descargar App</span>
                </button>
                <button className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition">
                  Ver Prototipo
                </button>
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 w-[300px] mx-auto lg:ml-auto lg:mr-0 border-[8px] border-slate-800 rounded-[3rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)]">
                <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" alt="App Mockup" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-vital-orange/20 blur-3xl rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principios de Diseño */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-sm font-bold text-vital-orange uppercase tracking-widest mb-4">ADN de la Interfaz</h2>
          <h3 className="text-4xl font-bold text-vital-slate mb-16">Principios Centrados en la Resiliencia</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {principles.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-md transition"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
                  {p.icon}
                </div>
                <h4 className="text-xl font-bold text-vital-slate mb-4">{p.title}</h4>
                <p className="text-slate-500 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Identidad y Modo Oscuro */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold text-vital-teal uppercase tracking-widest mb-4">Identidad Visual</h2>
              <h3 className="text-4xl font-bold text-vital-slate mb-6 leading-tight">Psicología del Color y Sostenibilidad</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Nuestra paleta combina el <span className="font-bold text-vital-teal">Teal</span> para la estabilidad y el <span className="font-bold text-vital-orange">Orange</span> para la energía física. Usamos tipografías como <span className="font-medium">SF Pro</span> y <span className="font-medium">Urbanist</span> para una legibilidad amigable.
              </p>
              <div className="bg-vital-slate p-8 rounded-[2rem] text-white flex items-start space-x-6">
                <Moon className="w-10 h-10 text-vital-teal shrink-0" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Modo Oscuro Nativo</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Reduce la luz azul y, en pantallas OLED, consume un <strong>30% menos de batería</strong>, alineándose con los valores de sostenibilidad de tu empresa.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
               <div className="space-y-4">
                  <div className="h-64 bg-vital-teal rounded-3xl flex items-end p-6 text-white font-bold text-xl">Teal Stability</div>
                  <div className="h-40 bg-slate-100 rounded-3xl"></div>
               </div>
               <div className="space-y-4 pt-12">
                  <div className="h-40 bg-vital-orange/10 rounded-3xl"></div>
                  <div className="h-64 bg-vital-orange rounded-3xl flex items-end p-6 text-white font-bold text-xl">Orange Energy</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Módulos de Experiencia */}
      <section className="py-24 bg-vital-slate text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-vital-teal uppercase tracking-widest mb-4">La Experiencia</h2>
            <h3 className="text-4xl font-bold mb-6">Módulos Clave de VitalMente Mobile</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {modules.map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group p-1 bg-gradient-to-br from-white/10 to-transparent rounded-[2.5rem]"
              >
                <div className="bg-vital-slate h-full p-8 rounded-[2.4rem] hover:bg-white/5 transition-colors">
                  <div className={`w-16 h-16 ${m.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                    {m.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{m.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio-Data y Gamificación */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-2 text-vital-teal font-bold mb-6">
                <Watch className="w-6 h-6" />
                <span>Wearables & Bio-Data</span>
              </div>
              <h3 className="text-4xl font-bold text-vital-slate mb-6">Conectividad Total, Resultados Orgánicos</h3>
              <p className="text-slate-600 mb-8 text-lg">
                Integración total con anillos de salud y relojes inteligentes. Visualizamos tus tendencias de sueño y frecuencia cardíaca mediante gráficos de olas orgánicas que inspiran calma, no ansiedad.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 rounded-2xl">
                  <p className="text-3xl font-bold text-vital-teal mb-1">8h 12m</p>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Promedio Sueño Profundo</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl">
                  <p className="text-3xl font-bold text-vital-orange mb-1">62 bpm</p>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Frecuencia en Reposo</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-10 rounded-[3rem] text-white relative"
            >
              <div className="absolute top-0 right-0 p-8">
                <Trophy className="w-12 h-12 text-vital-orange opacity-20" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Gamificación Positiva</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Celebramos los "Pequeños Pasos" (Tiny Habits) con recompensas visuales. Hasta 12 insignias por nivel compartibles en tu perfil corporativo. Sin competencia tóxica, solo espíritu de equipo.
              </p>
              <div className="flex flex-wrap gap-4">
                {[1,2,3,4,5,6].map(i => (
                  <div key={i} className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/5">
                    <Sparkles className={`w-8 h-8 ${i === 1 ? 'text-vital-orange' : 'text-white/20'}`} />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Analítica Corporativa Teaser */}
      <section className="py-24 bg-vital-teal/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-vital-slate mb-12">Potencia Corporativa</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             <div className="p-8 bg-white rounded-3xl shadow-sm">
                <p className="text-4xl font-bold text-vital-teal mb-2">92%</p>
                <p className="text-xs text-slate-500 font-bold uppercase">Adopción</p>
             </div>
             <div className="p-8 bg-white rounded-3xl shadow-sm">
                <p className="text-4xl font-bold text-vital-teal mb-2">8.4</p>
                <p className="text-xs text-slate-500 font-bold uppercase">Índice Resiliencia</p>
             </div>
             <div className="p-8 bg-white rounded-3xl shadow-sm">
                <p className="text-4xl font-bold text-vital-orange mb-2">-24%</p>
                <p className="text-xs text-slate-500 font-bold uppercase">Nivel Estrés</p>
             </div>
             <div className="p-8 bg-white rounded-3xl shadow-sm">
                <p className="text-4xl font-bold text-vital-teal mb-2">+150</p>
                <p className="text-xs text-slate-500 font-bold uppercase">Sesiones Activas</p>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
