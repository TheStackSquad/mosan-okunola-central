// src/contexts/dropdownContext.jsx
"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

const DropdownContext = createContext();

export function DropdownProvider({ children }) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = useCallback((dropdownId) => {
    setActiveDropdown((current) =>
      current === dropdownId ? null : dropdownId
    );
  }, []);

  const closeDropdown = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const isDropdownOpen = useCallback(
    (dropdownId) => activeDropdown === dropdownId,
    [activeDropdown]
  );

  return (
    <DropdownContext.Provider
      value={{
        activeDropdown,
        toggleDropdown,
        closeDropdown,
        isDropdownOpen,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
}

export function useDropdown() {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("useDropdown must be used within a DropdownProvider");
  }
  return context;
}
