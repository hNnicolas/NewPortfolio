import { FaGithub, FaDiscord, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiArrowDown } from "react-icons/fi";
import { SOCIAL_LINKS } from "../data/site";

const socials = [
  {
    href: SOCIAL_LINKS.github,
    label: "Nicolas Huang on GitHub (opens in a new tab)",
    Icon: FaGithub,
  },
  {
    href: SOCIAL_LINKS.linkedin,
    label: "Nicolas Huang on LinkedIn (opens in a new tab)",
    Icon: FaLinkedin,
  },
  {
    href: SOCIAL_LINKS.discord,
    label: "Contact Nicolas Huang on Discord (opens in a new tab)",
    Icon: FaDiscord,
  },
  {
    href: SOCIAL_LINKS.instagram,
    label: "Nicolas Huang on Instagram (opens in a new tab)",
    Icon: FaInstagram,
  },
];

export default function Hero() {
  return (
    <header
      id="top"
      tabIndex={-1}
      className="relative flex min-h-[560px] w-full items-center justify-center overflow-hidden px-4 py-28 sm:min-h-[620px] md:min-h-[80vh]"
    >
      {/*
        A real <img> rather than a CSS background so the browser can discover
        it early, decode it off the main thread and treat it as the LCP image.
      */}
      <img
        src="/hero.webp"
        alt=""
        aria-hidden="true"
        width={1536}
        height={1024}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/70 to-[#0E0E0F]"
      />

      {/*
        Watched by the navbar: while this strip is on screen the bar sits over
        the dark hero and can go transparent. Everywhere else it stays solid.
      */}
      <div
        id="hero-sentinel"
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-24"
      />

      <div className="relative flex w-full max-w-3xl flex-col items-center text-center">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#6EDC9B]/40 bg-black/50 px-4 py-1.5 text-xs font-medium text-[#6EDC9B] sm:text-sm">
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-[#6EDC9B]"
          />
          Available for new opportunities
        </p>

        <h1 className="text-balance text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          HUANG Nicolas
        </h1>

        <p className="mt-4 text-lg font-medium text-[#6EDC9B] sm:text-xl md:text-2xl">
          Fullstack Developer &amp; AI Integration
        </p>

        <p className="mt-5 max-w-xl text-pretty text-sm leading-relaxed text-gray-200 sm:text-base">
          I build modern web applications with React, Next.js and TypeScript —
          from AI-powered products to immersive Three.js experiences.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#projets"
            className="inline-flex w-full items-center justify-center rounded-full bg-[#1F7A4D] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#2F9A63] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-auto"
          >
            View my work
          </a>

          <a
            href="/CV_Nicolas.pdf"
            download
            type="application/pdf"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/40 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-auto"
          >
            Download resume
            <span className="ml-2 text-xs opacity-80">(PDF)</span>
          </a>
        </div>

        <ul className="mt-10 flex items-center justify-center gap-5">
          {socials.map(({ href, label, Icon }) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="block rounded-full p-2 text-white transition hover:scale-110 hover:text-[#6EDC9B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black motion-reduce:hover:scale-100"
              >
                <Icon size={22} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#about"
        aria-label="Scroll to the about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 rounded-full p-2 text-white/70 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black md:block"
      >
        <FiArrowDown size={22} aria-hidden="true" className="animate-bounce" />
      </a>
    </header>
  );
}
