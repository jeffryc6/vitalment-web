'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, ShoppingBag, Package, MapPin, Phone } from 'lucide-react';

const OrderForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    productos: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <section id="pedido" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-teal-50 border border-teal-100 p-12 rounded-3xl text-center shadow-xl"
          >
            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <CheckCircle2 className="w-10 h-10 text-teal-600" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900 mb-4 font-display">¡Pedido Recibido!</h2>
            <p className="text-teal-700 text-lg mb-8">
              Gracias por confiar en VitalMente y Earth's Creation. Nos pondremos en contacto contigo pronto para coordinar el pago y la entrega.
            </p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="bg-vital-teal text-white px-8 py-3 rounded-xl font-bold hover:bg-teal-800 transition-all"
            >
              Hacer otro pedido
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="pedido" className="py-24 bg-vital-slate relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-vital-teal/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-vital-orange/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-vital-orange font-bold tracking-widest uppercase text-sm"
            >
              Compra Directa
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold font-display text-white mt-4 mb-6 leading-tight"
            >
              Haz tu Pedido de <span className="text-vital-teal">Earth's Creation</span>
            </motion.h2>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
              Recibe tus suplementos directamente en casa. Completa el formulario con los productos que deseas y coordinaremos la entrega de inmediato para que no detengas tu transformación.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Package, title: "Envío Seguro", desc: "Entrega rápida y garantizada." },
                { icon: MapPin, title: "Cobertura Nacional", desc: "Llegamos a donde estés." },
                { icon: Phone, title: "Atención Personalizada", desc: "Resolvimos tus dudas por WhatsApp." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <item.icon className="w-6 h-6 text-vital-orange" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-vital-slate mb-2">Nombre Completo</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Juan Pérez"
                      className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-vital-teal focus:border-transparent transition-all outline-none"
                      value={formData.nombre}
                      onChange={e => setFormData({...formData, nombre: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-vital-slate mb-2">Teléfono de Contacto</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+506 8888-8888"
                      className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-vital-teal focus:border-transparent transition-all outline-none"
                      value={formData.telefono}
                      onChange={e => setFormData({...formData, telefono: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-vital-slate mb-2">Correo Electrónico</label>
                  <input 
                    type="email" 
                    required
                    placeholder="juan@ejemplo.com"
                    className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-vital-teal focus:border-transparent transition-all outline-none"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-vital-slate mb-2">Dirección de Entrega</label>
                  <textarea 
                    required
                    rows={2}
                    placeholder="Calle, ciudad, provincia..."
                    className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-vital-teal focus:border-transparent transition-all outline-none resize-none"
                    value={formData.direccion}
                    onChange={e => setFormData({...formData, direccion: e.target.value})}
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-bold text-vital-slate mb-2">Productos de Interés</label>
                  <textarea 
                    required
                    rows={3}
                    placeholder="Ej: 2x Multivitamínico, 1x Omega 3-6-9..."
                    className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-vital-teal focus:border-transparent transition-all outline-none resize-none"
                    value={formData.productos}
                    onChange={e => setFormData({...formData, productos: e.target.value})}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-vital-orange hover:bg-vital-orange/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-vital-orange/20 transition-all flex items-center justify-center space-x-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5" />
                      <span>Hacer Pedido</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
