import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, Phone } from 'lucide-react';
import { FAQS, CLINIC_INFO } from '../../data/veterinariaData';

export const CareFaqV3: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FBF9F5] border-b border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D4740] bg-emerald-100/60 px-3 py-1 rounded-full border border-emerald-200/80 inline-block mb-3">
            Preguntas Frecuentes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight">
            Transparencia y Claridad Antes de tu Visita
          </h2>
          <p className="text-stone-600 text-sm mt-2">
            Resolvemos las dudas más habituales sobre nuestros protocolos médicos, ingresos de urgencia y hospedaje.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-stone-900 hover:text-[#0D4740] transition-colors cursor-pointer text-base sm:text-lg"
                >
                  <span>{faq.q}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 bg-emerald-100 text-[#0D4740]' : 'text-stone-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra Contact Assistance Box */}
        <div className="mt-10 p-6 rounded-3xl bg-[#0D4740] text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="font-serif font-bold text-lg">¿Tienes un caso médico específico o duda urgente?</p>
            <p className="text-xs text-emerald-200 mt-0.5">Nuestro equipo de coordinadoras responde directo en horario hábil y guardia médica.</p>
          </div>

          <a
            href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hola%20VetMetro,%20tengo%20una%20pregunta%20específica:`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-5 rounded-xl bg-white hover:bg-stone-100 text-[#0D4740] font-bold text-xs flex items-center gap-2 shrink-0 transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
