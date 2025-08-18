import React from 'react';
import { ExternalLink, Github, Calendar, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Mental Health Check-in',
      period: 'Jan 2024 - Feb 2024',
      description: 'A comprehensive web application designed to support mental wellness through various tools and resources. This platform provides users with meditation guides, mood tracking, stress assessment, community support, and personalized wellness activities.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'CSS3'],
      features: [
        'Interactive mood tracking system',
        'Guided meditation resources',
        'Stress assessment tools',
        'Community support features',
        'Personalized wellness recommendations'
      ],
      color: 'from-blue-600 to-blue-400',
      status: 'Completed'
    },
    {
      title: 'Earthquake Prediction using Machine Learning',
      period: 'Mar 2024 - May 2024',
      description: 'Advanced machine learning project focused on predicting earthquake occurrences using historical seismic data and various ML algorithms. Implemented data preprocessing, feature engineering, and model optimization techniques.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
      features: [
        'Managed project timelines, reducing delivery times by 30%',
        'Spearheaded adoption of cutting-edge engineering software, improving accuracy by 15%',
        'Collaborated with cross-functional teams, enhancing success rates by 10%',
        'Data visualization and analysis',
        'Predictive modeling implementation'
      ],
      color: 'from-red-600 to-red-400',
      status: 'Completed'
    },
    {
      title: 'Rubik\'s Cube Simulator',
      period: 'Jul 2023 - Nov 2023',
      description: 'Designed a 3D Rubik\'s Cube Simulator using Python with an intuitive user interface. Features real-time 3D simulation with smooth animations, multiple solving algorithms, and cross-platform compatibility.',
      technologies: ['Python', 'Flask', 'React.js', '3D Graphics', 'Web APIs'],
      features: [
        '3D interactive cube simulation',
        'Multiple solving algorithms',
        'Real-time animation system',
        'Cross-platform web interface',
        'Flask backend integration',
        'Responsive React.js frontend'
      ],
      color: 'from-green-600 to-green-400',
      status: 'Completed'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900/30 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse animation-delay-500"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse animation-delay-1500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 hover:text-gray-200 transition-colors duration-300">Featured Projects</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-8 hover:w-32 transition-all duration-500"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto hover:text-gray-200 transition-colors duration-300">
              A showcase of my technical skills and problem-solving abilities through real-world applications
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-black/30 border border-gray-800 rounded-lg overflow-hidden hover:border-gray-600 transition-all duration-300 hover:scale-[1.02] hover:bg-black/50"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.color} group-hover:scale-125 transition-transform duration-300`}></div>
                        <span className="text-sm text-gray-400 flex items-center gap-2 group-hover:text-gray-300 transition-colors duration-300">
                          <Calendar size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                          {project.period}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white group-hover:scale-105 transition-transform duration-300`}>
                          {project.status}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-200 transition-colors duration-200">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-gray-600 transition-all duration-200 hover:scale-105"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <a
                          href="https://github.com/raghav-2034"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-all duration-200 hover:scale-105"
                        >
                          <Github size={16} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                          <span>View Code</span>
                        </a>
                        <button className="group/btn flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-white hover:text-white transition-all duration-200 hover:scale-105">
                          <ExternalLink size={16} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                          <span>Live Demo</span>
                        </button>
                      </div>
                    </div>

                    <div className="lg:w-80">
                      <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 group-hover:border-gray-600 transition-all duration-300 hover:bg-gray-800/70">
                        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2 group-hover:text-gray-200 transition-colors duration-300">
                          <Zap size={18} className={`text-transparent bg-gradient-to-r ${project.color} bg-clip-text group-hover:rotate-12 transition-transform duration-300`} />
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-300 group-hover:text-gray-200 group-hover:translate-x-2 transition-all duration-300">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color} mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/raghav-2034"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-all duration-200 hover:scale-105"
            >
              <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>View All Projects on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;