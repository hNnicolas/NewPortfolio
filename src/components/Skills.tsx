import type { ComponentType } from "react";
import { FaReact, FaVuejs, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import {
  SiNextdotjs,
  SiPhp,
  SiSymfony,
  SiThreedotjs,
  SiWebgl,
  SiOpenai,
} from "react-icons/si";
import { TbRobot } from "react-icons/tb";

type Skill = {
  Icon: ComponentType<{ size?: number; "aria-hidden"?: boolean }>;
  name: string;
  /** Expanded name, announced to screen readers instead of the short label. */
  label: string;
};

const skills: Skill[] = [
  { Icon: FaReact, name: "React", label: "React, JavaScript library" },
  { Icon: SiNextdotjs, name: "Next.js", label: "Next.js framework" },
  { Icon: FaVuejs, name: "Vue.js", label: "Vue.js framework" },
  { Icon: SiPhp, name: "PHP", label: "PHP, backend language" },
  { Icon: SiSymfony, name: "Symfony", label: "Symfony, PHP framework" },
  { Icon: FaPython, name: "Python", label: "Python programming language" },
  { Icon: FaNodeJs, name: "Node.js", label: "Node.js runtime" },
  { Icon: FaDatabase, name: "SQL", label: "SQL, database language" },
  { Icon: SiWebgl, name: "WebGL", label: "WebGL graphics API" },
  { Icon: SiThreedotjs, name: "Three.js", label: "Three.js, 3D library" },
  { Icon: SiOpenai, name: "LLM", label: "Large Language Models" },
  { Icon: TbRobot, name: "AI Agents", label: "AI agent systems" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="w-full bg-[#F7F9FB] px-4 py-20 sm:px-6 md:px-12"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#1F7A4D]">
            What I work with
          </p>

          <h2
            id="skills-title"
            className="text-3xl font-bold text-[#1F7A4D] sm:text-4xl md:text-5xl"
          >
            Programming Skills
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-800 md:text-lg">
            Fullstack developer passionate about building modern web
            applications. Skilled in React, TypeScript, Next.js and JavaScript,
            with experience in WebGL and Three.js for interactive experiences.
          </p>

          <p className="mt-4 text-base leading-relaxed text-gray-800 md:text-lg">
            I also work with backend technologies such as PHP (Symfony) and
            Python, and I am particularly interested in AI, including LLM
            integration.
          </p>

          <p className="mt-4 text-base leading-relaxed text-gray-800 md:text-lg">
            Curious and motivated, I continuously learn new technologies and aim
            to build scalable, high-performance applications.
          </p>
        </div>

        <ul
          role="list"
          aria-labelledby="skills-title"
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4"
        >
          {skills.map((skill) => (
            <li
              key={skill.name}
              className="flex flex-col items-center justify-center gap-2 rounded-xl bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md motion-reduce:hover:translate-y-0"
            >
              <span className="text-2xl text-gray-900">
                <skill.Icon size={28} aria-hidden={true} />
              </span>

              <p className="text-center text-sm font-semibold text-[#1F7A4D]">
                <abbr title={skill.label} className="no-underline">
                  {skill.name}
                </abbr>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
