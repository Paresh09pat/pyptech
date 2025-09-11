import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiClock, FiBriefcase, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const JobCard = ({ job, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {job.title}
            </h3>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center">
                <FiBriefcase className="mr-2" />
                {job.department}
              </div>
              <div className="flex items-center">
                <FiMapPin className="mr-2" />
                {job.location}
              </div>
              <div className="flex items-center">
                <FiClock className="mr-2" />
                {job.type}
              </div>
              <div className="flex items-center">
                <span className="mr-2">🎯</span>
                {job.experience}
              </div>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Apply Now
          </motion.button>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {job.description}
        </p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
        >
          {isExpanded ? 'Show Less' : 'Show More'}
          {isExpanded ? <FiChevronUp className="ml-1" /> : <FiChevronDown className="ml-1" />}
        </button>

        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0 }}
          className="overflow-hidden"
        >
          <div className="pt-6 space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Requirements:
              </h4>
              <ul className="space-y-2">
                {job.requirements.map((req, index) => (
                  <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Responsibilities:
              </h4>
              <ul className="space-y-2">
                {job.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default JobCard;
