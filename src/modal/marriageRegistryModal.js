// src/modal/marriageRegistryModal.js
"use client";

import { useEffect } from "react";

export default function MarriageRegistryModal({
  isVisible,
  onClose,
  coupleDetails,
  referenceNumber,
  selectedDate,
  selectedTime,
}) {
  useEffect(() => {
    if (isVisible) {
      // Auto-close modal after 3 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      // Add click listener to document body
      const handleBodyClick = (e) => {
        // Close modal if clicking outside the modal content
        if (e.target.classList.contains("modal-backdrop")) {
          onClose();
        }
      };

      document.addEventListener("click", handleBodyClick);

      // Cleanup
      return () => {
        clearTimeout(timer);
        document.removeEventListener("click", handleBodyClick);
      };
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (time) => {
    if (!time) return "";
    return time;
  };

  return (
    <div className="modal-backdrop fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-rose-500 text-white p-6 rounded-t-2xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors duration-200"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-serif font-bold mb-2">
              Booking Confirmed!
            </h2>
            <p className="text-blue-100">
              Your appointment has been successfully scheduled
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {/* Reference Number */}
          <div className="bg-gradient-to-r from-blue-50 to-rose-50 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-600 mb-1">Reference Number</p>
            <p className="text-xl font-bold text-gray-800 font-mono">
              {referenceNumber}
            </p>
          </div>

          {/* Appointment Details */}
          <div className="border-t border-gray-100 pt-4">
            <h3 className="font-semibold text-gray-800 mb-3">
              Appointment Details
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="font-medium text-gray-800">
                  {formatDate(selectedDate)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Time:</span>
                <span className="font-medium text-gray-800">
                  {formatTime(selectedTime)}
                </span>
              </div>
            </div>
          </div>

          {/* Couple Details */}
          <div className="border-t border-gray-100 pt-4">
            <h3 className="font-semibold text-gray-800 mb-3">
              Registered Parties
            </h3>
            <div className="space-y-3 text-sm">
              {/* Partner 1 */}
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-medium text-gray-800">
                  {coupleDetails.partner1Name}
                </p>
                <p className="text-gray-600">{coupleDetails.partner1Email}</p>
              </div>

              {/* Partner 2 */}
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="font-medium text-gray-800">
                  {coupleDetails.partner2Name}
                </p>
                <p className="text-gray-600">{coupleDetails.partner2Email}</p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="border-t border-gray-100 pt-4">
            <h3 className="font-semibold text-gray-800 mb-2">Next Steps</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Bring valid identification documents</li>
              <li>• Arrive 15 minutes before your appointment</li>
              <li>• Keep your reference number for future correspondence</li>
            </ul>
          </div>

          {/* Auto-close notice */}
          <div className="text-center text-xs text-gray-500 pt-2 border-t border-gray-100">
            This modal will auto-close in a few seconds or click anywhere to
            close
          </div>
        </div>
      </div>
    </div>
  );
}
