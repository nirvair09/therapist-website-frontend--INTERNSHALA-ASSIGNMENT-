"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "Do you accept insurance?",
    answer: "No, but a superbill is provided for self-submission.",
  },
  {
    question: "Are online sessions available?",
    answer: "Yes—all virtual sessions via Zoom.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "24-hour notice required.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-40 w-full mx-auto bg-[#f2f1e8]" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-12 text-left">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <button
              onClick={() => handleToggle(index)}
              className="w-full text-left text-lg md:text-xl font-semibold text-gray-800 focus:outline-none flex justify-between items-center"
            >
              {item.question}
              <span className="ml-2 text-gray-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-40 mt-2" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Divider Line */}
      <div className="flex justify-center mt-32 mb-8">
        <div className="w-300 h-px bg-gray-500"></div>
      </div>
    </section>
  );
}
