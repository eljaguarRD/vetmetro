import React, { useState } from 'react';
import { Calendar, Clock, ShieldCheck, CheckCircle2, Star, Sparkles, AlertCircle, ArrowRight, HeartHandshake, Instagram, MessageCircle, MapPin } from 'lucide-react';
import { CLINIC_INFO, SERVICES, BRANCHES } from '../data/veterinariaData';
import { PetType } from '../types';

interface HeroSectionProps {
  onOpenBooking: (prefill?: { serviceId?: string; petType?: PetType; branchId?: string; date?: string }) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const [selectedPet, setSelectedPet] = useState<PetType>('perro');
  const [selectedService, setSelectedService] = useState<string>('consulta-general');
  const [selectedBranch, setSelectedBranch] = useState<string>('paraiso');
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date(Date.now() + 86400000).toISOString().split('T')[0]
  );

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking({
      serviceId: selectedService,
      petType: selectedPet,
      branchId: selectedBranch,
      date: selectedDate
    });
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-20 bg-gradient-to-b from-cyan-50/40 via-white to-slate-50 border-b border-slate-200/60">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-teal-400/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Conversion Copy & Authority */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live activity & Social Proof Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-teal-200/80 shadow-xs text-xs font-semibold text-slate-700">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span>Urgencias 24/7 en Ensanche Paraíso</span>
              <span className="text-slate-300">•</span>
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-pink-600 hover:text-pink-700 font-bold"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>+15.4K en @vetmetropolitanard</span>
              </a>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              El hospital y bienestar veterinario de confianza en{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-600">
                Santo Domingo.
              </span>
            </h1>

            {/* Subtitle / Value Proposition */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Atención médica 24/7 con quirófano y laboratorio, el mejor <strong>Grooming & Pet Spa</strong> de la ciudad, y nuestro exclusivo <strong>CatHotel</strong> con áreas de juego en <strong>VetMetroPark</strong>.
            </p>

            {/* Micro-USPs / Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>3 Sedes: Paraíso (24/7), Arroyo Hondo y Gazcue</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>CatHotel exclusivo y libre de ruidos caninos</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Parque recreativo al aire libre VetMetroPark</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Confirmación inmediata por WhatsApp</span>
              </div>
            </div>

            {/* Fast Action Buttons & Social Proof */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenBooking()}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-extrabold text-sm shadow-lg shadow-teal-600/25 flex items-center gap-2 transition-all hover:scale-[1.01] active:scale-95 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Cita en 1 Minuto</span>
              </button>

              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hola%20VetMetro,%20tengo%20una%20consulta%20para%20mi%20mascota`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md shadow-emerald-500/20 flex items-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {CLINIC_INFO.whatsappDisplay}</span>
              </a>
            </div>

            {/* Social Proof Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-6 border-t border-slate-200/80">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-xs"
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120"
                    alt="Pamela Santana"
                  />
                  <img
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-xs"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
                    alt="Carlos De la Rosa"
                  />
                  <img
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-xs"
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120"
                    alt="Laura Minaya"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-1 text-slate-900 font-bold text-sm">4.9 / 5.0</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    +1,200 familias felices en Santo Domingo
                  </p>
                </div>
              </div>

              <div className="hidden sm:block h-8 w-px bg-slate-200" />

              <div className="flex items-center gap-2 text-xs text-slate-600">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
                  RD
                </div>
                <div>
                  <p className="font-bold text-slate-900">Más de 30 años</p>
                  <p className="text-slate-500">Cuidando las mascotas de RD</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Conversion Fast Booking Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xl shadow-slate-200/60 border border-slate-200/90 relative overflow-hidden">
              
              {/* Highlight ribbon */}
              <div className="absolute top-0 right-0 bg-gradient-to-l from-teal-600 to-cyan-600 text-white text-[11px] font-black uppercase tracking-wider px-4 py-1 rounded-bl-xl shadow-xs">
                Cita Rápida Online
              </div>

              <div className="mb-5">
                <h3 className="text-xl font-extrabold text-slate-900">
                  Reserva tu cita en segundos
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Sin pago por adelantado • Confirmación por WhatsApp
                </p>
              </div>

              <form onSubmit={handleQuickSubmit} className="space-y-4">
                
                {/* 1. Pet selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    1. ¿Qué consentido viene a consulta?
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedPet('perro')}
                      className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center gap-1 cursor-pointer ${
                        selectedPet === 'perro'
                          ? 'border-teal-500 bg-teal-50/80 text-teal-950 font-bold shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 text-slate-600 bg-slate-50/50'
                      }`}
                    >
                      <span className="text-xl">🐕</span>
                      <span className="text-xs font-semibold">Perro</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedPet('gato')}
                      className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center gap-1 cursor-pointer ${
                        selectedPet === 'gato'
                          ? 'border-teal-500 bg-teal-50/80 text-teal-950 font-bold shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 text-slate-600 bg-slate-50/50'
                      }`}
                    >
                      <span className="text-xl">🐈</span>
                      <span className="text-xs font-semibold">Gato</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedPet('exotico')}
                      className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center gap-1 cursor-pointer ${
                        selectedPet === 'exotico'
                          ? 'border-teal-500 bg-teal-50/80 text-teal-950 font-bold shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 text-slate-600 bg-slate-50/50'
                      }`}
                    >
                      <span className="text-xl">🐇</span>
                      <span className="text-xs font-semibold">Exótico/Otro</span>
                    </button>
                  </div>
                </div>

                {/* 2. Service selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    2. Motivo o Servicio
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 font-medium cursor-pointer"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} (desde RD$ {s.priceFrom.toLocaleString()})
                      </option>
                    ))}
                  </select>
                </div>

                {/* 3. Branch in Santo Domingo */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    3. Selecciona tu sede en Santo Domingo
                  </label>
                  <select
                    value={selectedBranch}
                    onChange={(e) => setSelectedBranch(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 font-medium cursor-pointer"
                  >
                    {BRANCHES.map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 4. Date */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    4. Fecha deseada
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 font-medium cursor-pointer"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-extrabold text-sm shadow-md shadow-teal-600/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Continuar y Elegir Horario</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-center text-slate-500 flex items-center justify-center gap-1.5 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                  <span>Cancelación y cambio de fecha 100% gratuito</span>
                </p>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
