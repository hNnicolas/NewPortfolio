"use client";

import { useState } from "react";
import { FaGithub, FaDiscord, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Contact from ${formData.name}`);

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:huang.nicola@gmail.com?subject=${subject}&body=${body}`;

    setStatus("sent");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main>
      <section
        id="contact"
        aria-labelledby="contact-title"
        className="w-full py-24 px-6 md:px-12 bg-[#f0f4f8]"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <header>
              <h2
                id="contact-title"
                className="text-3xl md:text-4xl font-bold text-gray-900"
              >
                Contact me
              </h2>

              <p className="mt-6 text-base text-gray-800 leading-relaxed">
                Please contact me via this form and I will reply within 24
                hours.
              </p>
            </header>

            <address className="not-italic mt-6 space-y-2 text-gray-800">
              <p>
                Phone:{" "}
                <a
                  href="tel:+33622414099"
                  className="text-gray-900 font-semibold underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 rounded"
                >
                  +33 6 22 41 40 99
                </a>
              </p>

              <p>
                Email:{" "}
                <a
                  href="mailto:huang.nicola@gmail.com"
                  className="text-gray-900 font-semibold underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 rounded"
                >
                  huang.nicola@gmail.com
                </a>
              </p>
            </address>

            <nav aria-label="Social media links" className="mt-10">
              <p className="text-sm font-semibold text-gray-700 mb-4">
                Find me on
              </p>

              <div className="flex gap-5">
                <a
                  href="https://github.com/hNnicolas"
                  aria-label="GitHub profile"
                  className="text-green-700 focus-visible:ring-2 focus-visible:ring-green-700 rounded"
                >
                  <FaGithub size={26} />
                </a>

                <a
                  href="https://discord.com/channels/@me"
                  aria-label="Discord profile"
                  className="text-green-700 focus-visible:ring-2 focus-visible:ring-green-700 rounded"
                >
                  <FaDiscord size={26} />
                </a>

                <a
                  href="https://www.linkedin.com/in/huang-nicolas/"
                  aria-label="LinkedIn profile"
                  className="text-green-700 focus-visible:ring-2 focus-visible:ring-green-700 rounded"
                >
                  <FaLinkedin size={26} />
                </a>

                <a
                  href="https://www.instagram.com/hfnicolas_/"
                  aria-label="Instagram profile"
                  className="text-green-700 focus-visible:ring-2 focus-visible:ring-green-700 rounded"
                >
                  <FaInstagram size={26} />
                </a>
              </div>
            </nav>
          </div>

          <form
            onSubmit={handleSubmit}
            aria-label="Contact form"
            className="flex flex-col gap-5"
          >
            <fieldset className="flex flex-col gap-5">
              <legend className="sr-only">Contact form fields</legend>

              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-900"
                >
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 w-full px-5 py-3 rounded-full border border-gray-300 text-gray-900 focus-visible:ring-2 focus-visible:ring-green-700"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-900"
                >
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full px-5 py-3 rounded-full border border-gray-300 text-gray-900 focus-visible:ring-2 focus-visible:ring-green-700"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-900"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 w-full px-5 py-4 rounded-2xl border border-gray-300 text-gray-900 resize-none focus-visible:ring-2 focus-visible:ring-green-700"
                />
              </div>
            </fieldset>

            <div aria-live="polite" role="status">
              {status === "sent" && (
                <p className="text-green-700 font-medium">
                  Message sent successfully!
                </p>
              )}

              {status === "error" && (
                <p className="text-red-700 font-medium">
                  Something went wrong.
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="px-8 py-3 rounded-full bg-green-700 text-white font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-700 disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
