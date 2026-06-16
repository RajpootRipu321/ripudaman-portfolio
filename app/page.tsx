import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Timeline from "../components/Timeline";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#050816] text-white">
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Skills />
      </main>
    </>
  );
}