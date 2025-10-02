import { Language } from '../hooks/useLanguage';

export interface TranslationData {
  // Header
  headerName: string;
  headerTitle: string;
  headerSubtitle: string;
  downloadCV: string;
  contact: string;
  videoPresentation: string;
  viewExperience: string;
  technicalSkills: string;

  // Philosophy
  philosophyTitle: string;
  philosophyQuote: string;
  philosophyAuthor: string;

  // Video Section
  videoSectionTitle: string;
  videoSectionSubtitle: string;
  videoPlaceholderTitle: string;
  videoPlaceholderDescription: string;
  comingSoon: string;

  // Skills
  skillsTitle: string;

  // Experience
  experienceTitle: string;

  // About
  aboutTitle: string;
  aboutDescription1: string;
  aboutDescription2: string;

  // Contact
  contactTitle: string;
  contactDescription: string;
  addressLabel: string;
  whatsappLabel: string;
  emailLabel: string;
  mapTitle: string;
  mapDescription: string;
  scheduleTitle: string;
  scheduleDescription: string;
  scheduleButton: string;

  // Footer
  footerDescription: string;
}

export const translations: Record<Language, TranslationData> = {
  es: {
    headerName: "Juan Gabriel Cabral",
    headerTitle: "Ingeniero Arquitecto de Software Senior",
    headerSubtitle: "12+ años diseñando y desarrollando soluciones empresariales escalables",
    downloadCV: "Descargar CV",
    contact: "Contactar",
    videoPresentation: "🎬 Video Presentación",
    viewExperience: "Ver Experiencia",
    technicalSkills: "Habilidades Técnicas",

    philosophyTitle: "Filosofía Profesional",
    philosophyQuote: "La arquitectura no se trata de complejidad; se trata de resolver problemas complejos con soluciones elegantes y simples.",
    philosophyAuthor: "- Juan Gabriel Cabral",

    videoSectionTitle: "Conóceme Personalmente",
    videoSectionSubtitle: "Un mensaje personal sobre mi trayectoria y visión profesional",
    videoPlaceholderTitle: "Video de Presentación",
    videoPlaceholderDescription: "Próximamente estaré compartiendo un video personal donde me presento, hablo sobre mi experiencia y mi pasión por la arquitectura de software.",
    comingSoon: "🎬 Próximamente",

    skillsTitle: "Habilidades Técnicas",

    experienceTitle: "Experiencia Profesional",

    aboutTitle: "Sobre Mí",
    aboutDescription1: "¡Hola! Soy Juan Gabriel Cabral, un apasionado Ingeniero Arquitecto de Software Senior con más de 12 años de experiencia diseñando y desarrollando soluciones empresariales escalables. Mi expertise abarca desarrollo full-stack, arquitectura de microservicios y tecnologías en la nube.",
    aboutDescription2: "Me especializo en tecnologías modernas incluyendo Go, Node.js, React, AWS, y tengo amplia experiencia en arquitectura de sistemas, diseño de bases de datos y prácticas DevOps. Estoy comprometido a entregar soluciones de software de alta calidad y sostenibles que impulsen el éxito empresarial.",

    contactTitle: "Contacto",
    contactDescription: "¿Listo para llevar tu proyecto al siguiente nivel? Me encantaría conocer más sobre tus desafíos técnicos y cómo puedo ayudarte a crear soluciones innovadoras.",
    addressLabel: "Dirección",
    whatsappLabel: "WhatsApp",
    emailLabel: "Email",
    mapTitle: "📍 Mi Ubicación",
    mapDescription: "Ubicado en Posadas, Misiones, trabajando con clientes globalmente",
    scheduleTitle: "📅 Programa una Reunión",
    scheduleDescription: "Agenda una consulta gratuita de 30 minutos para discutir tu proyecto",
    scheduleButton: "Programar Cita",

    footerDescription: "Ingeniero Arquitecto de Software Senior especializado en soluciones escalables y arquitecturas modernas."
  },

  en: {
    headerName: "Juan Gabriel Cabral",
    headerTitle: "Senior Software Architect Engineer",
    headerSubtitle: "12+ years designing and developing scalable enterprise solutions",
    downloadCV: "Download CV",
    contact: "Get in touch",
    videoPresentation: "🎬 Introduction Video",
    viewExperience: "View Experience",
    technicalSkills: "Technical Skills",

    philosophyTitle: "Professional Philosophy",
    philosophyQuote: "Architecture is not about complexity; it's about solving complex problems with elegant, simple solutions.",
    philosophyAuthor: "- Juan Gabriel Cabral",

    videoSectionTitle: "Get to Know Me Personally",
    videoSectionSubtitle: "A personal message about my journey and professional vision",
    videoPlaceholderTitle: "Introduction Video",
    videoPlaceholderDescription: "Coming soon! I'll be sharing a personal video where I introduce myself, talk about my experience, and my passion for software architecture.",
    comingSoon: "🎬 Coming Soon",

    skillsTitle: "Technical Skills",

    experienceTitle: "Professional Experience",

    aboutTitle: "About Me",
    aboutDescription1: "Hello! I'm Juan Gabriel Cabral, a passionate Senior Software Architect Engineer with over 12 years of experience designing and developing scalable enterprise solutions. My expertise spans full-stack development, microservices architecture, and cloud technologies.",
    aboutDescription2: "I specialize in modern technologies including Go, Node.js, React, AWS, and have extensive experience in system architecture, database design, and DevOps practices. I'm committed to delivering high-quality, sustainable software solutions that drive business success.",

    contactTitle: "Contact",
    contactDescription: "Ready to take your project to the next level? I'd love to learn more about your technical challenges and how I can help you create innovative solutions.",
    addressLabel: "Address",
    whatsappLabel: "WhatsApp",
    emailLabel: "Email",
    mapTitle: "📍 My Location",
    mapDescription: "Located in Posadas, Misiones, working with clients globally",
    scheduleTitle: "📅 Schedule a Meeting",
    scheduleDescription: "Book a free 30-minute consultation to discuss your project",
    scheduleButton: "Schedule Appointment",

    footerDescription: "Senior Software Architect Engineer specializing in scalable solutions and modern architectures."
  },

  pt: {
    headerName: "Juan Gabriel Cabral",
    headerTitle: "Engenheiro Arquiteto de Software Sênior",
    headerSubtitle: "12+ anos projetando e desenvolvendo soluções empresariais escaláveis",
    downloadCV: "Baixar CV",
    contact: "Entre em contato",
    videoPresentation: "🎬 Vídeo Apresentação",
    viewExperience: "Ver Experiência",
    technicalSkills: "Habilidades Técnicas",

    philosophyTitle: "Filosofia Profissional",
    philosophyQuote: "Arquitetura não é sobre complexidade; é sobre resolver problemas complexos com soluções elegantes e simples.",
    philosophyAuthor: "- Juan Gabriel Cabral",

    videoSectionTitle: "Conheça-me Pessoalmente",
    videoSectionSubtitle: "Uma mensagem pessoal sobre minha trajetória e visão profissional",
    videoPlaceholderTitle: "Vídeo de Apresentação",
    videoPlaceholderDescription: "Em breve estarei compartilhando um vídeo pessoal onde me apresento, falo sobre minha experiência e minha paixão pela arquitetura de software.",
    comingSoon: "🎬 Em Breve",

    skillsTitle: "Habilidades Técnicas",

    experienceTitle: "Experiência Profissional",

    aboutTitle: "Sobre Mim",
    aboutDescription1: "Olá! Sou Juan Gabriel Cabral, um apaixonado Engenheiro Arquiteto de Software Sênior com mais de 12 anos de experiência projetando e desenvolvendo soluções empresariais escaláveis. Minha expertise abrange desenvolvimento full-stack, arquitetura de microsserviços e tecnologias em nuvem.",
    aboutDescription2: "Especializo-me em tecnologias modernas incluindo Go, Node.js, React, AWS, e tenho ampla experiência em arquitetura de sistemas, design de banco de dados e práticas DevOps. Estou comprometido em entregar soluções de software de alta qualidade e sustentáveis que impulsionem o sucesso dos negócios.",

    contactTitle: "Contato",
    contactDescription: "Pronto para levar seu projeto ao próximo nível? Adoraria saber mais sobre seus desafios técnicos e como posso ajudá-lo a criar soluções inovadoras.",
    addressLabel: "Endereço",
    whatsappLabel: "WhatsApp",
    emailLabel: "Email",
    mapTitle: "📍 Minha Localização",
    mapDescription: "Localizado em Posadas, Misiones, trabalhando com clientes globalmente",
    scheduleTitle: "📅 Agendar uma Reunião",
    scheduleDescription: "Agende uma consulta gratuita de 30 minutos para discutir seu projeto",
    scheduleButton: "Agendar Consulta",

    footerDescription: "Engenheiro Arquiteto de Software Sênior especializado em soluções escaláveis e arquiteturas modernas."
  }
};

export const getTranslation = (language: Language): TranslationData => {
  return translations[language];
};
