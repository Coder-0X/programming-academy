import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Play, Book, Clock, Trophy } from 'lucide-react';
import { languageTracks } from '../data/languageTracks';
import TopicModal from '../components/TopicModal';
import topicData, { TopicDetails } from '../data/topicData';

const LevelPage = () => {
  const { language: languageId, levelId } = useParams<{ language: string; levelId: string }>();
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState<TopicDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll to top when component mounts or level changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [languageId, levelId]);

  const track = languageTracks.find(t => t.id === languageId);
  const level = track?.levels.find(l => l.id === parseInt(levelId || '0'));

  if (!track || !level) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Level Not Found</h1>
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

  // All levels are unlocked and none are completed (static demo)
  const isCompleted = false;

  const handleCompleteLevel = () => {
    // No-op in static demo
  };

  const handleNextLevel = () => {
    const nextLevel = track.levels.find(l => l.id === level.id + 1);
    if (nextLevel) {
      navigate(`/${languageId}/level/${nextLevel.id}`);
    } else {
      navigate(`/${languageId}`);
    }
  };

  const handleTopicClick = (topicName: string) => {
    // Try to get details, otherwise use a 'Coming Soon' stub
    const details = topicData[topicName] ?? {
      name: topicName,
      description: 'Content coming soon. Stay tuned!',
      theory: 'Theory content for this topic is coming soon.',
      syntax: '',
      example: ''
    };
    setSelectedTopic(details);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTopic(null);
  };

  // Generate practice questions covering all topics
  const practiceQuestions: string[] = (() => {
    const topics = level.topics;
    if (topics.length <= 3) {
      return topics.map(t => `Explain ${t} with an example.`);
    }
    return [
      `Explain ${topics[0]} and ${topics[1]}.`, // covers first two
      `Demonstrate use of ${topics[2]} and ${topics[3] || topics[2]}.`, // next two
      `Create a snippet incorporating ${topics[4] || topics[0]} and ${topics[5] || topics[1]}.` // next two
    ];
  })();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className={`bg-gradient-to-r ${track.gradient} text-white py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(`/${languageId}`)}
            className="flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to {track.name} Track
          </button>
          
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center mb-2">
                <span className="text-4xl mr-3">{track.icon}</span>
                <span className="text-lg text-white/80">Level {level.id}</span>
              </div>
              <h1 className="text-4xl font-bold mb-2">{level.title}</h1>
              <p className="text-xl text-white/80">{level.description}</p>
            </div>
            
            {isCompleted && (
              <div className="flex items-center text-green-300">
                <CheckCircle className="w-8 h-8 mr-2" />
                <span className="text-lg font-semibold">Completed</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Level Info */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <div className="text-sm text-gray-600">Estimated Time</div>
                    <div className="font-semibold">{level.estimatedTime}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Book className="w-6 h-6 text-green-600 mr-3" />
                  <div>
                    <div className="text-sm text-gray-600">Topics</div>
                    <div className="font-semibold">{level.topics.length} Topics</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Trophy className="w-6 h-6 text-yellow-600 mr-3" />
                  <div>
                    <div className="text-sm text-gray-600">Difficulty</div>
                    <div className="font-semibold capitalize">{level.difficulty}</div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Topics Covered</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {level.topics.map((topic, index) => (
                    <button
                      key={index}
                      onClick={() => handleTopicClick(topic)}
                      className="flex items-center p-4 bg-purple-50 hover:bg-purple-100 border border-purple-200 hover:border-purple-300 rounded-lg transition-all duration-200 text-left group"
                    >
                      <Book className="w-5 h-5 text-purple-600 mr-3 group-hover:text-purple-700" />
                      <span className="text-gray-800 group-hover:text-purple-900 font-medium">{topic}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Code Example */}
              {level.codeExample && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Code Example</h3>
                  <div className="bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto">
                    <pre className="text-sm">
                      <code>{level.codeExample}</code>
                    </pre>
                  </div>
                </div>
              )}

              {/* Practice Section */}
              <div className="border-t pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Practice Exercise</h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                  <p className="text-gray-800 mb-4">
                    Practice the concepts from this level by implementing the code examples and 
                    experimenting with the topics covered. Try to understand each concept thoroughly 
                    before moving to the next level.
                  </p>
                  <div className="text-sm text-yellow-800">
                    <strong>Tip:</strong> Use your browser's developer tools to test JavaScript code, 
                    or try online editors for other languages!
                  </div>
                </div>
                {/* Practice Questions */}
                <div className="practice-questions mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Practice Questions</h4>
                  <ul className="list-disc list-inside space-y-2">
                    {practiceQuestions.map((q, idx) => (
                      <li key={idx} className="text-gray-800">
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>

                {!isCompleted ? (
                  <button
                    onClick={handleCompleteLevel}
                    className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <CheckCircle className="w-6 h-6 inline mr-2" />
                    Mark as Complete
                  </button>
                ) : (
                  <button
                    onClick={handleNextLevel}
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Play className="w-6 h-6 inline mr-2" />
                    Next Level
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Progress Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Your Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Track Progress</span>
                    <span>0/{track.totalLevels}</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 bg-gradient-to-r ${track.gradient} rounded-full transition-all duration-500`}
                      style={{ width: `0%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">0</div>
                  <div className="text-sm text-gray-600">Total XP Earned</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Level Navigation</h3>
              <div className="space-y-2">
                {track.levels.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => navigate(`/${languageId}/level/${l.id}`)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      l.id === level.id
                        ? 'bg-blue-100 text-blue-800 border border-blue-200'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Level {l.id}</span>
                    </div>
                    <div className="text-sm opacity-75">{l.title}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Topic Modal */}
      <TopicModal
        topic={selectedTopic}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default LevelPage;
