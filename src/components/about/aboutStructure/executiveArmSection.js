// src/components/about/aboutStructure/executiveArmSection.js
import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import PositionCard from "./positionCard";

const ExecutiveArmSection = ({ executiveArm }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
        {executiveArm.title}
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        {executiveArm.description}
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {executiveArm.positions.map((position) => (
          <PositionCard
            key={position.id}
            position={position}
            icon={<User />}
            titleColor="text-blue-500"
          />
        ))}
      </div>
    </motion.section>
  );
};

export default ExecutiveArmSection;
