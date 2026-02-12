'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
    {
        role: 'Frontend Developer',
        company: 'Devfinity',
        location: 'Mid-Baneshwore, Kathmandu, Nepal',
        period: 'Jun 2023 – Present',
        highlights: [
            'Build pixel-perfect, robust and accessible user interfaces on the web',
            'Develop features and improvements in a secure, well-tested, and performant way',
            'Improve overall product experience through high-quality Frontend features',
            'Craft code meeting standards for semantic layout, style, maintainability, and best practices',
            'Maintain and advocate for standards through code review and team discussion',
            'Collaborate and mentor other Front End Engineers',
        ],
        technologies: ['Angular', 'React', 'Next.js', 'TypeScript', 'NgRx', 'Stripe', 'Azure Maps'],
    },
    {
        role: 'Software Engineer',
        company: 'PROCIT BV (IT Himalaya)',
        location: 'Heritage Plaza, Kathmandu',
        period: '2022 – 2023',
        highlights: [
            'Built new Angular components for customer-facing web app, improving time on page by 15 seconds',
            'Translated 30+ wireframes/Figma mockups into working prototypes',
            'Worked within agile scrum team, contributing to 100% CI/CD deployment',
            'Collaborated closely with Project Manager, UI/UX and QA under tight time constraints',
            'Utilized UI frameworks: ngZorro, Bootstrap, Angular Material, and Webpacks',
        ],
        technologies: ['Angular', 'ngZorro', 'Bootstrap', 'Angular Material', 'SCSS', 'CI/CD'],
    },
    {
        role: 'Full Stack Developer (MEAN)',
        company: 'Butwal Technologies',
        location: 'Butwal, Nepal',
        period: 'Sep 2020 – Dec 2021',
        highlights: [
            'Designed, developed, and implemented quality web-based software products using Angular',
            'Analyzed user needs and developed appropriate software solutions',
            'REST API development using Node.js frameworks: Loopback, Express',
            'Designed and implemented software database architecture',
            'Enhanced application features to fix bugs and optimize performance and reliability',
        ],
        technologies: ['Angular', 'Node.js', 'Express', 'Loopback', 'MongoDB', 'REST APIs'],
    },
];

function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="experience" className="relative py-28 overflow-hidden">
            {/* Background */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
            <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-primary/5 blur-[100px]" />

            <div className="max-w-5xl mx-auto px-6" ref={ref}>
                {/* Header */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-sm font-mono text-accent-light tracking-widest uppercase">
                        Career
                    </span>
                    <h2 className="mt-3 text-4xl md:text-5xl font-bold">
                        Work{' '}
                        <span className="text-gradient">Experience</span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

                    <div className="space-y-12">
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                className="relative pl-8 md:pl-20"
                                initial={{ opacity: 0, x: -30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.2 + idx * 0.2, duration: 0.5 }}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2">
                                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent border-4 border-dark" />
                                    <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" style={{ animationDuration: '3s' }} />
                                </div>

                                {/* Card */}
                                <motion.div
                                    className="glass rounded-2xl p-6 md:p-8 border border-dark-border hover:border-primary/20 transition-all duration-500"
                                    whileHover={{
                                        y: -4,
                                        boxShadow: '0 0 30px rgba(124, 58, 237, 0.1)',
                                    }}
                                >
                                    {/* Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white">
                                                {exp.role}
                                            </h3>
                                            <p className="text-primary-light font-medium text-sm">
                                                {exp.company}
                                                <span className="text-gray-600"> · {exp.location}</span>
                                            </p>
                                        </div>
                                        <span className="px-3 py-1 text-xs font-mono rounded-full glass border border-primary/20 text-gray-400 whitespace-nowrap">
                                            {exp.period}
                                        </span>
                                    </div>

                                    {/* Highlights */}
                                    <ul className="space-y-2 mb-5">
                                        {exp.highlights.map((item, i) => (
                                            <li
                                                key={i}
                                                className="text-sm text-gray-400 flex gap-2"
                                            >
                                                <span className="text-primary-light mt-1 shrink-0">▹</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-1.5">
                                        {exp.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary-light border border-primary/10"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
