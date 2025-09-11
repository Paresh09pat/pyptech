import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiUsers, FiZap, FiTrendingUp } from 'react-icons/fi';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Culture = () => {
  const { ref, isInView } = useScrollAnimation();

  const culturePoints = [
    {
      icon: FiHeart,
      title: 'Work-Life Balance',
      description: 'We believe in maintaining a healthy balance between professional and personal life.'
    },
    {
      icon: FiUsers,
      title: 'Collaborative Environment',
      description: 'Work with talented individuals in a supportive and inclusive team environment.'
    },
    {
      icon: FiZap,
      title: 'Innovation Focus',
      description: 'Contribute to cutting-edge projects and explore new technologies regularly.'
    },
    {
      icon: FiTrendingUp,
      title: 'Career Growth',
      description: 'Continuous learning opportunities and clear paths for professional advancement.'
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
            Our Culture
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We foster an environment where creativity thrives and every team member can reach their full potential
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {culturePoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                <point.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {point.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Culture;
