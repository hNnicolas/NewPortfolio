export default function Languages() {
  const languages = [
    {
      name: "English",
      level: "Fluent",
      label: "English language level fluent",
    },
    {
      name: "French",
      level: "Native",
      label: "French language native speaker",
    },
    {
      name: "Japanese",
      level: "Fluent",
      label: "Japanese language level fluent",
    },
  ];

  return (
    <section
      id="languages"
      aria-labelledby="languages-title"
      aria-describedby="languages-desc"
      role="region"
      className="relative w-full py-24 px-6 md:px-12 bg-cover bg-center"
      style={{
        backgroundImage: "url('/matrix.jpg')",
        backgroundColor: "#111111",
      }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2
          id="languages-title"
          className="text-3xl md:text-5xl font-bold"
          style={{ color: "#ffffff", backgroundColor: "transparent" }}
        >
          Languages
        </h2>

        <p id="languages-desc" className="sr-only">
          List of spoken languages and proficiency levels
        </p>

        <ul
          role="list"
          aria-label="Languages spoken by Nicolas"
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {languages.map((lang, index) => (
            <li key={index} role="listitem">
              <button
                type="button"
                aria-label={lang.label}
                className="
                  w-full flex flex-col items-center gap-2
                  p-6 rounded-xl
                  focus-visible:outline-none
                  focus-visible:ring-2 focus-visible:ring-[#6EDC9B]
                  focus-visible:ring-offset-2 focus-visible:ring-offset-black
                "
                style={{ backgroundColor: "transparent" }}
              >
                <h3 className="text-xl md:text-2xl font-semibold">
                  <span
                    className="px-2 rounded"
                    style={{ color: "#4ABA78", backgroundColor: "#000000" }}
                  >
                    {lang.name}
                  </span>
                </h3>

                <p
                  className="font-medium"
                  style={{ color: "#ffffff", backgroundColor: "transparent" }}
                >
                  {lang.level}
                </p>

                <span className="sr-only">{lang.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
