// src/components/about/aboutAchievements/communityProgramsSection.js
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CommunityProgramsSection = ({ communityPrograms }) => {
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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="bg-blue-50 p-6 md:p-12 rounded-xl shadow-lg"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-4">
        {communityPrograms.title}
      </h2>
      <p className="text-center text-blue-700 max-w-2xl mx-auto mb-8">
        {communityPrograms.description}
      </p>
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {communityPrograms.programs.map((program) => (
          <motion.div
            key={program.id}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
            variants={cardVariants}
          >
            <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4">
              <Image
                src={program.image}
                alt={`${program.title} - ${program.category}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                priority={false}
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
            <p className="text-sm text-gray-600 font-medium mb-4">
              {program.category}
            </p>
            <p className="text-gray-700 text-sm mt-auto">{program.impact}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default CommunityProgramsSection;
