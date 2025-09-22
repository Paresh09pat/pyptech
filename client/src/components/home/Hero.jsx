import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import AnimatedBackground from './AnimatedBackground';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, delay: 0.6 }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Main Heading */}
          <motion.h1
            variants={textVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            <span className="block">Innovative</span>
            <span className="block gradient-text-safe">
              Technology Solutions
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={textVariants}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto"
          >
            Empowering businesses with cutting-edge web development, 
            mobile apps, cloud solutions, and AI-driven innovations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={buttonVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button className="group inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-all duration-300">
              <FiPlay className="mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16"
          >
            {[
              { number: '100+', label: 'Projects Delivered' },
              { number: '50+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
