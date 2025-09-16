import { motion } from 'framer-motion';
import { Code2, Copy, Play, Check } from 'lucide-react';
import { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
  showLineNumbers?: boolean;
  editable?: boolean;
  onRun?: (code: string) => void;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language,
  title,
  showLineNumbers = true,
  editable = false,
  onRun
}) => {
  const [currentCode, setCurrentCode] = useState(code);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const handleRun = () => {
    if (onRun) {
      onRun(currentCode);
    }
  };

  const getLanguageColor = (lang: string) => {
    switch (lang.toLowerCase()) {
      case 'html': return 'text-orange-600 bg-orange-100';
      case 'css': return 'text-blue-600 bg-blue-100';
      case 'javascript': return 'text-yellow-600 bg-yellow-100';
      case 'java': return 'text-red-600 bg-red-100';
      case 'python': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const lines = currentCode.split('\n');

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center">
          <Code2 className="w-5 h-5 text-gray-600 mr-2" />
          {title && (
            <span className="text-sm font-medium text-gray-900 mr-3">
              {title}
            </span>
          )}
          <span className={`px-2 py-1 rounded-md text-xs font-medium ${getLanguageColor(language)}`}>
            {language.toUpperCase()}
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          {onRun && (
            <button
              onClick={handleRun}
              className="flex items-center px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm"
            >
              <Play className="w-4 h-4 mr-1" />
              Run
            </button>
          )}
          
          <button
            onClick={handleCopy}
            className="flex items-center px-3 py-1 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors text-sm"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-1" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-1" />
                Copy
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Content */}
      <div className="relative">
        {editable ? (
          <textarea
            value={currentCode}
            onChange={(e) => setCurrentCode(e.target.value)}
            className="w-full h-64 p-4 font-mono text-sm bg-gray-900 text-gray-100 border-none resize-none focus:outline-none"
            spellCheck={false}
          />
        ) : (
          <div className="bg-gray-900 text-gray-100 p-4 overflow-x-auto">
            <pre className="text-sm">
              <code>
                {showLineNumbers ? (
                  <div className="flex">
                    <div className="flex flex-col text-gray-500 select-none mr-4 text-right">
                      {lines.map((_, index) => (
                        <span key={index} className="leading-6">
                          {index + 1}
                        </span>
                      ))}
                    </div>
                    <div className="flex-1">
                      {lines.map((line, index) => (
                        <div key={index} className="leading-6">
                          {line || '\u00A0'}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  currentCode
                )}
              </code>
            </pre>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CodeBlock;
