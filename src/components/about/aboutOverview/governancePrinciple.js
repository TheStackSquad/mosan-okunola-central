// src/components/about/aboutOverview/governancePrinciple.js
import React from "react";
import { motion } from "framer-motion";
import { fadeInLeft } from "@/animation/aboutAnimate";

const GovernancePrinciple = ({ letter, word, description }) => (
  <motion.div className="flex items-start" variants={fadeInLeft}>
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg mr-4">
      {letter}
    </div>
    <div>
      <h4 className="font-semibold text-lg text-gray-900">{word}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </motion.div>
);

export default GovernancePrinciple;
