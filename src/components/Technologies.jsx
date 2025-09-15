import React from 'react';
import { motion } from "framer-motion";

const certifications = [
  {
    name: "SSI Mantra Robotic Surgery System",
    issuer: "SS Innovations International, Inc.",
    issued: "Feb 2024",
    expires: "Feb 2027",
    credentialId: "7050004T010",
    description: "Training on the advanced SSI Mantra Robotic Surgery System for precision surgical procedures. Focus on system operation and maintenance.",
    logo: "/logos/ssi.jpeg",
  },
  {
    name: "MOP - PSA Oxygen Plant- PM CARES (TATA & DRDO)",
    issuer: "Tata Advanced Systems Limited",
    issued: "Aug 2021",
    expires: null,
    credentialId: null,
    description: "Expertise in the operation and maintenance of PSA Oxygen Plants, critical for providing medical-grade oxygen.",
    logo: "/logos/tata-logo.jpeg",
  },
  {
    name: "Basic Hematology Technical Training - SGST1",
    issuer: "Sysmex Europe",
    issued: "Mar 2021",
    expires: null,
    credentialId: "Chqnho4DGM",
    description: "Technical training on Sysmex hematology analyzers, covering basic principles, operation, and troubleshooting of blood cell counters.",
    logo: "/logos/sysmex-logo.jpeg",
  },
  {
    name: "Covid-19 : Awareness & Prevention",
    issuer: "India Against Covid",
    issued: "Apr 2020",
    expires: null,
    credentialId: "XFAS8W - CE000030",
    description: "Certification in Covid-19 awareness and prevention protocols, ensuring safety and compliance in public and medical settings.",
    logo: "/logos/india-against-covid-logo.jpeg",
  },
  {
    name: "Health Emergencies Programme",
    issuer: "World Health Organization",
    issued: "Apr 2020",
    expires: null,
    credentialId: "Not Applicable",
    description: "Training from WHO on preparing for and responding to global health emergencies and public health crises.",
    logo: "/logos/who-logo.jpeg",
  },
  {
    name: "nCovid-19 awareness & Prevention Programme",
    issuer: "Apollo MedSkills Limited",
    issued: "Apr 2020",
    expires: null,
    credentialId: "AMS1012025",
    description: "Program focused on the awareness and prevention of novel coronavirus, including hygiene and safety measures.",
    logo: "/logos/apollo-medskills-logo.jpeg",
  },
  {
    name: "Multifiltrate Machine (CRRT)",
    issuer: "Fresenius Medical Care",
    issued: "May 2013",
    expires: "May 2030",
    credentialId: "FMC0147",
    description: "Specialized training on the Multifiltrate machine for Continuous Renal Replacement Therapy (CRRT).",
    logo: "/logos/fresenius-logo.jpeg",
  },
  {
    name: "4008S NG Dialysis Machine",
    issuer: "Fresenius Medical Care",
    issued: "Jul 2012",
    expires: "Aug 2030",
    credentialId: "FMC02257",
    description: "Comprehensive training on the 4008S NG Dialysis Machine, including setup, operation, and maintenance for hemodialysis.",
    logo: "/logos/fresenius-logo.jpeg",
  },
  {
    name: "Blue Driver Analyzer",
    issuer: "Anand Brothers",
    issued: "Sep 2015",
    expires: "Sep 2025",
    credentialId: "AB002518",
    description: "Certified in the use of the Blue Driver Analyzer for efficient vehicle diagnostics and analysis.",
    logo: "/logos/anand-brothers-logo.jpeg",
  },
  {
    name: "Mini Vidas & Vidas",
    issuer: "bioMérieux",
    issued: "Jul 2023",
    expires: "Jul 2025",
    credentialId: "NA",
    description: "Technical proficiency with the Mini Vidas and Vidas immunoassay systems for rapid and accurate disease diagnosis.",
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
        className="flex flex-wrap items-stretch justify-center gap-6 p-4 sm:p-0" // Added padding for small screens and items-stretch to ensure equal height
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="group relative flex flex-col items-center p-6 border border-neutral-700 rounded-3xl w-full sm:w-64 md:w-72 lg:w-80 h-auto overflow-hidden text-center max-w-sm" // Adjusted widths for better responsiveness
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(15px)',
              WebkitBackdropFilter: 'blur(15px)',
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0,255,255,0.2)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Pulsating background circle */}
            <motion.div
              className="absolute inset-0 bg-cyan-400 opacity-20 rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Certification Content */}
            <div className="relative z-10 flex flex-col items-center">
              {cert.logo && (
                <img
                  src={cert.logo}
                  alt={`${cert.issuer} logo`}
                  className="w-24 h-24 mb-4 rounded-full border-2 border-neutral-600 transition-all duration-300 group-hover:border-cyan-400"
                />
              )}
              <h3 className="text-md font-semibold text-white mb-1 transition-all duration-300 group-hover:text-cyan-400">{cert.name}</h3>
              <p className="text-sm text-neutral-400 mb-2">{cert.issuer}</p>
              <p className="text-xs text-neutral-300 mt-2">{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Certifications;
