//src/components/home/homeCarousel.js
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const HomeCarousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return; // Don't start timer if paused

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Increased to 6 seconds for richer content
    return () => clearInterval(timer);
  }, [slides.length, isPaused]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleFocus = () => {
    setIsPaused(true);
  };

  const handleBlur = () => {
    setIsPaused(false);
  };

  const currentSlideData = slides[currentSlide];

  const getCategoryBadge = (category) => {
    const badges = {
      executive: "bg-purple-500 text-white",
      news: "bg-blue-500 text-white",
      events: "bg-green-500 text-white",
      static: "bg-gray-500 text-white",
    };

    const labels = {
      executive: "Leadership",
      news: "Latest News",
      events: "Upcoming Event",
      static: "Featured",
    };

    return (
      <span
        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
          badges[category] || badges.static
        }`}
      >
        {labels[category] || labels.static}
      </span>
    );
  };

  const formatDate = (dateString) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getActionButton = (slide) => {
    const { category, actionLink, actionText } = slide;

    if (actionLink && actionText) {
      return (
        <Link href={actionLink}>
          <button
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 font-medium py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {actionText}
          </button>
        </Link>
      );
    }

    // Default action based on category
    const defaultActions = {
      executive: { link: "/about/leadership", text: "Meet Our Team" },
      news: { link: "/news", text: "Read More" },
      events: { link: "/events", text: "View Events" },
      static: { link: "/services", text: "Get Started" },
    };

    const action = defaultActions[category] || defaultActions.static;

    return (
      <Link href={action.link}>
        <button
          className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 font-medium py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {action.text}
        </button>
      </Link>
    );
  };

  return (
    <div
      className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={0}
      role="region"
      aria-label="Featured content carousel"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={currentSlideData.image}
          alt={currentSlideData.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          quality={90}
        />
        {/* Gradient Overlay - Adjusted for better visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30 md:from-black/70 md:via-black/40 md:to-black/20"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="max-w-3xl">
            {/* Category Badge */}
            <div className="mb-4">
              {getCategoryBadge(currentSlideData.category)}
              {currentSlideData.date && (
                <span className="ml-3 text-white/80 text-sm">
                  📅 {formatDate(currentSlideData.date)}
                </span>
              )}
              {currentSlideData.time && (
                <span className="ml-3 text-white/80 text-sm">
                  🕐 {currentSlideData.time}
                </span>
              )}
              {currentSlideData.location && (
                <span className="ml-3 text-white/80 text-sm">
                  📍 {currentSlideData.location}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {currentSlideData.title}
            </h1>

            {/* Subtitle/Position (for executive) */}
            {currentSlideData.position && (
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-4 font-medium">
                {currentSlideData.position}
              </p>
            )}

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              {currentSlideData.description}
            </p>

            {/* Action Button */}
            <div className="flex flex-wrap gap-4">
              {getActionButton(currentSlideData)}

              {/* Contact Info for Executive */}
              {currentSlideData.category === "executive" &&
                currentSlideData.contact && (
                  <Link href={`mailto:${currentSlideData.contact.email}`}>
                    <button
                      className="bg-transparent border border-white/30 text-white hover:bg-white/10 font-medium py-3 px-6 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    >
                      Contact
                    </button>
                  </Link>
                )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent ${
              currentSlide === index
                ? "bg-white shadow-lg scale-110"
                : "bg-white/50 hover:bg-white/75 hover:scale-105"
            }`}
            aria-label={`Go to slide ${index + 1}: ${slides[index].title}`}
          />
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile */}
      <button
        onClick={() =>
          goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)
        }
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="hidden md:block absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 p-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="hidden md:block absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 p-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Pause indicator */}
      {isPaused && (
        <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm opacity-80 transition-opacity z-20">
          ⏸ Paused
        </div>
      )}
    </div>
  );
};

export default HomeCarousel;
