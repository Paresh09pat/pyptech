// ContactInfo component - empty for now
import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'info@pyptech.com',
      link: 'mailto:info@pyptech.com'
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      icon: FiMapPin,
      title: 'Address',
      value: 'Pune, Maharashtra, India',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiGithub, href: '#', label: 'GitHub' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Contact Information
      </h2>
      
      <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
        We'd love to hear from you. Get in touch with us for any inquiries about 
        our services, partnerships, or career opportunities.
      </p>
      
      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <motion.div
            key={detail.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center space-x-4"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
              <detail.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">
                {detail.title}
              </h3>
              <a
                href={detail.link}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {detail.value}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Follow Us
        </h3>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
