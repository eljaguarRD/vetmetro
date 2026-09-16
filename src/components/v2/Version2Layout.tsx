import React from 'react';
import { HeaderV2 } from './HeaderV2';
import { HeroV2 } from './HeroV2';
import { ServicesV2 } from './ServicesV2';
import { FacilitiesV2 } from './FacilitiesV2';
import { InstagramV2 } from './InstagramV2';
import { BranchesV2 } from './BranchesV2';
import { QuickBookingV2 } from './QuickBookingV2';
import { FooterV2 } from './FooterV2';
import { PetType } from '../../types';

interface Version2LayoutProps {
  onOpenBooking: (prefill?: {
    serviceId?: string;
    branchId?: string;
    petType?: PetType;
  }) => void;
}

export const Version2Layout: React.FC<Version2LayoutProps> = ({ onOpenBooking }) => {
  return (
    <div className="bg-[#FAF9F6] text-stone-900 min-h-screen flex flex-col font-sans selection:bg-[#0B4F4F] selection:text-white">
      {/* 1. Boutique Header */}
      <HeaderV2 onOpenBooking={onOpenBooking} />

      {/* 2. Hero Section with Editorial Value Proposition & Quick Sede Concierge */}
      <HeroV2 onOpenBooking={onOpenBooking} />

      {/* 3. Clinical & Wellness Services (WITHOUT fake prices, pure value and fast booking) */}
      <ServicesV2 onOpenBooking={onOpenBooking} />

      {/* 4. Signature Spaces: CatHotel, VetMetroPark, 24/7 Hospital */}
      <FacilitiesV2 onOpenBooking={onOpenBooking} />

      {/* 5. Direct Instagram Bridge (@vetmetropolitanard) with high-converting post booking */}
      <InstagramV2 onOpenBooking={onOpenBooking} />

      {/* 6. The 3 Santo Domingo Branches (Paraíso, Arroyo Hondo, Gazcue) */}
      <BranchesV2 onOpenBooking={onOpenBooking} />

      {/* 7. Fast WhatsApp / Online Booking Section */}
      <QuickBookingV2 onOpenBooking={() => onOpenBooking()} />

      {/* 8. Boutique Medical Footer */}
      <FooterV2 onOpenBooking={() => onOpenBooking()} />
    </div>
  );
};
