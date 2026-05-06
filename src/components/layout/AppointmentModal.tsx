import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar as CalendarIcon, User, Clock, CreditCard, ShieldCheck, ArrowRight } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 'datetime' | 'context' | 'checkout' | 'success';

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<Step>('datetime');
  const [isB2bUser, setIsB2bUser] = useState(true); // Mock para el demo: true = B2B (crédito), false = B2C (tarjeta)
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [context, setContext] = useState('');

  const handleNext = () => {
    if (step === 'datetime') setStep('context');
    else if (step === 'context') setStep('checkout');
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('success');
      setTimeout(() => {
        onClose();
        setStep('datetime'); // Reset
      }, 3000);
    }, 1500);
  };

  const availableTimes = ['09:00 AM', '10:30 AM', '02:00 PM', '04:00 PM', '05:30 PM'];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-vital-slate/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="bg-vital-teal p-6 text-white relative flex-shrink-0">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-3 bg-white/20 rounded-xl">
                  <CalendarIcon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold font-display">
                  {step === 'datetime' ? 'Selecciona Fecha y Hora' : 
                   step === 'context' ? 'Contexto de la Sesión' : 
                   step === 'checkout' ? 'Confirmación y Checkout' : '¡Cita Confirmada!'}
                </h2>
              </div>
              
              {/* Stepper Visual */}
              {step !== 'success' && (
                <div className="flex items-center space-x-2 mt-4">
                  <div className={`h-1 flex-1 rounded-full ${step === 'datetime' ? 'bg-white' : 'bg-white/40'}`}></div>
                  <div className={`h-1 flex-1 rounded-full ${step === 'context' ? 'bg-white' : step === 'checkout' ? 'bg-white/40' : 'bg-white/20'}`}></div>
                  <div className={`h-1 flex-1 rounded-full ${step === 'checkout' ? 'bg-white' : 'bg-white/20'}`}></div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto">
              
              {/* PASO 1: FECHA Y HORA */}
              {step === 'datetime' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-vital-slate mb-2">Fecha Preferida</label>
                    <input 
                      type="date" 
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-vital-teal focus:border-vital-teal text-slate-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-vital-slate mb-2">Horarios Disponibles</label>
                    <div className="grid grid-cols-2 gap-3">
                      {availableTimes.map((t, idx) => (
                        <button 
                          key={idx}
                          onClick={() => setTime(t)}
                          className={`py-3 px-4 rounded-xl text-sm font-bold border transition-colors ${
                            time === t 
                              ? 'bg-vital-teal text-white border-vital-teal' 
                              : 'bg-white text-slate-600 border-slate-200 hover:border-vital-teal'
                          }`}
                        >
                          <Clock className="w-4 h-4 inline-block mr-2 mb-0.5" />
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={handleNext}
                    disabled={!date || !time}
                    className="w-full mt-6 bg-vital-orange text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-vital-orange/90 disabled:opacity-50"
                  >
                    <span>Continuar</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}

              {/* PASO 2: CONTEXTO */}
              {step === 'context' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-vital-slate mb-2">¿De qué te gustaría hablar en esta sesión?</label>
                    <p className="text-xs text-slate-500 mb-3">Este formulario es estrictamente confidencial y solo lo leerá tu especialista para preparar tu sesión.</p>
                    <textarea 
                      rows={5}
                      value={context}
                      onChange={(e) => setContext(e.target.value)}
                      placeholder="Ej: He tenido mucha ansiedad en el trabajo últimamente..."
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-vital-teal focus:border-vital-teal text-slate-700 resize-none"
                    />
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => setStep('datetime')}
                      className="w-1/3 py-4 rounded-xl font-bold border border-slate-200 text-slate-600 hover:bg-slate-50"
                    >
                      Atrás
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={!context}
                      className="w-2/3 bg-vital-orange text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-vital-orange/90 disabled:opacity-50"
                    >
                      <span>Ir al Checkout</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}

              {/* PASO 3: CHECKOUT INTELIGENTE */}
              {step === 'checkout' && (
                <form onSubmit={handleCheckout} className="space-y-6">
                  {/* Resumen */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <h3 className="font-bold text-vital-slate mb-2">Resumen de Cita</h3>
                    <p className="text-sm text-slate-600"><CalendarIcon className="inline w-4 h-4 mr-1" /> {date} a las {time}</p>
                    <p className="text-sm text-slate-600 mt-1"><User className="inline w-4 h-4 mr-1" /> Especialista asignado: Dra. Ana Méndez</p>
                  </div>

                  {/* Toggle para probar B2B vs B2C en Demo */}
                  <div className="flex items-center justify-between p-3 border border-dashed border-slate-300 rounded-lg bg-white">
                    <span className="text-xs text-slate-500 font-medium">Modo Demo: Alternar tipo de pago</span>
                    <button 
                      type="button" 
                      onClick={() => setIsB2bUser(!isB2bUser)}
                      className="text-xs bg-slate-200 px-3 py-1 rounded font-bold text-slate-700"
                    >
                      {isB2bUser ? 'Cambiar a B2C (Tarjeta)' : 'Cambiar a B2B (Crédito)'}
                    </button>
                  </div>

                  {/* Lógica de Pago Condicional */}
                  {isB2bUser ? (
                    <div className="bg-green-50 border border-green-200 p-4 rounded-xl flex items-start space-x-3">
                      <ShieldCheck className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-green-800">Cubierto por tu Empresa</h4>
                        <p className="text-sm text-green-700 mt-1">Se descontará <strong>1 crédito</strong> corporativo de tu saldo. Costo para ti: $0.00.</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-vital-slate font-bold">
                        <span>Total a pagar:</span>
                        <span className="text-xl">$50.00</span>
                      </div>
                      <div className="bg-white border border-slate-200 p-4 rounded-xl relative">
                        <CreditCard className="absolute top-4 right-4 w-5 h-5 text-slate-400" />
                        <label className="block text-xs font-bold text-slate-500 mb-1">Número de Tarjeta (Stripe Mock)</label>
                        <input type="text" placeholder="**** **** **** 4242" className="w-full border-none focus:ring-0 p-0 text-slate-700 font-medium" required={!isB2bUser} />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white border border-slate-200 p-3 rounded-xl">
                          <label className="block text-xs font-bold text-slate-500 mb-1">Vencimiento</label>
                          <input type="text" placeholder="MM/AA" className="w-full border-none focus:ring-0 p-0 text-slate-700" required={!isB2bUser} />
                        </div>
                        <div className="bg-white border border-slate-200 p-3 rounded-xl">
                          <label className="block text-xs font-bold text-slate-500 mb-1">CVC</label>
                          <input type="text" placeholder="123" className="w-full border-none focus:ring-0 p-0 text-slate-700" required={!isB2bUser} />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex space-x-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep('context')}
                      className="w-1/3 py-4 rounded-xl font-bold border border-slate-200 text-slate-600 hover:bg-slate-50"
                    >
                      Atrás
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-2/3 bg-vital-orange text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-vital-orange/90 disabled:opacity-50 transition-all"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <span>{isB2bUser ? 'Confirmar Cita' : 'Pagar y Agendar'}</span>
                      )}
                    </button>
                  </div>
                  <p className="text-[10px] text-center text-slate-400 mt-4">
                    Al confirmar esta cita, aceptas nuestros <a href="/legal/terminos" target="_blank" className="text-vital-teal hover:underline">Términos y Condiciones</a> de salud y privacidad.
                  </p>
                </form>
              )}

              {/* PASO 4: ÉXITO */}
              {step === 'success' && (
                <div className="py-10 text-center flex flex-col items-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6"
                  >
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-vital-slate mb-2">¡Todo listo!</h3>
                  <p className="text-slate-500 mb-6">Tu cita ha sido confirmada y te hemos enviado un correo con el enlace a la videollamada.</p>
                  <p className="text-sm font-bold text-vital-teal cursor-pointer hover:underline" onClick={onClose}>Ir al Dashboard</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AppointmentModal;
