// src/components/about/Achievements.jsx
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import achievementsData from "@/data/achievementsData";

// Component for a single initiative card
const InitiativeCard = ({ program }) => (
  <motion.div
    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className="relative h-48 w-full">
      <Image
        src={program.image}
        alt={program.title}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 flex items-center mb-2">
        <span className="text-3xl mr-2">{program.icon}</span> {program.title}
      </h3>
      <p className="text-sm text-blue-600 font-medium">{program.category}</p>
      <p className="text-gray-700 mt-3 text-sm">{program.description}</p>
      <div className="mt-4 border-t border-gray-200 pt-4">
        <p className="font-semibold text-gray-800">Impact:</p>
        <p className="text-sm text-gray-600 italic">{program.impact}</p>
      </div>
    </div>
  </motion.div>
);

// Component for a single metric card
const MetricCard = ({ stat }) => (
  <motion.div
    className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-2xl transition-shadow duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-3xl font-bold text-blue-600">{stat.value}</h3>
    <p className="text-lg font-semibold text-gray-800">{stat.metric}</p>
    <p className="text-sm text-gray-500">{stat.description}</p>
  </motion.div>
);

// Main Achievements Component
export default function Achievements() {
  const {
    keyInitiatives,
    infrastructureDevelopment,
    communityPrograms,
    recognitions,
    keyMetrics,
  } = achievementsData;

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="space-y-16">
      {/* Key Initiatives Section */}
      <motion.section
        className="bg-gray-100 p-6 md:p-12 rounded-xl shadow-lg"
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
          {keyInitiatives.title}
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          {keyInitiatives.description}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {keyInitiatives.programs.map((program) => (
            <InitiativeCard key={program.id} program={program} />
          ))}
        </div>
      </motion.section>

      {/* Infrastructure Development Section */}
      <motion.section variants={sectionVariants}>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
          {infrastructureDevelopment.title}
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          {infrastructureDevelopment.description}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {infrastructureDevelopment.projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
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
            </div>
          ))}
        </div>
      </motion.section>

      {/* Community Programs Section */}
      <motion.section
        className="bg-blue-50 p-6 md:p-12 rounded-xl shadow-lg"
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-4">
          {communityPrograms.title}
        </h2>
        <p className="text-center text-blue-700 max-w-2xl mx-auto mb-8">
          {communityPrograms.description}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityPrograms.programs.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
            >
              <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4">
                <Image
                  src={program.image}
                  alt={program.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                {program.title}
              </h3>
              <p className="text-sm text-gray-600 font-medium mb-4">
                {program.category}
              </p>
              <p className="text-gray-700 text-sm mt-auto">{program.impact}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Awards & Recognition Section */}
      <motion.section variants={sectionVariants}>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
          {recognitions.title}
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          {recognitions.description}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recognitions.awards.map((award) => (
            <div
              key={award.id}
              className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-4"
            >
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src={award.image}
                  alt={award.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {award.title}
                </h3>
                <p className="text-sm text-gray-600 font-medium">
                  {award.awardingBody} ({award.year})
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Key Metrics Section */}
      <motion.section
        className="bg-gray-100 p-6 md:p-12 rounded-xl shadow-lg"
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
          {keyMetrics.title}
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          {keyMetrics.description}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {keyMetrics.statistics.map((stat, index) => (
            <MetricCard key={index} stat={stat} />
          ))}
        </div>
      </motion.section>
    </div>
  );
}
