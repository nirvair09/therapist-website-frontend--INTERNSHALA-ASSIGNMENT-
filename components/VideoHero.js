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
    <section
      className="relative w-full bg-[#f2f1e8] pt-6 pb-12 px-4 sm:px-6 md:px-8"
      data-aos="fade"
    >
      <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-lg shadow-lg">
        {/* Video element inside a padded box */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto object-cover rounded-lg"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay tint on top of the video */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-lg"></div>

        {/* Foreground Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 pb-8">
          <div className="max-w-3xl w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-3">
              Dr. Serena Blake, PsyD
            </h1>
            <h2 className="text-base sm:text-lg md:text-2xl font-light text-gray-700 mb-6">
              Licensed Clinical Psychologist
            </h2>
            <a
              href="#contact"
              className="inline-block bg-blue-200/60 hover:bg-blue-300/70 text-gray-700 font-semibold px-6 py-3 rounded-full transition"
            >
              Book a Free Consult
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
