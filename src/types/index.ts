export interface Level {
  id: number;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  topics: string[];
  estimatedTime: string;
  prerequisites?: number[];
  codeExample?: string;
  exercises?: Exercise[];
}

export interface Exercise {
  id: string;
  type: 'code' | 'quiz' | 'project';
  question: string;
  answer?: string;
  options?: string[];
  starterCode?: string;
  solution?: string;
}

export interface LanguageTrack {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  gradient: string;
  levels: Level[];
  totalLevels: number;
}

export interface UserProgress {
  languageId: string;
  completedLevels: number[];
  currentLevel: number;
  totalXP: number;
  achievements: string[];
  startedAt: Date;
  lastActivity: Date;
}
