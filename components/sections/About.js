'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

function AnimatedCounter({ target, suffix = '' }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;
        const num = parseInt(target);
        const duration = 2000;
        const steps = 60;
        const increment = num / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= num) {
                setCount(num);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [isInView, target]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
}

const stats = [
    { label: 'Years Experience', value: '5', suffix: '+' },
    { label: 'Projects Delivered', value: '12', suffix: '+' },
    { label: 'Technologies', value: '20', suffix: '+' },
    { label: 'Client Satisfaction', value: '100', suffix: '%' },
];

const techStack = [
    'Angular', 'React', 'Next.js', 'JavaScript', 'TypeScript',
    'Ionic', 'HTML/CSS', 'Tailwind CSS', 'SCSS/SASS',
    'Node.js', 'Express', 'MongoDB', 'PostgreSQL',
    'RxJS', 'NgRx', 'Redux', 'Framer', 'Webflow',
    'Docker', 'AWS', 'Git',
];

function About() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: '-100px' });

    return (
        <section id="about" className="relative py-28 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-primary/5 blur-[100px]" />
            <div className="absolute bottom-1/4 left-0 w-60 h-60 rounded-full bg-accent/5 blur-[80px]" />

            <div className="max-w-7xl mx-auto px-6" ref={containerRef}>
                {/* Section header */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-sm font-mono text-primary-light tracking-widest uppercase">
                        About Me
                    </span>
                    <h2 className="mt-3 text-4xl md:text-5xl font-bold">
                        Crafting high-performance
                        <br />
                        <span className="text-gradient">web experiences</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
                    {/* Left column — Image (2 cols) */}
                    <motion.div
                        className="lg:col-span-2 relative"
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative max-w-sm mx-auto lg:mx-0">
                            {/* Gradient border frame */}
                            <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-primary via-accent to-primary">
                                <div className="rounded-3xl overflow-hidden bg-dark">
                                    <div className="aspect-[4/5] relative">
                                        <Image
                                            src="/profile.jpg"
                                            alt="Prabish Khanal"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 400px"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Floating decoration */}
                            <motion.div
                                className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl glass border border-primary/20 flex items-center justify-center"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                <span className="text-3xl">🚀</span>
                            </motion.div>
                            <motion.div
                                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl glass border border-accent/20 flex items-center justify-center"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity }}
                            >
                                <span className="text-2xl">💻</span>
                            </motion.div>

                            {/* Education card */}
                            <motion.div
                                className="mt-6 glass rounded-2xl p-5 border border-dark-border"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.5 }}
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-xl">🎓</span>
                                    <h4 className="text-sm font-mono text-primary-light tracking-wider uppercase">Education</h4>
                                </div>
                                <p className="text-white font-semibold text-sm">BSc. in Computer Science & IT</p>
                                <p className="text-gray-500 text-xs mt-1">National College of Computer Studies • 2016 – 2020</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right column — Content (3 cols) */}
                    <motion.div
                        className="lg:col-span-3 space-y-8"
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Experienced software engineer with over 5 years of experience in creating
                            high-performance websites that delight both customers and businesses.
                            Skilled in Angular, React, Next.js, Vue, HTML, CSS, and JavaScript, with a strong
                            understanding of design and user experience principles. Known for being
                            hardworking, deadline-driven, and a collaborative team player committed to
                            continuous learning and professional growth.
                        </p>

                        {/* Stats grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="glass rounded-2xl p-5 text-center border border-primary/10 hover:border-primary/30 transition-colors group"
                                    whileHover={{
                                        y: -4,
                                        boxShadow: '0 0 20px rgba(124, 58, 237, 0.15)',
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                >
                                    <div className="text-3xl font-bold text-gradient">
                                        <AnimatedCounter
                                            target={stat.value}
                                            suffix={stat.suffix}
                                        />
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Tech Stack */}
                        <div>
                            <h4 className="text-sm font-mono text-primary-light tracking-widest uppercase mb-4">
                                Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {techStack.map((skill, index) => (
                                    <motion.span
                                        key={index}
                                        className="px-3 py-1.5 text-sm rounded-full glass border border-primary/10 text-gray-300 hover:text-white hover:border-primary/40 hover:bg-primary/10 transition-all cursor-default"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: 0.6 + index * 0.03 }}
                                        whileHover={{ scale: 1.08 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default About;
