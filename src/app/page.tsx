import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import CaseStudies from "@/components/sections/CaseStudies";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Certifications from "@/components/sections/Certifications";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Projects />
        <CaseStudies />
        <Contact /> 
        <Footer />
      </main>
    </>
  );
}