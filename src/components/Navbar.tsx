"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center mr-auto h-full">
            <Link href="/" className="flex items-center gap-2">
            <Image
  src="/logo.svg"
  alt="ISD Lab Logo"
  width={30}
  height={30}
  className="h-[70px] w-[70px]"
/>


              <span className="text-lg font-bold">ISD Lab</span>
            </Link>
          </div>
          <ul className="hidden md:flex gap-8 text-base font-medium">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/initiatives">Initiatives</Link></li>
            <li><Link href="/team">Team</Link></li>
            {/* <li><Link href="/publications">Publications</Link></li> */}
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/latest-news">Latest News</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
          <div className="md:hidden ml-auto">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black text-white px-4 pb-4">
          <ul className="flex flex-col gap-4">
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/initiatives" onClick={() => setIsOpen(false)}>Initiatives</Link></li>
            <li><Link href="/team" onClick={() => setIsOpen(false)}>Team</Link></li>
            {/* <li><Link href="/publications" onClick={() => setIsOpen(false)}>Publications</Link></li> */}
            <li><Link href="/events" onClick={() => setIsOpen(false)}>Events</Link></li>
            <li><Link href="/latest-news" onClick={() => setIsOpen(false)}>Latest News</Link></li>
            <li><Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}