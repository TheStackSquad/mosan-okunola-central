// src/components/about/Biography.jsx
// import React from "react";
import Image from "next/image";
import bioData from "@/data/bioData";
import { motion } from "framer-motion";

// Component for a single timeline item
const TimelineItem = ({ year, position, achievement }) => (
  <div className="relative pl-8 sm:pl-16 group">
    <div className="flex flex-col sm:flex-row items-baseline">
      <div className="text-xl font-bold text-blue-600 mb-1 sm:mb-0 sm:mr-4">
        {year}
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-lg text-gray-900">{position}</h4>
        <p className="text-gray-600 text-sm italic">{achievement}</p>
      </div>
    </div>
    <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200 group-hover:bg-blue-500 transition-colors duration-300">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-600 border-2 border-white transition-all duration-300 group-hover:scale-125"></div>
    </div>
  </div>
);

// Main Biography Component
export default function Biography() {
  const { chairman } = bioData;

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-gray-100 p-8 md:p-12 rounded-xl shadow-lg">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
        Biography of the Executive Chairman
      </h2>

      {/* Chairman's Main Bio Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-16">
        <motion.div
          className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-white transform transition-transform duration-500 hover:scale-105"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={chairman.image}
            alt={`Hon. ${chairman.name}`}
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </motion.div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold text-gray-900">{chairman.name}</h3>
          <p className="text-lg text-blue-600 font-semibold">
            {chairman.title}
          </p>
          <p className="text-sm text-gray-500 italic mb-4">
            {chairman.nickname}
          </p>
          {chairman.fullBio.map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-gray-700 mb-4 leading-relaxed"
              variants={fadeIn}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>

      {/* Education & Values Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          variants={fadeIn}
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-green-200 pb-2">
            Educational Background
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {chairman.education.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          variants={fadeIn}
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-green-200 pb-2">
            Core Values & Principles
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {chairman.coreValues.map((value, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full text-center"
              >
                {value}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Political Journey Timeline */}
      <motion.section className="relative" variants={fadeIn}>
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Political Journey
        </h3>
        <div className="relative space-y-8">
          {chairman.politicalJourney.map((event, index) => (
            <TimelineItem key={index} {...event} />
          ))}
        </div>
      </motion.section>
    </div>
  );
}
