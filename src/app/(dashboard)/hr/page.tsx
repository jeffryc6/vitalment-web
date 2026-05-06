'use client';

import React, { useState } from 'react';
import { Users, TrendingUp, HeartPulse, Brain, AlertTriangle, Plus, Search, ShoppingCart, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HrDashboardPage() {
  const [credits, setCredits] = useState(150);
  const [showPurchaseSuccess, setShowPurchaseSuccess] = useState(false);

  const handleBuyCredits = () => {
    // Simular proceso de compra
    setCredits(prev => prev + 50);
    setShowPurchaseSuccess(true);
    setTimeout(() => setShowPurchaseSuccess(false), 3000);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <header className="mb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-vital-slate">Panel de Recursos Humanos</h1>
          <p className="text-slate-500 mt-2">Métricas consolidadas y anónimas del bienestar de tu equipo en Acme Corp.</p>
        </div>
        <AnimatePresence>
          {showPurchaseSuccess && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-green-100 text-green-700 px-4 py-2 rounded-xl flex items-center shadow-sm border border-green-200"
            >
              <CheckCircle2 className="w-5 h-5 mr-2" />
              <span className="font-bold text-sm">¡Recarga de 50 créditos exitosa!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Tarjetas de Métricas Rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center space-x-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Planilla Activa</p>
            <p className="text-2xl font-bold text-vital-slate">142</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center space-x-4">
          <div className="p-3 bg-vital-teal/10 text-vital-teal rounded-2xl">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Índice de Adopción</p>
            <p className="text-2xl font-bold text-vital-slate">68%</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center space-x-4">
          <div className="p-3 bg-orange-50 text-vital-orange rounded-2xl">
            <Brain className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Sesiones (Mes)</p>
            <p className="text-2xl font-bold text-vital-slate">34</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-vital-teal to-teal-700 p-6 rounded-3xl shadow-md text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-teal-100 font-medium">Créditos Restantes</p>
              <motion.p 
                key={credits}
                initial={{ scale: 1.2, color: '#fff' }}
                animate={{ scale: 1, color: '#fff' }}
                className="text-4xl font-bold mt-1"
              >
                {credits}
              </motion.p>
            </div>
            <div className="p-3 bg-white/20 rounded-2xl">
              <HeartPulse className="w-6 h-6" />
            </div>
          </div>
          <button 
            onClick={handleBuyCredits}
            className="w-full bg-white/10 hover:bg-white/20 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 border border-white/20"
          >
            <ShoppingCart className="w-3 h-3" />
            <span>Recargar Créditos</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Gráfico: Termómetro de Clima Organizacional */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-xl font-bold text-vital-slate">Mapa de Calor (Burnout)</h2>
              <p className="text-sm text-slate-500">Niveles de estrés reportados por departamento (Anónimo)</p>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span className="flex items-center"><span className="w-3 h-3 rounded-full bg-red-400 mr-1"></span> Crítico</span>
              <span className="flex items-center ml-2"><span className="w-3 h-3 rounded-full bg-yellow-400 mr-1"></span> Alerta</span>
              <span className="flex items-center ml-2"><span className="w-3 h-3 rounded-full bg-green-400 mr-1"></span> Óptimo</span>
            </div>
          </div>
          
          <div className="space-y-6">
            {[
              { dept: "Ventas", stress: 85, color: "bg-red-400" },
              { dept: "Atención al Cliente", stress: 70, color: "bg-yellow-400" },
              { dept: "Tecnología", stress: 45, color: "bg-green-400" },
              { dept: "Recursos Humanos", stress: 30, color: "bg-green-400" },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-sm mb-1 font-medium">
                  <span className="text-vital-slate">{item.dept}</span>
                  <span className="text-slate-500">{item.stress}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3">
                  <div className={`${item.color} h-3 rounded-full transition-all duration-1000`} style={{ width: `${item.stress}%` }}></div>
                </div>
                {item.stress > 80 && (
                  <p className="text-xs text-red-500 mt-1 flex items-center">
                    <AlertTriangle className="w-3 h-3 mr-1" /> Riesgo alto de rotación en este departamento.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Gestión de Planilla */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col h-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-vital-slate">Gestión de Planilla</h2>
            <button className="p-2 bg-vital-orange/10 text-vital-orange rounded-xl hover:bg-vital-orange hover:text-white transition-colors">
              <Plus className="w-5 h-5" />
            </button>
          </div>
          
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </div>
            <input type="text" className="w-full pl-10 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-vital-teal focus:ring-vital-teal" placeholder="Buscar empleado..." />
          </div>

          <div className="flex-1 overflow-y-auto space-y-3">
            {[
              { name: "Carlos Rodríguez", email: "c.rodriguez@acme.com", status: "Activo" },
              { name: "Lucía Fernández", email: "l.fernandez@acme.com", status: "Invitado" },
              { name: "Andrés Gómez", email: "a.gomez@acme.com", status: "Activo" },
              { name: "María Soto", email: "m.soto@acme.com", status: "Inactivo" },
            ].map((emp, idx) => (
              <div key={idx} className="flex justify-between items-center p-3 border border-slate-100 rounded-xl hover:border-vital-teal/30 transition-colors">
                <div>
                  <p className="font-semibold text-vital-slate text-sm">{emp.name}</p>
                  <p className="text-xs text-slate-400">{emp.email}</p>
                </div>
                <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded-md ${
                  emp.status === 'Activo' ? 'bg-green-100 text-green-700' :
                  emp.status === 'Invitado' ? 'bg-blue-100 text-blue-700' :
                  'bg-slate-100 text-slate-500'
                }`}>
                  {emp.status}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-4 border-t border-slate-100">
            <button className="w-full text-center text-sm font-semibold text-vital-teal hover:text-vital-orange transition-colors">
              Ver todos los empleados
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
