import React from 'react';
import { User, Target, Lightbulb, Award, Trophy, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/30 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 hover:text-gray-200 transition-colors duration-300">About Me</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-8 hover:w-32 transition-all duration-500"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="group text-center p-6 rounded-lg bg-black/30 border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-105 hover:bg-black/50">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-700 group-hover:scale-110 transition-all duration-300">
                <User className="text-white group-hover:rotate-12 transition-transform duration-300" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-200 transition-colors duration-300">Problem Solver</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Passionate about tackling complex challenges and finding innovative solutions through code and creativity.
              </p>
            </div>

            <div className="group text-center p-6 rounded-lg bg-black/30 border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-105 hover:bg-black/50">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-700 group-hover:scale-110 transition-all duration-300">
                <Target className="text-white group-hover:rotate-12 transition-transform duration-300" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-200 transition-colors duration-300">Goal-Oriented</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Focused on building impactful solutions that bridge cutting-edge technology with real-world applications.
              </p>
            </div>

            <div className="group text-center p-6 rounded-lg bg-black/30 border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-105 hover:bg-black/50">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-700 group-hover:scale-110 transition-all duration-300">
                <Lightbulb className="text-white group-hover:rotate-12 transition-transform duration-300" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-200 transition-colors duration-300">Curious Learner</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Always eager to learn new technologies, collaborate with others, and contribute to meaningful projects.
              </p>
            </div>
          </div>

          {/* Academic Achievements */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="group bg-black/30 border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Trophy size={24} className="text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-gray-200 transition-colors duration-300">JEE-Mains Qualified</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">97.93 Percentile</p>
                </div>
              </div>
            </div>

            <div className="group bg-black/30 border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Award size={24} className="text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-gray-200 transition-colors duration-300">Academic Excellence</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">95% in Intermediate (MPC)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/30 border border-gray-800 rounded-lg p-8 hover:border-gray-600 transition-all duration-300 hover:scale-[1.02] group">
            <h3 className="text-2xl font-semibold mb-6 text-center group-hover:text-gray-200 transition-colors duration-300">My Journey</h3>
            <div className="text-gray-300 leading-relaxed space-y-4 group-hover:text-gray-200 transition-colors duration-300">
              <p>
                Currently pursuing my Bachelor's degree in Computer Science & Engineering at Nalla Narsimha Reddy Group of Institutions, 
                I'm in my final year and actively exploring the exciting world of technology.
              </p>
              <p>
                My academic journey has been marked by excellence, having scored 95% in MPC and qualifying for JEE-Mains with a 97.93 percentile. 
                This strong foundation has fueled my passion for programming and problem-solving.
              </p>
              <p>
                I'm particularly drawn to AI/ML technologies and cloud computing, areas where I see immense potential for innovation. 
                My experience spans full-stack development with the MERN stack, and I'm constantly expanding my skills in Java, C, Python, and SQL.
              </p>
              <p>
                Beyond academics, I've participated in hackathons like AI-Hack-Day where I was a finalist, demonstrating my ability to 
                work under pressure and create innovative solutions. I believe in continuous learning and am always ready to take on new challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;