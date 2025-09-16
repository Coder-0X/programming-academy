import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, Play, Clock, Book, CheckCircle, Lock } from 'lucide-react';
import { languageTracks } from '../data/languageTracks';
import { useProgress } from '../context/ProgressContext';

const LanguageTrack = () => {
  const { language } = useParams<{ language: string }>();
  const navigate = useNavigate();
  const { getProgress } = useProgress();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [language]);

  const track = languageTracks.find(t => t.id === language);
  const progress = getProgress(language || '');

  if (!track) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Language Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  const completedLevels = progress?.completedLevels || [];
  const currentLevel = progress?.currentLevel || 1;

  const isLevelUnlocked = (levelId: number) => {
    if (levelId === 1) return true;
    const level = track.levels.find(l => l.id === levelId);
    if (!level?.prerequisites) return true;
    return level.prerequisites.every(prereq => completedLevels.includes(prereq));
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Enhanced Header */}
      <div className={`hero-gradient relative overflow-hidden`}>
        <div className="hero-overlay">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <button
              onClick={() => navigate('/')}
              className="btn-secondary mb-8 animate-float"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </button>
            
            <div className="flex items-center mb-8">
              <div className="text-7xl mr-6 animate-float" style={{ animationDelay: '0.5s' }}>
                {track.icon}
              </div>
              <div>
                <h1 className="text-5xl font-bold mb-3 text-white">
                  {track.name} <span className="animate-text-shimmer">Track</span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                  {track.description}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="stats-card">
                <div className="text-3xl font-bold text-white mb-1">{track.totalLevels}</div>
                <div className="text-blue-100">Total Levels</div>
              </div>
              <div className="stats-card">
                <div className="text-3xl font-bold text-white mb-1">{completedLevels.length}</div>
                <div className="text-blue-100">Completed</div>
              </div>
              <div className="stats-card">
                <div className="text-3xl font-bold text-white mb-1">
                  {Math.round((completedLevels.length / track.totalLevels) * 100)}%
                </div>
                <div className="text-blue-100">Progress</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Levels Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {track.levels.map((level) => {
            const isCompleted = completedLevels.includes(level.id);
            const isUnlocked = isLevelUnlocked(level.id);
            const isCurrent = level.id === currentLevel && !isCompleted;

            return (
              <div
                key={level.id}
                className={`level-card relative transform transition-all duration-300 ${
                  isUnlocked ? 'cursor-pointer hover:scale-105' : 'opacity-50 cursor-not-allowed'
                } ${isCurrent ? 'ring-2 ring-blue-500 shadow-glow' : ''} ${isCompleted ? 'bg-gradient-to-br from-green-50 to-emerald-100 border-green-200' : ''}`}
                onClick={() => {
                  if (isUnlocked) {
                    navigate(`/${language}/level/${level.id}`);
                  }
                }}
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${track.gradient} opacity-5 rounded-xl`}></div>
                
                {/* Status Icon with enhanced styling */}
                <div className="absolute -top-3 -right-3 z-10">
                  {isCompleted ? (
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse-glow">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                  ) : isUnlocked ? (
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center shadow-lg">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                  )}
                </div>

                <div className="relative z-10 mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      Level {level.id}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(level.difficulty)}`}>
                      {level.difficulty}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{level.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{level.description}</p>
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2 text-blue-500" />
                    <span className="font-medium">{level.estimatedTime}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <Book className="w-4 h-4 mr-2 text-green-500" />
                    <span className="font-medium">{level.topics.length} Topics</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {level.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium border border-blue-100"
                      >
                        {topic}
                      </span>
                    ))}
                    {level.topics.length > 3 && (
                      <span className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full font-medium border border-gray-100">
                        +{level.topics.length - 3} more
                      </span>
                    )}
                  </div>

                  {level.prerequisites && level.prerequisites.length > 0 && !isUnlocked && (
                    <div className="text-xs text-red-600 mt-3 p-2 bg-red-50 rounded-lg border border-red-100">
                      🔒 Requires: Level {level.prerequisites.join(', ')}
                    </div>
                  )}
                  
                  {isUnlocked && (
                    <div className="text-center pt-2">
                      <span className="text-xs text-blue-600 font-medium">Click to start →</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Progress Bar */}
        <div className="mt-12 glass-card p-8 shadow-glow">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-gray-900">Overall Progress</h3>
            <div className="text-right">
              <div className="text-2xl font-bold text-gradient">
                {Math.round((completedLevels.length / track.totalLevels) * 100)}%
              </div>
              <span className="text-sm text-gray-600">
                {completedLevels.length} of {track.totalLevels} levels completed
              </span>
            </div>
          </div>
          <div className="progress-bar mb-4">
            <div
              className={`progress-fill bg-gradient-to-r ${track.gradient}`}
              style={{ width: `${(completedLevels.length / track.totalLevels) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>Beginner</span>
            <span>Intermediate</span>
            <span>Advanced</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageTrack;
