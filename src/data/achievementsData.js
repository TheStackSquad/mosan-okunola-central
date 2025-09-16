// src/data/achievementsData.js

const achievementsData = {
  keyInitiatives: {
    title: "L.E.A.D.E.R.S.H.I.P Blueprint Initiatives",
    description:
      "Transformative programs designed to drive sustainable development and community empowerment across Mosan-Okunola LCDA.",
    programs: [
      {
        id: 1,
        title: "Light Up Mosan-Okunola Project",
        category: "Infrastructure & Security",
        icon: "💡",
        image: "/img/placeholderMan.webp",
        status: "Ongoing",
        description:
          "Deployment of solar-powered streetlights across the LCDA to enhance security and support local businesses.",
        impact:
          "Over 150 solar streetlights installed, reducing crime by 35% in illuminated areas",
        timeline: "2024 - 2025",
        budget: "₦45 Million",
      },
      {
        id: 2,
        title: "No Child Left Behind Initiative",
        category: "Education",
        icon: "🎓",
        image: "/img/placeholderFemale.webp",
        status: "Active",
        description:
          "Comprehensive education program providing free JAMB and GCE coaching, school revamps, and educational support.",
        impact:
          "500+ students enrolled in free coaching, 12 schools revamped with modern facilities",
        timeline: "2024 - Ongoing",
        budget: "₦60 Million",
      },
      {
        id: 3,
        title: "Women & Youth Empowerment Program",
        category: "Social Development",
        icon: "👥",
        image: "/img/placeholderFemale.webp",
        status: "Active",
        description:
          "Skills acquisition, microfinance support, and entrepreneurship training for women and youth.",
        impact:
          "800+ beneficiaries trained, ₦25M in microloans disbursed, 200+ new businesses established",
        timeline: "2024 - Ongoing",
        budget: "₦35 Million",
      },
      {
        id: 4,
        title: "Primary Healthcare Revitalization",
        category: "Health Services",
        icon: "🏥",
        image: "/img/placeholderMan.webp",
        status: "Phase 1 Complete",
        description:
          "Upgrading health centers, medical equipment procurement, and community health programs.",
        impact:
          "5 health centers upgraded, 15,000+ residents receiving improved healthcare services",
        timeline: "2024 - 2025",
        budget: "₦40 Million",
      },
    ],
  },

  infrastructureDevelopment: {
    title: "Infrastructure Development",
    description:
      "Major infrastructure projects improving the quality of life for residents.",
    projects: [
      {
        id: 5,
        name: "Abeokuta Street Rehabilitation",
        type: "Road Construction",
        image: "/img/placeholderMan.webp",
        length: "600 metres",
        status: "Completed",
        completionDate: "July 2025",
        cost: "₦18 Million",
        beneficiaries: "2,500+ residents",
      },
      {
        id: 6,
        name: "Asiwaju Bola Ahmed Tinubu Administrative Building",
        type: "Public Building",
        image: "/img/placeholderFemale.webp",
        features: "Modern offices, conference facilities, public service areas",
        status: "Completed",
        completionDate: "July 2025",
        cost: "₦75 Million",
        beneficiaries: "All LCDA residents",
      },
      {
        id: 7,
        name: "Community Market Renovation",
        type: "Commercial Infrastructure",
        image: "/img/placeholderMan.webp",
        features: "Modern stalls, parking, security, fire safety systems",
        status: "Ongoing",
        expectedCompletion: "December 2025",
        cost: "₦32 Million",
        beneficiaries: "500+ traders, 10,000+ customers",
      },
    ],
  },

  communityPrograms: {
    title: "Community Development Programs",
    description:
      "Grassroots initiatives fostering community cohesion and development.",
    programs: [
      {
        id: 8,
        title: "Community Security Watch Program",
        category: "Security",
        participants: "450+ volunteers",
        coverage: "15 communities",
        impact: "24/7 community surveillance, rapid incident response",
        image: "/img/placeholderMan.webp",
      },
      {
        id: 9,
        title: "Skills Acquisition Centers",
        category: "Capacity Building",
        participants: "300+ trainees monthly",
        courses: "Tailoring, ICT, Catering, Carpentry, Electrical works",
        impact: "70% job placement rate, 120+ new businesses launched",
        image: "/img/placeholderFemale.webp",
      },
      {
        id: 10,
        title: "Senior Citizens Support Program",
        category: "Social Welfare",
        participants: "200+ elderly residents",
        services: "Healthcare, social visits, financial support",
        impact: "Improved quality of life, reduced elderly isolation",
        image: "/img/placeholderFemale.webp",
      },
    ],
  },

  recognitions: {
    title: "Awards & Recognition",
    description:
      "Acknowledgments of outstanding governance and community service.",
    awards: [
      {
        id: 11,
        title: "Best Performing LCDA - Infrastructure Development",
        awardingBody: "Lagos State Government",
        year: "2025",
        category: "Infrastructure",
        image: "/img/placeholderFemale.webp",
        description:
          "Recognition for exceptional infrastructure development within first year of administration",
      },
      {
        id: 12,
        title: "Excellence in Women's Leadership",
        awardingBody: "Committee of Wives of Lagos State Officials (COWLSO)",
        year: "2025",
        category: "Leadership",
        image: "/img/placeholderFemale.webp",
        description:
          "Outstanding contribution to women's empowerment and inclusive governance",
      },
      {
        id: 13,
        title: "Community Impact Award",
        awardingBody: "Association of Local Government Chairmen, Lagos",
        year: "2024",
        category: "Community Development",
        image: "/img/placeholderFemale.webp",
        description:
          "Exceptional community engagement and grassroots development initiatives",
      },
    ],
  },

  keyMetrics: {
    title: "Performance Metrics",
    description: "Measurable outcomes of our development initiatives.",
    statistics: [
      {
        metric: "Infrastructure Projects",
        value: "25+",
        description: "Completed and ongoing projects",
        trend: "increasing",
      },
      {
        metric: "Citizens Empowered",
        value: "2,500+",
        description: "Through various programs",
        trend: "increasing",
      },
      {
        metric: "Jobs Created",
        value: "800+",
        description: "Direct and indirect employment",
        trend: "increasing",
      },
      {
        metric: "Budget Efficiency",
        value: "95%",
        description: "Project delivery on budget",
        trend: "stable",
      },
      {
        metric: "Citizen Satisfaction",
        value: "88%",
        description: "Based on community surveys",
        trend: "increasing",
      },
      {
        metric: "Healthcare Access",
        value: "78%",
        description: "Residents with improved access",
        trend: "increasing",
      },
    ],
  },
};

export default achievementsData;
