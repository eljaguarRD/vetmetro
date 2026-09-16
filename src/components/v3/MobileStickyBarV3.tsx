import React from 'react';
import { Phone, MessageCircle, Calendar, AlertCircle } from 'lucide-react';
import { CLINIC_INFO } from '../../data/veterinariaData';

interface MobileStickyBarV3Props {
  onOpenBooking: () => void;
  onOpenEmergency: () => void;
}

export const MobileStickyBarV3: React.FC<MobileStickyBarV3Props> = ({
  onOpenBooking,
  onOpenEmergency
}) => {
  return (
    <aside aria-label="Acciones rápidas móviles" className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-stone-900/95 backdrop-blur-md border-t border-stone-800 p-2 sm:p-2.5 shadow-2xl">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-1.5 text-center">
        
        {/* Urgencias 24h */}
        <button
          onClick={onOpenEmergency}
          className="py-2 px-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-[11px] flex flex-col items-center justify-center gap-0.5 shadow-xs cursor-pointer active:scale-95 transition-transform"
        >
          <AlertCircle className="w-4 h-4 text-white animate-pulse" />
          <span className="leading-tight">Urgencia 24h</span>
        </button>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hola%20VetMetro,%20tengo%20una%20consulta%20médica:`}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 px-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-[11px] flex flex-col items-center justify-center gap-0.5 shadow-xs active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="leading-tight">WhatsApp</span>
        </a>

        {/* Agendar Cita */}
        <button
          onClick={onOpenBooking}
          className="py-2 px-1.5 rounded-xl bg-[#0D4740] hover:bg-[#093530] text-white font-bold text-[11px] flex flex-col items-center justify-center gap-0.5 shadow-xs cursor-pointer active:scale-95 transition-transform"
        >
          <Calendar className="w-4 h-4 text-emerald-300" />
          <span className="leading-tight">Agendar Cita</span>
        </button>

      </div>
    </aside>
  );
};
