"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const initialState = {
  name: "",
  phone: "",
  email: "",
  preferredContactMethod: "",
  preferredTime: "",
  message: "",
  agree: false,
};

export default function ContactForm({ showForm, onClose }) {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const modalRef = useRef(null);

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleClose();
      }
    }
    if (showForm) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showForm]);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.phone.trim()) newErrors.phone = "Phone is required.";
    if (!form.email.includes("@")) newErrors.email = "Valid email is required.";
    if (!form.preferredContactMethod)
      newErrors.preferredContactMethod = "Please select a preferred contact method.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    if (!form.preferredTime.trim())
      newErrors.preferredTime = "Preferred time is required.";
    if (!form.agree) newErrors.agree = "You must agree to be contacted.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setSubmitted(false);
        handleClose();
        setForm(initialState);
      }, 2000);
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  if (!showForm && !showSuccess) return null;

  if (submitted && showSuccess) {
    return createPortal(
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
        <div className="bg-green-100 text-green-800 px-6 py-8 rounded-lg shadow-xl text-center max-w-sm w-full">
          <div className="text-5xl mb-3">✅</div>
          <p className="text-lg font-semibold mb-1">Message Submitted</p>
          <p className="text-sm">We’ll get back to you shortly.</p>
        </div>
      </div>,
      document.body
    );
  }

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div
        ref={modalRef}
        className={`
          bg-[#e1ded2]
          w-full max-w-lg
          p-6 md:p-8
          rounded-lg
          relative text-gray-800 shadow-2xl
          max-h-[90vh] overflow-y-auto
          transition-all duration-300
          ${isClosing ? "opacity-0 scale-95" : "opacity-100 scale-100"}
        `}
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-4 text-gray-600 hover:text-black text-2xl cursor-pointer"
        >
          ✕
        </button>

        <h2 className="text-2xl md:text-3xl font-serif mb-6 text-center text-gray-800">
          Contact Dr. Blake
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {[{ name: "name", label: "Name" }, { name: "phone", label: "Phone" }, { name: "email", label: "Email", type: "email" }].map((field) => (
            <div key={field.name} className="relative">
              <input
                type={field.type || "text"}
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                placeholder=" "
                className="
                  peer w-full border-b-2 border-gray-400 focus:border-gray-800
                  outline-none bg-transparent pt-6 pb-2 px-2
                  text-sm md:text-base
                "
              />
              <label
                className="
                  absolute left-0 top-2 text-gray-500 text-xs md:text-sm
                  transition-all
                  peer-placeholder-shown:top-6 peer-placeholder-shown:text-base
                  peer-focus:top-2 peer-focus:text-xs md:peer-focus:text-sm
                  pointer-events-none
                "
              >
                {field.label}
              </label>
              {errors[field.name] && (
                <p className="text-red-600 text-xs mt-1">
                  {errors[field.name]}
                </p>
              )}
            </div>
          ))}

          {/* Preferred Contact Method */}
          <div className="relative">
            <select
              name="preferredContactMethod"
              value={form.preferredContactMethod}
              onChange={handleChange}
              className="
                w-full border-b-2 border-gray-400 focus:border-gray-800
                bg-transparent pt-6 pb-2 px-2 text-sm md:text-base cursor-pointer appearance-none
              "
            >
              <option value="">Preferred Contact Method</option>
              <option value="Call">Call</option>
              <option value="Gmail">Gmail</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Zoom">Zoom</option>
            </select>
            {errors.preferredContactMethod && (
              <p className="text-red-600 text-xs mt-1">
                {errors.preferredContactMethod}
              </p>
            )}
          </div>

          {/* Preferred Time */}
          <div className="relative">
            <input
              type="text"
              name="preferredTime"
              value={form.preferredTime}
              onChange={handleChange}
              placeholder=" "
              className="
                peer w-full border-b-2 border-gray-400 focus:border-gray-800
                outline-none bg-transparent pt-6 pb-2 px-2 text-sm md:text-base
              "
            />
            <label
              className="
                absolute left-0 top-2 text-gray-500 text-xs md:text-sm
                transition-all
                peer-placeholder-shown:top-6 peer-placeholder-shown:text-base
                peer-focus:top-2 peer-focus:text-xs md:peer-focus:text-sm
                pointer-events-none
              "
            >
              Preferred Time
            </label>
            <p className="text-gray-600 text-xs mt-1">
              Let us know typically when you’re available for a call or consult.
            </p>
            {errors.preferredTime && (
              <p className="text-red-600 text-xs mt-1">
                {errors.preferredTime}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder=" "
              rows={3}
              className="
                peer w-full border-b-2 border-gray-400 focus:border-gray-800
                outline-none bg-transparent pt-6 pb-2 px-2 resize-none
                text-sm md:text-base
              "
            />
            <label
              className="
                absolute left-0 top-2 text-gray-500 text-xs md:text-sm
                transition-all
                peer-placeholder-shown:top-6 peer-placeholder-shown:text-base
                peer-focus:top-2 peer-focus:text-xs md:peer-focus:text-sm
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
            <label className="text-gray-700 text-xs md:text-sm cursor-default">
              I agree to be contacted.
            </label>
          </div>
          {errors.agree && (
            <p className="text-red-600 text-xs">{errors.agree}</p>
          )}

          <button
            type="submit"
            className="bg-gray-800 hover:bg-gray-700 text-white font-medium px-6 py-3 rounded w-full text-sm md:text-base"
          >
            Submit
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
}
