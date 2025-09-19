// src/components/about/Overview.jsx (Updated Main Component)
import React from "react";
import overviewData from "@/data/overviewData";

// Import the new split components
import IntroductionSection from "./aboutOverview/introductionSection";
import DemographicsSection from "./aboutOverview/demographicsSection";
import GovernanceSection from "./aboutOverview/governanceSection";
import KeyServicesSection from "./aboutOverview/keyServicesSection";
import ContactSection from "./aboutOverview/contactSection";

export default function Overview() {
  const {
    basicInfo,
    introduction,
    demographics,
    governance,
    keyServices,
    contact,
  } = overviewData;

  return (
    <div className="space-y-16">
      <IntroductionSection introduction={introduction} />
      <DemographicsSection basicInfo={basicInfo} demographics={demographics} />
      <GovernanceSection governance={governance} />
      <KeyServicesSection keyServices={keyServices} />
      <ContactSection contact={contact} />
    </div>
  );
}
