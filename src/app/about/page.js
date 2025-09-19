"use client";

// src/app/about/page.js
import React, { Suspense, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Lazy load components for better performance
const Overview = React.lazy(() => import("@/components/about/Overview"));
const Biography = React.lazy(() => import("@/components/about/Biography"));
const Leadership = React.lazy(() => import("@/components/about/Leadership"));
const Structure = React.lazy(() => import("@/components/about/Structure"));
const Achievements = React.lazy(() =>
  import("@/components/about/Achievements")
);

// Simple, performance-friendly animations
const simpleAnimations = {
  // Option 1: Minimal fade-in (recommended for LCP)
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.4, ease: "easeOut" },
  },

  // Option 2: Subtle fade + slide
  fadeSlide: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
  },

  // Option 3: Gentle scale
  fadeScale: {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Loading component for Suspense
const SectionLoader = ({ className = "" }) => (
  <motion.div
    className={`animate-pulse ${className}`}
    {...simpleAnimations.fadeIn}
  >
    <div className="space-y-4">
      <div className="h-8 bg-gray-200 rounded-lg w-1/3"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  </motion.div>
);

// Simplified animated wrapper for each section
const SimpleAnimatedSection = ({
  children,
  id,
  className = "",
  animationType = "fadeSlide",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Only animate once for performance
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial="initial"
      animate={isVisible ? "animate" : "initial"}
      variants={simpleAnimations[animationType]}
    >
      {children}
    </motion.section>
  );
};

// Page header component with simple animation
const PageHeader = () => {
  return (
    <motion.div
      {...simpleAnimations.fadeIn}
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

// Navigation dots with active state
const NavigationDots = ({ activeSection }) => {
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
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.div
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
    >
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
            aria-label={`Navigate to ${label} section`}
            title={label}
          />
        ))}
      </nav>
    </motion.div>
  );
};

// Main About Page Component
export default function AboutPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [isLoading, setIsLoading] = useState(true);

  // Simple intersection observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -50% 0px", threshold: 0 }
    );

    // Observe all sections after a brief delay
    const observeSections = () => {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => observer.observe(section));
    };

    setTimeout(observeSections, 300);

    return () => observer.disconnect();
  }, []);

  // Handle loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll-to-hash on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          setActiveSection(id);
        }
      }, 400);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <motion.div {...simpleAnimations.fadeIn}>
          <div className="h-64 bg-gradient-to-r from-gray-200 to-gray-300"></div>
          <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
            {[1, 2, 3, 4, 5].map((i) => (
              <SectionLoader key={i} className="min-h-[400px]" />
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <PageHeader />

      {/* Navigation Dots */}
      <NavigationDots activeSection={activeSection} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {/* Overview Section */}
        <SimpleAnimatedSection
          id="overview"
          animationType="fadeIn" // Fastest for LCP
          className="scroll-mt-20"
        >
          <Suspense fallback={<SectionLoader />}>
            <Overview />
          </Suspense>
        </SimpleAnimatedSection>

        {/* Biography Section */}
        <SimpleAnimatedSection
          id="biography"
          animationType="fadeSlide"
          className="scroll-mt-20"
        >
          <Suspense fallback={<SectionLoader />}>
            <Biography />
          </Suspense>
        </SimpleAnimatedSection>

        {/* Leadership Section */}
        <SimpleAnimatedSection
          id="leadership"
          animationType="fadeScale"
          className="scroll-mt-20"
        >
          <Suspense fallback={<SectionLoader />}>
            <Leadership />
          </Suspense>
        </SimpleAnimatedSection>

        {/* Structure Section */}
        <SimpleAnimatedSection
          id="structure"
          animationType="fadeSlide"
          className="scroll-mt-20"
        >
          <Suspense fallback={<SectionLoader />}>
            <Structure />
          </Suspense>
        </SimpleAnimatedSection>

        {/* Achievements Section */}
        <SimpleAnimatedSection
          id="achievements"
          animationType="fadeScale"
          className="scroll-mt-20"
        >
          <Suspense fallback={<SectionLoader />}>
            <Achievements />
          </Suspense>
        </SimpleAnimatedSection>
      </main>
    </div>
  );
}
