// src/components/about/structure.js (Updated Main Component)
import React from "react";
import structureData from "@/data/structureData";

// Import the new split components
import ExecutiveArmSection from "./aboutStructure/executiveArmSection";
import LegislativeArmSection from "./aboutStructure/legislativeArmSection";
import DepartmentsSection from "./aboutStructure/departmentsSection";
import OrganizationalChartSection from "./aboutStructure/organizationalChartSection";
import ContactInfoSection from "./aboutStructure/contactInfoSection";

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
      <ExecutiveArmSection executiveArm={executiveArm} />

      <hr className="border-t border-gray-200" />

      <LegislativeArmSection legislativeArm={legislativeArm} />

      <hr className="border-t border-gray-200" />

      <DepartmentsSection departments={departments} />

      <hr className="border-t border-gray-200" />

      <OrganizationalChartSection organizationalChart={organizationalChart} />

      <hr className="border-t border-gray-200" />

      <ContactInfoSection contactInfo={contactInfo} />
    </div>
  );
}
