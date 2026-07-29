import { useCallback, useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiArrowRight } from "react-icons/fi";

export type CarouselCard = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
};

type Props = {
  cards: CarouselCard[];
  /** Accessible name for the scrollable region, e.g. "Projects". */
  label: string;
};

export default function CardCarousel({ cards, label }: Props) {
  const listId = `${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-carousel`;
  const scrollRef = useRef<HTMLUListElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    // 1px of slack absorbs sub-pixel rounding at the extremes.
    setCanScrollLeft(scrollLeft > 1);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    updateScrollState();

    container.addEventListener("scroll", updateScrollState, { passive: true });
    const observer = new ResizeObserver(updateScrollState);
    observer.observe(container);

    return () => {
      container.removeEventListener("scroll", updateScrollState);
      observer.disconnect();
    };
  }, [updateScrollState]);

  const scroll = useCallback((direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : 320;

    container.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }, []);

  // Arrow / Home / End move the carousel when the list itself has focus.
  const onKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    const container = scrollRef.current;
    if (!container) return;

    switch (event.key) {
      case "ArrowLeft":
        event.preventDefault();
        scroll("left");
        break;
      case "ArrowRight":
        event.preventDefault();
        scroll("right");
        break;
      case "Home":
        event.preventDefault();
        container.scrollTo({ left: 0, behavior: "smooth" });
        break;
      case "End":
        event.preventDefault();
        container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
        break;
    }
  };

  const arrowClass =
    "absolute top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 shadow-md transition hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F7A4D] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30 sm:flex";

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        aria-label={`Scroll ${label} backwards`}
        aria-controls={listId}
        className={`${arrowClass} -left-3 xl:-left-14`}
      >
        <FiChevronLeft size={20} aria-hidden="true" />
      </button>

      <ul
        id={listId}
        ref={scrollRef}
        tabIndex={0}
        role="list"
        aria-label={`${label} — use the left and right arrow keys to browse`}
        onKeyDown={onKeyDown}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-1 pb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F7A4D] focus-visible:ring-offset-4"
      >
        {cards.map((card) => (
          <li
            key={card.id}
            className="flex w-[min(19rem,80vw)] flex-none snap-start sm:w-[20rem] md:w-[22rem]"
          >
            <article className="group flex flex-1 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:hover:translate-y-0">
              <div className="relative h-[190px] w-full overflow-hidden sm:h-[200px]">
                <img
                  src={card.image}
                  alt={`Screenshot of the ${card.title} website`}
                  width={1280}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105 motion-reduce:group-hover:scale-100"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent"
                />
              </div>

              <div className="flex flex-1 flex-col gap-3 bg-[#111111] p-5">
                <h3 className="text-base font-semibold text-white">
                  {card.title}
                </h3>

                <p className="flex-1 whitespace-pre-line text-sm leading-relaxed text-gray-300">
                  {card.description}
                </p>

                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex w-fit items-center gap-1.5 rounded text-sm font-medium text-[#6EDC9B] transition hover:gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
                >
                  Visit {card.title}
                  <span className="sr-only"> (opens in a new tab)</span>
                  <FiArrowRight aria-hidden="true" />
                </a>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        aria-label={`Scroll ${label} forwards`}
        aria-controls={listId}
        className={`${arrowClass} -right-3 xl:-right-14`}
      >
        <FiChevronRight size={20} aria-hidden="true" />
      </button>
    </div>
  );
}
