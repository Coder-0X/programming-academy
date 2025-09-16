
import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { BookOpen, Trophy, Users, Star, ChevronRight, Zap, Sparkles, Rocket, Target, Code } from 'lucide-react';
import { languageTracks, LanguageTrack } from '../data/languageTracks';
import { useScrollReveal } from '../hooks/useAnimations';


const HomePage = () => {
  // const navigate = useNavigate();
  const [selectedTrack, setSelectedTrack] = useState<LanguageTrack | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    const track = languageTracks.find(t => t.id === languageId);
    if (track) {
      setSelectedTrack(track);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTrack(null);
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

      {/* Revolutionary Hero Section */}
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
                {/* Removed navigation button to avoid TS error and URL change */}
                <button
                  onClick={() => {
                    document.getElementById('language-tracks')?.scrollIntoView({ behavior: 'smooth' });
                  }}
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

      {/* Enhanced Language Tracks Section */}
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
      {/* Modal for topic content */}
      {isModalOpen && selectedTrack && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full p-8 relative animate-fade-in">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              aria-label="Close"
            >
              ×
            </button>
            <div className="flex items-center mb-6">
              <div className="text-6xl mr-6">{selectedTrack.icon}</div>
              <div>
                <h2 className="text-3xl font-bold mb-2">{selectedTrack.name} Track</h2>
                <p className="text-gray-600">{selectedTrack.description}</p>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Levels</h3>
              <ul className="space-y-3">
                {selectedTrack.levels.map((level: any) => (
                  <li key={level.id} className="border rounded-lg p-4 hover:bg-gray-50 transition">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-blue-700">Level {level.id}: {level.title}</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600 capitalize">{level.difficulty}</span>
                    </div>
                    <div className="text-gray-700 text-sm mb-2">{level.description}</div>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {level.topics.slice(0, 3).map((topic: string) => (
                        <span key={topic} className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-100 font-medium">{topic}</span>
                      ))}
                      {level.topics.length > 3 && (
                        <span className="px-2 py-1 bg-gray-50 text-gray-600 rounded-full border border-gray-100 font-medium">+{level.topics.length - 3} more</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <button
                onClick={closeModal}
                className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      </div>

      {/* Revolutionary Features Section */}
      <div className="wave-background py-24 relative overflow-visible">
        {/* Static Background Orbs */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-white/20 to-white/10 rounded-full filter blur-3xl"></div>
          <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-white/15 to-white/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-white/25 to-white/8 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 scroll-reveal">
            <div className="inline-flex items-center gap-4 mb-8">
              <Sparkles className="w-8 h-8 text-purple-500 animate-pulse-glow" />
              <h2 className="text-6xl font-bold color-flow-text color-flow-glow">
                Why Choose Programming Academy?
              </h2>
              <Sparkles className="w-8 h-8 text-blue-500 animate-pulse-glow" />
            </div>
            <p className="text-xl text-white/80 max-w-4xl mx-auto font-medium drop-shadow">
              Experience the future of programming education with our revolutionary platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: Code,
                title: 'Interactive Examples',
                description: 'Learn by doing with hands-on coding examples, real-time feedback, and intelligent code completion',
                color: 'from-blue-500 via-purple-500 to-pink-500',
                accent: 'blue'
              },
              {
                icon: BookOpen,
                title: 'Progressive Learning',
                description: 'Structured curriculum designed by industry experts, from absolute beginner to advanced developer',
                color: 'from-green-500 via-teal-500 to-cyan-500',
                accent: 'green'
              },
              {
                icon: Trophy,
                title: 'Achievement System',
                description: 'Track your progress, earn exclusive badges, unlock achievements, and celebrate every milestone',
                color: 'from-yellow-500 via-orange-500 to-red-500',
                accent: 'yellow'
              },
              {
                icon: Zap,
                title: 'Modern UI/UX',
                description: 'Beautiful, responsive design with cutting-edge animations that adapts seamlessly to any device',
                color: 'from-pink-500 via-purple-500 to-indigo-500',
                accent: 'pink'
              }
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="feature-card scroll-reveal scale-in group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`feature-icon bg-gradient-to-br ${feature.color} group-hover:shadow-glow`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed font-medium">{feature.description}</p>
                
                {/* Feature Enhancement Indicator */}
                <div className="mt-6 flex items-center justify-center">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color} animate-pulse-glow`}></div>
                  <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${feature.color} mx-1 opacity-60`}></div>
                  <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${feature.color} opacity-40`}></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Enhanced Stats Section */}
          <div className="mt-20 text-center scroll-reveal">
            <h3 className="text-4xl font-bold text-white drop-shadow-lg mb-12">Join the Revolution</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              { [
                { number: '10K+', label: 'Students Learning', icon: Users },
                { number: '50', label: 'Interactive Levels', icon: Target },
                { number: '5', label: 'Programming Languages', icon: Code },
                { number: '99%', label: 'Success Rate', icon: Trophy }
              ].map(stat => (
                <div key={stat.label} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ultimate CTA Section */}
      <div className="hero-gradient relative overflow-visible">
        <div className="hero-overlay">
          <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-24">
            <div className="scroll-reveal">
              <div className="inline-flex items-center gap-4 mb-8">
                <Rocket className="w-12 h-12 text-yellow-300 animate-float" />
                <h2 className="text-6xl font-bold text-white">
                  Ready to Start Your <span className="animate-text-shimmer">Epic Coding Journey</span>?
                </h2>
                <Sparkles className="w-12 h-12 text-pink-300 animate-pulse-glow" />
              </div>
              
              <p className="text-xl mb-12 text-blue-100 leading-relaxed max-w-3xl mx-auto font-medium">
                Join thousands of developers who have transformed their careers with our academy. 
                Your programming adventure begins with a single click. Are you ready to code your future? 🚀
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
                {/* Removed navigation button to avoid TS error and URL change */}
                <button
                  onClick={() => {
                    document.getElementById('language-tracks')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary text-xl px-16 py-6 group relative"
                >
                  <span className="relative z-10 flex items-center gap-4">
                    <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                    Begin with HTML
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </button>
                
                <div className="text-center">
                  <div className="text-blue-100 text-sm font-medium mb-2">
                    ✨ No credit card required • Free to start • 50 levels of premium content
                  </div>
                  <div className="flex items-center justify-center gap-2 text-blue-200 text-xs">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span>Trusted by 10,000+ developers worldwide</span>
                  </div>
                </div>
              </div>
              
              {/* Social Proof */}
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
                <div className="text-blue-200 text-sm font-medium">As featured in:</div>
                {['TechCrunch', 'Product Hunt', 'Hacker News', 'Dev.to'].map((platform) => (
                  <div key={platform} className="text-blue-100 text-sm font-semibold px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                    {platform}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-float blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-20 animate-float blur-lg" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-20 animate-float blur-md" style={{ animationDelay: '4s' }}></div>
      </div>
    </div>
  );
};

export default HomePage;
