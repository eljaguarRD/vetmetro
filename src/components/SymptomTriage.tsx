import React, { useState } from 'react';
import { AlertCircle, Phone, Calendar, ArrowRight, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';
import { CLINIC_INFO } from '../data/veterinariaData';
import { PetType } from '../types';

interface SymptomTriageProps {
  onOpenBooking: (prefill?: { serviceId?: string; petType?: PetType; isUrgent?: boolean }) => void;
}

interface SymptomItem {
  id: string;
  label: string;
  icon: string;
  type: 'urgente' | 'prioritario' | 'programado';
  serviceId: string;
  serviceName: string;
  recommendation: string;
}

const SYMPTOMS: SymptomItem[] = [
  {
    id: 'urg-respiratorio',
    label: 'Dificultad para respirar, colapso o asfixia',
    icon: '🚨',
    type: 'urgente',
    serviceId: 'urgencias-24-7',
    serviceName: 'Urgencias 24/7 (Sede Ensanche Paraíso)',
    recommendation: 'Atención crítica inmediata con oxigenoterapia y monitoreo continuo sin necesidad de cita previa.'
  },
  {
    id: 'urg-vomito-sangre',
    label: 'Vómitos continuos, diarrea con sangre o sospecha de tóxico',
    icon: '⚠️',
    type: 'urgente',
    serviceId: 'urgencias-24-7',
    serviceName: 'Urgencias y Hospitalización 24 Horas',
    recommendation: 'Alto riesgo de deshidratación severa o intoxicación. Traer inmediatamente a nuestro hospital en Paraíso.'
  },
  {
    id: 'prio-cojera',
    label: 'Cojera aguda, dolor al caminar o golpe traumático',
    icon: '🦴',
    type: 'prioritario',
    serviceId: 'cirugia-quirurgico',
    serviceName: 'Evaluación Traumatológica & Quirófano',
    recommendation: 'Revisión articular y radiografías digitales para descartar luxaciones o fracturas óseas.'
  },
  {
    id: 'prio-inapetencia',
    label: 'Más de 24 horas sin comer, decaimiento o fiebre',
    icon: '🥣',
    type: 'prioritario',
    serviceId: 'consulta-general',
    serviceName: 'Consulta Médica General + Laboratorio Rápido',
    recommendation: 'Examen físico y hemograma completo con resultados en 15 minutos en nuestro laboratorio in-house.'
  },
  {
    id: 'prog-grooming',
    label: 'Manto enredado, mal olor, baño medicado o corte de raza',
    icon: '🛁',
    type: 'programado',
    serviceId: 'grooming-spa',
    serviceName: 'Grooming & Pet Spa VetMetro',
    recommendation: 'Baño relajante con cosmética hipoalergénica, secado profesional sin jaulas y corte higiénico.'
  },
  {
    id: 'prog-vacunas',
    label: 'Chequeo preventivo de rutina, vacunas o desparasitación',
    icon: '💉',
    type: 'programado',
    serviceId: 'vacunacion-preventiva',
    serviceName: 'Medicina Preventiva & Inmunización',
    recommendation: 'Mantén su esquema al día con vacunas oficiales, carnet digital y examen de salud completo.'
  },
  {
    id: 'prog-hotel',
    label: 'Viaje o vacaciones: Necesito hospedaje seguro para perro o gato',
    icon: '🏨',
    type: 'programado',
    serviceId: 'hospedaje-cattel-park',
    serviceName: 'CatHotel & VetMetroPark',
    recommendation: 'Hospedaje con suites exclusivas felinas libres de ruido y parque al aire libre para caninos.'
  },
  {
    id: 'prog-dental',
    label: 'Mal aliento intenso (halitosis) o sarro en dientes',
    icon: '✨',
    type: 'programado',
    serviceId: 'odontologia-profilaxis',
    serviceName: 'Odontología & Limpieza Ultrasónica',
    recommendation: 'Profilaxis ultrasónica dental para prevenir infecciones periodontales y pérdida de piezas.'
  }
];

export const SymptomTriage: React.FC<SymptomTriageProps> = ({ onOpenBooking }) => {
  const [selectedSymptom, setSelectedSymptom] = useState<SymptomItem>(SYMPTOMS[0]);

  return (
    <section id="triaje" className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3 border border-teal-500/30">
            <Clock className="w-3.5 h-3.5" />
            Guía de Triaje Rápido
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            ¿No estás seguro de qué servicio agendar?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2.5 leading-relaxed">
            Selecciona la situación o síntoma de tu mascota y te sugerimos la prioridad y el servicio exacto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Symptom List */}
          <div className="lg:col-span-7 space-y-2.5">
            {SYMPTOMS.map((item) => {
              const isSelected = selectedSymptom.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedSymptom(item)}
                  className={`p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-slate-800 border-teal-400 shadow-md ring-2 ring-teal-500/20'
                      : 'bg-slate-800/60 border-slate-700/80 hover:bg-slate-800 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-100">
                        {item.label}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Servicio: <span className="text-teal-400 font-medium">{item.serviceName}</span>
                      </p>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full shrink-0 ${
                      item.type === 'urgente'
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                        : item.type === 'prioritario'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                    }`}
                  >
                    {item.type}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Column: Diagnostic Recommendation Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-gradient-to-b from-slate-800 to-slate-850 border border-slate-700 p-6 sm:p-7 rounded-3xl shadow-xl space-y-5">
              
              <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  Recomendación Médica
                </span>
                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                  selectedSymptom.type === 'urgente'
                    ? 'bg-rose-500 text-white'
                    : selectedSymptom.type === 'prioritario'
                    ? 'bg-amber-500 text-slate-950'
                    : 'bg-teal-500 text-slate-950'
                }`}>
                  Prioridad: {selectedSymptom.type.toUpperCase()}
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl">{selectedSymptom.icon}</span>
                  <h3 className="text-lg font-extrabold text-white">
                    {selectedSymptom.serviceName}
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-3.5 rounded-xl border border-slate-750">
                  {selectedSymptom.recommendation}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                {selectedSymptom.type === 'urgente' ? (
                  <>
                    <a
                      href={`tel:${CLINIC_INFO.phoneEmergency}`}
                      className="w-full py-3.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-rose-600/30 transition-all cursor-pointer"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Llamar a Urgencias: {CLINIC_INFO.phoneEmergency}</span>
                    </a>

                    <button
                      onClick={() => onOpenBooking({ serviceId: selectedSymptom.serviceId, isUrgent: true })}
                      className="w-full py-3 px-4 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <span>Avisar llegada a Urgencias (Paraíso 24/7)</span>
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => onOpenBooking({ serviceId: selectedSymptom.serviceId })}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-400 hover:from-teal-400 hover:to-cyan-300 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20 transition-all cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-slate-950" />
                    <span>Agendar para este síntoma</span>
                    <ArrowRight className="w-4 h-4 text-slate-950" />
                  </button>
                )}

                <p className="text-[11px] text-center text-slate-400 pt-1 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                  <span>Sede Ensanche Paraíso abierta 24/7 sin interrupción</span>
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
