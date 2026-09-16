import React, { useState } from 'react';
import { Calendar, Phone, MessageCircle, ShieldCheck, CheckCircle2, ArrowRight, Clock, Sparkles } from 'lucide-react';
import { CLINIC_INFO, BRANCHES } from '../../data/veterinariaData';

interface QuickBookingV2Props {
  onOpenBooking: () => void;
}

export const QuickBookingV2: React.FC<QuickBookingV2Props> = ({ onOpenBooking }) => {
  const [petName, setPetName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('consulta-general');
  const [branch, setBranch] = useState('paraiso');

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const branchObj = BRANCHES.find((b) => b.id === branch);
    const branchName = branchObj ? branchObj.name : 'VetMetro';
    const text = `Hola VetMetro RD! Deseo solicitar cita para mi mascota ${petName || ''}. Sede preferida: ${branchName}. Teléfono de contacto: ${phone || 'el de este chat'}.`;
    window.open(`https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0B4F4F] to-[#073636] text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Value proposition */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              Atención Personalizada
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
              Permítenos cuidar de tu consentido con la atención que merece
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Sin trámites complicados. Solicita tu turno en 30 segundos y recibe la confirmación con fecha, hora y recordatorio directo en tu WhatsApp.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Confirmación rápida por nuestras coordinadoras médicas</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Guardia de emergencias activa 24 horas en Ensanche Paraíso</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Instalaciones climatizadas y parqueo con seguridad</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={`tel:${CLINIC_INFO.phoneEmergency}`}
                className="px-5 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Llamar a Urgencias: {CLINIC_INFO.phoneEmergency}</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="px-5 py-3 rounded-xl bg-white hover:bg-stone-100 text-[#0B4F4F] font-bold text-xs flex items-center gap-2 transition-all shadow-md cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Ver Calendario Completo</span>
              </button>
            </div>
          </div>

          {/* Right: Quick Request Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 text-stone-900 shadow-xl border border-stone-200">
              
              <div className="border-b border-stone-100 pb-4 mb-5">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                  Solicitud Rápida por WhatsApp
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Envía los datos de tu mascota y coordinamos el horario ideal para ti.
                </p>
              </div>

              <form onSubmit={handleSendWhatsApp} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Nombre de tu mascota
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Max, Luna, Toby"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    className="w-full py-2.5 px-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Sede deseada
                    </label>
                    <select
                      value={branch}
                      onChange={(e) => setBranch(e.target.value)}
                      className="w-full py-2.5 px-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    >
                      <option value="paraiso">Ensanche Paraíso (24/7)</option>
                      <option value="arroyo-hondo">Arroyo Hondo</option>
                      <option value="gazcue">Gazcue</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Servicio o Motivo
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full py-2.5 px-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                    >
                      <option value="consulta">Consulta Médica General</option>
                      <option value="vacunas">Vacunación / Desparasitación</option>
                      <option value="grooming">Grooming & Spa</option>
                      <option value="cattel">CatHotel / Hospedaje</option>
                      <option value="cirugia">Cirugía / Procedimiento</option>
                      <option value="urgencia">Urgencia Médica</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Tu número de contacto
                  </label>
                  <input
                    type="tel"
                    placeholder="Ej. (809) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full py-2.5 px-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar y Coordinar por WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <p className="text-[11px] text-center text-stone-500 mt-3">
                Respuesta directa por el equipo de recepción de VetMetro Santo Domingo.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
