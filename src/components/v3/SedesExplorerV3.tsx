import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, ShieldCheck, Check, MessageCircle, Calendar, Sparkles, Building2, Car } from 'lucide-react';
import { BRANCHES, CLINIC_INFO } from '../../data/veterinariaData';

interface SedesExplorerV3Props {
  onOpenBooking: (prefill?: { branchId?: string }) => void;
}

export const SedesExplorerV3: React.FC<SedesExplorerV3Props> = ({ onOpenBooking }) => {
  const [activeBranchId, setActiveBranchId] = useState<string>('paraiso');

  const activeBranch = BRANCHES.find((b) => b.id === activeBranchId) || BRANCHES[0];

  return (
    <section id="sedes" className="py-16 sm:py-24 bg-[#F5F2EC] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D4740] bg-emerald-100/60 px-3 py-1 rounded-full border border-emerald-200/80 inline-block mb-3">
            Infraestructura Médica en Santo Domingo
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight leading-tight">
            Tres Sedes Estratégicas Diseñadas para su Tranquilidad
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2.5 leading-relaxed">
            Cada sede cuenta con consultorios climatizados, farmacia especializada y parqueo vigilado. Elige la ubicación que mejor se adapte a tu rutina.
          </p>
        </div>

        {/* Sede Switcher Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {BRANCHES.map((b) => {
            const isSelected = b.id === activeBranchId;
            const is24h = b.id === 'paraiso';

            return (
              <button
                key={b.id}
                onClick={() => setActiveBranchId(b.id)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#0D4740] shadow-md ring-1 ring-[#0D4740]'
                    : 'bg-stone-200/60 hover:bg-white/80 border-stone-300/80 text-stone-700'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-serif font-bold text-base text-stone-900">
                    {b.id === 'paraiso' ? 'Sede Paraíso' : b.id === 'arroyo-hondo' ? 'Sede Arroyo Hondo' : 'Sede Gazcue'}
                  </span>
                  {is24h ? (
                    <span className="bg-rose-100 text-rose-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      24/7 Urgencias
                    </span>
                  ) : (
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Ambulatoria
                    </span>
                  )}
                </div>

                <p className="text-xs text-stone-500 mt-1 truncate">
                  {b.neighborhood}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Branch Featured Bento Card */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all">
          
          {/* Left: Photo & Highlight Badges (5 cols) */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-stone-100">
            <img
              src={activeBranch.image}
              alt={activeBranch.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
            
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {activeBranch.id === 'paraiso' ? (
                <span className="bg-rose-600 text-white font-bold text-xs px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-200 animate-ping" />
                  <span>Hospital Central y Quirófano 24/7</span>
                </span>
              ) : activeBranch.id === 'arroyo-hondo' ? (
                <span className="bg-[#0D4740] text-white font-bold text-xs px-3 py-1.5 rounded-xl shadow-sm">
                  Grooming Spa & VetMetroPark
                </span>
              ) : (
                <span className="bg-[#0D4740] text-white font-bold text-xs px-3 py-1.5 rounded-xl shadow-sm">
                  Medicina Preventiva & Familia
                </span>
              )}
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white lg:hidden">
              <p className="font-serif text-xl font-bold">{activeBranch.name}</p>
              <p className="text-xs text-stone-200">{activeBranch.address}</p>
            </div>
          </div>

          {/* Right: Technical Specs & Conversion (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            
            <div>
              <div className="hidden lg:block">
                <span className="text-xs uppercase tracking-wider font-bold text-[#0D4740]">
                  {activeBranch.neighborhood}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                  {activeBranch.name}
                </h3>
              </div>

              {/* Core Information Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-xs text-stone-700">
                <div className="space-y-1 p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <span className="font-bold text-stone-900 flex items-center gap-1.5 text-xs">
                    <MapPin className="w-4 h-4 text-[#0D4740]" />
                    <span>Dirección Física</span>
                  </span>
                  <p className="text-stone-600 leading-snug">{activeBranch.address}</p>
                  <p className="text-[11px] text-stone-500 font-medium">{activeBranch.parking}</p>
                </div>

                <div className="space-y-1 p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <span className="font-bold text-stone-900 flex items-center gap-1.5 text-xs">
                    <Clock className="w-4 h-4 text-[#0D4740]" />
                    <span>Horarios de Atención</span>
                  </span>
                  <p className="text-stone-900 font-bold">{activeBranch.hours}</p>
                  <p className="text-[11px] text-stone-500">{activeBranch.emergencyHours}</p>
                </div>
              </div>

              {/* Exclusive Amenities in this Branch */}
              <div className="mt-6 space-y-2.5">
                <span className="text-[11px] uppercase font-bold tracking-wider text-stone-500 block">
                  Instalaciones y Servicios en esta Sede:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeBranch.features?.map((feat, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 text-stone-800 text-xs font-medium border border-stone-200"
                    >
                      <Check className="w-3.5 h-3.5 text-[#0D4740]" />
                      <span>{feat}</span>
                    </span>
                  ))}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-900 text-xs font-medium border border-emerald-200">
                    <Car className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Parqueo Privado Vigilado</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Multi-Action Row */}
            <div className="pt-4 border-t border-stone-100 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <button
                  onClick={() => onOpenBooking({ branchId: activeBranch.id })}
                  className="py-3 px-4 rounded-xl bg-[#0D4740] hover:bg-[#083630] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-emerald-300" />
                  <span>Agendar en esta Sede</span>
                </button>

                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hola%20VetMetro,%20deseo%20comunicarme%20con%20la%20${encodeURIComponent(activeBranch.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-bold text-xs flex items-center justify-center gap-2 border border-emerald-200 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-700" />
                  <span>WhatsApp Sede</span>
                </a>

                <a
                  href={`https://waze.com/ul?q=${encodeURIComponent(`${activeBranch.name} ${activeBranch.address} Santo Domingo`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Navigation className="w-4 h-4 text-stone-600" />
                  <span>Cómo Llegar (Waze)</span>
                </a>
              </div>

              <div className="flex items-center justify-between text-xs text-stone-500 pt-1">
                <span>Teléfono directo: <strong>{activeBranch.phone}</strong></span>
                <a
                  href={activeBranch.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline font-semibold text-[#0D4740]"
                >
                  Ver en Google Maps →
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
