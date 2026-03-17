import { Link } from 'react-router-dom'

const certifications = [
  { label: 'Certificada LMT' },
  { label: 'Miembro NCBTMB' },
  { label: 'Terapia Neuromuscular' },
  { label: 'Liberación Miofascial' },
]

const timeline = [
  {
    year: '2012',
    title: 'Terapeuta de Masaje Licenciada',
    description: 'Graduada con honores de la Escuela de Masaje y Trabajo Corporal de San Francisco.',
  },
  {
    year: '2015',
    title: 'Certificación Clínica Avanzada',
    description:
      'Completó formación avanzada en terapia neuromuscular y rehabilitación deportiva.',
  },
  {
    year: '2018',
    title: 'Apertura de Serenity Wellness',
    description:
      'Fundó la práctica con la misión de proporcionar atención personalizada y holística a cada cliente.',
  },
  {
    year: '2023',
    title: 'Especialista en Liberación Miofascial',
    description:
      'Obtuvo certificación especializada en el enfoque de Liberación Miofascial de John F. Barnes.',
  },
]

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="px-6 py-20 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9x2T-8GcW9yawsla-2B_gieUxhGlr6WYBGhneEcTnenaeWUhaAWYz2fI_NWj7tUpdf9avKWsO2WHnd-ryvvw2jqhk5uruNBaj1tTIJWajHuxPI7IEmAMKo5Vp8cH_Gg2kEm1bIfVZ1DEGvI9fRnH4-g2VxA3TDXmE-bsV3EtkB71V83aC4qHbjw6DkZ5yshc1RC4ylX2PYRa6IBBHT4MMcytw4UGS3nGuZbmRRoCxxvSSLobtdI33kcAwcWyPdPtYNC9LZ7sR57M")',
                }}
                role="img"
                aria-label="Portrait of professional massage therapist smiling"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-xl shadow-xl hidden md:block">
              <p className="text-3xl font-black">12+</p>
              <p className="text-sm font-bold uppercase tracking-tight">Años de Experiencia</p>
            </div>
          </div>

          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-xs">
              Sobre Mí
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-6 dark:text-white">
              Conoce a Tu Terapeuta, Elena
            </h2>
            <p className="text-lg text-sage dark:text-sage/90 mb-6 leading-relaxed">
              Con más de una década de práctica en salud holística, creo que el trabajo corporal es un
              componente vital de un estilo de vida saludable. Mi enfoque combina el conocimiento técnico de
              la anatomía con un toque intuitivo.
            </p>
            <p className="text-sage dark:text-sage/80 mb-8">
              Me especializo en masaje terapéutico clínico, enfocado en la recuperación de lesiones y el dolor
              crónico. Estoy certificada en Terapia Neuromuscular y Liberación Miofascial, asegurando que
              cada sesión se adapte a la historia única de tu cuerpo.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {certifications.map((cert) => (
                <div key={cert.label} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  <span className="font-medium dark:text-gray-200">{cert.label}</span>
                </div>
              ))}
            </div>

            <Link
              to="/services"
              className="bg-primary text-[#0e1b13] px-8 py-3 rounded-lg font-bold hover:scale-105 transition-transform inline-block"
            >
              Reservar una Sesión
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 py-20 lg:px-20 bg-cream dark:bg-background-dark/50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary font-bold uppercase tracking-widest text-xs">
            Mi Filosofía
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-8 dark:text-white">
            Sanación a Través del Tacto Intencional
          </h2>
          <p className="text-lg text-sage dark:text-sage/90 leading-relaxed mb-6">
            Creo que el masaje no es solo un lujo — es una necesidad de la vida moderna. Nuestros
            cuerpos cargan con el peso de nuestras rutinas diarias, y el tacto intencional tiene el poder de
            liberar la tensión acumulada, restaurar el flujo de energía y reconectarnos con nuestro ser físico.
          </p>
          <p className="text-sage dark:text-sage/80 leading-relaxed">
            Cada sesión comienza con una conversación. Me tomo el tiempo para entender tus preocupaciones,
            tus objetivos y lo que tu cuerpo necesita ese día. Ya sea que busques alivio profundo del
            dolor crónico o un escape meditativo del mundo, mis manos se guían por tu historia.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-20 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-xs">
              Trayectoria
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2 dark:text-white">
              Línea de Tiempo Profesional
            </h2>
          </div>

          <div className="space-y-12">
            {timeline.map((item, idx) => (
              <div key={item.year} className="flex gap-8 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-[#0e1b13] font-bold text-sm shrink-0">
                    {item.year}
                  </div>
                  {idx < timeline.length - 1 && (
                    <div className="w-0.5 h-16 bg-primary/20 mt-2" />
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sage dark:text-sage/80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 lg:px-20">
        <div className="max-w-7xl mx-auto bg-primary rounded-3xl p-8 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-3xl lg:text-5xl font-black text-[#0e1b13] mb-6 leading-tight">
              Trabajemos juntos en tu bienestar
            </h2>
            <p className="text-[#0e1b13]/80 text-lg">
              Me encantaría conocer las necesidades de tu cuerpo y crear un plan de tratamiento personalizado.
            </p>
          </div>
          <Link
            to="/services"
            className="bg-[#0e1b13] text-white px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl text-center"
          >
            Reserva Tu Sesión
          </Link>
        </div>
      </section>
    </main>
  )
}
