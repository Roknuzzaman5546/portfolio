import { useState } from "react";
import AnimatedSection from "./Components/AnimatedSection";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import { Outlet } from "react-router-dom";

const Home = ({ activeSection }) => {
  return (
    <div>
      <div className="hidden xl:inline-block">
        <Outlet />
      </div>

      <div className="xl:hidden">
        <AnimatedSection isVisible={activeSection === "about"}>
          <About />
        </AnimatedSection>
        <AnimatedSection isVisible={activeSection === "projects"}>
          <Projects />
        </AnimatedSection>
        <AnimatedSection isVisible={activeSection === "contact"}>
          <Contact />
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Home;