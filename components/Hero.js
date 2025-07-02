"use client";

export default function Hero() {
  return (
    <main className="relative w-full py-12 bg-white" data-aos="fade"
>
      <div
        className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10"
        data-aos="fade"

      >
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
            About Dr. Jennifer Hahm
          </h1>
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            Finding time and opportunities to care for ourselves can be incredibly challenging in today's busy and demanding world. I believe therapy offers a dedicated space for self-care, providing the support and tools needed to improve this essential practice. Therapy can help individuals identify and clarify their goals, values, and the various elements that contribute to their well-being, recognizing that these aspects vary from person to person.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            I am dedicated to supporting this journey by offering active listening, psychological knowledge, empathy, compassion, and insights into behavioral patterns and tendencies. I hold a master’s degree in Clinical Psychology from the Michigan School of Psychology (2012) and a Ph.D. in Counseling Psychology from Western Michigan University (2018). My experience spans therapy and psychological assessment in psychiatric inpatient units, academic medical centers, universities, and outpatient practice settings.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            My therapeutic approach is primarily psychodynamic and humanistic, enriched by influences from positive psychology, existentialism, family systems theory, acceptance and commitment concepts, and mindfulness practices.
          </p>
        </div>

        {/* Doctor Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/doc.jpg"
            alt="Dr. Jennifer Hahm"
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
