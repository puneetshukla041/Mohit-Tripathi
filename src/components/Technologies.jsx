import React from 'react';
import { motion } from "framer-motion";

const certifications = [
  {
    name: "SSI Mantra Robotic Surgery System",
    issuer: "SS Innovations International, Inc.",
    issued: "Feb 2024",
    expires: "Feb 2027",
    credentialId: "7050004T010",
    link: "#",
    logo: "/logos/ssi.jpeg",
  },
  {
    name: "MOP - PSA Oxygen Plant- PM CARES (TATA & DRDO)",
    issuer: "Tata Advanced Systems Limited",
    issued: "Aug 2021",
    expires: null,
    credentialId: null,
    link: "#",
    logo: "/logos/tata-logo.jpeg",
  },
  {
    name: "Basic Hematology Technical Training - SGST1",
    issuer: "Sysmex Europe",
    issued: "Mar 2021",
    expires: null,
    credentialId: "Chqnho4DGM",
    link: "#",
    logo: "/logos/sysmex-logo.jpeg",
  },
  {
    name: "Covid-19 : Awareness & Prevention",
    issuer: "India Against Covid",
    issued: "Apr 2020",
    expires: null,
    credentialId: "XFAS8W - CE000030",
    link: "#",
    logo: "/logos/india-against-covid-logo.jpeg",
  },
  {
    name: "Health Emergencies Programme",
    issuer: "World Health Organization",
    issued: "Apr 2020",
    expires: null,
    credentialId: "Not Applicable",
    link: "#",
    logo: "/logos/who-logo.jpeg",
  },
  {
    name: "nCovid-19 awareness & Prevention Programme",
    issuer: "Apollo MedSkills Limited",
    issued: "Apr 2020",
    expires: null,
    credentialId: "AMS1012025",
    link: "#",
    logo: "/logos/apollo-medskills-logo.jpeg",
  },
  {
    name: "Multifiltrate Machine (CRRT)",
    issuer: "Fresenius Medical Care",
    issued: "May 2013",
    expires: "May 2030",
    credentialId: "FMC0147",
    link: null,
    logo: "/logos/fresenius-logo.jpeg",
  },
  {
    name: "4008S NG Dialysis Machine",
    issuer: "Fresenius Medical Care",
    issued: "Jul 2012",
    expires: "Aug 2030",
    credentialId: "FMC02257",
    link: null,
    logo: "/logos/fresenius-logo.jpeg",
  },
  {
    name: "Blue Driver Analyzer",
    issuer: "Anand Brothers",
    issued: "Sep 2015",
    expires: "Sep 2025",
    credentialId: "AB002518",
    link: null,
    logo: "/logos/anand-brothers-logo.jpeg",
  },
  {
    name: "Mini Vidas & Vidas",
    issuer: "bioMérieux",
    issued: "Jul 2023",
    expires: "Jul 2025",
    credentialId: "NA",
    link: "#",
    logo: "/logos/biomerieux-logo.jpeg",
  },
];

// Container for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger each child's animation
    },
  },
};

// Variants for each certification card
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Certifications = () => {
  return (
    <div className="pb-24 border-b border-neutral-800">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        className="my-20 text-4xl text-center"
      >
        Certifications 
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-6" // Increased gap for better spacing
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="group relative flex flex-col items-center p-6 border border-neutral-700 rounded-3xl w-56 h-64 overflow-hidden" // Increased size and added group for hover effects
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(15px)', // Increased blur for a stronger glass effect
              WebkitBackdropFilter: 'blur(15px)',
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0,255,255,0.2)" }} // Hover effect with shadow
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Pulsating background circle */}
            <motion.div
              className="absolute inset-0 bg-cyan-400 opacity-20 rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10 flex flex-col items-center text-center">
              {cert.logo && (
                <img
                  src={cert.logo}
                  alt={`${cert.issuer} logo`}
                  className="w-24 h-24 mb-4 rounded-full border-2 border-neutral-600 transition-all duration-300 group-hover:border-cyan-400"
                />
              )}
              <h3 className="text-md font-semibold text-white mb-1 transition-all duration-300 group-hover:text-cyan-400">{cert.name}</h3>
              <p className="text-sm text-neutral-400 mb-2">{cert.issuer}</p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Certifications;
