// src/components/about/aboutStructure/legislativeArmSection.js
import React from "react";
import { motion } from "framer-motion";
import { Scale } from "lucide-react";
import PositionCard from "./positionCard";

const LegislativeArmSection = ({ legislativeArm }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
        {legislativeArm.title}
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        {legislativeArm.description}
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {legislativeArm.positions.map((position) => (
          <PositionCard
            key={position.id}
            position={position}
            icon={<Scale />}
            titleColor="text-red-500"
          />
        ))}
      </div>
    </motion.section>
  );
};

export default LegislativeArmSection;
