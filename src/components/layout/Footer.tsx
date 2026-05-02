import React from 'react';
import Link from 'next/link';
import { Heart, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-vital-teal p-1.5 rounded-lg">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-vital-slate tracking-tight">
                Vital<span className="text-vital-orange">Mente</span>
              </span>
            </Link>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Transformación integral de mente, cuerpo y espíritu. Redescubre tu vitalidad con nosotros.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-vital-teal hover:text-white transition-all shadow-sm">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-vital-slate font-bold mb-6">Explorar</h4>
            <ul className="space-y-4">
              {['Inicio', 'Historias de Éxito', 'Metodología', 'Blog de Salud', 'Preguntas Frecuentes'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-500 hover:text-vital-teal transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-vital-slate font-bold mb-6">Especialidades</h4>
            <ul className="space-y-4">
              {['Nutrición Clínica', 'Salud Mental', 'Metabolismo', 'Fitness Integral', 'Meditación'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-500 hover:text-vital-teal transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-vital-slate font-bold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-slate-500">
                <MapPin className="w-5 h-5 text-vital-teal shrink-0" />
                <span>San José, Costa Rica</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-500">
                <Phone className="w-5 h-5 text-vital-teal shrink-0" />
                <span>+506 8888-8888</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-500">
                <Mail className="w-5 h-5 text-vital-teal shrink-0" />
                <span>contacto@vitalmente.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} VitalMente. Todos los derechos reservados.</p>
          <div className="flex space-x-8">
            <Link href="#" className="hover:text-vital-teal">Privacidad</Link>
            <Link href="#" className="hover:text-vital-teal">Términos</Link>
            <Link href="#" className="hover:text-vital-teal">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
