import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiUsers, FiZap, FiShield } from 'react-icons/fi';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Values = () => {
  const { ref, isInView } = useScrollAnimation();

  const values = [
    {
      icon: FiTarget,
      title: 'Excellence',
      description: 'We strive for perfection in every project, delivering solutions that exceed expectations.'
    },
    {
      icon: FiUsers,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and close partnership with our clients.'
    },
    {
      icon: FiZap,
      title: 'Innovation',
      description: 'We embrace new technologies and creative approaches to solve complex challenges.'
    },
    {
      icon: FiShield,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical standards.'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            These principles guide our decisions and shape our company culture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                <value.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
