import { X, Book, Code, Lightbulb } from 'lucide-react';

interface TopicDetails {
  name: string;
  theory: string;
  syntax: string;
  example: string;
  description: string;
}

interface TopicModalProps {
  topic: TopicDetails | null;
  isOpen: boolean;
  onClose: () => void;
}

const TopicModal = ({ topic, isOpen, onClose }: TopicModalProps) => {
  if (!isOpen || !topic) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between">
          <div className="flex items-center">
            <Book className="w-6 h-6 text-purple-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">{topic.name}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Description */}
          <div>
            <div className="flex items-center mb-4">
              <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">What is {topic.name}?</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">{topic.description}</p>
          </div>

          {/* Theory */}
          <div>
            <div className="flex items-center mb-4">
              <Book className="w-5 h-5 text-blue-500 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Theory</h3>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-800 leading-relaxed whitespace-pre-line">{topic.theory}</p>
            </div>
          </div>

          {/* Syntax */}
          <div>
            <div className="flex items-center mb-4">
              <Code className="w-5 h-5 text-green-500 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Syntax</h3>
            </div>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-6">
              <pre className="text-sm overflow-x-auto">
                <code>{topic.syntax}</code>
              </pre>
            </div>
          </div>

          {/* Example */}
          <div>
            <div className="flex items-center mb-4">
              <Code className="w-5 h-5 text-purple-500 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Example</h3>
            </div>
            <div className="bg-gray-900 text-gray-100 rounded-lg p-6">
              <pre className="text-sm overflow-x-auto">
                <code>{topic.example}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 border-t p-6">
          <button
            onClick={onClose}
            className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Got it! Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopicModal;
