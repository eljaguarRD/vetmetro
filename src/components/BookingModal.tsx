import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle, ShieldCheck, MessageCircle, AlertCircle, ArrowLeft, ArrowRight, User, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SERVICES, BRANCHES, DOCTORS, CLINIC_INFO } from '../data/veterinariaData';
import { PetType } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillServiceId?: string;
  prefillPetType?: PetType;
  prefillBranchId?: string;
  prefillDate?: string;
}

const AVAILABLE_TIMES = [
  '08:30', '09:15', '10:00', '10:45', '11:30', '14:00', '14:45', '15:30', '16:15', '17:00', '17:45', '18:30'
];

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  prefillServiceId,
  prefillPetType,
  prefillBranchId,
  prefillDate
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form states
  const [petType, setPetType] = useState<PetType>(prefillPetType || 'perro');
  const [petName, setPetName] = useState('');
  const [petAge, setPetAge] = useState('');
  const [serviceId, setServiceId] = useState(prefillServiceId || 'consulta-general');
  const [branchId, setBranchId] = useState(prefillBranchId || 'paraiso');
  const [doctorId, setDoctorId] = useState('cualquiera');
  const [date, setDate] = useState(
    prefillDate || new Date(Date.now() + 86400000).toISOString().split('T')[0]
  );
  const [timeSlot, setTimeSlot] = useState('10:00');
  const [ownerName, setOwnerName] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [bookingCode, setBookingCode] = useState('');

  // Update states when prefill props change
  useEffect(() => {
    if (prefillServiceId) setServiceId(prefillServiceId);
    if (prefillPetType) setPetType(prefillPetType);
    if (prefillBranchId) setBranchId(prefillBranchId);
    if (prefillDate) setDate(prefillDate);
  }, [prefillServiceId, prefillPetType, prefillBranchId, prefillDate]);

  if (!isOpen) return null;

  const currentService = SERVICES.find((s) => s.id === serviceId) || SERVICES[0];
  const currentBranch = BRANCHES.find((b) => b.id === branchId) || BRANCHES[0];

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!petName.trim()) {
        alert('Por favor indica el nombre de tu mascota.');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!timeSlot) {
        alert('Por favor selecciona una hora disponible.');
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (!ownerName.trim() || !ownerPhone.trim()) {
        alert('Por favor ingresa tu nombre y número de teléfono o WhatsApp.');
        return;
      }
      // Generate booking code
      const randomCode = 'VM-' + Math.floor(10000 + Math.random() * 90000);
      setBookingCode(randomCode);
      setStep(4);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Safe fallback
      }
    }
  };

  const getWhatsAppBookingUrl = () => {
    const message = `¡Hola VetMetro RD! Acabo de agendar una cita online con código *${bookingCode}*:%0A%0A` +
      `🐾 *Mascota:* ${petName} (${petType.toUpperCase()})%0A` +
      `🩺 *Servicio:* ${currentService.name}%0A` +
      `📅 *Fecha:* ${date} a las ${timeSlot} hrs%0A` +
      `🏥 *Sede en Santo Domingo:* ${currentBranch.name}%0A` +
      `👤 *Tutor:* ${ownerName} (${ownerPhone})%0A%0A` +
      `¿Podrían confirmarme la cita por este medio? Muchas gracias!`;
    return `https://wa.me/${CLINIC_INFO.whatsapp}?text=${message}`;
  };

  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent(`Cita VetMetro RD: ${petName} - ${currentService.name}`);
    const details = encodeURIComponent(`Cita médica para ${petName}. Sede: ${currentBranch.name}. Dirección: ${currentBranch.address}. Teléfono: ${CLINIC_INFO.phone}. Código de reserva: ${bookingCode}`);
    const location = encodeURIComponent(`${currentBranch.address}, Santo Domingo`);
    const startIso = `${date.replace(/-/g, '')}T${timeSlot.replace(':', '')}00`;
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${startIso}/${startIso}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-teal-700 via-teal-800 to-slate-900 text-white p-5 sm:p-6 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">🐾</span>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-300">
                VetMetro RD • Agendamiento Online
              </span>
              <span className="bg-teal-400/20 text-teal-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-teal-400/30">
                Confirmación por WhatsApp
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              {step === 4 ? '¡Cita Registrada con Éxito!' : 'Reserva la Cita de tu Consentido'}
            </h2>
            <p className="text-xs text-teal-100/80 mt-0.5">
              {step === 1 && 'Paso 1 de 3: Cuéntanos sobre tu mascota y el motivo'}
              {step === 2 && 'Paso 2 de 3: Elige la sede en Santo Domingo, fecha y horario'}
              {step === 3 && 'Paso 3 de 3: Datos del tutor para la confirmación'}
              {step === 4 && 'Tu cupo ha sido reservado en nuestro sistema'}
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-xl transition-colors cursor-pointer"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator (If not completed) */}
        {step < 4 && (
          <div className="bg-slate-100 px-6 py-2.5 border-b border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-500">
            <div className={`flex items-center gap-1.5 ${step >= 1 ? 'text-teal-700 font-bold' : ''}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 1 ? 'bg-teal-600 text-white' : 'bg-slate-300'}`}>1</span>
              <span>Mascota</span>
            </div>
            <div className="w-8 h-px bg-slate-300" />
            <div className={`flex items-center gap-1.5 ${step >= 2 ? 'text-teal-700 font-bold' : ''}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 2 ? 'bg-teal-600 text-white' : 'bg-slate-300'}`}>2</span>
              <span>Sede & Horario</span>
            </div>
            <div className="w-8 h-px bg-slate-300" />
            <div className={`flex items-center gap-1.5 ${step >= 3 ? 'text-teal-700 font-bold' : ''}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 3 ? 'bg-teal-600 text-white' : 'bg-slate-300'}`}>3</span>
              <span>Tutor</span>
            </div>
          </div>
        )}

        {/* Body Form */}
        <div className="p-5 sm:p-7">
          {/* STEP 1: Pet Details */}
          {step === 1 && (
            <form onSubmit={handleNextStep} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Tipo de Mascota *
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { id: 'perro', label: 'Perro', icon: '🐕' },
                    { id: 'gato', label: 'Gato', icon: '🐈' },
                    { id: 'exotico', label: 'Exótico', icon: '🐇' },
                    { id: 'otro', label: 'Otro', icon: '🦜' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPetType(p.id as PetType)}
                      className={`flex flex-col items-center justify-center py-2.5 px-1 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                        petType === p.id
                          ? 'bg-teal-50 border-teal-500 text-teal-800 shadow-xs ring-2 ring-teal-500/20'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <span className="text-xl mb-0.5">{p.icon}</span>
                      <span>{p.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Nombre de tu Mascota *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Bruno, Luna, Toby..."
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Edad o Raza (Opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. 2 años / Shih Tzu / Mestizo"
                    value={petAge}
                    onChange={(e) => setPetAge(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Servicio Requerido *
                </label>
                <select
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 cursor-pointer"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.duration})
                    </option>
                  ))}
                </select>
                <p className="text-xs text-slate-500 mt-1.5 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  {currentService.shortDesc}
                </p>
              </div>

              <div className="pt-3 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-md shadow-teal-600/20 flex items-center gap-2 cursor-pointer"
                >
                  <span>Siguiente: Sede y Horario</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 2: Branch, Date & Slot */}
          {step === 2 && (
            <form onSubmit={handleNextStep} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Selecciona la Sede en Santo Domingo *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {BRANCHES.map((b) => (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setBranchId(b.id)}
                      className={`text-left p-3 rounded-xl border text-xs transition-all cursor-pointer ${
                        branchId === b.id
                          ? 'bg-teal-50 border-teal-500 ring-2 ring-teal-500/20'
                          : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <div className="font-bold text-slate-900">{b.name}</div>
                      <div className="text-slate-500 text-[11px] mt-0.5 line-clamp-1">{b.address}</div>
                      <div className="text-teal-700 font-semibold text-[10px] mt-1">
                        {b.is24h ? '🚨 24/7 Urgencias' : '8:00 AM - 7:00 PM'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Fecha de Atención *
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Médico Veterinario
                  </label>
                  <select
                    value={doctorId}
                    onChange={(e) => setDoctorId(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 cursor-pointer"
                  >
                    <option value="cualquiera">Primer veterinario disponible (Recomendado)</option>
                    {DOCTORS.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name} ({d.specialty})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Horarios Disponibles para {date} *
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {AVAILABLE_TIMES.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTimeSlot(slot)}
                      className={`py-2 px-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                        timeSlot === slot
                          ? 'bg-teal-600 text-white border-teal-600 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {slot} hrs
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-slate-500 mt-1.5 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-teal-600" />
                  Atención puntual: tiempo de espera reducido garantizado.
                </p>
              </div>

              <div className="pt-3 flex items-center justify-between border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Volver</span>
                </button>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-md shadow-teal-600/20 flex items-center gap-2 cursor-pointer"
                >
                  <span>Siguiente: Datos del Tutor</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Owner & Confirmation */}
          {step === 3 && (
            <form onSubmit={handleNextStep} className="space-y-4">
              <div className="bg-teal-50/70 border border-teal-200 rounded-xl p-3.5 flex items-start gap-3">
                <span className="text-2xl">📋</span>
                <div className="text-xs text-teal-900">
                  <div className="font-bold text-sm text-teal-950">
                    Resumen: {petName} ({petType.toUpperCase()})
                  </div>
                  <div>Servicio: {currentService.name}</div>
                  <div>Fecha y Hora: {date} a las {timeSlot} hrs • {currentBranch.name}</div>
                  <div className="text-teal-800 mt-0.5 font-medium">Duración aprox: {currentService.duration} • Pago directo en sede</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Tu Nombre y Apellido *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. María Fernández"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Teléfono / WhatsApp de Contacto *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(809) 000-0000 o (829) 000-0000"
                    value={ownerPhone}
                    onChange={(e) => setOwnerPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Correo Electrónico (Para envío de comprobante y receta)
                </label>
                <input
                  type="email"
                  placeholder="tucorreo@ejemplo.com"
                  value={ownerEmail}
                  onChange={(e) => setOwnerEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  ¿Algún síntoma o detalle para el equipo médico? (Opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ej. Viene por vacunas al día, o presenta pérdida de apetito desde ayer..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs font-medium text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500"
                />
              </div>

              <div className="pt-3 flex items-center justify-between border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Volver</span>
                </button>

                <button
                  type="submit"
                  id="btn-confirm-appointment"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-teal-600/25 flex items-center gap-2 cursor-pointer active:scale-98 transition-all"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Confirmar Cita</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Success */}
          {step === 4 && (
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto ring-8 ring-emerald-50">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div>
                <span className="inline-block bg-teal-50 text-teal-800 text-xs font-extrabold px-3 py-1 rounded-full border border-teal-200 mb-2">
                  CÓDIGO DE RESERVA: {bookingCode}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  ¡Listo, {ownerName.split(' ')[0]}! Te esperamos con {petName}
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mt-1">
                  Hemos reservado el turno en nuestra <strong className="text-slate-900">{currentBranch.name}</strong> para el{' '}
                  <span className="font-bold text-slate-900">{date} a las {timeSlot} hrs</span>.
                </p>
              </div>

              {/* Conversion Retention: WhatsApp Action */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 text-left space-y-3">
                <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-slate-600">
                  <Sparkles className="w-4 h-4 text-teal-600" />
                  <span>Notificación instantánea:</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={getWhatsAppBookingUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Confirmar por WhatsApp</span>
                  </a>

                  <a
                    href={getGoogleCalendarUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs border border-slate-300 flex items-center justify-center gap-2 transition-colors"
                  >
                    <Calendar className="w-4 h-4 text-slate-500" />
                    <span>Guardar en Google Calendar</span>
                  </a>
                </div>
              </div>

              {/* Recommendations */}
              <div className="bg-teal-50/70 border border-teal-200 rounded-xl p-3.5 text-xs text-teal-950 text-left space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-teal-900">
                  <ShieldCheck className="w-4 h-4 text-teal-700" />
                  Recomendaciones para el día de tu visita en Santo Domingo:
                </div>
                <ul className="list-disc pl-5 space-y-0.5 text-[11px] text-teal-800">
                  <li>Traer a tu perro con correa y a tu gato en kennel o transportadora cómoda.</li>
                  <li>Si vienes para ecografía o cirugías programadas, mantener 8 horas de ayuno de sólidos.</li>
                  <li>El pago se efectúa al finalizar la consulta en la clínica (efectivo, tarjeta o transferencia).</li>
                </ul>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors cursor-pointer"
              >
                Cerrar Ventana
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
