import React from 'react';
import { Award, GraduationCap, ShieldCheck, Heart, Calendar } from 'lucide-react';
import { DOCTORS } from '../../data/veterinariaData';

interface MedicalTeamV3Props {
  onOpenBooking: () => void;
}

export const MedicalTeamV3: React.FC<MedicalTeamV3Props> = ({ onOpenBooking }) => {
  return (
    <section id="equipo" className="py-16 sm:py-24 bg-[#FBF9F5] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D4740] bg-emerald-100/60 px-3 py-1 rounded-full border border-emerald-200/80 inline-block mb-3">
            Cuerpo Médico Colegiado
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight leading-tight">
            Veterinarios con Vocación, Ciencia y Exequátur Oficial
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2.5 leading-relaxed">
            Nuestro equipo clínico combina formación de posgrado continua con una empatía profunda por los animales y la tranquilidad de sus tutores.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl border border-stone-200 shadow-md overflow-hidden flex flex-col justify-between group hover:shadow-xl transition-all"
            >
              <div>
                {/* Doctor Photo */}
                <div className="relative h-72 overflow-hidden bg-stone-100">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-bold text-stone-800 shadow-xs">
                    {doc.experienceYears} Años de Experiencia
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 space-y-3">
                  <div>
                    <span className="text-xs text-[#0D4740] font-bold uppercase tracking-wide block">
                      {doc.specialty}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-stone-900 mt-0.5">
                      {doc.name}
                    </h3>
                    <p className="text-[11px] text-stone-500 font-mono mt-0.5">
                      {doc.license}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-stone-100">
                    <p className="text-xs text-stone-600 leading-snug flex items-start gap-1.5">
                      <GraduationCap className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                      <span>{doc.education}</span>
                    </p>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {doc.badges.map((badge, idx) => (
                      <span
                        key={idx}
                        className="bg-stone-100 text-stone-700 text-[10px] font-medium px-2 py-0.5 rounded-md border border-stone-200"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Booking CTA per doctor */}
              <div className="p-6 pt-0">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 px-3 rounded-xl bg-stone-100 hover:bg-[#0D4740] text-stone-800 hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Consultar Disponibilidad</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
