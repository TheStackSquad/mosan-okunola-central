// src/components/about/aboutStructure/organizationalChartSection.js
import React from "react";
import { motion } from "framer-motion";

const OrganizationalChartSection = ({ organizationalChart }) => {
  return (
    <motion.section
      className="bg-gray-100 p-6 md:p-12 rounded-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
        {organizationalChart.title}
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        A simplified view of the official hierarchy.
      </p>
      <div className="flex justify-center">
        <div className="relative border-l border-b border-gray-400 p-4 rounded-xl">
          <div className="absolute top-0 -left-px h-full w-px bg-gray-400"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gray-400"></div>

          {/* Level 1: Executive Chairman */}
          <motion.div
            className="bg-blue-600 text-white p-4 rounded-lg shadow-lg relative z-10 w-64 text-center mx-auto mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="font-semibold text-lg">
              {organizationalChart.hierarchy.level1.position}
            </h4>
            <p className="text-sm">
              {organizationalChart.hierarchy.level1.name}
            </p>
          </motion.div>

          {/* Lines down from Chairman */}
          <div className="flex justify-center -mt-8 mb-8">
            <div className="w-px h-8 bg-gray-400"></div>
          </div>

          {/* Level 2: Second Tier Leaders */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {organizationalChart.hierarchy.level2.map((leader, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-300 p-4 rounded-lg shadow-md text-center flex flex-col relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-px h-8 bg-gray-400"></div>
                <h4 className="font-semibold text-gray-800">
                  {leader.position}
                </h4>
                <p className="text-sm text-gray-600">{leader.name}</p>
              </motion.div>
            ))}
          </div>

          {/* Lines connecting to departments */}
          <div className="flex justify-center -mt-8">
            <div className="w-full h-px bg-gray-400"></div>
          </div>

          {/* Level 3: Departments */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {organizationalChart.hierarchy.level3.map((dept, index) => (
              <motion.div
                key={index}
                className="bg-green-100 text-green-800 p-3 rounded-lg text-sm text-center relative shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.05, duration: 0.5 }}
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-px h-4 bg-gray-400"></div>
                {dept}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default OrganizationalChartSection;
