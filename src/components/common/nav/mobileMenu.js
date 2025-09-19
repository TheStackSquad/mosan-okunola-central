// src/components/common/nav/mobileMenu.jsx
import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { mobileMenuVariants } from "@/animation/navbarAnimate";

export default function MobileMenu({
  menuOpen,
  setMenuOpen,
  navItems,
  isAboutOpen,
  toggleAbout,
  closeAbout,
  isCommunityOpen,
  toggleCommunity,
  closeCommunity,
}) {
  const handleMobileLinkClick = () => {
    setMenuOpen(false); // Close all dropdowns when a mobile link is clicked
    closeAbout();
    closeCommunity();
  };

  const renderMobileNavItem = (item) => {
    // Determine which dropdown state to use based on item label
    const isDropdownOpen =
      item.label === "About"
        ? isAboutOpen
        : item.label === "Community"
        ? isCommunityOpen
        : false;
    const toggleDropdown =
      item.label === "About"
        ? toggleAbout
        : item.label === "Community"
        ? toggleCommunity
        : null;
    const hrefBase = item.path;

    if (item.dropdown) {
      return (
        <div key={item.path} className="flex flex-col">
          {/* Main item with dropdown toggle */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (toggleDropdown) {
                toggleDropdown();
              }
            }}
            className="flex items-center justify-between w-full px-0 py-4 text-left transition-colors duration-200 group"
            aria-label={`Toggle ${item.label} dropdown`}
          >
            <span className="text-lg font-normal text-gray-800 group-hover:text-primary transition-colors duration-200">
              {item.label}
            </span>
            <motion.div
              animate={{ rotate: isDropdownOpen ? 90 : 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="text-gray-500"
            >
              <ChevronRight size={18} />
            </motion.div>
          </button>

          {/* Dropdown content */}
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pl-6 pb-2">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.id}
                      href={subItem.path || `${hrefBase}#${subItem.id}`}
                      onClick={handleMobileLinkClick}
                      className="block py-3 text-base font-normal text-gray-600 hover:text-primary transition-colors duration-200"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    } else {
      // Regular nav item without dropdown
      return (
        <Link
          key={item.path}
          href={item.path}
          onClick={handleMobileLinkClick}
          className="block py-4 text-lg font-normal text-gray-800 hover:text-primary transition-colors duration-200"
        >
          {item.label}
        </Link>
      );
    }
  };

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.nav
          className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 px-6 py-6 space-y-1"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={mobileMenuVariants}
        >
          {navItems.map(renderMobileNavItem)}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
