import React, { useState } from 'react';
import { Phone, MapPin, Clock, Calendar, MessageCircle, AlertCircle, Menu, X, Shield, ChevronDown } from 'lucide-react';
import { CLINIC_INFO, BRANCHES } from '../../data/veterinariaData';

interface NavbarV3Props {
  onOpenBooking: (prefill?: { branchId?: string; serviceId?: string }) => void;
  onOpenEmergency: () => void;
}

export const NavbarV3: React.FC<NavbarV3Props> = ({ onOpenBooking, onOpenEmergency }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FBF9F5] border-b border-stone-200 shadow-xs">
      {/* 1. Top Clinical Dispatch Bar - 24/7 Status & Quick Direct Dial */}
      <div className="bg-[#0A2E28] text-emerald-100 text-xs border-b border-emerald-950/40 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1.5 flex flex-col sm:flex-row items-center justify-between gap-1.5">
          
          {/* Live Hospital Status */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="font-semibold text-white tracking-wide text-[11px] sm:text-xs">
              Hospital de Urgencias 24/7 Abierto
            </span>
            <span className="hidden md:inline text-emerald-400/80">•</span>
            <span className="hidden md:inline text-emerald-200/90 text-[11px]">
              Sede Paraíso en guardia permanente • Arroyo Hondo y Gazcue abiertas hasta 7:00 PM
            </span>
          </div>

          {/* Quick Direct Contacts */}
          <div className="flex items-center gap-3 sm:gap-4 text-[11px] tracking-wide">
            <button
              onClick={onOpenEmergency}
              className="text-rose-300 hover:text-rose-200 font-bold flex items-center gap-1 transition-colors cursor-pointer"
            >
              <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
              <span>Urgencias: {CLINIC_INFO.phoneEmergency}</span>
            </button>

            <span className="hidden sm:inline text-emerald-800">|</span>

            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="hidden md:flex items-center gap-1 text-emerald-100/90 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>{CLINIC_INFO.phone}</span>
            </a>

            <span className="hidden sm:inline text-emerald-800">|</span>

            <a
              href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hola%20VetMetro,%20tengo%20una%20consulta%20médica:`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-semibold text-emerald-300 hover:text-white transition-colors"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp Directo</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="bg-[#FBF9F5] border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-18">
            
            {/* Brand Logo & Medical Seal */}
            <a href="#inicio" className="flex items-center gap-3 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0D4740] text-emerald-100 flex items-center justify-center font-serif text-lg sm:text-xl font-bold tracking-tight shadow-xs border border-emerald-800/40 group-hover:bg-[#0A3832] transition-colors">
                VM
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-semibold tracking-tight text-stone-900 leading-none">
                  VetMetro
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.14em] uppercase text-[#0D4740] font-bold mt-0.5">
                  Clínica Veterinaria Metropolitana • 30 Años
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links (Only visible on large screens) */}
            <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wide text-stone-700">
              <a href="#sedes" className="hover:text-[#0D4740] transition-colors">
                Nuestras 3 Sedes
              </a>
              <a href="#servicios" className="hover:text-[#0D4740] transition-colors">
                Medicina & Quirófano
              </a>
              <a href="#servicios" className="hover:text-[#0D4740] transition-colors flex items-center gap-1">
                <span>CatHotel & Park</span>
                <span className="text-[9px] bg-amber-100 text-amber-900 font-bold px-1.5 py-0.2 rounded-sm">
                  Exclusivo
                </span>
              </a>
              <a href="#urgencias" className="text-rose-700 hover:text-rose-800 font-bold flex items-center gap-1 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse" />
                <span>Urgencias 24/7</span>
              </a>
              <a href="#equipo" className="hover:text-[#0D4740] transition-colors">
                Cuerpo Médico
              </a>
              <a href="#historias" className="hover:text-[#0D4740] transition-colors">
                Pacientes
              </a>
            </nav>

            {/* Desktop Actions (Strictly lg:flex, prevents tablet overlap) */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hola%20VetMetro,%20deseo%20agendar%20una%20cita:`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl border border-stone-300 hover:border-emerald-600/50 hover:bg-emerald-50/50 text-stone-700 hover:text-[#0D4740] transition-all"
                title="Escribir por WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-700" />
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="py-2 px-4 rounded-xl bg-[#0D4740] hover:bg-[#083630] text-white font-semibold text-xs tracking-wide shadow-xs hover:shadow transition-all flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-emerald-300" />
                <span>Agendar Cita Médica</span>
              </button>
            </div>

            {/* Mobile & Tablet Toggle (Strictly lg:hidden, single button + menu toggle) */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => onOpenBooking()}
                className="py-1.5 px-3 rounded-lg bg-[#0D4740] text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Calendar className="w-3.5 h-3.5 text-emerald-300" />
                <span>Agendar Cita</span>
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
                aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FBF9F5] border-t border-stone-200 px-4 py-5 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200 shadow-xl">
            <div className="space-y-1 text-sm font-semibold text-stone-800">
              <a
                href="#sedes"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-lg hover:bg-stone-100"
              >
                📍 Nuestras 3 Sedes (Paraíso, A. Hondo, Gazcue)
              </a>
              <a
                href="#servicios"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-lg hover:bg-stone-100"
              >
                🩺 Medicina, Quirófano & Diagnósticos
              </a>
              <a
                href="#servicios"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-lg hover:bg-stone-100"
              >
                🐱 CatHotel & 🐕 VetMetroPark
              </a>
              <a
                href="#urgencias"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEmergency();
                }}
                className="block py-2.5 px-3 rounded-lg text-rose-700 bg-rose-50/80 border border-rose-200 font-bold"
              >
                🚨 Urgencias 24/7 (Sede Paraíso)
              </a>
              <a
                href="#equipo"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-lg hover:bg-stone-100"
              >
                👨‍⚕️ Cuerpo Médico Colegiado
              </a>
              <a
                href="#historias"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-lg hover:bg-stone-100"
              >
                ⭐ Pacientes & Reseñas
              </a>
            </div>

            <div className="pt-3 border-t border-stone-200 space-y-2">
              <a
                href={`tel:${CLINIC_INFO.phoneEmergency}`}
                className="w-full py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Llamar Urgencias: {CLINIC_INFO.phoneEmergency}</span>
              </a>

              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hola%20VetMetro,%20deseo%20hacer%20una%20consulta:`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp de Recepción</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
