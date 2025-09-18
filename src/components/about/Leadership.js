// src/components/about/Leadership.jsx

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Twitter, Facebook, Instagram } from "lucide-react";
import leadershipData from "@/data/leadershipData";
import { staggerContainer, staggerItem, cardHover } from "@/animation/aboutAnimate";

// Reusable Card component for individual leaders
const LeaderCard = ({ leader, isPolitical = false }) => {
  const socialIcons = {
    twitter: <Twitter size={20} />,
    facebook: <Facebook size={20} />,
    instagram: <Instagram size={20} />,
  };

  return (
    <motion.div
      className={`bg-white rounded-xl shadow-lg transition-all duration-300 overflow-hidden flex flex-col ${
        isPolitical ? "md:flex-row" : ""
      }`}
      variants={staggerItem} // Use the imported staggered item variant
      whileHover={cardHover.hover} // Apply hover animation from aboutAnimate.js
      initial="rest"
      animate="rest"
    >
      <div
        className={`relative flex-shrink-0 ${
          isPolitical ? "w-full h-64 md:w-64 md:h-auto" : "w-full h-64"
        }`}
      >
        <Image
          src={leader.image}
          alt={leader.name}
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
        <p className="text-lg text-blue-600 font-medium">{leader.title}</p>
        <p className="text-sm text-gray-500 italic mb-4">{leader.department}</p>
        <p className="text-gray-700 mt-auto">{leader.bio}</p>
        {isPolitical && (
          <div className="mt-4">
            <h4 className="font-semibold text-gray-800">Key Priorities:</h4>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {leader.priorities.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
            <div className="mt-4 text-sm text-gray-600">
              <p>
                Email:{" "}
                <a
                  href={`mailto:${leader.contact.email}`}
                  className="text-blue-500 hover:underline"
                >
                  {leader.contact.email}
                </a>
              </p>
              {leader.socialMedia && (
                <div className="flex items-center space-x-2 mt-2">
                  <span className="font-semibold">Follow:</span>
                  {Object.entries(leader.socialMedia).map(
                    ([platform, handle]) => (
                      <a
                        key={platform}
                        href={`https://${platform}.com/${handle}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Follow on ${platform}`}
                        className="text-2xl hover:text-blue-700 transition-colors duration-200"
                      >
                        {socialIcons[platform]}
                      </a>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

// Main Leadership Component
export default function Leadership() {
  const {
    politicalLeadership,
    executiveTeam,
    legislativeCouncil,
    organizationalValues,
  } = leadershipData;

  return (
    <div className="space-y-16">
      {/* Political Leadership Section */}
      <section className="bg-gray-50 p-6 md:p-12 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          {politicalLeadership.title}
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          {politicalLeadership.description}
        </p>
        <motion.div
          className="grid gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {politicalLeadership.leaders.map((leader) => (
            <LeaderCard key={leader.id} leader={leader} isPolitical={true} />
          ))}
        </motion.div>
      </section>

      {/* Executive Team Section */}
      <section className="bg-white p-6 md:p-12 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          {executiveTeam.title}
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          {executiveTeam.description}
        </p>
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {executiveTeam.leaders.map((leader) => (
            <LeaderCard key={leader.id} leader={leader} />
          ))}
        </motion.div>
      </section>

      {/* Legislative Council Section */}
      <section className="bg-gray-50 p-6 md:p-12 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          {legislativeCouncil.title}
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          {legislativeCouncil.description}
        </p>
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {legislativeCouncil.councilors.map((leader) => (
            <LeaderCard key={leader.id} leader={leader} />
          ))}
        </motion.div>
      </section>

      {/* Leadership Values Section */}
      <section className="bg-blue-50 p-6 md:p-12 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-4">
          {organizationalValues.title}
        </h2>
        <p className="text-center text-blue-700 max-w-2xl mx-auto mb-8">
          The principles that guide our every decision and action.
        </p>
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {organizationalValues.values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={staggerItem} // Use staggerItem for the value cards
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {value.name}
              </h3>
              <p className="text-gray-700">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}