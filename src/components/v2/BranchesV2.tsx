import React from 'react';
import { MapPin, Phone, Clock, Navigation, ShieldCheck, CheckCircle2, MessageCircle } from 'lucide-react';
import { BRANCHES, CLINIC_INFO } from '../../data/veterinariaData';

interface BranchesV2Props {
  onOpenBooking: (prefill?: { branchId?: string }) => void;
}

export const BranchesV2: React.FC<BranchesV2Props> = ({ onOpenBooking }) => {
  return (
    <section id="sedes-v2" className="py-16 sm:py-24 bg-[#FAF9F6] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B4F4F] bg-stone-200/60 px-3 py-1 rounded-full border border-stone-300">
            Cobertura en Santo Domingo
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight mt-3">
            3 Sedes Céntricas a tu Alcance
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Ubicaciones estratégicas con parqueo vigilado, acceso cómodo y la misma excelencia médica en cada centro.
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {BRANCHES.map((b) => {
            const isEmergency24 = b.id === 'paraiso';

            return (
              <div
                key={b.id}
                className={`bg-white rounded-3xl border overflow-hidden shadow-2xs flex flex-col justify-between transition-all duration-200 ${
                  isEmergency24
                    ? 'border-emerald-300 ring-1 ring-emerald-500/20'
                    : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                <div>
                  {/* Photo with Badge */}
                  <div className="relative h-56 overflow-hidden bg-stone-100">
                    <img
                      src={b.image}
                      alt={b.name}
                      className="w-full h-full object-cover"
                    />
                    
                    <div className="absolute top-4 left-4">
                      {isEmergency24 ? (
                        <span className="bg-emerald-700 text-white font-bold text-xs px-3 py-1 rounded-full shadow-xs flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
                          <span>Hospital Urgencias 24/7</span>
                        </span>
                      ) : (
                        <span className="bg-stone-900/80 backdrop-blur-xs text-white font-bold text-xs px-3 py-1 rounded-full">
                          Sede Ambulatoria
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Branch Details */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-stone-900">
                        {b.name}
                      </h3>
                      <p className="text-xs text-[#0B4F4F] font-semibold mt-0.5">
                        {b.neighborhood}
                      </p>
                    </div>

                    <div className="space-y-2.5 text-xs text-stone-600">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <span className="leading-snug">{b.address}</span>
                      </div>

                      <div className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-stone-800">{b.hours}</p>
                          <p className="text-stone-500">{b.emergencyHours}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-emerald-700 shrink-0" />
                        <a href={`tel:${b.phone}`} className="font-bold text-stone-800 hover:text-[#0B4F4F]">
                          {b.phone}
                        </a>
                      </div>
                    </div>

                    {/* Features Badges */}
                    {b.features && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {b.features.map((feat, idx) => (
                          <span
                            key={idx}
                            className="bg-stone-100 text-stone-700 text-[11px] font-medium px-2.5 py-1 rounded-lg border border-stone-200/80"
                          >
                            {feat}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 pt-0 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={b.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5 text-stone-600" />
                      <span>Cómo Llegar</span>
                    </a>

                    <a
                      href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hola%20VetMetro,%20deseo%20comunicarme%20con%20la%20${encodeURIComponent(b.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center gap-1.5 border border-emerald-200 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  <button
                    onClick={() => onOpenBooking({ branchId: b.id })}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#0B4F4F] hover:bg-[#083D3D] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
                  >
                    <span>Agendar en esta Sede</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Centralized Phone Notice */}
        <div className="mt-12 bg-white rounded-3xl border border-stone-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-serif font-bold text-base text-stone-900">
              Central Telefónica Única: {CLINIC_INFO.phone}
            </p>
            <p className="text-xs text-stone-500 mt-0.5">
              Te comunicamos directamente con el departamento médico o recepción de cualquiera de nuestras 3 sedes.
            </p>
          </div>

          <a
            href={`tel:${CLINIC_INFO.phone}`}
            className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-colors"
          >
            Llamar a Central
          </a>
        </div>

      </div>
    </section>
  );
};
