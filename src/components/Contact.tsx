import { useState } from "react";
import { CONTACT } from "../data/site";
import MailInTransit from "./MailInTransit";

const fieldClass =
  "mt-1.5 w-full rounded-2xl border border-gray-300 bg-white px-5 py-3 text-gray-900 transition placeholder:text-gray-400 focus:border-[#1F7A4D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F7A4D]";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
    setStatus("idle");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;

    setStatus("sent");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="w-full bg-[#f0f4f8] px-4 py-20 sm:px-6 md:px-12 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#1F7A4D]">
            Get in touch
          </p>

          <h2
            id="contact-title"
            className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl"
          >
            Contact me
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-800">
            Please contact me via this form and I will reply within 24 hours.
          </p>

          <address className="mt-6 space-y-2 not-italic text-gray-800">
            <p>
              Phone:{" "}
              <a
                href={`tel:${CONTACT.phone}`}
                className="rounded font-semibold text-gray-900 underline underline-offset-2 hover:text-[#1F7A4D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F7A4D]"
              >
                {CONTACT.phoneDisplay}
              </a>
            </p>
          </address>

          {/*
            Only shown once the form has been completed and handed to the mail
            client — a permanent loop here would pull the eye off the form.
          */}
          {status === "sent" && <MailInTransit />}
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <h3 className="sr-only">Contact form</h3>

          <div>
            <label htmlFor="name" className="text-sm font-medium text-gray-900">
              Name <span aria-hidden="true">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              aria-required="true"
              value={formData.name}
              onChange={handleChange}
              className={fieldClass}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-900"
            >
              Email <span aria-hidden="true">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              aria-required="true"
              aria-describedby="email-hint"
              value={formData.email}
              onChange={handleChange}
              className={fieldClass}
            />
            <p id="email-hint" className="mt-1.5 text-xs text-gray-600">
              I will only use this address to reply to you.
            </p>
          </div>

          <div>
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-900"
            >
              Message <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              aria-required="true"
              value={formData.message}
              onChange={handleChange}
              className={`${fieldClass} resize-y`}
            />
          </div>

          <p className="text-xs text-gray-600">
            Fields marked with an asterisk are required.
          </p>

          <p role="status" aria-live="polite" className="min-h-[1.5rem]">
            {status === "sent" && (
              <span className="font-medium text-[#1F7A4D]">
                Your email app should now be open with the message ready to
                send.
              </span>
            )}
          </p>

          <button
            type="submit"
            className="w-full rounded-full bg-[#1F7A4D] px-8 py-3 font-semibold text-white transition hover:bg-[#2F9A63] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F7A4D] focus-visible:ring-offset-2 sm:w-auto sm:self-start"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
