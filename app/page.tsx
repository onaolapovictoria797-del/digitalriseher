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

{/* Hero */}
<section className="px-6 py-20 max-w-6xl mx-auto">
  <div className="relative rounded-2xl overflow-hidden">

    {/* Background Image */}
    <Image
      src="/hero.jpg"
      alt="Girls learning digital skills"
      width={1600}
      height={600}
      className="w-full object-cover h-[420px]"
      priority
    />

    {/* Soft overlay for readability */}
    <div className="absolute inset-0 bg-white/60"></div>

    {/* Content */}
    <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12">

      <div className="max-w-lg">

        {/* Title */}
        {/* Title with Logo */}
<div className="flex items-center gap-3">
  <Image
    src="/logo.png"
    alt="DigitalRiseHer Logo"
    width={60}
    height={60}
  />

  <h1 className="text-3xl md:text-5xl font-bold text-purple-900 leading-tight">
    DigitalRiseHer Initiative
  </h1>
</div>


        {/* Tagline */}
        <p className="mt-3 text-lg md:text-xl italic text-purple-800">
          Empower Her. Ignite Her Future.
        </p>

        {/* Supporting line (THIS is what makes it premium) */}
        <p className="mt-4 text-gray-700 text-base md:text-lg">
          Equipping girls in underserved communities with practical digital skills,
          confidence, and mentorship to thrive in a rapidly changing world.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">

          <button className="px-6 py-3 rounded-2xl bg-pink-600 text-white font-medium hover:bg-pink-700 transition">
            Support the Project
          </button>

          <button className="px-6 py-3 rounded-2xl border border-purple-700 text-purple-900 font-medium hover:bg-purple-50 transition">
            Partner With Us
          </button>

        </div>

      </div>

    </div>
  </div>
</section>


{/* Typing Section */}
<section className="px-6 py-16 max-w-6xl mx-auto">
  <h2 className="text-2xl font-semibold mb-4">
    Learning to Type with Confidence
  </h2>

  <p>
    Through guided practice, the girls improved their typing skills,
    building speed, accuracy, and confidence in using computers.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
    <Image src="/typing1.png" alt="Girls typing" width={400} height={300} className="rounded-xl object-cover w-full h-48" />
    <Image src="/typing2.png" alt="Typing training" width={400} height={300} className="rounded-xl object-cover w-full h-48" />
    <Image src="/typing3.png" alt="Students practicing typing" width={400} height={300} className="rounded-xl object-cover w-full h-48" />
    <Image src="/typing4.png" alt="Students practicing typing" width={400} height={300} className="rounded-xl object-cover w-full h-48" />
  </div>
</section>


{/* Story + Images Section */}
<section className="px-6 py-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

  {/* Images */}
  <div className="grid grid-cols-2 gap-4">
    <Image
      src="/story1.jpg"
      alt="Girls learning typing"
      width={400}
      height={300}
      className="rounded-xl object-cover w-full h-40"
    />
    <Image
      src="/story2.jpg"
      alt="Training session"
      width={400}
      height={300}
      className="rounded-xl object-cover w-full h-40"
    />
    <Image
      src="/story3.jpg"
      alt="Students designing"
      width={400}
      height={300}
      className="rounded-xl object-cover w-full h-40 col-span-2"
    />
  </div>

  {/* Story Card */}
  <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-6 md:p-10 border border-gray-100">

    <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-4">
      A Story of Transformation
    </h2>

    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
      In just seven weeks, from February to March, 47 girls embarked on a life-changing journey into the world of digital skills. They were introduced to typing, Microsoft Word, Excel, and CorelDraw—tools they had never accessed before.
      <br /><br />
      Many started with no prior experience using a computer. But by the end of the program, they were confidently typing, creating documents, and designing simple graphics.
      <br /><br />
      Beyond technical skills, they gained something even more powerful—confidence, curiosity, and the belief that they too belong in a digital future.
    </p>

  </div>

</section>




     
      
        
       

        
{/* Donor & Partner Focus */}
<section className="px-6 py-16 sm:py-20 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-center mb-12">
    Why DigitalRiseHer Exists
  </h2>

  <div className="grid md:grid-cols-3 gap-8">
    {/* Problem */}
    <Card>
      <h3 className="text-xl font-semibold mb-3 text-pink-600">
        The Problem
      </h3>
      <p>
        In many underserved communities in Ogun State, girls grow up without
        access to computers, digital education, or mentors. This digital gap
        limits their confidence, career options, and future opportunities.
      </p>
    </Card>

    {/* Impact */}
  <Card>
  <h3 className="text-xl font-semibold mb-3 text-pink-600">
    Our Impact
  </h3>
  <p>
    DigitalRiseHer equips girls aged 9–18 with practical, hands-on digital
    skills that prepare them for the future. Participants receive guided
    training in typing and digital literacy, introductory graphic design, and
    basic coding, alongside mentorship that builds confidence, creativity, and
    leadership.
  </p>
  <p className="mt-3">
    Beyond skills, the program helps girls see themselves as capable learners,
    problem-solvers, and future leaders in a digital world.
  </p>
</Card>


    {/* Ask */}
    <Card>
      <h3 className="text-xl font-semibold mb-3 text-pink-600">
        How You Can Help
      </h3>
      <p className="mb-3">
        We are seeking support to expand our impact through:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Laptops and tablets</li>
        <li>Internet access and learning tools</li>
        <li>Volunteer mentors and trainers</li>
      </ul>
    </Card>
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
      <section className="px-6 py-16 sm:py-20 text-center bg-pink-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Join Us in Bridging the Digital Divide
        </h2>
        <p className="mb-8">
          Your support helps girls rise into leadership and opportunity.
        </p>
        <Button>Donate or Partner</Button>
      </section>
      {/* Contact / Support */}
<section className="px-6 py-16 sm:py-20 text-center max-w-5xl mx-auto">
  <h2 className="text-3xl font-bold mb-4">
    Contact & Support DigitalRiseHer
  </h2>

  <p className="text-gray-600 mb-12">
    For partnerships, support, or general enquiries, you can reach any of our
    team members below.
  </p>

  <div className="grid gap-8 md:grid-cols-2">

  {/* Phone Numbers */}
  <div className="bg-white rounded-2xl shadow p-6 text-left">
    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
      📞 Contact Numbers
    </h3>
    <ul className="space-y-2 text-gray-700">
      <li>+234 703 550 6591</li>
      <li>+234 902 200 3942</li>
      <li>+234 816 724 4828</li>
    </ul>
  </div>

  {/* Emails */}
  <div className="bg-white rounded-2xl shadow p-6 text-left">
    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
      ✉️ Email Addresses
    </h3>
    <ul className="space-y-2 text-gray-700">
      <li>Ogungbemi_Oluwaseun@yahoo.com</li>
      <li>rhodachinazaekpere@gmail.com</li>
      <li>onaolapovictoria797@gmail.com</li>
    </ul>
  </div>

</div>

{/* Main Contact Actions */}
<div className="mt-12 flex flex-col md:flex-row justify-center gap-6">

  {/* Clickable Main Email */}
  <a
    href="mailto:digitalriseher@gmail.com"
    className="px-6 py-3 rounded-2xl bg-pink-600 text-white font-medium hover:bg-pink-700 transition"
  >
    ✉️ Email DigitalRiseHer
  </a>

  {/* WhatsApp Link */}
  <a
    href="https://wa.me/2348166264948"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 rounded-2xl bg-green-600 text-white font-medium hover:bg-green-700 transition"
  >
    💬 Chat on WhatsApp
  </a>

</div>

</section>


      <footer className="px-6 py-6 text-center text-sm bg-gray-900 text-gray-300">
        © {new Date().getFullYear()} DigitalRiseHer Initiative
      </footer>
    </div>
  );
}
