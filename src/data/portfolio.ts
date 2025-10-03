export interface Skill {
  name: string;
  years: string;
  percentage: number;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
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
    company: "TechCorp Solutions",
    position: "Arquitecto de Software Senior",
    period: "2020 - Presente",
    description: "Lidero el diseño de arquitecturas para aplicaciones empresariales que sirven a más de 1M+ usuarios. Implementé arquitectura de microservicios reduciendo la latencia del sistema en un 40% y mejoré la escalabilidad.",
    technologies: ["Go", "AWS", "Kubernetes", "React", "PostgreSQL"]
  },
  {
    id: "exp2",
    company: "Innovation Labs",
    position: "Lead Full Stack Developer",
    period: "2018 - 2020",
    description: "Dirigí un equipo de 8 desarrolladores construyendo aplicaciones cloud-native. Arquitecté e implementé pipelines CI/CD, reduciendo el tiempo de deployment en 60%.",
    technologies: ["Node.js", "React", "Docker", "MongoDB", "AWS"]
  },
  {
    id: "exp3",
    company: "StartupX",
    position: "Ingeniero de Software",
    period: "2015 - 2018",
    description: "Desarrollé servicios backend escalables y aplicaciones web modernas. Colaboré con equipos de producto para entregar funcionalidades usadas por 500K+ usuarios activos.",
    technologies: ["JavaScript", "Python", "MySQL", "Redis", "Git"]
  },
  {
    id: "exp4",
    company: "DevSolutions",
    position: "Desarrollador Junior",
    period: "2012 - 2015",
    description: "Construí aplicaciones web responsivas y APIs RESTful. Adquirí experiencia en mejores prácticas de desarrollo de software y metodologías ágiles.",
    technologies: ["PHP", "JavaScript", "MySQL", "HTML/CSS", "jQuery"]
  }
];
