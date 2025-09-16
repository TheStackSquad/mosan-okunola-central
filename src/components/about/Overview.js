// src/components/about/Overview.jsx
import React from 'react';
import overviewData from '@/data/overviewData';
import {
  fadeInLeft,
  fadeInUp,
  staggerContainer,
  scaleIn,
  //staggerItem,
} from "@/animation/aboutAnimate";
import { motion } from 'framer-motion';

// Component for a single service category
const ServiceCategory = ({ name, icon, services }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    variants={fadeInUp}
  >
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4 text-2xl text-blue-600">
        <span className="mr-3">{icon}</span>
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      </div>
      <ul className="list-disc list-inside space-y-1 text-gray-600">
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  </motion.div>
);

// Component for a single governance principle
const GovernancePrinciple = ({ letter, word, description }) => (
  <motion.li
    className="flex items-start"
    variants={fadeInLeft} // Apply fadeInLeft here
  >
    <li className="flex items-start">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg mr-4">
        {letter}
      </div>
      <div>
        <h4 className="font-semibold text-lg text-gray-900">{word}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </li>
  </motion.li>
);

// Main Overview Component
export default function Overview() {
  const { basicInfo, introduction, demographics, governance, keyServices, contact } = overviewData;

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="space-y-16">
      {/* Introduction Section */}
      <motion.section
        className="text-center"
        variants={staggerContainer} // Use staggerContainer for the parent
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-2"
          variants={fadeInUp} // Apply fadeInUp to the title
        >
          {introduction.title}
        </motion.h2>
        <motion.p
          className="text-lg text-blue-600 font-medium mb-6"
          variants={fadeInUp} // Apply fadeInUp to the subtitle
        >
          {introduction.subtitle}
        </motion.p>
        <motion.p
          className="text-gray-700 max-w-3xl mx-auto"
          variants={fadeInUp} // Apply fadeInUp to the description
        >
          {introduction.description}
        </motion.p>

        {/* Mission and Vision Boxes */}
        <motion.div
          className="mt-8 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={staggerContainer} // A nested stagger container for the boxes
        >
          <motion.div
            className="p-6 bg-blue-50 rounded-lg shadow-inner"
            variants={scaleIn} // Apply scaleIn to the first box
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-700">{introduction.missionStatement}</p>
          </motion.div>
          <motion.div
            className="p-6 bg-green-50 rounded-lg shadow-inner"
            variants={scaleIn} // Apply scaleIn to the second box
          >
            <h3 className="text-2xl font-semibold text-green-700 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-700">{introduction.visionStatement}</p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Demographics and Basic Info Section */}
      <motion.section
        className="grid md:grid-cols-2 gap-12"
        variants={sectionVariants}
      >
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
            Quick Facts
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li>
              <span className="font-semibold">Established:</span>{" "}
              {basicInfo.established}
            </li>
            <li>
              <span className="font-semibold">Headquarters:</span>{" "}
              {basicInfo.headquarters}
            </li>
            <li>
              <span className="font-semibold">Parent LGA:</span>{" "}
              {basicInfo.parentLGA}
            </li>
            <li>
              <span className="font-semibold">Total Population:</span>{" "}
              {demographics.population.total}
            </li>
            <li>
              <span className="font-semibold">Growth Rate:</span>{" "}
              {demographics.population.growthRate}
            </li>
            <li>
              <span className="font-semibold">Key Communities:</span>{" "}
              {demographics.communities.join(", ")}
            </li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
            Economic Profile
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg text-gray-800">
                Primary Sectors:
              </h4>
              <ul className="list-disc list-inside text-gray-700 mt-1">
                {demographics.economicProfile.primarySectors.map(
                  (sector, index) => (
                    <li key={index}>{sector}</li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800">
                Major Markets:
              </h4>
              <ul className="list-disc list-inside text-gray-700 mt-1">
                {demographics.economicProfile.majorMarkets.map(
                  (market, index) => (
                    <li key={index}>{market}</li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Governance Section */}
      <motion.section
        className="bg-gray-100 p-8 rounded-xl shadow-lg"
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Governance
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">
              Current Administration
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                <span className="font-semibold">Chairman:</span>{" "}
                {governance.currentAdministration.chairman}
              </li>
              <li>
                <span className="font-semibold">Vice Chairman:</span>{" "}
                {governance.currentAdministration.viceChairman}
              </li>
              <li>
                <span className="font-semibold">Tenure:</span>{" "}
                {governance.currentAdministration.tenure}
              </li>
              <li>
                <span className="font-semibold">Party:</span>{" "}
                {governance.currentAdministration.party}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">
              Our Guiding Principles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {governance.governancePhilosophy.principles.map(
                (principle, index) => (
                  <GovernancePrinciple key={index} {...principle} />
                )
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Key Services Section */}
      <motion.section variants={sectionVariants}>
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          {keyServices.title}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyServices.categories.map((category, index) => (
            <ServiceCategory key={index} {...category} />
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="bg-gray-100 p-8 rounded-xl shadow-lg"
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Contact Us
        </h2>
        <div className="grid md:grid-cols-2 gap-12 text-gray-700">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">
              Office Information
            </h3>
            <ul className="space-y-3">
              <li>
                <span className="font-semibold">Address:</span>{" "}
                {contact.office.address}
              </li>
              <li>
                <span className="font-semibold">Phone:</span>{" "}
                {contact.office.phone}
              </li>
              <li>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href={`mailto:${contact.office.email}`}
                  className="text-blue-600 hover:underline"
                >
                  {contact.office.email}
                </a>
              </li>
              <li>
                <span className="font-semibold">Website:</span>{" "}
                <a
                  href={`http://${contact.office.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {contact.office.website}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">
              Operating Hours & Social Media
            </h3>
            <ul className="space-y-3">
              <li>
                <span className="font-semibold">Operating Hours:</span>{" "}
                {contact.operatingHours.weekdays}
              </li>
              <li>
                <span className="font-semibold">Public Holidays:</span>{" "}
                {contact.operatingHours.publicHolidays}
              </li>
              <li>
                <span className="font-semibold">Emergency:</span>{" "}
                {contact.operatingHours.emergencyContact}
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold text-lg text-gray-800">
                Follow Us:
              </h4>
              <div className="flex space-x-4 mt-2">
                <a
                  href={`https://facebook.com/${contact.socialMedia.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  <span className="font-bold">Facebook</span>
                </a>
                <a
                  href={`https://twitter.com/${contact.socialMedia.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 transition-colors duration-200"
                >
                  <span className="font-bold">Twitter</span>
                </a>
                <a
                  href={`https://instagram.com/${contact.socialMedia.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-700 transition-colors duration-200"
                >
                  <span className="font-bold">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}