'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const roles = [
    'Frontend Engineer',
    'React & Angular Specialist',
    'Full Stack Developer',
    'UI/UX Enthusiast',
];

function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    // Typing effect
    useEffect(() => {
        const currentRole = roles[roleIndex];
        const speed = isDeleting ? 40 : 80;

        if (!isDeleting && text === currentRole) {
            const timeout = setTimeout(() => setIsDeleting(true), 2000);
            return () => clearTimeout(timeout);
        }

        if (isDeleting && text === '') {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
            return;
        }

        const timeout = setTimeout(() => {
            setText(
                isDeleting
                    ? currentRole.substring(0, text.length - 1)
                    : currentRole.substring(0, text.length + 1)
            );
        }, speed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex]);

    // Generate particles with useMemo
    const particles = useMemo(
        () =>
            Array.from({ length: 30 }, (_, i) => ({
                id: i,
                left: `${Math.floor((i * 37 + 13) % 100)}%`,
                delay: `${(i * 0.7) % 8}s`,
                duration: `${6 + (i % 5) * 2}s`,
                size: `${1 + (i % 3)}px`,
            })),
        []
    );

    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Prabish_Khanal_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Mesh gradient background */}
            <div className="absolute inset-0 bg-dark mesh-gradient" />

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:60px_60px]" />

            {/* Floating orbs */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-[100px]"
                animate={{
                    x: [0, 50, -30, 0],
                    y: [0, -30, 50, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-[120px]"
                animate={{
                    x: [0, -50, 30, 0],
                    y: [0, 30, -50, 0],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            />

            {/* Particles */}
            <div className="absolute inset-0 pointer-events-none">
                {particles.map((p) => (
                    <span
                        key={p.id}
                        className="particle"
                        style={{
                            left: p.left,
                            bottom: '-10px',
                            animationDelay: p.delay,
                            animationDuration: p.duration,
                            width: p.size,
                            height: p.size,
                            background: p.id % 2 === 0
                                ? 'var(--primary-light)'
                                : 'var(--accent-light)',
                            opacity: 0.4,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 text-center">
                {/* Profile Image */}
                <motion.div
                    className="mb-10"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
                >
                    <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent p-[3px] animate-pulse-glow">
                            <div className="w-full h-full rounded-full overflow-hidden bg-dark">
                                <Image
                                    src="/profile.jpg"
                                    alt="Prabish Khanal"
                                    fill
                                    className="object-cover rounded-full"
                                    priority
                                />
                            </div>
                        </div>
                        {/* Status dot */}
                        <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-green-500 border-4 border-dark z-10">
                            <div className="w-full h-full rounded-full bg-green-500 animate-ping" />
                        </div>
                    </div>
                </motion.div>

                {/* Role badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-sm text-primary-light mb-6"
                >
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="font-mono">
                        {text}
                        <span className="border-r-2 border-primary-light ml-0.5 animate-typing-cursor">
                            &nbsp;
                        </span>
                    </span>
                </motion.div>

                {/* Main heading */}
                <motion.h1
                    className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <span className="text-white">Hi, I&apos;m </span>
                    <span className="text-gradient">Prabish</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    Experienced software engineer with 5+ years creating high-performance
                    websites. Skilled in Angular, React, Next.js, and JavaScript with a
                    strong understanding of design &amp; user experience principles.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4 mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <motion.a
                        href="#projects"
                        className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium relative overflow-hidden"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(124, 58, 237, 0.4)' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View My Work
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </motion.a>
                    <motion.button
                        onClick={handleDownloadResume}
                        className="px-8 py-3.5 rounded-full border border-primary/40 text-primary-light font-medium hover:bg-primary/10 transition-colors flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>Download Resume</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </motion.button>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    className="flex justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    {[
                        {
                            name: 'GitHub',
                            href: 'https://github.com/prabishkhanal',
                            icon: (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            ),
                        },
                        {
                            name: 'LinkedIn',
                            href: 'https://linkedin.com/in/prabishkhanal',
                            icon: (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            ),
                        },
                        {
                            name: 'Twitter',
                            href: 'https://twitter.com/prabishkhanal',
                            icon: (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            ),
                        },
                    ].map((social) => (
                        <motion.a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/40 transition-all duration-300"
                            whileHover={{
                                scale: 1.15,
                                boxShadow: '0 0 20px rgba(124, 58, 237, 0.3)',
                            }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={social.name}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </motion.div>

                {/* Scroll down indicator */}
                {/* <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <motion.a
                        href="#about"
                        className="flex flex-col items-center gap-2 text-gray-500 hover:text-primary-light transition-colors"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.a>
                </motion.div> */}
            </div>
        </section>
    );
}

export default Hero;
