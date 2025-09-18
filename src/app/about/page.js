"use client";

// src/app/about/page.js
import React, { Suspense } from "react";
import { motion } from "framer-motion";
import {
  useScrollTrigger,
  sectionAnimations,
  shouldReduceMotion,
} from "@/animation/aboutAnimate";

// Lazy load components for better performance
const Overview = React.lazy(() => import("@/components/about/Overview"));
const Biography = React.lazy(() => import("@/components/about/Biography"));
const Leadership = React.lazy(() => import("@/components/about/Leadership"));
const Structure = React.lazy(() => import("@/components/about/Structure"));
const Achievements = React.lazy(() =>
  import("@/components/about/Achievements")
);

// Loading component for Suspense
const SectionLoader = ({ className = "" }) => (
  <div className={`animate-pulse ${className}`}>
    <div className="space-y-4">
      <div className="h-8 bg-gray-200 rounded-lg w-1/3"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  </div>
);

// Individual section wrapper with scroll trigger
const AnimatedSection = ({
  children,
  id,
  className = "",
  animation = sectionAnimations.overview.container,
}) => {
  const { ref, isInView } = useScrollTrigger(0.15, "0px 0px -100px 0px");

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animation}
      // Add will-change for better performance
      style={{ willChange: isInView ? "transform, opacity" : "auto" }}
    >
      {children}
    </motion.section>
  );
};

// Page header component
const PageHeader = () => {
  const { ref, isInView } = useScrollTrigger(0.2);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionAnimations.overview.title}
      className="text-center py-12 bg-gradient-to-r from-blue-50 to-green-50"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About Mosan-Okunola LCDA
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Building Tomorrow&apos;s Community Today Through Visionary Leadership
          and Inclusive Governance
        </p>
      </div>
    </motion.div>
  );
};

// Navigation dots for smooth scrolling
const NavigationDots = ({ activeSection, setActiveSection }) => {
  const sections = [
    { id: "overview", label: "Overview" },
    { id: "biography", label: "Biography" },
    { id: "leadership", label: "Leadership" },
    { id: "structure", label: "Structure" },
    { id: "achievements", label: "Achievements" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: shouldReduceMotion() ? "auto" : "smooth",
        block: "start",
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <nav className="space-y-3">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`block w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === id
                ? "bg-blue-600 w-4 h-4"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Maps to ${label} section`}
            title={label}
          />
        ))}
      </nav>
    </div>
  );
};

// Main About Page Component
export default function AboutPage() {
  const [activeSection, setActiveSection] = React.useState("overview");
  const [isLoading, setIsLoading] = React.useState(true);

  // Track active section based on scroll position
  React.useEffect(() => {
    const observerOptions = {
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = [
      "overview",
      "biography",
      "leadership",
      "structure",
      "achievements",
    ];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Handle loading state
  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  // **NEW LOGIC: Handle scroll-to-hash on page load**
  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      // Use a timeout to ensure all components are rendered
      // before attempting to scroll to the element.
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: shouldReduceMotion() ? "auto" : "smooth",
            block: "start",
          });
          setActiveSection(id);
        }
      }, 500); // 500ms delay to ensure elements are in the DOM
    }
  }, []); // Empty dependency array ensures this runs once on mount

  // Optimize performance with memo for static navigation
  const MemoizedNavigationDots = React.memo(NavigationDots);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="animate-pulse">
          <div className="h-64 bg-gradient-to-r from-gray-200 to-gray-300"></div>
          <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
            {[1, 2, 3, 4, 5].map((i) => (
              <SectionLoader key={i} className="min-h-[400px]" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <PageHeader />

      {/* Navigation Dots */}
      <MemoizedNavigationDots
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {/* Overview Section */}
        <AnimatedSection
          id="overview"
          animation={sectionAnimations.overview.container}
          className="scroll-mt-20"
        >
          <Suspense fallback={<SectionLoader />}>
            <Overview />
          </Suspense>
        </AnimatedSection>

        {/* Biography Section */}
        <AnimatedSection
          id="biography"
          animation={sectionAnimations.biography.container}
          className="scroll-mt-20"
        >
          <Suspense fallback={<SectionLoader />}>
            <Biography />
          </Suspense>
        </AnimatedSection>

        {/* Leadership Section */}
        <AnimatedSection
          id="leadership"
          animation={sectionAnimations.leadership.container}
          className="scroll-mt-20"
        >
          <Suspense fallback={<SectionLoader />}>
            <Leadership />
          </Suspense>
        </AnimatedSection>

        {/* Structure Section */}
        <AnimatedSection
          id="structure"
          animation={sectionAnimations.structure.container}
          className="scroll-mt-20"
        >
          <Suspense fallback={<SectionLoader />}>
            <Structure />
          </Suspense>
        </AnimatedSection>

        {/* Achievements Section */}
        <AnimatedSection
          id="achievements"
          animation={sectionAnimations.achievements.container}
          className="scroll-mt-20"
        >
          <Suspense fallback={<SectionLoader />}>
            <Achievements />
          </Suspense>
        </AnimatedSection>
      </main>
    </div>
  );
}
