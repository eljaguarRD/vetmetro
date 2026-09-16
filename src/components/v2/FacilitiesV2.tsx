import React from 'react';
import { ShieldCheck, Sparkles, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { CLINIC_INFO } from '../../data/veterinariaData';

interface FacilitiesV2Props {
  onOpenBooking: (prefill?: { serviceId?: string }) => void;
}

export const FacilitiesV2: React.FC<FacilitiesV2Props> = ({ onOpenBooking }) => {
  return (
    <section id="instalaciones-v2" className="py-16 sm:py-24 bg-[#FAF9F6] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B4F4F] bg-stone-200/60 px-3 py-1 rounded-full border border-stone-300">
            Espacios Exclusivos en Santo Domingo
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight mt-3">
            Diseñado pensando en su bienestar y tranquilidad
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Áreas especializadas que combinan rigurosidad médica con espacios recreativos únicos en el país.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* 1. CatHotel Feature (Large Card) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-2xs flex flex-col justify-between group">
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=1000"
                alt="CatHotel VetMetro"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-stone-900/85 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <span className="text-amber-300">🐱</span>
                <span>Exclusivo para Felinos</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                    CatHotel: Hospitalidad Felina Sin Estrés
                  </h3>
                  <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    Cero Ruido Canino
                  </span>
                </div>
                <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed">
                  Los gatos necesitan un ambiente sereno. Nuestro CatHotel cuenta con suites verticales aisladas acústicamente, difusores de feromonas calmantes (Feliway) y supervisión médica constante mientras estás de viaje.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mb-1" />
                  <span className="font-bold block">Suites Climatizadas</span>
                  <span className="text-[10px] text-stone-500">Temperatura controlada</span>
                </div>
                <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mb-1" />
                  <span className="font-bold block">Supervisión 24/7</span>
                  <span className="text-[10px] text-stone-500">Monitoreo continuo</span>
                </div>
                <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200 text-xs text-stone-700 col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mb-1" />
                  <span className="font-bold block">Reportes con Fotos</span>
                  <span className="text-[10px] text-stone-500">Vía WhatsApp diario</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking({ serviceId: 'hospedaje-cattel-park' })}
                  className="px-5 py-2.5 rounded-xl bg-[#0B4F4F] hover:bg-[#083D3D] text-white text-xs font-bold flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>Reservar Suite en CatHotel</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* 2. VetMetroPark & Grooming (Column of 2 Cards) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* VetMetroPark */}
            <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-2xs p-6 flex flex-col justify-between group flex-1">
              <div className="relative h-44 rounded-2xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800"
                  alt="VetMetroPark"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-stone-900/85 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                  🎾 VetMetroPark
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  Parque Recreativo al Aire Libre
                </h3>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  Zona verde segura para la socialización, juego y ejercicio guiado de perros, con cuidadores entrenados en comportamiento animal.
                </p>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onOpenBooking({ serviceId: 'hospedaje-cattel-park' })}
                  className="text-xs font-bold text-[#0B4F4F] hover:text-[#083D3D] flex items-center gap-1 cursor-pointer"
                >
                  <span>Conocer pases de Daycare y Hospedaje</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Grooming & Pet Spa */}
            <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-2xs p-6 flex flex-col justify-between group flex-1">
              <div className="relative h-44 rounded-2xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800"
                  alt="Grooming VetMetro"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-stone-900/85 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                  ✨ Pet Grooming & Spa
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  Estilismo Canino y Felino Profesional
                </h3>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  Baños con cosmética de alta gama hipoalergénica, corte de uñas, limpieza de oídos y cortes de raza con secado manual cuidadoso.
                </p>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onOpenBooking({ serviceId: 'grooming-spa' })}
                  className="text-xs font-bold text-[#0B4F4F] hover:text-[#083D3D] flex items-center gap-1 cursor-pointer"
                >
                  <span>Agendar turno de Peluquería</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
