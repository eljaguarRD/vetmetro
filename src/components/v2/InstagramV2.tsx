import React, { useState } from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink, Calendar, Sparkles, CheckCircle2, ArrowRight, TrendingUp } from 'lucide-react';
import { INSTAGRAM_POSTS, CLINIC_INFO } from '../../data/veterinariaData';
import { InstagramPost } from '../../types';

interface InstagramV2Props {
  onOpenBooking: (prefill?: { serviceId?: string }) => void;
}

export const InstagramV2: React.FC<InstagramV2Props> = ({ onOpenBooking }) => {
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);

  const handlePostBooking = (post: InstagramPost) => {
    let serviceId = 'consulta-general';
    if (post.category === 'grooming') serviceId = 'grooming-spa';
    else if (post.category === 'hotel') serviceId = 'hospedaje-cattel-park';
    else if (post.category === 'urgencias') serviceId = 'urgencias-24-7';

    onOpenBooking({ serviceId });
  };

  return (
    <section id="instagram-v2" className="py-16 sm:py-24 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200/70 text-xs font-bold text-stone-800 mb-3">
              <Instagram className="w-3.5 h-3.5 text-pink-600" />
              <span>Comunidad VetMetro en Redes</span>
              <span className="text-stone-300">•</span>
              <span className="text-pink-700 font-extrabold">{CLINIC_INFO.instagramHandle}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight">
              Momentos reales, historias que inspiran confianza
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl">
              Mira el día a día de nuestros pacientes en Paraíso, Arroyo Hondo y Gazcue. Historias de recuperación, consentidos en el Spa y vacaciones en el CatHotel.
            </p>
          </div>

          {/* Direct Profile CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={CLINIC_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-xs"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Seguir en Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
            </a>
          </div>
        </div>

        {/* Dynamic Instagram Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSTAGRAM_POSTS.slice(0, 6).map((post) => (
            <div
              key={post.id}
              className="bg-stone-50/70 rounded-3xl border border-stone-200 overflow-hidden hover:border-stone-400 hover:bg-white transition-all duration-200 shadow-2xs flex flex-col justify-between group"
            >
              <div>
                {/* Image Container with Instagram Overlay */}
                <div className="relative h-64 overflow-hidden bg-stone-200">
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {post.badge}
                  </div>

                  {/* Likes and Comments Overlay */}
                  <div className="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-3 font-semibold">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                      <span>{post.likes}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5 text-stone-300" />
                      <span>{post.comments}</span>
                    </span>
                  </div>
                </div>

                {/* Caption Content */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-stone-500">
                    <span className="font-bold text-stone-700">@vetmetropolitanard</span>
                    <span>{post.date}</span>
                  </div>

                  <p className="text-xs text-stone-700 line-clamp-3 leading-relaxed">
                    {post.caption}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {post.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="text-[10px] text-stone-500 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button: Bridge from Instagram post to confirmed clinic booking */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => handlePostBooking(post)}
                  className="w-full py-2.5 px-3 rounded-xl bg-white hover:bg-emerald-50 text-[#0B4F4F] font-bold text-xs border border-stone-200 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Agendar este servicio</span>
                  <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Agency pitch highlight: Why this converts social media into revenue */}
        <div className="mt-12 bg-gradient-to-r from-[#0B4F4F] to-[#083D3D] rounded-3xl text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <TrendingUp className="w-4 h-4" />
              <span>Puente de Alta Conversión</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              De seguidores en Instagram a citas confirmadas en consultorio
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Al conectar las publicaciones con un canal de agendamiento directo, los clientes que ven un corte de pelo, una suite del CatHotel o un caso médico pueden reservar inmediatamente sin perderse en mensajes directos sin responder.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking()}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-white text-[#0B4F4F] font-extrabold text-xs shadow-sm hover:bg-stone-50 transition-colors cursor-pointer"
          >
            Reservar Cita Ahora
          </button>
        </div>

      </div>
    </section>
  );
};
