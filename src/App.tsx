import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Experience from "./components/Experience";
import Projets from "./components/Projets";
import Animations3D from "./components/Animations3D";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

/*
 * Sections are imported eagerly on purpose. This is a single-page site whose
 * navigation, active-link tracking and deep links all rely on every section
 * being present in the DOM from the first render; code-splitting them saved a
 * few kB of JS but broke anchor links and in-page search. Weight is kept down
 * through the image pipeline instead.
 */
export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[#1F7A4D] focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      <Navbar />

      <Hero />

      <main id="main-content" tabIndex={-1}>
        <AboutMe />
        <Skills />
        <Languages />
        <Experience />
        <Projets />
        <Animations3D />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
