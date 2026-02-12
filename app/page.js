'use client';

import Navigation from '../components/Navigation';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Contact from '../components/sections/Contact';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="bg-dark min-h-screen">
            <Navigation />
            <main>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
