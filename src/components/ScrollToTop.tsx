import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    // rAF-throttled and passive so scrolling stays off the critical path.
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setIsVisible(window.scrollY > 400);
        frame = 0;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });

    // Send focus back to the top of the page, not just the scroll position.
    document.getElementById("top")?.focus({ preventScroll: true });
  };

  // Rendered conditionally rather than with the `hidden` attribute: the
  // `flex` utility below would override the attribute's display:none.
  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      className="fixed bottom-6 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#1F7A4D] text-white shadow-lg transition hover:scale-110 hover:bg-[#2F9A63] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1C1D] motion-reduce:hover:scale-100 sm:bottom-8 sm:right-6 sm:h-14 sm:w-14"
    >
      <FaArrowUp size={18} aria-hidden="true" />
    </button>
  );
}
