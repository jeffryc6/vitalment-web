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
              <img 
                src="/logo.png" 
                alt="VitalMente Logo" 
                className="h-10 w-auto object-contain"
              />
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
            <h4 className="text-vital-slate font-bold mb-6">Compañía</h4>
            <ul className="space-y-4">
              <li><Link href="/nosotros" className="text-slate-500 hover:text-vital-teal transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="/#personal" className="text-slate-500 hover:text-vital-teal transition-colors">Terapia Individual</Link></li>
              <li><Link href="/#corporate" className="text-slate-500 hover:text-vital-teal transition-colors">Para Empresas</Link></li>
              <li><Link href="/app-movil" className="text-slate-500 hover:text-vital-teal transition-colors">App Móvil</Link></li>
              <li><Link href="/productos" className="text-slate-500 hover:text-vital-teal transition-colors">Suplementos</Link></li>
              <li><Link href="/#historias" className="text-slate-500 hover:text-vital-teal transition-colors">Historias de Éxito</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-vital-slate font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/legal/terminos" className="text-slate-500 hover:text-vital-teal transition-colors">Términos de Uso</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-vital-teal transition-colors">Privacidad</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-vital-teal transition-colors">Envíos</Link></li>
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
