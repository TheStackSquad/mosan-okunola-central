// src/components/about/aboutAchievements/keyInitiativesSection.js
import React from "react";
import { motion } from "framer-motion";
import InitiativeCard from "./initiativeCard";

const KeyInitiativesSection = ({ keyInitiatives }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.section
      className="bg-gray-100 p-6 md:p-12 rounded-xl shadow-lg"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
        {keyInitiatives.title}
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        {keyInitiatives.description}
      </p>
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
      >
        {keyInitiatives.programs.map((program) => (
          <InitiativeCard key={program.id} program={program} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default KeyInitiativesSection;
