import { useEffect, useState } from "react";
import {
  FaCode,
  FaStar,
  FaSuitcase,
  FaArrowUp,
  FaArrowRight,
} from "react-icons/fa";

export default function AboutMe() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    const dayDiff = today.getDate() - birth.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return age;
  };

  return (
    <section id="about" className="w-full bg-white">
      <div className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#2F855A] leading-tight">
              I code,
              <br />
              therefore I am.
            </h2>

            <p className="mt-8 text-gray-700 leading-relaxed text-base md:text-lg">
              I started my career in the restaurant industry before
              transitioning into IT, driven by a strong passion for technology.
              I gained solid skills through intensive training and personal
              projects, earning a professional degree in web development.
              Although I lack formal experience, I have built several full-stack
              applications and am eager to grow and contribute as a developer.
            </p>

            <p className="mt-6 italic text-gray-600">
              “For me, web development is more than coding. It’s a way to turn
              ideas into real, interactive experiences, combining creativity,
              logic, and technology.”
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h3 className="text-xl md:text-2xl font-bold text-black">
              Based in Paris
            </h3>

            <p className="mt-2 text-[#2F855A] text-lg">
              {getAge("1986-05-24")} years old
            </p>

            <img
              src="/profil.jpg"
              alt="Profile portrait of Nicolas Huang"
              className="mt-6 w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#1C1C1D] py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-[#4FB579] rounded-full flex items-center justify-center">
              <FaCode size={24} />
            </div>

            <h3 className="text-lg font-semibold">Skills</h3>

            <p className="text-white text-sm leading-relaxed max-w-xs">
              Learn about my skills in programming, find info on my language
              knowledge and more.
            </p>

            <a
              href="#skills"
              className="text-[#4FB579] flex items-center gap-2 text-sm group"
            >
              Learn more
              <FaArrowRight
                className="transition-transform duration-300 group-hover:translate-x-1"
                size={14}
              />
            </a>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-[#4FB579] rounded-full flex items-center justify-center">
              <FaStar size={24} />
            </div>

            <h3 className="text-lg font-semibold">Experience</h3>

            <p className="text-white text-sm leading-relaxed max-w-xs">
              Get to know the timeline of my education and find out more about
              my working experience.
            </p>

            <a
              href="#experience"
              className="text-[#4FB579] flex items-center gap-2 text-sm group"
            >
              Learn more
              <FaArrowRight
                className="transition-transform duration-300 group-hover:translate-x-1"
                size={14}
              />
            </a>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-[#4FB579] rounded-full flex items-center justify-center">
              <FaSuitcase size={24} />
            </div>

            <h3 className="text-lg font-semibold">Projets</h3>

            <p className="text-white text-sm leading-relaxed max-w-xs">
              My portfolio is my biggest pride. Check my previous works and get
              to know my skills better.
            </p>

            <a
              href="#projets"
              className="text-[#4FB579] flex items-center gap-2 text-sm group"
            >
              Learn more
              <FaArrowRight
                className="transition-transform duration-300 group-hover:translate-x-1"
                size={14}
              />
            </a>
          </div>
        </div>
      </div>

      {showTopBtn && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-16 right-6 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition"
        >
          <FaArrowUp className="text-[#4FB579]" size={20} />
        </button>
      )}
    </section>
  );
}
