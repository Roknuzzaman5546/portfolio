import { useRef, useState } from "react";
import Home from "./Home/Home";
import Banner from "./Home/Shared/Banner/Banner";
import Navbar from "./Home/Shared/Navbar/Navbar";
import AnimatedCursor from "react-animated-cursor"
import { HiOutlineArrowUp } from "react-icons/hi2";


const Layout = () => {
    // const [sectionRef, setSectionRef] = useState(null)
    // const scrollRef = useRef();
    const scrollAbout = useRef();
    const scrollProject = useRef();
    const scrollContact = useRef();
    // const scrollRef = useRef(null);
    const [activeSection, setActiveSection] = useState(null);

    const handleScrollProject = () => {
        scrollProject.current?.scrollIntoView({
            behavior: "smooth"
        })
        setActiveSection("projects");
        console.log(scrollProject.current);
    }
    const handleScrollContact = () => {
        scrollContact.current?.scrollIntoView({
            behavior: "smooth"
        });
        setActiveSection("contact");
    }
    const handleScrollAbout = () => {
        scrollAbout.current?.scrollIntoView({
            behavior: "smooth"
        });
        setActiveSection("about");
    }

    // const handleScrollTop = () => [

    // ]

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
                    backgroundColor: '#ff5b2e'
                }}
                outerStyle={{
                    border: '1px solid #ff5b2e'
                }}
            />
            {/* <h1>this is home layout</h1> */}
            <div className="lg:flex items-center xl:h-screen" >
                <div className="lg:w-[1260px] xl:mx-auto flex md:mx-5">
                    <div className="fixed z-[999999] w-full md:w-fit shadow-xl md:shadow-none">
                        <Navbar handleScroll={[handleScrollAbout, handleScrollProject, handleScrollContact]}></Navbar>
                    </div>
                    <div className="xl:flex md:ml-24 mt-[60px] md:mt-0">
                        <Banner></Banner>
                        <Home
                            scrollAbout={scrollAbout}
                            scrollProject={scrollProject}
                            scrollContact={scrollContact}
                            activeSection={activeSection}
                        ></Home>
                    </div>
                    <div className="xl:hidden">
                        <button className="p-2 rounded-full bg-[#ff8564] fixed bottom-5 right-5 z-[999999]"
                            onClick={() => {
                                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
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