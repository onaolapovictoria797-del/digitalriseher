"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
export default function Hero() {
  const images = [
  "/hero.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg",
  "/hero5.jpg",
  "/hero6.jpg",
  "/hero7.jpg",
];


const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, 5000); // Changes every 5 seconds

  return () => clearInterval(interval);
}, []);
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-pink-50 via-white to-purple-50 pt-16 pb-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Tagline */}
        <p className="text-sm uppercase tracking-[0.3em] text-pink-700 font-semibold text-center">
          Empower Her. Ignite Her Future.
        </p>

        {/* Heading */}
        <h1
          className="mt-6 text-4xl md:text-6xl text-center text-purple-900 leading-tight max-w-4xl mx-auto"
          style={{ fontFamily: "var(--font-bodoni)" }}
        >
          Empowering Girls to Thrive in a Digital World
        </h1>

        {/* Description */}
        <p className="mt-8 text-lg text-gray-600 text-center max-w-3xl mx-auto leading-8">
          Through hands-on digital skills, mentorship and leadership,
          DigitalRiseHer equips girls in underserved communities with the
          confidence to unlock opportunities and shape their future.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-5 flex-wrap">

          <a
            href="#donate"
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full transition shadow-lg"
          >
            Donate Now
          </a>

          <a
            href="#programs"
            className="border-2 border-pink-600 text-pink-700 px-8 py-4 rounded-full hover:bg-pink-50 transition"
          >
            Explore Programmes
          </a>

        </div>

        {/* Hero Image */}
        <div className="mt-16">

          <AnimatePresence mode="wait">

  <motion.div
    key={currentImage}
    initial={{ opacity: 0, scale: 1 }}
    animate={{ opacity: 1, scale: 1.05 }}
    exit={{ opacity: 0 }}
    transition={{
      opacity: { duration: 1.2 },
      scale: { duration: 5 },
    }}
    className="w-full"
  >

    <Image
      src={images[currentImage]}
      alt="DigitalRiseHer"
      width={700}
      height={700}
      priority
      className="rounded-[40px] shadow-2xl object-cover w-full h-[420px] md:h-[520px] lg:h-[650px]"
    />

  </motion.div>

</AnimatePresence>


        </div>

      </div>
    </section>
  );
}