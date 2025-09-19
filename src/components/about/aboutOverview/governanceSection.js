// src/components/about/aboutOverview/governanceSection.js
import React from "react";
import { motion } from "framer-motion";
import GovernancePrinciple from "./governancePrinciple";

const GovernanceSection = ({ governance }) => {
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
      className="bg-gray-100 p-8 rounded-xl shadow-lg"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Governance
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">
            Current Administration
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li>
              <span className="font-semibold">Chairman:</span>{" "}
              {governance.currentAdministration.chairman}
            </li>
            <li>
              <span className="font-semibold">Vice Chairman:</span>{" "}
              {governance.currentAdministration.viceChairman}
            </li>
            <li>
              <span className="font-semibold">Tenure:</span>{" "}
              {governance.currentAdministration.tenure}
            </li>
            <li>
              <span className="font-semibold">Party:</span>{" "}
              {governance.currentAdministration.party}
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">
            Our Guiding Principles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {governance.governancePhilosophy.principles.map(
              (principle, index) => (
                <GovernancePrinciple key={index} {...principle} />
              )
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default GovernanceSection;
