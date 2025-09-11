import React from 'react';
import Hero from '../components/home/Hero';
import Vision from '../components/home/Vision';
import CompanyStats from '../components/home/CompanyStats';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Vision />
      <CompanyStats />
    </div>
  );
};

export default Home;
