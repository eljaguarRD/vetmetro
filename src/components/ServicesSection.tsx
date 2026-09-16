import React, { useState } from 'react';
import { Stethoscope, AlertCircle, ShieldCheck, Activity, Scan, Microscope, Sparkles, HeartHandshake, Calendar, Check, ArrowRight, Home, Car } from 'lucide-react';
import { SERVICES } from '../data/veterinariaData';

interface ServicesSectionProps {
  onOpenBooking: (serviceId?: string) => void;
}

const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'Stethoscope': return <Stethoscope className="w-5 h-5" />;
    case 'AlertCircle': return <AlertCircle className="w-5 h-5" />;
    case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
    case 'Activity': return <Activity className="w-5 h-5" />;
    case 'Scan': return <Scan className="w-5 h-5" />;
    case 'Microscope': return <Microscope className="w-5 h-5" />;
    case 'Sparkles': return <Sparkles className="w-5 h-5" />;
    case 'Home': return <Home className="w-5 h-5" />;
    case 'Car': return <Car className="w-5 h-5" />;
    default: return <Stethoscope className="w-5 h-5" />;
  }
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<'all' | 'urgencias' | 'bienestar' | 'general' | 'especialidades'>('all');

  const filteredServices = filter === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === filter || (filter === 'especialidades' && s.category === 'diagnostico'));

  return (
    <section id="servicios" className="py-16 sm:py-20 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-teal-600 font-extrabold text-xs tracking-wider uppercase bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200/60">
            Servicios Clínicos y de Bienestar • VetMetro RD
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Todo lo que tu mascota necesita en un solo lugar
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Desde medicina preventiva y urgencias 24/7 hasta estética en nuestro Pet Spa y hospedaje libre de estrés.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-7">
            {[
              { id: 'all', label: 'Todos los Servicios' },
              { id: 'urgencias', label: '🚨 Urgencias 24/7' },
              { id: 'bienestar', label: '🛁 Grooming & Hospedaje' },
              { id: 'general', label: '🩺 Consultas & Vacunas' },
              { id: 'especialidades', label: '🔬 Cirugía & Diagnóstico' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-xl hover:-translate-y-1 relative bg-white ${
                service.urgent
                  ? 'border-rose-300 ring-2 ring-rose-500/10'
                  : service.popular
                  ? 'border-teal-300 ring-2 ring-teal-500/10'
                  : 'border-slate-200'
              }`}
            >
              {/* Top Icons & Badges */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    service.urgent
                      ? 'bg-rose-100 text-rose-600'
                      : 'bg-teal-100 text-teal-700'
                  }`}>
                    {getServiceIcon(service.icon)}
                  </div>

                  <div className="flex items-center gap-1.5">
                    {service.urgent && (
                      <span className="bg-rose-500 text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full animate-pulse">
                        24/7 Activo
                      </span>
                    )}
                    {service.popular && !service.urgent && (
                      <span className="bg-teal-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full">
                        Más Solicitado
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                  {service.name}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 py-3 border-t border-slate-100 mb-4">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Action Bottom */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] text-slate-400 block font-medium">Tarifa estimada</span>
                  <span className="text-base font-extrabold text-slate-900">
                    RD$ {service.priceFrom.toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={() => onOpenBooking(service.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    service.urgent
                      ? 'bg-rose-600 hover:bg-rose-700 text-white shadow-sm shadow-rose-600/20'
                      : 'bg-teal-600 hover:bg-teal-700 text-white shadow-sm shadow-teal-600/20'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Agendar</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
