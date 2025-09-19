// src/components/about/aboutAchievements/metricCard.js
import React from "react";
import { motion } from "framer-motion";

const MetricCard = ({ stat }) => (
  <motion.div
    className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-2xl transition-shadow duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-3xl font-bold text-blue-600">{stat.value}</h3>
    <p className="text-lg font-semibold text-gray-800">{stat.metric}</p>
    <p className="text-sm text-gray-500">{stat.description}</p>
  </motion.div>
);

export default MetricCard;
