import React, { useState } from 'react';
import { Calendar, Phone, ShieldCheck, MapPin, Sparkles, CheckCircle2, ArrowRight, Clock, HeartHandshake } from 'lucide-react';
import { CLINIC_INFO, BRANCHES } from '../../data/veterinariaData';
import { PetType } from '../../types';

interface HeroV2Props {
  onOpenBooking: (prefill?: { serviceId?: string; branchId?: string; petType?: PetType }) => void;
}

export const HeroV2: React.FC<HeroV2Props> = ({ onOpenBooking }) => {
  const [selectedBranch, setSelectedBranch] = useState(BRANCHES[0].id);
  const [selectedPet, setSelectedPet] = useState<PetType>('perro');
  const [selectedService, setSelectedService] = useState('consulta-general');

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking({
      branchId: selectedBranch,
      petType: selectedPet,
      serviceId: selectedService
    });
  };

  return (
    <section id="inicio" className="relative bg-[#FAF9F6] pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Subtle organic warmth glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-100/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-800 text-xs font-semibold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-serif italic font-medium text-stone-700">30 Años Cuidando Familias</span>
              <span className="text-stone-300">•</span>
              <span className="text-stone-600">3 Sedes en Santo Domingo</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-900 leading-[1.15] tracking-tight">
              Medicina veterinaria de excelencia y el cariño que tu mascota merece.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed max-w-2xl">
              Desde chequeos preventivos y estética canina, hasta hospitalización 24/7 en Ensanche Paraíso y nuestro exclusivo <strong className="text-stone-900 font-medium">CatHotel</strong>. Estamos listos para cuidar de su bienestar en todo momento.
            </p>

            {/* 3 Core Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                <div className="flex items-center gap-2 text-[#0B4F4F] font-bold text-xs">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span>Urgencias 24/7</span>
                </div>
                <p className="text-[11px] text-stone-500 mt-1">
                  Atención continua día y noche en Paraíso.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                <div className="flex items-center gap-2 text-[#0B4F4F] font-bold text-xs">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>3 Sedes Céntricas</span>
                </div>
                <p className="text-[11px] text-stone-500 mt-1">
                  Paraíso, Arroyo Hondo y Gazcue.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-stone-200/80 shadow-2xs">
                <div className="flex items-center gap-2 text-[#0B4F4F] font-bold text-xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>CatHotel & Spa</span>
                </div>
                <p className="text-[11px] text-stone-500 mt-1">
                  Espacios exclusivos y libres de estrés.
                </p>
              </div>
            </div>

            {/* Quick Action Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="px-6 py-3.5 rounded-xl bg-[#0B4F4F] hover:bg-[#083D3D] text-white font-bold text-sm flex items-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-emerald-300" />
                <span>Solicitar Cita Médica</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${CLINIC_INFO.phoneEmergency}`}
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-bold text-sm flex items-center gap-2 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-rose-600" />
                <span>Urgencia: {CLINIC_INFO.phoneEmergency}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Premium Interactive Booking Concierge Box */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl border border-stone-200/90 shadow-md p-6 sm:p-8 space-y-5 relative">
              
              {/* Card Header */}
              <div className="border-b border-stone-100 pb-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#0B4F4F] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                    Atención Inmediata
                  </span>
                  <span className="text-xs text-stone-500 font-medium">
                    Respuesta en &lt; 5 min
                  </span>
                </div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mt-2">
                  Agenda tu visita a VetMetro
                </h2>
                <p className="text-xs text-stone-500 mt-1">
                  Elige tu sede más cercana y el servicio que tu consentido necesita.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleQuickSubmit} className="space-y-4">
                
                {/* 1. Sede Selection */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1.5">
                    1. Selecciona la Sede
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {BRANCHES.map((branch) => {
                      const isSelected = selectedBranch === branch.id;
                      return (
                        <button
                          key={branch.id}
                          type="button"
                          onClick={() => setSelectedBranch(branch.id)}
                          className={`p-2.5 rounded-xl text-center text-xs font-semibold border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#0B4F4F] text-white border-[#0B4F4F] shadow-xs'
                              : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                          }`}
                        >
                          <span className="block truncate">{branch.name.replace('Sede ', '')}</span>
                          <span className="text-[9px] block opacity-80 mt-0.5">
                            {branch.id === 'paraiso' ? '24/7' : '8am - 7pm'}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Pet Type */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1.5">
                    2. ¿Qué mascota nos visitará?
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'perro' as PetType, label: 'Perro 🐕' },
                      { id: 'gato' as PetType, label: 'Gato 🐈' },
                      { id: 'otro' as PetType, label: 'Otro 🐾' }
                    ].map((pet) => (
                      <button
                        key={pet.id}
                        type="button"
                        onClick={() => setSelectedPet(pet.id)}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold border text-center transition-all cursor-pointer ${
                          selectedPet === pet.id
                            ? 'bg-emerald-50 text-[#0B4F4F] border-emerald-300 font-bold'
                            : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        {pet.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Motivo / Servicio */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1.5">
                    3. Motivo de la Cita
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full py-2.5 px-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 text-xs font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  >
                    <option value="consulta-general">Consulta Médica General & Chequeo</option>
                    <option value="vacunacion-preventiva">Vacunación & Desparasitación</option>
                    <option value="grooming-spa">Grooming & Pet Spa</option>
                    <option value="hospedaje-cattel-park">CatHotel & VetMetroPark (Hospedaje)</option>
                    <option value="diagnostico-imagenes">Laboratorio & Imágenes (Rayos X / Eco)</option>
                    <option value="cirugia-quirurgico">Cirugía & Procedimientos Quirúrgicos</option>
                    <option value="urgencias-24-7">Urgencia Médica Inmediata</option>
                  </select>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#0B4F4F] hover:bg-[#083D3D] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-emerald-300" />
                  <span>Continuar y Confirmar Cita</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Footnote reassurance */}
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Sin pagos adelantados</span>
                </span>
                <span>Confirmación vía WhatsApp</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
