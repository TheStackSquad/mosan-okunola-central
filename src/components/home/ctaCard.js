//src/components/home/ctaCard.js

import React from "react";
import Link from "next/link";
import { Heart, CheckCircle } from "lucide-react"; 

const CtaCard = () => {
  return (
    <div className="w-full bg-gradient-to-br from-cyan-50 to-blue-100 rounded-2xl shadow-xl p-8 border border-cyan-200 transition-all duration-300 transform hover:scale-[1.01]">
      {/* Container for content, using flex to distribute space */}
      <div className="flex flex-col justify-between h-full">
        {/* Header Section */}
        <div className="text-center mb-2">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-4 shadow-lg">
            {/* Using a modern icon from react-icons */}
            <Heart className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            Marriage Registry
          </h2>

          <p className="text-blue-800 text-base leading-relaxed">
            Begin your journey together with our streamlined marriage
            registration process. Schedule your appointment today for a
            hassle-free experience.
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-3 mb-8">
          <div className="flex items-center text-blue-800 text-sm">
            <CheckCircle className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
            <span>Quick online scheduling</span>
          </div>

          <div className="flex items-center text-blue-800 text-sm">
            <CheckCircle className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
            <span>Document verification support</span>
          </div>

          <div className="flex items-center text-blue-800 text-sm">
            <CheckCircle className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
            <span>Same-day certificate issuance</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link href="/community/online-services/marriage-registry">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Schedule Appointment
            </button>
          </Link>

          <p className="text-blue-600 text-xs mt-3">
            Available Monday - Friday, 9 AM - 4 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default CtaCard;