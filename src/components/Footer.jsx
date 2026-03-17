import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="px-6 py-16 lg:px-20 border-t border-sage/10 bg-background-light dark:bg-background-dark" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-3xl">spa</span>
            <h1 className="text-xl font-bold tracking-tight dark:text-white">Serenity Wellness</h1>
          </Link>
          <p className="text-sage text-sm dark:text-sage/80">
            Masajes terapéuticos profesionales dedicados a la salud restaurativa y el bienestar consciente en un santuario sereno.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-sage/20 flex items-center justify-center text-sage hover:bg-primary hover:text-[#0e1b13] transition-all"
            >
              <span className="material-symbols-outlined text-lg">share</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-sage/20 flex items-center justify-center text-sage hover:bg-primary hover:text-[#0e1b13] transition-all"
            >
              <span className="material-symbols-outlined text-lg">camera</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-6 dark:text-white">Enlaces Rápidos</h4>
          <ul className="space-y-4 text-sm text-sage dark:text-sage/80">
            <li><Link to="/services" className="hover:text-primary transition-colors">Nuestros Servicios</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">Sobre la Terapeuta</Link></li>
            <li><a href="#" className="hover:text-primary transition-colors">Certificados Regalo</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Política de Cancelación</a></li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-bold mb-6 dark:text-white">Horario</h4>
          <ul className="space-y-4 text-sm text-sage dark:text-sage/80">
            <li className="flex justify-between">
              <span>Lun - Vie</span>
              <span className="font-bold">9:00 - 19:00</span>
            </li>
            <li className="flex justify-between">
              <span>Sábado</span>
              <span className="font-bold">10:00 - 16:00</span>
            </li>
            <li className="flex justify-between">
              <span>Domingo</span>
              <span className="font-bold text-primary/70">Cerrado</span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-6 dark:text-white">Contacto</h4>
          <ul className="space-y-4 text-sm text-sage dark:text-sage/80">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-lg">location_on</span>
              <span>
                123 Tranquil Way, Wellness Suite 4<br />
                San Francisco, CA 94103
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-lg">call</span>
              <span>(555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-lg">mail</span>
              <span>hello@serenitywellness.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-sage/10 text-center text-xs text-sage/60 dark:text-sage/40">
        <p>&copy; 2024 Serenity Wellness Masajes Terapéuticos. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
