import { FiMail, FiMapPin, FiInbox } from "react-icons/fi";

/**
 * Decorative illustration for the contact section: a message travelling from
 * the visitor to my inbox. Purely presentational, so it is hidden from
 * assistive technology and carries no text of its own.
 */
export default function MailInTransit() {
  return (
    <div className="mt-10 flex justify-center md:justify-start" aria-hidden="true">
      <div className="mail-stage">
        <svg
          viewBox="0 0 320 170"
          className="absolute inset-0 h-full w-full overflow-visible"
          focusable="false"
        >
          {/* Flight path */}
          <path
            d="M 24 132 C 96 26, 224 26, 296 100"
            fill="none"
            stroke="#1F7A4D"
            strokeOpacity="0.35"
            strokeWidth="2"
            strokeLinecap="round"
            className="mail-track"
          />

          {/* Departure and arrival anchors */}
          <circle cx="24" cy="132" r="6" fill="#1F7A4D" />
          <circle
            cx="296"
            cy="100"
            r="10"
            fill="#1F7A4D"
            className="mail-landing"
          />
          <circle cx="296" cy="100" r="6" fill="#1F7A4D" />
        </svg>

        {/* Endpoint badges */}
        <span className="absolute left-0 top-[142px] flex -translate-x-1 items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-500">
          <FiMapPin size={13} aria-hidden="true" />
          You
        </span>

        <span className="absolute right-0 top-[112px] flex translate-x-1 items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-500">
          <FiInbox size={13} aria-hidden="true" />
          My inbox
        </span>

        {/* The travelling envelope */}
        <span className="mail-envelope bg-[#1F7A4D] text-white shadow-lg shadow-[#1F7A4D]/30">
          <FiMail size={20} aria-hidden="true" />
        </span>
      </div>
    </div>
  );
}
