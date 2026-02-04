"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function RegistrationPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after a short delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="relative bg-gradient-to-br from-gray-900 to-black border border-blue-500/50 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.5)] p-8 max-w-md w-full text-center">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
          Join the ISD Lab!
        </h2>
        
        <p className="text-gray-300 mb-6">
          Are you passionate about Robotics and AI? Join our team of innovators and builders.
        </p>

        <a
          href="https://forms.gle/vhiEA4ricRfKnvjJ6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)] hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] transition-all duration-300 transform hover:scale-105"
        >
          Register Now
        </a>
      </div>
    </div>
  );
}
