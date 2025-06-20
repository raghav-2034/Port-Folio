import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:raghavreddy676@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'raghavreddy676@gmail.com',
      link: 'mailto:raghavreddy676@gmail.com',
      color: 'from-blue-600 to-blue-400'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+91 9100839784',
      link: 'tel:+919100839784',
      color: 'from-green-600 to-green-400'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Hyderabad, Telangana, India',
      link: 'https://maps.google.com/?q=Hyderabad,Telangana,India',
      color: 'from-red-600 to-red-400'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      title: 'GitHub',
      link: 'https://github.com/raghav-2034',
      color: 'hover:text-gray-300'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      link: 'mailto:raghavreddy676@gmail.com',
      color: 'hover:text-blue-400'
    },
    {
      icon: <MessageCircle size={24} />,
      title: 'Let\'s Connect',
      link: '#',
      color: 'hover:text-green-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's collaborate on your next project or discuss opportunities in technology and innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.title === 'Location' ? '_blank' : '_self'}
                    rel={info.title === 'Location' ? 'noopener noreferrer' : ''}
                    className="group flex items-center p-4 bg-black/30 border border-gray-800 rounded-lg hover:border-gray-600 transition-all duration-300 hover:scale-105"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{info.title}</h4>
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-200">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200 hover:scale-110`}
                      title={social.title}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-6 bg-black/30 border border-gray-800 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">Why Work With Me?</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Full-stack development expertise</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>AI/ML and cloud computing knowledge</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Strong problem-solving abilities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Collaborative and team-oriented</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-semibold mb-8">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-colors duration-200"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-colors duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-colors duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/30 border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;