import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-sage/10 px-6 lg:px-20 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="text-primary">
            <span className="material-symbols-outlined text-3xl">spa</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-[#0e1b13] dark:text-white">
            Serenity Wellness
          </h1>
        </NavLink>

        <nav className="hidden md:flex items-center gap-10">
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive
                  ? 'text-primary font-bold border-b-2 border-primary'
                  : 'text-[#0e1b13] dark:text-gray-300 hover:text-primary'
              }`
            }
          >
            Servicios
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive
                  ? 'text-primary font-bold border-b-2 border-primary'
                  : 'text-[#0e1b13] dark:text-gray-300 hover:text-primary'
              }`
            }
          >
            Sobre Mí
          </NavLink>
          <NavLink
            to="/benefits"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive
                  ? 'text-primary font-bold border-b-2 border-primary'
                  : 'text-[#0e1b13] dark:text-gray-300 hover:text-primary'
              }`
            }
          >
            Beneficios
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive
                  ? 'text-primary font-bold border-b-2 border-primary'
                  : 'text-[#0e1b13] dark:text-gray-300 hover:text-primary'
              }`
            }
          >
            Contacto
          </NavLink>
        </nav>

        <NavLink
          to="/booking"
          className="bg-primary text-[#0e1b13] px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-all shadow-sm"
        >
          Reservar
        </NavLink>
      </div>
    </header>
  )
}
