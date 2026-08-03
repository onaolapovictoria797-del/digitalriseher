"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-pink-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="DigitalRiseHer Logo"
            width={50}
            height={50}
          />

          <span
            className="text-2xl text-purple-900 font-semibold"
            style={{ fontFamily: "var(--font-bodoni)" }}
          >
            DigitalRiseHer
          </span>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex gap-10 text-gray-700 font-medium">

          <a href="#home" className="hover:text-pink-600 transition">
            Home
          </a>

          <a href="#story" className="hover:text-pink-600 transition">
            Our Story
          </a>

          <a href="#programs" className="hover:text-pink-600 transition">
            Programmes
          </a>

          <a href="#impact" className="hover:text-pink-600 transition">
            Impact
          </a>

          <a href="#gallery" className="hover:text-pink-600 transition">
            Gallery
          </a>

          <a href="#contact" className="hover:text-pink-600 transition">
            Contact
          </a>

        </nav>

        {/* Donate Button */}
        <a
          href="#donate"
          className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition shadow-lg"
        >
          Donate
        </a>

      </div>
    </header>
  );
}