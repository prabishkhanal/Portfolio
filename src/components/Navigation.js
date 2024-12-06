import React, { useState } from 'react';
import resumePDF from '../assets/resume.pdf';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleDownloadResume = () => {
    window.open(resumePDF, '_blank');
  };

  return (
    <header className="bg-gray-900 text-white fixed w-full z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <a
              href="#home"
              className="text-2xl font-bold text-white hover:text-blue-500 transition-colors"
              onClick={closeMenu}
            >
              Prabish Khanal<span className="text-blue-500">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="hover:text-blue-500 transition-colors"
              onClick={closeMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-blue-500 transition-colors"
              onClick={closeMenu}
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-blue-500 transition-colors"
              onClick={closeMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-blue-500 transition-colors"
              onClick={closeMenu}
            >
              Contact
            </a>
            <button
              onClick={handleDownloadResume}
              className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition-colors flex items-center gap-2"
            >
              <span>Resume</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            isOpen ? 'block' : 'hidden'
          } pt-4 pb-2 space-y-4 text-center`}
        >
            <a
              href="#home"
              className="block hover:text-blue-500 transition-colors"
              onClick={closeMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="block hover:text-blue-500 transition-colors"
              onClick={closeMenu}
            >
              About
            </a>
            <a
              href="#projects"
              className="block hover:text-blue-500 transition-colors"
              onClick={closeMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block hover:text-blue-500 transition-colors"
              onClick={closeMenu}
            >
              Contact
            </a>
            <button
              onClick={() => {
                handleDownloadResume();
                closeMenu();
              }}
              className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition-colors flex items-center gap-2 mx-auto"
            >
              <span>Resume</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
