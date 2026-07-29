import CardCarousel, { type CarouselCard } from "./CardCarousel";

const animations: CarouselCard[] = [
  {
    id: 1,
    title: "Haunted House Ghost",
    description:
      "An immersive and eerie experience combining a 3D-modelled haunted house with interactive features, dynamic lighting and shadows, and animated spotlights. Built with WebGL, Three.js, Blender and Vite.",
    image: "/images/hauntedhouse.webp",
    link: "https://haunted-house-ghost.vercel.app/",
  },
  {
    id: 2,
    title: "Beautiful Fireworks",
    description:
      "An interactive scene mixing dynamic light and shadow effects with a spectacular sunset. Using GLSL shaders and Perlin noise, a single click triggers a colourful firework display over the landscape in real time.",
    image: "/images/fireworks.webp",
    link: "https://fireworks-sunset.vercel.app/",
  },
  {
    id: 3,
    title: "Raging Sea",
    description:
      "An interactive 3D ocean built with Three.js and WebGL. Wave elevation, water colours, depth and animation parameters can all be tuned in real time through a graphical interface, straight in the browser.",
    image: "/images/ragingsea.webp",
    link: "https://raging-sea-project.vercel.app/",
  },
  {
    id: 4,
    title: "Fish Ocean",
    description:
      "A real-time underwater world built with React Three Fiber and Three.js, simulating animated fish, realistic lighting, shadows and fluid water effects in a smooth browser-based 3D experience.",
    image: "/images/fishocean.webp",
    link: "https://fish-ocean.vercel.app/",
  },
  {
    id: 5,
    title: "Studio Ghibli",
    description:
      "An animated web experience inspired by the magical worlds of iconic animation films. Interactive animations, cinematic transitions and dynamic visual effects recreate a sense of wonder directly in the browser.",
    image: "/images/studioghibli.webp",
    link: "https://studiosghibli.netlify.app/",
  },
  {
    id: 6,
    title: "Japan Scenary",
    description:
      "An interactive 3D gallery inspired by my own travels in Japan. Built with Three.js and GSAP, it lets you explore landscapes and travel photography through cinematic camera moves, free navigation, zoom, and a day/night mode.",
    image: "/images/japanscenary.webp",
    link: "https://japan-scenary.netlify.app/",
  },
];

export default function Animations3D() {
  return (
    <section
      id="animations3D"
      aria-labelledby="animations3D-title"
      className="w-full bg-[#F7F9FB] px-4 py-20 sm:px-6 md:px-12 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 flex flex-col items-center text-center md:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#1F7A4D]">
            Creative coding
          </p>

          <h2
            id="animations3D-title"
            className="text-3xl font-bold text-gray-900 md:text-5xl"
          >
            Animations 3D
          </h2>

          <p className="mt-4 max-w-lg text-pretty text-sm text-gray-600 md:text-base">
            Personal experiments in real-time 3D on the web, built with
            Three.js, WebGL, GLSL shaders and Blender.
          </p>
        </header>

        <CardCarousel cards={animations} label="Animations 3D" />
      </div>
    </section>
  );
}
