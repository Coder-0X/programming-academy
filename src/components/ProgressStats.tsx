import { motion } from 'framer-motion';
import { CheckCircle, Clock, BookOpen } from 'lucide-react';

interface ProgressStatsProps {
  totalLevels: number;
  completedLevels: number;
  totalXP: number;
  currentStreak: number;
  timeSpent: string;
}

const ProgressStats: React.FC<ProgressStatsProps> = ({
  totalLevels,
  completedLevels,
  totalXP,
  currentStreak,
  timeSpent
}) => {
  const completionPercentage = (completedLevels / totalLevels) * 100;

  const stats = [
    {
      icon: CheckCircle,
      label: 'Levels Completed',
      value: `${completedLevels}/${totalLevels}`,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: BookOpen,
      label: 'Total XP',
      value: totalXP.toLocaleString(),
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Clock,
      label: 'Time Spent',
      value: timeSpent,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Progress</h2>
      
      {/* Overall Progress Circle */}
      <div className="flex items-center justify-center mb-8">
        <div className="relative w-32 h-32">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-gray-200"
            />
            {/* Progress circle */}
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              strokeLinecap="round"
              className="text-blue-600"
              strokeDasharray={`${2 * Math.PI * 40}`}
              initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
              animate={{ 
                strokeDashoffset: 2 * Math.PI * 40 * (1 - completionPercentage / 100)
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {Math.round(completionPercentage)}%
              </div>
              <div className="text-sm text-gray-600">Complete</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center p-4 rounded-lg border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className={`w-12 h-12 rounded-full ${stat.bgColor} ${stat.color} flex items-center justify-center mx-auto mb-3`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div className="text-xl font-bold text-gray-900 mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Streak Display */}
      {currentStreak > 0 && (
        <motion.div
          className="mt-6 p-4 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg border border-orange-200"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-center">
            <div className="text-2xl mr-2">🔥</div>
            <div>
              <div className="font-bold text-orange-800">
                {currentStreak} Day Streak!
              </div>
              <div className="text-sm text-orange-600">
                Keep it up! You're on fire!
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProgressStats;
