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
  { name: "Go (Golang)", years: "8 years", percentage: 95 },
  { name: "Node.js / Express", years: "10 years", percentage: 90 },
  { name: "React / Next.js", years: "7 years", percentage: 88 },
  { name: "TypeScript", years: "6 years", percentage: 85 },
  { name: "AWS / Cloud", years: "8 years", percentage: 92 },
  { name: "Docker / Kubernetes", years: "6 years", percentage: 80 },
  { name: "PostgreSQL / MongoDB", years: "10 years", percentage: 87 },
  { name: "Microservices", years: "8 years", percentage: 90 },
  { name: "GraphQL / REST APIs", years: "9 years", percentage: 89 },
  { name: "DevOps / CI/CD", years: "7 years", percentage: 82 }
];

export const experiences: Experience[] = [
  {
    id: "exp1",
    company: "TechCorp Solutions",
    position: "Senior Software Architect",
    period: "2020 - Present",
    description: "Leading architecture design for enterprise-scale applications serving 1M+ users. Implemented microservices architecture reducing system latency by 40% and improved scalability.",
    technologies: ["Go", "AWS", "Kubernetes", "React", "PostgreSQL"]
  },
  {
    id: "exp2",
    company: "Innovation Labs",
    position: "Lead Full Stack Developer",
    period: "2018 - 2020",
    description: "Led a team of 8 developers building cloud-native applications. Architected and implemented CI/CD pipelines, reducing deployment time by 60%.",
    technologies: ["Node.js", "React", "Docker", "MongoDB", "AWS"]
  },
  {
    id: "exp3",
    company: "StartupX",
    position: "Software Engineer",
    period: "2015 - 2018",
    description: "Developed scalable backend services and modern web applications. Collaborated with product teams to deliver features used by 500K+ active users.",
    technologies: ["JavaScript", "Python", "MySQL", "Redis", "Git"]
  },
  {
    id: "exp4",
    company: "DevSolutions",
    position: "Junior Developer",
    period: "2012 - 2015",
    description: "Built responsive web applications and RESTful APIs. Gained expertise in software development best practices and agile methodologies.",
    technologies: ["PHP", "JavaScript", "MySQL", "HTML/CSS", "jQuery"]
  }
];
