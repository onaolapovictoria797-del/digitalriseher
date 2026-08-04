"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const programmes = [
  
    {
  image: "/images/programmes/digital-literacy.jpg",
  title: "Digital Literacy",
  status: "Completed",
  text: "Introducing girls to computers, digital tools and technology with confidence.",
},
  
  {
    image: "/images/programmes/typing-skills.jpg",
  title: "Typing Skills",
  status: "Completed",
  text: "...",
},
  {
    image: "/images/programmes/microsoft-office.jpg",
  title: "Microsoft Office Suite",
  status: "Completed",
  text: "...",
},
  {
    image: "/images/programmes/graphic-design.jpg",
  title: "Graphic Design",
  status: "Completed",
  text: "...",
},
  {
    image: "/images/programmes/mentorship.jpg",
  title: "Mentorship",
  status: "Ongoing",
  text: "...",
},
  {
    image: "/images/programmes/coding.jpg",
  title: "Coding",
  status: "Coming Soon",
  text: "...",
  }, 
];

export default function Programmes() {
  return (
    <section
      id="programmes"
      className="py-24 bg-white"
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
            Our Programmes
          </h2>

          <p className="text-center text-gray-600 mt-5 max-w-3xl mx-auto">
            Every programme is designed to equip girls with practical digital
            skills, confidence and opportunities for a brighter future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {programmes.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-50 to-white rounded-[35px] shadow-lg p-10 hover:-translate-y-2 transition border border-pink-100"
            >

              <div className="overflow-hidden rounded-[25px]">
  <Image
    src={item.image}
    alt={item.title}
    width={500}
    height={300}
    className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
  />
</div>

              <div className="mt-6 flex items-center justify-between">

                <h3 className="text-2xl font-bold text-purple-900">
                  {item.title}
                </h3>

                <span
  className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
    item.status === "Completed"
      ? "bg-green-100 text-green-700"
      : item.status === "Ongoing"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-purple-100 text-purple-700"
  }`}
>
  {item.status === "Completed"
    ? "✓"
    : item.status === "Ongoing"
    ? "•"
    : "✨"}
</span>
              </div>

              <p className="mt-4 text-gray-600 leading-7">
                {item.text}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}