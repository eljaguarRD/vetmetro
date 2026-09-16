import React from 'react';
import { Home, Heart, Scissors, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, MessageCircle, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../../data/veterinariaData';

interface SpecializedSpacesV3Props {
  onOpenBooking: (prefill?: { serviceId?: string; branchId?: string }) => void;
}

export const SpecializedSpacesV3: React.FC<SpecializedSpacesV3Props> = ({ onOpenBooking }) => {
  return (
    <section id="hospitalidad" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D4740] bg-emerald-100/60 px-3 py-1 rounded-full border border-emerald-200/80 inline-block mb-3">
            Espacios Únicos en República Dominicana
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight leading-tight">
            Bienestar, Recreación y Estilo de Vida
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-3 leading-relaxed">
            Diseñamos instalaciones específicas que respetan la etología y psicología de cada especie. Cero estrés para gatos y máxima diversión segura para perros.
          </p>
        </div>

        {/* 2 Flagship Experiences Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: CatHotel (Feline Sanctuary) */}
          <div className="bg-white rounded-3xl border border-stone-200 shadow-md overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all">
            <div>
              {/* Image & Badge */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=900"
                  alt="CatHotel VetMetro"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#0D4740] text-white font-bold text-xs px-3.5 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                    <Home className="w-3.5 h-3.5 text-emerald-300" />
                    <span>CatHotel • Exclusivo Felinos (Sede Paraíso)</span>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 space-y-4">
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  CatHotel: Vacaciones sin estrés sonoro
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  Los gatos sufren estrés severo con los ladridos de perros. Nuestro CatHotel está 100% aislado acústica y visualmente del área canina, equipado con feromonas calmantes <em>Feliway</em> y enriquecimiento vertical.
                </p>

                <div className="space-y-2 pt-1 text-xs text-stone-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D4740] shrink-0" />
                    <span>Suites individuales higienizadas con rascadores y camas térmicas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D4740] shrink-0" />
                    <span>Supervisión médica diaria por veterinarios especialistas en medicina felina</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D4740] shrink-0" />
                    <span>Fotos y videos diarios enviados a tu WhatsApp mientras viajas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="p-6 sm:p-8 pt-0 flex items-center justify-between gap-3 border-t border-stone-100">
              <span className="text-xs font-semibold text-stone-500">Cupos limitados por temporada</span>
              <button
                onClick={() => onOpenBooking({ serviceId: 'cattel', branchId: 'paraiso' })}
                className="py-2.5 px-4 rounded-xl bg-[#0D4740] hover:bg-[#083630] text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Reservar Suite Felina</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: VetMetroPark (Canine Outdoor Daycare) */}
          <div className="bg-white rounded-3xl border border-stone-200 shadow-md overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all">
            <div>
              {/* Image & Badge */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=900"
                  alt="VetMetroPark Canino"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#B85D42] text-white font-bold text-xs px-3.5 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-amber-200" />
                    <span>VetMetroPark • Recreación (Arroyo Hondo)</span>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 space-y-4">
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  VetMetroPark: Socialización y ejercicio seguro
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  Más de 600 m² de grama natural y áreas cercadas para que tu perro corra, socialice y queme energía bajo la atenta mirada de entrenadores y cuidadores certificados.
                </p>

                <div className="space-y-2 pt-1 text-xs text-stone-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B85D42] shrink-0" />
                    <span>Grupos divididos por tamaño, edad y nivel de energía</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B85D42] shrink-0" />
                    <span>Obstáculos de agilidad, zonas de sombra y piscinas refrescantes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B85D42] shrink-0" />
                    <span>Filtro de vacunas y desparasitación estricto para proteger la salud comunitaria</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="p-6 sm:p-8 pt-0 flex items-center justify-between gap-3 border-t border-stone-100">
              <span className="text-xs font-semibold text-stone-500">Daycare & Pases mensuales</span>
              <button
                onClick={() => onOpenBooking({ serviceId: 'vetmetropark', branchId: 'arroyo-hondo' })}
                className="py-2.5 px-4 rounded-xl bg-[#B85D42] hover:bg-[#9B4C35] text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Consultar Pases Park</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Grooming & Pet Spa Banner */}
        <div className="bg-gradient-to-r from-[#0D4740] to-[#083630] rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-400/30">
              <Scissors className="w-3.5 h-3.5" />
              <span>Grooming & Spa Clínico</span>
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
              Cuidado dermatológico con secado silencioso de bajo estrés
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              No es solo estética: cada baño incluye revisión de piel por auxiliares veterinarios, corte de uñas higiénico, limpieza ótica y champús hipoalergénicos certificados.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenBooking({ serviceId: 'grooming-spa' })}
              className="w-full sm:w-auto py-3 px-5 rounded-xl bg-white hover:bg-stone-100 text-[#0D4740] font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              Agendar Turno de Grooming
            </button>

            <a
              href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hola%20VetMetro,%20quisiera%20agendar%20un%20baño/grooming%20para%20mi%20mascota`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Preguntar por WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
