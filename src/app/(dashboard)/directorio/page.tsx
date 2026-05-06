import React from 'react';
import { Search, Filter, Star, Clock, Video, User } from 'lucide-react';
import Link from 'next/link';

export default function DirectorioPage() {
  const profesionales = [
    {
      name: "Dra. Ana Méndez",
      specialty: "Psicología Clínica",
      focus: "Ansiedad, Burnout, Terapia Cognitiva",
      rating: 4.9,
      reviews: 124,
      image: "https://i.pravatar.cc/150?u=dra",
      nextAvailable: "Hoy, 4:00 PM",
      price: "$50",
      isB2bEligible: true,
    },
    {
      name: "Carlos Vargas",
      specialty: "Coach Motivacional",
      focus: "Liderazgo, Gestión de Tiempo, Hábitos",
      rating: 4.8,
      reviews: 89,
      image: "https://i.pravatar.cc/150?u=car",
      nextAvailable: "Mañana, 9:00 AM",
      price: "$40",
      isB2bEligible: true,
    },
    {
      name: "Lic. Marta Rojas",
      specialty: "Nutricionista",
      focus: "Nutrición Deportiva, Energía, Dietas",
      rating: 5.0,
      reviews: 210,
      image: "https://i.pravatar.cc/150?u=mar",
      nextAvailable: "Hoy, 6:30 PM",
      price: "$45",
      isB2bEligible: true,
    },
    {
      name: "Dr. Luis Segura",
      specialty: "Médico General",
      focus: "Medicina Preventiva, Chequeos",
      rating: 4.7,
      reviews: 56,
      image: "https://i.pravatar.cc/150?u=lui",
      nextAvailable: "Viernes, 10:00 AM",
      price: "$60",
      isB2bEligible: false,
    }
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <header className="mb-4">
        <h1 className="text-3xl font-bold text-vital-slate">Directorio de Especialistas</h1>
        <p className="text-slate-500 mt-2">Encuentra al profesional ideal para acompañarte en tu proceso.</p>
      </header>

      {/* Buscador y Filtros */}
      <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-3xl shadow-sm border border-slate-100">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input 
            type="text" 
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:border-vital-teal focus:ring-vital-teal transition" 
            placeholder="Buscar por nombre, especialidad o enfoque..." 
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
          <select className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium text-slate-700 outline-none focus:border-vital-teal cursor-pointer">
            <option value="">Especialidad</option>
            <option value="psicologia">Psicología</option>
            <option value="nutricion">Nutrición</option>
            <option value="coaching">Coaching</option>
          </select>
          <select className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium text-slate-700 outline-none focus:border-vital-teal cursor-pointer">
            <option value="">Disponibilidad</option>
            <option value="hoy">Hoy</option>
            <option value="manana">Mañana</option>
            <option value="semana">Esta semana</option>
          </select>
          <button className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium text-slate-700 hover:bg-slate-100 transition flex items-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>Más filtros</span>
          </button>
        </div>
      </div>

      {/* Grid de Resultados */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profesionales.map((prof, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img src={prof.image} alt={prof.name} className="w-16 h-16 rounded-2xl object-cover" />
                  <div className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full shadow-sm">
                    <Video className="w-4 h-4 text-vital-teal" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-vital-slate text-lg">{prof.name}</h3>
                  <p className="text-vital-teal font-medium text-sm">{prof.specialty}</p>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-sm text-slate-600 line-clamp-2">{prof.focus}</p>
            </div>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center text-sm font-bold text-vital-slate">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                {prof.rating} <span className="text-slate-400 font-normal ml-1">({prof.reviews})</span>
              </div>
              <div className="flex items-center text-sm text-slate-500 font-medium">
                <Clock className="w-4 h-4 mr-1 text-slate-400" />
                {prof.nextAvailable}
              </div>
            </div>

            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                {prof.isB2bEligible ? (
                  <span className="text-xs font-bold bg-vital-teal/10 text-vital-teal px-2 py-1 rounded-md uppercase tracking-wider">Aplica Crédito</span>
                ) : (
                  <span className="text-sm font-bold text-vital-slate">{prof.price} / sesión</span>
                )}
              </div>
              <Link href="#" className="bg-vital-slate text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-slate-800 transition shadow-sm group-hover:bg-vital-teal">
                Ver Perfil
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
