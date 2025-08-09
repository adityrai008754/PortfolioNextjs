'use client';

import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  LinkIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/adityrai008754',
      icon: CodeBracketIcon,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aditya-rai-42990b24b/',
      icon: LinkIcon,
    },
    {
      name: 'Twitter',
      href: 'https://x.com/AdityaRai24',
      icon: ChatBubbleLeftRightIcon,
    },
    {
      name: 'Email',
      href: 'mailto:adityrai008754@gmail.com',
      icon: EnvelopeIcon,
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0f172a] border-t border-gray-800 pt-20 flex items-center justify-center"> {/* Updated bg color and top padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left"> {/* Centered on small screens */}
              {/* Brand Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold gradient-text">Aditya Rai</h3>
                <p className="text-gray-400 max-w-md mx-auto md:mx-0">
                  Full Stack Developer passionate about creating innovative web solutions
                  and building user-friendly applications.
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-gray-400 hover:text-white transition-colors duration-200 "
                    >
                      <social.icon className="h-6 w-6 lg:h-8 lg:w-8" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-white">Contact</h4>
                <div className="space-y-2 text-gray-400">
                  <p>adityrai008754@gmail.com</p>
                  <p>+91 9131256618</p>
                  <p>Location: Bhopal, India</p>
                </div>
              </motion.div>
            </div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border-t border-gray-800 mt-12 pt-12 text-center"
            >
              <p className="text-gray-400">
                © {new Date().getFullYear()} Aditya Rai. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Built with Next.js, Tailwind CSS, and Framer Motion
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
