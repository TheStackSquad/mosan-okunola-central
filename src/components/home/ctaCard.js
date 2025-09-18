//src/components/home/ctaCard.js
import React from "react";
import Link from "next/link";
import { Heart, CheckCircle, Calendar, FileCheck, Clock } from "lucide-react";

const CtaCard = () => {
  return (
    <div className="relative w-full h-full rounded-2xl shadow-xl overflow-hidden group">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/img/marriage-registry.webp')",
        }}
      >
        {/* Dark Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        {/* Subtle pattern overlay for texture */}
        <div className="absolute inset-0 bg-gradient-to-tr from-rose-900/20 via-transparent to-amber-900/20"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-between h-full p-6 md:p-8">
        {/* Header Section */}
        <div className="text-center mb-4">
          {/* Icon with elegant styling */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-500 to-amber-500 rounded-full mb-4 shadow-2xl ring-4 ring-white/20 backdrop-blur-sm">
            <Heart
              className="w-8 h-8 text-white drop-shadow-lg"
              fill="currentColor"
            />
          </div>

          {/* Title with custom font */}
          <h2 className="font-header text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-lg">
            Marriage Registry
          </h2>

          {/* Description with body font */}
          <p className="font-body text-white/90 text-sm md:text-base leading-relaxed drop-shadow-md">
            Begin your journey together with our streamlined marriage
            registration process. Schedule your appointment today for a
            hassle-free experience.
          </p>
        </div>

        {/* Features List with Glass-morphism Effect */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 mb-6 border border-white/20">
          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-center text-white/95 text-sm">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-500/80 rounded-full flex items-center justify-center mr-3">
                <Calendar className="w-4 h-4 text-white" />
              </div>
              <span className="font-body">Quick online scheduling</span>
            </div>

            <div className="flex items-center text-white/95 text-sm">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500/80 rounded-full flex items-center justify-center mr-3">
                <FileCheck className="w-4 h-4 text-white" />
              </div>
              <span className="font-body">Document verification support</span>
            </div>

            <div className="flex items-center text-white/95 text-sm">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-500/80 rounded-full flex items-center justify-center mr-3">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <span className="font-body">Same-day certificate issuance</span>
            </div>
          </div>
        </div>

        {/* CTA Button Section */}
        <div className="text-center">
          <Link href="/community/online-services/marriage-registry">
            <button className="font-header w-full bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-rose-500/25 transform hover:-translate-y-1 hover:scale-[1.02] border border-white/20 backdrop-blur-sm">
              <span className="flex items-center justify-center">
                <Heart className="w-5 h-5 mr-2" />
                Schedule Appointment
              </span>
            </button>
          </Link>

          {/* Availability Info */}
          <div className="mt-4 bg-black/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
            <p className="font-body text-white/80 text-xs">
              <Clock className="inline w-3 h-3 mr-1" />
              Available Monday - Friday, 9 AM - 4 PM
            </p>
          </div>
        </div>
      </div>

      {/* Subtle Animation Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/0 to-amber-500/0 group-hover:from-rose-500/10 group-hover:to-amber-500/10 transition-all duration-500 pointer-events-none rounded-2xl"></div>
    </div>
  );
};

export default CtaCard;
