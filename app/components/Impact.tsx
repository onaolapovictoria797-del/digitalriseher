"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "47+",
    title: "Girls Trained",
    description: "Completed our digital literacy programme.",
  },
  {
    number: "126+",
    title: "Girls Reached",
    description: "Reached through sensitization and mentorship.",
  },
  {
    number: "3",
    title: "Communities",
    description: "Abese, Ifo and Papalanto, Ogun State, Nigeria.",
  },
  {
    number: "10",
    title: "Weeks",
    description: "Of intensive digital skills training.",
  },
];

export default function Impact() {
  return (
    <section
      id="impact"
      className="py-24 bg-gradient-to-b from-white to-pink-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <h2
            className="text-4xl md:text-5xl text-center text-purple-900"
            style={{ fontFamily: "var(--font-bodoni)" }}
          >
            Our Impact
          </h2>

          <p className="text-center text-gray-600 mt-5 max-w-2xl mx-auto">
            Every number represents girls whose confidence, digital skills,
            and future opportunities have been transformed through
            DigitalRiseHer.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 mt-20">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-[35px] shadow-xl p-10 text-center hover:-translate-y-2 transition border border-pink-100"
            >

              <h3 className="text-6xl font-bold text-pink-600">
                {item.number}
              </h3>

              <h4 className="mt-4 text-2xl font-semibold text-purple-900">
                {item.title}
              </h4>

              <p className="mt-4 text-gray-600 leading-7">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}