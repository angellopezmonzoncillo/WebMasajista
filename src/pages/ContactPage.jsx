import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      {/* Header */}
      <section className="px-6 py-20 lg:px-20 bg-cream dark:bg-background-dark/50">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-primary font-bold uppercase tracking-widest text-xs">
            Ponte en Contacto
          </span>
          <h2 className="text-3xl lg:text-5xl font-black mt-2 mb-6 dark:text-white">
            Contáctanos
          </h2>
          <p className="text-sage max-w-2xl mx-auto text-lg">
            ¿Tienes alguna pregunta o estás listo para reservar? Escríbenos y te responderemos lo antes
            posible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-6 py-20 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8 dark:text-white">Visita Nuestro Estudio</h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold dark:text-white mb-1">Dirección</h4>
                  <p className="text-sage dark:text-sage/80">
                    123 Tranquil Way, Wellness Suite 4
                    <br />
                    San Francisco, CA 94103
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">call</span>
                </div>
                <div>
                  <h4 className="font-bold dark:text-white mb-1">Teléfono</h4>
                  <p className="text-sage dark:text-sage/80">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">mail</span>
                </div>
                <div>
                  <h4 className="font-bold dark:text-white mb-1">Email</h4>
                  <p className="text-sage dark:text-sage/80">hello@serenitywellness.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                </div>
                <div>
                  <h4 className="font-bold dark:text-white mb-1">Horario</h4>
                  <div className="text-sage dark:text-sage/80 space-y-1">
                    <p>Lun - Vie: 9:00 - 19:00</p>
                    <p>Sábado: 10:00 - 16:00</p>
                    <p>
                      Domingo: <span className="text-primary/70 font-medium">Cerrado</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-10 w-full h-64 bg-sage/10 rounded-xl flex items-center justify-center border border-sage/20">
              <div className="text-center text-sage">
                <span className="material-symbols-outlined text-4xl mb-2">map</span>
                <p className="text-sm font-medium">Mapa Interactivo</p>
                <p className="text-xs">San Francisco, CA</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-[#1a2e22] p-8 rounded-xl shadow-sm border border-sage/10">
            <h3 className="text-2xl font-bold mb-2 dark:text-white">Envía un Mensaje</h3>
            <p className="text-sage dark:text-sage/80 mb-8">
              Completa el formulario a continuación y te responderemos en 24 horas.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-4xl">
                    check_circle
                  </span>
                </div>
                <h4 className="text-xl font-bold dark:text-white mb-2">¡Mensaje Enviado!</h4>
                <p className="text-sage dark:text-sage/80">
                  Gracias por contactarnos. Te responderemos pronto.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
                  }}
                  className="mt-6 text-primary font-bold text-sm hover:underline"
                >
                  Enviar Otro Mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-white">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Elena Martínez"
                      className="w-full px-4 py-3 rounded-lg border border-sage/20 bg-background-light dark:bg-background-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-white">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="elena@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-sage/20 bg-background-light dark:bg-background-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-white">
                      Teléfono (opcional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 rounded-lg border border-sage/20 bg-background-light dark:bg-background-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-white">
                      Asunto
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-sage/20 bg-background-light dark:bg-background-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    >
                      <option value="">Selecciona un tema</option>
                      <option value="booking">Consulta de Reserva</option>
                      <option value="services">Preguntas sobre Servicios</option>
                      <option value="pricing">Precios y Paquetes</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-white">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    className="w-full px-4 py-3 rounded-lg border border-sage/20 bg-background-light dark:bg-background-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-[#0e1b13] font-black py-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                >
                  Enviar Mensaje
                  <span className="material-symbols-outlined">send</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
