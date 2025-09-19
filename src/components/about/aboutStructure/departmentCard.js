// src/components/about/aboutStructure/departmentCard.js
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const DepartmentCard = ({ department }) => (
  <motion.div
    className="bg-gray-50 rounded-lg p-6 shadow-sm border-l-4 border-blue-500 flex flex-col transition-shadow duration-300 hover:shadow-lg"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-lg font-bold text-gray-800 mb-2">{department.name}</h3>
    <div className="flex items-center mb-4">
      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
        <Image
          src={department.image}
          alt={`${department.head} - Head of ${department.name}`}
          fill
          sizes="40px"
          className="object-cover"
          priority={false}
        />
      </div>
      <p className="text-sm text-gray-600 font-medium">
        Head: {department.head}
      </p>
    </div>
    <div className="mt-auto">
      <h4 className="text-sm font-semibold text-gray-700 mb-1">
        Core Functions:
      </h4>
      <ul className="text-xs text-gray-500 space-y-1">
        {department.functions.map((func, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <span>{func}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default DepartmentCard;
