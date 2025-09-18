//src/data/homeData.js

// Carousel slides data
export const carouselSlides = [
  {
    id: 1,
    image: "/img/lcda.webp",
    title: "Welcome to Our Local Government",
    description:
      "Serving our community with transparency, efficiency, and dedication. We're committed to improving the lives of all citizens through innovative governance and public service excellence.",
  },
  {
    id: 2,
    image: "/img/community.webp",
    title: "Community Development Projects",
    description:
      "Our ongoing infrastructure projects include road improvements, healthcare facility upgrades, and educational program expansions. Together, we're building a stronger future for our community.",
  },
  {
    id: 3,
    image: "/img/healthFacility.webp",
    title: "Citizen-Centered Services",
    description:
      "Access government services online 24/7. From permit applications to tax payments, we've digitized our processes to make your interactions with local government quick and convenient.",
  },
];


// src/data/homeData.js

export const cardsData = [
  {
    image: "/img/leadership.webp",
    title: "Meet Our Leadership",
    description: "Connect with the executive and councillors shaping our community's future.",
    href: "/about#leadership",
  },
  {
    image: "/img/yellowPages.webp",
    title: "Yellow Pages Directory",
    description: "Find public institutions, police stations, schools, and healthcare centers.",
    href: "/community/yellow-pages",
  },
  {
    image: "/img/services.webp",
    title: "Emergency Services",
    description: "Get immediate help for infrastructure issues and security concerns.",
    href: "/community/service",
  },
  {
    image: "/img/sec.webp",
    title: "Report to Neighbourhood Watch",
    description: "Securely report issues and act as a whistleblower to the neighbourhood watch.",
    href: "/community",
  },
];

// Executive team profiles
export const executiveTeam = [
  {
    id: 1,
    name: "Hon. Akindele Adunni Opeyemi",
    position: "Executive Chairman",
    image: "/img/exec.webp",
    bio: "Dedicated public servant with 15 years of experience in local governance and community development.",
    contact: {
      email: "chairman@localgovt.gov.ng",
      phone: "+234-801-234-5678",
    },
  },
  {
    id: 2,
    name: "Hon. Akin Falade",
    position: "Vice Chairman",
    image: "/img/viceChair.webp",
    bio: "Former educator and community organizer, passionate about youth development and women empowerment.",
    contact: {
      email: "vicechairman@localgovt.gov.ng",
      phone: "+234-802-345-6789",
    },
  },
  {
    id: 3,
    name: "Mr. Ibrahim Hassan",
    position: "Secretary",
    image: "/img/APC-flag.webp",
    bio: "Administrative expert with extensive experience in public sector management and policy implementation.",
    contact: {
      email: "secretary@localgovt.gov.ng",
      phone: "+234-803-456-7890",
    },
  },
];

// src/data/homeData.js

// Councilors data with Yoruba names and street lists
export const councillors = [
  {
    id: 1,
    name: "Hon Joke Abegunde",
    ward: "Ward 1",
    image: "/img/councillorFemale1.webp",
    contact: {
      email: "ward1@localgovt.gov.ng",
      phone: "+234-804-567-8901",
    },
    streets: [
      "Akinogun Street",
      "Igbayilola Street",
      "Gowon Estate Road",
      "Olawale Cole Street",
    ],
  },
  {
    id: 2,
    name: "Hon. Omolara Adegbite",
    ward: "Ward 2",
    image: "/img/councillorFemale2.webp",
    contact: {
      email: "ward2@localgovt.gov.ng",
      phone: "+234-805-678-9012",
    },
    streets: [
      "Odofin Street",
      "Okunola Road",
      "Alhaji Sanni Lemonu Street",
      "Abule Odu Road",
    ],
  },
  {
    id: 3,
    name: "Hon. Ayodele Samuel",
    ward: "Ward 3",
    image: "/img/councillorMan1.webp",
    contact: {
      email: "ward3@localgovt.gov.ng",
      phone: "+234-806-789-0123",
    },
    streets: [
      "Isheri-Lasu Road",
      "Abori Street",
      "Pipeline Road",
      "Mosalasi Street",
    ],
  },
  {
    id: 4,
    name: "Hon. Afolabi Doherty",
    ward: "Ward 4",
    image: "/img/councillorMan2.webp",
    contact: {
      email: "ward4@localgovt.gov.ng",
      phone: "+234-807-890-1234",
    },
    streets: [
      "Egbeda-Idimu Road",
      "Koleosho Street",
      "Igbodile Street",
      "Community Road",
    ],
  },
];

// News and announcements
export const news = [
  {
    id: 1,
    title: "New Healthcare Facility Opens in Ward 3",
    excerpt:
      "State-of-the-art primary healthcare center begins operations, serving over 25,000 residents.",
    date: "2024-09-10",
    category: "Healthcare",
    image: "/img/healthFacility.webp",
  },
  {
    id: 2,
    title: "Road Construction Project 80% Complete",
    excerpt:
      "The 15km township road project is ahead of schedule and will be completed by December 2024.",
    date: "2024-09-08",
    category: "Infrastructure",
    image: "/img/road-construction.webp",
  },
  {
    id: 3,
    title: "Free Skills Training Program Launched",
    excerpt:
      "600 young adults to benefit from digital literacy and vocational training initiative.",
    date: "2024-09-05",
    category: "Education",
    image: "/img/skillsTraining.webp",
  },
];
// Upcoming events
export const upcomingEvents = [
  {
    id: 1,
    title: "Town Hall Meeting",
    date: "2024-09-20",
    time: "10:00 AM",
    location: "Council Chambers",
    description:
      "Monthly community meeting to discuss ongoing projects and citizen concerns.",
    image: "/img/townHall.webp",
  },
  {
    id: 2,
    title: "Youth Empowerment Summit",
    date: "2024-09-25",
    time: "9:00 AM",
    location: "Community Center",
    description:
      "Career guidance, entrepreneurship training, and networking opportunities for young people.",
    image: "/img/youthEmpowerment.webp",
  },
  {
    id: 3,
    title: "Environmental Cleanup Day",
    date: "2024-09-28",
    time: "7:00 AM",
    location: "Various Locations",
    description:
      "Community-wide environmental sanitation and tree planting exercise.",
    image: "/img/cleanUp.webp",
  },
];

// Citizen interest items
export const citizenInterests = [
  {
    category: "Services",
    items: [
      "Business Registration & Permits",
      "Property Tax Assessment",
      "Marriage Certificates",
      "Birth Certificate Registration",
      "Building Permits",
      "Market Stall Allocation",
    ],
  },
  {
    category: "Information",
    items: [
      "Council Meeting Minutes",
      "Budget Allocation Reports",
      "Project Status Updates",
      "Public Procurement Notices",
      "Emergency Contact Numbers",
      "Office Hours & Locations",
    ],
  },
  {
    category: "Community",
    items: [
      "Local Events Calendar",
      "Public Health Programs",
      "Educational Initiatives",
      "Sports & Recreation",
      "Cultural Celebrations",
      "Volunteer Opportunities",
    ],
  },
];
