'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
    {
        title: 'Core Frontend',
        icon: '🎨',
        color: 'from-violet-500 to-purple-500',
        skills: [
            { name: 'Angular', level: 95 },
            { name: 'React', level: 90 },
            { name: 'Next.js', level: 85 },
            { name: 'JavaScript (ES5/ES6)', level: 95 },
            { name: 'TypeScript', level: 88 },
            { name: 'HTML/CSS', level: 95 },
        ],
    },
    {
        title: 'Styling & UI',
        icon: '✨',
        color: 'from-pink-500 to-rose-500',
        skills: [
            { name: 'Tailwind CSS', level: 90 },
            { name: 'SCSS/SASS', level: 88 },
            { name: 'Angular Material', level: 85 },
            { name: 'Bootstrap', level: 85 },
            { name: 'Framer', level: 80 },
            { name: 'Webflow', level: 78 },
        ],
    },
    {
        title: 'State & Advanced',
        icon: '⚡',
        color: 'from-amber-500 to-orange-500',
        skills: [
            { name: 'RxJS', level: 90 },
            { name: 'NgRx/NGXS', level: 85 },
            { name: 'Redux/Context API', level: 82 },
            { name: 'Socket.io / SignalR', level: 78 },
            { name: 'Stripe Integration', level: 80 },
            { name: 'DOM Manipulation', level: 90 },
        ],
    },
    {
        title: 'Backend & APIs',
        icon: '⚙️',
        color: 'from-cyan-500 to-blue-500',
        skills: [
            { name: 'Node.js', level: 80 },
            { name: 'Express', level: 82 },
            { name: 'REST APIs', level: 90 },
            { name: 'MongoDB', level: 75 },
            { name: 'PostgreSQL', level: 70 },
            { name: 'Axios', level: 85 },
        ],
    },
    {
        title: 'Mobile & Cross-Platform',
        icon: '📱',
        color: 'from-emerald-500 to-teal-500',
        skills: [
            { name: 'Ionic', level: 85 },
            { name: 'Capacitor', level: 80 },
            { name: 'Cordova', level: 72 },
            { name: 'PWA', level: 82 },
            { name: 'Responsive Design', level: 95 },
            { name: 'ngZorro', level: 80 },
        ],
    },
    {
        title: 'Tools & DevOps',
        icon: '🛠️',
        color: 'from-indigo-500 to-blue-600',
        skills: [
            { name: 'Git', level: 90 },
            { name: 'SVN', level: 70 },
            { name: 'AWS', level: 65 },
            { name: 'Docker', level: 68 },
            { name: 'Postman', level: 88 },
            { name: 'BitBucket', level: 85 },
        ],
    },
];

function SkillBar({ skill, index, isInView, color }) {
    return (
        <div className="space-y-1.5">
            <div className="flex justify-between text-sm">
                <span className="text-gray-300 font-medium">{skill.name}</span>
                <motion.span
                    className="text-gray-500 font-mono text-xs"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                >
                    {skill.level}%
                </motion.span>
            </div>
            <div className="h-1.5 rounded-full bg-dark-border overflow-hidden">
                <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${color}`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{
                        duration: 1.2,
                        delay: 0.3 + index * 0.1,
                        ease: 'easeOut',
                    }}
                />
            </div>
        </div>
    );
}

function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="skills" className="relative py-28 overflow-hidden">
            {/* Background */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
            <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-accent/5 blur-[100px]" />

            <div className="max-w-7xl mx-auto px-6" ref={ref}>
                {/* Header */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-sm font-mono text-accent-light tracking-widest uppercase">
                        Skills
                    </span>
                    <h2 className="mt-3 text-4xl md:text-5xl font-bold">
                        Technical{' '}
                        <span className="text-gradient">Expertise</span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-2xl">
                        Comprehensive proficiency across frontend, backend, mobile, and DevOps
                        technologies built over 5+ years of professional experience.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            className="relative group rounded-2xl glass border border-dark-border hover:border-primary/20 p-7 transition-all duration-500"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 + idx * 0.1 }}
                            whileHover={{
                                y: -6,
                                boxShadow: '0 0 30px rgba(124, 58, 237, 0.1)',
                            }}
                        >
                            {/* Top gradient line */}
                            <div
                                className={`absolute top-0 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r ${category.color} opacity-50 group-hover:opacity-100 transition-opacity`}
                            />

                            {/* Category header */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-2xl">{category.icon}</span>
                                <h3 className="text-lg font-bold text-white">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Skill bars */}
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIdx) => (
                                    <SkillBar
                                        key={skillIdx}
                                        skill={skill}
                                        index={skillIdx}
                                        isInView={isInView}
                                        color={category.color}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Soft Skills */}
                <motion.div
                    className="mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                >
                    <h3 className="text-sm font-mono text-primary-light tracking-widest uppercase mb-4">
                        Soft Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {[
                            'Communication', 'Teamwork', 'Problem-Solving', 'Time Management',
                            'Adaptability', 'Attention to Detail', 'Creativity', 'Leadership',
                        ].map((skill, i) => (
                            <motion.span
                                key={i}
                                className="px-4 py-2 text-sm rounded-full glass border border-primary/10 text-gray-300 hover:text-white hover:border-primary/30 transition-all cursor-default"
                                whileHover={{ scale: 1.05 }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Skills;
