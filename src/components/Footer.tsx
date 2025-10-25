import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-white">RaghavReddy</span>
                <span className="text-gray-400">.dev</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                AI/ML Engineer & Data Science Professional passionate about building impactful, 
                data-driven solutions that make a difference.
              </p>
              <div className="flex items-center gap-2 text-gray-400">
                <span>Made with</span>
                <Heart size={16} className="text-red-500" />
                <span>and</span>
                <Code size={16} className="text-blue-500" />
                <span>and</span>
                <Coffee size={16} className="text-yellow-600" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <div className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
              <div className="space-y-2 text-gray-400">
                <p>Hyderabad, Telangana, India</p>
                <a 
                  href="mailto:raghavendra2034@gmail.com"
                  className="block hover:text-white transition-colors duration-200"
                >
                  raghavendra2034@gmail.com
                </a>
                <a 
                  href="tel:+919100839784"
                  className="block hover:text-white transition-colors duration-200"
                >
                  +91 9100839784
                </a>
                <a
                  href="https://github.com/raghav-2034"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-white transition-colors duration-200"
                >
                  GitHub: raghav-2034
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © {currentYear} RaghavReddy.dev - P Raghavendra Reddy. All rights reserved.
              </div>
              <div className="flex gap-6 text-sm text-gray-400">
                <span>Built with React & TypeScript</span>
                <span>•</span>
                <span>Deployed with ❤️</span>
              </div>
            </div>
          </div>

          {/* Back to Top */}
          <div className="text-center mt-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-6 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-colors duration-200"
            >
              <span>Back to Top</span>
              <div className="w-4 h-4 border-t-2 border-r-2 border-gray-300 transform rotate-[-45deg]"></div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;