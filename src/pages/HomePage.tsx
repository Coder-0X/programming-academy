import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, BookOpen, Trophy, Users, Star, ChevronRight, Zap, Sparkles, Rocket, Target } from 'lucide-react';
import { languageTracks } from '../data/languageTracks';
import { useScrollReveal } from '../hooks/useAnimations';

const HomePage = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Initialize scroll reveal animations
  useScrollReveal();

  // Track mouse position for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Static stats (since progress context is removed)
  const stats = [
    { icon: BookOpen, label: 'Total Levels', value: '50', color: 'blue', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Trophy, label: 'Completed', value: '0', color: 'green', gradient: 'from-green-500 to-emerald-500' },
    { icon: Zap, label: 'Total XP', value: '0', color: 'yellow', gradient: 'from-yellow-500 to-amber-500' },
    { icon: Users, label: 'Languages', value: '5', color: 'purple', gradient: 'from-purple-500 to-violet-500' }
  ];

  const handleLanguageSelect = (languageId: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      navigate(`/${languageId}`);
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-visible">
      {/* Advanced Particle Background */}
      <div className="particle-bg">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 25}s`,
              animationDuration: `${20 + Math.random() * 15}s`,
              width: `${2 + Math.random() * 6}px`,
              height: `${2 + Math.random() * 6}px`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative hero-gradient">
        <div className="hero-overlay">
          <div 
            className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8"
            style={{
              transform: `translateY(${mousePosition.y * 0.1}px) translateX(${mousePosition.x * 0.1}px)`,
            }}
          >
            <div className="text-center">
              <div className="animate-float mb-8">
                <div className="inline-flex items-center gap-4 mb-6">
                  <Sparkles className="w-12 h-12 text-yellow-300 animate-pulse-glow" />
                  <h1 className="text-6xl md:text-8xl font-bold text-white">
                    <span className="animate-text-shimmer">Programming Academy</span>
                  </h1>
                  <Rocket className="w-12 h-12 text-pink-300 animate-float" style={{ animationDelay: '1s' }} />
                </div>
              </div>
              
              <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-4xl mx-auto leading-relaxed font-medium">
                🚀 Master 5 programming languages with our revolutionary 50-level learning platform. 
                Experience interactive examples, stunning UI, and intelligent progress tracking like never before!
              </p>
              
              <div className="flex flex-wrap justify-center gap-8 mb-16">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="stats-card group scroll-reveal scale-in"
                    style={{ 
                      animationDelay: `${index * 0.15}s`,
                      background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
                    }}
                  >
                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.gradient} mb-4 group-hover:scale-125 transition-transform duration-300`}>
                        <stat.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-4xl font-bold text-white mb-2 animate-text-shimmer">
                        {stat.value}
                      </div>
                      <div className="text-sm text-blue-100 font-medium">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button
                  onClick={() => navigate('/html')}
                  className="btn-primary group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Target className="w-6 h-6" />
                    Start Your Journey
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button
                  onClick={() => {
                    document.getElementById('language-tracks')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                  className="btn-secondary group"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Explore Tracks
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Language Tracks Section */}
      <div id="language-tracks" className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 scroll-reveal">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-1 h-16 bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
            <h2 className="text-6xl font-bold learning-path-text">
              Choose Your Learning Path
            </h2>
            <div className="w-1 h-16 bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
            Each track contains 10 progressive levels, designed by industry experts. 
            Master one language or conquer them all! Your coding odyssey starts here. 🌟
          </p>
        </div>

        <div className="language-tracks-grid">
          {languageTracks.map((track, index) => (
            <div
              key={track.id}
              className="language-card scroll-reveal"
              onClick={() => handleLanguageSelect(track.id)}
              style={{ 
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="language-card-content relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <div 
                      className="text-6xl mr-6 animate-float track-icon" 
                      style={{ animationDelay: `${index * 0.3}s` }}
                    >
                      {track.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {track.name}
                      </h3>
                      <div className="text-sm text-gray-600 font-medium mt-1">
                        Advanced Track
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-8 h-8 text-gray-500 chevron-icon" />
                </div>
                
                <p className="text-gray-700 mb-10 leading-relaxed text-lg font-medium">
                  {track.description}
                </p>
                
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center text-sm text-gray-500">
                    <BookOpen className="w-6 h-6 mr-3 text-blue-500" />
                    <span className="font-semibold text-lg">{track.totalLevels} Comprehensive Levels</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <div className="progress-bar">
                  <div 
                    className={`progress-fill bg-gradient-to-r ${track.gradient} relative overflow-hidden`}
                    style={{ width: '0%' }} // Will be dynamic based on progress
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-float"></div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <span className="text-sm text-gray-400 font-medium px-4 py-2 rounded-full bg-gray-800">
                    🚀 Click to embark on your journey!
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features and CTA sections remain unchanged */}
      {/* ... (rest of your code for features and CTA) ... */}
    </div>
  );
};

export default HomePage;
