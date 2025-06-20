import React from 'react';
import { Github, Mail, MapPin, ArrowRight, Code } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/2 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            {/* Animated greeting */}
            <div className="inline-block mb-4 animate-fade-in-up">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-gray-300 hover:bg-white/20 transition-all duration-300">
                👋 Welcome to my digital space
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent animate-fade-in-up animation-delay-200">
              <span className="hover:text-white transition-all duration-500 cursor-default">RaghavReddy</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-300 mb-6 animate-fade-in-up animation-delay-400">
              <span className="typing-animation">Full Stack Developer & AI/ML Enthusiast</span>
            </div>
            
            <div className="flex items-center justify-center text-gray-400 mb-8 animate-fade-in-up animation-delay-600 hover:text-gray-300 transition-colors duration-300">
              <MapPin size={20} className="mr-2 animate-bounce" />
              <span>Hyderabad, Telangana, India</span>
            </div>
          </div>
          
          <div className="mb-12 animate-fade-in-up animation-delay-800">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto hover:text-gray-200 transition-colors duration-300">
              Driven by curiosity and innovation, I thrive on solving complex problems and building impactful solutions. 
              With a strong foundation in programming and a deep interest in AI/ML and cloud computing, 
              I aim to bridge the gap between cutting-edge technology and real-world applications.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-1000">
            <button
              onClick={scrollToProjects}
              className="group bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 min-w-[200px] flex items-center justify-center gap-3 hover:scale-105 hover:shadow-2xl"
            >
              <Code size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>Explore My Work</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={scrollToContact}
              className="group border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:border-white hover:bg-white/10 transition-all duration-300 min-w-[200px] flex items-center justify-center gap-3 hover:scale-105 backdrop-blur-sm"
            >
              <Mail size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>Let's Connect</span>
            </button>
          </div>

          {/* Social links with hover animations */}
          <div className="mt-12 flex justify-center gap-6 animate-fade-in-up animation-delay-1200">
            <a
              href="https://github.com/raghav-2034"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12"
            >
              <Github size={24} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="mailto:raghavreddy676@gmail.com"
              className="group w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12"
            >
              <Mail size={24} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;