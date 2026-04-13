import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiPhp,
  SiSymfony,
  SiThreedotjs,
  SiWebgl,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      icon: <FaReact aria-hidden="true" />,
      name: "React",
      label: "React JavaScript library",
    },
    {
      icon: <SiNextdotjs aria-hidden="true" />,
      name: "Next.js",
      label: "Next.js framework",
    },
    {
      icon: <FaVuejs aria-hidden="true" />,
      name: "Vue.js",
      label: "Vue.js framework",
    },
    {
      icon: <SiPhp aria-hidden="true" />,
      name: "PHP",
      label: "PHP backend language",
    },
    {
      icon: <SiSymfony aria-hidden="true" />,
      name: "Symfony",
      label: "Symfony PHP framework",
    },
    {
      icon: <FaPython aria-hidden="true" />,
      name: "Python",
      label: "Python programming language",
    },
    {
      icon: <FaNodeJs aria-hidden="true" />,
      name: "Node.js",
      label: "Node.js runtime",
    },
    {
      icon: <FaDatabase aria-hidden="true" />,
      name: "SQL",
      label: "SQL database language",
    },
    {
      icon: <SiWebgl aria-hidden="true" />,
      name: "WebGL",
      label: "WebGL graphics API",
    },
    {
      icon: <SiThreedotjs aria-hidden="true" />,
      name: "Three.js",
      label: "Three.js 3D library",
    },
    {
      icon: <FaReact aria-hidden="true" />,
      name: "LLM",
      label: "Large Language Models",
    },
    {
      icon: <FaReact aria-hidden="true" />,
      name: "AI Agents",
      label: "AI agent systems",
    },
  ];

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      aria-describedby="skills-desc"
      role="region"
      className="w-full bg-white py-20 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2
            id="skills-title"
            className="text-3xl md:text-5xl font-bold text-[#1F7A4D]"
          >
            Programming Skills
          </h2>

          <p
            id="skills-desc"
            className="mt-6 text-gray-800 leading-relaxed text-base md:text-lg"
          >
            Frontend developer passionate about building modern web
            applications. Skilled in React, TypeScript, Next.js, and JavaScript,
            with experience in WebGL and Three.js for interactive experiences.
          </p>

          <p className="mt-4 text-gray-800 leading-relaxed text-base md:text-lg">
            I also have knowledge in backend technologies such as PHP (Symfony)
            and Python, and I am particularly interested in AI, including LLM
            integration.
          </p>

          <p className="mt-4 text-gray-800 leading-relaxed text-base md:text-lg">
            Curious and motivated, I continuously learn new technologies and aim
            to build scalable, high-performance applications.
          </p>
        </div>

        <ul
          role="list"
          aria-label="List of programming skills"
          className="grid grid-cols-2 sm:grid-cols-3 gap-4"
        >
          {skills.map((skill, index) => (
            <li key={index} role="listitem">
              <button
                type="button"
                tabIndex={0}
                aria-label={skill.label}
                className="
                  w-full flex flex-col items-center justify-center gap-2
                  bg-[#F3F8FF] p-4 rounded-xl
                  transition transform hover:scale-105
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F7A4D]
                  focus-visible:ring-offset-2
                "
              >
                <div className="text-2xl text-gray-900" aria-hidden="true">
                  {skill.icon}
                </div>

                <p className="text-sm font-semibold text-[#1F7A4D]">
                  {skill.name}
                </p>

                <span className="sr-only">{skill.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
