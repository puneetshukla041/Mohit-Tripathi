import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const EXPERIENCES = [
  // ... (Your EXPERIENCES array remains the same)
  {
 year: 'Dec 2023 - Aug 2025',
 role: 'Regional Service Manager - India & International',
 company: 'SS Innovations',
 description:
 'Spearheaded the development and implementation of advanced technical solutions for the regional service division. This role demanded a proactive, confident, and strategic approach to complex problem-solving and fostered a highly collaborative work environment.',
 technologies: [
 'Technical Support',
 'Engineering',
 'Medical Devices',
 'Field Service',
 'Process Improvement',
 'Troubleshooting',
 'Biomedical Devices',
 'Customer Service',
 'Training',
 ],
 logo: '/logos/ssi.jpeg',
 },
 {
 year: 'Jan 2021 - Dec 2023',
 role: 'Service Manager - India',
 company: 'GKS Healthsol LLP',
 description:
 'Managed all technical and project execution for major clients including TATA, TATA Trust, DRDO, PM CARES, and global partners like PATH, USAID, and Jhpiego. Responsible for ensuring high levels of customer satisfaction, developing innovative service strategies, and providing comprehensive support for installations and maintenance nationwide.',
 technologies: [
 'Client-focused',
 'Business Strategy',
 'Client Coordination',
 'Strategy',
 'Public Relations',
 'Client Relations',
 'Client Services',
 'Field Service',
 'Customer Satisfaction',
 'Communication',
 'Customer Service Management',
 'Continuous Improvement',
 ],
 logo: '/logos/gks.jpeg',
 },
 {
 year: 'Aug 2018 - Jan 2021',
 role: 'Zonal Manager - BME - U.P. India',
 company: 'Cyrix Healthcare Private Limited',
 description:
 'Served as Zonal Manager for the Biomedical Engineering Department under the "National Health Mission-NHM" program. Primary responsibilities included the repair, service, and maintenance of biomedical equipment throughout the Uttar Pradesh region.',
 technologies: ['National Health Mission', 'Biomedical Engineering', 'Maintenance', 'Repair', 'Program Management'],
 logo: '/logos/cyrix.jpeg',
 },
 {
 year: 'Apr 2017 - Jun 2018',
 role: 'Assistant Manager - Bio Medical Engineering',
 company: 'Jaipur Golden Hospital',
 description: 'Managed the biomedical engineering department, ensuring the operational readiness and maintenance of critical hospital equipment.',
 technologies: ['Bio Medical Engineering'],
 logo: '/logos/jaipur.jpeg',
 },
 {
 year: 'Feb 2015 - Nov 2016',
 role: 'Senior Bio Medical Engineer',
 company: 'Indraprastha Apollo Hospitals, New Delhi',
 description: 'Employed by Faber Sindoori Payroll (FSMS Group), responsible for advanced biomedical engineering duties, including maintenance and technical support for a wide range of medical devices.',
 technologies: ['Biomedical Engineering', 'Hospital Management'],
 logo: '/logos/apollo.jpeg',
 },
 {
 year: 'May 2012 - Dec 2014',
 role: 'Field Service Engineer',
 company: 'Fresenius Medical Care Asia-Pacific',
 description:
 'Managed a full scope of field service activities, including the installation, breakdown support, and preventative maintenance services (PMS). Also handled spare parts management, technical training, and documentation while overseeing AMC/CMC renewal processes.',
 technologies: ['Field Service', 'Installation', 'Maintenance', 'Training', 'Documentation'],
 logo: '/logos/fresenius.jpeg',
 },
 {
 year: 'Oct 2011 - Apr 2012',
 role: 'Trainee Biomedical Engineer',
 company: 'Apollo Excelcare Hospital',
 description:
 'Gained valuable hands-on experience as a trainee on the payroll of Channel Biomed. Focused on the maintenance, documentation, and installation of medical equipment, and worked to coordinate with customers and OEMs to ensure maximum equipment uptime.',
 technologies: ['Trainee', 'Biomedical Engineering', 'Maintenance', 'Customer Coordination'],
 logo: '/logos/excelcare.jpeg',
 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Wait for 500ms before rendering content

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pb-24 border-b border-neutral-800">
      <motion.h2
        className="my-20 text-4xl text-center text-white font-bold tracking-tight md:text-5xl"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        My Journey
      </motion.h2>

      {isVisible && (
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              className="mb-24 flex flex-col md:flex-row md:items-start md:space-x-8 lg:justify-center"
              variants={itemVariants}
            >
              <motion.div className="w-full mb-4 flex flex-col items-center md:items-end md:w-1/4 md:mb-0">
                <p className="text-sm md:text-base text-neutral-400 font-medium md:text-right">
                  {experience.year}
                </p>
                {experience.logo && (
                  <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="mt-4 h-16 w-16 object-contain rounded-full border border-neutral-700 p-1"
                  />
                )}
              </motion.div>
              <motion.div className="w-full max-w-xl md:w-3/4">
                <h6 className="mb-2 font-semibold text-lg text-white">
                  {experience.role}
                  <span className="text-sm font-light text-purple-200 block md:inline md:ml-2 mt-1">
                    - {experience.company}
                  </span>
                </h6>
                {experience.description && (
                  <p className="mb-4 text-justify text-neutral-400">
                    {experience.description}
                  </p>
                )}
                <div className="flex flex-wrap">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 mt-2 mr-2 text-sm font-medium text-purple-100 rounded-lg bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

// Main App component to display the Experience section.
const App = () => {
  return (
    <div className="text-white font-sans antialiased min-h-screen">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <Experience />
      </div>
      <footer className="text-center text-xs text-neutral-500 py-4">
        &copy;
      </footer>
    </div>
  );
};

export default App;