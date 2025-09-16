//src/app/page.js
'use client';

import HomeCarousel from "@/components/home/homeCarousel";
import CardContainer from "@/components/home/cardContainer";
import CtaCard from "@/components/home/ctaCard";
import { carouselSlides, cardsData } from "@/data/homeData";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Main container for the entire page content */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Carousel Container */}
        <div className="w-full lg:w-2/5">
          <HomeCarousel slides={carouselSlides} />
        </div>

        {/* Right Section (Cards & CTA) */}
        <div className="w-full lg:w-3/5 flex flex-col gap-6">
          {/* Cards Container */}
          <div className="flex-1">
            <CardContainer cardsData={cardsData} />
          </div>

          {/* CTA Container */}
          <div className="flex-grow-0">
            <CtaCard />
          </div>
        </div>
      </div>
    </main>
  );
}