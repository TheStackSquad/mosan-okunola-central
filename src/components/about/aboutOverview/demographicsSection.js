// src/components/about/aboutOverview/demographicsSection.js
import React from "react";
import { motion } from "framer-motion";

const DemographicsSection = ({ basicInfo, demographics }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="grid md:grid-cols-2 gap-12"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
          Quick Facts
        </h3>
        <ul className="space-y-4 text-gray-700">
          <li>
            <span className="font-semibold">Established:</span>{" "}
            {basicInfo.established}
          </li>
          <li>
            <span className="font-semibold">Headquarters:</span>{" "}
            {basicInfo.headquarters}
          </li>
          <li>
            <span className="font-semibold">Parent LGA:</span>{" "}
            {basicInfo.parentLGA}
          </li>
          <li>
            <span className="font-semibold">Total Population:</span>{" "}
            {demographics.population.total}
          </li>
          <li>
            <span className="font-semibold">Growth Rate:</span>{" "}
            {demographics.population.growthRate}
          </li>
          <li>
            <span className="font-semibold">Key Communities:</span>{" "}
            {demographics.communities.join(", ")}
          </li>
        </ul>
      </div>
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
          Economic Profile
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-lg text-gray-800">
              Primary Sectors:
            </h4>
            <ul className="list-disc list-inside text-gray-700 mt-1">
              {demographics.economicProfile.primarySectors.map(
                (sector, index) => (
                  <li key={index}>{sector}</li>
                )
              )}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-gray-800">
              Major Markets:
            </h4>
            <ul className="list-disc list-inside text-gray-700 mt-1">
              {demographics.economicProfile.majorMarkets.map(
                (market, index) => (
                  <li key={index}>{market}</li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default DemographicsSection;