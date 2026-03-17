import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Tejido Profundo',
    description:
      'Se enfoca en realinear las capas más profundas de músculos y tejido conectivo para aliviar la tensión crónica.',
    price: '95€ / 60 min',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCQCeVXVc6NfZcSiCJSOO8MZbdGLXuwYNjuQuxgksUGnOegBx9jsCwLngHGJZ9ROPQlyjU29cXOgpLbq8pYCFiZOUX0qeLtsCnal7ixSumuyNapd5JTkPjpX6NgvojxJpmFj84wrZjPZ_Xj0QSb2dNeph-V2Hl5wEIyfrKADFzjHfDJIeiwId5lneYaJhWhMdUuoudUIVYrb5gHVzKCiLs2uTgWPNW4NmgTfGkDPUI0DoBPLqN9A6kDe6LgB7FkyXaeo_wwVeJEyZo',
    alt: 'Therapist performing deep tissue massage on back',
  },
  {
    title: 'Masaje Sueco',
    description:
      'Una técnica clásica de relajación con movimientos largos y deslizantes para mejorar la circulación y aliviar el estrés.',
    price: '85€ / 60 min',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCPOct2REIH6lwiLK36Id6T20D3FyuxbVDrXDRMZ4HdTrdiuoQpjymNqgTgIpIKeMdIR0MqacV-NYWp7CJ-BzoTM92F9JtyWSGttuewAMfoJYSFH1BpUn-urhRkbrwL-maLtQFi7UulXbX8VVydgJ1tO4Z7KbkdFLDmg0BZYBEFJyxUEFVZC7j7By4RE5N2cK9FiVStGRanBpEbR8QbEC2fJ5XI7Q9O1Ai_mkbYEuMmFXr_ETiWhptWKujIOeemD8q3rn6tFJt9kRQ',
    alt: 'Classic Swedish massage with relaxing oils',
  },
  {
    title: 'Aromaterapia',
    description:
      'Enriquecido con aceites esenciales terapéuticos para promover el equilibrio emocional y la sanación física.',
    price: '110€ / 75 min',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCr3FEJJrlV408nepNpjzRZm5bzwrOjmb1RrvKOP2yAZ9ms5z7T_dbYpCffCqQms-cSDT4f5bsc-_t4eK1JQqthSVQyf7VbfsK1JntAgMEYIwuW-CoMy1a8Oekl9x_gkeIyafZrj338X111HatywaiF6m7Dr9QBaNyOyNLUbIH4w_oMhF6TkxdIu-NlePHLYyY5s8ssJ0D-3_rcQb67yfz0YyIn5d5y54vESk1Qb0BpvVeNgdFKpel_z6jAu5GA4CWX2TOmTzCLmuM',
    alt: 'Aromatherapy setup with essential oils and stones',
  },
]

const benefits = [
  {
    icon: 'psychology',
    title: 'Reducción del Estrés',
    description:
      'Reduce los niveles de cortisol y promueve una profunda sensación de relajación y claridad mental.',
  },
  {
    icon: 'fitness_center',
    title: 'Alivio del Dolor',
    description:
      'Alivia la tensión muscular, el dolor articular y reduce las molestias de condiciones crónicas.',
  },
  {
    icon: 'ecg',
    title: 'Mejor Circulación',
    description:
      'Estimula la circulación sanguínea y el drenaje linfático, ayudando a una recuperación corporal más rápida.',
  },
  {
    icon: 'bedtime',
    title: 'Mejor Descanso',
    description:
      'Calma el sistema nervioso, ayudándote a conciliar el sueño más rápido y lograr un descanso más profundo.',
  },
]

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative px-6 py-12 lg:px-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-xl bg-[#0e1b13]">
            <div className="absolute inset-0 opacity-60">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBrISHVSA4d5EFqk4zGPUhOk2MNUSQZHke7vKcITp4FKeqxbavWmEApLxR0xDIQZDfSo3-5HvQDxxnGlu8u2eIYa_46UEgxpgwzgPFBvKj-Altjrx6CEojO1LZy014kX1fpwNPK92kJbEv-hfuqiQQUDXznAzjfcIXSF41kCry0ouDjmwRz3C_xD_wOtRRH-vAd9GQn9y_sdFbm4UEpp7OJjxz1KIRSFLva33azQsWRCb1ZIW3JHM8wHF-Ba_CE4B99LCYXHC-kdmQ")',
                }}
              />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24 lg:py-40 max-w-3xl mx-auto">
              <h2 className="text-white text-4xl lg:text-6xl font-black leading-tight mb-6">
                Encuentra Tu Camino al Bienestar
              </h2>
              <p className="text-white/90 text-lg lg:text-xl font-normal mb-10 leading-relaxed">
                Experimenta la terapia de masaje profesional en un entorno tranquilo diseñado para
                tu sanación y relajación.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="bg-primary text-[#0e1b13] px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform"
                >
                  Reserva Tu Sesión
                </Link>
                <Link
                  to="/services"
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all"
                >
                  Ver Servicios
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="px-6 py-16 lg:px-20 bg-cream dark:bg-background-dark/50" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-xs">
                Atención Profesional
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-2 dark:text-white">
                Nuestras Especialidades
              </h2>
            </div>
            <p className="max-w-md text-sage dark:text-sage/80">
              Tratamientos personalizados para tus necesidades específicas, desde el manejo del dolor crónico hasta
              la relajación total.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                to="/services"
                className="group bg-white dark:bg-background-dark p-4 rounded-xl shadow-sm border border-sage/10 hover:shadow-md transition-shadow"
              >
                <div className="aspect-square w-full rounded-lg overflow-hidden mb-5">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url("${service.image}")` }}
                    role="img"
                    aria-label={service.alt}
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{service.title}</h3>
                <p className="text-sage text-sm mb-4 leading-relaxed dark:text-sage/90">
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-sage/10">
                  <span className="font-bold text-primary">{service.price}</span>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
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
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">verified</span>
                <span className="font-medium dark:text-gray-200">Certificada LMT</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">verified</span>
                <span className="font-medium dark:text-gray-200">Miembro NCBTMB</span>
              </div>
            </div>
            <Link
              to="/about"
              className="border-2 border-primary text-[#0e1b13] dark:text-white px-8 py-3 rounded-lg font-bold hover:bg-primary hover:text-[#0e1b13] transition-all inline-block"
            >
              Leer Biografía Completa
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-20 lg:px-20 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark:text-white">
            Beneficios del Masaje Regular
          </h2>
          <p className="text-sage max-w-2xl mx-auto">
            Invertir en tu cuerpo hoy previene complicaciones mañana. Descubre cómo la terapia puede
            transformar tu vida diaria.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-cream dark:bg-background-dark p-8 rounded-xl border border-sage/10 text-center flex flex-col items-center"
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

      {/* Booking CTA Section */}
      <section className="px-6 py-20 lg:px-20">
        <div className="max-w-7xl mx-auto bg-primary rounded-3xl p-8 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-3xl lg:text-5xl font-black text-[#0e1b13] mb-6 leading-tight">
              ¿Lista para comenzar tu camino de sanación?
            </h2>
            <p className="text-[#0e1b13]/80 text-lg">
              Consulta la disponibilidad en tiempo real y reserva tu sesión en menos de 2 minutos.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <Link
              to="/services"
              className="bg-[#0e1b13] text-white px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl text-center"
            >
              Reserva Tu Cita
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
