"use client";

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
  return (
    <section
      className="py-20 px-4 max-w-3xl mx-auto"
      data-aos="fade-up"
    >
      <h2 className="text-3xl md:text-4xl font-serif text-center text-textDark mb-12">
        Frequently Asked Questions
      </h2>

      <div className="space-y-8">
        {faqItems.map((item, index) => (
          <div key={index} className="text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-textDark mb-2">
              {item.question}
            </h3>
            <p className="text-lg text-textLight leading-relaxed">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
