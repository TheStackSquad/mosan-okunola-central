// src/components/about/aboutOverview/keyServicesSection.js
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/animation/aboutAnimate";
import ServiceCategory from "./serviceCategory";

const KeyServicesSection = ({ keyServices }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        {keyServices.title}
      </h2>
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {keyServices.categories.map((category, index) => (
          <ServiceCategory key={index} {...category} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default KeyServicesSection;
