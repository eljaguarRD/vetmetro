import React, { useState } from 'react';
import { Phone, Calendar, Clock, MapPin, Instagram, Menu, X, ShieldAlert, Sparkles, MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../../data/veterinariaData';

interface HeaderV2Props {
  onOpenBooking: (prefill?: { serviceId?: string; branchId?: string }) => void;
}

export const HeaderV2: React.FC<HeaderV2Props> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      {/* Top Notification Bar */}
      <div className="bg-[#0B4F4F] text-white text-[11px] sm:text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold tracking-wide">
              Urgencias Médicas y Hospitalización 24 Horas:
            </span>
            <span className="text-emerald-200">Sede Ensanche Paraíso</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${CLINIC_INFO.phoneEmergency}`}
              className="flex items-center gap-1.5 text-emerald-100 hover:text-white font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>Emergencias: {CLINIC_INFO.phoneEmergency}</span>
            </a>
            <span className="hidden md:inline text-white/30">•</span>
            <a
              href={CLINIC_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 text-white/80 hover:text-white transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-300" />
              <span>{CLINIC_INFO.instagramHandle}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-[#0B4F4F] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
            <span className="font-serif text-lg font-bold text-emerald-300">VM</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg sm:text-xl font-extrabold text-stone-900 tracking-tight leading-none">
                VetMetro
              </span>
              <span className="text-[10px] font-bold bg-[#0B4F4F]/10 text-[#0B4F4F] px-2 py-0.5 rounded-full border border-[#0B4F4F]/20">
                Santo Domingo
              </span>
            </div>
            <p className="text-[11px] text-stone-500 font-medium leading-none mt-1">
              Clínica Veterinaria Metropolitana
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-stone-700 tracking-wide">
          <a href="#servicios-v2" className="hover:text-[#0B4F4F] transition-colors">
            Servicios & Especialidades
          </a>
          <a href="#instalaciones-v2" className="hover:text-[#0B4F4F] transition-colors">
            CatHotel & VetMetroPark
          </a>
          <a href="#sedes-v2" className="hover:text-[#0B4F4F] transition-colors">
            Nuestras 3 Sedes
          </a>
          <a href="#instagram-v2" className="hover:text-[#0B4F4F] transition-colors flex items-center gap-1">
            <Instagram className="w-3.5 h-3.5 text-pink-600" />
            <span>Comunidad</span>
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          <a
            href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hola%20VetMetro%20RD,%20deseo%20hacer%20una%20consulta:`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#0B4F4F] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold text-white bg-[#0B4F4F] hover:bg-[#083D3D] shadow-sm hover:shadow transition-all cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-emerald-300" />
            <span>Agendar Cita</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-stone-700 hover:bg-stone-100 transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F6] border-b border-stone-200 px-5 py-4 space-y-3">
          <a
            href="#servicios-v2"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-stone-800 py-1.5"
          >
            Servicios Clínicos
          </a>
          <a
            href="#instalaciones-v2"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-stone-800 py-1.5"
          >
            CatHotel & Recreación
          </a>
          <a
            href="#sedes-v2"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-stone-800 py-1.5"
          >
            Sedes (Paraíso, Arroyo Hondo, Gazcue)
          </a>
          <a
            href="#instagram-v2"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-stone-800 py-1.5"
          >
            Comunidad Instagram (@vetmetropolitanard)
          </a>
          <div className="pt-2 border-t border-stone-200 flex flex-col gap-2">
            <a
              href={`tel:${CLINIC_INFO.phoneEmergency}`}
              className="py-2.5 px-3 rounded-xl bg-rose-50 text-rose-800 border border-rose-200 font-bold text-xs flex items-center justify-center gap-2"
            >
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              <span>Llamar a Urgencias 24/7</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
