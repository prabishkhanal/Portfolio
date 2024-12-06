import React from 'react';
import resumePDF from '../../assets/resume.pdf';

function About() {
  const stats = [
    { label: 'Years Experience', value: '4+' },
    { label: 'Projects Completed', value: '20+' },
    { label: 'Technologies', value: '15+' },
    { label: 'Client Satisfaction', value: '100%' },
  ];

  const handleDownloadResume = () => {
    window.open(resumePDF, '_blank');
  };

  return (
    <section id="about" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Image */}
          <div className="relative max-w-md mx-auto lg:mx-0">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-2 -left-2 w-16 h-16 bg-blue-600/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-blue-600/20 rounded-full blur-2xl"></div>
          </div>

          {/* Right column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-light tracking-wider text-blue-400">ABOUT ME</h2>
              <h3 className="mt-2 text-4xl font-bold">Building innovative solutions with modern technologies</h3>
            </div>

            <p className="text-gray-300 text-lg">
              I'm a full-stack developer with expertise in React, Node.js, and Python. 
              Specializing in building scalable web applications, I combine strong technical skills 
              with a deep understanding of user experience. My experience includes developing 
              AI-integrated solutions, e-commerce platforms, and responsive web applications.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-8 py-8">
              {stats.map((stat, index) => (
                <div key={index} className="border-l-2 border-blue-600/30 pl-4">
                  <div className="text-3xl font-bold text-blue-400">{stat.value}</div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-blue-400">Technical Skills</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "Angular",
                  "React.js",
                  "Node.js",
                  "Python",
                  "JavaScript",
                  "TypeScript",
                  "HTML/CSS",
                  "Tailwind CSS",
                  "Material-UI",
                  "Express.js",
                  "MongoDB",
                  "PostgreSQL",
                  "Git",
                  "AWS",
                  "Docker",
                  "RESTful APIs"
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-blue-600/10 text-blue-400 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <button 
              onClick={handleDownloadResume}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium transition-colors flex items-center gap-2"
            >
              <span>Download Resume</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
