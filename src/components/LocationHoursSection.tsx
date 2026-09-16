import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Check, Copy, Car, MessageCircle, ExternalLink, ShieldAlert } from 'lucide-react';
import { BRANCHES, CLINIC_INFO } from '../data/veterinariaData';

export const LocationHoursSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyAddress = (address: string, id: string) => {
    navigator.clipboard.writeText(address);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="sedes" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-teal-600 font-extrabold text-xs tracking-wider uppercase bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200/60">
            Nuestras 3 Sedes en Santo Domingo
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Ubicaciones Céntricas con Parqueo y Fácil Acceso
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Visítanos en Ensanche Paraíso (Hospital y Urgencias 24/7), Arroyo Hondo o Gazcue. Parqueo cómodo y seguridad garantizada.
          </p>
        </div>

        {/* 3 Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRANCHES.map((branch) => (
            <div
              key={branch.id}
              className={`bg-slate-50 rounded-3xl border p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ${
                branch.is24h
                  ? 'border-teal-300 ring-2 ring-teal-500/10 bg-gradient-to-b from-teal-50/40 to-slate-50'
                  : 'border-slate-200'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md inline-block ${
                      branch.is24h
                        ? 'bg-rose-500 text-white animate-pulse'
                        : 'bg-teal-100 text-teal-800'
                    }`}>
                      {branch.is24h ? 'Hospital 24/7 Urgencias' : 'Sede de Consulta & Spa'}
                    </span>
                    <h3 className="text-lg font-extrabold text-slate-900 mt-2">
                      {branch.name}
                    </h3>
                  </div>

                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-xs ${
                    branch.is24h
                      ? 'bg-teal-600 text-white'
                      : 'bg-white border border-slate-200 text-teal-600'
                  }`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-700 pt-1">
                  {/* Address with copy button */}
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-bold text-slate-900 leading-snug">{branch.address}</p>
                      <p className="text-slate-500 text-[11px]">{branch.city}</p>
                    </div>
                    <button
                      onClick={() => copyAddress(branch.address, branch.id)}
                      className="text-[11px] text-slate-500 hover:text-teal-700 font-semibold flex items-center gap-1 bg-white px-2 py-1 rounded-lg border border-slate-200 cursor-pointer shrink-0"
                      title="Copiar dirección"
                    >
                      {copiedId === branch.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-700">Listo</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copiar</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">{branch.hours}</p>
                      <p className="text-[11px] text-teal-700 font-medium">{branch.emergencyHours}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-teal-600 shrink-0" />
                    <div>
                      <a href={`tel:${branch.phone}`} className="font-semibold text-slate-900 hover:text-teal-600">
                        {branch.phone}
                      </a>
                    </div>
                  </div>

                  {/* Parking */}
                  <div className="flex items-center gap-2.5 bg-white p-2.5 rounded-xl border border-slate-200/80">
                    <Car className="w-4 h-4 text-teal-600 shrink-0" />
                    <span className="text-[11px] text-slate-600 font-medium">{branch.parking}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 mt-4 border-t border-slate-200/80 flex items-center gap-2">
                <a
                  href={branch.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-teal-400" />
                  <span>Cómo Llegar (Maps)</span>
                </a>

                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hola%20VetMetro,%20deseo%20visitar%20la%20sede%20de%20${encodeURIComponent(branch.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-colors"
                  title="Escribir por WhatsApp a esta sede"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* 24/7 Emergency Callout Banner */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-rose-900 via-rose-950 to-slate-950 p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-rose-600/30 border border-rose-500/40 text-rose-400 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="font-extrabold text-base text-white">¿Emergencia Veterinaria Crítica en Santo Domingo?</h4>
              <p className="text-xs text-rose-200 mt-0.5">
                Acude directo a nuestra sede Ensanche Paraíso (C/ Manuel de Jesús Troncoso #61). No necesitas cita previa.
              </p>
            </div>
          </div>

          <a
            href={`tel:${CLINIC_INFO.phoneEmergency}`}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-xs shadow-md shadow-rose-600/30 flex items-center justify-center gap-2 shrink-0 transition-transform active:scale-95"
          >
            <Phone className="w-4 h-4" />
            <span>Llamar a Urgencias: {CLINIC_INFO.phoneEmergency}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
