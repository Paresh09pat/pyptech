import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectFilter from '../components/portfolio/ProjectFilter';
import ProjectGrid from '../components/portfolio/ProjectGrid';
import ProjectModal from '../components/portfolio/ProjectModal';
import { projectsData } from '../data/projects';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Web', 'Mobile', 'AI', 'Cloud'];

  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

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
            <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Showcasing our successful projects and the innovative solutions 
              we've delivered for clients across various industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter and Projects */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <ProjectGrid
            projects={filteredProjects}
            onProjectClick={setSelectedProject}
          />
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Portfolio;
