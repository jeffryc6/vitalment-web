'use client';

import React, { useState } from 'react';
import { Calendar, Video, DollarSign, Star, Clock, Users, ArrowUpRight, CheckCircle2, X, Search, FileText, Save } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProfesionalDashboardPage() {
  const [showExpedientes, setShowExpedientes] = useState(false);
  const [showDisponibilidad, setShowDisponibilidad] = useState(false);

  const appointments = [
    {
      id: 1,
      patient: "Carlos Rodríguez",
      type: "B2B (Acme Corp)",
      time: "09:00 AM",
      status: "ready", // ready for video
      topic: "Manejo de ansiedad"
    },
    {
      id: 2,
      patient: "María Gómez",
      type: "B2C (Particular)",
      time: "11:30 AM",
      status: "upcoming",
      topic: "Desarrollo personal"
    },
    {
      id: 3,
      patient: "Juan Pérez",
      type: "B2B (TechSoft)",
      time: "03:00 PM",
      status: "upcoming",
      topic: "Burnout laboral"
    }
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
        <div>
          <h1 className="text-3xl font-bold text-vital-slate">Hola, Dra. Méndez</h1>
          <p className="text-slate-500 mt-2">Tienes <strong className="text-vital-teal">3 consultas programadas</strong> para hoy. Tu zona horaria es (UTC-06:00).</p>
        </div>
        <button className="bg-vital-slate text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition flex items-center justify-center space-x-2 shadow-md">
          <Calendar className="w-5 h-5" />
          <span>Sincronizar Google Calendar</span>
        </button>
      </header>

      {/* Métricas Superiores */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500 font-medium mb-1">Ingresos del Mes</p>
            <p className="text-3xl font-bold text-vital-slate">$2,450</p>
            <div className="flex items-center text-xs font-bold text-green-500 mt-2">
              <ArrowUpRight className="w-4 h-4 mr-1" /> +12% vs mes anterior
            </div>
          </div>
          <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center">
            <DollarSign className="w-8 h-8" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500 font-medium mb-1">Desglose de Sesiones</p>
            <div className="flex space-x-4 mt-2">
              <div>
                <p className="text-2xl font-bold text-vital-slate">32</p>
                <p className="text-xs text-slate-400 font-medium">B2B (Crédito)</p>
              </div>
              <div className="w-px h-8 bg-slate-200"></div>
              <div>
                <p className="text-2xl font-bold text-vital-slate">17</p>
                <p className="text-xs text-slate-400 font-medium">B2C (Privado)</p>
              </div>
            </div>
          </div>
          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
            <Users className="w-8 h-8" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500 font-medium mb-1">Calificación Promedio</p>
            <p className="text-3xl font-bold text-vital-slate">4.9/5</p>
            <p className="text-xs text-slate-400 font-medium mt-2">Basado en 124 reseñas</p>
          </div>
          <div className="w-14 h-14 bg-yellow-50 text-yellow-500 rounded-2xl flex items-center justify-center">
            <Star className="w-8 h-8 fill-yellow-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sala de Espera / Agenda del Día */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col h-full">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h2 className="text-xl font-bold text-vital-slate flex items-center">
              <Clock className="w-5 h-5 mr-2 text-vital-teal" /> Agenda de Hoy
            </h2>
            <span className="text-sm font-bold bg-vital-teal/10 text-vital-teal px-3 py-1 rounded-full">
              Martes, 6 de Mayo
            </span>
          </div>
          
          <div className="divide-y divide-slate-100 flex-1">
            {appointments.map((apt) => (
              <div key={apt.id} className={`p-6 transition-colors hover:bg-slate-50 ${apt.status === 'ready' ? 'bg-vital-teal/5 border-l-4 border-l-vital-teal' : ''}`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500 flex-shrink-0">
                      {apt.patient.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-bold text-vital-slate">{apt.patient}</h3>
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                          {apt.type}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 mt-1">Motivo: {apt.topic}</p>
                      <p className="text-sm font-bold text-vital-slate mt-1">{apt.time}</p>
                    </div>
                  </div>
                  
                  <div>
                    {apt.status === 'ready' ? (
                      <button className="w-full sm:w-auto bg-vital-orange text-white px-6 py-3 rounded-xl font-bold hover:bg-vital-orange/90 transition shadow-md flex items-center justify-center space-x-2 animate-pulse">
                        <Video className="w-5 h-5" />
                        <span>Entrar a Sala Virtual</span>
                      </button>
                    ) : (
                      <button className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-slate-400 border border-slate-200 cursor-not-allowed flex items-center justify-center space-x-2 bg-slate-50">
                        <Video className="w-5 h-5" />
                        <span>Sala Cerrada</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Módulo de Expediente Rápido */}
        <div className="bg-gradient-to-br from-vital-slate to-slate-800 p-8 rounded-3xl text-white shadow-lg relative overflow-hidden flex flex-col h-full">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
          
          <h3 className="text-xl font-bold mb-6 flex items-center relative z-10">
            <CheckCircle2 className="w-6 h-6 mr-2 text-vital-teal" />
            Acciones Rápidas
          </h3>

          <div className="space-y-4 flex-1 relative z-10">
            <button 
              onClick={() => setShowExpedientes(true)}
              className="w-full bg-white/10 hover:bg-white/20 p-4 rounded-2xl flex items-center transition border border-white/10 group"
            >
              <div className="w-10 h-10 bg-vital-teal/20 text-vital-teal rounded-xl flex items-center justify-center mr-4 group-hover:bg-vital-teal group-hover:text-white transition">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="font-bold text-sm">Gestionar Expedientes</p>
                <p className="text-xs text-slate-400">Ver notas clínicas de pacientes</p>
              </div>
            </button>

            <button 
              onClick={() => setShowDisponibilidad(true)}
              className="w-full bg-white/10 hover:bg-white/20 p-4 rounded-2xl flex items-center transition border border-white/10 group"
            >
              <div className="w-10 h-10 bg-vital-orange/20 text-vital-orange rounded-xl flex items-center justify-center mr-4 group-hover:bg-vital-orange group-hover:text-white transition">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="font-bold text-sm">Configurar Disponibilidad</p>
                <p className="text-xs text-slate-400">Bloquear horarios libres</p>
              </div>
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-center relative z-10">
            <p className="text-sm text-slate-300">Próximo corte de pagos B2B:</p>
            <p className="text-lg font-bold text-white mt-1">Viernes, 15 de Mayo</p>
          </div>
        </div>
      </div>

      {/* Modal de Expedientes */}
      <AnimatePresence>
        {showExpedientes && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-vital-slate/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-4xl bg-slate-50 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="bg-vital-teal p-6 text-white flex justify-between items-center">
                <h2 className="text-2xl font-bold flex items-center">
                  <FileText className="w-6 h-6 mr-3" />
                  Expedientes Clínicos
                </h2>
                <button onClick={() => setShowExpedientes(false)} className="p-2 hover:bg-white/20 rounded-full transition">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex flex-1 overflow-hidden">
                {/* Lista de pacientes */}
                <div className="w-1/3 bg-white border-r border-slate-200 flex flex-col">
                  <div className="p-4 border-b border-slate-200">
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                      <input type="text" placeholder="Buscar paciente..." className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-vital-teal focus:border-vital-teal" />
                    </div>
                  </div>
                  <div className="overflow-y-auto flex-1">
                    {['Carlos Rodríguez', 'María Gómez', 'Juan Pérez', 'Ana Solís'].map((name, idx) => (
                      <div key={idx} className={`p-4 border-b border-slate-100 cursor-pointer hover:bg-slate-50 transition ${idx === 0 ? 'bg-vital-teal/5 border-l-4 border-l-vital-teal' : ''}`}>
                        <p className="font-bold text-vital-slate">{name}</p>
                        <p className="text-xs text-slate-500">Última sesión: Hace 2 días</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Notas del paciente seleccionado */}
                <div className="w-2/3 p-6 overflow-y-auto bg-slate-50">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-vital-slate">Carlos Rodríguez</h3>
                      <p className="text-sm text-slate-500">Empresa: Acme Corp (B2B)</p>
                    </div>
                    <button className="text-vital-teal text-sm font-bold flex items-center hover:underline">
                      <Clock className="w-4 h-4 mr-1" /> Ver Historial
                    </button>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-6">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Notas de la Sesión Actual (Borrador)</label>
                    <textarea 
                      className="w-full h-32 p-3 border border-slate-200 rounded-lg resize-none focus:ring-vital-teal focus:border-vital-teal text-slate-600"
                      placeholder="Escribe las notas clínicas de la sesión aquí. Recuerda que esto es estrictamente confidencial..."
                      defaultValue="- El paciente reporta mejora en niveles de ansiedad.&#10;- Recomendada técnica de respiración 4-7-8 antes de reuniones."
                    ></textarea>
                    <div className="flex justify-end mt-4">
                      <button className="bg-vital-teal text-white px-4 py-2 rounded-lg font-bold flex items-center space-x-2 hover:bg-teal-700 transition">
                        <Save className="w-4 h-4" />
                        <span>Guardar en Expediente</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal de Disponibilidad */}
      <AnimatePresence>
        {showDisponibilidad && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-vital-slate/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="bg-vital-orange p-6 text-white flex justify-between items-center">
                <h2 className="text-2xl font-bold flex items-center">
                  <Calendar className="w-6 h-6 mr-3" />
                  Configurar Disponibilidad
                </h2>
                <button onClick={() => setShowDisponibilidad(false)} className="p-2 hover:bg-white/20 rounded-full transition">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-6 space-y-6">
                <p className="text-slate-600 text-sm">Bloquea los horarios en los que no podrás atender citas. Los pacientes no verán estos bloques disponibles en el directorio.</p>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Fecha</label>
                    <input type="date" className="w-full border border-slate-200 rounded-xl p-3 focus:ring-vital-orange focus:border-vital-orange bg-slate-50 text-slate-700" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Hora Inicio</label>
                      <input type="time" className="w-full border border-slate-200 rounded-xl p-3 focus:ring-vital-orange focus:border-vital-orange bg-slate-50 text-slate-700" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Hora Fin</label>
                      <input type="time" className="w-full border border-slate-200 rounded-xl p-3 focus:ring-vital-orange focus:border-vital-orange bg-slate-50 text-slate-700" />
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 text-orange-800 p-4 rounded-xl border border-orange-200 text-sm">
                  <span className="font-bold block mb-1">Sincronización Inteligente:</span>
                  Si conectas tu Google Calendar, los eventos que agregues allí se bloquearán automáticamente en nuestra plataforma.
                </div>

                <button 
                  onClick={() => setShowDisponibilidad(false)}
                  className="w-full bg-vital-slate text-white px-6 py-4 rounded-xl font-bold hover:bg-slate-800 transition shadow-md"
                >
                  Bloquear Horario
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
