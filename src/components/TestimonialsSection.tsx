import React from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageSquare, Quote } from 'lucide-react';
import { TESTIMONIALS, CLINIC_INFO } from '../data/veterinariaData';

interface TestimonialsSectionProps {
  onOpenBooking: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="testimonios" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header with Google Score */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-teal-600 font-extrabold text-xs tracking-wider uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200/60">
              Historias Reales de Recuperación
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Familias que Confían en VetMetro RD
            </h2>
            <p className="text-slate-600 text-base mt-2 max-w-2xl">
              La tranquilidad de saber que tu mascota recibe el mismo cariño y dedicación médica que tú le darías en casa.
            </p>
          </div>

          {/* Google Score Block */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 flex items-center gap-4 shrink-0">
            <div className="text-center border-r border-slate-200 pr-4">
              <div className="text-3xl font-extrabold text-slate-900">{CLINIC_INFO.googleRating}</div>
              <div className="flex text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Google Reviews</div>
              <div className="text-xs text-slate-500 font-medium">+{CLINIC_INFO.totalReviews} opiniones verificadas</div>
              <div className="text-[11px] text-emerald-600 font-bold mt-0.5 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 98.4% de satisfacción
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-teal-300 transition-colors relative"
            >
              <Quote className="w-8 h-8 text-teal-200 absolute top-5 right-5 pointer-events-none" />

              <div>
                {/* Rating & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">{t.date}</span>
                </div>

                {/* Comment */}
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Author & Pet */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.ownerName}
                    className="w-11 h-11 rounded-full object-cover border border-slate-300"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      {t.ownerName}
                    </h4>
                    <p className="text-[11px] text-teal-700 font-medium">
                      Tutor de <strong className="text-slate-800">{t.petName}</strong> ({t.petBreed})
                    </p>
                  </div>
                </div>

                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                  Verificado
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner below reviews */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-600 mb-4">
            ¿Quieres agendar el chequeo preventivo o una consulta especializada para tu mascota?
          </p>
          <button
            onClick={onOpenBooking}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-extrabold text-sm shadow-md shadow-teal-600/20 cursor-pointer"
          >
            Agendar Consulta con 20% de Descuento
          </button>
        </div>

      </div>
    </section>
  );
};
