// src/components/about/aboutAchievements/keyMetricsSection.js
import React from "react";
import { motion } from "framer-motion";
import MetricCard from "./metricCard";

const KeyMetricsSection = ({ keyMetrics }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      className="bg-gray-100 p-6 md:p-12 rounded-xl shadow-lg"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
        {keyMetrics.title}
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        {keyMetrics.description}
      </p>
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6"
        variants={containerVariants}
      >
        {keyMetrics.statistics.map((stat, index) => (
          <MetricCard key={index} stat={stat} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default KeyMetricsSection;
