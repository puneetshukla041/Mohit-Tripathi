




import React from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react"; // Import a suitable arrow icon

const EXPERIENCES = [
  {
    year: "Dec 2023 - Aug 2025",
    role: "Regional Service Manager - India & International",
    company: "SS Innovations",
    description:
      "Spearheaded the development and implementation of advanced technical solutions for the regional service division. This role demanded a proactive, confident, and strategic approach to complex problem-solving and fostered a highly collaborative work environment.",
    technologies: [
      "Technical Support",
      "Engineering",
      "Medical Devices",
      "Field Service",
      "Process Improvement",
      "Troubleshooting",
      "Biomedical Devices",
      "Customer Service",
      "Training",
    ],
    logo: "/logos/ssi.jpeg",
  },
  {
    year: "Jan 2021 - Dec 2023",
    role: "Service Manager - India",
    company: "GKS Healthsol LLP",
    description:
      "Managed all technical and project execution for major clients including TATA, TATA Trust, DRDO, PM CARES, and global partners like PATH, USAID, and Jhpiego. Responsible for ensuring high levels of customer satisfaction, developing innovative service strategies, and providing comprehensive support for installations and maintenance nationwide.",
    technologies: [
      "Client-focused",
      "Business Strategy",
      "Client Coordination",
      "Strategy",
      "Public Relations",
      "Client Relations",
      "Client Services",
      "Field Service",
      "Customer Satisfaction",
      "Communication",
      "Customer Service Management",
      "Continuous Improvement",
    ],
    logo: "/logos/gks.jpeg",
  },
    {
    year: "Apr 2017 - Jun 2018",
    role: "Assistant Manager - Bio Medical Engineering",
    company: "Jaipur Golden Hospital",
    description:
      "Managed the biomedical engineering department, ensuring the operational readiness and maintenance of critical hospital equipment.",
    technologies: ["Bio Medical Engineering"],
    logo: "/logos/jaipur.jpeg",
  },
    {
    year: "Feb 2015 - Nov 2016",
    role: "Senior Bio Medical Engineer",
    company: "Indraprastha Apollo Hospitals, New Delhi",
    description:
      "Employed by Faber Sindoori Payroll (FSMS Group), responsible for advanced biomedical engineering duties, including maintenance and technical support for a wide range of medical devices.",
    technologies: ["Biomedical Engineering", "Hospital Management"],
    logo: "/logos/apollo.jpeg",
  },
  {
    year: "May 2012 - Dec 2014",
    role: "Field Service Engineer",
    company: "Fresenius Medical Care Asia-Pacific",
    description:
      "Managed a full scope of field service activities, including the installation, breakdown support, and preventative maintenance services (PMS). Also handled spare parts management, technical training, and documentation while overseeing AMC/CMC renewal processes.",
    technologies: [
      "Field Service",
      "Installation",
      "Maintenance",
      "Training",
      "Documentation",
    ],
    logo: "/logos/fresenius.jpeg",
  },
  
  // ... rest of experiences unchanged
];

// Animation variants
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
      ease: "easeOut",
    },
  },
};

const arrowVariants = {
  animate: {
    y: [0, -10, 0], // Move up and down
    opacity: [0.5, 1, 0.5], // Pulse opacity
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const AnimatedArrow = () => (
  <motion.div
    className="w-full flex justify-center py-8"
    variants={arrowVariants}
    animate="animate"
    transition={{ duration: 1.5, repeat: Infinity }}
  >
    <ArrowUp size={32} className="text-white" />
  </motion.div>
);

const Experience = () => {
  return (
    <div className="relative pb-24 border-b border-neutral-800 overflow-x-hidden">
      {/* Mobile-only curved fade background */}
      <div className="absolute inset-0 block md:hidden">
        <div className="w-full h-full bg-gradient-to-b from-black via-neutral-900 to-black rounded-b-[100px]" />
      </div>

      {/* Content */}
      <motion.h2
        className="relative z-10 my-20 text-4xl text-center text-white font-bold tracking-tight md:text-5xl"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        My Journey
      </motion.h2>

      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {EXPERIENCES.map((experience, index) => (
          <React.Fragment key={index}>
            <motion.div
              className="mb-24 flex flex-col md:flex-row md:items-start md:space-x-8 lg:justify-center"
              variants={itemVariants}
            >
              {/* Left Side */}
              <motion.div className="w-full mb-4 flex flex-col items-start md:items-end md:w-1/4 md:mb-0">
                {experience.logo && (
                  <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="mt-4 h-16 w-16 object-contain rounded-full border border-neutral-700 p-1"
                  />
                )}
              </motion.div>

              {/* Right Side */}
              <motion.div className="w-full max-w-xl md:w-3/4">
                <h6 className="mb-2 font-semibold text-lg text-white">
                  {experience.role}
                  <span className="text-sm font-light text-purple-200 block md:inline md:ml-2 mt-1">
                    - {experience.company}
                  </span>
                </h6>
                {experience.description && (
                  <p className="mb-4 text-justify text-white">
                    {experience.description}
                  </p>
                )}
                <div className="flex flex-wrap">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 mt-2 mr-2 text-sm font-medium text-white rounded-lg bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            {/* Add animated arrow between items, but not after the last one */}
            {index < EXPERIENCES.length - 1 && <AnimatedArrow />}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

const App = () => {
  return (
    <div className="text-white font-sans antialiased min-h-screen">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <Experience />
      </div>
      <footer className="text-center text-xs text-neutral-500 py-4">&copy;</footer>
    </div>
  );
};

export default App;
