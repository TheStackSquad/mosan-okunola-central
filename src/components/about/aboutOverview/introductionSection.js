// src/components/about/aboutOverview/introductionSection.js
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/animation/aboutAnimate";

const IntroductionSection = ({ introduction }) => {
  return (
    <motion.section
      className="text-center"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-2"
        variants={fadeInUp}
      >
        {introduction.title}
      </motion.h2>
      <motion.p
        className="text-lg text-blue-600 font-medium mb-6"
        variants={fadeInUp}
      >
        {introduction.subtitle}
      </motion.p>
      <motion.p className="text-gray-700 max-w-3xl mx-auto" variants={fadeInUp}>
        {introduction.description}
      </motion.p>

      {/* Mission and Vision Boxes */}
      <motion.div
        className="mt-8 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        variants={staggerContainer}
      >
        <motion.div
          className="p-6 bg-blue-50 rounded-lg shadow-inner"
          variants={scaleIn}
        >
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">
            Our Mission
          </h3>
          <p className="text-gray-700">{introduction.missionStatement}</p>
        </motion.div>
        <motion.div
          className="p-6 bg-green-50 rounded-lg shadow-inner"
          variants={scaleIn}
        >
          <h3 className="text-2xl font-semibold text-green-700 mb-2">
            Our Vision
          </h3>
          <p className="text-gray-700">{introduction.visionStatement}</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default IntroductionSection;
