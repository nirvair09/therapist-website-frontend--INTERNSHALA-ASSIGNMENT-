"use client";

export default function QuoteSection() {
  return (
    <section className="relative w-full h-[300px] md:h-[450px] overflow-hidden">
      {/* Background image */}
      <img
        src="/ocean.jpg"
        alt="Ocean background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay tint */}
      <div className="absolute inset-0 bg-white/30"></div>

      {/* Quote text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <blockquote
          className="text-[#333333] text-2xl md:text-3xl font-serif max-w-3xl leading-snug mb-2"
          data-aos="fade-up"
        >
          “Therapy can be a space where you invest in yourself—one of the highest
          forms of self-care.”
        </blockquote>
        <div className="mt-2">
          <cite className="text-[#333333] text-lg md:text-xl font-sans opacity-80 not-italic">
            — Audre Lorde
          </cite>
        </div>
      </div>
    </section>
  );
}
