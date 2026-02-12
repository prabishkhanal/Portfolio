'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const projects = [
    {
        id: 1,
        title: 'GovSoft',
        description:
            'Contract management platform updating government contracts every 24 hours. Designed frontend architecture, implemented NgRx Store, developed high-performance data tables, integrated Stripe payments, and Azure Maps with optimized performance.',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85',
        category: 'Frontend',
        technologies: ['Angular', 'NgRx', 'Stripe', 'Azure Maps', 'TypeScript'],
        link: 'https://app.govsoft.com/',
        period: '2023 – Present',
    },
    {
        id: 2,
        title: 'Touchstone Digital Solutions',
        description:
            'Designed and developed a high-impact, interactive marketing site showcasing a customizable touchscreen recognition platform tailored for schools, nonprofits, and institutions.',
        image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12',
        category: 'React/Next',
        technologies: ['React', 'Next.js', 'JavaScript', 'SEO'],
        link: 'https://touchstone-ds.com/',
        period: '2024 – 2025',
    },
    {
        id: 3,
        title: 'Lyayo Designs',
        description:
            'Modern, responsive portfolio site with strong emphasis on performance, SEO, and accessibility. Built with React and Next.js with next-seo, next-sitemap, and Lighthouse optimization.',
        image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb',
        category: 'React/Next',
        technologies: ['React', 'Next.js', 'next-seo', 'Vercel'],
        link: 'https://lyayodesigns.com/',
        period: '2024 – 2025',
    },
    {
        id: 4,
        title: 'HotViking',
        description:
            'Clean, modern one-page website for an async marketing service. Communicates dual offerings—creative content + performance tracking—through smooth scroll-based sections and anchor-linked navigation.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
        category: 'Framer',
        technologies: ['Framer', 'Responsive Design', 'CMS', 'UI/UX'],
        link: 'https://www.hotviking.com/',
        period: '2024',
    },
    {
        id: 5,
        title: 'Genrefinder.app',
        description:
            'Interactive music genre analysis tool empowering users to identify song genres, discover similar music, generate playlists, and find tracks by lyrics. SEO-optimized with Spotify/YouTube integration.',
        image: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7',
        category: 'React/Next',
        technologies: ['React', 'Next.js', 'Spotify API', 'Audio APIs'],
        link: 'https://genrefinder.app/',
        period: '2024 – 2025',
    },
    {
        id: 6,
        title: 'Airlead',
        description:
            'Lead Generation Management Application with NgRx Store for state management, Stripe payment integration, and AirLeads integration for real-time global lead data verification and validation.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
        category: 'Frontend',
        technologies: ['Angular', 'NgRx', 'Stripe', 'Real-time Data'],
        link: 'https://fly.airleads.io/',
        period: '2023 – 2024',
    },
    {
        id: 7,
        title: 'The Green Solution',
        description:
            'Water Tank Registration and Fill-up Detail Management Application. Built with Angular and Ionic for seamless mobile experience — register tanks, track fill-ups, and monitor consumption in real time.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
        category: 'Mobile',
        technologies: ['Angular', 'Ionic', 'Mobile', 'Real-time Updates'],
        link: '#',
        period: '2022 – 2023',
    },
    {
        id: 8,
        title: 'PSA Admin Portal',
        description:
            'Admin Portal for a PWA-based Management Software enabling administrators to manage users, knowledge tests, reports, multilingual content, and application settings with SCORM packages.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
        category: 'Full Stack',
        technologies: ['Angular', 'Ionic', 'PWA', 'SCORM', 'jQuery'],
        link: '#',
        period: '2022 – 2023',
    },
    {
        id: 9,
        title: 'Netherlands Govt Training PWA',
        description:
            'Training application for the Government of the Netherlands. Users access training modules, take knowledge tests, and report incidents. Implemented customizable SCORM packages and support features.',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173',
        category: 'Full Stack',
        technologies: ['Angular', 'Ionic', 'PWA', 'SCORM', 'jQuery'],
        link: '#',
        period: '2022 – 2023',
    },
    {
        id: 10,
        title: 'Job Card',
        description:
            'Vehicle management system for service centers enabling tracking of vehicle issues, maintenance tasks, and repair histories. Upgraded frontend from AngularJS to Angular v12.',
        image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3',
        category: 'Frontend',
        technologies: ['Angular', 'AngularJS Migration', 'TypeScript'],
        link: '#',
        period: '2021 – 2022',
    },
    {
        id: 11,
        title: 'Saayog — Food Delivery',
        description:
            'Consumer-facing food delivery portal enabling users to browse menus, place orders, track deliveries, and make secure payments with OAuth authentication and real-time admin integration.',
        image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352',
        category: 'MEAN Stack',
        technologies: ['Angular', 'Node.js', 'Express', 'MongoDB', 'OAuth'],
        link: '#',
        period: '2020 – 2021',
    },
    {
        id: 12,
        title: 'Saayog Admin',
        description:
            'Backend admin system managing restaurant operations, menus, orders, customer data, and delivery logistics with a customizable high-performance data table.',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
        category: 'MEAN Stack',
        technologies: ['Angular', 'Node.js', 'Express', 'MongoDB'],
        link: '#',
        period: '2020 – 2021',
    },
];

const categories = ['All', ...new Set(projects.map((p) => p.category))];

function Projects() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filtered =
        activeCategory === 'All'
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <section id="projects" className="relative py-28 overflow-hidden">
            {/* Background */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-sm font-mono text-primary-light tracking-widest uppercase">
                        My Work
                    </span>
                    <h2 className="mt-3 text-4xl md:text-5xl font-bold">
                        Featured{' '}
                        <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="mt-4 text-gray-400 max-w-2xl">
                        A showcase of 12+ professional projects spanning frontend development,
                        full-stack applications, mobile apps, and interactive marketing sites.
                    </p>
                </motion.div>

                {/* Category Filters */}
                <motion.div
                    className="flex flex-wrap gap-2 mb-12"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {categories.map((cat) => (
                        <motion.button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`relative px-5 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${activeCategory === cat
                                    ? 'text-white'
                                    : 'text-gray-400 hover:text-white'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {activeCategory === cat && (
                                <motion.span
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent"
                                    layoutId="activeFilter"
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{cat}</span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    layout
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative rounded-2xl overflow-hidden glass border border-dark-border hover:border-primary/30 transition-all duration-500"
                                whileHover={{ y: -8 }}
                            >
                                {/* Image */}
                                <div className="aspect-[16/10] overflow-hidden relative">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />

                                    {/* Badges */}
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <span className="px-3 py-1 text-xs font-medium rounded-full glass text-primary-light border border-primary/20">
                                            {project.category}
                                        </span>
                                        <span className="px-3 py-1 text-xs font-mono rounded-full glass text-gray-400 border border-dark-border">
                                            {project.period}
                                        </span>
                                    </div>

                                    {/* Hover overlay link */}
                                    {project.link !== '#' && (
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <motion.a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white text-sm font-medium"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                View Live →
                                            </motion.a>
                                        </div>
                                    )}
                                </div>

                                {/* Info */}
                                <div className="p-6 space-y-3">
                                    <h3 className="text-lg font-bold text-white group-hover:text-gradient transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 pt-2">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary-light border border-primary/10"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom gradient line on hover */}
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}

export default Projects;
