// src/components/about/aboutOverview/serviceCategory.js
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from "@/animation/aboutAnimate";

const ServiceCategory = ({ name, icon, services }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    variants={fadeInUp}
  >
    <div className="flex items-center mb-4 text-2xl text-blue-600">
      <span className="mr-3">{icon}</span>
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
    </div>
    <ul className="list-disc list-inside space-y-1 text-gray-600">
      {services.map((service, index) => (
        <li key={index}>{service}</li>
      ))}
    </ul>
  </motion.div>
);

export default ServiceCategory;
