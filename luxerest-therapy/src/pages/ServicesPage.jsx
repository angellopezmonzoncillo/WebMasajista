import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const allServices = [
  {
    id: 1,
    title: 'Masaje Sueco',
    description:
      'Perfecto para la relajación y el alivio del estrés. Utiliza movimientos largos y deslizantes para mejorar la circulación y calmar el sistema nervioso.',
    prices: { 30: 60, 60: 100, 90: 140 },
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB2miFOcBzLF8MMHbybe_Hfq3_xNJBdvrLrD7-TNQyArjEN6IWda78n-RjSWO53_nB1AHV3k5jlaYFEt6mortL5fUobWv-9522PD_qdmu5YuXwNIHqmqt9Dtrd7l45M2kytVcxFb2lAVkqcHG5VpW4VJm-yxU5I5U8kG1taHvVzpuoTdro2YhTK1WJa_VuwTxvMBOBhJ0SvUeDP4zWmo2Jlz7g9KF_mYoJ-wUwMplRhDGIGX5cYcmvYzquHb6jM8mgttHpRaFtLXZU',
    alt: 'Relaxing Swedish massage therapy session',
    popular: true,
  },
  {
    id: 2,
    title: 'Tejido Profundo',
    description:
      'Trabaja las capas musculares profundas y el tejido conectivo. Ideal para dolores crónicos, rigidez de cuello y tensión en hombros.',
    prices: { 30: 70, 60: 120, 90: 170 },
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDqeDb0s0EYi2S90nP1Kfpz1B0hnWTsCxWSdYtep1HEYV1ExcKB_DopIWUU_Yd_vczPpljnDkur9LQEHquhISyGnAUst78cEcDhReOWa2pm76FgLoCFigFuxT1XjaWQ_E8NlSrZ_ULoLcssu4btHbxEAn1GDFIE47zxI2dPAP5cnF8QCr_D7vfLZcqoVog9EvSTlkiJWnUx5mkAHAt_tqOhhHL-B9awqsuP00ktHIaH9SsXr-knD6C_yHmLG0eLTD9t-yJinz5LcUo',
    alt: 'Deep tissue massage technique close up',
    popular: false,
  },
  {
    id: 3,
    title: 'Masaje Deportivo',
    description:
      'Se enfoca en los grupos musculares relevantes para tu actividad deportiva. Ayuda a prevenir lesiones y mejora la flexibilidad.',
    prices: { 30: 65, 60: 115, 90: 160 },
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAWVJYqOUBXfD0PkaWSQaDYCvVaFJqVoRPWE1TH2IKC-HAXKR5tcEjwPowPXM958qnIB_oEdxyCBYjIYeCazZVzFsvEnlGA0AJPOcCZP3i3IIA-0DaK_N1oipSuxza-qAuvwAKBlWk_568p0_-a-G2LxQSiWAK4pD2NJwbKH70Ud14nHngZ8mGF05b9hM4Rzdl4457iZayetUlQzrv1GI0w7EJN-IL_4YGTstbWhwYxE4g7148_eIUj6Jk4xGEsRKS0UAAnbd1vUSA',
    alt: 'Sports massage for athlete recovery',
    popular: false,
  },
  {
    id: 4,
    title: 'Aromaterapia',
    description:
      'Utiliza aceites esenciales premium para mejorar el bienestar físico y emocional. Una experiencia sensorial completa.',
    prices: { 30: 65, 60: 110, 90: 155 },
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAKSBXFnHGjhT35c4uMV_dqWV71dIj4TTFYP5D0OP1QdbTxxfwvukQSVzMy7di2BFRORxMneTsC8P23xMaIWKhIAnWrTPNaHf8CNvKlPy-NfSHhpKudrDB2AlFUTGbHDQ4BOZrZaNZE8uDaQb0FlGCDjA5EcFYCjAuRrDXmelei1Y-8QrSSjRs6Rpl7RqHiGvWRXDlKrUgce7xHd9kb3TPq6NA-jEURUFQMM1pGsLJBDNj_uhBUeXdrMeteDDqzthun6sKNxrr1rQE',
    alt: 'Aromatherapy massage with essential oils',
    popular: false,
  },
]

const durations = [30, 60, 90]

export default function ServicesPage() {
  const navigate = useNavigate()
  const [selectedDuration, setSelectedDuration] = useState(60)
  const [selectedService, setSelectedService] = useState(null)

  const currentPrice = selectedService
    ? selectedService.prices[selectedDuration]
    : 0

  return (
    <main className="px-6 lg:px-40 flex flex-1 justify-center py-10">
      <div className="flex flex-col max-w-[1200px] flex-1">
        {/* Page Header */}
        <div className="flex flex-wrap justify-between items-end gap-3 mb-8">
          <div className="flex flex-col gap-2">
            <p className="text-[#0e1b13] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
              Selecciona Tu Tratamiento
            </p>
            <p className="text-sage dark:text-[#a0c4ae] text-base font-normal leading-normal">
              Elige el estilo de masaje y la duración que se adapte a tu camino de bienestar.
            </p>
          </div>
        </div>

        {/* Duration Selection */}
        <div className="bg-white dark:bg-[#1a2e22] p-6 rounded-xl shadow-sm border border-[#e7f3ec] dark:border-[#1e3a2a] mb-10">
          <h3 className="text-[#0e1b13] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">schedule</span>
            Establecer Duración
          </h3>
          <div className="flex h-12 flex-1 items-center justify-center rounded-lg bg-[#e7f3ec] dark:bg-[#122419] p-1.5 max-w-md">
            {durations.map((dur) => (
              <label
                key={dur}
                className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-bold leading-normal transition-all ${
                  selectedDuration === dur
                    ? 'bg-white dark:bg-[#1a2e22] shadow-sm text-[#0e1b13] dark:text-white'
                    : 'text-sage'
                }`}
              >
                <span className="truncate">{dur} Minutos</span>
                <input
                  className="invisible w-0"
                  name="duration"
                  type="radio"
                  value={dur}
                  checked={selectedDuration === dur}
                  onChange={() => setSelectedDuration(dur)}
                />
              </label>
            ))}
          </div>
        </div>

        {/* Grid Layout: Services + Summary */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-[2]">
            {allServices.map((service) => {
              const isSelected = selectedService?.id === service.id
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`flex flex-col gap-0 bg-white dark:bg-[#1a2e22] rounded-xl overflow-hidden border-2 transition-all cursor-pointer shadow-sm group ${
                    isSelected
                      ? 'border-primary service-card-selected'
                      : 'border-transparent hover:border-primary/50'
                  }`}
                >
                  <div
                    className="w-full h-48 bg-center bg-no-repeat bg-cover relative"
                    style={{ backgroundImage: `url("${service.image}")` }}
                    role="img"
                    aria-label={service.alt}
                  >
                    {service.popular && (
                      <div className="absolute top-3 right-3 bg-primary text-[#0e1b13] text-xs font-bold px-3 py-1 rounded-full">
                        Popular
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex flex-col gap-2">
                    <div className="flex justify-between items-start">
                      <h4 className="text-[#0e1b13] dark:text-white text-xl font-bold">
                        {service.title}
                      </h4>
                      <p className="text-primary text-xl font-black">
                        ${service.prices[selectedDuration].toFixed(2)}
                      </p>
                    </div>
                    <p className="text-sage dark:text-[#a0c4ae] text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <button
                      className={`w-full py-2.5 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                        isSelected
                          ? 'bg-primary text-[#0e1b13]'
                          : 'border-2 border-primary text-primary group-hover:bg-primary group-hover:text-[#0e1b13]'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <span className="material-symbols-outlined text-sm">check_circle</span>
                          Seleccionado
                        </>
                      ) : (
                        'Seleccionar Tratamiento'
                      )}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Sidebar Summary */}
          <div className="flex-1 w-full lg:max-w-sm sticky top-24">
            <div className="bg-white dark:bg-[#1a2e22] rounded-xl p-6 shadow-md border border-[#e7f3ec] dark:border-[#1e3a2a]">
              <h3 className="text-[#0e1b13] dark:text-white text-lg font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined">shopping_cart</span>
                Resumen de Reserva
              </h3>

              {selectedService ? (
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-start pb-4 border-b border-[#e7f3ec] dark:border-[#1e3a2a]">
                    <div>
                      <p className="font-bold text-[#0e1b13] dark:text-white">
                        {selectedService.title}
                      </p>
                      <p className="text-sm text-sage dark:text-[#a0c4ae]">
                        {selectedDuration} Minutos de Duración
                      </p>
                    </div>
                    <p className="font-bold text-[#0e1b13] dark:text-white">
                      ${currentPrice.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-sage dark:text-[#a0c4ae]">Tarifa de Servicio</span>
                    <span className="text-[#0e1b13] dark:text-white">$0.00</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-lg font-bold text-[#0e1b13] dark:text-white">Total</span>
                    <span className="text-2xl font-black text-primary">
                      ${currentPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              ) : (
                <p className="text-sage text-sm mb-6">
                  Selecciona un tratamiento para ver el resumen de tu reserva.
                </p>
              )}

              <div className="bg-primary/10 dark:bg-primary/5 p-4 rounded-lg mb-6 flex items-start gap-3 border border-primary/20">
                <span className="material-symbols-outlined text-primary text-xl">info</span>
                <p className="text-xs text-sage dark:text-[#a0c4ae] leading-normal">
                  Puedes cancelar o reprogramar hasta 24 horas antes de tu cita de forma gratuita.
                </p>
              </div>

              <button
                disabled={!selectedService}
                onClick={() => selectedService && navigate(`/booking?service=${selectedService.id}`)}
                className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-[#0e1b13] font-black py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-1"
              >
                Continuar a Reservar
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <p className="text-center text-xs text-sage dark:text-[#a0c4ae] mt-4">
                Reserva segura con Serenity Wellness
              </p>
            </div>

            {/* Professional Guarantee */}
            <div className="mt-6 flex flex-col gap-4 px-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">verified_user</span>
                <span className="text-sm font-medium dark:text-white">Terapeutas Licenciados</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">clean_hands</span>
                <span className="text-sm font-medium dark:text-white">Espacios Desinfectados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
