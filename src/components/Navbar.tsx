"use client"; // only needed if you use useState (App Router only)

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-20 items-center"> {/* Increased height */}
          {/* Logo */}
          <div className="flex items-center mr-auto"> {/* Push logo to the left */}
            <Image
              src="/logo.svg" // Path to your logo in the public folder
              alt="ISD Lab Logo"
              width={60} // Increased width
              height={60} // Increased height
              className="pr-4"
            />
            {/* <span className="text-2xl font-bold">ISD Lab</span> */}
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-base font-medium"> {/* Increased text size */}
            <li><Link href="/">Home</Link></li>
            <li><Link href="/initiatives">Initiatives</Link></li>
            <li><Link href="/team">Team</Link></li>
            <li><Link href="/publications">Publications</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto"> {/* Push menu button to the right */}
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-4 pb-4">
          <ul className="flex flex-col gap-4">
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/initiatives" onClick={() => setIsOpen(false)}>Initiatives</Link></li>
            <li><Link href="/team" onClick={() => setIsOpen(false)}>Team</Link></li>
            <li><Link href="/publications" onClick={() => setIsOpen(false)}>Publications</Link></li>
            <li><Link href="/events" onClick={() => setIsOpen(false)}>Events</Link></li>
            <li><Link href="/products" onClick={() => setIsOpen(false)}>Products</Link></li>
            <li><Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}