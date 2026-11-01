export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullOverview: string;
  category: string;
  technologies: string[];
  metrics?: string;
  problemStatement: string;
  solutionOverview: string;
  keyImplementations: string[];
  myContributions: string[];
  verifiedResults: string;
  futureImprovements: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  architectureDiagram?: {
    type: 'cognitive' | 'pose' | 'weather';
    steps: {
      title: string;
      description: string;
      icon: string;
      tags: string[];
    }[];
  };
}

export interface SkillGroup {
  category: string;
  description: string;
  icon: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreType: string;
  highlights: string[];
  isCurrentOrRecent?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  category: 'AI & Data Science' | 'Core Engineering' | 'Cloud & Web' | 'Industry & Foundational';
  year: string;
  score?: string;
  details?: string;
  badge?: string;
  credentialId?: string;
  verificationUrl?: string;
  fileUrl?: string;
  skills?: string[];
}
