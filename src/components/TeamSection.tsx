import React from 'react';
import { Award, Calendar, CheckCircle2, GraduationCap } from 'lucide-react';
import { DOCTORS } from '../data/veterinariaData';

interface TeamSectionProps {
  onOpenBooking: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="equipo" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-teal-600 font-extrabold text-xs tracking-wider uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200/60">
            Cuerpo Médico Colegiado
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Especialistas Dedicados al Cuidado de tu Mascota
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Nuestro equipo combina rigurosidad científica, constante actualización en congresos internacionales y una vocación compasiva orientada al bienestar animal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-200 group"
            >
              <div>
                {/* Photo */}
                <div className="relative h-64 overflow-hidden bg-slate-200">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Award className="w-3 h-3 text-teal-400" />
                    <span>{doc.license}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 space-y-2.5">
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-bold text-teal-700 mt-0.5">
                      {doc.specialty}
                    </p>
                  </div>

                  <p className="text-xs text-slate-500 flex items-start gap-1.5 leading-relaxed">
                    <GraduationCap className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>{doc.education}</span>
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {doc.badges.map((badge, idx) => (
                      <span
                        key={idx}
                        className="bg-white text-slate-600 text-[10px] font-semibold px-2 py-0.5 rounded-md border border-slate-200"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 px-3 rounded-xl bg-white hover:bg-teal-50 text-teal-800 font-bold text-xs border border-teal-200 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-teal-600" />
                  <span>Agendar con Especialista</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 bg-teal-50/80 rounded-2xl border border-teal-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="text-xs sm:text-sm text-teal-950">
              <span className="font-bold block text-teal-900">Todos nuestros médicos veterinarios cuentan con Exequátur de ley y colegiatura profesional en RD.</span>
              <span>Historial clínico unificado: cada chequeo, vacuna y cirugía queda registrada en su ficha médica digital en las 3 sedes.</span>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="shrink-0 px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
          >
            Reservar Consulta Médica
          </button>
        </div>

      </div>
    </section>
  );
};
