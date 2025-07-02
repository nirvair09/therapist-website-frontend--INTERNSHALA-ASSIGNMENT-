"use client";

export default function Services() {
  return (
    <div className="bg-[#f2f1e8] w-full" data-aos="fade"
>
      <section className="py-20 px-4 max-w-6xl mx-auto" data-aos="fade"
>
        {/* Intro Text */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-2xl md:text-3xl text-[#333333] leading-snug font-sans mb-4">
            Therapy can be a space where you invest in yourself—one of the highest forms of self-care.
          </p>
          <p className="text-base md:text-lg text-[#333333] leading-relaxed font-sans">
            You may be led to therapy by anxiety, depression, relationship stress,
            past or recent trauma, grief and loss, self-esteem issues, or challenges
            with family, parenting, or parental relationships. Whatever the source of
            your stress, you don't have to face it alone. Therapy offers you the time
            and space to work toward wellness and peace.
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
              alt="Therapy for Healthcare Providers and Students"
              className="w-64 h-64 rounded-full object-cover mb-6"
            />
            <h3 className="text-xl md:text-2xl font-serif text-[#333333] mb-4">
              Therapy for Healthcare Providers and Students
            </h3>
            <p className="text-base text-[#333333] leading-relaxed font-sans">
              The care you provide for others may be driving you to seek therapy,
              whether due to burnout, compassion fatigue, imposter syndrome,
              people-pleasing tendencies, or perfectionism. Whether you're in
              pre-professional school, undergoing training, or reflecting on a
              long career in healthcare, we can address the unique stressors of
              your professional environment along with any challenges you may
              be facing in other areas of your life.
            </p>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/service2.jpg"
              alt="Therapy for Trauma and Grief"
              className="w-64 h-64 rounded-full object-cover mb-6"
            />
            <h3 className="text-xl md:text-2xl font-serif text-[#333333] mb-4">
              Therapy for Trauma and Grief
            </h3>
            <p className="text-base text-[#333333] leading-relaxed font-sans">
              Life's challenges, whether a difficult childhood, a traumatic event
              or series of events, or the loss of someone or something deeply
              meaningful, can lead to profound experiences of trauma and grief.
              Therapy offers a supportive space to process these experiences,
              care for yourself amidst painful thoughts and emotions, and work
              toward a sense of grounding and meaning.
            </p>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/service3.jpg"
              alt="Therapy for Second Generation Individuals In Immigrant Families"
              className="w-64 h-64 rounded-full object-cover mb-6"
            />
            <h3 className="text-xl md:text-2xl font-serif text-[#333333] mb-4">
              Therapy for Second Generation Individuals In Immigrant Families
            </h3>
            <p className="text-base text-[#333333] leading-relaxed font-sans">
              Second-generation individuals in immigrant families, born in the
              U.S. to at least one parent born abroad, often navigate the
              complexities of multiple cultures and diverse expectations. This
              experience can bring challenges such as feeling like a foreigner
              in your own country and navigating strained family relationships.
              Therapy offers a supportive space to explore and process this
              unique aspect of your identity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
