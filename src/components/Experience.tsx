type Entry = {
  period: string;
  role: string;
  place: string;
};

const work: Entry[] = [
  {
    period: "09.2026 — present",
    role: "Fullstack Developer — AI Integration & Automation",
    place:
      "Pause-Com, Paris (apprenticeship, on-site) — cut manual business-process handling time by over 80% by automating workflows; built fullstack web apps for agency clients (hotel & restaurant chains); integrated generative AI to automate internal and client processes; designed automation pipelines for data sync and repetitive tasks; partnered with marketing teams to turn business needs into technical solutions",
  },
  {
    period: "06.2026 — 08.2026",
    role: "Fullstack Developer",
    place:
      "InstrIA, Paris — natural-language automation SaaS: users connect their apps over OAuth and a LangGraph agent orchestrates the workflow",
  },
  {
    period: "2025 — 2026",
    role: "Junior front-end developer (remote internship)",
    place: "Clover, France",
  },
  {
    period: "2022 — 2025",
    role: "Maintenance Technician",
    place: "Engie, Boulogne-Billancourt",
  },
  {
    period: "2007 — 2022",
    role: "Manager",
    place: "Maison de thé Mariage Frères, Paris",
  },
];

const education: Entry[] = [
  {
    period: "2026 — present",
    role: "Ynov Connect — School for Digital Engineering, Nanterre",
    place: "Master's degree, Software Development and AI",
  },
  {
    period: "2025 — 2026",
    role: "OpenClassrooms",
    place: "Bachelor's degree, Software Development and AI",
  },
  {
    period: "2024 — 2025",
    role: "3W Academy",
    place: "BTS degree, Fullstack developer",
  },
];

function Timeline({
  entries,
  titleId,
  title,
}: {
  entries: Entry[];
  titleId: string;
  title: string;
}) {
  return (
    <section aria-labelledby={titleId}>
      <h3 id={titleId} className="mb-6 text-2xl font-bold text-gray-900">
        {title}
      </h3>

      <ol role="list" className="space-y-8 border-l-2 border-gray-200 pl-6">
        {entries.map((entry) => (
          <li key={`${entry.period}-${entry.role}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[1.9rem] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-[#4FB579] ring-2 ring-[#4FB579]/30"
            />

            <p className="text-sm font-medium text-[#1F7A4D]">{entry.period}</p>
            <p className="mt-0.5 font-medium text-gray-900">{entry.role}</p>
            <p className="mt-0.5 text-sm text-gray-500">{entry.place}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="w-full bg-white px-4 py-20 sm:px-6 md:px-12 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 flex flex-col items-center gap-4 text-center md:mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1F7A4D]">
            My journey
          </p>

          <h2
            id="experience-title"
            className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl"
          >
            Experience
          </h2>

          <p className="max-w-lg text-pretty text-sm font-light text-gray-600 md:text-base">
            After many years in the restaurant industry I chose a full
            professional retraining into development. Here is the timeline of my
            education and working experience, from past to present.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-16 md:gap-y-20">
          <div className="flex flex-col gap-12">
            <figure className="overflow-hidden rounded-2xl shadow-sm">
              <img
                src="/smile.webp"
                alt="Nicolas Huang smiling, holding a laptop"
                width={1024}
                height={683}
                loading="lazy"
                decoding="async"
                className="h-[240px] w-full object-cover grayscale transition duration-500 hover:grayscale-0 sm:h-[280px] md:h-[290px]"
              />
            </figure>

            <Timeline
              entries={work}
              titleId="work-title"
              title="Work Experience"
            />
          </div>

          <div className="flex flex-col gap-12">
            <Timeline
              entries={education}
              titleId="education-title"
              title="Education"
            />

            <figure className="overflow-hidden rounded-2xl shadow-sm">
              <img
                src="/me.webp"
                alt="Nicolas Huang focused, working on a laptop"
                width={1024}
                height={683}
                loading="lazy"
                decoding="async"
                className="h-[240px] w-full object-cover grayscale transition duration-500 hover:grayscale-0 sm:h-[280px] md:h-[340px]"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
