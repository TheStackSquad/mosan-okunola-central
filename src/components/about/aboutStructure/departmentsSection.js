// src/components/about/aboutStructure/departmentsSection.js
import React from "react";
import { motion } from "framer-motion";
import DepartmentCard from "./departmentCard";

const DepartmentsSection = ({ departments }) => {
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
        {departments.title}
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        {departments.description}
      </p>
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {departments.units.map((unit) => (
          <DepartmentCard key={unit.id} department={unit} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default DepartmentsSection;
