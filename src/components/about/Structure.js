// src/components/about/Structure.js
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import structureData from "@/data/structureData";
import {
  User, // Replaces FaUserTie for a general user icon
  Scale, // Replaces FaGavel for justice/legislative theme
  Briefcase, // Replaces FaBriefcase
  Mail, // Replaces FaEnvelope
  PhoneCall, // Replaces FaPhone
} from "lucide-react";

// Component for a single position card
const PositionCard = ({ position, icon, titleColor }) => (
  <motion.div
    className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-gray-200">
      <Image
        src={position.image}
        alt={position.name}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className={`text-3xl mb-2 ${titleColor}`}>{icon}</div>
    <h3 className="text-lg font-semibold text-gray-800">{position.title}</h3>
    <p className="text-gray-600 text-sm">{position.name}</p>
    <div className="w-full mt-4">
      <h4 className="text-sm font-bold text-gray-700 mb-2">
        Key Responsibilities:
      </h4>
      <ul className="text-xs text-gray-500 list-inside text-left">
        {position.responsibilities.map((res, index) => (
          <li key={index} className="flex items-start mb-1">
            <span className="text-blue-500 mr-2">•</span>
            <span>{res}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

// Component for a single department card
const DepartmentCard = ({ department }) => (
  <motion.div
    className="bg-gray-50 rounded-lg p-6 shadow-sm border-l-4 border-blue-500 flex flex-col transition-shadow duration-300 hover:shadow-lg"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-lg font-bold text-gray-800 mb-2">{department.name}</h3>
    <div className="flex items-center mb-4">
      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
        <Image
          src={department.image}
          alt={department.head}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p className="text-sm text-gray-600 font-medium">
        Head: {department.head}
      </p>
    </div>
    <div className="mt-auto">
      <h4 className="text-sm font-semibold text-gray-700 mb-1">
        Core Functions:
      </h4>
      <ul className="text-xs text-gray-500 space-y-1">
        {department.functions.map((func, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <span>{func}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

// Main Structure Component
export default function Structure() {
  const {
    executiveArm,
    legislativeArm,
    departments,
    organizationalChart,
    contactInfo,
  } = structureData;

  return (
    <div className="space-y-16">
      {/* Executive Arm Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          {executiveArm.title}
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          {executiveArm.description}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {executiveArm.positions.map((position) => (
            <PositionCard
              key={position.id}
              position={position}
              icon={<User />}
              titleColor="text-blue-500"
            />
          ))}
        </div>
      </section>

      <hr className="border-t border-gray-200" />

      {/* Legislative Arm Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          {legislativeArm.title}
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          {legislativeArm.description}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {legislativeArm.positions.map((position) => (
            <PositionCard
              key={position.id}
              position={position}
              icon={<Scale />}
              titleColor="text-red-500"
            />
          ))}
        </div>
      </section>

      <hr className="border-t border-gray-200" />

      {/* Departments Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          {departments.title}
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          {departments.description}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.units.map((unit) => (
            <DepartmentCard key={unit.id} department={unit} />
          ))}
        </div>
      </section>

      <hr className="border-t border-gray-200" />

      {/* Organizational Chart Section */}
      <section className="bg-gray-100 p-6 md:p-12 rounded-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          {organizationalChart.title}
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          A simplified view of the official hierarchy.
        </p>
        <div className="flex justify-center">
          <div className="relative border-l border-b border-gray-400 p-4 rounded-xl">
            <div className="absolute top-0 -left-px h-full w-px bg-gray-400"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gray-400"></div>

            {/* Level 1: Executive Chairman */}
            <motion.div
              className="bg-blue-600 text-white p-4 rounded-lg shadow-lg relative z-10 w-64 text-center mx-auto mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="font-semibold text-lg">
                {organizationalChart.hierarchy.level1.position}
              </h4>
              <p className="text-sm">
                {organizationalChart.hierarchy.level1.name}
              </p>
            </motion.div>

            {/* Lines down from Chairman */}
            <div className="flex justify-center -mt-8 mb-8">
              <div className="w-px h-8 bg-gray-400"></div>
            </div>

            {/* Level 2: Second Tier Leaders */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {organizationalChart.hierarchy.level2.map((leader, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-gray-300 p-4 rounded-lg shadow-md text-center flex flex-col relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-px h-8 bg-gray-400"></div>
                  <h4 className="font-semibold text-gray-800">
                    {leader.position}
                  </h4>
                  <p className="text-sm text-gray-600">{leader.name}</p>
                </motion.div>
              ))}
            </div>

            {/* Lines connecting to departments */}
            <div className="flex justify-center -mt-8">
              <div className="w-full h-px bg-gray-400"></div>
            </div>

            {/* Level 3: Departments */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {organizationalChart.hierarchy.level3.map((dept, index) => (
                <motion.div
                  key={index}
                  className="bg-green-100 text-green-800 p-3 rounded-lg text-sm text-center relative shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.05, duration: 0.5 }}
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-px h-4 bg-gray-400"></div>
                  {dept}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="border-t border-gray-200" />

      {/* Contact Info Section */}
      <section className="bg-blue-50 p-6 md:p-12 rounded-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-8">
          Contact Information
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Headquarters
            </h3>
            <div className="space-y-2 text-gray-700">
              <p className="flex items-center">
                <Briefcase className="mr-3 text-blue-500" />
                {contactInfo.headquarters.name}
              </p>
              <p className="flex items-center">
                <Mail className="mr-3 text-blue-500" />
                {contactInfo.headquarters.email}
              </p>
              <p className="flex items-center">
                <PhoneCall className="mr-3 text-blue-500" />
                {contactInfo.headquarters.phone}
              </p>
              <p className="flex items-center">
                <Briefcase className="mr-3 text-blue-500" />
                {contactInfo.headquarters.workingHours}
              </p>
            </div>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Emergency Contacts
            </h3>
            <div className="space-y-2 text-gray-700">
              {contactInfo.emergencyContacts.map((contact, index) => (
                <p key={index} className="flex items-center">
                  <PhoneCall className="mr-3 text-red-500" />
                  <span className="font-semibold">{contact.service}:</span>{" "}
                  {contact.number}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
