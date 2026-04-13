import { FaGithub, FaDiscord, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <header
      role="banner"
      aria-label="Introduction section"
      className="relative h-[45vh] md:h-[65vh] w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="absolute inset-0 bg-black/70 pointer-events-none" />

      <nav
        aria-label="Main navigation"
        className="absolute top-6 right-6 z-20 flex gap-6 text-white text-sm md:text-base
             bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl"
      >
        <a
          href="#about"
          className="hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-white"
        >
          About
        </a>
        <a
          href="#skills"
          className="hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skills
        </a>
        <a
          href="#experience"
          className="hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-white"
        >
          Experience
        </a>
        <a
          href="#projets"
          className="hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-white"
        >
          Projets
        </a>
        <a
          href="#contact"
          className="hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-white"
        >
          Contact
        </a>
      </nav>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold bg-black/60 px-4 py-2 rounded">
          HUANG Nicolas
        </h1>

        <h2
          className="mt-4 text-lg md:text-2xl px-4 py-2 rounded"
          style={{ color: "#4ABA78", backgroundColor: "#000000" }}
        >
          Developer Fullstack & integration AI
        </h2>

        <a
          href="/CV_Nicolas.pdf"
          download
          type="application/pdf"
          aria-label="Download Nicolas CV (PDF file)"
          className="
    mt-6 inline-flex items-center justify-center
    px-6 py-3 rounded-full
    bg-green-800 text-white
    text-sm font-semibold
    hover:bg-green-700 transition
    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-white
    focus-visible:ring-offset-2 focus-visible:ring-offset-black
  "
        >
          Resume
          <span className="ml-2 text-xs opacity-80">(PDF)</span>
        </a>
      </div>

      <div
        className="absolute bottom-6 right-6 z-10 flex flex-col gap-4 text-white"
        aria-label="Social media links"
      >
        <a
          href="https://github.com/hNnicolas"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub profile"
          className="hover:opacity-70 hover:scale-110 transition focus:outline-none focus:ring-2 focus:ring-white rounded"
        >
          <FaGithub size={22} aria-hidden="true" />
        </a>

        <a
          href="https://discord.com/channels/@me"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact me on Discord"
          className="hover:opacity-70 hover:scale-110 transition focus:outline-none focus:ring-2 focus:ring-white rounded"
        >
          <FaDiscord size={22} aria-hidden="true" />
        </a>

        <a
          href="https://www.linkedin.com/in/huang-nicolas/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my LinkedIn profile"
          className="hover:opacity-70 hover:scale-110 transition focus:outline-none focus:ring-2 focus:ring-white rounded"
        >
          <FaLinkedin size={22} aria-hidden="true" />
        </a>

        <a
          href="https://www.instagram.com/hfnicolas_/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my Instagram profile"
          className="hover:opacity-70 hover:scale-110 transition focus:outline-none focus:ring-2 focus:ring-white rounded"
        >
          <FaInstagram size={22} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
