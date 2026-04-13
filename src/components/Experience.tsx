export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="w-full bg-white py-24 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <div className="relative flex flex-col items-center mb-24 gap-4">
          <h2
            id="experience-title"
            className="text-3xl md:text-5xl font-bold text-gray-900 bg-white px-6"
          >
            Experience
          </h2>
          <p className="text-sm md:text-base text-gray-600 font-light text-center max-w-md">
            From high school, i decided to get a professional retraining after
            many years worked on restauration industry. <br></br>Get to know the
            timeline of my working experience from past to present
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-300 -translate-x-1/2"
          />

          <div
            aria-hidden="true"
            className="hidden md:flex absolute left-1/2 top-0 -translate-x-1/2 z-10 bg-white px-2 items-center justify-center"
          >
            <span className="text-sm font-light text-green-700">1</span>
          </div>

          <div
            aria-hidden="true"
            className="hidden md:flex absolute left-1/2 top-[360px] -translate-x-1/2 z-10 bg-white px-2 items-center justify-center"
          >
            <span className="text-sm font-light text-green-700">2</span>
          </div>
          <div className="flex flex-col gap-16">
            <figure>
              <img
                src="/smile.png"
                alt="Nicolas smiling, holding a laptop"
                className="w-full h-[280px] md:h-[290px] object-cover rounded-2xl shadow-sm grayscale"
              />
            </figure>

            <section aria-labelledby="work-title" className="text-right">
              <h3
                id="work-title"
                className="text-2xl font-bold text-gray-900 mb-6"
              >
                Work Experience
              </h3>

              <ul className="space-y-8 text-gray-800">
                <li>
                  <p className="font-normal text-sm text-gray-500">
                    2026 - present
                  </p>
                  <p className="font-medium">
                    Next.JS Developer - AI integration
                  </p>
                  <p className="text-sm text-gray-500">
                    Intelligent News Review Generator project
                  </p>
                </li>
                <li>
                  <p className="font-normal text-sm text-gray-500">
                    2026 - 2025
                  </p>
                  <p className="font-medium">
                    Junior remote stage front-end developer
                  </p>
                  <p className="text-sm text-gray-500">
                    At Clover company based in France
                  </p>
                </li>

                <li>
                  <p className="font-normal text-sm text-gray-500">
                    2025 - 2022
                  </p>
                  <p className="font-medium">Maintenance Technician</p>
                  <p className="text-sm text-gray-500">
                    At Engie company based in Boulogne-Billancourt
                  </p>
                </li>

                <li>
                  <p className="font-normal text-sm text-gray-500">
                    2022 - 2007
                  </p>
                  <p className="font-medium">Manager</p>
                  <p className="text-sm text-gray-500">
                    At Maison de thé Mariage Mariage Frères, based in Paris,
                    France
                  </p>
                </li>
              </ul>
            </section>
          </div>
          <div className="flex flex-col gap-16">
            <section aria-labelledby="education-title">
              <h3
                id="education-title"
                className="text-2xl font-bold text-gray-900 mb-6"
              >
                Education
              </h3>

              <ul className="space-y-8 text-gray-800">
                <li>
                  <p className="font-normal text-sm text-gray-500">
                    2026 - Currently
                  </p>
                  <p className="font-medium">
                    Ynov Connect - School for Digital Engineer, Nanterre
                  </p>
                  <p className="text-sm text-gray-500">
                    Master's degree Software Development and AI
                  </p>
                </li>

                <li>
                  <p className="font-normal text-sm text-gray-500">
                    2025 - 2026
                  </p>
                  <p className="font-medium">OpenClassrooms</p>
                  <p className="text-sm text-gray-500">
                    Bachelor's degree Software Development and AI
                  </p>
                </li>

                <li>
                  <p className="font-normal text-sm text-gray-500">
                    2024 - 2025
                  </p>
                  <p className="font-medium">3wa Académy</p>
                  <p className="text-sm text-gray-500">
                    BTS degree Full stack developer
                  </p>
                </li>
              </ul>
            </section>

            <figure className="rounded-2xl overflow-hidden shadow-sm">
              <img
                src="/me.png"
                alt="Nicolas focused, working on a laptop"
                className="w-full h-[280px] md:h-[340px] object-cover grayscale"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
