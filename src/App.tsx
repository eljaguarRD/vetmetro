import React, { useState } from 'react';
import { Version3Layout } from './components/v3/Version3Layout';
import { BookingModal } from './components/BookingModal';
import { PetType } from './types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Booking prefill configuration
  const [bookingPrefill, setBookingPrefill] = useState<{
    serviceId?: string;
    petType?: PetType;
    branchId?: string;
    date?: string;
    isUrgent?: boolean;
  }>({});

  const handleOpenBooking = (prefill?: {
    serviceId?: string;
    petType?: PetType;
    branchId?: string;
    date?: string;
    isUrgent?: boolean;
  }) => {
    if (prefill) {
      setBookingPrefill(prefill);
    } else {
      setBookingPrefill({});
    }
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#0D4740] selection:text-white">
      {/* Optimized Flagship Experience */}
      <Version3Layout onOpenBooking={handleOpenBooking} />

      {/* Shared Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        prefillServiceId={bookingPrefill.serviceId}
        prefillPetType={bookingPrefill.petType}
        prefillBranchId={bookingPrefill.branchId}
        prefillDate={bookingPrefill.date}
      />
    </div>
  );
}
