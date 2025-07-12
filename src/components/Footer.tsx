import React from 'react';
import { Github, Mail, Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`py-12 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'
              }`}>
              Purushotham
            </h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Full-Stack Developer passionate about creating innovative solutions
              and solving complex problems through code.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'
              }`}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'Skills', 'Projects', 'DSA', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`text-sm transition-colors ${darkMode
                      ? 'text-gray-400 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                      }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'
              }`}>
              Connect
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/purushotham0113"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${darkMode
                  ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                  : 'bg-white hover:bg-gray-100 text-gray-700'
                  } shadow-lg`}
              >
                <Github size={20} />
              </a>
              {/* <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${darkMode
                  ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                  : 'bg-white hover:bg-gray-100 text-gray-700'
                  } shadow-lg`}
              > */}
              {/* <Linkedin size={20} />
            </a> */}
              <a
                href="mailto:purushothamkonikanti@gmail.com"
                className={`p-2 rounded-full transition-colors ${darkMode
                  ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                  : 'bg-white hover:bg-gray-100 text-gray-700'
                  } shadow-lg`}
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className={`mt-8 pt-8 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'
          }`}>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2024 Purushotham Konikanti. All rights reserved.
            </p>
            <p className={`text-sm flex items-center mt-2 md:mt-0 ${darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
              Made with <Heart className="mx-1 text-red-500" size={16} /> using React & Node.js
            </p>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;