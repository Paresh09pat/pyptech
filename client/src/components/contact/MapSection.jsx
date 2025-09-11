import React from 'react';
import { motion } from 'framer-motion';

const MapSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Find Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Visit our office in Pune, Maharashtra
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg"
          style={{ height: '400px' }}
        >
          <div className="w-full h-full flex items-center justify-center text-gray-600 dark:text-gray-300">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
              <p>Google Maps integration would be implemented here</p>
              <p className="text-sm mt-2">Pune, Maharashtra, India</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
