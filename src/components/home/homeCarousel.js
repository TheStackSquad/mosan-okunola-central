// src/components/home/homeCarousel.js
"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const HomeCarousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionTimeoutRef = useRef(null);

  // Preload all images on component mount
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = slides.map((slide, index) => {
        return new Promise((resolve, reject) => {
          const img = new globalThis.Image();
          img.onload = () => {
            setLoadedImages((prev) => new Set(prev).add(index));
            resolve(index);
          };
          img.onerror = () => {
            console.warn(`Failed to load image: ${slide.image}`);
            setLoadedImages((prev) => new Set(prev).add(index)); // Still mark as "loaded" to prevent blocking
            resolve(index);
          };
          img.src = slide.image;
        });
      });

      // Wait for at least the first image and current slide to load
      await Promise.race([
        Promise.all(imagePromises),
        new Promise((resolve) => setTimeout(resolve, 3000)), // Max wait time
      ]);

      setIsLoading(false);
    };

    preloadImages();
  }, [slides]);

  // Auto-advance carousel with loading check
  useEffect(() => {
    if (isPaused || isLoading || isTransitioning) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length, isPaused, isLoading, isTransitioning]);

  // Handle slide transitions with synchronization
  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;

    setIsTransitioning(true);

    // Clear any existing timeout
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }

    // Ensure image is loaded before transitioning
    if (!loadedImages.has(index)) {
      // If image isn't loaded, wait a bit longer
      transitionTimeoutRef.current = setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 300);
    } else {
      // Image is loaded, transition immediately
      setCurrentSlide(index);
      transitionTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
      }, 150); // Short delay for smooth transition
    }
  };

  // Enhanced pause/resume handlers
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const handleFocus = () => setIsPaused(true);
  const handleBlur = () => setIsPaused(false);

  const currentSlideData = slides[currentSlide];

  const getCategoryBadge = (category) => {
    const badges = {
      executive: "bg-purple-500 text-white",
      news: "bg-blue-500 text-white",
      events: "bg-green-500 text-white",
      councillors: "bg-orange-500 text-white",
      static: "bg-gray-500 text-white",
    };

    const labels = {
      executive: "Leadership",
      news: "Latest News",
      events: "Upcoming Event",
      councillors: "Ward Councillor",
      static: "Featured",
    };

    return (
      <span
        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
          badges[category] || badges.static
        } ${isTransitioning ? "opacity-0" : "opacity-100"}`}
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
            className={`bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 font-medium py-2 px-4 md:py-3 md:px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent text-sm md:text-base ${
              isTransitioning
                ? "opacity-0 translate-y-2"
                : "opacity-100 translate-y-0"
            }`}
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
      councillors: {
        link: "/community#councillors",
        text: "Contact Councillor",
      },
      static: { link: "/services", text: "Get Started" },
    };

    const action = defaultActions[category] || defaultActions.static;

    return (
      <Link href={action.link}>
        <button
          className={`bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 font-medium py-2 px-4 md:py-3 md:px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent text-sm md:text-base ${
            isTransitioning
              ? "opacity-0 translate-y-2"
              : "opacity-100 translate-y-0"
          }`}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {action.text}
        </button>
      </Link>
    );
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="relative w-full h-[500px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-gray-200 animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-gray-500 font-medium">Loading carousel...</div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-[500px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
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
        <div className="relative w-full h-full">
          <Image
            src={currentSlideData.image}
            alt={currentSlideData.title}
            fill
            className={`object-cover transition-all duration-500 ${
              isTransitioning ? "opacity-90 scale-105" : "opacity-100 scale-100"
            }`}
            priority={currentSlide === 0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            quality={90}
            onLoad={() => {
              // Ensure smooth transition after image loads
              if (isTransitioning) {
                setTimeout(() => setIsTransitioning(false), 100);
              }
            }}
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
      </div>

      {/* Category Badge - Top Left Corner */}
      <div className="absolute top-4 left-4 z-20">
        {getCategoryBadge(currentSlideData.category)}
      </div>

      {/* Metadata - Top Right Corner */}
      <div className="absolute top-4 right-4 z-20 flex flex-col items-end gap-1">
        {currentSlideData.date && (
          <span
            className={`text-white/80 text-xs md:text-sm bg-black/30 backdrop-blur-sm px-2 py-1 rounded-md transition-all duration-300 ${
              isTransitioning
                ? "opacity-0 translate-x-2"
                : "opacity-100 translate-x-0"
            }`}
          >
            📅 {formatDate(currentSlideData.date)}
          </span>
        )}
        {currentSlideData.time && (
          <span
            className={`text-white/80 text-xs md:text-sm bg-black/30 backdrop-blur-sm px-2 py-1 rounded-md transition-all duration-300 delay-75 ${
              isTransitioning
                ? "opacity-0 translate-x-2"
                : "opacity-100 translate-x-0"
            }`}
          >
            🕐 {currentSlideData.time}
          </span>
        )}
        {currentSlideData.location && (
          <span
            className={`text-white/80 text-xs md:text-sm bg-black/30 backdrop-blur-sm px-2 py-1 rounded-md transition-all duration-300 delay-150 ${
              isTransitioning
                ? "opacity-0 translate-x-2"
                : "opacity-100 translate-x-0"
            }`}
          >
            📍 {currentSlideData.location}
          </span>
        )}
      </div>

      {/* Main Content - Positioned at bottom */}
      <div className="absolute bottom-16 left-0 right-0 z-10">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-4 lg:px-6">
          <div className="max-w-3xl">
            {/* Title */}
            <h1
              className={`text-base sm:text-base md:text-2xl lg:text-2xl font-bold text-white leading-tight transition-all duration-300 ${
                isTransitioning
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {currentSlideData.title}
            </h1>

            {/* Subtitle/Position (for executive and councillors) */}
            {currentSlideData.position && (
              <p
                className={`text-base sm:text-base md:text-base text-white/90 mb-1 font-medium transition-all duration-300 delay-75 ${
                  isTransitioning
                    ? "opacity-0 translate-y-4"
                    : "opacity-100 translate-y-0"
                }`}
              >
                {currentSlideData.position}
              </p>
            )}

            {/* Description */}
            <p
              className={`font-body text-sm sm:text-base md:text-base text-white/90 mb-2 leading-relaxed max-w-2xl line-clamp-2 md:line-clamp-3 transition-all duration-300 delay-150 ${
                isTransitioning
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {currentSlideData.description}
            </p>

            {/* Action Buttons */}
            <div
              className={`flex flex-wrap gap-3 transition-all duration-300 delay-200 ${
                isTransitioning
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {getActionButton(currentSlideData)}

              {/* Contact Info for Executive and Councillors */}
              {(currentSlideData.category === "executive" ||
                currentSlideData.category === "councillors") &&
                currentSlideData.contact && (
                  <Link href={`mailto:${currentSlideData.contact.email}`}>
                    <button
                      className="bg-transparent border border-white/30 text-white hover:bg-white/10 font-medium py-2 px-2 md:py-2 md:px-6 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent text-sm md:text-base"
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
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isTransitioning}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent ${
              currentSlide === index
                ? "bg-white shadow-lg scale-110"
                : "bg-white/50 hover:bg-white/75 hover:scale-105"
            } ${!loadedImages.has(index) ? "opacity-50" : "opacity-100"} ${
              isTransitioning ? "pointer-events-none" : "pointer-events-auto"
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
        disabled={isTransitioning}
        className={`hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 p-2 md:p-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent ${
          isTransitioning
            ? "pointer-events-none opacity-50"
            : "pointer-events-auto opacity-100"
        }`}
        aria-label="Previous slide"
      >
        <svg
          className="w-4 h-4 md:w-6 md:h-6"
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
        disabled={isTransitioning}
        className={`hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 p-2 md:p-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent ${
          isTransitioning
            ? "pointer-events-none opacity-50"
            : "pointer-events-auto opacity-100"
        }`}
        aria-label="Next slide"
      >
        <svg
          className="w-4 h-4 md:w-6 md:h-6"
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

      {/* Status Indicators */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 z-20">
        {isPaused && (
          <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 md:px-3 md:py-2 rounded-lg text-xs md:text-sm opacity-80 transition-opacity">
            ⏸ Paused
          </div>
        )}
        {isTransitioning && (
          <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 md:px-3 md:py-2 rounded-lg text-xs md:text-sm opacity-80 transition-opacity">
            ↻ Loading...
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeCarousel;
