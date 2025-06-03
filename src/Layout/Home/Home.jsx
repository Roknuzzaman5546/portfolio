import { useState } from "react";
import AnimatedSection from "./Components/AnimatedSection";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import { Outlet } from "react-router-dom";

const Home = ({ scrollAbout, scrollProject, scrollContact }) => {
    const [activeSection, setActiveSection] = useState(null);

    return (
        <div>
            <div className="hidden xl:inline-block">
                <Outlet />
            </div>

            <div className="xl:hidden relative z-10">
                <AnimatedSection isVisible={activeSection === "about"}>
                    <About scrollAbout={scrollAbout} />
                </AnimatedSection>
                <AnimatedSection isVisible={activeSection === "projects"}>
                    <Projects scrollProject={scrollProject} />
                </AnimatedSection>
                <AnimatedSection isVisible={activeSection === "contact"}>
                    <Contact scrollContact={scrollContact} />
                </AnimatedSection>
            </div>
        </div>
    );
};

export default Home;
