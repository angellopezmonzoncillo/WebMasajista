import { Link } from 'react-router-dom'

const benefits = [
  {
    icon: 'psychology',
    title: 'Reducción del Estrés',
    description:
      'Reduce los niveles de cortisol y promueve una profunda sensación de relajación y claridad mental. Las sesiones regulares ayudan a mantener una respuesta equilibrada del sistema nervioso ante los factores de estrés diarios.',
  },
  {
    icon: 'fitness_center',
    title: 'Alivio del Dolor',
    description:
      'Alivia la tensión muscular, el dolor articular y reduce las molestias de condiciones crónicas. Técnicas dirigidas abordan puntos gatillo y liberan vías nerviosas atrapadas.',
  },
  {
    icon: 'ecg',
    title: 'Mejor Circulación',
    description:
      'Estimula la circulación sanguínea y el drenaje linfático, ayudando a una recuperación corporal más rápida. El flujo sanguíneo mejorado aporta más oxígeno y nutrientes a los tejidos.',
  },
  {
    icon: 'bedtime',
    title: 'Mejor Descanso',
    description:
      'Calma el sistema nervioso, ayudándote a conciliar el sueño más rápido y lograr un descanso más profundo. Estudios demuestran que el masaje puede aumentar la serotonina, precursora de la melatonina.',
  },
  {
    icon: 'self_improvement',
    title: 'Flexibilidad y Movilidad',
    description:
      'Afloja los músculos tensos y mejora el rango de movimiento, manteniendo tu cuerpo flexible y reduciendo el riesgo de lesiones en actividades diarias y ejercicio.',
  },
  {
    icon: 'favorite',
    title: 'Apoyo Inmunológico',
    description:
      'El masaje regular estimula el sistema linfático, ayudando a tu cuerpo a eliminar toxinas de forma natural y fortaleciendo tu respuesta inmunológica.',
  },
  {
    icon: 'mood',
    title: 'Salud Mental',
    description:
      'Reduce los síntomas de ansiedad y depresión al promover la liberación de endorfinas y crear un entorno seguro y reconfortante para la relajación.',
  },
  {
    icon: 'speed',
    title: 'Recuperación Rápida',
    description:
      'Acelera la recuperación de entrenamientos, lesiones y cirugías al reducir la inflamación y promover la reparación de tejidos a nivel celular.',
  },
]

export default function BenefitsPage() {
  return (
    <main>
      {/* Header */}
      <section className="px-6 py-20 lg:px-20 bg-cream dark:bg-background-dark/50">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-primary font-bold uppercase tracking-widest text-xs">
            Por Qué la Terapia de Masaje
          </span>
          <h2 className="text-3xl lg:text-5xl font-black mt-2 mb-6 dark:text-white">
            Beneficios del Masaje Regular
          </h2>
          <p className="text-sage max-w-2xl mx-auto text-lg">
            Invertir en tu cuerpo hoy previene complicaciones mañana. Descubre cómo la
            terapia profesional puede transformar tu vida diaria.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="px-6 py-20 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-cream dark:bg-background-dark p-8 rounded-xl border border-sage/10 text-center flex flex-col items-center hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">{benefit.icon}</span>
              </div>
              <h3 className="font-bold mb-3 dark:text-white">{benefit.title}</h3>
              <p className="text-sm text-sage dark:text-sage/80">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-20 lg:px-20 bg-background-light dark:bg-background-dark">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-black text-primary mb-2">92%</p>
            <p className="text-sm text-sage dark:text-sage/80">Clientes reportan menos dolor después de 3 sesiones</p>
          </div>
          <div>
            <p className="text-4xl font-black text-primary mb-2">78%</p>
            <p className="text-sm text-sage dark:text-sage/80">Mejora en la calidad del sueño</p>
          </div>
          <div>
            <p className="text-4xl font-black text-primary mb-2">85%</p>
            <p className="text-sm text-sage dark:text-sage/80">Reducción en los niveles de estrés</p>
          </div>
          <div>
            <p className="text-4xl font-black text-primary mb-2">500+</p>
            <p className="text-sm text-sage dark:text-sage/80">Clientes satisfechos atendidos anualmente</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 lg:px-20">
        <div className="max-w-7xl mx-auto bg-primary rounded-3xl p-8 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-3xl lg:text-5xl font-black text-[#0e1b13] mb-6 leading-tight">
              Experimenta la diferencia tú mismo
            </h2>
            <p className="text-[#0e1b13]/80 text-lg">
              Tu cuerpo te lo agradecerá. Reserva tu primera sesión y siente la transformación.
            </p>
          </div>
          <Link
            to="/services"
            className="bg-[#0e1b13] text-white px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl text-center"
          >
            Reserva Tu Cita
          </Link>
        </div>
      </section>
    </main>
  )
}
