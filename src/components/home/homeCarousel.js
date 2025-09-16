//src/components/home/homeCarousel.js
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const HomeCarousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
      {/* Image Container */}
      <div className="relative w-full h-80 lg:h-96">
        <Image
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          fill
          className="object-cover"
          priority
        />

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-white shadow-lg"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Details Container */}
      <div className="p-6 md:p-8 flex-grow">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          {slides[currentSlide].title}
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          {slides[currentSlide].description}
        </p>
      </div>

      {/* CTA Container */}
      <div className="p-6 md:p-8 pt-0">
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 shadow-md">
          <h3 className="text-xl font-semibold text-blue-900 mb-2">
            Access Online Services
          </h3>
          <p className="text-blue-700 text-sm mb-4">
            Quick access to permits, payments, and government services
          </p>
          <Link href="/services">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;