import { FiCode, FiSmartphone, FiCloud, FiCpu, FiSettings, FiShield } from 'react-icons/fi';

export const servicesData = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks like React, Next.js, and Node.js',
    icon: FiCode,
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Secure'],
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android platforms',
    icon: FiSmartphone,
    features: ['Cross Platform', 'Native Performance', 'User Friendly', 'Scalable'],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin']
  },
  {
    id: 3,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for modern businesses',
    icon: FiCloud,
    features: ['Auto Scaling', 'High Availability', 'Cost Effective', 'Secure'],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker']
  },
  {
    id: 4,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by artificial intelligence and machine learning',
    icon: FiCpu,
    features: ['Predictive Analytics', 'Automation', 'Data Insights', 'Smart Algorithms'],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI']
  },
  {
    id: 5,
    title: 'DevOps & Automation',
    description: 'Streamlined development workflows and automated deployment pipelines',
    icon: FiSettings,
    features: ['CI/CD Pipeline', 'Infrastructure as Code', 'Monitoring', 'Automation'],
    technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Terraform']
  },
  {
    id: 6,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets',
    icon: FiShield,
    features: ['Threat Detection', 'Data Protection', 'Compliance', 'Security Audits'],
    technologies: ['Penetration Testing', 'Security Frameworks', 'Encryption', 'Monitoring']
  }
];
