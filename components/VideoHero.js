"use client";

export default function VideoHero() {
  return (
    <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Video wrapper with light pink background and padding */}
      <div className="w-full h-full p-6 md:p-16 bg-pink-100 rounded-xl">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover rounded-xl"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Hero text */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        data-aos="fade-up"
      >
        <h1 className="text-5xl md:text-6xl font-serif text-textDark mb-4">
          Dr. Serena Blake, PsyD
        </h1>
        <h2 className="text-xl md:text-2xl font-light text-textLight mb-8">
          Licensed Clinical Psychologist
        </h2>
        <a
          href="#contact"
          className="inline-block bg-primary hover:bg-pink-200 text-textDark font-semibold px-6 py-3 rounded transition"
        >
          Book a Free Consult
        </a>
      </div>
    </section>
  );
}
