import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiHeart } from 'react-icons/fi';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Vision = () => {
  const { ref, isInView } = useScrollAnimation();

  const cards = [
    {
      icon: FiEye,
      title: 'Our Vision',
      description: 'To be the leading technology partner that transforms businesses through innovative digital solutions and exceptional service delivery.'
    },
    {
      icon: FiTarget,
      title: 'Our Mission',
      description: 'Empowering organizations with cutting-edge technology solutions that drive growth, efficiency, and competitive advantage in the digital age.'
    },
    {
      icon: FiHeart,
      title: 'Our Values',
      description: 'Innovation, integrity, excellence, and client success form the foundation of everything we do at PYP Technology.'
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
            Driving Innovation Forward
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            At PYP Technology, we believe in the power of technology to transform businesses and create meaningful impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg mb-6 mx-auto">
                <card.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                {card.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
