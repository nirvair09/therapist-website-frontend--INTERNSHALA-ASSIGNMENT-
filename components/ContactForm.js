"use client";

import { useState, useRef, useEffect } from "react";

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
  const [showForm, setShowForm] = useState(false);

  const modalRef = useRef(null);

  // close modal on clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShowForm(false);
      }
    }
    if (showForm) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showForm]);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.phone.trim()) newErrors.phone = "Phone is required.";
    if (!form.email.includes("@")) newErrors.email = "Valid email is required.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    if (!form.preferredTime.trim()) newErrors.preferredTime = "Preferred time is required.";
    if (!form.agree) newErrors.agree = "You must agree to be contacted.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setShowForm(false);
        setForm(initialState);
      }, 2000);
    }
  };

  return (
    <main className="w-full bg-[#f2f1e8] py-10 max-h-[200px]">
      <div className="text-center">
        {/* //         className="py-10 px-4 max-w-3xl mx-auto max-h-[200px]" */}

        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-200 hover:bg-blue-300 text-gray-700 font-semibold px-6 py-3 rounded transition"
        >
          Contact Dr. Blake
        </button>
      <p className="text-sm text-gray-800 py-5">
        © 2025 Nirvair__09_codes.INTERNSHALA. All rights reserved.
      </p>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
          {/* The modal content */}
          <div
            ref={modalRef}
            className="bg-[#d7e8f5] w-full max-w-lg p-6 rounded-lg relative text-black shadow-lg"
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-4 text-gray-600 hover:text-black text-2xl cursor-pointer"
            >
              ✕
            </button>

            <h2 className="text-2xl font-serif mb-4 text-center">
              Contact Dr. Blake
            </h2>

            {submitted && (
              <div className="bg-green-200 text-green-800 px-4 py-2 rounded mb-4 text-center">
                Thank you! Your message has been submitted.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { name: "name", label: "Name" },
                { name: "phone", label: "Phone" },
                { name: "email", label: "Email", type: "email" },
                { name: "preferredTime", label: "Preferred Time" },
              ].map((field) => (
                <div key={field.name} className="relative">
                  <input
                    type={field.type || "text"}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder=" "
                    className="
                      peer w-full border-b-2 border-gray-300 focus:border-black 
                      outline-none bg-transparent pt-6 pb-2 px-2
                      cursor-text
                    "
                  />
                  <label
                    className="
                      absolute left-0 top-2 text-gray-500 text-sm 
                      transition-all 
                      peer-placeholder-shown:top-6 peer-placeholder-shown:text-base 
                      peer-focus:top-2 peer-focus:text-sm
                      pointer-events-none
                    "
                  >
                    {field.label}
                  </label>
                  {errors[field.name] && (
                    <p className="text-red-600 text-xs mt-1">{errors[field.name]}</p>
                  )}
                </div>
              ))}

              {/* Textarea */}
              <div className="relative">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder=" "
                  rows={3}
                  className="
                    peer w-full border-b-2 border-gray-300 focus:border-black 
                    outline-none bg-transparent pt-6 pb-2 px-4 resize-none
                    cursor-text
                  "
                />
                <label
                  className="
                    absolute left-0 top-2 text-gray-500 text-sm 
                    transition-all 
                    peer-placeholder-shown:top-6 peer-placeholder-shown:text-base 
                    peer-focus:top-2 peer-focus:text-sm
                    pointer-events-none
                  "
                >
                  What brings you here?
                </label>
                {errors.message && (
                  <p className="text-red-600 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="agree"
                  checked={form.agree}
                  onChange={handleChange}
                  className="mt-1 cursor-pointer"
                />
                <label className="text-gray-700">
                  I agree to be contacted.
                </label>
              </div>
              {errors.agree && (
                <p className="text-red-600 text-xs">{errors.agree}</p>
              )}

              <button
                type="submit"
                className="bg-blue-400 hover:bg-blue-500 text-white font-medium px-6 py-2 rounded w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
