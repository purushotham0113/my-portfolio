import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  id: number;
  name: string;
  category: string;
  level: number;
}

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/skills');
      const data = await response.json();
      setSkills(data);
    } catch (error) {
      console.error('Error fetching skills:', error);
    }
  };

  const categories = ['All', ...new Set(skills.map(skill => skill.category))];
  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const categoryColors = {
    Frontend: 'bg-blue-500',
    Backend: 'bg-green-500',
    Database: 'bg-yellow-500',
    Programming: 'bg-purple-500',
    Tools: 'bg-red-500',
    DevOps: 'bg-indigo-500',
  };

  return (
    <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Skills & Expertise
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : darkMode
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-lg shadow-lg ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              } border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-lg font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {skill.name}
                </h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  categoryColors[skill.category as keyof typeof categoryColors]
                } text-white`}>
                  {skill.category}
                </span>
              </div>
              
              <div className="mb-2">
                <div className="flex justify-between text-sm mb-1">
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    Proficiency
                  </span>
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    {skill.level}%
                  </span>
                </div>
                <div className={`w-full bg-gray-200 rounded-full h-2 ${
                  darkMode ? 'bg-gray-600' : 'bg-gray-200'
                }`}>
                  <motion.div
                    className="bg-blue-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;