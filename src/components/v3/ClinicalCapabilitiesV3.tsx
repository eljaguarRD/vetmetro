import React, { useState } from 'react';
import { Activity, ShieldCheck, Stethoscope, Scan, FlaskConical, HeartPulse, Sparkles, Calendar, MessageCircle, ChevronRight, Check } from 'lucide-react';
import { CLINIC_INFO } from '../../data/veterinariaData';

interface ClinicalCapabilitiesV3Props {
  onOpenBooking: (prefill?: { serviceId?: string }) => void;
}

interface Capability {
  id: string;
  title: string;
  short: string;
  description: string;
  highlights: string[];
  equipment: string;
  icon: any;
  serviceIdPrefill: string;
}

const CAPABILITIES: Capability[] = [
  {
    id: 'cirugia',
    title: 'Cirugía & Quirófano de Presión Positiva',
    short: 'Quirófano estéril para tejidos blandos, traumatología y procedimientos profilácticos.',
    description: 'Nuestra sala quirúrgica en Sede Paraíso cuenta con esterilización bajo estándares de medicina humana, anestesia inhalatoria por isoflurano y monitoreo hemodinámico multiparamétrico continuo.',
    highlights: [
      'Anestesia inhalatoria adaptada a edad, especie y peso',
      'Monitoreo cardíaco continuo (ECG, Capnografía, Presión Arterial y SpO2)',
      'Protocolo multimodal analgésico de cero dolor intra y postoperatorio',
      'Esterilizaciones preventivas, cirugías ortopédicas y de emergencia'
    ],
    equipment: 'Quirófano de flujo laminar • Máquina de anestesia inhalatoria • Electrobisturí de alta precisión',
    icon: Activity,
    serviceIdPrefill: 'cirugia-especializada'
  },
  {
    id: 'laboratorio',
    title: 'Laboratorio Clínico In-House (Resultados en 20 min)',
    short: 'Procesamiento inmediato de muestras sanguíneas, coprológicas y uroanálisis sin intermediarios.',
    description: 'No enviamos las muestras de tu mascota a laboratorios humanos externos. Nuestro analizador veterinario interno entrega perfiles hematológicos, bioquímica renal y hepática en 20 minutos para tomar decisiones terapéuticas sin demora.',
    highlights: [
      'Hemograma completo y frotis sanguíneo inmediato',
      'Perfil bioquímico prequirúrgico y de órganos vitales',
      'Test rápido de enfermedades transmitidas por garrapatas (Ehrlichia, Anaplasma)',
      'Test rápido de Leucemia e Inmunodeficiencia Felina (FeLV / FIV)'
    ],
    equipment: 'Analizadores hematológicos y bioquímicos IDEXX • Microscopía de alta resolución',
    icon: FlaskConical,
    serviceIdPrefill: 'consulta-general'
  },
  {
    id: 'imagenes',
    title: 'Radiología Digital Directa & Ecografía Doppler',
    short: 'Imágenes diagnósticas de alta definición con entrega inmediata a tu móvil.',
    description: 'Evaluación rápida de fracturas, cuerpos extraños gástricos, cardiopatías y patologías abdominales con mínima exposición a radiación y entrega de informe firmado por especialista.',
    highlights: [
      'Radiografía digital de tórax, abdomen y sistema osteoarticular',
      'Ecografía abdominal de alta resolución y ecocardiografía',
      'Diagnóstico precoz de gestación y control fetal',
      'Envío digital instantáneo de las placas a tu WhatsApp y correo'
    ],
    equipment: 'Equipo de Rayos X Digital Directo (DR) • Ecógrafo Doppler Color Multifrecuencia',
    icon: Scan,
    serviceIdPrefill: 'diagnostico-imagenes'
  },
  {
    id: 'hospitalizacion',
    title: 'Hospitalización & UCI con Monitoreo 24/7',
    short: 'Caniles climatizados, oxigenoterapia continua y reportes fotográficos periódicos a tutores.',
    description: 'Cuando un paciente requiere fluidoterapia intravenosa, soporte de oxígeno o vigilancia estricta postoperatoria, nuestro equipo médico de guardia permanece a su lado las 24 horas del día.',
    highlights: [
      'Bombas de infusión peristáltica para microdosificación exacta de sueros',
      'Jaulas con concentración de oxígeno para pacientes disneicos',
      'Área de hospitalización canina y felina físicamente separadas',
      'Reportes diarios con fotos y videos vía WhatsApp para tranquilidad de la familia'
    ],
    equipment: 'Bombas de infusión continua • Concentradores de O2 • Lámparas térmicas de recuperación',
    icon: HeartPulse,
    serviceIdPrefill: 'urgencias-24-7'
  },
  {
    id: 'preventiva',
    title: 'Medicina Preventiva & Planes Sanitarios Tropicales',
    short: 'Protocolos de inmunización y control parasitario adaptados al clima de República Dominicana.',
    description: 'El calor y la humedad constante de Santo Domingo exigen esquemas específicos contra garrapatas, pulgas, parásitos cardíacos (filaria) y zoonosis. Diseñamos el carnet de salud a la medida de tu mascota.',
    highlights: [
      'Vacunas Séxtuple, Rabia, KC (tos de las perreras) y Triple Felina',
      'Planes integrales contra garrapatas y prevención de filariosis',
      'Carnet sanitario oficial físico y digital',
      'Recordatorio automatizado de refuerzos por WhatsApp'
    ],
    equipment: 'Biológicos importados de cadena de frío estricta • Microchips internacionales ISO',
    icon: ShieldCheck,
    serviceIdPrefill: 'vacunacion-preventiva'
  }
];

export const ClinicalCapabilitiesV3: React.FC<ClinicalCapabilitiesV3Props> = ({ onOpenBooking }) => {
  const [activeCapId, setActiveCapId] = useState<string>('cirugia');

  const activeCap = CAPABILITIES.find((c) => c.id === activeCapId) || CAPABILITIES[0];
  const IconComponent = activeCap.icon;

  return (
    <section id="medicina" className="py-16 sm:py-24 bg-[#FBF9F5] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D4740] bg-emerald-100/60 px-3 py-1 rounded-full border border-emerald-200/80 inline-block mb-3">
            Rigor Científico & Tecnología
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight leading-tight">
            Diagnósticos Precisos. Tratamientos sin Imprevistos.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2.5 leading-relaxed">
            Invertimos en tecnología diagnóstica de última generación para evitar traslados innecesarios y ofrecer respuestas médicas certeras desde el primer minuto.
          </p>
        </div>

        {/* Clinical Capabilities Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Capability Navigation List (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            {CAPABILITIES.map((cap) => {
              const isSelected = cap.id === activeCapId;
              const CapIcon = cap.icon;

              return (
                <button
                  key={cap.id}
                  onClick={() => setActiveCapId(cap.id)}
                  className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-white border-[#0D4740] shadow-md ring-1 ring-[#0D4740]'
                      : 'bg-stone-50/80 hover:bg-white border-stone-200/90 text-stone-700'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-[#0D4740] text-emerald-200'
                          : 'bg-stone-200 text-stone-600'
                      }`}
                    >
                      <CapIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-xs sm:text-sm text-stone-900 leading-snug">
                        {cap.title}
                      </p>
                      <p className="text-[11px] text-stone-500 mt-0.5 line-clamp-1">
                        {cap.short}
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-[#0D4740] translate-x-0.5' : 'text-stone-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Showcase Panel (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 border border-stone-200 shadow-lg space-y-6">
            
            {/* Header of Active Cap */}
            <div className="flex items-start justify-between gap-4 border-b border-stone-100 pb-6">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D4740] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Capacidad Médica Activa
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-2">
                  {activeCap.title}
                </h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-[#0D4740] flex items-center justify-center shrink-0">
                <IconComponent className="w-6 h-6" />
              </div>
            </div>

            {/* Description */}
            <p className="text-stone-600 text-sm leading-relaxed">
              {activeCap.description}
            </p>

            {/* Equipment Tag */}
            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80">
              <span className="text-[10px] uppercase font-bold text-stone-500 tracking-wider block">
                Tecnología e Instrumental de Grado Clínico:
              </span>
              <p className="font-medium text-xs text-stone-800 mt-1">
                {activeCap.equipment}
              </p>
            </div>

            {/* Protocols & Highlights */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-stone-900 block">
                Protocolos Médicos Garantizados:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeCap.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                    <Check className="w-4 h-4 text-[#0D4740] shrink-0 mt-0.5" />
                    <span className="leading-snug">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-stone-900">¿Deseas consultar sobre este procedimiento?</p>
                <p className="text-[11px] text-stone-500">Nuestros médicos evalúan el caso de forma individualizada.</p>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={() => onOpenBooking({ serviceId: activeCap.serviceIdPrefill })}
                  className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-[#0D4740] hover:bg-[#083630] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Agendar Evaluación</span>
                </button>

                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hola%20VetMetro,%20deseo%20hacer%20una%20consulta%20sobre%20${encodeURIComponent(activeCap.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-stone-300 hover:border-emerald-600 hover:bg-emerald-50 text-stone-700 hover:text-emerald-900 transition-colors"
                  title="Consultar por WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-700" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
