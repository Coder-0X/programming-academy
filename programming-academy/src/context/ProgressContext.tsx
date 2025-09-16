import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProgress } from '../types';
import { useAuth } from './AuthContext';

interface ProgressContextType {
  progress: Record<string, UserProgress>;
  updateProgress: (languageId: string, levelId: number) => void;
  getProgress: (languageId: string) => UserProgress | null;
  getTotalXP: () => number;
  getCompletedLevels: () => number;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [progress, setProgress] = useState<Record<string, UserProgress>>({});

  // Load progress when user changes
  useEffect(() => {
    if (user) {
      const key = `programming-academy-progress:${user.sub}`;
      const saved = localStorage.getItem(key);
      if (saved) setProgress(JSON.parse(saved));
      else setProgress({});
    } else {
      setProgress({});
    }
  }, [user]);

  // Save progress per user whenever it changes
  useEffect(() => {
    if (user) {
      const key = `programming-academy-progress:${user.sub}`;
      localStorage.setItem(key, JSON.stringify(progress));
    }
  }, [progress, user]);

  const updateProgress = (languageId: string, levelId: number) => {
    setProgress(prev => {
      const currentProgress = prev[languageId] || {
        languageId,
        completedLevels: [],
        currentLevel: 1,
        totalXP: 0,
        achievements: [],
        startedAt: new Date(),
        lastActivity: new Date()
      };

      // Add level to completed if not already there
      const updatedLevels = currentProgress.completedLevels.includes(levelId)
        ? currentProgress.completedLevels
        : [...currentProgress.completedLevels, levelId];

      return {
        ...prev,
        [languageId]: {
          ...currentProgress,
          completedLevels: updatedLevels,
          currentLevel: Math.max(currentProgress.currentLevel, levelId + 1),
          totalXP: currentProgress.totalXP + (currentProgress.completedLevels.includes(levelId) ? 0 : 100),
          lastActivity: new Date()
        }
      };
    });
  };

  const getProgress = (languageId: string): UserProgress | null => {
    return progress[languageId] || null;
  };

  const getTotalXP = (): number => {
    return Object.values(progress).reduce((total, lang) => total + lang.totalXP, 0);
  };

  const getCompletedLevels = (): number => {
    return Object.values(progress).reduce((total, lang) => total + lang.completedLevels.length, 0);
  };

  return (
    <ProgressContext.Provider value={{
      progress,
      updateProgress,
      getProgress,
      getTotalXP,
      getCompletedLevels
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
