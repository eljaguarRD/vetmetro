import React, { useState } from 'react';
import { Phone, MapPin, Navigation, Clock, AlertTriangle, ShieldAlert, HeartPulse, CheckCircle2, ChevronRight, X } from 'lucide-react';
import { CLINIC_INFO, BRANCHES } from '../../data/veterinariaData';

interface EmergencyBarV3Props {
  isEmergencyModalOpen: boolean;
  onCloseEmergencyModal: () => void;
  onOpenEmergencyModal: () => void;
}

export const EmergencyBarV3: React.FC<EmergencyBarV3Props> = ({
  isEmergencyModalOpen,
  onCloseEmergencyModal,
  onOpenEmergencyModal
}) => {
  const paraiso = BRANCHES.find((b) => b.id === 'paraiso') || BRANCHES[0];

  return (
    <>
      {/* Static In-Page Emergency Section Anchor */}
      <section id="urgencias" className="py-12 bg-gradient-to-b from-[#1C0A0A] to-[#120707] text-white border-y border-rose-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Emergency Status & Authority */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-rose-500 animate-ping" />
                <span className="text-xs uppercase font-bold tracking-widest text-rose-400">
                  Protocolo Hospitalario Permanente
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight">
                Urgencias Veterinarias 24 Horas / 365 Días
              </h2>

              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                En momentos críticos, cada minuto cuenta. Nuestra <strong>Sede Ensanche Paraíso</strong> cuenta con médico veterinario cirujano presencial de guardia, quirófano listo, concentración de oxígeno y terapia intensiva ininterrumpida.
              </p>

              {/* Crucial location notice */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-stone-300 pt-1">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>C/ Manuel de Jesús Troncoso #61, Ensanche Paraíso</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Sin cita previa requerida para urgencias vitales</span>
                </div>
              </div>
            </div>

            {/* Right: Instant Emergency Actions */}
            <div className="lg:col-span-5 bg-rose-950/40 p-6 rounded-3xl border border-rose-800/60 backdrop-blur-sm space-y-3.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-300 block">
                Atención Médica Inmediata
              </span>

              <a
                href={`tel:${CLINIC_INFO.phoneEmergency}`}
                className="w-full py-3.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-rose-950/50 transition-all cursor-pointer"
              >
                <Phone className="w-5 h-5 animate-bounce" />
                <span>Llamar a Guardia: {CLINIC_INFO.phoneEmergency}</span>
              </a>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={`https://waze.com/ul?q=${encodeURIComponent('Clinica Veterinaria Metropolitana Manuel de Jesus Troncoso 61 Santo Domingo')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-200 hover:text-white font-bold text-xs flex items-center justify-center gap-2 border border-stone-700 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Ruta en Waze</span>
                </a>

                <a
                  href={paraiso.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-200 hover:text-white font-bold text-xs flex items-center justify-center gap-2 border border-stone-700 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>Google Maps</span>
                </a>
              </div>

              <button
                onClick={onOpenEmergencyModal}
                className="w-full text-center text-xs font-semibold text-rose-300 hover:text-rose-200 pt-1 cursor-pointer flex items-center justify-center gap-1"
              >
                <span>Ver guía: ¿Qué hacer en el trayecto mientras llegas?</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Interactive Emergency Triage Modal / Drawer */}
      {isEmergencyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-[#180A0A] text-white border border-rose-700/80 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden">
            
            {/* Top Close */}
            <button
              onClick={onCloseEmergencyModal}
              className="absolute top-5 right-5 p-2 rounded-full bg-stone-900 text-stone-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4" />
                <span>Protocolo de Emergencias • Sede Paraíso 24/7</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Guía Médica de Primeros Auxilios en Traslado
              </h3>
              <p className="text-xs text-stone-400">
                Mantén la calma. Sigue estas pautas mientras te trasladas hacia la C/ Manuel de Jesús Troncoso #61.
              </p>
            </div>

            {/* 4 Emergency Scenarios */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-stone-900/90 border border-stone-800 space-y-1">
                <p className="font-bold text-rose-300 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Convulsiones o Temblores</span>
                </p>
                <p className="text-stone-400 text-[11px] leading-relaxed">
                  No intentes abrirle el hocico ni meter las manos. Aleja esquinas y objetos duros. Atenúa las luces y coloca una toalla bajo su cabeza.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-stone-900/90 border border-stone-800 space-y-1">
                <p className="font-bold text-amber-300 flex items-center gap-1.5">
                  <HeartPulse className="w-3.5 h-3.5" />
                  <span>Golpe de Calor o Ahogo</span>
                </p>
                <p className="text-stone-400 text-[11px] leading-relaxed">
                  Enciende el A/C del carro al máximo. Humedece sus almohadillas con agua a temperatura ambiente. NUNCA uses agua con hielo directo.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-stone-900/90 border border-stone-800 space-y-1">
                <p className="font-bold text-rose-300 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Ingesta de Veneno o Tóxico</span>
                </p>
                <p className="text-stone-400 text-[11px] leading-relaxed">
                  NO induzcas el vómito sin indicación veterinaria. Toma una foto del envase o llévalo contigo para identificar el antídoto específico.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-stone-900/90 border border-stone-800 space-y-1">
                <p className="font-bold text-cyan-300 flex items-center gap-1.5">
                  <HeartPulse className="w-3.5 h-3.5" />
                  <span>Trauma, Caída o Atropello</span>
                </p>
                <p className="text-stone-400 text-[11px] leading-relaxed">
                  Desplaza a la mascota sobre una tabla o toalla estirada para mantener la columna alineada. Cubre heridas abiertas con tela limpia.
                </p>
              </div>
            </div>

            {/* Direct Actions in Modal */}
            <div className="pt-2 space-y-3">
              <a
                href={`tel:${CLINIC_INFO.phoneEmergency}`}
                className="w-full py-3.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Avisar al Médico de Guardia que Vas en Camino ({CLINIC_INFO.phoneEmergency})</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`https://waze.com/ul?q=${encodeURIComponent('Clinica Veterinaria Metropolitana Manuel de Jesus Troncoso 61 Santo Domingo')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-200 text-xs font-bold text-center border border-stone-700"
                >
                  Abrir Waze Directo
                </a>

                <button
                  onClick={onCloseEmergencyModal}
                  className="py-2.5 px-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-bold text-center cursor-pointer"
                >
                  Entendido, cerrar
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
