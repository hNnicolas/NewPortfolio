"use client";

import { useRef } from "react";
import { FiChevronLeft, FiChevronRight, FiArrowRight } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Assistant Revue de Presse IA",
    description:
      "NewsFoundry is a web application that automatically generates press reviews based on a given theme, using a backend powered by news sources and artificial intelligence.",
    image: "/images/newsfoundry.png",
    link: "https://p14-news-foundry-frontend.vercel.app/",
  },
  {
    id: 2,
    title: "Explore Norway",
    description:
      "This is a beautiful website to discovery Norway for lovers of beautiful design and plants.",
    image: "/images/norway.png",
    link: "https://norway-trip.netlify.app/",
  },
  {
    id: 3,
    title: "Recettes du Quotidien",
    description:
      "This project aims to create a dynamic web application for displaying and searching for recipes.",
    image: "/images/lespetitsplats.png",
    link: "https://p5-lespetits-plats.netlify.app/",
  },
  {
    id: 4,
    title: "Ohmyfood",
    description:
      "Ohmyfood is a responsive web application that allows users to explore menus from gourmet restaurants and plan their meals in advance.",
    image: "/images/ohmyfood.png",
    link: "https://p5-ohmyfood.netlify.app/",
  },
];

export default function Projets() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const card = scrollRef.current.firstElementChild;
    const cardWidth = card ? card.offsetWidth + 24 : 320;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projets"
      aria-labelledby="projets-title"
      aria-describedby="projets-desc"
      className="w-full py-24 px-6 md:px-12 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col items-center text-center mb-16">
          <h2
            id="projets-title"
            className="text-3xl md:text-5xl font-bold text-gray-900"
          >
            Projets
          </h2>

          <p
            id="projets-desc"
            className="mt-4 text-sm md:text-base max-w-md text-gray-600"
          >
            A selection of projects I built from AI-powered apps to immersive
            web experiences.
          </p>
        </header>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll projects left"
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
          >
            <FiChevronLeft aria-hidden="true" />
          </button>

          <div
            ref={scrollRef}
            role="list"
            aria-label="Projects list"
            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
          >
            {projects.map((project) => (
              <article
                key={project.id}
                role="listitem"
                tabIndex={0}
                className="flex flex-col flex-none w-[320px] md:w-[360px] rounded-2xl border border-gray-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 bg-white"
              >
                {/* IMAGE */}
                <div className="relative w-full h-[200px] overflow-hidden rounded-t-2xl">
                  <img
                    src={project.image}
                    alt={`Preview of ${project.title}`}
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
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-300 flex-1">
                    {project.description}
                  </p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit site for ${project.title}`}
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
