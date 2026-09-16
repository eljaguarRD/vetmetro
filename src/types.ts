export type PetType = 'perro' | 'gato' | 'exotico' | 'otro';

export interface ServiceItem {
  id: string;
  name: string;
  category: 'general' | 'urgencias' | 'especialidades' | 'diagnostico' | 'bienestar';
  shortDesc: string;
  description: string;
  duration: string;
  priceFrom: number;
  popular?: boolean;
  urgent?: boolean;
  icon: string;
  features: string[];
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  license: string;
  experienceYears: number;
  image: string;
  education: string;
  badges: string[];
}

export interface Testimonial {
  id: string;
  ownerName: string;
  petName: string;
  petBreed: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
  serviceReceived: string;
  verified: boolean;
}

export interface BranchLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  whatsapp: string;
  hours: string;
  emergencyHours: string;
  parking: string;
  is24h?: boolean;
  mapEmbedUrl?: string;
  googleMapsUrl: string;
  image?: string;
  neighborhood?: string;
  features?: string[];
  hoursShort?: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  date: string;
  category: 'grooming' | 'salud' | 'hotel' | 'urgencias' | 'tips' | 'comunidad';
  tags: string[];
  url: string;
  badge?: string;
}

export interface AppointmentData {
  petType: PetType;
  petName: string;
  petAge?: string;
  ownerName: string;
  ownerPhone: string;
  ownerEmail?: string;
  serviceId: string;
  serviceName: string;
  branchId: string;
  branchName: string;
  date: string;
  timeSlot: string;
  doctorId?: string;
  notes?: string;
  isUrgent?: boolean;
}
