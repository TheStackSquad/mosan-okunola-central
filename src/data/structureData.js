// src/data/structureData.js

const structureData = {
  executiveArm: {
    title: "Executive Arm",
    description:
      "The administrative leadership responsible for policy implementation and day-to-day governance of Mosan-Okunola LCDA.",
    positions: [
      {
        id: 1,
        title: "Executive Chairman",
        name: "Hon. Akindele Adunni Opeyemi",
        department: "Executive Office",
        image: "/img/placeholderFemale.webp",
        responsibilities: [
          "Overall administration and governance",
          "Policy formulation and implementation",
          "Community relations and development",
          "Budget oversight and resource allocation",
        ],
      },
      {
        id: 2,
        title: "Vice Chairman",
        name: "Hon. Akintola Falade",
        department: "Executive Office",
        image: "/img/placeholderMan.webp",
        responsibilities: [
          "Assist the Chairman in administrative duties",
          "Coordinate departmental activities",
          "Community outreach and engagement",
          "Project supervision and monitoring",
        ],
      },
      {
        id: 3,
        title: "Secretary to Local Government",
        name: "Mrs. Folake Adebayo",
        department: "Administration",
        image: "/img/placeholderFemale.webp",
        responsibilities: [
          "Administrative coordination",
          "Record keeping and documentation",
          "Inter-departmental communication",
          "Council meeting administration",
        ],
      },
    ],
  },

  legislativeArm: {
    title: "Legislative Arm",
    description:
      "The law-making body responsible for enacting bye-laws and overseeing executive functions.",
    positions: [
      {
        id: 4,
        title: "Leader of Legislative Council",
        name: "Hon. Biodun Ogundimu",
        department: "Legislative Council",
        image: "/img/placeholderMan.webp",
        responsibilities: [
          "Preside over council sessions",
          "Coordinate legislative activities",
          "Represent council interests",
          "Facilitate law-making processes",
        ],
      },
      {
        id: 5,
        title: "Deputy Leader",
        name: "Hon. Kemi Adeleye",
        department: "Legislative Council",
        image: "/img/placeholderFemale.webp",
        responsibilities: [
          "Support council leadership",
          "Committee coordination",
          "Public hearing facilitation",
          "Bill review and analysis",
        ],
      },
    ],
  },

  departments: {
    title: "Key Departments",
    description:
      "Essential service departments ensuring efficient delivery of public services to residents.",
    units: [
      {
        id: 6,
        name: "Administration & Human Resources",
        head: "Mr. Adewale Okonkwo",
        image: "/img/placeholderMan.webp",
        functions: [
          "Personnel management",
          "Staff development and training",
          "Administrative support services",
          "Policy coordination",
        ],
      },
      {
        id: 7,
        name: "Finance & Accounts",
        head: "Mrs. Funmi Lawal",
        image: "/img/placeholderFemale.webp",
        functions: [
          "Budget preparation and monitoring",
          "Revenue generation and collection",
          "Financial reporting and analysis",
          "Audit and compliance",
        ],
      },
      {
        id: 8,
        name: "Works & Infrastructure",
        head: "Engr. Segun Ajibola",
        image: "/img/placeholderMan.webp",
        functions: [
          "Road construction and maintenance",
          "Public infrastructure development",
          "Project management and supervision",
          "Technical advisory services",
        ],
      },
      {
        id: 9,
        name: "Health Services",
        head: "Dr. Adeola Fashola",
        image: "/img/placeholderFemale.webp",
        functions: [
          "Primary healthcare delivery",
          "Public health programs",
          "Health facility management",
          "Community health outreach",
        ],
      },
      {
        id: 10,
        name: "Education & Social Services",
        head: "Mrs. Bisi Ogundipe",
        image: "/img/placeholderFemale.webp",
        functions: [
          "Primary education oversight",
          "Youth and community development",
          "Social welfare programs",
          "Educational facility management",
        ],
      },
      {
        id: 11,
        name: "Environment & Sanitation",
        head: "Mr. Yemi Akindele",
        image: "/img/placeholderMan.webp",
        functions: [
          "Waste management coordination",
          "Environmental protection programs",
          "Public sanitation oversight",
          "Climate change adaptation",
        ],
      },
    ],
  },

  organizationalChart: {
    title: "Organizational Structure",
    hierarchy: {
      level1: {
        position: "Executive Chairman",
        name: "Hon. Akindele Adunni Opeyemi",
      },
      level2: [
        {
          position: "Vice Chairman",
          name: "Hon. Akintola Falade",
        },
        {
          position: "Secretary to LG",
          name: "Mrs. Folake Adebayo",
        },
        {
          position: "Legislative Leader",
          name: "Hon. Biodun Ogundimu",
        },
      ],
      level3: [
        "Administration & HR",
        "Finance & Accounts",
        "Works & Infrastructure",
        "Health Services",
        "Education & Social Services",
        "Environment & Sanitation",
      ],
    },
  },

  contactInfo: {
    headquarters: {
      name: "Mosan-Okunola LCDA Secretariat",
      address:
        "Asiwaju Bola Ahmed Tinubu Administrative Building, Mosan-Okunola, Lagos State",
      phone: "+234 (0) 1 234-5678",
      email: "info@mosanokunola.lg.gov.ng",
      workingHours: "Monday - Friday: 8:00 AM - 4:00 PM",
    },
    emergencyContacts: [
      {
        service: "Emergency Response",
        number: "199",
      },
      {
        service: "Security Hotline",
        number: "+234 (0) 803 123-4567",
      },
    ],
  },
};

export default structureData;
