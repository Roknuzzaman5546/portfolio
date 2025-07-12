import { Link } from "react-router-dom";
import { FaCpanel, FaLaravel, FaPhp, FaReact } from "react-icons/fa";
import { SiJquery, SiMongodb, SiMysql } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import './Project.css'
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Projects = ({ scrollProject }) => {
    useEffect(() => {
        Aos.init({
            duration: 500,
            offset: 400
        });
    }, []);

    return (
        <section
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            id="projects" ref={scrollProject}
        >
            <div>
                <div className="xl:h-[673px] py-[10px]">
                    <div className="bg-[#31313a] xl:w-[685px] h-full pt-6 md:overflow-hidden xl:overflow-y-scroll pb-[40px]">
                        <div className="contact_section">
                            <div className="mx-[30px] mb-5">
                                <h3 className="font-bold text-[20px] text-white popFont"><span className="text-[#ff714a]">M</span>y Projects</h3>
                            </div>
                            <div className="divider m-0 h-0"></div>
                        </div>

                        <div className="mx-[30px] grid  mt-5">
                            <h3 className="text-center text-white uppercase font-bold text-[26px] mb-[10px]">Project - 1</h3>
                            {/* Nedubd */}
                            <article className="flex bg-[#1f1f1f] transition hover:shadow-xl">
                                {/* duration */}
                                <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                                    <time
                                        dateTime="2022-10-10"
                                        className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-300"
                                    >
                                        <span>January 24</span>
                                        <span className="w-px flex-1 bg-gray-300/20 text-center"></span>
                                        <span>2025</span>
                                        <span className="w-px flex-1 bg-gray-300/20 text-center"></span>
                                        <span>March 16</span>
                                    </time>
                                </div>
                                {/* image */}
                                <div className="project_img hidden sm:block sm:basis-56 relative bg-cover bg-top hover:bg-bottom ease-linear duration-[6000ms]"
                                    style={{ backgroundImage: 'url(https://i.ibb.co/6c7Mydd0/screencapture-academichelperbd-dashboard-10120-2025-07-12-11-01-00.png)' }}
                                >
                                    <div className="overlay hidden bg-gradient-to-br  w-full h-full absolute top-0 left-0">
                                        <Link to={'https://academichelperbd.com/'} target="_blank" >
                                            <div className=" text-[36px] text-[#ff5b2e] flex justify-center items-center h-full">
                                                <FaLink className=""></FaLink>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                {/* info */}
                                <div className="flex flex-1 flex-col justify-between">
                                    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                        <a href="#">
                                            <h3 className="font-bold uppercase text-white text-[20px]">
                                                <span className="text-[#ff714a]">Ne</span>dubd <span className="text-[12px] text-gray-400">- School Management Software</span>
                                            </h3>
                                        </a>
                                        <p>Nedubd is SAS system School management Software, it's my offiche project, I contribute here some of module</p>
                                        <div className="grid md:grid-cols-2 mt-[8px]">
                                            <div className="grid border-gray-600 border-r-[1px]">
                                                <p className="text-[#ff714a]">
                                                    Links
                                                </p>
                                                <Link to={'https://academichelperbd.com/'} target="_blank" className="hover:underline hover:text-[#ff714a]">
                                                    Live Preview
                                                </Link>
                                                <Link to="https://github.com/baitssoftware/nedubd-cms/tree/sojib" target="_blank" className="hover:underline hover:text-[#ff714a]">
                                                    Frontend Code
                                                </Link>
                                                <Link to="https://github.com/baitssoftware/nedubd-cms/tree/sojib" target="_blank" className="hover:underline hover:text-[#ff714a]">
                                                    Backend Code
                                                </Link>
                                            </div>
                                            <div className="md:text-right mt-[15px] md:mt-0">
                                                <p className="text-[#ff714a]">Technologies</p>
                                                <div className="grid grid-cols-3 md:justify-items-end gap-2 mt-[5px] text-[20px]">
                                                    <FaLaravel />
                                                    <FaPhp />
                                                    <SiMysql />
                                                    <SiJquery />
                                                    <FaCpanel />
                                                    <FaHtml5 />
                                                    <FaCss3Alt />
                                                    <SiTailwindcss />
                                                    <FaGitAlt />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sm:flex sm:items-end sm:justify-end">
                                        <a
                                            href="#"
                                            className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                                        >
                                            Details
                                        </a>
                                    </div>
                                </div>
                            </article>

                            <h3 className="text-center text-white uppercase font-bold text-[26px] mt-9 mb-[10px]">Project - 2</h3>
                            {/* Rentify Client */}
                            <article className="flex bg-[#1f1f1f] transition hover:shadow-xl">
                                {/* duration */}
                                <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                                    <time
                                        dateTime="2022-10-10"
                                        className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-300"
                                    >
                                        <span>January 24</span>
                                        <span className="w-px flex-1 bg-gray-300/20 text-center"></span>
                                        <span>2024</span>
                                        <span className="w-px flex-1 bg-gray-300/20 text-center"></span>
                                        <span>March 24</span>
                                    </time>
                                </div>
                                {/* image */}
                                <div className="project_img hidden sm:block sm:basis-56 relative bg-cover bg-top hover:bg-bottom ease-linear duration-[6000ms]"
                                    style={{ backgroundImage: 'url(https://i.ibb.co/Lz6WsKWX/screencapture-rentify-70183-web-app-2025-06-29-10-27-52.png)' }}
                                >
                                    <div className="overlay hidden bg-gradient-to-br  w-full h-full absolute top-0 left-0">
                                        <Link to={'https://rentify-70183.web.app/'} target="_blank" >
                                            <div className=" text-[36px] text-[#ff5b2e] flex justify-center items-center h-full">
                                                <FaLink className=""></FaLink>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                {/* info */}
                                <div className="flex flex-1 flex-col justify-between">
                                    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                        <a href="#">
                                            <h3 className="font-bold uppercase text-white text-[20px]">
                                                <span className="text-[#ff714a]">Re</span>ntify <span className="text-[12px] text-gray-400">- Real Estate Project</span>
                                            </h3>
                                        </a>
                                        <p>Rentify client is a real-state website with 3 different dashboards, for admin, users and agents.</p>
                                        <div className="grid md:grid-cols-2 mt-[8px]">
                                            <div className="grid border-gray-600 border-r-[1px]">
                                                <p className="text-[#ff714a]">
                                                    Links
                                                </p>
                                                <Link to={'https://rentify-70183.web.app/'} target="_blank" className="hover:underline hover:text-[#ff714a]">
                                                    Live Preview
                                                </Link>
                                                <Link to="https://github.com/tanbirhaque/Rentify-client" target="_blank" className="hover:underline hover:text-[#ff714a]">
                                                    Frontend Code
                                                </Link>
                                                <Link to="https://github.com/tanbirhaque/Rentify-server" target="_blank" className="hover:underline hover:text-[#ff714a]">
                                                    Backend Code
                                                </Link>
                                            </div>
                                            <div className="md:text-right mt-[15px] md:mt-0">
                                                <p className="text-[#ff714a]">Technologies</p>
                                                <div className="grid grid-cols-3 md:justify-items-end gap-2 mt-[5px] text-[20px]">
                                                    <FaReact />
                                                    <SiMongodb />
                                                    <TbBrandNodejs />
                                                    <SiExpress />
                                                    <FaHtml5 />
                                                    <FaCss3Alt />
                                                    <SiTailwindcss />
                                                    <IoLogoFirebase />
                                                    <FaGitAlt />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sm:flex sm:items-end sm:justify-end">
                                        <a
                                            href="#"
                                            className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                                        >
                                            Details
                                        </a>
                                    </div>
                                </div>
                            </article>

                            <h3 className="text-center text-white uppercase font-bold text-[26px] mt-9 mb-[10px]">Project - 3</h3>
                            {/* It Tech */}
                            <article className="flex bg-[#1f1f1f] transition hover:shadow-xl">
                                {/* duration */}
                                <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                                    <time
                                        dateTime="2022-10-10"
                                        className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-300"
                                    >
                                        <span>Jul 16</span>
                                        <span className="w-px flex-1 bg-gray-300/20 text-center"></span>
                                        <span>2024</span>
                                        <span className="w-px flex-1 bg-gray-300/20 text-center"></span>
                                        <span>Oct 26</span>
                                    </time>
                                </div>
                                {/* image */}
                                <div className="project_img hidden sm:block sm:basis-56 relative bg-cover bg-top hover:bg-bottom ease-linear duration-[6000ms]"
                                    style={{ backgroundImage: 'url(https://i.ibb.co/wrs2cw3C/screencapture-assingment12-projects-clilnt-web-app-2025-07-12-12-02-05.png)' }}
                                >
                                    <div className="overlay hidden bg-gradient-to-br  w-full h-full absolute top-0 left-0">
                                        <Link to={'https://assingment12-projects-clilnt.web.app/'} target="_blank" >
                                            <div className=" text-[36px] text-[#ff5b2e] flex justify-center items-center h-full">
                                                <FaLink className=""></FaLink>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                {/* info */}
                                <div className="flex flex-1 flex-col justify-between">
                                    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                        <a href="#">
                                            <h3 className="font-bold uppercase text-white text-[20px]">
                                                <span className="text-[#ff714a]">IT</span>Tech<span className="text-[12px] text-gray-400">- Online course platform</span>
                                            </h3>
                                        </a>
                                        <p>It tech is Course traning platform.Any one can sell and train course here. It has three role, Student, Teacher & Admin</p>
                                        <div className="grid md:grid-cols-2 mt-[8px]">
                                            <div className="grid border-gray-600 border-r-[1px]">
                                                <p className="text-[#ff714a]">
                                                    Links
                                                </p>
                                                <Link to="https://assingment12-projects-clilnt.web.app/" target="_blank" className="hover:underline hover:text-[#ff714a]">
                                                    Live Preview
                                                </Link>
                                                <Link to="https://github.com/Anirat04/eTrade" target="_blank" className="hover:underline hover:text-[#ff714a]">
                                                    Frontend Code
                                                </Link>
                                                <Link to="https://github.com/Anirat04/eTrade_Server" className="hover:underline hover:text-[#ff714a]">
                                                    Backend Code
                                                </Link>
                                            </div>
                                            <div className="md:text-right mt-[15px] md:mt-0">
                                                <p className="text-[#ff714a]">Technologies</p>
                                                <div className="grid grid-cols-3 md:justify-items-end gap-2 mt-[5px] text-[20px]">
                                                    <FaReact />
                                                    <FaLaravel />
                                                    <FaPhp />
                                                    <SiMysql />
                                                    <DiJavascript1 />
                                                    <FaHtml5 />
                                                    <FaCss3Alt />
                                                    <SiTailwindcss />
                                                    <FaGitAlt />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sm:flex sm:items-end sm:justify-end">
                                        <a
                                            href="#"
                                            className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                                        >
                                            Details
                                        </a>
                                    </div>
                                </div>
                            </article>

                            <h3 className="text-center text-white uppercase font-bold text-[26px] mt-9 mb-[10px]">Project - 4</h3>
                            {/* Travel Guru */}
                            <article className="flex bg-[#1f1f1f] transition hover:shadow-xl">
                                {/* duration */}
                                <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                                    <time
                                        dateTime="2022-10-10"
                                        className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-300"
                                    >
                                        <span>Feb 4</span>
                                        <span className="w-px flex-1 bg-gray-300/20 text-center"></span>
                                        <span>2024</span>
                                        <span className="w-px flex-1 bg-gray-300/20 text-center"></span>
                                        <span>March 16</span>
                                    </time>
                                </div>
                                {/* image */}
                                <div className="project_img hidden sm:block sm:basis-56 relative bg-cover bg-top hover:bg-bottom ease-linear duration-[6000ms]"
                                    style={{ backgroundImage: 'url(https://i.ibb.co/fz8fJSjw/screencapture-travel-guru-71001-web-app-2025-06-29-10-29-46.png)' }}
                                >
                                    <div className="overlay hidden bg-gradient-to-br  w-full h-full absolute top-0 left-0">
                                        <Link to={'https://travel-guru-71001.web.app/'} target="_blank" >
                                            <div className=" text-[36px] text-[#ff5b2e] flex justify-center items-center h-full">
                                                <FaLink className=""></FaLink>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                {/* info */}
                                <div className="flex flex-1 flex-col justify-between">
                                    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                        <a href="#">
                                            <h3 className="font-bold uppercase text-white text-[20px]">
                                                <span className="text-[#ff714a]">Tr</span>avel guru <span className="text-[12px] text-gray-400">-Travel & hotel booking site</span>
                                            </h3>
                                        </a>
                                        <p>Travel guru is a a Hotel and place booking E-commerce site.It is a MERN Stack project.It has a beautiful UI designed in it.</p>
                                        <div className="grid md:grid-cols-2 mt-[8px]">
                                            <div className="grid border-gray-600 border-r-[1px]">
                                                <p className="text-[#ff714a]">
                                                    Links
                                                </p>
                                                <Link to="https://travel-guru-71001.web.app/" target="_blank" className="hover:underline hover:text-[#ff714a]">
                                                    Live Preview
                                                </Link>
                                                <Link to="https://github.com/Roknuzzaman5546/travel-guru-clint" target="_blank" className="hover:underline hover:text-[#ff714a]">
                                                    Frontend Code
                                                </Link>
                                                <Link to="https://github.com/Roknuzzaman5546/travel-guru-server" target="_blank" className="hover:underline hover:text-[#ff714a]">
                                                    Backend Code
                                                </Link>
                                            </div>
                                            <div className="md:text-right mt-[15px] md:mt-0">
                                                <p className="text-[#ff714a]">Technologies</p>
                                                <div className="grid grid-cols-3 md:justify-items-end gap-2 mt-[5px] text-[20px]">
                                                    <FaReact />
                                                    <SiMongodb />
                                                    <TbBrandNodejs />
                                                    <SiExpress />
                                                    <FaHtml5 />
                                                    <FaCss3Alt />
                                                    <SiTailwindcss />
                                                    <IoLogoFirebase />
                                                    <FaGitAlt />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sm:flex sm:items-end sm:justify-end">
                                        <a
                                            href="#"
                                            className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                                        >
                                            Details
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;