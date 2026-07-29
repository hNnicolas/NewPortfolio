import CardCarousel, { type CarouselCard } from "./CardCarousel";

const projects: CarouselCard[] = [
  {
    id: 1,
    title: "WeShareKids — GardePartagée",
    description: `A shared-custody app for separated families: real-time custody calendar, shared tasks, parent-to-parent messaging, child support and expense splitting, plus an encrypted photo and document vault.

It also offers a read-only child access mode secured by a code and a PIN.

Built as a monorepo — a React Native (Expo) app with an Express, Prisma and Socket.io backend on PostgreSQL.`,
    image: "/images/weshare.webp",
    link: "https://weshare-mobile.vercel.app/",
  },
  {
    id: 2,
    title: "HappyKids",
    description: `HappyKids turns the back-to-school supply list into a stress-free task: scan the school list as a PDF or a photo and every item is recognised automatically.

It then compares prices across Amazon, Carrefour, Auchan, Monoprix, Fnac and Cultura and builds the cheapest possible cart, with ready-made lists for each grade level.`,
    image: "/images/happykids.webp",
    link: "https://happykids-frontend.vercel.app/",
  },
  {
    id: 3,
    title: "Assistant Revue de Presse IA",
    description:
      "NewsFoundry is a web application that automatically generates press reviews based on a given theme, using a backend powered by news sources and artificial intelligence.",
    image: "/images/newsfoundry.webp",
    link: "https://p14-news-foundry-frontend.vercel.app/",
  },
  {
    id: 4,
    title: "Explore Norway",
    description:
      "A showcase website designed to make you want to discover Norway — built for lovers of beautiful design, landscapes and plants.",
    image: "/images/norway.webp",
    link: "https://norway-trip.netlify.app/",
  },
  {
    id: 5,
    title: "Recettes du Quotidien",
    description:
      "A dynamic web application for browsing and searching recipes, with a custom search algorithm and filtering by ingredients, appliances and utensils.",
    image: "/images/lespetitsplats.webp",
    link: "https://p5-lespetits-plats.netlify.app/",
  },
  {
    id: 6,
    title: "Ohmyfood",
    description:
      "A responsive web application that lets users explore menus from gourmet restaurants and compose their meals in advance, with CSS-only animations.",
    image: "/images/ohmyfood.webp",
    link: "https://p5-ohmyfood.netlify.app/",
  },
  {
    id: 7,
    title: "Booki",
    description: `A static website for booking accommodation and activities, built with HTML and CSS.

The goal was to reproduce a supplied mockup pixel for pixel while meeting strict responsive design constraints.`,
    image: "/images/booki.webp",
    link: "https://p2-booki.netlify.app/",
  },
  {
    id: 8,
    title: "Print It",
    description: `A dynamic image carousel built for a digital and print solutions company.

It showcases high-definition printing and large-format production for offices, events and professional communication, focusing on a smooth interactive way to present visual content.`,
    image: "/images/printit.webp",
    link: "https://p3print-it.netlify.app/",
  },
];

export default function Projets() {
  return (
    <section
      id="projets"
      aria-labelledby="projets-title"
      className="w-full bg-white px-4 py-20 sm:px-6 md:px-12 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 flex flex-col items-center text-center md:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#1F7A4D]">
            Portfolio
          </p>

          <h2
            id="projets-title"
            className="text-3xl font-bold text-gray-900 md:text-5xl"
          >
            Projects
          </h2>

          <p className="mt-4 max-w-lg text-pretty text-sm text-gray-600 md:text-base">
            A selection of the products I have built — from AI-powered
            applications to fullstack mobile apps and responsive websites.
          </p>
        </header>

        <CardCarousel cards={projects} label="Projects" />
      </div>
    </section>
  );
}
