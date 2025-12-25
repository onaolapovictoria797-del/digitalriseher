"use client";

import Image from "next/image";
import { motion } from "framer-motion";


/* Simple UI components (no imports needed) */
function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-6 py-2 rounded-2xl bg-pink-600 text-white hover:bg-pink-700 transition">
      {children}
    </button>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <div className="bg-white rounded-2xl shadow p-6">{children}</div>;
}

export default function DigitalRiseHerWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white text-gray-800">
      {/* Hero */}
      <section className="px-6 py-20 text-center max-w-5xl mx-auto">
        <Image
    src="/logo.png"
    alt="DigitalRiseHer Logo"
    width={120}
    height={120}
    className="mx-auto mb-6"
  />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          DigitalRiseHer Initiative
        </motion.h1>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-lg md:text-xl italic text-gray-600 max-w-2xl mx-auto mb-10"
>
  Empowering young girls in underserved communities through digital skills.
</motion.p>


       

        <div className="flex justify-center gap-4">
          <Button>Support the Project</Button>
          <Button>Partner With Us</Button>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <Card>
          <h2 className="text-2xl font-semibold mb-4">About DigitalRiseHer</h2>
          <p>
            DigitalRiseHer is a girl-centered digital literacy initiative reaching
            60 girls across Abese, Papalanto, and Orile-Ifo in Ogun State.
          </p>
        </Card>

        <Card>
          <h2 className="text-2xl font-semibold mb-4">Why It Matters</h2>
          <p>
            Millions of girls lack access to technology. DigitalRiseHer bridges
            this gap through skills training, mentorship, and community
            engagement.
          </p>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-20 text-center bg-pink-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Join Us in Bridging the Digital Divide
        </h2>
        <p className="mb-8">
          Your support helps girls rise into leadership and opportunity.
        </p>
        <Button>Donate or Partner</Button>
      </section>

      <footer className="px-6 py-6 text-center text-sm bg-gray-900 text-gray-300">
        © {new Date().getFullYear()} DigitalRiseHer Initiative
      </footer>
    </div>
  );
}
