import React from 'react';
import { Phone, MapPin, Clock, Calendar, MessageCircle, Instagram, Facebook, ShieldCheck, Heart, AlertCircle } from 'lucide-react';
import { CLINIC_INFO, BRANCHES } from '../../data/veterinariaData';

interface FooterV3Props {
  onOpenBooking: () => void;
  onOpenEmergency: () => void;
}

export const FooterV3: React.FC<FooterV3Props> = ({ onOpenBooking, onOpenEmergency }) => {
  return (
    <footer className="bg-[#0A1A17] text-stone-300 pt-16 pb-12 border-t border-emerald-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800/80">
          
          {/* Col 1: Institutional & 24h Authority (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-[#0D4740] text-emerald-200 flex items-center justify-center font-serif text-xl font-bold border border-emerald-700/50">
                VM
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-white tracking-tight">
                  VetMetro RD
                </span>
                <p className="text-[10px] tracking-wider uppercase text-emerald-400 font-semibold">
                  Clínica Veterinaria Metropolitana • Desde 1994
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Institución médica veterinaria privada en Santo Domingo. Dedicados a la medicina preventiva, diagnóstico avanzado, cirugía especializada y hospital de urgencias 24 horas.
            </p>

            {/* Permanent Emergency Banner */}
            <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-900/60 space-y-2.5">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                <span>Hospital Urgencias 24/7</span>
              </div>
              <p className="text-xs text-stone-300">
                Sede Ensanche Paraíso abierta de forma ininterrumpida los 365 días del año.
              </p>
              <button
                onClick={onOpenEmergency}
                className="w-full py-2 px-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Llamar Urgencias: {CLINIC_INFO.phoneEmergency}</span>
              </button>
            </div>
          </div>

          {/* Col 2: The 3 Santo Domingo Locations (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-serif text-base font-bold text-white tracking-tight">
              Sedes en Santo Domingo
            </h4>

            <div className="space-y-3 text-xs">
              {BRANCHES.map((b) => (
                <div
                  key={b.id}
                  className="bg-stone-900/70 p-3.5 rounded-2xl border border-stone-800/80 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">{b.name}</span>
                    <span className="text-[10px] text-emerald-400 font-semibold">
                      {b.hoursShort || b.hours}
                    </span>
                  </div>

                  <div className="text-stone-400 text-[11px] flex items-start gap-1.5">
                    <MapPin className="w-3 h-3 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{b.address} ({b.parking})</span>
                  </div>

                  <div className="text-stone-400 text-[11px] flex items-center justify-between pt-1">
                    <span className="flex items-center gap-1.5">
                      <Phone className="w-3 h-3 text-emerald-500 shrink-0" />
                      <span>{b.phone}</span>
                    </span>
                    <a
                      href={b.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline"
                    >
                      Ver Mapa →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3: Central Lines & Online Booking (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-white tracking-tight">
              Contacto Central
            </h4>

            <div className="space-y-2 text-xs">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-900 border border-stone-800 text-stone-200 hover:text-white transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <div>
                  <span className="font-bold block text-xs">Central Telefónica</span>
                  <span className="text-[10px] text-stone-400">{CLINIC_INFO.phone}</span>
                </div>
              </a>

              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hola%20VetMetro,%20deseo%20hacer%20una%20consulta:`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-900 border border-stone-800 text-stone-200 hover:text-white transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <div>
                  <span className="font-bold block text-xs">WhatsApp de Recepción</span>
                  <span className="text-[10px] text-stone-400">{CLINIC_INFO.whatsappDisplay}</span>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={CLINIC_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-stone-900 border border-stone-800 text-stone-300 hover:text-pink-400 text-xs transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>

                <a
                  href={CLINIC_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-stone-900 border border-stone-800 text-stone-300 hover:text-blue-400 text-xs transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-3 px-4 rounded-xl bg-[#0D4740] hover:bg-[#083630] text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
            >
              <Calendar className="w-4 h-4 text-emerald-300" />
              <span>Agendar Cita en Línea</span>
            </button>
          </div>

        </div>

        {/* Legal & Medical Licensing Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Clínica Veterinaria Metropolitana (VetMetro RD). Registro Sanitario Nacional • Santo Domingo, D.N.</p>
          <p className="flex items-center gap-2">
            <span>Atención Ética & Fear-Free</span>
            <span>•</span>
            <span>República Dominicana</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
