import htmlPNG from "../../../../assets/Images/HTML5_Badge.svg.png"
import cssPNG from "../../../../assets/Images/css-icon.png"
import jsPNG from "../../../../assets/Images/javascript_icon.png"
import reactPNG from "../../../../assets/Images/react-icon-29.jpg"
import nodePNG from "../../../../assets/Images/node-js-icon-8.jpg"
import expressPNG from "../../../../assets/Images/express_logo.png"
import laravelPNG from "../../../../assets/Images/Laravel.png"
import PHPPNG from "../../../../assets/Images/php.png"
import mysqlPNG from "../../../../assets/Images/mysq.png"
import mongoDB from "../../../../assets/Images/mongoDB.png"
import tailwindPNG from "../../../../assets/Images/Tailwind-CSS1-900x0.png"
import bootstrapPNG from "../../../../assets/Images/bootstrap.png"
import SkillsComponent from "../../Components/SkillsComponent/SkillsComponent";
import { IoIosSchool } from "react-icons/io";
import { GiBiceps } from "react-icons/gi";
import { HiMiniLanguage } from "react-icons/hi2";
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

const About = ({ scrollAbout }) => {

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
            id="about" ref={scrollAbout}>
            <div>
                <div className="xl:h-[673px] py-[10px]">
                    <div className="bg-[#31313a] mx-auto xl:w-[685px] h-full pt-6 md:overflow-hidden xl:overflow-y-scroll pb-[40px]">
                        {/* About me section starts */}
                        <div className="about_section">
                            <div className="mx-[30px] mb-5">
                                <h3 className="font-bold text-[20px] text-white popFont"><span className="text-[#ff714a]">A</span>bout Me</h3>
                            </div>
                            <div className="divider m-0 h-0"></div>
                            <div className="grid md:grid-cols-2">
                                <div className="p-[30px] border-[#3d3d47] border-r-[1px]">
                                    <p>
                                        <span className="font-bold">Hello! I’m Md Roknuzzaman Sajib.</span>
                                        <br />
                                        <span className="font-medium">
                                            Skilled Full Stack developer from Nilphamari, Bangladesh, proficient in JavaScript, jquery, React JS, Laravel and PHP. Completed 12 practical personal projects and proficient in tools like DaisyUI, MambaUI, Material UI, and Flowbite.
                                        </span>
                                    </p>
                                </div>
                                <div className="p-[30px]">
                                    <div className="border-[#3d3d47] border-b-[1px] pb-2 flex justify-between">
                                        <span className="bg-[#ff714a] text-black text-[14px] px-[10px] max-h-[22px]">Age:</span>
                                        <span>22</span>
                                    </div>
                                    <div className="border-[#3d3d47] border-b-[1px] pb-2 flex justify-between mt-[8px]">
                                        <span className="bg-[#ff714a] text-black text-[14px] px-[10px] max-h-[22px]">Nationality:</span>
                                        <span>Bangladeshi</span>
                                    </div>
                                    <div className="border-[#3d3d47] border-b-[1px] pb-2 flex justify-between mt-[8px]">
                                        <span className="bg-[#ff714a] text-black text-[14px] px-[10px] max-h-[22px]">Location:</span>
                                        <span>Dhaka, Bangladesh</span>
                                    </div>
                                </div>
                            </div>
                            <div className="divider m-0 h-0"></div>
                        </div>
                        {/* About me section ends */}

                        {/* Education and language section starts */}
                        <div className="edu_lang-section pb-[25px]">
                            <div className="mx-[30px] grid md:grid-cols-2">
                                <div className="education border-[#3d3d47] md:border-r-[1px] pr-5 pt-5">
                                    <h3 className="font-bold text-[20px] text-white popFont flex items-center gap-2 mb-3">
                                        <IoIosSchool className="text-[35px] text-[#ff8564]" />
                                        Education
                                    </h3>
                                    <div className="border-y-[1px] border-[#3d3d47] py-[20px]">
                                        <div className="border border-[#ff8564] inline-block px-[10px]">
                                            <h3 className="text-[13px] text-[#ff8564]">2020 - 2021</h3>
                                        </div>
                                        <p className="text-white font-semibold mt-[10px]">Diploma In engineering</p>
                                        <p className="text-[12px]">CSE</p>
                                        <p>Thakurgaon Polytechnic Institute</p>
                                        <p>Location: Thakurgaon, Bangladesh</p>
                                    </div>
                                    <div className="border-y-[1px] border-[#3d3d47] py-[20px]">
                                        <div className="border border-[#ff8564] inline-block px-[10px]">
                                            <h3 className="text-[13px] text-[#ff8564]">2020</h3>
                                        </div>
                                        <p className="text-white font-semibold mt-[10px]">SSC</p>
                                        <p className="text-[12px]">Science</p>
                                        <p>Goyabari School & Collage</p>
                                        <p>Location: Goyabari, Dimla, Nilphamari, Bangladesh</p>
                                    </div>
                                </div>
                                <div className="language pt-5">
                                    <h3 className="font-bold text-[20px] text-white popFont flex items-center gap-2 ml-[20px]  mb-3">
                                        <HiMiniLanguage className="text-[35px] text-[#ff8564]" />
                                        Language
                                    </h3>
                                    <div className="border-y-[1px] border-[#3d3d47]  ml-[20px] grid gap-6 pt-5 pb-[45px]">
                                        <div>
                                            <p className="font-medium text-white">English - <span className="text-gray-400 text-[12px]">Intermediate</span></p>
                                            <progress className="progress progress-error w-56" value="2" max="4"></progress>
                                        </div>
                                        <div>
                                            <p className="font-medium text-white">Bangla - <span className="text-gray-400 text-[12px]">Native</span></p>
                                            <progress className="progress progress-error w-56" value="4" max="4"></progress>
                                        </div>
                                        <div>
                                            <p className="font-medium text-white">Hindi - <span className="text-gray-400 text-[12px]">Advance</span></p>
                                            <progress className="progress progress-error w-56" value="3" max="4"></progress>
                                        </div>
                                        <div>
                                            <p className="font-medium text-white">Urdu - <span className="text-gray-400 text-[12px]">Basic</span></p>
                                            <progress className="progress progress-error w-56" value="1" max="4"></progress>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Education and language section ends */}

                        {/* Skills section starts */}
                        <div className="skill_section mt-[30px]">
                            <div className="mx-[30px] mb-5 flex items-center gap-2">
                                <h3 className="font-bold text-[20px] text-white popFont"><span className="text-[#ff714a]">S</span>kills</h3>
                                <GiBiceps className="text-[20px] text-[#ff714a]" />
                            </div>
                            <div className="divider m-0 h-0"></div>
                            <div className="grid md:grid-cols-3 gap-5 px-[30px] justify-items-center mt-5">
                                {/* html */}
                                <SkillsComponent
                                    skillPNG={htmlPNG}
                                    skill={'HTML'}
                                    percents={'93%'}
                                ></SkillsComponent>

                                {/* css */}
                                <SkillsComponent
                                    skillPNG={cssPNG}
                                    skill={'CSS'}
                                    percents={'90%'}
                                ></SkillsComponent>

                                {/* javascript */}
                                <SkillsComponent
                                    skillPNG={jsPNG}
                                    skill={'JS'}
                                    percents={'65%'}
                                ></SkillsComponent>

                                {/* react js */}
                                <SkillsComponent
                                    skillPNG={reactPNG}
                                    skill={'React'}
                                    percents={'80%'}
                                ></SkillsComponent>

                                {/* Laravel */}
                                <SkillsComponent
                                    skillPNG={laravelPNG}
                                    skill={'Laravel'}
                                    percents={'80%'}
                                ></SkillsComponent>

                                {/* PHP */}
                                <SkillsComponent
                                    skillPNG={PHPPNG}
                                    skill={'PHP'}
                                    percents={'60%'}
                                ></SkillsComponent>

                                {/* Node js */}
                                <SkillsComponent
                                    skillPNG={nodePNG}
                                    skill={'Node.js'}
                                    percents={'50%'}
                                ></SkillsComponent>

                                {/* express js */}
                                <SkillsComponent
                                    skillPNG={expressPNG}
                                    skill={'Express'}
                                    percents={'50%'}
                                ></SkillsComponent>

                                {/* MYSQL */}
                                <SkillsComponent
                                    skillPNG={mysqlPNG}
                                    skill={'MySQL'}
                                    percents={'70%'}
                                ></SkillsComponent>

                                {/* mongodb */}
                                <SkillsComponent
                                    skillPNG={mongoDB}
                                    skill={'MongoDB'}
                                    percents={'43%'}
                                ></SkillsComponent>

                                {/* Tailwind css */}
                                <SkillsComponent
                                    skillPNG={tailwindPNG}
                                    skill={'Tailwind CSS'}
                                    percents={'95%'}
                                ></SkillsComponent>

                                {/* Bootstrap */}
                                <SkillsComponent
                                    skillPNG={bootstrapPNG}
                                    skill={'Bootstrap'}
                                    percents={'60%'}
                                ></SkillsComponent>
                            </div>
                        </div>
                        {/* Skills section ends */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;