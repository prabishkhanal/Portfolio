import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const [selectedId, setSelectedId] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'GovSoft',
      description: 'A contract management platform designed to handle various contracts issued across the United States. Features automated 24-hour contract updates, efficient review and tracking system, and streamlined interface for user organization.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85',
      category: 'Frontend Development',
      technologies: ['Angular', 'JavaScript', 'REST API', 'Contract Management'],
      link: 'https://app.govsoft.com/account/login'
    },
    {
      id: 2,
      title: 'Airlead',
      description: 'Lead Generation Management Application handling real-time global lead data. Integrated with AirLeads for data verification and validation, optimizing lead generation and outreach processes.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      category: 'Frontend Development',
      technologies: ['Angular', 'Lead Management', 'Real-time Data', 'API Integration'],
      link: 'https://fly.airleads.io/'
    },
    {
      id: 3,
      title: 'The Green Solution',
      description: 'Water Tank Registration and Fill-up Detail Management Application. Mobile-friendly system for tank registration, refill scheduling, and water usage monitoring.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
      category: 'Full Stack',
      technologies: ['Angular', 'Ionic', 'Mobile Development', 'Real-time Updates'],
      link: '#'
    },
    {
      id: 4,
      title: 'Performance Support Application',
      description: 'Management software for user records, knowledge tests, reports, and language translations. Integrated with PWA application for comprehensive performance tracking.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
      category: 'Full Stack',
      technologies: ['Angular', 'Ionic', 'PWA', 'Multi-language Support'],
      link: '#'
    },
    {
      id: 5,
      title: 'Saayog - Food Delivery Platform',
      description: 'Comprehensive food delivery system with admin portal for restaurant management and consumer-facing app for ordering. Features real-time order tracking and secure payments.',
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352',
      category: 'MEAN Stack',
      technologies: ['Angular', 'React', 'Node.js', 'Express', 'MongoDB'],
      link: '#'
    },
    {
      id: 6,
      title: 'Stock Market Analysis',
      description: 'Predictive analytics platform for stock market trends using linear regression algorithm. Analyzes price movements to forecast market behavior.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3',
      category: 'Data Analysis',
      technologies: ['Python', 'Django', 'Linear Regression', 'Data Analysis'],
      link: '#'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-light tracking-wider text-blue-400">MY WORK</h2>
          <h3 className="mt-2 text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h3>
          <p className="mt-4 text-gray-300">
            A showcase of my professional projects and technical expertise, 
            featuring work in frontend development, full-stack applications, 
            and data analysis.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={item}
              layoutId={`project-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              className="group relative overflow-hidden rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Project Image */}
              <div className="aspect-[16/9] overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
              </div>

              {/* Project Info */}
              <motion.div 
                className="p-6 space-y-4 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="space-y-2">
                  <span className="inline-block px-3 py-1 text-sm text-blue-400 font-medium bg-blue-500/10 rounded-full">
                    {project.category}
                  </span>
                  <h4 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <motion.span 
                      key={index}
                      className="px-2 py-1 text-xs bg-blue-600/10 text-blue-400 rounded-full"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* View Project Link */}
                {project.link !== '#' && (
                  <motion.a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    View Live
                    <svg 
                      className="ml-2 w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                      />
                    </svg>
                  </motion.a>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;