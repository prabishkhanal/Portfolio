'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
];

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Detect active section
            const sections = navLinks.map((l) => l.href.slice(1));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 120) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsOpen(false);

    const handleDownloadResume = () => {
        window.open('/resume.pdf', '_blank');
    };

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'glass-strong shadow-glass'
                    : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <nav className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        className="text-2xl font-bold relative group"
                        onClick={closeMenu}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="text-gradient">Prabish</span>
                        <span className="text-white"> Khanal</span>
                        <span className="text-gradient text-3xl">.</span>
                        <motion.span
                            className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                            initial={{ width: 0 }}
                            whileHover={{ width: '100%' }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${activeSection === link.href.slice(1)
                                        ? 'text-white'
                                        : 'text-gray-400 hover:text-white'
                                    }`}
                                onClick={closeMenu}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {activeSection === link.href.slice(1) && (
                                    <motion.span
                                        className="absolute inset-0 rounded-full bg-primary/20 border border-primary/30"
                                        layoutId="activeNav"
                                        transition={{
                                            type: 'spring',
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    />
                                )}
                                <span className="relative z-10">{link.name}</span>
                            </motion.a>
                        ))}
                        <motion.button
                            onClick={handleDownloadResume}
                            className="ml-4 px-5 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-primary to-accent text-white hover:shadow-glow-sm transition-shadow duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Resume
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl glass"
                        whileTap={{ scale: 0.9 }}
                    >
                        <div className="w-5 h-4 relative flex flex-col justify-between">
                            <motion.span
                                className="block h-0.5 w-full bg-white rounded-full origin-center"
                                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.span
                                className="block h-0.5 w-full bg-white rounded-full"
                                animate={isOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                                transition={{ duration: 0.2 }}
                            />
                            <motion.span
                                className="block h-0.5 w-full bg-white rounded-full origin-center"
                                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="md:hidden mt-4 pb-4 space-y-1"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    className={`block px-4 py-3 rounded-xl text-center font-medium transition-colors ${activeSection === link.href.slice(1)
                                            ? 'text-white bg-primary/10 border border-primary/20'
                                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                                        }`}
                                    onClick={closeMenu}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.button
                                onClick={() => {
                                    handleDownloadResume();
                                    closeMenu();
                                }}
                                className="w-full mt-2 px-4 py-3 rounded-xl text-center font-medium bg-gradient-to-r from-primary to-accent text-white"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navLinks.length * 0.05 }}
                            >
                                Download Resume
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
};

export default Navigation;
