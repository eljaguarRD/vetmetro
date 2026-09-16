import React, { useState } from 'react';
import { Calendar, MessageCircle, Sparkles, Check, ArrowRight, Stethoscope, Scissors, Hotel, Activity, ShieldAlert, HeartPulse } from 'lucide-react';
import { CLINIC_INFO } from '../../data/veterinariaData';

interface ServicesV2Props {
  onOpenBooking: (prefill?: { serviceId?: string }) => void;
}

interface ServiceCardV2 {
  id: string;
  category: 'clinica' | 'bienestar' | 'especialidad';
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  duration: string;
  icon: any;
  tag: string;
  urgentNotice?: string;
}

const SERVICES_V2: ServiceCardV2[] = [
  {
    id: 'urgencias-24-7',
    category: 'clinica',
    title: 'Urgencias Médicas & UCI 24/7',
    subtitle: 'Sede Ensanche Paraíso',
    description: 'Guardia médica veterinaria permanente los 365 días del año para situaciones críticas, shock, intoxicaciones o traumatismos graves.',
    highlights: [
      'Atención inmediata sin cita previa',
      'Unidad de cuidados intensivos y oxigenoterapia',
      'Monitoreo hemodinámico continuo 24 horas'
    ],
    duration: 'Ingreso inmediato',
    icon: ShieldAlert,
    tag: 'Abierto 24 Horas',
    urgentNotice: 'Prioridad máxima de ingreso'
  },
  {
    id: 'consulta-general',
    category: 'clinica',
    title: 'Medicina General & Preventiva',
    subtitle: 'Evaluación integral y diagnóstico',
    description: 'Chequeo clínico minucioso de ojos, oídos, dentadura, sistema cardiovascular y peso, enfocado en longevidad y bienestar.',
    highlights: [
      'Examen físico biométrico detallado',
      'Control de peso, nutrición y calendario preventivo',
      'Historial clínico digital unificado en las 3 sedes'
    ],
    duration: '30 - 45 min',
    icon: Stethoscope,
    tag: 'Chequeo Clínico'
  },
  {
    id: 'grooming-spa',
    category: 'bienestar',
    title: 'Grooming & Pet Spa Profesional',
    subtitle: 'Estilismo, higiene y dermatología',
    description: 'Sesión de higiene y belleza libre de estrés con cosmética dermatológica de pH neutro, secado respetuoso sin jaulas y corte de raza.',
    highlights: [
      'Corte de pelo según estándar de la raza',
      'Limpieza auricular profunda y corte de uñas',
      'Baños medicados para pieles atópicas o alérgicas'
    ],
    duration: '1 - 2 horas',
    icon: Scissors,
    tag: 'Bienestar & Spa'
  },
  {
    id: 'hospedaje-cattel-park',
    category: 'bienestar',
    title: 'CatHotel & VetMetroPark',
    subtitle: 'Hospedaje de corta y larga estancia',
    description: 'Instalaciones diseñadas para el máximo confort: suites felinas aisladas de ruidos y parque al aire libre con áreas verdes para perros.',
    highlights: [
      'CatHotel 100% libre de contacto canino con Feliway',
      'VetMetroPark con esparcimiento y socialización guiada',
      'Supervisión veterinaria 24 horas y reportes diarios'
    ],
    duration: 'Por noche o Daycare',
    icon: Hotel,
    tag: 'Hospedaje & Daycare'
  },
  {
    id: 'cirugia-quirurgico',
    category: 'especialidad',
    title: 'Cirugía & Quirófano Avanzado',
    subtitle: 'Procedimientos de tejidos blandos y traumatología',
    description: 'Quirófano estéril con anestesia inhalatoria computarizada, monitoreo multiparamétrico y protocolo estricto de control de dolor.',
    highlights: [
      'Esterilizaciones y castraciones mínimamente invasivas',
      'Cirugías digestivas, oncológicas y reconstructivas',
      'Sala de recuperación térmica post-quirúrgica'
    ],
    duration: 'Según procedimiento',
    icon: Activity,
    tag: 'Quirófano Estéril'
  },
  {
    id: 'diagnostico-imagenes',
    category: 'especialidad',
    title: 'Laboratorio Clínico & Rayos X Digital',
    subtitle: 'Diagnóstico certero in-house',
    description: 'Equipamiento de imagenología digital de alta resolución y laboratorio de respuesta rápida para obtener diagnósticos el mismo día.',
    highlights: [
      'Hemogramas y perfiles bioquímicos en 15 minutos',
      'Rayos X digitales de tórax, abdomen y extremidades',
      'Ecografías abdominales y cardíacas doppler'
    ],
    duration: 'Resultados el mismo día',
    icon: HeartPulse,
    tag: 'Diagnóstico HD'
  }
];

export const ServicesV2: React.FC<ServicesV2Props> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<'all' | 'clinica' | 'bienestar' | 'especialidad'>('all');

  const filteredServices = filter === 'all'
    ? SERVICES_V2
    : SERVICES_V2.filter((s) => s.category === filter);

  return (
    <section id="servicios-v2" className="py-16 sm:py-24 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B4F4F] bg-stone-100 px-3 py-1 rounded-full border border-stone-200">
              Especialidades y Servicios Integrales
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight mt-3">
              Cuidado integral en un solo lugar
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
              Equipamiento hospitalario de última generación y un equipo médico con 30 años de trayectoria cuidando a las mascotas de Santo Domingo.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-stone-100 p-1.5 rounded-2xl border border-stone-200/80 shrink-0">
            {[
              { id: 'all', label: 'Todos' },
              { id: 'clinica', label: 'Medicina & Urgencias' },
              { id: 'bienestar', label: 'Grooming & CatHotel' },
              { id: 'especialidad', label: 'Cirugía & Diagnóstico' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-white text-stone-900 shadow-xs font-bold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (NO FAKE PRICES, pure value and fast booking action) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            const isUrgent = service.id === 'urgencias-24-7';

            return (
              <div
                key={service.id}
                className={`rounded-3xl border transition-all duration-200 p-6 flex flex-col justify-between group ${
                  isUrgent
                    ? 'bg-rose-50/40 border-rose-200/80 hover:border-rose-300'
                    : 'bg-stone-50/60 border-stone-200/80 hover:bg-white hover:border-stone-300 hover:shadow-sm'
                }`}
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                      isUrgent
                        ? 'bg-rose-600 text-white'
                        : 'bg-[#0B4F4F] text-emerald-300'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${
                      isUrgent
                        ? 'bg-rose-100 text-rose-800 border-rose-200'
                        : 'bg-white text-stone-700 border-stone-200'
                    }`}>
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif text-xl font-bold text-stone-900 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-stone-500 mt-1">
                    {service.subtitle}
                  </p>

                  <p className="text-xs text-stone-600 mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-2 mt-4 pt-4 border-t border-stone-200/60">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                        <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-6 mt-6 border-t border-stone-200/60 flex items-center justify-between gap-3">
                  <div className="text-[11px] text-stone-500 font-medium">
                    {service.duration}
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hola%20VetMetro,%20deseo%20consultar%20sobre%20${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white border border-stone-200 text-emerald-700 hover:bg-emerald-50 transition-colors"
                      title="Consultar por WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>

                    <button
                      onClick={() => onOpenBooking({ serviceId: service.id })}
                      className={`py-2 px-3.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                        isUrgent
                          ? 'bg-rose-600 hover:bg-rose-700 text-white shadow-xs'
                          : 'bg-[#0B4F4F] hover:bg-[#083D3D] text-white shadow-xs'
                      }`}
                    >
                      <span>Agendar Cita</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Personalized Consultation Callout (Replaces generic price table) */}
        <div className="mt-12 bg-stone-100/80 rounded-3xl border border-stone-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-stone-800 font-serif font-bold text-lg">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>¿Necesitas una valoración o presupuesto específico?</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 max-w-2xl">
              Dado que cada mascota tiene requerimientos particulares según su peso, historial y condición clínica, nuestro equipo médico te brinda orientación personalizada al instante vía WhatsApp o telefónica.
            </p>
          </div>

          <a
            href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hola%20VetMetro%20RD,%20deseo%20orientaci%C3%B3n%20y%20presupuesto%20para%20mi%20mascota:`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
