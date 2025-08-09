'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex container for desktop layout */}
        <div className="flex items-center  justify-evenly py-4 sm:py-6">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text"
          >
            Aditya Rai
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center justify-center min-w-[65px] text-gray-300 hover:text-white transition-colors duration-200 font-medium px-3 py-2 rounded-md"
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Download Resume Button - only on large screens */}
          <a
            href="https://drive.google.com/file/d/1hBJ75ZKeotHNsvBIdyxryciMEahb2j6R/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="hidden md:inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-2 rounded-lg font-medium transition-all duration-200 shadow-md"
          >
            Download Resume
          </a>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden w-full"
          >
            <div className="flex flex-col px-4 py-4 space-y-3 bg-gray-900/95 backdrop-blur-md rounded-lg shadow-md mt-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center justify-center w-full text-left text-gray-300 hover:text-white hover:bg-gray-800 px-5 py-3 rounded-md transition-all duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}

              {/* Download Resume Button in mobile */}
              <a
                href="/Aditya_Rai_Resume.pdf"
                download
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md font-medium text-center transition-colors duration-200"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
