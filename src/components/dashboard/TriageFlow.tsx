'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Target, Video, Brain, Heart, ArrowRight, CheckCircle2, User } from 'lucide-react';
import Link from 'next/link';

type Step = 'initial' | 'question2' | 'result';

export default function TriageFlow() {
  const [step, setStep] = useState<Step>('initial');
  const [selection, setSelection] = useState<string | null>(null);
  const [intensity, setIntensity] = useState<number>(3);
  
  const handleInitialSelection = (val: string) => {
    setSelection(val);
    setStep('question2');
  };

  const handleFinalSubmit = () => {
    setStep('result');
  };

  const resetFlow = () => {
    setStep('initial');
    setSelection(null);
  };

  // Mock de profesionales para la recomendación
  const recommendedProfessionals = [
    { name: "Dra. Ana Méndez", role: "Psicóloga Clínica", image: "https://i.pravatar.cc/150?u=dra", available: "Hoy, 4:00 PM" },
    { name: "Carlos Vargas", role: "Coach Motivacional", image: "https://i.pravatar.cc/150?u=car", available: "Hoy, 5:30 PM" }
  ];

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden min-h-[400px] relative">
      <AnimatePresence mode="wait">
        {/* PASO 1: Selección inicial */}
        {step === 'initial' && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="p-8"
          >
            <h2 className="text-2xl font-bold text-vital-slate mb-2">¿En qué podemos apoyarte hoy?</h2>
            <p className="text-slate-500 mb-8">Selecciona la opción que mejor describa cómo te sientes o lo que buscas mejorar.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { id: 'ansiedad', title: "Manejar Ansiedad o Estrés", icon: <Brain className="w-6 h-6" />, color: "bg-blue-50 text-blue-600 border-blue-100 hover:border-blue-300" },
                { id: 'nutricion', title: "Mejorar Energía y Nutrición", icon: <Target className="w-6 h-6" />, color: "bg-green-50 text-green-600 border-green-100 hover:border-green-300" },
                { id: 'desahogo', title: "Necesito un Desahogo Rápido", icon: <Video className="w-6 h-6" />, color: "bg-vital-teal/10 text-vital-teal border-vital-teal/20 hover:border-vital-teal/50" },
                { id: 'fisico', title: "Recuperación Física o Yoga", icon: <Activity className="w-6 h-6" />, color: "bg-vital-orange/10 text-vital-orange border-vital-orange/20 hover:border-vital-orange/50" }
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => handleInitialSelection(item.id)}
                  className={`p-6 border-2 rounded-2xl transition-all flex flex-col items-start space-y-4 text-left ${item.color} group`}
                >
                  <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="font-bold text-vital-slate text-lg">{item.title}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* PASO 2: Intensidad/Contexto */}
        {step === 'question2' && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="p-8 flex flex-col h-full justify-center"
          >
            <button onClick={resetFlow} className="text-sm text-slate-400 hover:text-vital-orange mb-6 flex items-center">
              <ArrowRight className="w-4 h-4 mr-1 rotate-180" /> Volver
            </button>
            <h2 className="text-2xl font-bold text-vital-slate mb-2">¿Hace cuánto tiempo te sientes así?</h2>
            <p className="text-slate-500 mb-8">Esto nos ayuda a recomendarte al profesional más adecuado.</p>
            
            <div className="space-y-4 max-w-lg">
              {['Solo por hoy / Reciente', 'Un par de semanas', 'Más de un mes', 'Es algo crónico'].map((option, idx) => (
                <label key={idx} className="flex items-center space-x-3 p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                  <input type="radio" name="duration" className="w-5 h-5 text-vital-teal focus:ring-vital-teal" defaultChecked={idx === 0} />
                  <span className="text-slate-700 font-medium">{option}</span>
                </label>
              ))}
            </div>

            <div className="mt-8">
              <button 
                onClick={handleFinalSubmit}
                className="bg-vital-teal text-white px-8 py-3 rounded-xl font-bold shadow-md hover:bg-vital-teal/90 transition-colors flex items-center space-x-2"
              >
                <span>Ver Recomendaciones</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}

        {/* PASO 3: Resultados y Matchmaking */}
        {step === 'result' && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 bg-gradient-to-br from-vital-teal/5 to-transparent h-full"
          >
            <div className="flex items-center space-x-3 mb-6">
              <CheckCircle2 className="w-8 h-8 text-vital-teal" />
              <h2 className="text-2xl font-bold text-vital-slate">Encontramos tu Match Ideal</h2>
            </div>
            <p className="text-slate-600 mb-8">Basado en lo que nos compartiste, estos profesionales son los más indicados para guiarte. Puedes usar uno de tus créditos corporativos.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendedProfessionals.map((prof, idx) => (
                <div key={idx} className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4 mb-4">
                    <img src={prof.image} alt={prof.name} className="w-16 h-16 rounded-full object-cover border-2 border-slate-100" />
                    <div>
                      <h3 className="font-bold text-lg text-vital-slate">{prof.name}</h3>
                      <p className="text-vital-teal font-medium text-sm">{prof.role}</p>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 p-3 rounded-lg mb-4 flex items-center space-x-2 text-sm text-slate-600">
                    <Activity className="w-4 h-4 text-slate-400" />
                    <span>Disponibilidad: <strong>{prof.available}</strong></span>
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 bg-vital-orange text-white py-2 rounded-lg font-bold text-sm hover:bg-vital-orange/90 transition">
                      Agendar (1 Crédito)
                    </button>
                    <button className="px-4 py-2 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 transition">
                      <User className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button onClick={resetFlow} className="text-slate-500 text-sm font-medium hover:text-vital-teal underline">
                Volver a hacer el Triage
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
