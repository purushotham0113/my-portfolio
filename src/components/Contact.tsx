import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {

  // const BASE_URL = 'http://localhost:5000/api'
  const BASE_URL = 'https://my-portfolio-server-6all.onrender.com/api'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${BASE_URL}/add/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '', phone: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'
            }`}>
            Get In Touch
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Let's discuss your next project or collaboration opportunity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-blue-500 p-3 rounded-full mr-4">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Email
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      purushothamkonikanti@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-green-500 p-3 rounded-full mr-4">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Phone
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      +91 xxxxxxxx78
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-red-500 p-3 rounded-full mr-4">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Location
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Kurnool, AP
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                Let's Connect
              </h4>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                I'm always open to discussing new opportunities, interesting projects,
                or just having a chat about technology. Feel free to reach out!
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`p-8 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'
              } border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
          >
            {submitted ? (
              <div className="text-center">
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  Thank you for your message! I'll get back to you soon.
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${darkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                      }`}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                  >
                    Phone
                  </label>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${darkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                      }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${darkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                      }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${darkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                      }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;