import React, { useState } from 'react';
import { Calculator, ShieldCheck, Check, Sparkles, ArrowRight, Calendar } from 'lucide-react';
import { PetType } from '../types';

interface PriceEstimatorProps {
  onOpenBooking: (prefill?: { serviceId?: string; petType?: PetType }) => void;
}

interface OptionExtra {
  id: string;
  name: string;
  price: number;
}

export const PriceEstimator: React.FC<PriceEstimatorProps> = ({ onOpenBooking }) => {
  const [petType, setPetType] = useState<PetType>('perro');
  const [baseService, setBaseService] = useState<{ id: string; name: string; price: number }>({
    id: 'consulta-general',
    name: 'Consulta Médica General & Chequeo',
    price: 1500
  });
  const [selectedExtras, setSelectedExtras] = useState<string[]>(['desparasitacion']);

  const SERVICES_LIST = [
    { id: 'consulta-general', name: 'Consulta Médica General & Chequeo', price: 1500 },
    { id: 'grooming-spa', name: 'Grooming Completo & Baño Hidratante', price: 1200 },
    { id: 'vacunacion-preventiva', name: 'Vacunación Séxtuple / Antirrábica', price: 1400 },
    { id: 'diagnostico-imagenes', name: 'Ecografía Abdominal o Rayos X Digital', price: 2200 },
    { id: 'urgencias-24-7', name: 'Urgencia 24 Horas (Ensanche Paraíso)', price: 2500 },
    { id: 'hospedaje-cattel-park', name: 'Noche de Hospedaje / CatHotel', price: 1800 },
  ];

  const EXTRAS: OptionExtra[] = [
    { id: 'desparasitacion', name: 'Desparasitación Interna & Antipulgas/Garrapatas', price: 600 },
    { id: 'limpieza-dental', name: 'Cepillado Bucal & Spray Antisarro', price: 450 },
    { id: 'unas-oidos', name: 'Limpieza Profunda de Oídos y Corte de Uñas', price: 350 },
    { id: 'hemograma', name: 'Hemograma Completo In-House (15 min)', price: 1100 }
  ];

  const toggleExtra = (id: string) => {
    if (selectedExtras.includes(id)) {
      setSelectedExtras(selectedExtras.filter((e) => e !== id));
    } else {
      setSelectedExtras([...selectedExtras, id]);
    }
  };

  const basePrice = baseService.price;
  const extrasTotal = selectedExtras.reduce((sum, extId) => {
    const found = EXTRAS.find((e) => e.id === extId);
    return sum + (found ? found.price : 0);
  }, 0);

  const subtotal = basePrice + extrasTotal;
  const discount = Math.round(subtotal * 0.15); // 15% discount for online booking
  const total = subtotal - discount;

  return (
    <section id="precios" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            Transparencia y Cero Sorpresas
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Cotizador Rápido de Servicios en RD$
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Elige los servicios que necesita tu mascota. El pago se realiza directamente en cualquiera de nuestras 3 sedes o a domicilio, sin cobros por adelantado.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-200 overflow-hidden p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Config Controls */}
            <div className="lg:col-span-7 space-y-5">
              {/* Pet selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  1. Selecciona especie:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'perro', label: 'Perro', icon: '🐕' },
                    { id: 'gato', label: 'Gato', icon: '🐈' },
                    { id: 'exotico', label: 'Exótico', icon: '🐇' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPetType(p.id as PetType)}
                      className={`p-2.5 rounded-xl border text-center transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        petType === p.id
                          ? 'border-teal-500 bg-teal-50 text-teal-950 font-bold'
                          : 'border-slate-200 hover:border-slate-300 text-slate-600 bg-slate-50'
                      }`}
                    >
                      <span className="text-lg">{p.icon}</span>
                      <span className="text-xs">{p.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Base Service Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  2. Servicio Principal:
                </label>
                <div className="space-y-2">
                  {SERVICES_LIST.map((srv) => (
                    <div
                      key={srv.id}
                      onClick={() => setBaseService(srv)}
                      className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        baseService.id === srv.id
                          ? 'border-teal-500 bg-teal-50/70 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          baseService.id === srv.id
                            ? 'border-teal-600 bg-teal-600 text-white'
                            : 'border-slate-300'
                        }`}>
                          {baseService.id === srv.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800">
                          {srv.name}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-slate-900">
                        RD$ {srv.price.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extras add-ons */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  3. Complementos opcionales recomendados:
                </label>
                <div className="space-y-2">
                  {EXTRAS.map((extra) => {
                    const isChecked = selectedExtras.includes(extra.id);
                    return (
                      <div
                        key={extra.id}
                        onClick={() => toggleExtra(extra.id)}
                        className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                          isChecked
                            ? 'border-teal-400 bg-teal-50/40 text-slate-900'
                            : 'border-slate-200 hover:border-slate-300 text-slate-600'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                            isChecked
                              ? 'bg-teal-600 border-teal-600 text-white'
                              : 'border-slate-300 bg-white'
                          }`}>
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="text-xs font-medium text-slate-800">
                            {extra.name}
                          </span>
                        </div>
                        <span className="text-xs font-semibold text-slate-700">
                          + RD$ {extra.price.toLocaleString()}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 via-slate-900 to-teal-950 text-white p-6 sm:p-7 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  Resumen Estimado
                </span>
                <span className="bg-teal-500/20 text-teal-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-teal-500/30">
                  15% Descuento Web
                </span>
              </div>

              {/* Line items */}
              <div className="py-4 space-y-2.5 text-xs text-slate-300 border-b border-slate-800">
                <div className="flex justify-between">
                  <span className="truncate pr-2">{baseService.name}</span>
                  <span className="font-mono text-white shrink-0">RD$ {baseService.price.toLocaleString()}</span>
                </div>

                {selectedExtras.map((extId) => {
                  const extra = EXTRAS.find((e) => e.id === extId);
                  if (!extra) return null;
                  return (
                    <div key={extId} className="flex justify-between text-slate-400">
                      <span className="truncate pr-2">+ {extra.name}</span>
                      <span className="font-mono text-slate-200 shrink-0">RD$ {extra.price.toLocaleString()}</span>
                    </div>
                  );
                })}

                <div className="flex justify-between pt-2 text-slate-400">
                  <span>Subtotal</span>
                  <span className="font-mono">RD$ {subtotal.toLocaleString()}</span>
                </div>

                <div className="flex justify-between text-teal-400 font-medium">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Beneficio Reserva Web (-15%)
                  </span>
                  <span className="font-mono">- RD$ {discount.toLocaleString()}</span>
                </div>
              </div>

              {/* Total final */}
              <div className="pt-4 pb-6 flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Total Final Estimado</span>
                  <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    RD$ {total.toLocaleString()}
                  </span>
                </div>
                <span className="text-[11px] text-teal-300 bg-teal-900/60 px-2 py-1 rounded-md border border-teal-500/30">
                  Ahorras RD$ {discount.toLocaleString()}
                </span>
              </div>

              {/* CTA */}
              <button
                onClick={() => onOpenBooking({ serviceId: baseService.id, petType })}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-400 hover:from-teal-400 hover:to-cyan-300 text-slate-950 font-black text-xs shadow-lg shadow-teal-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>Agendar con esta tarifa</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-400 justify-center">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>Pagas al terminar la consulta en la clínica</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
