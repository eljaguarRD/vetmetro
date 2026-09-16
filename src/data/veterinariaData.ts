import { ServiceItem, Doctor, Testimonial, BranchLocation, InstagramPost } from '../types';

export const CLINIC_INFO = {
  name: 'Clínica Veterinaria Metropolitana',
  brandShort: 'VetMetro RD',
  tagline: 'Hospital Veterinario 24/7, Grooming, CatHotel y Bienestar en Santo Domingo',
  phone: '(809) 472-4848',
  phoneEmergency: '(809) 383-3234',
  whatsapp: '18093833234',
  whatsappDisplay: '(809) 383-3234',
  email: 'info@vetmetro.do',
  instagramHandle: '@vetmetropolitanard',
  instagramUrl: 'https://www.instagram.com/vetmetropolitanard/?hl=en',
  facebookHandle: 'VetMetropolitanaRD',
  facebookUrl: 'https://www.facebook.com/VetMetropolitanaRD/',
  city: 'Santo Domingo, República Dominicana',
  mainAddress: 'C/ Manuel de Jesús Troncoso #61, Ensanche Paraíso, D.N.',
  emergencyHours: 'Urgencias Médicas: 24 Horas / 7 Días en Sede Ensanche Paraíso',
  regularHours: 'Lunes a Sábado: 8:00 AM - 8:00 PM | Domingos: 9:00 AM - 6:00 PM',
  googleRating: 4.9,
  totalReviews: 1240,
  yearsExperience: 30,
  patientsTreated: '45,000+'
};

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'post-1',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=700',
    caption: '¡El cambio de look de Tommy en nuestro Grooming & Spa! ✂️🛁 Salir oliendo a frescor y con pelaje sedoso es su plan favorito de los viernes. Recuerda agendar con tiempo los baños de tu consentido. ✨🐾',
    likes: 342,
    comments: 28,
    date: 'Hace 2 días',
    category: 'grooming',
    tags: ['#VetMetroRD', '#GroomingRD', '#PeluqueriaCanina', '#SantoDomingoMascotas'],
    url: 'https://www.instagram.com/vetmetropolitanard/?hl=en',
    badge: 'Grooming & Spa'
  },
  {
    id: 'post-2',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=700',
    caption: '¿Sabías que en VetMetro contamos con nuestro exclusivo CatHotel? 🐱🏰 Suites diseñadas sin ruidos caninos, enriquecimiento ambiental y supervisión médica para que tus michis vacacionen felices mientras viajas.',
    likes: 489,
    comments: 42,
    date: 'Hace 4 días',
    category: 'hotel',
    tags: ['#CatHotelRD', '#MedicinaFelina', '#GatosRD', '#VetMetropolitanaRD'],
    url: 'https://www.instagram.com/vetmetropolitanard/?hl=en',
    badge: 'CatHotel'
  },
  {
    id: 'post-3',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=700',
    caption: 'Tarde de recreación, amigos y saltos en nuestro parque #VetMetroPark 🎾🐕 El ejercicio y la estimulación mental son vitales para la salud de tu perro. ¡Pregunta por nuestros pases de Daycare y Hospedaje!',
    likes: 512,
    comments: 31,
    date: 'Hace 6 días',
    category: 'hotel',
    tags: ['#VetMetroPark', '#HospedajeCanino', '#DogLifeRD', '#MascotasRD'],
    url: 'https://www.instagram.com/vetmetropolitanard/?hl=en',
    badge: 'VetMetroPark'
  },
  {
    id: 'post-4',
    image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&q=80&w=700',
    caption: 'Equipo médico de guardia 24 horas en Ensanche Paraíso 🚨🩺 Las emergencias no tienen horario, y nuestro quirófano estéril con monitoreo avanzado y UCI está siempre listo para actuar.',
    likes: 673,
    comments: 54,
    date: 'Hace 1 semana',
    category: 'urgencias',
    tags: ['#Urgencias24Horas', '#HospitalVeterinarioRD', '#CuidadoAnimal', '#VetMetroRD'],
    url: 'https://www.instagram.com/vetmetropolitanard/?hl=en',
    badge: 'Urgencias 24/7'
  },
  {
    id: 'post-5',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=700',
    caption: '¡Tips de salud para el clima de República Dominicana! ☀️🇩🇴 El calor y la humedad facilitan la presencia de garrapatas y ácaros. Mantén al día la desparasitación y revisa el esquema de vacunación este mes.',
    likes: 418,
    comments: 23,
    date: 'Hace 1 semana',
    category: 'tips',
    tags: ['#SaludAnimalRD', '#PrevencionVeterinaria', '#VacunasRD', '#SantoDomingo'],
    url: 'https://www.instagram.com/vetmetropolitanard/?hl=en',
    badge: 'Consejos Vet'
  },
  {
    id: 'post-6',
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=700',
    caption: '¡Lola superó con éxito su cirugía y hoy se va a casa feliz y recuperada! 💙 Ver a sus tutores abrazarla no tiene precio. ¡Gracias por confiar la vida de sus compañeros a la familia VetMetro!',
    likes: 835,
    comments: 69,
    date: 'Hace 2 semanas',
    category: 'salud',
    tags: ['#HistoriasFelices', '#CirugiaVeterinaria', '#AmorAnimal', '#VetMetropolitanaRD'],
    url: 'https://www.instagram.com/vetmetropolitanard/?hl=en',
    badge: 'Historia de Éxito'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'consulta-general',
    name: 'Consulta Médica General y Preventiva',
    category: 'general',
    shortDesc: 'Chequeo clínico exhaustivo, control nutricional y plan de salud.',
    description: 'Examen de todos los sistemas corporales, evaluación de peso, mucosas, auscultación cardiopulmonar y orientación sanitaria preventiva adaptada a República Dominicana.',
    duration: '30 - 45 min',
    priceFrom: 1500,
    popular: true,
    icon: 'Stethoscope',
    features: [
      'Examen físico general detallado',
      'Control de peso, temperatura y frecuencia cardíaca',
      'Historial médico digital y receta personalizada',
      'Recomendaciones nutricionales y antiparasitarias'
    ]
  },
  {
    id: 'urgencias-24-7',
    name: 'Urgencias 24/7 y Hospitalización UCI',
    category: 'urgencias',
    shortDesc: 'Sede Ensanche Paraíso disponible las 24 horas del día con guardia médica.',
    description: 'Atención inmediata de traumatismos, intoxicaciones, torsiones gástricas, convulsiones y emergencias obstétricas. Monitoreo intensivo y oxigenoterapia continua.',
    duration: 'Atención Inmediata',
    priceFrom: 2500,
    urgent: true,
    popular: true,
    icon: 'AlertCircle',
    features: [
      'Ingreso prioritario sin cita previa',
      'Oxígeno central y bombas de infusión continua',
      'Laboratorio de urgencias in-house 24 hrs',
      'Quirófano estéril equipado para intervenciones críticas'
    ]
  },
  {
    id: 'grooming-spa',
    name: 'Grooming & Pet Spa',
    category: 'bienestar',
    shortDesc: 'Baños medicados, cortes de raza, desenredo y spa relajante.',
    description: 'Estilistas caninos y felinos expertos. Baños hidratantes con champús hipoalergénicos, secado suave, corte de uñas, limpieza de oídos y glándulas perianales.',
    duration: '60 - 90 min',
    priceFrom: 1200,
    popular: true,
    icon: 'Sparkles',
    features: [
      'Cortes de raza tijera o máquina profesional',
      'Champús dermocosméticos y medicados para alergias',
      'Limpieza de oídos y corte/limado de uñas incluido',
      'Trato libre de estrés con aromaterapia'
    ]
  },
  {
    id: 'hospedaje-cattel-park',
    name: 'Hospedaje, CatHotel & VetMetroPark',
    category: 'bienestar',
    shortDesc: 'Alojamiento premium con supervisión médica y área de juegos al aire libre.',
    description: 'Suites climatizadas para perros y gatos. El CatHotel ofrece un ambiente tranquilo y vertical sin contacto visual ni sonoro con perros. En VetMetroPark disfrutan de juego seguro.',
    duration: 'Por noche',
    priceFrom: 1800,
    popular: true,
    icon: 'Home',
    features: [
      'Supervisión de médicos veterinarios 24/7',
      'CatHotel exclusivo libre de estrés canino',
      'Horas de recreación y juego en VetMetroPark',
      'Reportes diarios con fotos y videos por WhatsApp'
    ]
  },
  {
    id: 'vacunacion-preventiva',
    name: 'Vacunación y Desparasitación',
    category: 'general',
    shortDesc: 'Planes de inmunización certificados para cachorros, adultos y gatos.',
    description: 'Vacunas Séxtuple, Parvovirus, Rabia, Tos de las Perreras (KC) y Triple Felina. Desparasitación integral contra nematodos, giardias y garrapatas tropicales.',
    duration: '20 - 30 min',
    priceFrom: 1400,
    icon: 'ShieldCheck',
    features: [
      'Biológicos importados de máxima eficacia',
      'Desparasitación interna y externa de amplio espectro',
      'Carnet sanitario oficial de vacunación',
      'Recordatorio automático de próximas dosis por WhatsApp'
    ]
  },
  {
    id: 'cirugia-especializada',
    name: 'Cirugía y Quirófano Avanzado',
    category: 'especialidades',
    shortDesc: 'Quirófano estéril con anestesia inhalatoria y monitoreo multiparamétrico.',
    description: 'Esterilizaciones y castraciones profilácticas, cirugías de tejidos blandos, traumatología ortopédica, retiro de cuerpos extraños y procedimientos reconstructivos.',
    duration: '1 a 3 hrs',
    priceFrom: 6500,
    icon: 'Activity',
    features: [
      'Anestesia inhalatoria de máxima seguridad',
      'Monitoreo hemodinámico (ECG, capnografía, presión y SpO2)',
      'Protocolo multimodal para control total del dolor',
      'Recuperación en sala postoperatoria climatizada'
    ]
  },
  {
    id: 'diagnostico-imagenes',
    name: 'Rayos X Digital y Ecografía Doppler',
    category: 'diagnostico',
    shortDesc: 'Diagnóstico por imágenes de alta resolución con informe médico rápido.',
    description: 'Rayos X digital directo con mínima radiación y ecografía abdominal de alta resolución para evaluar órganos internos, detección de masas y preñeces.',
    duration: '30 - 45 min',
    priceFrom: 2200,
    icon: 'Scan',
    features: [
      'Imágenes digitales de alta definición en minutos',
      'Ecografía abdominal, cardíaca y reproductiva',
      'Informe clínico firmado por especialista',
      'Envío instantáneo de placas a tu correo y WhatsApp'
    ]
  },
  {
    id: 'visitas-domicilio',
    name: 'Atención Veterinaria a Domicilio (House Calls)',
    category: 'general',
    shortDesc: 'Médico veterinario en la comodidad de tu hogar en el Gran Santo Domingo.',
    description: 'Ideal para mascotas nerviosas, familias con varios consentidos o situaciones donde el traslado sea complejo. Consulta, vacunas y tratamientos in situ.',
    duration: '45 - 60 min',
    priceFrom: 2500,
    icon: 'Car',
    features: [
      'Cobertura en principales zonas del Distrito Nacional',
      'Evita el estrés del tráfico y traslado en vehículo',
      'Aplicación de vacunas, microchip y desparasitaciones',
      'Traslado asistido a clínica en caso de requerir exámenes'
    ]
  }
];

export const BRANCHES: BranchLocation[] = [
  {
    id: 'paraiso',
    name: 'Sede Ensanche Paraíso (Hospital y Urgencias 24/7)',
    address: 'C/ Manuel de Jesús Troncoso #61, Ensanche Paraíso',
    neighborhood: 'Ensanche Paraíso, D.N.',
    city: 'Santo Domingo, D.N.',
    phone: '(809) 472-4848',
    whatsapp: '18093833234',
    hours: 'Abierto 24 Horas / 365 Días',
    hoursShort: 'Abierto 24 Horas (Hospital & Urgencias)',
    emergencyHours: 'Servicio de Urgencias y Hospitalización Permanente',
    parking: 'Estacionamiento privado con seguridad',
    is24h: true,
    googleMapsUrl: 'https://maps.google.com/?q=Manuel+de+Jesus+Troncoso+61+Santo+Domingo',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&q=80&w=800',
    features: ['Urgencias 24 Horas', 'Quirófano & UCI', 'CatHotel', 'Laboratorio Express']
  },
  {
    id: 'arroyo-hondo',
    name: 'Sede Arroyo Hondo',
    address: 'C/ Luis Amiama Tió #101, Arroyo Hondo',
    neighborhood: 'Arroyo Hondo, D.N.',
    city: 'Santo Domingo, D.N.',
    phone: '(809) 472-4848',
    whatsapp: '18093833234',
    hours: 'Lunes a Sábado: 8:00 AM - 7:00 PM | Domingos: 9:00 AM - 2:00 PM',
    hoursShort: 'Lun - Sáb: 8am - 7pm | Dom: 9am - 2pm',
    emergencyHours: 'Derivación directa e inmediata a Sede Paraíso 24/7',
    parking: 'Parqueo frontal cómodo para clientes',
    is24h: false,
    googleMapsUrl: 'https://maps.google.com/?q=Luis+Amiama+Tio+101+Santo+Domingo',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
    features: ['Pet Grooming & Spa', 'Consultas Médicas', 'Vacunación', 'VetMetroPark']
  },
  {
    id: 'gazcue',
    name: 'Sede Gascue (Gazcue)',
    address: 'C/ Benito Monción #202, Gazcue',
    neighborhood: 'Gazcue, D.N.',
    city: 'Santo Domingo, D.N.',
    phone: '(809) 472-4848',
    whatsapp: '18093833234',
    hours: 'Lunes a Sábado: 8:00 AM - 7:00 PM | Domingos: 9:00 AM - 2:00 PM',
    hoursShort: 'Lun - Sáb: 8am - 7pm | Dom: 9am - 2pm',
    emergencyHours: 'Derivación directa e inmediata a Sede Paraíso 24/7',
    parking: 'Parqueo exclusivo para clientes',
    is24h: false,
    googleMapsUrl: 'https://maps.google.com/?q=Benito+Moncion+202+Santo+Domingo',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800',
    features: ['Consulta General', 'Medicina Preventiva', 'Farmacia', 'Control de Salud']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    ownerName: 'Pamela Santana',
    petName: 'Rocky',
    petBreed: 'Golden Retriever (4 años)',
    rating: 5,
    comment: 'Llegué un domingo en la madrugada a la sede de Paraíso con Rocky intoxicado. Lo atendieron de inmediato, le lavaron el estómago y quedó monitoreado. En 24 horas estaba de vuelta saltando feliz. El personal es súper amoroso y profesional.',
    date: 'Hace 3 días',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    serviceReceived: 'Urgencias 24 Horas & Hospitalización',
    verified: true
  },
  {
    id: 't-2',
    ownerName: 'Carlos De la Rosa',
    petName: 'Coco y Maya',
    petBreed: 'Shih Tzu & Maltés',
    rating: 5,
    comment: 'Llevo años haciendo el grooming de mis perros en la sede de Arroyo Hondo. El trato es impecable, salen oliendo riquísimo y con cortes de revista. Además el proceso de agendar por la web y confirmar por WhatsApp es súper rápido.',
    date: 'Hace 1 semana',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    serviceReceived: 'Grooming & Spa Canino',
    verified: true
  },
  {
    id: 't-3',
    ownerName: 'Laura Minaya',
    petName: 'Milo',
    petBreed: 'Gato Persa (2 años)',
    rating: 5,
    comment: 'El CatHotel de VetMetro es una maravilla. Milo se estresa muchísimo con los perros, y en VetMetro tienen un área completamente separada y silenciosa para gatos. Me enviaron fotos y videos todos los días durante mis vacaciones.',
    date: 'Hace 2 semanas',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    serviceReceived: 'Hospedaje CatHotel',
    verified: true
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'doc-1',
    name: 'Dra. Patricia Valenzuela',
    specialty: 'Directora Médica & Cirugía General',
    license: 'Exeq. Médico Veterinario RD #1492',
    experienceYears: 16,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600',
    education: 'UASD • Especialidad en Cirugía y Manejo Crítico de Pequeñas Especies',
    badges: ['Cirugía de Tejidos', 'Cuidados Críticos', 'Liderazgo Clínico']
  },
  {
    id: 'doc-2',
    name: 'Dr. Marcos Peña',
    specialty: 'Jefe del Servicio de Urgencias 24/7',
    license: 'Exeq. Médico Veterinario RD #2018',
    experienceYears: 12,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600',
    education: 'UNPHU • Diplomado en Medicina de Urgencias y Cuidados Intensivos',
    badges: ['Soporte Vital', 'Urgencias 24h', 'Traumatología']
  },
  {
    id: 'doc-3',
    name: 'Dra. Gabriela Rosario',
    specialty: 'Medicina Felina & Diagnóstico Ecográfico',
    license: 'Exeq. Médico Veterinario RD #2841',
    experienceYears: 9,
    image: 'https://images.unsplash.com/photo-1594824813589-3221b6a1e387?auto=format&fit=crop&q=80&w=600',
    education: 'UNIBE / Postgrado en Imagenología y Medicina Felina (Cat Friendly)',
    badges: ['Cat Friendly', 'Ecografía Doppler', 'Medicina Preventiva']
  }
];

export const FAQS = [
  {
    q: '¿Cuál de las sedes atiende emergencias las 24 horas?',
    a: 'Nuestra sede principal en Ensanche Paraíso (C/ Manuel de Jesús Troncoso #61) cuenta con servicio de urgencias médicas, quirófano activo y hospitalización las 24 horas del día, los 365 días del año. Puedes acudir directamente o llamar al (809) 383-3234.'
  },
  {
    q: '¿Cómo funciona la reserva de cita online?',
    a: 'Elige la mascota, el servicio deseado, tu sede de preferencia y el horario. Al enviar el formulario, el sistema genera tu código de cita y te conecta de inmediato con nuestro WhatsApp oficial para confirmación instantánea sin esperas.'
  },
  {
    q: '¿Qué requisitos piden para el servicio de hospedaje o CatHotel?',
    a: 'Para la seguridad de todos los huéspedes, requerimos carnet de vacunas al día (múltiple y rabia), desparasitación reciente y aplicación de preventivo contra pulgas/garrapatas. Si le falta alguna dosis, podemos aplicársela al momento del ingreso.'
  },
  {
    q: '¿Hacen servicio de Grooming o baño para gatos?',
    a: '¡Sí! Contamos con especialistas capacitados en estética felina, utilizando técnicas de bajo estrés y productos adecuados para su piel sensible.'
  },
  {
    q: '¿Qué formas de pago aceptan?',
    a: 'Aceptamos efectivo (RD$ y USD), tarjetas de crédito/débito (Visa, Mastercard), transferencias bancarias locales (Banco Popular, Banreservas, BHD) y pagos vía enlace digital.'
  }
];
