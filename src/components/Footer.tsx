import { FaGithub, FaDiscord, FaLinkedin, FaInstagram } from "react-icons/fa";
import { CONTACT, NAV_ITEMS, SOCIAL_LINKS } from "../data/site";

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

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#1C1C1D] px-4 py-12 sm:px-6 md:px-12">
      <h2 className="sr-only">Site footer</h2>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3">
        <div>
          <p className="text-base font-bold text-white">
            HUANG<span className="text-[#6EDC9B]">.</span>Nicolas
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
            Fullstack developer based in Paris, building modern web applications
            and interactive 3D experiences.
          </p>
        </div>

        <nav aria-label="Footer">
          <h3 className="mb-4 text-sm font-semibold text-white">Navigation</h3>

          <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-2.5">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="rounded text-sm text-white/80 transition hover:text-[#6EDC9B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6EDC9B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1C1D]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3
            id="footer-socials"
            className="mb-4 text-sm font-semibold text-white"
          >
            Follow my work
          </h3>

          <ul
            role="list"
            aria-labelledby="footer-socials"
            className="flex flex-wrap gap-3"
          >
            {socials.map(({ href, label, Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-[#6EDC9B] hover:text-[#6EDC9B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6EDC9B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1C1D]"
                >
                  <Icon size={20} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/CV_Nicolas.pdf"
            download
            className="mt-5 inline-block rounded-full bg-[#1F7A4D] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#2F9A63] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1C1D]"
          >
            Download resume (PDF)
          </a>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Nicolas Huang. All rights reserved.
      </p>
    </footer>
  );
}
