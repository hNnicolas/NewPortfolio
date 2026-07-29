import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NAV_ITEMS } from "../data/site";
import { useActiveSection } from "../hooks/useActiveSection";

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // Solid by default: a wrong guess here would leave white links on a light
  // section, so the transparent treatment is opt-in, never the fallback.
  const [isOverHero, setIsOverHero] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  // Go transparent only while the top strip of the hero is on screen.
  useEffect(() => {
    const sentinel = document.getElementById("hero-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsOverHero(entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // Escape closes the mobile menu and hands focus back to the toggle.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      toggleRef.current?.focus();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  // Keep focus inside the open menu so keyboard users can't tab behind it.
  useEffect(() => {
    if (!isOpen) return;

    const onFocusIn = (event: FocusEvent) => {
      const target = event.target as Node;
      if (panelRef.current?.contains(target) || toggleRef.current === target) {
        return;
      }
      panelRef.current?.querySelector("a")?.focus();
    };

    document.addEventListener("focusin", onFocusIn);
    return () => document.removeEventListener("focusin", onFocusIn);
  }, [isOpen]);

  const linkBase =
    "relative rounded px-1 py-1 transition-colors hover:text-[#6EDC9B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6EDC9B] focus-visible:ring-offset-2 focus-visible:ring-offset-black";

  /*
   * Even over the hero the bar keeps a real dark background rather than going
   * fully transparent: `bg-transparent` makes contrast checkers resolve the
   * white links against the white page and report failures, and it left the
   * links unreadable over any light content behind them.
   */
  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isOverHero && !isOpen
          ? "bg-[#0E0E0F]/85 backdrop-blur-sm"
          : "bg-[#0E0E0F]/95 shadow-lg backdrop-blur-md"
      }`}
    >
      {/*
        Mobile keeps the toggle flush right; from lg the links are the only
        content left in the bar, so they get centred rather than left-aligned.
      */}
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-end px-4 py-3 sm:px-6 lg:justify-center lg:px-8 lg:py-4 xl:px-12"
      >
        {/* Desktop navigation */}
        <ul className="hidden items-center text-sm text-white lg:flex lg:gap-6 xl:gap-9">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;

            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={`${linkBase} ${
                    isActive ? "text-[#6EDC9B]" : "text-white"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 -bottom-1 h-0.5 origin-left rounded-full bg-[#6EDC9B] transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close main menu" : "Open main menu"}
          className="-mr-2 rounded p-2 text-white transition hover:text-[#6EDC9B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6EDC9B] focus-visible:ring-offset-2 focus-visible:ring-offset-black lg:hidden"
        >
          {isOpen ? (
            <FiX size={24} aria-hidden="true" />
          ) : (
            <FiMenu size={24} aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!isOpen}
        className="border-t border-white/10 bg-[#0E0E0F]/98 backdrop-blur-md lg:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;

            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? "location" : undefined}
                  className={`block rounded border-l-2 px-3 py-3 text-base transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6EDC9B] focus-visible:ring-inset ${
                    isActive
                      ? "border-[#6EDC9B] bg-white/5 text-[#6EDC9B]"
                      : "border-transparent text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
