import { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'

const services = [
  { id: 1, title: 'Masaje Sueco', duration: 60, price: 100, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2miFOcBzLF8MMHbybe_Hfq3_xNJBdvrLrD7-TNQyArjEN6IWda78n-RjSWO53_nB1AHV3k5jlaYFEt6mortL5fUobWv-9522PD_qdmu5YuXwNIHqmqt9Dtrd7l45M2kytVcxFb2lAVkqcHG5VpW4VJm-yxU5I5U8kG1taHvVzpuoTdro2YhTK1WJa_VuwTxvMBOBhJ0SvUeDP4zWmo2Jlz7g9KF_mYoJ-wUwMplRhDGIGX5cYcmvYzquHb6jM8mgttHpRaFtLXZU' },
  { id: 2, title: 'Tejido Profundo', duration: 60, price: 120, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqeDb0s0EYi2S90nP1Kfpz1B0hnWTsCxWSdYtep1HEYV1ExcKB_DopIWUU_Yd_vczPpljnDkur9LQEHquhISyGnAUst78cEcDhReOWa2pm76FgLoCFigFuxT1XjaWQ_E8NlSrZ_ULoLcssu4btHbxEAn1GDFIE47zxI2dPAP5cnF8QCr_D7vfLZcqoVog9EvSTlkiJWnUx5mkAHAt_tqOhhHL-B9awqsuP00ktHIaH9SsXr-knD6C_yHmLG0eLTD9t-yJinz5LcUo' },
  { id: 3, title: 'Masaje Deportivo', duration: 60, price: 115, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWVJYqOUBXfD0PkaWSQaDYCvVaFJqVoRPWE1TH2IKC-HAXKR5tcEjwPowPXM958qnIB_oEdxyCBYjIYeCazZVzFsvEnlGA0AJPOcCZP3i3IIA-0DaK_N1oipSuxza-qAuvwAKBlWk_568p0_-a-G2LxQSiWAK4pD2NJwbKH70Ud14nHngZ8mGF05b9hM4Rzdl4457iZayetUlQzrv1GI0w7EJN-IL_4YGTstbWhwYxE4g7148_eIUj6Jk4xGEsRKS0UAAnbd1vUSA' },
  { id: 4, title: 'Aromaterapia', duration: 75, price: 110, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKSBXFnHGjhT35c4uMV_dqWV71dIj4TTFYP5D0OP1QdbTxxfwvukQSVzMy7di2BFRORxMneTsC8P23xMaIWKhIAnWrTPNaHf8CNvKlPy-NfSHhpKudrDB2AlFUTGbHDQ4BOZrZaNZE8uDaQb0FlGCDjA5EcFYCjAuRrDXmelei1Y-8QrSSjRs6Rpl7RqHiGvWRXDlKrUgce7xHd9kb3TPq6NA-jEURUFQMM1pGsLJBDNj_uhBUeXdrMeteDDqzthun6sKNxrr1rQE' },
]

const timeSlots = [
  { time: '09:00 AM', available: true },
  { time: '10:30 AM', available: true },
  { time: '12:00 PM', available: true },
  { time: '01:30 PM', available: true },
  { time: '03:00 PM', available: false },
  { time: '04:30 PM', available: true },
  { time: '06:00 PM', available: true },
]

const DAYS_OF_WEEK = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB']

function getCalendarDays(year, month) {
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const daysInPrevMonth = new Date(year, month, 0).getDate()

  const days = []

  // Previous month trailing days
  for (let i = firstDay - 1; i >= 0; i--) {
    days.push({ day: daysInPrevMonth - i, currentMonth: false })
  }

  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    days.push({ day: d, currentMonth: true })
  }

  return days
}

function formatSelectedDate(year, month, day) {
  const date = new Date(year, month, day)
  return date.toLocaleDateString('es-ES', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

const MONTH_NAMES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
]

export default function BookingPage() {
  const [searchParams] = useSearchParams()
  const serviceParam = searchParams.get('service')
  const initialService = services.find((s) => s.id === Number(serviceParam)) || services[1]

  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [selectedDay, setSelectedDay] = useState(today.getDate())
  const [selectedTime, setSelectedTime] = useState('09:00 AM')
  const [selectedService, setSelectedService] = useState(initialService)
  const [confirmed, setConfirmed] = useState(false)

  const calendarDays = useMemo(
    () => getCalendarDays(currentYear, currentMonth),
    [currentYear, currentMonth]
  )

  const isPastDay = (day) => {
    if (currentYear < today.getFullYear()) return true
    if (currentYear === today.getFullYear() && currentMonth < today.getMonth()) return true
    if (currentYear === today.getFullYear() && currentMonth === today.getMonth() && day < today.getDate()) return true
    return false
  }

  const goToPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear((y) => y - 1)
    } else {
      setCurrentMonth((m) => m - 1)
    }
    setSelectedDay(null)
  }

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear((y) => y + 1)
    } else {
      setCurrentMonth((m) => m + 1)
    }
    setSelectedDay(null)
  }

  const handleConfirm = () => {
    setConfirmed(true)
  }

  if (confirmed) {
    return (
      <main className="px-6 lg:px-20 py-20 flex justify-center">
        <div className="max-w-lg w-full text-center space-y-6">
          <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
            <span className="material-symbols-outlined text-primary text-4xl">check_circle</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#0e1b13] dark:text-white">¡Reserva Confirmada!</h2>
          <p className="text-sage dark:text-[#a0c4ae]">
            Tu sesión de {selectedService.title} ha sido programada para el{' '}
            <span className="font-bold text-[#0e1b13] dark:text-white">
              {formatSelectedDate(currentYear, currentMonth, selectedDay)}
            </span>{' '}
            at <span className="font-bold text-primary">{selectedTime}</span>.
          </p>
          <p className="text-sm text-sage dark:text-[#a0c4ae]">
            Recibirás un correo de confirmación en breve. Puedes reprogramar hasta 24 horas antes de tu sesión.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Link
              to="/"
              className="px-6 py-3 rounded-xl border-2 border-primary text-primary font-bold text-sm hover:bg-primary hover:text-[#0e1b13] transition-all"
            >
              Volver al Inicio
            </Link>
            <Link
              to="/services"
              className="px-6 py-3 rounded-xl bg-primary text-[#0e1b13] font-bold text-sm hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              Reservar Otra Sesión
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-[#0e1b13] dark:text-white">Programa Tu Sesión</h2>
        <p className="text-sage dark:text-[#a0c4ae] mt-2">
          Selecciona la fecha y hora que mejor se adapten a tu camino de recuperación.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Calendar & Time Slots */}
        <div className="lg:col-span-8 space-y-8">
          {/* Main Booking Container */}
          <div className="bg-white dark:bg-[#1a2e22] rounded-xl shadow-sm border border-[#e7f3ec] dark:border-[#1e3a2a] overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Calendar Section */}
              <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-[#e7f3ec] dark:border-[#1e3a2a]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg text-[#0e1b13] dark:text-white">
                    {MONTH_NAMES[currentMonth]} {currentYear}
                  </h3>
                  <div className="flex gap-2">
                    <button
                      onClick={goToPrevMonth}
                      className="p-2 hover:bg-[#e7f3ec] dark:hover:bg-[#122419] rounded-lg transition-colors"
                    >
                      <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <button
                      onClick={goToNextMonth}
                      className="p-2 hover:bg-[#e7f3ec] dark:hover:bg-[#122419] rounded-lg transition-colors"
                    >
                      <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                  </div>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 text-center">
                  {DAYS_OF_WEEK.map((d) => (
                    <div key={d} className="text-xs font-bold text-sage py-2">
                      {d}
                    </div>
                  ))}

                  {calendarDays.map((item, idx) => {
                    if (!item.currentMonth) {
                      return (
                        <div
                          key={`prev-${idx}`}
                          className="aspect-square flex items-center justify-center text-slate-300 dark:text-slate-600 pointer-events-none"
                        >
                          {item.day}
                        </div>
                      )
                    }

                    const past = isPastDay(item.day)
                    const isSelected = selectedDay === item.day
                    const isToday =
                      item.day === today.getDate() &&
                      currentMonth === today.getMonth() &&
                      currentYear === today.getFullYear()

                    if (past) {
                      return (
                        <div
                          key={`day-${item.day}`}
                          className="aspect-square flex items-center justify-center text-slate-300 dark:text-slate-600 pointer-events-none"
                        >
                          {item.day}
                        </div>
                      )
                    }

                    return (
                      <button
                        key={`day-${item.day}`}
                        onClick={() => setSelectedDay(item.day)}
                        className={`aspect-square flex flex-col items-center justify-center rounded-lg transition-all group ${
                          isSelected
                            ? 'bg-primary text-[#0e1b13] shadow-lg shadow-primary/20'
                            : 'hover:bg-primary/10'
                        }`}
                      >
                        <span className={`text-sm ${isSelected ? 'font-bold' : 'font-medium'}`}>
                          {item.day}
                        </span>
                        {isToday && !isSelected && (
                          <div className="size-1 bg-primary rounded-full mt-1"></div>
                        )}
                        {isSelected && (
                          <div className="size-1 bg-[#0e1b13] rounded-full mt-1"></div>
                        )}
                        {!isSelected && !isToday && (
                          <div className="size-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 mt-1"></div>
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Time Slots Section */}
              <div className="w-full md:w-72 p-6 bg-[#f0f5f2] dark:bg-[#122419]">
                <div className="flex items-center gap-2 mb-6">
                  <span className="material-symbols-outlined text-primary text-xl">schedule</span>
                  <h3 className="font-bold text-lg text-[#0e1b13] dark:text-white">Horarios Disponibles</h3>
                </div>
                <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 hide-scrollbar">
                  {timeSlots.map((slot) => {
                    const isActive = selectedTime === slot.time && slot.available

                    if (!slot.available) {
                      return (
                        <button
                          key={slot.time}
                          disabled
                          className="w-full py-3 px-4 rounded-xl border border-[#e7f3ec] dark:border-[#1e3a2a] bg-white dark:bg-[#1a2e22] text-sage opacity-50 cursor-not-allowed flex items-center justify-between"
                        >
                          <span className="line-through">{slot.time}</span>
                          <span className="text-[10px] font-bold bg-[#e7f3ec] dark:bg-[#1e3a2a] px-1.5 py-0.5 rounded text-sage">
                            OCUPADO
                          </span>
                        </button>
                      )
                    }

                    return (
                      <button
                        key={slot.time}
                        onClick={() => setSelectedTime(slot.time)}
                        className={`w-full py-3 px-4 rounded-xl border bg-white dark:bg-[#1a2e22] font-semibold flex items-center justify-between transition-all ${
                          isActive
                            ? 'border-primary text-[#0e1b13] dark:text-white shadow-sm shadow-primary/10'
                            : 'border-[#e7f3ec] dark:border-[#1e3a2a] text-sage hover:border-primary'
                        }`}
                      >
                        <span>{slot.time}</span>
                        {isActive && (
                          <span className="material-symbols-outlined text-primary">check_circle</span>
                        )}
                      </button>
                    )
                  })}
                </div>
                <p className="mt-4 text-[11px] text-sage text-center italic">
                  Los horarios se muestran en tu zona horaria local
                </p>
              </div>
            </div>
          </div>

          {/* Availability Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex items-start gap-4">
              <span className="material-symbols-outlined text-primary mt-1">info</span>
              <div>
                <h4 className="font-bold text-sm text-[#0e1b13] dark:text-white">Disponibilidad en Tiempo Real</h4>
                <p className="text-xs text-sage dark:text-[#a0c4ae] mt-1">
                  Calculamos automáticamente intervalos de 15 minutos de limpieza entre sesiones para tu seguridad.
                </p>
              </div>
            </div>
            <div className="bg-[#e7f3ec]/50 dark:bg-[#1a2e22] border border-[#e7f3ec] dark:border-[#1e3a2a] rounded-xl p-4 flex items-start gap-4">
              <span className="material-symbols-outlined text-sage mt-1">event_available</span>
              <div>
                <h4 className="font-bold text-sm text-[#0e1b13] dark:text-white">Reprogramación Flexible</h4>
                <p className="text-xs text-sage dark:text-[#a0c4ae] mt-1">
                  Reprogramación gratuita hasta 24 horas antes de tu sesión. Sin cargos ocultos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Summary Sidebar */}
        <div className="lg:col-span-4 sticky top-24">
          <div className="bg-white dark:bg-[#1a2e22] rounded-xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-[#e7f3ec] dark:border-[#1e3a2a] overflow-hidden">
            <div className="p-6">
              <h3 className="font-bold text-xl mb-6 text-[#0e1b13] dark:text-white">Resumen de Reserva</h3>

              {/* Service Selector */}
              <div className="mb-4">
                <label className="text-xs font-bold text-sage uppercase tracking-wide mb-2 block">Servicio</label>
                <select
                  value={selectedService.id}
                  onChange={(e) =>
                    setSelectedService(services.find((s) => s.id === Number(e.target.value)))
                  }
                  className="w-full py-2.5 px-3 rounded-lg border border-[#e7f3ec] dark:border-[#1e3a2a] bg-[#f0f5f2] dark:bg-[#122419] text-[#0e1b13] dark:text-white text-sm font-medium focus:outline-none focus:border-primary"
                >
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Selected Service Card */}
              <div className="flex items-center gap-4 mb-6 p-3 rounded-lg bg-[#f0f5f2] dark:bg-[#122419] border border-[#e7f3ec] dark:border-[#1e3a2a]">
                <div
                  className="size-16 rounded-lg bg-cover bg-center shrink-0 shadow-sm"
                  style={{ backgroundImage: `url('${selectedService.image}')` }}
                ></div>
                <div>
                  <h4 className="font-bold text-sm text-[#0e1b13] dark:text-white">{selectedService.title}</h4>
                  <p className="text-xs text-sage flex items-center gap-1 mt-0.5">
                    <span className="material-symbols-outlined text-[14px]">timer</span>{' '}
                    {selectedService.duration} Minutos
                  </p>
                  <p className="text-primary font-bold text-sm mt-1">
                    ${selectedService.price.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Date/Time Selection Details */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-sage flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">calendar_today</span> Fecha
                  </span>
                  <span className="font-semibold text-[#0e1b13] dark:text-white">
                    {selectedDay
                      ? formatSelectedDate(currentYear, currentMonth, selectedDay)
                      : 'Selecciona una fecha'}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-sage flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">history_toggle_off</span> Hora
                  </span>
                  <span className="font-semibold text-primary">{selectedTime}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-sage flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">person</span> Terapeuta
                  </span>
                  <span className="font-semibold text-[#0e1b13] dark:text-white">Elena</span>
                </div>
                <div className="pt-4 border-t border-[#e7f3ec] dark:border-[#1e3a2a]">
                  <div className="flex justify-between items-end">
                    <span className="text-sage font-medium">Importe Total</span>
                    <span className="text-2xl font-black text-[#0e1b13] dark:text-white">
                      ${selectedService.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleConfirm}
                disabled={!selectedDay}
                className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-[#0e1b13] font-bold py-4 rounded-xl transition-all transform active:scale-[0.98] shadow-lg shadow-primary/20 flex items-center justify-center gap-2 mb-4"
              >
                <span>Confirmar Reserva</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <p className="text-[10px] text-center text-sage uppercase tracking-widest font-bold">
                Pago Seguro con Stripe
              </p>
            </div>
          </div>

          {/* Secondary Info */}
          <div className="mt-6 text-center">
            <p className="text-xs text-sage">
              ¿Necesitas ayuda?{' '}
              <Link to="/contact" className="text-primary font-bold underline">
                Contactar Soporte
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
