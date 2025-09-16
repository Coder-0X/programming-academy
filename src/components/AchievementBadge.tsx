import { motion } from 'framer-motion';
import { Star, Trophy, Target, Zap } from 'lucide-react';

interface AchievementBadgeProps {
  title: string;
  description: string;
  icon: 'star' | 'trophy' | 'target' | 'zap';
  earned: boolean;
  progress?: number;
}

const AchievementBadge: React.FC<AchievementBadgeProps> = ({
  title,
  description,
  icon,
  earned,
  progress = 0
}) => {
  const icons = {
    star: Star,
    trophy: Trophy,
    target: Target,
    zap: Zap
  };

  const IconComponent = icons[icon];

  return (
    <motion.div
      className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${
        earned
          ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-300 shadow-lg'
          : 'bg-gray-50 border-gray-200'
      }`}
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Badge Icon */}
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
        earned
          ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white'
          : 'bg-gray-200 text-gray-400'
      }`}>
        <IconComponent className="w-6 h-6" />
      </div>

      {/* Badge Content */}
      <h3 className={`font-bold text-lg mb-1 ${
        earned ? 'text-gray-900' : 'text-gray-500'
      }`}>
        {title}
      </h3>
      
      <p className={`text-sm ${
        earned ? 'text-gray-700' : 'text-gray-400'
      }`}>
        {description}
      </p>

      {/* Progress Bar (for progressive achievements) */}
      {!earned && progress > 0 && (
        <div className="mt-3">
          <div className="bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-xs text-gray-500 mt-1">{progress}% complete</div>
        </div>
      )}

      {/* Earned Badge Glow Effect */}
      {earned && (
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 opacity-20"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </motion.div>
  );
};

export default AchievementBadge;
