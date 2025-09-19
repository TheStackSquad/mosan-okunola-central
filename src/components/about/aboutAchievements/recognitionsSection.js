// src/components/about/aboutAchievements/recognitionsSection.js
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const RecognitionsSection = ({ recognitions }) => {
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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
        {recognitions.title}
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        {recognitions.description}
      </p>
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {recognitions.awards.map((award) => (
          <motion.div
            key={award.id}
            className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-4"
            variants={cardVariants}
          >
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src={award.image}
                alt={`${award.title} award from ${award.awardingBody}`}
                fill
                sizes="64px"
                className="object-cover rounded-full"
                priority={false}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900">{award.title}</h3>
              <p className="text-sm text-gray-600 font-medium">
                {award.awardingBody} ({award.year})
              </p>
              <p className="text-xs text-gray-500 mt-2">{award.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default RecognitionsSection;
