// src/components/about/aboutAchievements/initiativeCard.js
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
        alt={`${program.title} - ${program.category}`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover"
        priority={false}
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

export default InitiativeCard;
