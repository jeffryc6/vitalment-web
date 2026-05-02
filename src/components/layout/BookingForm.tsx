'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Mail, MessageSquare, CheckCircle2, Loader2 } from 'lucide-react';

const BookingForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    fecha: '',
    motivo: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setLoading(false);
    setSuccess(true);
    setFormData({ nombre: '', email: '', fecha: '', motivo: '' });
    
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section id="reservar" className="py-24 bg-vital-slate text-white relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-vital-teal rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-vital-orange rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-vital-orange font-bold tracking-widest uppercase text-sm"
            >
              Agenda tu Consulta
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold font-display mt-4 mb-8"
            >
              Comienza tu Camino a la <span className="text-vital-teal">Plenitud</span>
            </motion.h2>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
              Recibe asesoría personalizada con nuestro equipo multidisciplinario. Médicos, nutricionistas y psicólogos trabajando juntos para diseñar un plan integral que reconstruya tu salud física y mental.
            </p>
            
            <div className="space-y-6">
              {[
                { text: "Evaluación integral de salud y metabolismo", icon: CheckCircle2 },
                { text: "Plan nutricional adaptativo y sostenible", icon: CheckCircle2 },
                { text: "Acompañamiento en bienestar mental y emocional", icon: CheckCircle2 }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="bg-vital-teal/20 p-2 rounded-full">
                    <item.icon className="w-5 h-5 text-vital-teal" />
                  </div>
                  <span className="text-slate-200 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl"
            >
              {success ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-vital-slate mb-2">¡Reserva Enviada!</h3>
                  <p className="text-slate-500">Nos pondremos en contacto contigo muy pronto para confirmar los detalles.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-vital-slate flex items-center space-x-2">
                      <User className="w-4 h-4 text-vital-teal" />
                      <span>Nombre Completo</span>
                    </label>
                    <input 
                      type="text" required
                      placeholder="Juan Pérez"
                      className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl text-vital-slate focus:ring-2 focus:ring-vital-teal outline-none transition-all"
                      value={formData.nombre}
                      onChange={e => setFormData({...formData, nombre: e.target.value})}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-vital-slate flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-vital-teal" />
                        <span>Correo Electrónico</span>
                      </label>
                      <input 
                        type="email" required
                        placeholder="juan@ejemplo.com"
                        className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl text-vital-slate focus:ring-2 focus:ring-vital-teal outline-none transition-all"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-vital-slate flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-vital-teal" />
                        <span>Fecha Deseada</span>
                      </label>
                      <input 
                        type="date" required
                        className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl text-vital-slate focus:ring-2 focus:ring-vital-teal outline-none transition-all"
                        value={formData.fecha}
                        onChange={e => setFormData({...formData, fecha: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-vital-slate flex items-center space-x-2">
                      <MessageSquare className="w-4 h-4 text-vital-teal" />
                      <span>Motivo de Consulta</span>
                    </label>
                    <textarea 
                      rows={3}
                      placeholder="Cuéntanos un poco sobre tus objetivos..."
                      className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl text-vital-slate focus:ring-2 focus:ring-vital-teal outline-none transition-all resize-none"
                      value={formData.motivo}
                      onChange={e => setFormData({...formData, motivo: e.target.value})}
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-vital-teal hover:bg-teal-800 text-white font-bold py-5 rounded-2xl shadow-xl shadow-teal-900/20 transition-all flex items-center justify-center space-x-3 disabled:opacity-70"
                  >
                    {loading ? (
                      <Loader2 className="w-6 h-6 animate-spin" />
                    ) : (
                      <>
                        <span>Confirmar Reserva</span>
                        <CheckCircle2 className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
