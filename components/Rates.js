"use client";

export default function Rates() {
  return (
    <div className="bg-[#95b0b1] w-full" data-aos="fade">
      <section className="py-20 px-4 max-w-3xl mx-auto text-center" data-aos="fade">
        <h2 className="text-3xl md:text-4xl font-serif text-[#333333] mb-8">
          Rates and Insurance
        </h2>

        <div className="space-y-4 text-[#333333] text-base md:text-lg leading-relaxed font-sans">
          <p>Individual Session Fee - $200</p>
          <p>Couples Session Fee - $240</p>
          <p>I accept both private pay and insurance. I am in-network with BCBS and Aetna.</p>
          <p>For out-of-network plans, I’ve partnered with Mentaya to help you check your eligibility for reimbursement for my services.</p>
        </div>
      </section>
    </div>
  );
}
