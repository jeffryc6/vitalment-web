import React from 'react';
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Sidebar provisional para navegación */}
      <aside className="w-full md:w-64 bg-vital-slate text-white flex flex-col">
        <div className="p-6">
          <h2 className="text-2xl font-bold font-display text-white">VitalMente</h2>
          <p className="text-vital-teal text-sm">Corporate Dashboard</p>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          {/* Estos links son de prueba, luego se mostrarán condicionalmente según el rol */}
          <Link href="/hr" className="block px-4 py-2 rounded-lg hover:bg-white/10 transition">
            Panel HR (B2B)
          </Link>
          <Link href="/colaborador" className="block px-4 py-2 rounded-lg hover:bg-white/10 transition">
            Mi Bienestar (Colaborador)
          </Link>
          <Link href="/directorio" className="block px-4 py-2 rounded-lg hover:bg-white/10 transition">
            Directorio VitalMente
          </Link>
          <Link href="/profesional" className="block px-4 py-2 rounded-lg hover:bg-white/10 transition">
            Portal Profesional
          </Link>
        </nav>
        <div className="p-4 border-t border-white/10">
          <Link href="/" className="block text-center px-4 py-2 bg-vital-orange rounded-lg text-sm font-bold">
            Salir
          </Link>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-6 md:p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
