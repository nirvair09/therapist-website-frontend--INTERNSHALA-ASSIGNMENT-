"use client";

export default function Hero() {
  return (
    <main className="relative w-full py-12 bg-white" data-aos="fade">
      <div
        className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10"
        data-aos="fade"
      >
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
            About Dr. Serena Blake
          </h1>
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            Office Hours: In-person Tue & Thu, 10 AM–6 PM · Virtual via Zoom Mon, Wed & Fri, 1 PM–5 PM
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            Address: 1287 Maplewood Drive, Los Angeles, CA 90026
          </p>
        </div>

        {/* Doctor Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/doc.jpg"
            alt="Dr. Serena Blake"
            className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
      {/* Divider Line */}
      <div className="flex justify-center mt-32 mb-8">
        <div className="w-300 h-px bg-gray-500"></div>
      </div>
    </main>
  );
}
