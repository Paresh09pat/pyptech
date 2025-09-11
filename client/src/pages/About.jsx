import React from 'react';
import { motion } from 'framer-motion';
import CompanyStory from '../components/about/CompanyStory';
import Timeline from '../components/about/Timeline';
import Team from '../components/about/Team';
import Values from '../components/about/Values';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">About PYP Technology</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're a passionate team of innovators dedicated to transforming businesses 
              through cutting-edge technology solutions and exceptional service delivery.
            </p>
          </motion.div>
        </div>
      </section>

      <CompanyStory />
      <Values />
      <Timeline />
      <Team />
    </div>
  );
};

export default About;
