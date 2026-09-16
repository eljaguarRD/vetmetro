import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Heart, Shield, Clock, Calendar, Instagram, Facebook } from 'lucide-react';
import { CLINIC_INFO, BRANCHES } from '../data/veterinariaData';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenFileImporter: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenFileImporter }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 lg:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-400 flex items-center justify-center text-white text-xl shadow-md">
                🐾
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                VetMetro <span className="text-teal-400">RD</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Clínica Veterinaria Metropolitana en Santo Domingo. Red especializada de salud y bienestar para mascotas: Urgencias 24/7 en Ensanche Paraíso, Grooming & Pet Spa, CatHotel y VetMetroPark.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                title="Instagram @vetmetropolitanard"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CLINIC_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                title="Facebook VetMetropolitanaRD"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hola%20VetMetro,%20tengo%20una%20consulta`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800"
                title="WhatsApp Directo"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-2 text-xs">
              <a
                href={`tel:${CLINIC_INFO.phoneEmergency}`}
                className="inline-flex items-center gap-2 font-bold text-rose-400 hover:text-rose-300"
              >
                <Phone className="w-4 h-4" />
                <span>Urgencias 24 Horas: {CLINIC_INFO.phoneEmergency}</span>
              </a>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white"
              >
                <Phone className="w-4 h-4" />
                <span>Central Telefónica: {CLINIC_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${CLINIC_INFO.email}`}
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white"
              >
                <Mail className="w-4 h-4" />
                <span>{CLINIC_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Servicios Destacados
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#servicios" className="hover:text-teal-400 transition-colors">Urgencias 24/7 (Sede Paraíso)</a></li>
              <li><a href="#servicios" className="hover:text-teal-400 transition-colors">Grooming & Pet Spa Canino/Felino</a></li>
              <li><a href="#servicios" className="hover:text-teal-400 transition-colors">CatHotel (Espacio exclusivo felino)</a></li>
              <li><a href="#servicios" className="hover:text-teal-400 transition-colors">VetMetroPark (Recreación al aire libre)</a></li>
              <li><a href="#servicios" className="hover:text-teal-400 transition-colors">Cirugía y Quirófano Especializado</a></li>
              <li><a href="#servicios" className="hover:text-teal-400 transition-colors">Rayos X Digital y Ecografía Doppler</a></li>
              <li><a href="#servicios" className="hover:text-teal-400 transition-colors">Atención Veterinaria a Domicilio</a></li>
            </ul>
          </div>

          {/* Branches & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Sedes en Santo Domingo
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              {BRANCHES.map((b) => (
                <div key={b.id} className="space-y-0.5">
                  <p className="font-bold text-slate-200">{b.name}</p>
                  <p>{b.address}</p>
                  <p className="text-teal-400 text-[11px]">{b.hours}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Direct CTA */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Agendamiento
            </h4>
            <p className="text-xs text-slate-400">
              Reserva tu cita en menos de 1 minuto con confirmación inmediata por WhatsApp.
            </p>
            <button
              onClick={onOpenBooking}
              className="w-full py-2.5 px-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-md shadow-teal-600/20"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Agendar Cita</span>
            </button>

            <a
              href={CLINIC_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-[11px] font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@vetmetropolitanard</span>
            </a>

            <button
              onClick={onOpenFileImporter}
              className="w-full py-1.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-500 hover:text-slate-300 text-[10px] font-medium border border-slate-800/80 flex items-center justify-center gap-1 transition-colors cursor-pointer"
            >
              <span>Importar archivos locales</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Clínica Veterinaria Metropolitana (VetMetro RD). Santo Domingo, República Dominicana.</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Exequátur Médico Veterinario RD</span>
            <span>•</span>
            <span>Urgencias 24 Horas</span>
            <span>•</span>
            <span>Cat Friendly</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
