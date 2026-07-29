const languages = [
  { name: "French", level: "Native", tag: "fr" },
  { name: "English", level: "Fluent", tag: "en" },
  { name: "Japanese", level: "Fluent", tag: "ja" },
];

export default function Languages() {
  return (
    <section
      id="languages"
      aria-labelledby="languages-title"
      className="relative w-full bg-[#111111] px-4 py-20 sm:px-6 md:px-12 md:py-24"
    >
      <img
        src="/matrix.webp"
        alt=""
        aria-hidden="true"
        width={1920}
        height={943}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/85" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#6EDC9B]">
          Communication
        </p>

        <h2
          id="languages-title"
          className="text-3xl font-bold text-white sm:text-4xl md:text-5xl"
        >
          Languages
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm text-gray-300 md:text-base">
          The languages I speak day to day, at work and while travelling.
        </p>

        <ul
          role="list"
          aria-labelledby="languages-title"
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 md:gap-10"
        >
          {languages.map((lang) => (
            <li
              key={lang.name}
              className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:border-[#6EDC9B]/50 hover:bg-white/10"
            >
              <h3 className="text-xl font-semibold text-[#6EDC9B] md:text-2xl">
                <span lang={lang.tag}>{lang.name}</span>
              </h3>

              <p className="font-medium text-white">{lang.level}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
