// src/components/about/aboutOverview/contactSection.js
import React from "react";
import { motion } from "framer-motion";

const ContactSection = ({ contact }) => {
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
      className="bg-gray-100 p-8 rounded-xl shadow-lg"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
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
            <h4 className="font-semibold text-lg text-gray-800">Follow Us:</h4>
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
  );
};

export default ContactSection;
