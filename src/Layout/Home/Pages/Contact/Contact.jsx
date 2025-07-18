import { MdArrowRightAlt } from "react-icons/md";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import './Contact.css'
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Swal from "sweetalert2";


const Contact = ({ scrollContact }) => {
    useEffect(() => {
        Aos.init({
            duration: 500,
            offset: 400
        });
    }, []);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_hlzemtc',
                'template_ca24wcm',
                form.current,
                '1Iekg1TGJsuiPAXAQ'
            )
            .then((result) => {
                if (result.text === 'OK') {
                    Swal.fire({
                        title: "Your mail send!",
                        icon: "success",
                        draggable: true
                    });
                }
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            });
    };
    return (
        <section id="contact"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            ref={scrollContact}
        // ref={setSectionRef}
        >
            <div>
                <div className="xl:h-[673px] w-full py-[10px]">
                    <div className="bg-[#31313a] min-w-full xl:w-[685px] h-full pt-6 md:overflow-hidden xl:overflow-y-scroll pb-[40px]">
                        <div className="contact_section">
                            <div className="mx-[30px] mb-5">
                                <h3 className="font-bold text-[20px] text-white popFont"><span className="text-[#ff714a]">G</span>et in Touch</h3>
                            </div>
                            <div className="divider m-0 h-0"></div>
                        </div>
                        <div className="flex justify-center mt-[30px] px-[20px] md:px-0">
                            <iframe
                                className="w-full md:px-7"
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3580.4007106340005!2d88.9930301264644!3d26.18364013973107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sbd!4v1752304902524!5m2!1sen!2sbd" height="225" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                        <div className=" flex md:flex-row flex-col justify-center items-center mt-[30px]">
                            <div className="p-[30px] flex flex-col justify-start gap-2">
                                <div className="border-[#3d3d47] border-b-[1px] pb-2 flex justify-start gap-2 mt-[8px]">
                                    <span className="bg-[#ff714a] text-gray-900 text-[14px] px-[10px] max-h-[22px]">Address:</span>
                                    <span>Nilphamari, Bangladesh</span>
                                </div>
                                <div className="border-[#3d3d47] border-b-[1px] pb-2 flex justify-start gap-2 mt-[8px]">
                                    <span className="bg-[#ff714a] text-gray-900 text-[14px] px-[10px] max-h-[22px]">Email:</span>
                                    <span className="text-[14px]">roknuzzamansojib78@gmail.com</span>
                                </div>
                            </div>
                            <div className=" flex flex-col px-[30px] gap-2">
                                <div className="border-[#3d3d47] border-b-[1px] pb-2 flex justify-start gap-2 mt-[8px]">
                                    <span className="bg-[#ff714a] text-gray-900 text-[14px] px-[10px] max-h-[22px]">Phone:</span>
                                    <span>+8001755463590</span>
                                </div>
                                <div className="border-[#3d3d47] border-b-[1px] pb-2 flex justify-start gap-2 mt-[8px]">
                                    <span className="bg-[#ff714a] text-gray-900 text-[14px] px-[10px] max-h-[22px]">Freelance:</span>
                                    <span>Available</span>
                                </div>
                            </div>
                        </div>

                        <div className="contact_section">
                            <div className="mx-[30px] mb-5">
                                <h3 className="font-bold text-[20px] text-white popFont"><span className="text-[#ff714a]">C</span>ontact Form</h3>
                            </div>
                            <div className="divider m-0 h-0"></div>
                            <div className="px-[30px] pt-[30px]">
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-7 mb-3">
                                        <input
                                            type="text"
                                            name="user_name"
                                            placeholder="Full Name"
                                            className="py-[10px] pl-[15px] bg-transparent border-[2px] border-[#666] text-[#ff714a] focus:outline-none focus:ring-2 focus:ring-[#ff714a] focus:border-none"
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            className="py-[10px] pl-[15px] bg-transparent border-[2px] border-[#666] text-[#ff714a] focus:outline-none focus:ring-2 focus:ring-[#ff714a] focus:border-none"
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            type="text"
                                            name="message"
                                            placeholder="Your Message"
                                            className="w-full h-[100px] p-[15px] bg-transparent border-[2px] border-[#666] text-[#ff714a] focus:outline-none focus:ring-2 focus:ring-[#ff714a] focus:border-none"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        value="Send"
                                        className="contact-btn"
                                    >
                                        <div className="contact-btn-div flex items-center mt-6">
                                            <p className="text-white uppercase font-semibold text-[14px] contact-btn-send">Send Message</p>
                                            <MdArrowRightAlt className="text-[26px] text-white contact-btn-send-arrow" />
                                        </div>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;