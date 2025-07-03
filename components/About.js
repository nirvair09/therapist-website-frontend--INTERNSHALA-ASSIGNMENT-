"use client";

import { useState } from "react";
import ContactForm from "./ContactForm";

export default function About() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <section
      className="py-20 px-4 w-full mx-auto text-center bg-[#f2f1e8]"
      data-aos="fade"
    >
      <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
        Dr. Serena Blake, PsyD, Licensed Psychologist
      </h2>

      <p className="text-lg text-gray-800 leading-relaxed mb-4">
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="underline hover:text-primary transition"
        >
          serena@blakepsychology.com
        </a>
      </p>

      <p className="text-lg text-gray-800 leading-relaxed mb-4">
        Phone:{" "}
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="underline hover:text-primary transition"
        >
          (323) 555-0192
        </a>
      </p>

      <p className="text-lg text-gray-800 leading-relaxed mb-8">
        1287 Maplewood Drive, Los Angeles, CA 90026
      </p>

      <div className="flex justify-center gap-6 mb-8 flex-wrap">
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="underline text-gray-800 hover:text-primary transition font-medium"
        >
          Home
        </a>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="underline text-gray-800 hover:text-primary transition font-medium"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="underline text-gray-800 hover:text-primary transition font-medium"
        >
          Good Faith Estimate
        </a>
      </div>

      <button
        onClick={() => setShowContactForm(true)}
        className="bg-blue-200 hover:bg-blue-300 text-gray-700 font-semibold px-6 py-3 rounded transition"
      >
        Contact Dr. Blake
      </button>

      <p className="text-sm text-gray-800 mt-6">
        © 2025 Dr. Serena Blake Psychological Services, PLLC. All rights reserved.
      </p>

      {/* Divider Line */}
      <div className="flex justify-center mt-32 mb-8">
        <div className="w-[300px] h-px bg-gray-500"></div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <ContactForm
          showForm={showContactForm}
          onClose={() => setShowContactForm(false)}
        />
      )}
    </section>
  );
}
