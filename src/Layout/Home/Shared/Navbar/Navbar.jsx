import { FaRegUser } from "react-icons/fa";
import { RiProfileLine } from "react-icons/ri";
import { GrWorkshop } from "react-icons/gr";
import { TfiWrite } from "react-icons/tfi";
import { MdContactMail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import './Navbar.css'
import { IoMdMail } from "react-icons/io";

const Navbar = ({ handleScroll }) => {
    console.log(handleScroll)
    return (
        <div className="navContainer md:mt-[20px] md:mr-[10px]">
            <ul className="bg-[#31313a] navlink flex justify-center md:inline-block w-full">
                <NavLink to={'/'} className="hover:text-[#61ce70]">
                    <li className="flex flex-col items-center px-4 py-[15px] text-[14px]"
                        onClick={handleScroll[0]}
                    >
                        <FaRegUser className="text-[22px]  mb-[5px]" />
                        About
                    </li>
                </NavLink>
                {/* <li className="flex flex-col items-center px-4 py-[15px] text-[14px]">
                        <RiProfileLine className="text-[22px]  mb-[5px]"/>
                        Resume
                    </li> */}
                <NavLink to='projects' className="hover:text-[#61ce70]">
                    <li className="flex flex-col items-center px-4 py-[15px] text-[14px]"
                        // onClick={scrollRef}
                        onClick={handleScroll[1]}
                    >
                        <GrWorkshop className="text-[22px]  mb-[5px]" />
                        Projects
                    </li>
                </NavLink>
                {/* <li className="flex flex-col items-center px-4 py-[15px] text-[14px]">
                        <TfiWrite className="text-[22px] mb-[5px]"/>
                        Blogs
                    </li> */}
                <NavLink to="contact" className="hover:text-[#61ce70]">
                    <li className="flex flex-col items-center px-4 py-[15px] text-[14px]"
                        onClick={handleScroll[2]}
                    >
                        <IoMdMail className="text-[22px]  mb-[5px]" />
                        Contact
                    </li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navbar;