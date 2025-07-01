"use client";

import { useState } from "react";

const initialState = {
  name: "",
  phone: "",
  email: "",
  message: "",
  preferredTime: "",
  agree: false,
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.phone.trim()) newErrors.phone = "Phone is required.";
    if (!form.email.includes("@")) newErrors.email = "Valid email is required.";
    if (!form.message.trim()) newErrors.message = "Please enter a message.";
    if (!form.preferredTime.trim())
      newErrors.preferredTime = "Preferred time is required.";
    if (!form.agree) newErrors.agree = "You must agree to be contacted.";

    return newErrors;
  };

  const handleChange = (e) => {
    const target = e.target;
    const { name, type } = target;

    const value =
      type === "checkbox" ? target.checked : target.value;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", form);
      setSubmitted(true);
      setForm(initialState);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 max-w-3xl mx-auto"
      data-aos="fade-up"
    >
      <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6 text-center">
        Contact Dr. Blake
      </h2>

      {submitted && (
        <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-6 text-center">
          Thank you! Your message has been submitted.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-medium text-gray-700">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
          />
          {errors.name && (
            <p className="text-lg text-textLight leading-relaxed mb-4">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label className="block font-medium text-gray-700">Phone</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
          />
          {errors.phone && (
            <p className="text-lg text-textLight leading-relaxed mb-4">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label className="block font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
          />
          {errors.email && (
            <p className="text-lg text-textLight leading-relaxed mb-4">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label className="block font-medium text-gray-700">
            What brings you here?
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
            rows={4}
          />
          {errors.message && (
            <p className="text-lg text-textLight leading-relaxed mb-4">
              {errors.message}
            </p>
          )}
        </div>

        <div>
          <label className="block font-medium text-gray-700">
            Preferred time to reach you
          </label>
          <input
            name="preferredTime"
            value={form.preferredTime}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
          />
          {errors.preferredTime && (
            <p className="text-lg text-textLight leading-relaxed mb-4">
              {errors.preferredTime}
            </p>
          )}
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
            className="mt-1"
          />
          <label className="text-gray-700">
            I agree to be contacted.
          </label>
        </div>
        {errors.agree && (
          <p className="text-lg text-textLight leading-relaxed mb-4">
            {errors.agree}
          </p>
        )}

        <button
          type="submit"
          className="bg-primary hover:bg-pink-200 text-gray-900 font-medium px-6 py-3 rounded transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
