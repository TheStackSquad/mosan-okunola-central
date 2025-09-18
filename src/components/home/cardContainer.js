// src/components/home/cardContainer.js
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";

const CardContainer = ({ cardsData }) => {
  const renderCard = (card, index) => {
    return (
      <Link href={card.href} key={index} passHref>
        <div
          className={`
            relative group flex flex-col rounded-2xl overflow-hidden
            bg-white shadow-xl border border-gray-100
            transition-all duration-500 transform cursor-pointer
            hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20
            hover:border-blue-300/50 hover:scale-[1.02]
          `}
        >
          {/* Image Container */}
          <div className="relative w-full h-56 md:h-48 lg:h-52 overflow-hidden">
            {/* Main Image */}
            <Image
              src={card.image}
              alt={card.title}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              quality={90}
              className="absolute z-0 transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 group-hover:from-black/70 group-hover:via-black/30 transition-all duration-500"></div>

            {/* Subtle Pattern Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 z-15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Floating Action Icon */}
            <div className="absolute top-4 right-4 z-30">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <ExternalLink className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Category Badge */}
            {card.category && (
              <div className="absolute top-4 left-4 z-30">
                <div className="px-3 py-1 bg-gradient-to-r from-blue-500/90 to-purple-500/90 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="font-body text-xs font-medium text-white">
                    {card.category}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Content Container */}
          <div className="relative p-5 md:p-6 flex-1 flex flex-col">
            {/* Title and Description */}
            <div className="flex-1 mb-4">
              <h4 className="font-header text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300 line-clamp-2">
                {card.title}
              </h4>
              <p className="font-body text-sm md:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300 line-clamp-3">
                {card.description}
              </p>
            </div>

            {/* Features/Tags */}
            {card.features && (
              <div className="flex flex-wrap gap-2 mb-4">
                {card.features.slice(0, 3).map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-gray-100 group-hover:bg-blue-50 text-xs font-medium text-gray-600 group-hover:text-blue-700 rounded-md transition-colors duration-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            )}

            {/* Action Bar */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100 group-hover:border-blue-100 transition-colors duration-300">
              {/* Status/Priority Indicator */}
              <div className="flex items-center space-x-2">
                {card.priority && (
                  <div
                    className={`w-2 h-2 rounded-full ${
                      card.priority === "high"
                        ? "bg-red-400"
                        : card.priority === "medium"
                        ? "bg-yellow-400"
                        : "bg-green-400"
                    }`}
                  ></div>
                )}
                <span className="font-body text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                  {card.status || "Available"}
                </span>
              </div>

              {/* Learn More Button */}
              <div className="flex items-center text-blue-600 group-hover:text-blue-700 font-body font-medium text-sm transition-colors duration-300">
                <span className="mr-1 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  Learn More
                </span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>

            {/* Hover Accent Line */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="w-full h-full">
      {/* Header */}
      <div className="mb-6 md:mb-8 px-4 md:px-6 lg:px-8 pt-4 md:pt-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-header text-2xl md:text-3xl font-bold text-gray-900">
              Our Services
            </h2>
            <p className="font-body text-gray-600 text-sm md:text-base mt-2">
              Discover what we have to offer
            </p>
          </div>

          {/* View All Button */}
          <Link href="/services">
            <button className="hidden md:flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-header font-medium rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
              <span className="mr-2">View All</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="flex-1 px-4 md:px-6 lg:px-8 pb-4 md:pb-6">
        {/* Mobile view - single column */}
        <div className="flex flex-col gap-4 md:hidden">
          {cardsData.map(renderCard)}
        </div>

        {/* Desktop view - 2x2 grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8 h-full">
          {cardsData.map(renderCard)}
        </div>
      </div>

      {/* Mobile View All Button */}
      <div className="md:hidden px-4 pb-4">
        <Link href="/services">
          <button className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-header font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg">
            <span className="mr-2">View All Services</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardContainer;
