export interface Skill {
  name: string;
  years: string;
  percentage: number;
}

export interface Experience {
  id: string;
  company: string;
  position: {
    en: string;
    es: string;
    pt: string;
  };
  period: string;
  description: {
    en: string;
    es: string;
    pt: string;
  };
  technologies: string[];
}

export const skills: Skill[] = [
  { name: "PHP", years: "12 years", percentage: 100 },
  { name: "Go (Golang)", years: "2 years", percentage: 40 },
  { name: "PostgreSQL / Oracle PL-SQL / MySQL / SQL Server Transact-SQL", years: "10 years", percentage: 100 },
  { name: "Node Js", years: "8 years", percentage: 90 },
  { name: "React", years: "2 years", percentage: 40 },
  { name: "Csharp", years: "2 years", percentage: 40 },
  { name: "TypeScript", years: "6 years", percentage: 85 },
  { name: "FastApi", years: "1 years", percentage: 20 },
  { name: "Python", years: "1 years", percentage: 20 },
  { name: "AWS / Cloud", years: "2 years", percentage: 40 },
  { name: "Docker", years: "6 years", percentage: 80 },
  { name: "Redis", years: "6 years", percentage: 80 },
  { name: "Nginx", years: "6 years", percentage: 80 },
  { name: "Microservices", years: "6 years", percentage: 90 },  
  { name: "DevOps / CI/CD", years: "7 years", percentage: 82 }
];

export const experiences: Experience[] = [
  {
    id: "exp1",
    company: "MyIntelli",
    position: {
      en: "Senior Software Architect Engineer (Freelance)",
      es: "Ingeniero Senior de Arquitectura de Software (Freelance)",
      pt: "Engenheiro Sênior de Arquitetura de Software (Freelance)"
    },
    period: "2024 - Present",
    description: {
      en: "Led complete system migration from Laravel to Go using hexagonal architecture. Architected real-time communication system using SignalR for live monitoring. Implemented AWS SQS consumer with decorator pattern and Redis failover. Configured Nginx load balancer with Docker scaling.",
      es: "Lideré la migración completa del sistema de Laravel a Go utilizando arquitectura hexagonal. Arquitecté sistema de comunicación en tiempo real usando SignalR para monitoreo en vivo. Implementé consumidor AWS SQS con patrón decorator y failover Redis. Configuré load balancer Nginx con escalado Docker.",
      pt: "Liderei migração completa do sistema de Laravel para Go usando arquitetura hexagonal. Arquitetei sistema de comunicação em tempo real usando SignalR para monitoramento ao vivo. Implementei consumer AWS SQS com padrão decorator e failover Redis. Configurei load balancer Nginx com escalonamento Docker."
    },
    technologies: ["Go", "AWS SQS", "Redis", "SignalR", "Docker", "Nginx", "Laravel", "Node.js", "TypeScript", "MySQL", "PostgreSQL"]
  },
  {
    id: "exp2",
    company: "360 (Latam)",
    position: {
      en: "Backend Developer (Freelance)",
      es: "Desarrollador Backend (Freelance)",
      pt: "Desenvolvedor Backend (Freelance)"
    },
    period: "2023 - 2024",
    description: {
      en: "Optimized E-Commerce platform for Central America (Encuentra24). Integrated Nubox and SAP Layer for Chilean classified ads platform (Yapo). Implemented electronic invoice systems for Chilean market.",
      es: "Optimicé plataforma de E-Commerce para Centroamérica (Encuentra24). Integré Nubox y SAP Layer para plataforma chilena de avisos clasificados (Yapo). Implementé sistemas de facturación electrónica para el mercado chileno.",
      pt: "Otimizei plataforma de E-Commerce para América Central (Encuentra24). Integrei Nubox e SAP Layer para plataforma chilena de anúncios classificados (Yapo). Implementei sistemas de faturação eletrônica para o mercado chileno."
    },
    technologies: ["Symfony 1.4", "PHP 8", "MySQL", "PostgreSQL", "SQL Server"]
  },
  {
    id: "exp3",
    company: "VU Security",
    position: {
      en: "Full Stack Developer (Freelance)",
      es: "Desarrollador Full Stack (Freelance)",
      pt: "Desenvolvedor Full Stack (Freelance)"
    },
    period: "2022 - 2023",
    description: {
      en: "Developed banking anti-fraud software systems (Fraud v2 & v3). Led migration from v2 to v3 architecture with performance optimization and security enhancements.",
      es: "Desarrollé sistemas de software anti-fraude bancario (Fraud v2 & v3). Lideré la migración de arquitectura v2 a v3 con optimización de rendimiento y mejoras de seguridad.",
      pt: "Desenvolvi sistemas de software anti-fraude bancário (Fraud v2 & v3). Liderei migração da arquitetura v2 para v3 com otimização de performance e melhorias de segurança."
    },
    technologies: ["Spring Boot v2", "MySQL", "PostgreSQL", "SQL Server"]
  },
  {
    id: "exp4",
    company: "Osana (Healthcare for Everyone)",
    position: {
      en: "Full Stack Developer",
      es: "Desarrollador Full Stack",
      pt: "Desenvolvedor Full Stack"
    },
    period: "2021 - 2022",
    description: {
      en: "Built healthcare chatbot for Sanatorio Guemes (Corona Call). Refactored telemedicine platform for Hospital Austral. Developed municipal healthcare appointment system (MGP Health App).",
      es: "Construí chatbot de salud para Sanatorio Güemes (Corona Call). Refactoricé plataforma de telemedicina para Hospital Austral. Desarrollé sistema municipal de citas de salud (MGP Health App).",
      pt: "Construí chatbot de saúde para Sanatorio Guemes (Corona Call). Refatorei plataforma de telemedicina para Hospital Austral. Desenvolvi sistema municipal de agendamento de saúde (MGP Health App)."
    },
    technologies: ["Laravel", "Node.js", "Vue.js", "React Native", "Docker", "PostgreSQL"]
  },
  {
    id: "exp5",
    company: "AISA (Alternativas Inteligentes)",
    position: {
      en: "Full Stack Developer",
      es: "Desarrollador Full Stack",
      pt: "Desenvolvedor Full Stack"
    },
    period: "2020 - 2021",
    description: {
      en: "Developed agricultural logistics solution (Muvin) and fertilizer logistics solution (Profertil). Responsible for bug resolution and deployment processes.",
      es: "Desarrollé solución logística agrícola (Muvin) y solución logística de fertilizantes (Profertil). Responsable de resolución de bugs y procesos de deployment.",
      pt: "Desenvolvi solução logística agrícola (Muvin) e solução logística de fertilizantes (Profertil). Responsável por resolução de bugs e processos de deployment."
    },
    technologies: ["Angular 2", "Yii Framework", "PHP", "MySQL"]
  },
  {
    id: "exp6",
    company: "TDI",
    position: {
      en: "Full Stack Developer",
      es: "Desarrollador Full Stack",
      pt: "Desenvolvedor Full Stack"
    },
    period: "2018 - 2020",
    description: {
      en: "Developed tax management systems for Santa Cruz (ASIP) and Neuquén (SIAT). Implemented modules for summons, auditing, and legal processes. Maintained educational system for CAECE University.",
      es: "Desarrollé sistemas de gestión tributaria para Santa Cruz (ASIP) y Neuquén (SIAT). Implementé módulos de citaciones, auditoría y procesos legales. Mantuve sistema educativo para Universidad CAECE.",
      pt: "Desenvolvi sistemas de gestão tributária para Santa Cruz (ASIP) e Neuquén (SIAT). Implementei módulos de citações, auditoria e processos legais. Mantive sistema educacional para Universidade CAECE."
    },
    technologies: ["PHP", "Bootstrap", "jQuery", "Oracle PL-SQL"]
  },
  {
    id: "exp7",
    company: "Accenture",
    position: {
      en: "Full Stack Developer",
      es: "Desarrollador Full Stack",
      pt: "Desenvolvedor Full Stack"
    },
    period: "2016 - 2017",
    description: {
      en: "Developed enterprise application (MME - My Management Engagement) with performance monitoring and optimization capabilities.",
      es: "Desarrollé aplicación empresarial (MME - My Management Engagement) con capacidades de monitoreo de rendimiento y optimización.",
      pt: "Desenvolvi aplicação empresarial (MME - My Management Engagement) com capacidades de monitoramento de performance e otimização."
    },
    technologies: ["C#", "VB.NET", "ASP.NET", "SQL Server"]
  },
  {
    id: "exp8",
    company: "Mundo IT",
    position: {
      en: "Full Stack Developer",
      es: "Desarrollador Full Stack",
      pt: "Desenvolvedor Full Stack"
    },
    period: "2015 - 2016",
    description: {
      en: "Developed validation service for CUIT processing through API implementation in proprietary platform. Generated new functionalities using XML (Histrix project).",
      es: "Desarrollé servicio de validación para procesamiento de CUIT mediante implementación de API en plataforma propietaria. Generé nuevas funcionalidades usando XML (proyecto Histrix).",
      pt: "Desenvolvi serviço de validação para processamento de CUIT através de implementação de API em plataforma proprietária. Gerei novas funcionalidades usando XML (projeto Histrix)."
    },
    technologies: ["PHP5", "SQLite3", "Git", "XML", "MySQL", "Bash"]
  },
  {
    id: "exp9",
    company: "Parque de la Salud",
    position: {
      en: "Full Stack Developer",
      es: "Desarrollador Full Stack",
      pt: "Desenvolvedor Full Stack"
    },
    period: "2013 - 2015",
    description: {
      en: "Migrated legacy platform modules (Users, Registrar) and built microservice bridge for data reflection across dual platforms (Rismi2 project).",
      es: "Migré módulos de plataforma legacy (Usuarios, Empadronador) y construí puente de microservicio para reflejo de datos entre plataformas duales (proyecto Rismi2).",
      pt: "Migrei módulos de plataforma legacy (Usuários, Registrador) e construí ponte de microsserviço para reflexão de dados entre plataformas duais (projeto Rismi2)."
    },
    technologies: ["Symfony2", "PHP5", "MySQL", "jQuery", "PostgreSQL", "Bootstrap", "Git"]
  }
];
