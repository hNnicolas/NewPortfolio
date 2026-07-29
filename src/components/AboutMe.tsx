import { FaArrowRight } from "react-icons/fa";
import { FiCode, FiBriefcase, FiLayers, FiBox } from "react-icons/fi";

const highlights = [
  {
    href: "#skills",
    Icon: FiCode,
    title: "Skills",
    description:
      "Learn about my skills in programming, find info on my language knowledge and more.",
  },
  {
    href: "#experience",
    Icon: FiBriefcase,
    title: "Experience",
    description:
      "Get to know the timeline of my education and find out more about my working experience.",
  },
  {
    href: "#projets",
    Icon: FiLayers,
    title: "Projects",
    description:
      "My portfolio is my biggest pride. Check my previous work and get to know my skills better.",
  },
  {
    href: "#animations3D",
    Icon: FiBox,
    title: "Animations 3D",
    description:
      "My personal projects when I want to have fun and experiment with 3D web development using Three.js and Blender.",
  },
];

function getAge(birthDate: string): number {
  const today = new Date();
  const birth = new Date(birthDate);

  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  const dayDiff = today.getDate() - birth.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
}

export default function AboutMe() {
  return (
    <section id="about" aria-labelledby="about-title" className="w-full bg-white">
      <div className="px-4 py-20 sm:px-6 md:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#1F7A4D]">
              About me
            </p>

            <h2
              id="about-title"
              className="text-3xl font-bold leading-tight text-[#2F855A] sm:text-4xl md:text-5xl"
            >
              I code,
              <br />
              therefore I am.
            </h2>

            <p className="mt-8 text-base leading-relaxed text-gray-700 md:text-lg">
              I started my career in the restaurant industry before
              transitioning into IT, driven by a strong passion for technology.
              I gained solid skills through intensive training and personal
              projects, earning a professional degree in web development. I have
              built several fullstack applications and am eager to keep growing
              and contributing as a developer.
            </p>

            <blockquote className="mt-6 border-l-2 border-[#4FB579] pl-4 italic text-gray-600">
              <p>
                For me, web development is more than coding. It’s a way to turn
                ideas into real, interactive experiences, combining creativity,
                logic, and technology.
              </p>
            </blockquote>
          </div>

          <div className="flex flex-col items-center text-center md:items-end md:text-right">
            <img
              src="/profil.webp"
              alt="Portrait of Nicolas Huang"
              width={512}
              height={512}
              loading="lazy"
              decoding="async"
              className="h-40 w-40 rounded-full object-cover shadow-lg md:h-52 md:w-52"
            />

            <p className="mt-6 text-xl font-bold text-black md:text-2xl">
              Based in Paris
            </p>

            <p className="mt-2 text-lg text-[#2F855A]">
              {getAge("1986-05-24")} years old
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#1C1C1D] px-4 py-20 sm:px-6 md:px-12">
        <h2 className="sr-only">Explore this portfolio</h2>

        <ul
          role="list"
          className="mx-auto grid max-w-6xl grid-cols-1 gap-10 text-center text-white sm:grid-cols-2 lg:grid-cols-4"
        >
          {highlights.map((item) => (
            <li key={item.href} className="flex flex-col items-center gap-4">
              <span
                aria-hidden="true"
                className="flex h-16 w-16 items-center justify-center rounded-full border border-[#4FB579]/30 bg-[#4FB579]/10 text-[#6EDC9B]"
              >
                <item.Icon size={26} strokeWidth={1.75} />
              </span>

              <h3 className="text-lg font-semibold">{item.title}</h3>

              <p className="max-w-xs text-sm leading-relaxed text-gray-200">
                {item.description}
              </p>

              <a
                href={item.href}
                className="group mt-auto inline-flex items-center gap-2 rounded text-sm font-medium text-[#4FB579] transition hover:text-[#6EDC9B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1C1D]"
              >
                Learn more about {item.title.toLowerCase()}
                <FaArrowRight
                  aria-hidden="true"
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
