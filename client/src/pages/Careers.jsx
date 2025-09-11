import React from 'react';
import { motion } from 'framer-motion';
import JobCard from '../components/careers/JobCard';
import Culture from '../components/careers/Culture';
import Benefits from '../components/careers/Benefits';
import { jobsData } from '../data/jobs';

const Careers = () => {
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
            <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Be part of an innovative team that's shaping the future of technology. 
              Grow your career with us and make a meaningful impact.
            </p>
          </motion.div>
        </div>
      </section>

      <Culture />
      <Benefits />

      {/* Open Positions */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Find your next opportunity with us
            </p>
          </motion.div>

          <div className="space-y-6">
            {jobsData.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
