import React from 'react';
import { Phone, MapPin, Clock, Instagram, Facebook, Calendar, MessageCircle, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO, BRANCHES } from '../../data/veterinariaData';

interface FooterV2Props {
  onOpenBooking: () => void;
}

export const FooterV2: React.FC<FooterV2Props> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Column 1: Brand & Emergency (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#0B4F4F] text-emerald-300 flex items-center justify-center font-serif text-xl font-bold">
                VM
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-white tracking-tight">
                  VetMetro RD
                </span>
                <p className="text-[11px] text-stone-400">
                  Clínica Veterinaria Metropolitana
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              30 años de compromiso con la salud animal, diagnósticos de precisión y bienestar integral para mascotas en Santo Domingo.
            </p>

            {/* 24/7 Urgencias badge */}
            <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                <span>Urgencias Médicas 24/7</span>
              </div>
              <p className="text-xs text-stone-300">
                Sede Ensanche Paraíso abierta de forma ininterrumpida.
              </p>
              <a
                href={`tel:${CLINIC_INFO.phoneEmergency}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-rose-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-rose-400" />
                <span>Llamar: {CLINIC_INFO.phoneEmergency}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Sedes (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-serif text-base font-bold text-white">
              Nuestras 3 Sedes en Santo Domingo
            </h4>

            <div className="space-y-3 text-xs">
              {BRANCHES.map((b) => (
                <div key={b.id} className="bg-stone-900/60 p-3.5 rounded-2xl border border-stone-800/80">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-stone-100">{b.name}</span>
                    <span className="text-[10px] text-emerald-400 font-semibold">{b.hoursShort || b.hours}</span>
                  </div>
                  <p className="text-stone-400 text-[11px] mt-1 flex items-start gap-1.5">
                    <MapPin className="w-3 h-3 text-stone-500 shrink-0 mt-0.5" />
                    <span>{b.address}</span>
                  </p>
                  <p className="text-stone-400 text-[11px] mt-1 flex items-center gap-1.5">
                    <Phone className="w-3 h-3 text-stone-500 shrink-0" />
                    <span>{b.phone}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Quick Links & Social (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-white">
              Contacto y Redes
            </h4>

            <div className="space-y-2 text-xs">
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-900 border border-stone-800 hover:border-pink-500/40 text-stone-200 hover:text-white transition-all"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <div>
                  <span className="font-bold block text-xs">Instagram</span>
                  <span className="text-[10px] text-stone-400">{CLINIC_INFO.instagramHandle}</span>
                </div>
              </a>

              <a
                href={CLINIC_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-900 border border-stone-800 hover:border-blue-500/40 text-stone-200 hover:text-white transition-all"
              >
                <Facebook className="w-4 h-4 text-blue-400" />
                <div>
                  <span className="font-bold block text-xs">Facebook</span>
                  <span className="text-[10px] text-stone-400">{CLINIC_INFO.facebookHandle}</span>
                </div>
              </a>

              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hola%20VetMetro,%20deseo%20hacer%20una%20consulta:`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-900 border border-stone-800 hover:border-emerald-500/40 text-stone-200 hover:text-white transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <div>
                  <span className="font-bold block text-xs">WhatsApp Directo</span>
                  <span className="text-[10px] text-stone-400">{CLINIC_INFO.whatsappDisplay}</span>
                </div>
              </a>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-3 px-4 rounded-xl bg-[#0B4F4F] hover:bg-[#083D3D] text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-emerald-300" />
              <span>Agendar Cita Médica</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} VetMetro RD - Clínica Veterinaria Metropolitana. Todos los derechos reservados.</p>
          <p>Santo Domingo, República Dominicana</p>
        </div>

      </div>
    </footer>
  );
};
