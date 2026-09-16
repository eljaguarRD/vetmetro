import React, { useState } from 'react';
import { Activity, ShieldCheck, Stethoscope, Scan, FlaskConical, HeartPulse, Home, Heart, Scissors, Calendar, MessageCircle, ArrowRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../../data/veterinariaData';

interface ClinicalHospitalityHubV3Props {
  onOpenBooking: (prefill?: { serviceId?: string; branchId?: string }) => void;
}

export const ClinicalHospitalityHubV3: React.FC<ClinicalHospitalityHubV3Props> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'medicina' | 'bienestar'>('medicina');

  return (
    <section id="servicios" className="py-16 sm:py-24 bg-[#FBF9F5] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D4740] bg-emerald-100/60 px-3 py-1 rounded-full border border-emerald-200/80 inline-block mb-3">
              Infraestructura & Servicios Médicos
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight leading-tight">
              Hospital de Especialidades & Bienestar Integral
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2.5 leading-relaxed">
              Equipamiento clínico de precisión diagnóstica combinado con espacios diseñados para respetar el bienestar animal y reducir el estrés de tu consentido.
            </p>
          </div>

          {/* Clean Segmented Tab Switcher */}
          <div className="bg-stone-200/80 p-1.5 rounded-2xl flex items-center gap-1 shrink-0 border border-stone-300/80">
            <button
              onClick={() => setActiveTab('medicina')}
              className={`py-2.5 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'medicina'
                  ? 'bg-[#0D4740] text-white shadow-sm'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>Medicina & Quirófano (4)</span>
            </button>

            <button
              onClick={() => setActiveTab('bienestar')}
              className={`py-2.5 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'bienestar'
                  ? 'bg-[#0D4740] text-white shadow-sm'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Espacios Exclusivos (3)</span>
            </button>
          </div>
        </div>

        {/* TAB 1: MEDICINA Y QUIRÓFANO */}
        {activeTab === 'medicina' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-300">
            
            {/* Card 1: Laboratorio In-House 20 min */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#0D4740] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FlaskConical className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-800 bg-emerald-100/60 px-2 py-0.5 rounded-md">
                    Resultados en 20 Minutos
                  </span>
                  <h3 className="font-serif text-xl font-bold text-stone-900 mt-2">
                    Laboratorio In-House
                  </h3>
                  <p className="text-stone-600 text-xs mt-1.5 leading-relaxed">
                    Hemograma completo, química hepática, renal y pruebas rápidas de ehrlichia sin intermediarios ni demoras externas.
                  </p>
                </div>
                <div className="text-[11px] text-stone-500 font-medium pt-2 border-t border-stone-100">
                  ⚡ Diagnóstico rápido en momentos críticos
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[11px] text-stone-400 font-semibold">Sede Paraíso</span>
                <button
                  onClick={() => onOpenBooking({ serviceId: 'consulta-general' })}
                  className="text-xs font-bold text-[#0D4740] hover:text-[#083630] flex items-center gap-1 cursor-pointer"
                >
                  <span>Consultar</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 2: Quirófano de Presión Positiva */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-teal-900 bg-teal-100/60 px-2 py-0.5 rounded-md">
                    Anestesia Inhalatoria
                  </span>
                  <h3 className="font-serif text-xl font-bold text-stone-900 mt-2">
                    Quirófano Estéril
                  </h3>
                  <p className="text-stone-600 text-xs mt-1.5 leading-relaxed">
                    Cirugías de tejidos blandos, traumatología y esterilizaciones con monitoreo multiparamétrico (ECG, capnografía, SpO2).
                  </p>
                </div>
                <div className="text-[11px] text-stone-500 font-medium pt-2 border-t border-stone-100">
                  🛡️ Protocolos de anestesia segura por peso y edad
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[11px] text-stone-400 font-semibold">Sede Paraíso</span>
                <button
                  onClick={() => onOpenBooking({ serviceId: 'cirugia-especializada' })}
                  className="text-xs font-bold text-[#0D4740] hover:text-[#083630] flex items-center gap-1 cursor-pointer"
                >
                  <span>Evaluar</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 3: Radiología Digital & Ecografía */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Scan className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-cyan-900 bg-cyan-100/60 px-2 py-0.5 rounded-md">
                    Imágenes de Alta Definición
                  </span>
                  <h3 className="font-serif text-xl font-bold text-stone-900 mt-2">
                    Rayos X & Doppler
                  </h3>
                  <p className="text-stone-600 text-xs mt-1.5 leading-relaxed">
                    Evaluación osteoarticular, cuerpos extraños, ecografía abdominal y control fetal con entrega directa a tu teléfono.
                  </p>
                </div>
                <div className="text-[11px] text-stone-500 font-medium pt-2 border-t border-stone-100">
                  📱 Placas enviadas a tu WhatsApp al instante
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[11px] text-stone-400 font-semibold">Paraíso & A. Hondo</span>
                <button
                  onClick={() => onOpenBooking({ serviceId: 'diagnostico-imagenes' })}
                  className="text-xs font-bold text-[#0D4740] hover:text-[#083630] flex items-center gap-1 cursor-pointer"
                >
                  <span>Citar</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 4: Hospitalización & UCI 24/7 */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-rose-800 bg-rose-100/60 px-2 py-0.5 rounded-md">
                    Guardia Permanente
                  </span>
                  <h3 className="font-serif text-xl font-bold text-stone-900 mt-2">
                    Hospitalización & UCI
                  </h3>
                  <p className="text-stone-600 text-xs mt-1.5 leading-relaxed">
                    Caniles climatizados separados para perros y gatos, oxigenoterapia, bombas de infusión y reportes diarios a la familia.
                  </p>
                </div>
                <div className="text-[11px] text-stone-500 font-medium pt-2 border-t border-stone-100">
                  🩺 Médico veterinario presencial 24h
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[11px] text-stone-400 font-semibold">Sede Paraíso</span>
                <button
                  onClick={() => onOpenBooking({ serviceId: 'urgencias-24-7' })}
                  className="text-xs font-bold text-rose-700 hover:text-rose-800 flex items-center gap-1 cursor-pointer"
                >
                  <span>Ver Guardia</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: BIENESTAR Y ESPACIOS EXCLUSIVOS */}
        {activeTab === 'bienestar' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
            
            {/* 1. CatHotel */}
            <div className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div className="h-48 overflow-hidden relative bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800"
                    alt="CatHotel VetMetro"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#0D4740] text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs">
                    <Home className="w-3 h-3 text-emerald-300" />
                    <span>CatHotel • Exclusivo Gatos</span>
                  </span>
                </div>

                <div className="p-6 space-y-2.5">
                  <h3 className="font-serif text-xl font-bold text-stone-900">
                    CatHotel Feli-Friendly
                  </h3>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    Aislado acústicamente del área de perros para evitar traumas por ladridos. Equipado con feromonas Feliway, rascadores y reportes diarios por WhatsApp mientras viajas.
                  </p>
                  <ul className="text-[11px] text-stone-500 space-y-1 pt-1">
                    <li>✓ Suites individuales higienizadas</li>
                    <li>✓ Supervisión médica veterinaria diaria</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenBooking({ serviceId: 'cattel', branchId: 'paraiso' })}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#0D4740] hover:bg-[#083630] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Reservar Suite Felina</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* 2. VetMetroPark */}
            <div className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div className="h-48 overflow-hidden relative bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=800"
                    alt="VetMetroPark Canino"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#B85D42] text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs">
                    <Heart className="w-3 h-3 text-amber-200" />
                    <span>VetMetroPark • Arroyo Hondo</span>
                  </span>
                </div>

                <div className="p-6 space-y-2.5">
                  <h3 className="font-serif text-xl font-bold text-stone-900">
                    Parque Canino & Daycare
                  </h3>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    Más de 600 m² de grama natural y zonas seguras para correr, socializar y entrenar agilidad con supervisión experta y filtro estricto de vacunas.
                  </p>
                  <ul className="text-[11px] text-stone-500 space-y-1 pt-1">
                    <li>✓ Grupos divididos por tamaño y energía</li>
                    <li>✓ Zonas de sombra y albercas refrescantes</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenBooking({ serviceId: 'vetmetropark', branchId: 'arroyo-hondo' })}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#B85D42] hover:bg-[#9B4C35] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Pases de Recreación</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* 3. Grooming & Spa */}
            <div className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div className="h-48 overflow-hidden relative bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800"
                    alt="Grooming Spa VetMetro"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-stone-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs">
                    <Scissors className="w-3 h-3 text-emerald-300" />
                    <span>Grooming & Estética Clínica</span>
                  </span>
                </div>

                <div className="p-6 space-y-2.5">
                  <h3 className="font-serif text-xl font-bold text-stone-900">
                    Spa Dermatológico
                  </h3>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    Baños con champú hipoalergénico medicado, cortes de raza, limpieza de oídos y secadores silenciosos diseñados para evitar el estrés y la ansiedad.
                  </p>
                  <ul className="text-[11px] text-stone-500 space-y-1 pt-1">
                    <li>✓ Revisión de piel y orejas en cada sesión</li>
                    <li>✓ Corte higiénico y limado de uñas</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenBooking({ serviceId: 'grooming-spa' })}
                  className="w-full py-2.5 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Agendar Baño / Spa</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
