import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, ExternalLink, Code, Award } from 'lucide-react';

interface DSAData {
  totalProblems: number;
  platforms: {
    name: string;
    solved: number;
    total: number;
  }[];
  recentProblems: {
    id: number;
    title: string;
    difficulty: string;
    platform: string;
    topic: string;
    link: string;
  }[];
}

interface DSAProps {
  darkMode: boolean;
}

const DSA: React.FC<DSAProps> = ({ darkMode }) => {
  const [dsaData, setDsaData] = useState<DSAData | null>(null);

  useEffect(() => {
    fetchDSAData();
  }, []);

  const fetchDSAData = async () => {
    try {
      const response = await fetch('https://my-portfolio-server-6all.onrender.com/api/dsa');
      const data = await response.json();
      setDsaData(data);
    } catch (error) {
      console.error('Error fetching DSA data:', error);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'leetcode':
        return 'bg-orange-500';
      case 'codeforces':
        return 'bg-blue-500';
      case 'hackerrank':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  if (!dsaData) return <div>Loading...</div>;

  return (
    <section id="dsa" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'
            }`}>
            Data Structures & Algorithms
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Problem-solving journey and competitive programming achievements
          </p>
        </motion.div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'
              } border ${darkMode ? 'border-gray-600' : 'border-gray-200'} text-center`}
          >
            <div className="flex items-center justify-center mb-4">
              <Trophy className="text-yellow-500 mr-2" size={32} />
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                {dsaData.totalProblems}
              </h3>
            </div>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Total Problems Solved
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'
              } border ${darkMode ? 'border-gray-600' : 'border-gray-200'} text-center`}
          >
            <div className="flex items-center justify-center mb-4">
              <Target className="text-blue-500 mr-2" size={32} />
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                {dsaData.platforms.length}
              </h3>
            </div>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Active Platforms
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'
              } border ${darkMode ? 'border-gray-600' : 'border-gray-200'} text-center`}
          >
            <div className="flex items-center justify-center mb-4">
              <Award className="text-green-500 mr-2" size={32} />
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                85%
              </h3>
            </div>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Success Rate
            </p>
          </motion.div>
        </div>

        {/* Platform Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {dsaData.platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'
                } border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                  {platform.name}
                </h3>
                <div className={`w-4 h-4 rounded-full ${getPlatformColor(platform.name)}`}></div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    Progress
                  </span>
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    {platform.solved}/{platform.total}
                  </span>
                </div>
                <div className={`w-full bg-gray-200 rounded-full h-2 ${darkMode ? 'bg-gray-600' : 'bg-gray-200'
                  }`}>
                  <motion.div
                    className={`h-2 rounded-full ${getPlatformColor(platform.name)}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(platform.solved / platform.total) * 100}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </div>

              <div className="text-center">
                <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                  {platform.solved}
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Problems Solved
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Problems */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className={`text-2xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-gray-900'
            }`}>
            Recent Problem Submissions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dsaData.recentProblems.map((problem, index) => (
              <motion.div
                key={problem.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'
                  } border ${darkMode ? 'border-gray-600' : 'border-gray-200'} hover:shadow-xl transition-shadow`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                    {problem.title}
                  </h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${darkMode
                    ? 'bg-gray-600 text-gray-300'
                    : getDifficultyColor(problem.difficulty)
                    }`}>
                    {problem.difficulty}
                  </span>
                </div>

                <div className="mb-4">
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                    <strong>Platform:</strong> {problem.platform}
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <strong>Topics:</strong> {problem.topic}
                  </p>
                </div>

                <a
                  href={problem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-500 hover:text-blue-600 text-sm font-medium"
                >
                  <Code size={16} />
                  View Problem
                  <ExternalLink size={12} />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DSA;