"use client";

import Image from "next/image";

export default function Hero() {
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

          <Image
            src="/hero.jpg"
            alt="Girls learning digital skills"
            width={1600}
            height={900}
            priority
            className="w-full rounded-[40px] shadow-2xl object-cover max-h-[650px]"
          />

        </div>

      </div>
    </section>
  );
}