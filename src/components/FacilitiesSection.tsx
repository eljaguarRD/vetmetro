import React from 'react';
import { ShieldCheck, Heart, Sparkles, CheckCircle } from 'lucide-react';

export const FacilitiesSection: React.FC = () => {
  const facilities = [
    {
      title: 'CatHotel: Alojamiento Exclusivo Felino',
      desc: 'Área completamente separada de caninos, con suites verticales enriquecidas, difusores de feromonas (Feliway) y supervisión las 24 horas para unas vacaciones libres de estrés.',
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800',
      tag: 'Cat Friendly & Cero Estrés'
    },
    {
      title: 'VetMetroPark: Parque Recreativo al Aire Libre',
      desc: 'Áreas verdes diseñadas para el juego, socialización controlada y esparcimiento saludable de perritos, con supervisión constante de cuidadores y entrenadores.',
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800',
      tag: 'Recreación & Juegos'
    },
    {
      title: 'Pet Spa & Grooming Profesional',
      desc: 'Cabinas climatizadas, bañeras ergonómicas de acero inoxidable, cosmética hipoalergénica importada y estilistas certificados para cortes de raza.',
      image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800',
      tag: 'Estética & Bienestar'
    },
    {
      title: 'Quirófano & Hospitalización 24/7 (Paraíso)',
      desc: 'Anestesia inhalatoria computarizada, monitoreo multiparamétrico continuo, laboratorio de respuesta en 15 min y guardia médica nocturna permanente.',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800',
      tag: 'Sede Paraíso 24/7'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-teal-400 font-extrabold text-xs tracking-wider uppercase bg-teal-950/60 border border-teal-500/30 px-3.5 py-1.5 rounded-full">
            Instalaciones y Experiencia VetMetro
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-3">
            Espacios Diseñados para la Salud y Alegría de tu Mascota
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Instalaciones de primer nivel en Santo Domingo con la mayor tecnología clínica y áreas recreativas únicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((fac, idx) => (
            <div
              key={idx}
              className="group bg-slate-800/60 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-teal-500/50 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-xs text-teal-300 font-bold text-xs px-3 py-1 rounded-full border border-teal-500/30">
                  {fac.tag}
                </div>
              </div>

              <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {fac.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                    {fac.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
