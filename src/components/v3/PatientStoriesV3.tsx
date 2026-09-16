import React, { useState } from 'react';
import { Star, Heart, Instagram, MessageCircle, ArrowRight, ShieldCheck, Quote, ExternalLink } from 'lucide-react';
import { CLINIC_INFO, TESTIMONIALS, INSTAGRAM_POSTS } from '../../data/veterinariaData';

interface PatientStoriesV3Props {
  onOpenBooking: (prefill?: { serviceId?: string }) => void;
}

export const PatientStoriesV3: React.FC<PatientStoriesV3Props> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'reviews' | 'instagram'>('reviews');

  return (
    <section id="historias" className="py-16 sm:py-24 bg-[#F5F2EC] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D4740] bg-emerald-100/60 px-3 py-1 rounded-full border border-emerald-200/80 inline-block mb-3">
              Confianza Comprobada
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight leading-tight">
              Familias Satisfechas. Vidas Salvadas.
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2.5 leading-relaxed">
              Más de 45,000 mascotas atendidas y una comunidad de tutores que confían plenamente en nuestro criterio médico y trato afectuoso.
            </p>
          </div>

          {/* Social Proof Metric Pill */}
          <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs shrink-0 flex items-center gap-4">
            <div className="text-center">
              <span className="font-serif text-3xl font-bold text-stone-900 block leading-none">4.9</span>
              <div className="flex items-center gap-0.5 text-amber-400 text-xs mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
            </div>
            <div className="border-l border-stone-200 pl-4 text-xs">
              <p className="font-bold text-stone-900">Google Reviews</p>
              <p className="text-stone-500 text-[11px]">1,240+ Reseñas Verificadas</p>
            </div>
          </div>
        </div>

        {/* Tab Switcher: Reseñas de Tutores vs. Comunidad Instagram */}
        <div className="flex items-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'reviews'
                ? 'bg-[#0D4740] text-white shadow-xs'
                : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
            }`}
          >
            Casos Clínicos & Reseñas Reales
          </button>
          
          <button
            onClick={() => setActiveTab('instagram')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'instagram'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xs'
                : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
            }`}
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>Feed @vetmetropolitanard</span>
          </button>
        </div>

        {/* Tab Content: REVIEWS */}
        {activeTab === 'reviews' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-md flex flex-col justify-between space-y-4 hover:shadow-lg transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] bg-emerald-50 text-emerald-900 font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                      {t.serviceReceived}
                    </span>
                  </div>

                  <p className="text-stone-700 text-xs sm:text-sm leading-relaxed italic">
                    "{t.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-stone-100">
                  <img
                    src={t.avatar}
                    alt={t.ownerName}
                    className="w-10 h-10 rounded-full object-cover border border-stone-200"
                  />
                  <div>
                    <p className="font-bold text-xs text-stone-900">{t.ownerName}</p>
                    <p className="text-[11px] text-[#0D4740] font-medium">Tutor de {t.petName} • {t.petBreed}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content: INSTAGRAM FEED */}
        {activeTab === 'instagram' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSTAGRAM_POSTS.slice(0, 6).map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-3xl border border-stone-200 shadow-md overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all"
              >
                <div>
                  <div className="relative h-60 overflow-hidden bg-stone-100">
                    <img
                      src={post.image}
                      alt={post.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                      {post.badge}
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <p className="text-xs text-stone-700 leading-snug line-clamp-3">
                      {post.caption}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tg, idx) => (
                        <span key={idx} className="text-[10px] text-pink-700 font-semibold">
                          {tg}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between gap-2 border-t border-stone-100">
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-stone-500 hover:text-stone-900 flex items-center gap-1 font-medium"
                  >
                    <span>Ver en Instagram</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    onClick={() => onOpenBooking()}
                    className="py-1.5 px-3 rounded-lg bg-[#0D4740] hover:bg-[#083630] text-white text-[11px] font-bold transition-colors cursor-pointer"
                  >
                    Agendar Servicio
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
