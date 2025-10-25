import React from 'react';
import { Code, Database, Brain, Cloud, Wrench, MessageCircle } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={24} />,
      skills: ['Python', 'JavaScript', 'SQL', 'C', 'Go', 'HTML/CSS'],
      color: 'from-blue-600 to-blue-400'
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Wrench size={24} />,
      skills: ['React.js', 'Flask', 'Node.js', 'pandas', 'NumPy', 'MERN Stack'],
      color: 'from-green-600 to-green-400'
    },
    {
      title: 'AI/ML Technologies',
      icon: <Brain size={24} />,
      skills: ['Machine Learning', 'Deep Learning', 'NLP', 'BERT', 'GPT-3', 'RAG'],
      color: 'from-purple-600 to-purple-400'
    },
    {
      title: 'Data Science & Analytics',
      icon: <Database size={24} />,
      skills: ['Data Analysis', 'Predictive Modeling', 'Statistical Analysis', 'Data Visualization'],
      color: 'from-red-600 to-red-400'
    },
    {
      title: 'Tools & Platforms',
      icon: <Cloud size={24} />,
      skills: ['Git', 'Docker', 'Google Cloud Platform', 'Azure', 'Postman', 'VS Code'],
      color: 'from-cyan-600 to-cyan-400'
    },
    {
      title: 'Soft Skills',
      icon: <MessageCircle size={24} />,
      skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Leadership'],
      color: 'from-orange-600 to-orange-400'
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 hover:text-gray-200 transition-colors duration-300">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-8 hover:w-32 transition-all duration-500"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto hover:text-gray-200 transition-colors duration-300">
              A comprehensive toolkit of technologies and skills that enable me to build innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group bg-black/30 border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-all duration-300 hover:scale-105 hover:bg-black/50"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="group-hover:rotate-12 transition-transform duration-300">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-gray-200 transition-colors duration-300">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center py-2 px-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-200 group-hover:translate-x-2"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mr-3 group-hover:scale-125 transition-transform duration-300`}></div>
                      <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-black/30 border border-gray-800 rounded-lg p-8 max-w-4xl mx-auto hover:border-gray-600 transition-all duration-300 hover:scale-[1.02] group">
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-gray-200 transition-colors duration-300">Certifications & Achievements</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-left group-hover:translate-x-2 transition-transform duration-300">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-gray-200 transition-colors duration-300">MERN Stack Certification</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Offered by TuteDude</p>
                </div>
                <div className="text-left group-hover:translate-x-2 transition-transform duration-300">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-gray-200 transition-colors duration-300">Data Science Professional Certificate</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Oracle</p>
                </div>
                <div className="text-left group-hover:translate-x-2 transition-transform duration-300">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-gray-200 transition-colors duration-300">Azure Data Analytics</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Currently Pursuing</p>
                </div>
                <div className="text-left group-hover:translate-x-2 transition-transform duration-300">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-gray-200 transition-colors duration-300">AI-Hack-Day Finalist</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Conducted by Viswam.ai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;