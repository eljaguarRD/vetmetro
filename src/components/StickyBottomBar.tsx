import React from 'react';
import { Calendar, Phone, MessageCircle, Instagram } from 'lucide-react';
import { CLINIC_INFO } from '../data/veterinariaData';

interface StickyBottomBarProps {
  onOpenBooking: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-2xl py-2.5 px-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
        {/* Availability Microcopy (Desktop & Tablet) */}
        <div className="hidden sm:flex items-center gap-2 text-xs">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
          </span>
          <span className="font-bold text-slate-800">Citas disponibles hoy en Santo Domingo</span>
          <span className="text-slate-400">•</span>
          <span className="text-teal-700 font-semibold bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
            Urgencias 24/7 en Paraíso
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          {/* Instagram Link */}
          <a
            href={CLINIC_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex py-2.5 px-3 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-700 font-bold text-xs border border-pink-200 items-center justify-center gap-1.5 transition-colors"
            title="Ver Instagram @vetmetropolitanard"
          >
            <Instagram className="w-3.5 h-3.5 text-pink-600" />
            <span>@vetmetropolitanard</span>
          </a>

          {/* WhatsApp Direct */}
          <a
            href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hola%20VetMetro,%20quisiera%20agendar%20una%20cita%20para%20mi%20mascota`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial py-2.5 px-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs border border-emerald-200 flex items-center justify-center gap-1.5 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          {/* Emergency Hotline Call */}
          <a
            href={`tel:${CLINIC_INFO.phoneEmergency}`}
            className="hidden md:flex py-2.5 px-3.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs border border-rose-200 items-center justify-center gap-1.5 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-rose-600" />
            <span>Urgencias 24h</span>
          </a>

          {/* Primary Appointment Button */}
          <button
            onClick={onOpenBooking}
            className="flex-2 sm:flex-initial py-2.5 px-5 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-teal-600/20 flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Cita</span>
          </button>
        </div>
      </div>
    </div>
  );
};
