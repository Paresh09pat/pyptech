import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const CompanyStory = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                Founded in 2020, PYP Technology emerged from a simple yet powerful vision: 
                to bridge the gap between innovative technology and practical business solutions.
              </p>
              <p className="leading-relaxed">
                What started as a small team of passionate developers has grown into a 
                comprehensive technology partner for businesses across various industries. 
                We've successfully delivered over 100 projects, helping our clients achieve 
                their digital transformation goals.
              </p>
              <p className="leading-relaxed">
                Today, we continue to push boundaries, explore new technologies, and deliver 
                exceptional value to our clients worldwide. Our commitment to excellence and 
                innovation drives everything we do.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose PYP?</h3>
              <ul className="space-y-3">
                {[
                  'Expert team with 5+ years experience',
                  'Cutting-edge technology solutions',
                  'Client-focused approach',
                  '24/7 support and maintenance',
                  'Proven track record of success'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
