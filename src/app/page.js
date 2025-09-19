//src/app/page.js

"use client";
import HomeCarousel from "@/components/home/homeCarousel";
import CardContainer from "@/components/home/cardContainer";
import CtaCard from "@/components/home/ctaCard";
import {
  carouselSlides,
  cardsData,
  executiveTeam,
  news,
  councillors,
  upcomingEvents,
} from "@/data/homeData";

export default function HomePage() {
  // Function to transform executive team data to carousel slides
  const transformExecutiveToSlides = (executives) => {
    return executives.map((exec) => ({
      id: `exec-${exec.id}`,
      title: exec.name,
      position: exec.position,
      description: exec.bio,
      image: exec.image,
      category: "executive",
      contact: exec.contact,
      actionLink: "/about#leadership",
      actionText: "Meet Our Leadership",
    }));
  };

  // Function to transform news data to carousel slides
  const transformNewsToSlides = (newsItems) => {
    return newsItems.map((item) => ({
      id: `news-${item.id}`,
      title: item.title,
      description: item.excerpt,
      image: item.image,
      category: "news",
      date: item.date,
      actionLink: `/news/${item.id}`,
      actionText: "Read Full Story",
    }));
  };

  // Function to transform events data to carousel slides
  const transformEventsToSlides = (events) => {
    return events.map((event) => ({
      id: `event-${event.id}`,
      title: event.title,
      description: event.description,
      image: event.image,
      category: "events",
      date: event.date,
      time: event.time,
      location: event.location,
      actionLink: `/events/${event.id}`,
      actionText: "Learn More",
    }));
  };

  // NEW: Function to transform councillors data to carousel slides
  const transformCouncillorsToSlides = (councillors) => {
    return councillors.map((councillor) => ({
      id: `councillor-${councillor.id}`,
      title: councillor.name,
      position: `${councillor.ward} Councillor`,
      description: `Covering: ${councillor.streets.join(", ")}`, // Join streets into a string
      image: councillor.image,
      category: "councillors",
      contact: councillor.contact,
      actionLink: "/community#councillors",
      actionText: "Contact Councillor",
    }));
  };

  // Create enriched slides array with priority: executive > councillors > news > events > static
  const enrichedSlides = [
    ...transformExecutiveToSlides(executiveTeam),
    ...transformCouncillorsToSlides(councillors), // Add the new councillor slides
    ...transformNewsToSlides(news),
    ...transformEventsToSlides(upcomingEvents),
    ...carouselSlides.map((slide) => ({
      ...slide,
      category: "static",
      actionLink: "/services",
      actionText: "Explore Services",
    })),
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Main Layout Container */}
      <div className="px-4 md:px-6 lg:px-8 pt-6 md:pt-8 pb-6 md:pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* LEFT COLUMN - 30% width */}
            <div className="w-full lg:w-[30%]">
              <div className="space-y-6 mt-7">
                {/* Carousel Container */}
                <div className="bg-white mt-3 rounded-2xl shadow-lg overflow-hidden">
                  <HomeCarousel slides={enrichedSlides} />
                </div>

                {/* Quick Links */}
                <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl shadow-xl p-6 md:p-7 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl border border-blue-100/50 group">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.1m0-3.464l1.1-1.1a4 4 0 105.657 5.656l-4 4a4 4 0 01-5.656 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-header text-xl md:text-2xl font-bold text-gray-800">
                      Quick Links
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    <li>
                      <a
                        href="/services"
                        className="group/link flex items-center p-3 rounded-xl bg-white/60 backdrop-blur-sm hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md border border-transparent hover:border-blue-400"
                      >
                        <div className="w-8 h-8 bg-blue-100 group-hover/link:bg-white/20 rounded-lg flex items-center justify-center mr-3 transition-colors duration-300">
                          <svg
                            className="w-4 h-4 text-blue-600 group-hover/link:text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                            />
                          </svg>
                        </div>
                        <span className="font-body font-medium">
                          Online Services
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about"
                        className="group/link flex items-center p-3 rounded-xl bg-white/60 backdrop-blur-sm hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md border border-transparent hover:border-blue-400"
                      >
                        <div className="w-8 h-8 bg-blue-100 group-hover/link:bg-white/20 rounded-lg flex items-center justify-center mr-3 transition-colors duration-300">
                          <svg
                            className="w-4 h-4 text-blue-600 group-hover/link:text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <span className="font-body font-medium">About Us</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/contact"
                        className="group/link flex items-center p-3 rounded-xl bg-white/60 backdrop-blur-sm hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md border border-transparent hover:border-blue-400"
                      >
                        <div className="w-8 h-8 bg-blue-100 group-hover/link:bg-white/20 rounded-lg flex items-center justify-center mr-3 transition-colors duration-300">
                          <svg
                            className="w-4 h-4 text-blue-600 group-hover/link:text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <span className="font-body font-medium">
                          Contact Information
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/projects"
                        className="group/link flex items-center p-3 rounded-xl bg-white/60 backdrop-blur-sm hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md border border-transparent hover:border-blue-400"
                      >
                        <div className="w-8 h-8 bg-blue-100 group-hover/link:bg-white/20 rounded-lg flex items-center justify-center mr-3 transition-colors duration-300">
                          <svg
                            className="w-4 h-4 text-blue-600 group-hover/link:text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            />
                          </svg>
                        </div>
                        <span className="font-body font-medium">
                          Current Projects
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Latest Updates */}
                <div className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 rounded-2xl shadow-xl p-6 md:p-7 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl border border-emerald-100/50 group">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-header text-xl md:text-2xl font-bold text-gray-800">
                      Latest Updates
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {news.slice(0, 3).map((item, index) => (
                      <div
                        key={item.id}
                        className="group/item p-4 rounded-xl bg-white/60 backdrop-blur-sm hover:bg-emerald-50 transition-all duration-300 border border-transparent hover:border-emerald-200 hover:shadow-md"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover/item:scale-110 transition-transform duration-300">
                            {index + 1}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-body font-semibold text-gray-900 text-sm line-clamp-2 mb-2 group-hover/item:text-emerald-700 transition-colors duration-300">
                              {item.title}
                            </h4>
                            <div className="flex items-center text-xs text-gray-500">
                              <svg
                                className="w-3 h-3 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              {new Date(item.date).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    <a
                      href="/news"
                      className="inline-flex items-center justify-center w-full p-3 mt-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-header font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    >
                      <span>View All News</span>
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Emergency Contacts */}
                <div className="bg-gradient-to-br from-red-50 via-white to-orange-50 rounded-2xl shadow-xl p-6 md:p-7 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl border border-red-100/50 group">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 18h.01M8 21l4-7 4 7M3 18h18M4 6h16l-2 12H6L4 6zM6 6V4a2 2 0 012-2h8a2 2 0 012 2v2"
                        />
                      </svg>
                    </div>
                    <h3 className="font-header text-xl md:text-2xl font-bold text-gray-800">
                      Emergency Contacts
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {/* Emergency Services */}
                    <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-5 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="font-header font-bold text-sm">
                            Emergency Services
                          </p>
                          <p className="font-body text-xs opacity-90">
                            Available 24/7
                          </p>
                        </div>
                      </div>
                      <p className="font-header font-bold text-2xl tracking-wide">
                        +234 800 123 4567
                      </p>
                    </div>

                    {/* Office Hours */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-5 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-3">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <p className="font-header font-bold text-blue-800">
                          Office Hours
                        </p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 rounded-lg bg-white/70">
                          <span className="font-body text-sm text-blue-700">
                            Mon - Fri:
                          </span>
                          <span className="font-header font-semibold text-sm text-blue-800">
                            8:00 AM - 4:00 PM
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-lg bg-white/70">
                          <span className="font-body text-sm text-blue-700">
                            Saturday:
                          </span>
                          <span className="font-header font-semibold text-sm text-blue-800">
                            9:00 AM - 1:00 PM
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-lg bg-white/70">
                          <span className="font-body text-sm text-blue-700">
                            Sunday:
                          </span>
                          <span className="font-header font-semibold text-sm text-red-600">
                            Closed
                          </span>
                        </div>
                      </div>
                    </div>

                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center w-full p-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-header font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span>Full Contact Details</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - 70% width */}
            <div className="w-full lg:w-[70%]">
              <div className="flex flex-col">
                {/* Card Container - 70% height */}
                <div className="flex-[70] mb-6 md:mb-8">
                  <div className="h-full bg-white rounded-2xl shadow-lg overflow-hidden">
                    <CardContainer cardsData={cardsData} />
                  </div>
                </div>

                {/* CTA Card - 30% height */}
                <div className="flex-[30]">
                  <div className="h-full bg-white rounded-2xl shadow-lg overflow-hidden">
                    <CtaCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}