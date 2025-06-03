import { useRef, useState } from "react";
import Home from "./Home/Home";
import Banner from "./Home/Shared/Banner/Banner";
import Navbar from "./Home/Shared/Navbar/Navbar";
import AnimatedCursor from "react-animated-cursor"
import { HiOutlineArrowUp } from "react-icons/hi2";


const Layout = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleScrollAbout = () => {
    setActiveSection("about");
  };
  const handleScrollProject = () => {
    setActiveSection("projects");
  };
  const handleScrollContact = () => {
    setActiveSection("contact");
  };

  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        showSystemCursor={true}
        innerStyle={{
          backgroundColor: "#ff5b2e",
        }}
        outerStyle={{
          border: "1px solid #ff5b2e",
        }}
      />
      <div className="lg:flex items-center xl:h-screen">
        <div className="lg:w-[1260px] xl:mx-auto flex md:mx-5">
          <div className="fixed z-[999999] w-full md:w-fit shadow-xl md:shadow-none">
            <Navbar handleScroll={[handleScrollAbout, handleScrollProject, handleScrollContact]} />
          </div>
          <div className="xl:flex md:ml-24 mt-[60px] md:mt-0">
            <Banner />
            <Home activeSection={activeSection} />
          </div>
          <div className="xl:hidden">
            <button
              className="p-2 rounded-full bg-[#ff8564] fixed bottom-5 right-5 z-[999999]"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                setActiveSection(null);
              }}
            >
              <HiOutlineArrowUp className="text-white text-[28px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;