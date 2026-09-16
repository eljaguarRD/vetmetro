import React, { useState } from 'react';
import { NavbarV3 } from './NavbarV3';
import { HeroConciergeV3 } from './HeroConciergeV3';
import { EmergencyBarV3 } from './EmergencyBarV3';
import { SedesExplorerV3 } from './SedesExplorerV3';
import { ClinicalHospitalityHubV3 } from './ClinicalHospitalityHubV3';
import { MedicalTeamV3 } from './MedicalTeamV3';
import { PatientStoriesV3 } from './PatientStoriesV3';
import { CareFaqV3 } from './CareFaqV3';
import { FooterV3 } from './FooterV3';
import { MobileStickyBarV3 } from './MobileStickyBarV3';
import { PetType } from '../../types';

interface Version3LayoutProps {
  onOpenBooking: (prefill?: {
    serviceId?: string;
    branchId?: string;
    petType?: PetType;
  }) => void;
}

export const Version3Layout: React.FC<Version3LayoutProps> = ({ onOpenBooking }) => {
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);

  return (
    <div className="bg-[#FBF9F5] text-stone-900 min-h-screen flex flex-col font-sans selection:bg-[#0D4740] selection:text-white pb-16 lg:pb-0">
      
      {/* 1. Clinical Dispatch & Luxury Navigation */}
      <NavbarV3
        onOpenBooking={onOpenBooking}
        onOpenEmergency={() => setIsEmergencyModalOpen(true)}
      />

      {/* 2. Hero with Integrated Concierge Care Desk */}
      <HeroConciergeV3
        onOpenBooking={onOpenBooking}
        onOpenEmergency={() => setIsEmergencyModalOpen(true)}
      />

      {/* 3. Emergency 24/7 Protocol & In-Transit Guide */}
      <EmergencyBarV3
        isEmergencyModalOpen={isEmergencyModalOpen}
        onCloseEmergencyModal={() => setIsEmergencyModalOpen(false)}
        onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)}
      />

      {/* 4. The 3 Santo Domingo Locations Spatial Explorer */}
      <SedesExplorerV3 onOpenBooking={onOpenBooking} />

      {/* 5. Streamlined Bento Hub: Medicina Avanzada + Espacios Exclusivos (CatHotel & Park) */}
      <ClinicalHospitalityHubV3 onOpenBooking={onOpenBooking} />

      {/* 6. Credentialed Medical Team with Exequátur */}
      <MedicalTeamV3 onOpenBooking={() => onOpenBooking()} />

      {/* 7. Patient Journey, 4.9 Google Reviews & Instagram Bridge */}
      <PatientStoriesV3 onOpenBooking={onOpenBooking} />

      {/* 8. Care FAQ & Hospital Preparation Guide */}
      <CareFaqV3 />

      {/* 9. Institutional Hospital Footer */}
      <FooterV3
        onOpenBooking={() => onOpenBooking()}
        onOpenEmergency={() => setIsEmergencyModalOpen(true)}
      />

      {/* 10. Sticky Bottom Mobile Conversion Bar */}
      <MobileStickyBarV3
        onOpenBooking={() => onOpenBooking()}
        onOpenEmergency={() => setIsEmergencyModalOpen(true)}
      />

    </div>
  );
};
