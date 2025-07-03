"use client";

export default function Services() {
  return (
    <div className="bg-[#f2f1e8] w-full" data-aos="fade">
      <section className="py-20 px-4 max-w-6xl mx-auto" data-aos="fade">
        {/* Intro Text */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-2xl md:text-3xl text-[#333333] leading-snug font-sans mb-4">
            Therapy can be a space where you invest in yourself—one of the highest forms of self-care.
          </p>
          <p className="text-base md:text-lg text-[#333333] leading-relaxed font-sans">
            You may be led to therapy by anxiety, depression, relationship stress, past or recent trauma, grief and loss, self-esteem issues, or challenges with family, parenting, or parental relationships. Whatever the source of your stress, you don't have to face it alone. Therapy offers you the time and space to work toward wellness and peace.
          </p>
        </div>

        {/* Divider Line */}
        <div className="flex justify-center mt-32 mb-8">
          <div className="w-300 h-px bg-gray-500"></div>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-serif text-[#333333] mb-40 text-center">
          Areas of Focus
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/service1.jpg"
              alt="Anxiety & Stress Management"
              className="w-64 h-64 rounded-full object-cover mb-6"
            />
            <h3 className="text-xl md:text-2xl font-serif text-[#333333] mb-4">
              Anxiety & Stress Management
            </h3>
            <p className="text-base text-[#333333] leading-relaxed font-sans">
              Dr. Blake provides tools and strategies to reduce anxiety and manage stress. Through evidence-based therapies, clients learn to reframe anxious thoughts and develop healthier coping mechanisms for a more peaceful life.
            </p>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/service2.jpg"
              alt="Relationship Counseling"
              className="w-64 h-64 rounded-full object-cover mb-6"
            />
            <h3 className="text-xl md:text-2xl font-serif text-[#333333] mb-4">
              Relationship Counseling
            </h3>
            <p className="text-base text-[#333333] leading-relaxed font-sans">
              Whether facing communication issues or emotional distance, Dr. Blake helps individuals and couples improve relationship dynamics, foster connection, and build fulfilling partnerships.
            </p>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/service3.jpg"
              alt="Trauma Recovery"
              className="w-64 h-64 rounded-full object-cover mb-6"
            />
            <h3 className="text-xl md:text-2xl font-serif text-[#333333] mb-4">
              Trauma Recovery
            </h3>
            <p className="text-base text-[#333333] leading-relaxed font-sans">
              Dr. Blake creates a safe space to process trauma, using gentle and effective approaches to help clients heal from painful past experiences, regain confidence, and find resilience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
