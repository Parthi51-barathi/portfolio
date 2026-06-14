export interface Project {
  id: string;
  title: string;
  year: string;
  status: 'Live' | 'Archived' | 'In Progress';
  category: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  stats?: { label: string; value: string }[];
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  duration: string;
  technologies: string[];
  points: string[];
  gradientClass: string;
  borderColor: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  score?: string;
  badge?: string;
  gradientClass: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  gradientClass: string;
  iconName: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  gradientClass: string;
  skills: { name: string; level: number; iconName?: string }[];
}
