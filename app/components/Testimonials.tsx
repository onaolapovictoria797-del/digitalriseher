"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Oke Funmilayo",
    text: "Before joining DigitalRiseHer, I didn't know much about computers. Today, I can type confidently, create documents, and even design graphics. This programme has opened my eyes to a world of possibilities.",
    color: "bg-pink-50",
    rotate: "-rotate-2",
  },
  {
    name: "Grace Ameh",
    text: "DigitalRiseHer helped me discover skills I never knew I had. The trainers were patient, the environment was welcoming, and I now feel confident using technology and pursuing my dreams.",
    color: "bg-purple-50",
    rotate: "rotate-2",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-pink-50 to-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2
          className="text-5xl text-center text-purple-900"
          style={{ fontFamily: "var(--font-bodoni)" }}
        >
          Voices of Change
        </h2>

        <p className="text-center text-gray-600 mt-5 max-w-2xl mx-auto">
          Real stories from girls whose confidence and digital skills have
          been transformed through DigitalRiseHer.
        </p>

        <div className="grid md:grid-cols-2 gap-14 mt-20">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${item.color} ${item.rotate}
              relative rounded-[30px]
              p-10 shadow-2xl
              border border-pink-100`}
            >

              {/* Tape */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-36 h-8 bg-pink-300 opacity-70 rounded-sm rotate-2"></div>

              <p className="text-6xl text-pink-500">“</p>

              <p className="text-gray-700 leading-8 text-lg">
                {item.text}
              </p>

              <div className="mt-10">

                <h3
                  className="text-3xl text-purple-900"
                  style={{ fontFamily: "var(--font-bodoni)" }}
                >
                  {item.name}
                </h3>

                <p className="text-pink-600">
                  Programme Participant
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}