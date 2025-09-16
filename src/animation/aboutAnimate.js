// src/animation/aboutAnimate.js
import React from "react";

// Performance-optimized animation configurations
// Uses lightweight Intersection Observer for scroll triggers
// Respects prefers-reduced-motion

// Check for reduced motion preference
export const shouldReduceMotion = () => {
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  return false; // Default to false (no reduced motion) on the server
};

// Base animation variants - subtle and performance-friendly
export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: shouldReduceMotion() ? 0 : 30,
    transition: { duration: 0 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: shouldReduceMotion() ? 0.2 : 0.6,
      ease: [0.25, 0.46, 0.45, 0.94], // Custom bezier for smooth feel
      when: "beforeChildren",
    },
  },
};

export const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: shouldReduceMotion() ? 0 : -40,
    transition: { duration: 0 },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: shouldReduceMotion() ? 0.2 : 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const fadeInRight = {
  hidden: {
    opacity: 0,
    x: shouldReduceMotion() ? 0 : 40,
    transition: { duration: 0 },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: shouldReduceMotion() ? 0.2 : 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: shouldReduceMotion() ? 1 : 0.95,
    transition: { duration: 0 },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: shouldReduceMotion() ? 0.2 : 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Staggered container variants for lists and grids
export const staggerContainer = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: shouldReduceMotion() ? 0.05 : 0.15,
      delayChildren: shouldReduceMotion() ? 0.1 : 0.2,
      when: "beforeChildren",
    },
  },
};

// Individual stagger item
export const staggerItem = {
  hidden: {
    opacity: 0,
    y: shouldReduceMotion() ? 0 : 20,
    transition: { duration: 0 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: shouldReduceMotion() ? 0.2 : 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Card hover animations (subtle)
export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  hover: {
    scale: shouldReduceMotion() ? 1 : 1.02,
    y: shouldReduceMotion() ? 0 : -4,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Section reveal animations with performance optimization
export const sectionReveal = {
  hidden: {
    opacity: 0,
    y: shouldReduceMotion() ? 0 : 50,
    transition: { duration: 0 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: shouldReduceMotion() ? 0.3 : 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      when: "beforeChildren",
    },
  },
};

// Intersection Observer hook for scroll triggers
export const useScrollTrigger = (
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px"
) => {
  const [isInView, setIsInView] = React.useState(false);
  const [hasTriggered, setHasTriggered] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Create intersection observer with performance-optimized options
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggered) {
            setIsInView(true);
            setHasTriggered(true);
            // Disconnect after first trigger for performance
            observer.unobserve(element);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, hasTriggered]);

  return { ref, isInView, hasTriggered };
};

// Custom hook for managing animation controls with performance consideration
export const useAnimationControls = () => {
  const [shouldAnimate, setShouldAnimate] = React.useState(false);

  React.useEffect(() => {
    // Check if animations should be enabled based on device performance
    const checkPerformance = () => {
      const connection =
        navigator.connection ||
        navigator.mozConnection ||
        navigator.webkitConnection;
      const isSlowConnection =
        connection &&
        (connection.effectiveType === "slow-2g" ||
          connection.effectiveType === "2g");
      const isLowEndDevice = navigator.hardwareConcurrency <= 4;

      // Disable complex animations on slow connections or low-end devices
      if (isSlowConnection || isLowEndDevice || shouldReduceMotion()) {
        setShouldAnimate(false);
      } else {
        setShouldAnimate(true);
      }
    };

    checkPerformance();

    // Listen for connection changes
    if (navigator.connection) {
      navigator.connection.addEventListener("change", checkPerformance);
      return () =>
        navigator.connection.removeEventListener("change", checkPerformance);
    }
  }, []);

  return shouldAnimate;
};

// Optimized viewport detection for lazy loading animations
export const useInViewport = (options = {}) => {
  const [inViewport, setInViewport] = React.useState(false);
  const [hasBeenInViewport, setHasBeenInViewport] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Destructure the options here to use them in the dependency array
    const { threshold = 0.1, rootMargin = "50px", ...restOptions } = options;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setInViewport(isIntersecting);

        if (isIntersecting) {
          setHasBeenInViewport(true);
        }
      },
      {
        threshold,
        rootMargin,
        ...restOptions,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options]); // ⬅️ Add 'options' as a dependency to ensure the effect re-runs if the object reference changes

  return { ref, inViewport, hasBeenInViewport };
};

// Pre-defined animation configurations for different sections
export const sectionAnimations = {
  overview: {
    container: sectionReveal,
    title: fadeInUp,
    content: fadeInLeft,
    image: fadeInRight,
  },

  biography: {
    container: staggerContainer,
    items: staggerItem,
    hero: scaleIn,
    timeline: fadeInUp,
  },

  leadership: {
    container: staggerContainer,
    cards: staggerItem,
    cardHover: cardHover,
  },

  structure: {
    container: sectionReveal,
    orgChart: scaleIn,
    departments: staggerContainer,
    departmentItems: staggerItem,
  },

  achievements: {
    container: staggerContainer,
    metrics: staggerItem,
    projects: fadeInUp,
    awards: scaleIn,
  },
};

// Performance monitoring utilities
export const animationPerformance = {
  // Track animation performance
  startTime: null,

  start() {
    this.startTime = performance.now();
  },

  end(animationName) {
    if (this.startTime) {
      const duration = performance.now() - this.startTime;
      // Only log in development
      if (process.env.NODE_ENV === "development") {
        console.log(
          `Animation "${animationName}" took ${duration.toFixed(2)}ms`
        );
      }
      this.startTime = null;
    }
  },

  // Check if device can handle complex animations
  canHandleComplexAnimations() {
    const connection = navigator.connection;
    const hardwareConcurrency = navigator.hardwareConcurrency || 4;

    // Simple heuristic for animation capability
    const isSlowConnection =
      connection &&
      connection.effectiveType &&
      ["slow-2g", "2g"].includes(connection.effectiveType);
    const isLowEndDevice = hardwareConcurrency <= 2;
    const prefersReducedMotion = shouldReduceMotion();

    return !isSlowConnection && !isLowEndDevice && !prefersReducedMotion;
  },
};

const animations = {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
  staggerItem,
  cardHover,
  sectionReveal,
  sectionAnimations,
  useScrollTrigger,
  useAnimationControls,
  useInViewport,
  shouldReduceMotion,
  animationPerformance,
};

export default animations;
