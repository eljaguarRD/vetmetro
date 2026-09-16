import React, { useState } from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink, Sparkles, CheckCircle, Calendar, ArrowRight, X, ShieldAlert } from 'lucide-react';
import { INSTAGRAM_POSTS, CLINIC_INFO } from '../data/veterinariaData';
import { InstagramPost, PetType } from '../types';

interface InstagramFeedSectionProps {
  onOpenBooking: (prefill?: {
    serviceId?: string;
    petType?: PetType;
    branchId?: string;
  }) => void;
}

export const InstagramFeedSection: React.FC<InstagramFeedSectionProps> = ({ onOpenBooking }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'grooming' | 'hotel' | 'urgencias' | 'salud' | 'tips'>('all');
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);

  const filteredPosts = activeFilter === 'all'
    ? INSTAGRAM_POSTS
    : INSTAGRAM_POSTS.filter((p) => p.category === activeFilter);

  const handleBookFromPost = (post: InstagramPost) => {
    let serviceId = 'consulta-general';
    if (post.category === 'grooming') serviceId = 'grooming-spa';
    else if (post.category === 'hotel') serviceId = 'hospedaje-cattel-park';
    else if (post.category === 'urgencias') serviceId = 'urgencias-24-7';

    setSelectedPost(null);
    onOpenBooking({ serviceId });
  };

  return (
    <section id="instagram" className="py-16 sm:py-20 bg-gradient-to-b from-white via-cyan-50/30 to-slate-50 relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header with Instagram Branding */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-50 via-purple-50 to-cyan-50 border border-pink-200/60 text-slate-800 text-xs font-bold mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 animate-pulse"></span>
            <span className="bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent font-extrabold">
              Social Media en Vivo
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-600 font-medium">@vetmetropolitanard</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Momentos y Pacientes Felices en <span className="text-teal-600">Instagram</span>
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Historias reales de nuestras 3 sedes en Santo Domingo: transformaciones de Grooming, cuidados en el CatHotel y casos de éxito médico.
          </p>
        </div>

        {/* Profile Card / Social Anchor Header */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm max-w-3xl mx-auto mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="relative">
              <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-white p-0.5 flex items-center justify-center">
                  <span className="text-2xl">🐾</span>
                </div>
              </div>
              <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-teal-500 border-2 border-white flex items-center justify-center text-[9px] text-white">
                ✓
              </span>
            </div>

            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1.5">
                <h3 className="font-extrabold text-slate-900 text-base">vetmetropolitanard</h3>
                <CheckCircle className="w-4 h-4 text-sky-500 fill-sky-500 text-white" />
              </div>
              <p className="text-xs text-slate-500">
                Clínica Veterinaria Metropolitana • Santo Domingo, RD 🇩🇴
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-3 mt-1 text-[11px] text-slate-600">
                <span><strong>15.4K</strong> seguidores</span>
                <span>•</span>
                <span><strong>3 Sedes</strong> en SD</span>
                <span>•</span>
                <span className="text-teal-600 font-bold">Urgencias 24/7</span>
              </div>
            </div>
          </div>

          <a
            href={CLINIC_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:from-purple-700 hover:to-rose-600 text-white text-xs font-bold shadow-md shadow-pink-500/20 transition-all hover:scale-[1.02] cursor-pointer"
          >
            <Instagram className="w-4 h-4" />
            <span>Seguir en Instagram</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-semibold scrollbar-none">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-1.5 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Todos los posts
          </button>
          <button
            onClick={() => setActiveFilter('grooming')}
            className={`px-3.5 py-1.5 rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeFilter === 'grooming'
                ? 'bg-teal-600 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-teal-50 border border-slate-200'
            }`}
          >
            <span>✂️</span> Grooming & Spa
          </button>
          <button
            onClick={() => setActiveFilter('hotel')}
            className={`px-3.5 py-1.5 rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeFilter === 'hotel'
                ? 'bg-teal-600 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-teal-50 border border-slate-200'
            }`}
          >
            <span>🐱</span> CatHotel & VetMetroPark
          </button>
          <button
            onClick={() => setActiveFilter('urgencias')}
            className={`px-3.5 py-1.5 rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeFilter === 'urgencias'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-rose-50 border border-slate-200'
            }`}
          >
            <span>🚨</span> Urgencias 24/7
          </button>
          <button
            onClick={() => setActiveFilter('salud')}
            className={`px-3.5 py-1.5 rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeFilter === 'salud'
                ? 'bg-teal-600 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-teal-50 border border-slate-200'
            }`}
          >
            <span>💙</span> Historias Médicas
          </button>
          <button
            onClick={() => setActiveFilter('tips')}
            className={`px-3.5 py-1.5 rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeFilter === 'tips'
                ? 'bg-teal-600 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-teal-50 border border-slate-200'
            }`}
          >
            <span>💡</span> Consejos RD
          </button>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
            >
              {/* Media Container with badges */}
              <div className="relative aspect-square w-full bg-slate-100 overflow-hidden">
                <img
                  src={post.image}
                  alt="Post de VetMetro RD"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Top Category Badge */}
                {post.badge && (
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    <span>{post.badge}</span>
                  </div>
                )}

                {/* Instagram Icon watermark */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-xs text-slate-700 flex items-center justify-center shadow-xs">
                  <Instagram className="w-4 h-4 text-pink-600" />
                </div>

                {/* Hover Interaction Overlay */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white font-bold text-sm backdrop-blur-[2px]">
                  <div className="flex items-center gap-1.5">
                    <Heart className="w-5 h-5 fill-white" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>

              {/* Caption & Info Body */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="font-semibold text-teal-700">@vetmetropolitanard</span>
                    <span>{post.date}</span>
                  </div>

                  <p className="text-xs text-slate-700 line-clamp-3 leading-relaxed">
                    {post.caption}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {post.tags.slice(0, 2).map((t, idx) => (
                      <span key={idx} className="text-[11px] font-medium text-teal-600 bg-teal-50 px-2 py-0.5 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500 group-hover:text-teal-600 transition-colors flex items-center gap-1">
                    Ver post completo <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                  <span className="text-[11px] text-slate-400">
                    ❤️ {post.likes}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Social Callout Banner */}
        <div className="mt-12 bg-gradient-to-r from-teal-700 via-teal-800 to-cyan-900 rounded-2xl p-6 sm:p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-300">
              Comunidad Pet Friendly en República Dominicana
            </span>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight">
              ¿Viste algún servicio que le encantaría a tu consentido?
            </h3>
            <p className="text-xs text-teal-100/90 max-w-xl">
              Agenda tu cita online en 60 segundos con confirmación por WhatsApp o visítanos directamente en cualquiera de nuestras 3 sedes en Santo Domingo.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-3 rounded-xl bg-white hover:bg-teal-50 text-teal-900 font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-teal-700" />
              <span>Agendar Cita Ahora</span>
            </button>
            <a
              href={CLINIC_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Instagram className="w-4 h-4" />
              <span>Ver más en Instagram</span>
            </a>
          </div>
        </div>

      </div>

      {/* Interactive Modal to Inspect Post */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-150 relative">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Media */}
              <div className="relative aspect-square md:aspect-auto bg-slate-100 h-full">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content and Actions */}
              <div className="p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-purple-600 flex items-center justify-center text-white text-xs">
                      🐾
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">vetmetropolitanard</p>
                      <p className="text-[10px] text-slate-400">Santo Domingo, RD • {selectedPost.date}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-700 mt-3 leading-relaxed whitespace-pre-wrap">
                    {selectedPost.caption}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-3">
                    {selectedPost.tags.map((t, i) => (
                      <span key={i} className="text-[11px] text-teal-600 font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-xs text-slate-500 mt-4 pt-3 border-t border-slate-100">
                    <span className="flex items-center gap-1 font-bold text-slate-700">
                      <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                      {selectedPost.likes} me gusta
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4 text-slate-400" />
                      {selectedPost.comments} comentarios
                    </span>
                  </div>
                </div>

                <div className="pt-5 space-y-2">
                  <button
                    onClick={() => handleBookFromPost(selectedPost)}
                    className="w-full py-2.5 px-4 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-md shadow-teal-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Agendar este servicio</span>
                  </button>

                  <a
                    href={selectedPost.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Instagram className="w-4 h-4 text-pink-600" />
                    <span>Abrir en Instagram oficial</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
