import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiCode, FiAward, FiGlobe } from 'react-icons/fi';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const CompanyStats = () => {
  const { ref, isInView } = useScrollAnimation();

  const stats = [
    { icon: FiUsers, value: '50+', label: 'Happy Clients', color: 'text-blue-600' },
    { icon: FiCode, value: '100+', label: 'Projects Completed', color: 'text-green-600' },
    { icon: FiAward, value: '15+', label: 'Awards Won', color: 'text-yellow-600' },
    { icon: FiGlobe, value: '10+', label: 'Countries Served', color: 'text-purple-600' }
  ];

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Delivering excellence across the globe
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4 ${stat.color}`}>
                <stat.icon size={32} />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                className="text-4xl font-bold text-gray-900 dark:text-white mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;
