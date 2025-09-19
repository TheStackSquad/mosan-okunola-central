// src/components/about/aboutAchievements/infrastructureDevelopmentSection.js
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const InfrastructureDevelopmentSection = ({ infrastructureDevelopment }) => {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
        {infrastructureDevelopment.title}
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        {infrastructureDevelopment.description}
      </p>
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {infrastructureDevelopment.projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
            variants={cardVariants}
          >
            <div className="relative h-48 w-full">
              <Image
                src={project.image}
                alt={`${project.name} - ${project.type}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                priority={false}
              />
            </div>
            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {project.name}
              </h3>
              <p className="text-sm text-blue-600 font-medium">
                {project.type}
              </p>
              <ul className="mt-4 text-sm text-gray-700 list-inside space-y-1">
                <li>
                  <span className="font-semibold">Status:</span>{" "}
                  {project.status}
                </li>
                {project.length && (
                  <li>
                    <span className="font-semibold">Length:</span>{" "}
                    {project.length}
                  </li>
                )}
                {project.features && (
                  <li>
                    <span className="font-semibold">Features:</span>{" "}
                    {project.features}
                  </li>
                )}
                <li>
                  <span className="font-semibold">Cost:</span> {project.cost}
                </li>
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default InfrastructureDevelopmentSection;
