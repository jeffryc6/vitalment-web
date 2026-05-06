import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-vital-slate mb-8">Términos y Condiciones de Uso</h1>
        <p className="text-slate-500 mb-8 italic">Última actualización: 6 de mayo de 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-bold text-vital-slate mb-4">1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar la plataforma VitalMente, usted acepta cumplir y estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no podrá utilizar nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-vital-slate mb-4">2. Descripción del Servicio</h2>
            <p>
              VitalMente es una plataforma tecnológica que facilita la conexión entre profesionales de la salud (especialistas) y usuarios finales, ya sea de forma individual (B2C) o a través de programas corporativos (B2B). VitalMente no presta servicios médicos directos; actúa como un intermediario tecnológico.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-vital-slate mb-4">3. Registro de Cuenta</h2>
            <p>
              Para utilizar ciertas funciones, debe registrarse y crear una cuenta. Usted es responsable de mantener la confidencialidad de su contraseña y de todas las actividades que ocurran bajo su cuenta. Se compromete a proporcionar información veraz, exacta y completa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-vital-slate mb-4">4. Privacidad y Datos Médicos</h2>
            <p>
              La privacidad es nuestra prioridad. Las notas clínicas y la información compartida durante las sesiones de terapia o coaching son estrictamente confidenciales entre el profesional y el usuario. En el caso de cuentas corporativas, el empleador tendrá acceso a métricas agregadas y anónimas, pero nunca a la información personal o médica individual del colaborador.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-vital-slate mb-4">5. Pagos y Cancelaciones</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Usuarios B2C:</strong> Los pagos se realizan al momento de agendar la cita a través de nuestras pasarelas de pago integradas.</li>
              <li><strong>Usuarios B2B:</strong> Las sesiones se cubren mediante el saldo de créditos de bienestar de su empresa.</li>
              <li><strong>Cancelaciones:</strong> Las citas deben cancelarse con al menos 24 horas de antelación para ser elegibles para un reembolso o devolución del crédito.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-vital-slate mb-4">6. Propiedad Intelectual</h2>
            <p>
              Todo el contenido, marcas registradas, logotipos y software de la plataforma son propiedad de VitalMente o sus licenciantes y están protegidos por leyes de propiedad intelectual.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-vital-slate mb-4">7. Limitación de Responsabilidad</h2>
            <p>
              VitalMente no se hace responsable de las opiniones, diagnósticos o tratamientos proporcionados por los profesionales independientes que utilizan la plataforma. El uso de la plataforma es bajo su propio riesgo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-vital-slate mb-4">8. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento. El uso continuado de la plataforma después de dichas modificaciones constituirá su aceptación de los nuevos términos.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
