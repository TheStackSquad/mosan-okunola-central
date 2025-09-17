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
      actionLink: "/about/leadership",
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

  // Create enriched slides array with priority: executive > news > events > static
  const enrichedSlides = [
    ...transformExecutiveToSlides(executiveTeam),
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
      {/* Full-width Carousel Hero Section */}
      <section className="mb-8 px-4 md:px-8 pt-8">
        <HomeCarousel slides={enrichedSlides} />
      </section>

      {/* Content Section */}
      <section className="px-4 md:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Two-column layout for cards and CTA */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cards Container - Takes more space */}
            <div className="flex-1 lg:flex-[2]">
              <CardContainer cardsData={cardsData} />
            </div>

            {/* CTA Container - Takes less space */}
            <div className="flex-shrink-0 lg:flex-[1] lg:max-w-md">
              <CtaCard />
            </div>
          </div>

          {/* Additional Content Sections */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">🔗</span>
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/services"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center"
                  >
                    <span className="mr-2">→</span>
                    Online Services
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center"
                  >
                    <span className="mr-2">→</span>
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center"
                  >
                    <span className="mr-2">→</span>
                    Contact Information
                  </a>
                </li>
                <li>
                  <a
                    href="/projects"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center"
                  >
                    <span className="mr-2">→</span>
                    Current Projects
                  </a>
                </li>
              </ul>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">🕐</span>
                Office Hours
              </h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-medium">8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-medium">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium text-red-600">Closed</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <strong>Emergency Services:</strong>
                    <br />
                    Available 24/7 at +234 800 123 4567
                  </p>
                </div>
              </div>
            </div>

            {/* Latest Updates */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">📢</span>
                Latest Updates
              </h3>
              <div className="space-y-4">
                {news.slice(0, 2).map((item) => (
                  <div
                    key={item.id}
                    className="border-b border-gray-200 pb-3 last:border-b-0 last:pb-0"
                  >
                    <h4 className="font-medium text-gray-900 text-sm line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(item.date).toLocaleDateString()}
                    </p>
                  </div>
                ))}
                <a
                  href="/news"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm font-medium"
                >
                  View All News
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
