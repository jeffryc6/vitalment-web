import React from 'react';
import Link from 'next/link';
import { login } from '../actions';
import { ArrowLeft, Mail, Lock } from 'lucide-react';

export default function LoginPage({
  searchParams,
}: {
  searchParams: { message: string }
}) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center mb-6">
          <Link href="/" className="inline-flex items-center text-slate-500 hover:text-vital-orange transition">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>
        </div>
        <h2 className="text-center text-3xl font-extrabold font-display text-vital-slate">
          Inicia Sesión en VitalMente
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          ¿No tienes cuenta?{' '}
          <Link href="/auth/registro" className="font-medium text-vital-teal hover:text-vital-orange transition">
            Regístrate aquí
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl sm:rounded-3xl sm:px-10 border border-slate-100">
          <form className="space-y-6" action={login}>
            {searchParams?.message && (
              <div className="p-4 rounded-xl bg-red-50 text-red-600 text-sm text-center font-medium">
                {searchParams.message}
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Correo Electrónico
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  name="email"
                  type="email"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-vital-teal focus:border-vital-teal sm:text-sm bg-slate-50"
                  placeholder="ejemplo@empresa.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  name="password"
                  type="password"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-vital-teal focus:border-vital-teal sm:text-sm bg-slate-50"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-vital-teal focus:ring-vital-teal border-slate-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-900">
                  Recordarme
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-vital-teal hover:text-vital-orange transition">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-md text-sm font-bold text-white bg-vital-teal hover:bg-vital-teal/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vital-teal transition"
              >
                Ingresar a mi Portal
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center text-xs text-slate-400">
            VitalMente Corporate EAP
          </div>
        </div>
      </div>
    </div>
  );
}
