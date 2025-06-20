import React from 'react';
import { GraduationCap, Calendar, Award, Trophy } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Science in Computer Science & Engineering',
      institution: 'Nalla Narsimha Reddy Group of Institutions',
      period: 'Jun 2022 - Apr 2026',
      status: 'Final Year (4th Year)',
      description: 'Comprehensive study of computer science fundamentals, software engineering, and emerging technologies.',
      highlights: [
        'Focused on AI/ML and Cloud Computing',
        'Active participation in technical projects',
        'Leadership roles in student activities'
      ],
      color: 'from-blue-600 to-blue-400'
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Narayana Junior College',
      period: 'Jun 2020 - Apr 2022',
      status: '95% - Distinction',
      description: 'Mathematics, Physics, and Chemistry with exceptional academic performance.',
      highlights: [
        'JEE-Mains Qualified - 97.93 Percentile',
        'Strong foundation in analytical thinking',
        'Excellence in mathematical problem-solving'
      ],
      color: 'from-green-600 to-green-400'
    }
  ];

  const achievements = [
    {
      title: 'JEE-Mains Qualification',
      description: '97.93 Percentile',
      icon: <Trophy size={24} />,
      color: 'from-yellow-600 to-yellow-400'
    },
    {
      title: 'Academic Excellence',
      description: '95% in Intermediate (MPC)',
      icon: <Award size={24} />,
      color: 'from-purple-600 to-purple-400'
    },
    {
      title: 'AI-Hack-Day Finalist',
      description: 'Conducted by Viswam.ai',
      icon: <GraduationCap size={24} />,
      color: 'from-red-600 to-red-400'
    }
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse animation-delay-500"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse animation-delay-1500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 hover:text-gray-200 transition-colors duration-300">Education & Achievements</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-8 hover:w-32 transition-all duration-500"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto hover:text-gray-200 transition-colors duration-300">
              Academic excellence and continuous learning journey
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8 mb-16">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="group bg-black/30 border border-gray-800 rounded-lg p-8 hover:border-gray-600 transition-all duration-300 hover:scale-[1.02] hover:bg-black/50"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${edu.color} group-hover:scale-125 transition-transform duration-300`}></div>
                      <span className="text-sm text-gray-400 flex items-center gap-2 group-hover:text-gray-300 transition-colors duration-300">
                        <Calendar size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                        {edu.period}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${edu.color} text-white group-hover:scale-105 transition-transform duration-300`}>
                        {edu.status}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-2 group-hover:text-gray-200 transition-colors duration-200">
                      {edu.degree}
                    </h3>
                    
                    <h4 className="text-lg text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300">
                      {edu.institution}
                    </h4>

                    <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                      {edu.description}
                    </p>

                    <div className="space-y-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${edu.color} group-hover:scale-125 transition-transform duration-300`}></div>
                          <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:w-64">
                    <div className={`w-full h-32 rounded-lg bg-gradient-to-br ${edu.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                      <GraduationCap size={48} className="text-white group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group text-center p-6 bg-black/30 border border-gray-800 rounded-lg hover:border-gray-600 transition-all duration-300 hover:scale-105 hover:bg-black/50"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="group-hover:rotate-12 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-200 transition-colors duration-300">{achievement.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{achievement.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-black/30 border border-gray-800 rounded-lg p-8 max-w-4xl mx-auto hover:border-gray-600 transition-all duration-300 hover:scale-[1.02] group">
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-gray-200 transition-colors duration-300">Academic Philosophy</h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                My educational journey reflects a commitment to excellence and continuous learning. 
                From achieving top percentiles in competitive exams to actively participating in hackathons, 
                I believe in combining theoretical knowledge with practical application. 
                My academic background has provided me with a strong foundation in problem-solving, 
                analytical thinking, and the ability to adapt to new technologies and challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;