"use client";

export default function About() {
  return (
    <section
      className="py-20 px-4 w-full mx-auto text-center bg-[#f2f1e8]"
      data-aos="fade"

    >
      <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
        Jennifer Hahm, Ph.D., Licensed Psychologist
      </h2>

      <p className="text-lg text-gray-800 leading-relaxed mb-4">
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="underline hover:text-primary transition"
        >
          jennifer@drjenniferhahm.com
        </a>
      </p>

      <p className="text-lg text-gray-800 leading-relaxed mb-4">
        Phone:{" "}
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="underline hover:text-primary transition"
        >
          (248) 939-8150
        </a>
        &nbsp; | &nbsp; Fax:{" "}
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="underline hover:text-primary transition"
        >
          (248) 939-8190
        </a>
      </p>

      <p className="text-lg text-gray-800 leading-relaxed mb-8">
        28175 Haggerty Rd, Novi, MI 48377
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

      <p className="text-sm text-gray-800">
        © 2025 Jennifer Hahm Ph.D. Psychological Services, PLLC. All rights reserved.
      </p>

      {/* Divider Line */}
      <div className="flex justify-center mt-32 mb-8">
        <div className="w-[300px] h-px bg-gray-500"></div>
      </div>
    </section>
  );
}
