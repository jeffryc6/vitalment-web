import React from 'react';
import Link from 'next/link';
import { Calendar, Video, Activity, Target } from 'lucide-react';
import TriageFlow from '@/components/dashboard/TriageFlow';

export default function ColaboradorDashboardPage() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <header className="mb-4">
        <h1 className="text-3xl font-bold text-vital-slate">Hola, ¿En qué podemos apoyarte hoy?</h1>
        <p className="text-slate-500 mt-2">Este es tu espacio seguro de bienestar. Todo lo que hagas aquí es confidencial.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Componente Interactivo de Triage */}
          <TriageFlow />

          {/* Especialistas Recientes / Favoritos */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-vital-slate">Tu Equipo de Bienestar</h2>
              <Link href="#" className="text-vital-teal text-sm font-semibold hover:underline">Ver directorio completo</Link>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-slate-100 transition">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                    <img src="https://i.pravatar.cc/150?u=dra" alt="Dra. Mendez" />
                  </div>
                  <div>
                    <h3 className="font-bold text-vital-slate">Dra. Ana Méndez</h3>
                    <p className="text-sm text-slate-500">Última sesión: Hace 2 semanas</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-vital-teal/10 text-vital-teal hover:bg-vital-teal hover:text-white transition-colors rounded-xl text-sm font-bold">
                  Agendar de nuevo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-vital-slate to-slate-800 p-8 rounded-3xl text-white shadow-lg relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <h3 className="font-bold mb-2 flex items-center space-x-2 text-lg">
              <Calendar className="w-5 h-5" />
              <span>Beneficios Corporativos</span>
            </h3>
            <p className="text-sm text-slate-300 mb-6">Cubierto por: <strong>Acme Corp</strong></p>
            
            <div className="flex justify-between items-end">
              <div>
                <p className="text-5xl font-bold font-display">3</p>
                <p className="text-xs text-slate-300 uppercase tracking-wider mt-1">Créditos Disponibles</p>
              </div>
              <div className="w-16 h-16 rounded-full border-4 border-vital-teal flex items-center justify-center bg-vital-slate">
                <span className="font-bold text-lg">3/5</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <button className="w-full bg-white/10 hover:bg-white/20 py-3 rounded-xl font-semibold text-sm transition">
                Ver historial de uso
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
