import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['Full-Stack Developer', 'Problem Solver', 'Tech Enthusiast', 'Code Architect'];

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopNum % roles.length];
      const updatedText = isDeleting
        ? currentRole.substring(0, text.length - 1)
        : currentRole.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setTypingSpeed(50);
      } else {
        setTypingSpeed(150);
      }

      if (!isDeleting && updatedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'
              }`}>
              Hi, I'm <span className="text-blue-500">Konikanti Purushotham</span>
            </h1>
            <h2 className={`text-2xl md:text-3xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
              <span className="text-blue-500">{text}</span>
              <span className="animate-pulse">|</span>
            </h2>
            <p className={`text-lg md:text-xl mb-8 max-w-3xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-700'
              }`}>
              Passionate about creating innovative solutions and solving complex problems through code.
              I specialize in full-stack development with expertise in modern web technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-6"
          >
            <a
              href="https://github.com/purushotham0113"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-colors ${darkMode
                ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                : 'bg-white hover:bg-gray-100 text-gray-700'
                } shadow-lg`}
            >
              <Github size={24} />
            </a>
            <a
              href="purushothamkonikanti@gmail.com"
              className={`p-3 rounded-full transition-colors ${darkMode
                ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                : 'bg-white hover:bg-gray-100 text-gray-700'
                } shadow-lg`}
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;