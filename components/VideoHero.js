"use client";

import { useEffect, useRef } from "react";

export default function VideoHero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden bg-[#f2f1e8]" data-aos="fade"
>
      {/* Video wrapper with padding */}
      <div className="w-full h-full p-6 md:p-16">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Hero text */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        data-aos="fade"

      >
        <h1 className="text-5xl md:text-6xl font-serif text-textDark mb-4">
          Dr. Serena Blake, PsyD
        </h1>
        <h2 className="text-xl md:text-2xl font-light text-textLight mb-8">
          Licensed Clinical Psychologist
        </h2>
        <a
          href="#contact"
          className="inline-block bg-blue-200/50 hover:bg-blue-300/50 text-gray-600 font-semibold px-8 py-3 rounded-full transition"
        >
          Book a Free Consult
        </a>
      </div>
    </section>
  );
}
