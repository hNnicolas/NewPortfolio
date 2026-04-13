export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="w-full bg-[#1C1C1D] border-t border-white/10 py-10 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-6 text-white text-sm">
            <li>
              <a
                href="#about"
                className="hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-white rounded"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-white rounded"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-white rounded"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projets"
                className="hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-white rounded"
              >
                Projets
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-white rounded"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <p className="text-white/70 text-sm text-center md:text-right">
          © {new Date().getFullYear()} Nicolas Huang. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
