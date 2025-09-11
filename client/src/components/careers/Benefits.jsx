import React from 'react';
import { motion } from 'framer-motion';
import { FiDollarSign, FiHeart, FiBook, FiHome, FiCoffee, FiGift } from 'react-icons/fi';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Benefits = () => {
  const { ref, isInView } = useScrollAnimation();

  const benefits = [
    {
      icon: FiDollarSign,
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages'
    },
    {
      icon: FiHeart,
      title: 'Health Insurance',
      description: 'Comprehensive medical coverage for you and family'
    },
    {
      icon: FiBook,
      title: 'Learning Budget',
      description: 'Annual budget for courses, conferences, and certifications'
    },
    {
      icon: FiHome,
      title: 'Remote Work',
      description: 'Flexible work arrangements and remote options'
    },
    {
      icon: FiCoffee,
      title: 'Free Meals',
      description: 'Complimentary breakfast, lunch, and snacks'
    },
    {
      icon: FiGift,
      title: 'Performance Bonus',
      description: 'Quarterly and annual performance-based rewards'
    }
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
            Benefits & Perks
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We care about our team members and provide comprehensive benefits to support their well-being
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
                <benefit.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
