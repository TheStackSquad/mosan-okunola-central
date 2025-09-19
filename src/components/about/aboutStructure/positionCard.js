// src/components/about/aboutStructure/positionCard.js
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PositionCard = ({ position, icon, titleColor }) => (
  <motion.div
    className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-gray-200">
      <Image
        src={position.image}
        alt={`${position.name} - ${position.title}`}
        fill
        sizes="96px"
        className="object-cover"
        priority={false}
      />
    </div>
    <div className={`text-3xl mb-2 ${titleColor}`}>{icon}</div>
    <h3 className="text-lg font-semibold text-gray-800">{position.title}</h3>
    <p className="text-gray-600 text-sm">{position.name}</p>
    <div className="w-full mt-4">
      <h4 className="text-sm font-bold text-gray-700 mb-2">
        Key Responsibilities:
      </h4>
      <ul className="text-xs text-gray-500 list-inside text-left">
        {position.responsibilities.map((res, index) => (
          <li key={index} className="flex items-start mb-1">
            <span className="text-blue-500 mr-2">•</span>
            <span>{res}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default PositionCard;
