import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -10 }}
      className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
    >
      <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg mb-6">
        <service.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {service.title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
        {service.description}
      </p>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
            Key Features:
          </h4>
          <ul className="space-y-1">
            {service.features.map((feature, index) => (
              <li key={index} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
            Technologies:
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
