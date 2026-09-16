import React, { useState } from 'react';
import { Phone, Calendar, Clock, Menu, X, Shield, MapPin, Upload, MessageCircle, Instagram } from 'lucide-react';
import { CLINIC_INFO } from '../data/veterinariaData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
  onOpenFileImporter: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenFileImporter }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Notification Bar / Urgencias & Contact */}
      <div className="bg-slate-900 text-slate-100 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="inline-flex items-center gap-1.5 bg-rose-500/20 text-rose-300 font-semibold px-2 py-0.5 rounded-full text-[11px] border border-rose-500/30">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping"></span>
              Urgencias 24/7
            </span>
            <span className="hidden sm:inline text-slate-300">
              Sede Ensanche Paraíso abierta toda la noche con guardia médica activa
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hola%20VetMetro,%20tengo%20una%20emergencia%20veterinaria`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-teal-400 hover:text-teal-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp 24h: {CLINIC_INFO.phoneEmergency}</span>
            </a>
            <span className="text-slate-600 hidden md:inline">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-teal-400" /> Paraíso • Arroyo Hondo • Gazcue
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-600 via-teal-500 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-teal-600/20 group-hover:scale-105 transition-transform duration-200">
            <span className="text-2xl">🐾</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight">
                VetMetro <span className="text-teal-600">RD</span>
              </span>
              <span className="bg-teal-50 text-teal-700 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border border-teal-200/60 hidden sm:inline-block">
                Santo Domingo
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">Clínica Veterinaria Metropolitana</p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600">
          <a href="#servicios" className="hover:text-teal-600 transition-colors">Servicios</a>
          <a href="#instagram" className="hover:text-pink-600 transition-colors flex items-center gap-1.5 font-bold text-slate-800">
            <Instagram className="w-4 h-4 text-pink-600" />
            <span>Instagram Feed</span>
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
          </a>
          <a href="#triaje" className="hover:text-teal-600 transition-colors flex items-center gap-1">
            <Shield className="w-4 h-4 text-teal-500" /> Triaje Rápido
          </a>
          <a href="#precios" className="hover:text-teal-600 transition-colors">Precios RD$</a>
          <a href="#sedes" className="hover:text-teal-600 transition-colors">Sedes (3)</a>
          <a href="#testimonios" className="hover:text-teal-600 transition-colors">Opiniones (4.9★)</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Instagram Quick Link */}
          <a
            href={CLINIC_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center w-10 h-10 rounded-xl bg-pink-50 text-pink-600 hover:bg-pink-100 transition-colors border border-pink-200"
            title="Ver Instagram @vetmetropolitanard"
          >
            <Instagram className="w-5 h-5" />
          </a>

          {/* WhatsApp Direct */}
          <a
            href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hola%20VetMetro,%20quisiera%20consultar%20sobre%20una%20cita%20para%20mi%20mascota`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors border border-emerald-200"
            title="Chatear por WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>

          {/* Primary CTA: Agendar Cita */}
          <button
            id="btn-nav-agendar"
            onClick={() => onOpenBooking()}
            className="relative inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold text-sm shadow-md shadow-teal-600/20 hover:shadow-lg hover:shadow-teal-600/30 transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Cita</span>
            <span className="hidden sm:inline-block bg-white/20 text-white text-[10px] uppercase font-extrabold px-1.5 py-0.5 rounded">
              Online
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-2.5 text-sm font-semibold text-slate-700">
            <a
              href="#servicios"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-teal-50 hover:text-teal-700"
            >
              Servicios Clínicos & Grooming
            </a>
            <a
              href="#instagram"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-pink-50/70 text-pink-700 font-bold flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-pink-600" />
                <span>Instagram Feed (@vetmetropolitanard)</span>
              </span>
              <span className="text-[11px] bg-pink-200/60 px-2 py-0.5 rounded-full">En Vivo</span>
            </a>
            <a
              href="#triaje"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-teal-50 hover:text-teal-700"
            >
              Triaje de Síntomas
            </a>
            <a
              href="#precios"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-teal-50 hover:text-teal-700"
            >
              Precios y Tarifas RD$
            </a>
            <a
              href="#sedes"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-teal-50 hover:text-teal-700"
            >
              Nuestras 3 Sedes en Santo Domingo
            </a>
            <a
              href="#testimonios"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-teal-50 hover:text-teal-700"
            >
              Opiniones de Pacientes (4.9★)
            </a>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hola%20VetMetro,%20tengo%20una%20emergencia%20veterinaria`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-rose-50 text-rose-700 border border-rose-200 font-bold text-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-rose-600" />
              <span>Línea Urgencias 24/7: {CLINIC_INFO.phoneEmergency}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 px-4 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Cita Médica</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
