// src/components/about/Achievements.js (Updated Main Component)
import React from "react";
import achievementsData from "@/data/achievementsData";

// Import the new split components
import KeyInitiativesSection from "./aboutAchievements/keyInitiativesSection";
import InfrastructureDevelopmentSection from "./aboutAchievements/infrastructureDevelopmentSection";
import CommunityProgramsSection from "./aboutAchievements/communityProgramsSection";
import RecognitionsSection from "./aboutAchievements/recognitionsSection";
import KeyMetricsSection from "./aboutAchievements/keyMetricsSection";

export default function Achievements() {
  const {
    keyInitiatives,
    infrastructureDevelopment,
    communityPrograms,
    recognitions,
    keyMetrics,
  } = achievementsData;

  return (
    <div className="space-y-16">
      <KeyInitiativesSection keyInitiatives={keyInitiatives} />

      <InfrastructureDevelopmentSection
        infrastructureDevelopment={infrastructureDevelopment}
      />

      <CommunityProgramsSection communityPrograms={communityPrograms} />

      <RecognitionsSection recognitions={recognitions} />

      <KeyMetricsSection keyMetrics={keyMetrics} />
    </div>
  );
}
