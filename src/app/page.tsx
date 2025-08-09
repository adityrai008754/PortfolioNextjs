'use client';

import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive'
import Header from './components/Header';
import Footer from './components/Footer';
import {
  ArrowDownIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CpuChipIcon,
  GlobeAltIcon,
  ServerIcon,
  CircleStackIcon,
  CloudIcon
} from '@heroicons/react/24/outline';

// Hero Section
const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Aditya Rai</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-300 mb-10"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 mb-16 max-w-2xl mx-auto"
          >
            I create innovative web solutions and build user-friendly applications
            with modern technologies. Passionate about clean code and exceptional user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 items-center justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className=" px-8 py-3.5 min-w-[130px] bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://contact-aditya-rai.onrender.com/', '_blank')}
              className="px-8 py-3.5 min-w-[130px] border-2 border-gray-600 bg-gray-800/60 text-gray-300 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400"
        >
          <ArrowDownIcon className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });
  const skills = [
    { name: 'Frontend Development', icon: CodeBracketIcon },
    { name: 'Backend Development', icon: ServerIcon },
    { name: 'Database Design', icon: CircleStackIcon },
    { name: 'Cloud Services', icon: CloudIcon },
  ];

  return (
    <section id="about" className="py-24 bg-gray-800">
      <div className="flex items-center justify-center min-h-[60vh] px-4 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full ">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16  ">
            <div className='flex flex-col gap-2 max-w-7xl mx-auto  px-4'>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-white ">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-1 sm:px-3">
                I'm a passionate Full Stack Developer with expertise in modern web technologies
              </p>
            </div>
          </motion.div>

          {/* Content Grid */}
          <div className="mt-60 flex flex-col gap-y-20 sm:gap-y-24 lg:grid lg:grid-cols-2 gap-x-12 items-start">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8 sm:space-y-8">

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I'm a Full Stack Developer skilled in JavaScript, React.js, Node.js, Express.js, Next.js, and modern web technologies. Proficient in C, C++, Python, SQL, HTML, CSS, Tailwind CSS, and MongoDB.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                My journey began with competitive coding ,900+ problems solved on LeetCode and a 5-star rating in C++ on HackerRank , before moving into full-stack projects like a Food Delivery Web App, MovieX, and Budemy.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Beyond coding, I explore new tech, contribute to open-source, and compete in programming contests to stay sharp.
              </p>

            </motion.div>

            {/* Skills Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: isSmallScreen ? 125 : 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1  sm:grid-cols-2 gap-4 sm:gap-6"
            >



              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-700 p-6 rounded-lg flex flex-col items-center justify-center text-center hover:bg-gray-600 transition-colors duration-300"
                >
                  <skill.icon className="h-10 w-10 sm:h-12 sm:w-12 text-blue-400 mb-3 sm:mb-4" />
                  <h3 className="text-base sm:text-lg font-semibold text-white">{skill.name}</h3>
                </motion.div>

              ))}

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
// Skills Section
const SkillsSection = () => {
  const skills = [
    { name: 'C++', level: 95, color: 'from-orange-500 to-red-500' },
    { name: 'HTML/CSS', level: 95, color: 'from-orange-500 to-red-500' },
    { name: 'JavaScript', level: 92, color: 'from-yellow-400 to-orange-500' },
    { name: 'React.js', level: 90, color: 'from-blue-500 to-cyan-500' },
    { name: 'Next.js', level: 89, color: 'from-sky-500 to-blue-600' },
    { name: 'Tailwind CSS', level: 88, color: 'from-cyan-400 to-blue-500' },
    { name: 'Node.js', level: 88, color: 'from-green-500 to-emerald-500' },
    { name: 'Express.js', level: 87, color: 'from-green-600 to-green-700' },
    { name: 'MongoDB', level: 85, color: 'from-green-600 to-green-700' },
    { name: 'MySQL', level: 82, color: 'from-blue-400 to-indigo-500' },
    { name: 'Python', level: 80, color: 'from-yellow-500 to-green-500' },
    { name: 'Redux', level: 78, color: 'from-purple-500 to-pink-500' },
    { name: 'JWT & Authentication', level: 76, color: 'from-indigo-500 to-purple-500' },
    { name: 'Stripe API', level: 74, color: 'from-pink-500 to-rose-500' }
  ];



  return (
    <section id="skills" className="py-32 bg-gray-900 flex items-center justify-center border-y-4 border-gray-800">
      <div className="max-w-7xl w-full mx-auto px-4 py-20 sm:px-6 lg:px-8 min-h-[85vh] ">
        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <div className='flex flex-col gap-4 max-w-7xl mx-auto  px-4'>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  My <span className="gradient-text">Skills</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Technologies and tools I use to bring ideas to life
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-white">{skill.name}</span>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                      className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Section
const ProjectsSection = () => {
  const projects = [
    {
      title: '  Tomato Food Delivery Platform',
      description: '  A full-stack application with payment integration, user authentication, and admin.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/adityrai008754/Tomato',
      demo: 'https://ecommerce-demo.com',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Form builder App',
      description: 'A form-builder  application with real-time updates.',
      tech: ['Next.js', 'TypeScript', 'SQLLite', 'Prisma'],
      github: 'https://github.com/adityrai008754/form-builder-app',
      demo: 'https://task-app-demo.com',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Movix - Movie Browsing App',
      description: ' A movie browsing application with search, reviews, and ratings.',
      tech: ['React', 'TMDB API', 'Tailwind CSS'],
      github: 'https://github.com/adityrai008754/movix2',
      demo: 'https://weather-demo.com',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Gemni - AI Chatbot',
      description: 'A chatbot application using Gemini API ',
      tech: ['ViteJs', 'CSS', 'GemniAPI', 'Tailwind CSS'],
      github: 'https://github.com/adityrai008754/gemini-clone',
      demo: 'https://blog-demo.com',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with animations, contact form, and modern design.',
      tech: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Nodemailer'],
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://portfolio-demo.com',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Youtube Frontend Clone',
      description: 'A frontend clone of YouTube with video browsing, search, and user authentication.',
      tech: ['React', 'CSS', 'Youtube Data API', 'HTML'],
      github: 'https://github.com/adityrai008754/youtube-clone',
      demo: 'https://api-gateway-demo.com',
      image: '/api/placeholder/400/250'
    },
  ];

  return (
    <section id="projects" className="py-32 bg-gray-800 flex items-center justify-center border-y-4 border-gray-800">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 min-h-[135vh]">
        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <div className="flex flex-col gap-4 max-w-7xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  My <span className="gradient-text">Projects</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Here are some of the projects I've worked on recently
                </p>
              </div>
            </motion.div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-gray-700 rounded-xl overflow-hidden hover:bg-gray-600 transition-all duration-300 flex flex-col h-full min-h-[360px] shadow-lg m-2"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <GlobeAltIcon className="h-16 w-16 text-gray-400" />
                  </div>
                  <div className="  flex flex-col flex-1">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4 ">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="min-w-11 flex items-center justify-center px-33 py-11 bg-gray-600 text-gray-200 text-sm rounded-md font-medium my-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-auto">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        // initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 35 }}
                        // transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-gray-600 text-white text-center py-2 rounded hover:bg-gray-500 transition-colors duration-200"
                      >
                        GitHub
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileInView={{ opacity: 1, y: 35 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 rounded hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                      >
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
  {projects.map((project, index) => (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="bg-gradient-to-b from-gray-600 to-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-700 hover:border-gray-500 transition-all duration-300 flex flex-col min-h-[400px]" 
    >
      {/* Image/Top Section */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 flex items-center justify-center">
          <GlobeAltIcon className="h-16 w-16 text-blue-400 opacity-80" />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col  justify-between flex-1 px-10 py-10 space-y-8">
        {/* Title & Description */}
        <div className='flex flex-col gap-2 items-center'>
          <h3 className=" text-xl font-bold text-white m-3">{project.title}</h3>
          <p className="text-gray-400 leading-relaxed flex flex-col gap-2 items-center">{project.description}</p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 bg-gray-500/70 text-gray-200 text-sm rounded-lg font-medium border border-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 px-5 py-3 bg-gray-700 text-white text-center rounded-lg hover:bg-gray-600 transition-all"
          >
            GitHub
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  ))}
</div> 

          </div>
        </div>
      </div>
    </section>
  )
};

import ContactForm from './components/ContactForm';

// Contact Section
const ContactSection = () => {
  return (
    <section id="contact" className="py-32 bg-gray-900 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[60vh]">
        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Get In <span className="gradient-text">Touch</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                I'm always interested in new opportunities and exciting projects.
                Let's work together!
              </p>
            </motion.div>

            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen sm:m-2.5 ">
      <Header />
      <HeroSection />

      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      {/* <ContactSection /> */}
      <Footer />
    </main>
  );
}
