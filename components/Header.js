"use client";

export default function LogoSection() {
  return (
    <section className="w-full bg-[#f2f1e8] shadow-sm">
      <div
        className="max-w-6xl mx-auto flex items-start"
        style={{
          height: "90px",           // Smaller header height
          paddingTop: "15px",       // Equal top and left spacing
          paddingLeft: "1px",
        }}
        data-aos="fade-down"
      >
        <a href="/">
          <img
            src="/logo.png"
            alt="Dr. Serena Blake Logo"
            style={{
              height: "90px",       // Bigger logo
            }}
            className="w-auto object-contain"
          />
        </a>
      </div>
    </section>
  );
}
