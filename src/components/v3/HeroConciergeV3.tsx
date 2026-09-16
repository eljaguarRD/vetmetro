import React, { useState } from 'react';
import { Calendar, MessageCircle, Phone, Sparkles, Clock, MapPin, ShieldCheck, ArrowRight, Heart, Stethoscope, Scissors, Home, AlertCircle, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO, BRANCHES } from '../../data/veterinariaData';
import { PetType } from '../../types';

interface HeroConciergeV3Props {
  onOpenBooking: (prefill?: {
    serviceId?: string;
    branchId?: string;
    petType?: PetType;
  }) => void;
  onOpenEmergency: () => void;
}

type ServiceOption = {
  id: string;
  name: string;
  icon: string;
  category: 'clinical' | 'wellness' | 'urgent';
  desc: string;
  prepTip?: string;
};

const CARE_OPTIONS: ServiceOption[] = [
  {
    id: 'consulta-general',
    name: 'Consulta Médica General',
    icon: 'Stethoscope',
    category: 'clinical',
    desc: 'Examen físico integral, signos vitales y control de peso.',
    prepTip: 'Traer cartilla de vacunación previa si es primera vez.'
  },
  {
    id: 'vacunacion-preventiva',
    name: 'Vacunas & Desparasitación',
    icon: 'ShieldCheck',
    category: 'clinical',
    desc: 'Inmunización séxtuple, rabia, KC o triple felina con biológicos certificados.',
    prepTip: 'La mascota debe estar aparentemente sana, sin fiebre.'
  },
  {
    id: 'urgencias-24-7',
    name: 'Urgencia Médica (24 Horas)',
    icon: 'AlertCircle',
    category: 'urgent',
    desc: 'Atención prioritaria inmediata de guardia permanente en Ensanche Paraíso.',
    prepTip: 'Dirígete directamente a Sede Paraíso o llama a la guardia médica.'
  },
  {
    id: 'cattel',
    name: 'CatHotel (Exclusivo Felinos)',
    icon: 'Home',
    category: 'wellness',
    desc: 'Suites individuales feli-friendly en ambiente libre de ladridos caninos.',
    prepTip: 'Esquema de vacunas al día y prueba de leucemia/inmuno recomendada.'
  },
  {
    id: 'grooming-spa',
    name: 'Grooming & Spa Dermatológico',
    icon: 'Scissors',
    category: 'wellness',
    desc: 'Baño medicado, corte de raza, limpieza de oídos y corte de uñas higiénico.',
    prepTip: 'Citas matutinas recomendadas para recogida el mismo día.'
  },
  {
    id: 'vetmetropark',
    name: 'VetMetroPark (Daycare Canino)',
    icon: 'Heart',
    category: 'wellness',
    desc: 'Parque de recreación y socialización segura al aire libre en Arroyo Hondo.',
    prepTip: 'Evaluación de temperamento y vacunas al día requeridas.'
  },
  {
    id: 'cirugia-especializada',
    name: 'Cirugía & Quirófano Estéril',
    icon: 'Stethoscope',
    category: 'clinical',
    desc: 'Esterilizaciones, tejidos blandos y ortopedia con anestesia inhalatoria.',
    prepTip: 'Requiere ayuno previo de 8 a 12 horas para exámenes prequirúrgicos.'
  }
];

export const HeroConciergeV3: React.FC<HeroConciergeV3Props> = ({
  onOpenBooking,
  onOpenEmergency
}) => {
  const [selectedPet, setSelectedPet] = useState<PetType>('perro');
  const [selectedCare, setSelectedCare] = useState<string>('consulta-general');
  const [selectedBranch, setSelectedBranch] = useState<string>('paraiso');

  const currentCareObj = CARE_OPTIONS.find((c) => c.id === selectedCare) || CARE_OPTIONS[0];
  const currentBranchObj = BRANCHES.find((b) => b.id === selectedBranch) || BRANCHES[0];

  // Quick Action: Send directly to WhatsApp with pre-filled concierge state
  const handleWhatsAppConcierge = () => {
    const petLabel = selectedPet === 'perro' ? 'Perro 🐶' : selectedPet === 'gato' ? 'Gato 🐱' : 'Mascota Exótica 🦜';
    const text = `Hola VetMetro RD! Deseo coordinar una cita desde su portal web:
• Mascota: ${petLabel}
• Motivo: ${currentCareObj.name}
• Sede de preferencia: ${currentBranchObj.name}
¿Podrían confirmarme la disponibilidad de turnos más próxima? Gracias!`;

    window.open(`https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleCalendarConcierge = () => {
    onOpenBooking({
      petType: selectedPet,
      serviceId: selectedCare,
      branchId: selectedBranch
    });
  };

  return (
    <section id="inicio" className="relative bg-[#FBF9F5] pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-stone-200/80">
      {/* Subtle organic architectural background glow */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-amber-100/30 rounded-full blur-3xl pointer-events-none -ml-40 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Trust Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200/60 text-stone-800 text-[11px] font-semibold border border-stone-300/80">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0D4740]" />
            <span>30 Años Cuidando Familias en Santo Domingo</span>
          </span>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 text-[11px] font-bold border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
            <span>Hospital 24/7 en Ensanche Paraíso</span>
          </span>

          <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-[11px] font-semibold border border-amber-200">
            ⭐ 4.9 en Google Reviews (1,240+ pacientes)
          </span>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Brand Statement & Medical Authority (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.25rem] font-normal text-stone-900 leading-[1.12] tracking-tight">
              Medicina veterinaria de precisión y{' '}
              <span className="italic font-serif text-[#0D4740]">cuidado compasivo</span> para tu consentido.
            </h1>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-xl">
              Equipos de diagnóstico avanzados, quirófano estéril con monitoreo multiparamétrico y espacios diseñados para su bienestar: desde nuestro <strong>CatHotel feli-friendly</strong> hasta el parque canino <strong>VetMetroPark</strong>.
            </p>

            {/* Quick Sede Micro-Cards */}
            <div className="grid grid-cols-3 gap-2.5 pt-2">
              <div className="p-3 rounded-2xl bg-white border border-stone-200/90 shadow-2xs">
                <span className="text-[10px] font-bold text-rose-700 uppercase tracking-wider block">Hospital 24/7</span>
                <p className="font-bold text-xs text-stone-900 mt-0.5">E. Paraíso</p>
                <p className="text-[11px] text-stone-500 mt-0.5">Troncoso #61</p>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-stone-200/90 shadow-2xs">
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">Park & Grooming</span>
                <p className="font-bold text-xs text-stone-900 mt-0.5">Arroyo Hondo</p>
                <p className="text-[11px] text-stone-500 mt-0.5">Amiama Tió #101</p>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-stone-200/90 shadow-2xs">
                <span className="text-[10px] font-bold text-stone-700 uppercase tracking-wider block">Consulta & Salud</span>
                <p className="font-bold text-xs text-stone-900 mt-0.5">Gazcue</p>
                <p className="text-[11px] text-stone-500 mt-0.5">Benito Monción</p>
              </div>
            </div>

            {/* Emergency Fast Dispatch Callout */}
            <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200/80 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-xs text-rose-950">¿Es una urgencia médica ahora mismo?</p>
                  <p className="text-[11px] text-rose-800">Médico veterinario de guardia física 24/7 en Sede Paraíso.</p>
                </div>
              </div>

              <button
                onClick={onOpenEmergency}
                className="py-2 px-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shrink-0 transition-colors cursor-pointer shadow-xs"
              >
                Atención 24h
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Concierge Care Desk (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xl shadow-stone-200/60 border border-stone-200/90 space-y-5">
              
              {/* Concierge Header */}
              <div className="border-b border-stone-100 pb-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#0D4740] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Concierge de Citas
                  </span>
                  <span className="text-xs text-stone-400 font-medium">Paso 1 de 2</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mt-1.5">
                  ¿Cómo podemos cuidar a tu mascota hoy?
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Selecciona especie, motivo de visita y sede para coordinar sin esperas innecesarias.
                </p>
              </div>

              {/* Step 1: Pet Type Selection */}
              <div>
                <label className="block text-xs font-bold text-stone-800 mb-2 uppercase tracking-wider text-[11px]">
                  1. Paciente
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedPet('perro')}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      selectedPet === 'perro'
                        ? 'bg-[#0D4740] text-white border-[#0D4740] shadow-sm'
                        : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                    }`}
                  >
                    <span>🐕</span>
                    <span>Canino (Perro)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPet('gato')}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      selectedPet === 'gato'
                        ? 'bg-[#0D4740] text-white border-[#0D4740] shadow-sm'
                        : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                    }`}
                  >
                    <span>🐈</span>
                    <span>Felino (Gato)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPet('exotico')}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      selectedPet === 'exotico'
                        ? 'bg-[#0D4740] text-white border-[#0D4740] shadow-sm'
                        : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                    }`}
                  >
                    <span>🦜</span>
                    <span>Exótico / Otro</span>
                  </button>
                </div>
              </div>

              {/* Step 2: Care Reason */}
              <div>
                <label className="block text-xs font-bold text-stone-800 mb-2 uppercase tracking-wider text-[11px]">
                  2. Tipo de Atención o Cuidado
                </label>
                <select
                  value={selectedCare}
                  onChange={(e) => setSelectedCare(e.target.value)}
                  className="w-full py-3 px-3.5 rounded-xl bg-stone-50 border border-stone-300 text-stone-900 text-xs font-semibold focus:ring-2 focus:ring-[#0D4740] focus:outline-none transition-all"
                >
                  <optgroup label="Salud & Medicina">
                    <option value="consulta-general">Consulta Médica General & Preventiva</option>
                    <option value="vacunacion-preventiva">Vacunación & Desparasitación</option>
                    <option value="urgencias-24-7">🚨 Urgencias 24/7 (Guardia Paraíso)</option>
                    <option value="cirugia-especializada">Cirugía & Procedimientos Quirúrgicos</option>
                  </optgroup>
                  <optgroup label="Bienestar & Estilo de Vida">
                    <option value="cattel">CatHotel (Hospedaje Felino Exclusivo)</option>
                    <option value="grooming-spa">Grooming, Baño Terapéutico & Spa</option>
                    <option value="vetmetropark">VetMetroPark (Parque Canino & Daycare)</option>
                  </optgroup>
                </select>
              </div>

              {/* Step 3: Branch Selection */}
              <div>
                <label className="block text-xs font-bold text-stone-800 mb-2 uppercase tracking-wider text-[11px]">
                  3. Sede de tu Preferencia en Santo Domingo
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {BRANCHES.map((b) => (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setSelectedBranch(b.id)}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedBranch === b.id
                          ? 'bg-emerald-50/90 border-[#0D4740] ring-1 ring-[#0D4740]'
                          : 'bg-stone-50/70 hover:bg-stone-100/80 border-stone-200'
                      }`}
                    >
                      <p className="font-bold text-xs text-stone-900 truncate">
                        {b.id === 'paraiso' ? 'Paraíso' : b.id === 'arroyo-hondo' ? 'A. Hondo' : 'Gazcue'}
                      </p>
                      <p className="text-[10px] text-stone-500 truncate mt-0.5">
                        {b.id === 'paraiso' ? 'Abierto 24/7' : '8am - 7pm'}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Concierge Recommendation Card */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/90 space-y-2">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#0D4740] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="font-bold text-xs text-stone-900">
                      {currentCareObj.name} en {currentBranchObj.name}
                    </p>
                    <p className="text-xs text-stone-600 mt-0.5 leading-snug">
                      {currentCareObj.desc}
                    </p>
                    {currentCareObj.prepTip && (
                      <p className="text-[11px] text-[#0D4740] font-medium mt-1">
                        💡 <strong>Recomendación médica:</strong> {currentCareObj.prepTip}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons: 2 frictionless paths */}
              <div className="space-y-2.5 pt-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {/* Digital Calendar Booking */}
                  <button
                    onClick={handleCalendarConcierge}
                    className="w-full py-3.5 px-4 rounded-xl bg-[#0D4740] hover:bg-[#083630] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-emerald-300" />
                    <span>Agendar en Calendario</span>
                  </button>

                  {/* WhatsApp Pre-loaded instant booking */}
                  <button
                    onClick={handleWhatsAppConcierge}
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enviar a WhatsApp Directo</span>
                  </button>
                </div>

                <p className="text-[11px] text-center text-stone-400">
                  Sin pagos por adelantado requeridos • Confirmación directa del equipo de recepción
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
