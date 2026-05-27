"use client";

import { useRef } from "react";
import { FiChevronLeft, FiChevronRight, FiArrowRight } from "react-icons/fi";

type ScrollDirection = "left" | "right";

type Animation3D = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
};

const Animations: Animation3D[] = [
  {
    id: 1,
    title: "Haunted House Ghost",
    description:
      "Haunted House is an immersive and terrifying experience that integrates a 3D-modeled haunted house with interactive features, dynamic lighting and shadow effects, and animated spotlights. This project showcases skills in WebGL, Three.js, Blender, and modern technologies like Vite.",
    image: "/images/hauntedhouse.png",
    link: "https://haunted-house-ghost.vercel.app/",
  },
  {
    id: 2,
    title: "Beautiful fireworks",
    description:
      "Fireworks is an interactive project that combines dynamic light and shadow effects with a spectacular sunset. Using GLSL shaders and Perlin Noise algorithms, the project offers an immersive experience where the user can interact with the scene in real time. A simple click on the screen triggers a colorful firework display, adding to the magic of the landscape.",
    image: "/images/fireworks.png",
    link: "https://fireworks-sunset.vercel.app/",
  },
  {
    id: 3,
    title: "Raging Sea",
    description:
      "Raging Sea is an interactive 3D experience built with Three.js and WebGL, simulating a dynamic and immersive ocean environment. Users can customize wave elevation, water colors, depth, and animation parameters in real time through a graphical interface, showcasing modern real-time 3D capabilities directly in the browser.",
    image: "/images/ragingsea.png",
    link: "https://raging-sea-project.vercel.app/",
  },
  {
    id: 4,
    title: "Fish Ocean",
    description:
      "Fish Ocean is an immersive real-time 3D underwater experience built with React Three Fiber and Three.js. The project simulates a dynamic ocean environment with animated fish, realistic lighting, shadows, and fluid water effects. Users can explore an interactive underwater world where fish movements and environmental animations create a smooth and realistic browser-based 3D experience.",
    image: "/images/fishocean.png",
    link: "https://fish-ocean.vercel.app/",
  },
];

export default function Animation3D() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: ScrollDirection): void => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const card = container.firstElementChild as HTMLElement | null;

    const cardWidth = card ? card.offsetWidth + 24 : 320;

    container.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="animations3D"
      aria-labelledby="animation3D-title"
      aria-describedby="animation3D-desc"
      className="w-full py-24 px-6 md:px-12 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col items-center text-center mb-16">
          <h2
            id="animation3D-title"
            className="text-3xl md:text-5xl font-bold text-gray-900"
          >
            Animations 3D
          </h2>

          <p
            id="animation3D-desc"
            className="mt-4 text-sm md:text-base max-w-md text-gray-600"
          >
            A selection of Animation 3D I built — from AI-powered apps to
            immersive 3D web experiences.
          </p>
        </header>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll animation3D left"
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
          >
            <FiChevronLeft aria-hidden="true" />
          </button>

          <div
            ref={scrollRef}
            role="list"
            aria-label="animation3D list"
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
          >
            {Animations.map((Animations) => (
              <article
                key={Animations.id}
                role="listitem"
                tabIndex={0}
                className="flex flex-col flex-none w-[320px] md:w-[360px] rounded-2xl border border-gray-200 shadow-sm bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
              >
                <div className="relative w-full h-[200px] overflow-hidden rounded-t-2xl">
                  <img
                    src={Animations.image}
                    alt={`Preview of ${Animations.title}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    aria-hidden="true"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.55), transparent)",
                    }}
                  />
                </div>

                <div className="p-5 flex flex-col gap-3 flex-1 bg-[#111111] rounded-b-2xl">
                  <h3 className="text-base font-semibold text-white">
                    {Animations.title}
                  </h3>

                  <p className="text-sm text-gray-300 flex-1">
                    {Animations.description}
                  </p>

                  <a
                    href={Animations.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit site for ${Animations.title}`}
                    className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                  >
                    Visit site <FiArrowRight aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            aria-label="Scroll projects right"
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
          >
            <FiChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>

      <style>{`
        [role="list"]::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
