"use client";

export default function Services() {
  return (
    <div className="bg-[#f2f1e8] w-full" data-aos="fade">
      <section className="py-20 px-4 md:px-12 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-2xl md:text-3xl text-[#333333] leading-snug font-sans mb-4">
            Therapy can be a space where you invest in yourself—one of the highest forms of self-care.
          </p>
          <p className="text-base md:text-lg text-[#333333] leading-relaxed font-sans">
            You may be led to therapy by anxiety, depression, relationship stress, past or recent trauma, grief and loss, self-esteem issues, or challenges with family, parenting, or parental relationships. Whatever the source of your stress, you don't have to face it alone.
          </p>
        </div>

        <h2 className="text-3xl md:text-4xl font-serif text-[#333333] mb-20 text-center">
          Areas of Focus
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[ 
            {
              title: "Therapy for Healthcare Providers and Students",
              text: "The care you provide for others may be driving you to seek therapy, whether due to burnout, compassion fatigue, imposter syndrome, people-pleasing tendencies, or perfectionism.",
              image: "/service1.jpg",
            },
            {
              title: "Therapy for Trauma and Grief",
              text: "Life's challenges, whether a difficult childhood, a traumatic event, or the loss of someone or something deeply meaningful, can lead to profound experiences of trauma and grief.",
              image: "/service2.jpg",
            },
            {
              title: "Therapy for Second Generation Individuals",
              text: "Second-generation individuals in immigrant families often navigate the complexities of multiple cultures and diverse expectations, leading to identity challenges and family stress.",
              image: "/service3.jpg",
            },
          ].map((service, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <img
                src={service.image}
                alt={service.title}
                className="w-full max-w-sm h-auto rounded-full object-cover mb-6"
              />
              <h3 className="text-xl md:text-2xl font-serif text-[#333333] mb-4">
                {service.title}
              </h3>
              <p className="text-base text-[#333333] leading-relaxed font-sans">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
