"use client";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div
        className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4"
        data-aos="fade-down"
      >
        {/* Logo */}
        <a href="/">
          <img
            src="/logo.png"
            alt="Dr. Serena Blake Logo"
            className="h-12 w-auto max-w-[250px] object-contain"
          />
        </a>
      </div>
    </header>
  );
}
