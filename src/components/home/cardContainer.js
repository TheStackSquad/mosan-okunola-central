//src/components/home/cardContainer.js

import React from "react";

const CardContainer = ({ cardsData }) => {
  const cardColors = [
    {
      bg: "bg-blue-50 border-blue-100",
      shadow: "shadow-blue-200",
      text: "text-blue-700",
      stat: "text-blue-800",
    },
    {
      bg: "bg-green-50 border-green-100",
      shadow: "shadow-green-200",
      text: "text-green-700",
      stat: "text-green-800",
    },
    {
      bg: "bg-yellow-50 border-yellow-100",
      shadow: "shadow-yellow-200",
      text: "text-yellow-700",
      stat: "text-yellow-800",
    },
    {
      bg: "bg-purple-50 border-purple-100",
      shadow: "shadow-purple-200",
      text: "text-purple-700",
      stat: "text-purple-800",
    },
  ];

  return (
    <div className="w-full grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 p-4 md:p-6 lg:p-8">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className={`flex flex-col justify-between rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl
          ${cardColors[index % cardColors.length].bg}
          shadow-lg hover:shadow-2xl ${
            cardColors[index % cardColors.length].shadow
          }`}
        >
          {/* Main content container */}
          <div className="flex flex-col items-center text-center">
            {/* Icon/Visual Element */}
            <div className="flex items-center justify-center w-16 h-16 mb-4">
              <div
                className={`w-full h-full rounded-full flex items-center justify-center text-white text-3xl font-bold ${card.bgColor}`}
              >
                {card.icon}
              </div>
            </div>

            {/* Stats/Number */}
            <div className="mb-2">
              <h3
                className={`text-4xl font-bold ${
                  cardColors[index % cardColors.length].stat
                }`}
              >
                {card.stat}
              </h3>
            </div>

            {/* Title */}
            <div className="mb-2">
              <h4
                className={`text-sm font-semibold ${
                  cardColors[index % cardColors.length].text
                }`}
              >
                {card.title}
              </h4>
            </div>

            {/* Description */}
            <div>
              <p
                className={`text-xs ${
                  cardColors[index % cardColors.length].text
                } leading-tight`}
              >
                {card.description}
              </p>
            </div>
          </div>

          {/* Progress indicator if applicable */}
          {card.showProgress && (
            <div className="mt-4 w-full">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${card.progressColor}`}
                  style={{ width: `${card.progressPercent}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 text-center mt-2">
                {card.progressPercent}% Complete
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardContainer;