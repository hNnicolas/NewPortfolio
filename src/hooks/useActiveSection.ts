import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view so the navbar can mark the
 * matching link with `aria-current="location"`.
 *
 * Uses IntersectionObserver rather than a scroll listener so nothing runs on
 * the main thread while the user scrolls.
 */
export function useActiveSection(ids: readonly string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    // Ratios are kept per-section so the most visible one always wins, even
    // when several sections overlap the viewport at once.
    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.intersectionRatio);
        }

        let best: string | null = null;
        let bestRatio = 0;

        for (const [id, ratio] of ratios) {
          if (ratio > bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        }

        setActiveId(best);
      },
      {
        // Offset the top by the sticky header height.
        rootMargin: "-72px 0px -40% 0px",
        threshold: [0, 0.15, 0.3, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
