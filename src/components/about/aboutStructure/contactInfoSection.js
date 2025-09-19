// src/components/about/aboutStructure/contactInfoSection.js
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Mail, PhoneCall } from "lucide-react";

const ContactInfoSection = ({ contactInfo }) => {
  return (
    <motion.section
      className="bg-blue-50 p-6 md:p-12 rounded-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-8">
        Contact Information
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Headquarters
          </h3>
          <div className="space-y-2 text-gray-700">
            <p className="flex items-center">
              <Briefcase
                className="mr-3 text-blue-500 flex-shrink-0"
                size={18}
              />
              <span>{contactInfo.headquarters.name}</span>
            </p>
            <p className="flex items-center">
              <Mail className="mr-3 text-blue-500 flex-shrink-0" size={18} />
              <a
                href={`mailto:${contactInfo.headquarters.email}`}
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                {contactInfo.headquarters.email}
              </a>
            </p>
            <p className="flex items-center">
              <PhoneCall
                className="mr-3 text-blue-500 flex-shrink-0"
                size={18}
              />
              <a
                href={`tel:${contactInfo.headquarters.phone}`}
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                {contactInfo.headquarters.phone}
              </a>
            </p>
            <p className="flex items-center">
              <Briefcase
                className="mr-3 text-blue-500 flex-shrink-0"
                size={18}
              />
              <span>{contactInfo.headquarters.workingHours}</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Emergency Contacts
          </h3>
          <div className="space-y-2 text-gray-700">
            {contactInfo.emergencyContacts.map((contact, index) => (
              <p key={index} className="flex items-center">
                <PhoneCall
                  className="mr-3 text-red-500 flex-shrink-0"
                  size={18}
                />
                <span className="font-semibold">{contact.service}:</span>
                <a
                  href={`tel:${contact.number}`}
                  className="ml-2 text-red-600 hover:text-red-800 transition-colors"
                >
                  {contact.number}
                </a>
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactInfoSection;
