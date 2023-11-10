import { Link } from "react-router-dom";
import {
    BsFillEnvelopeFill,
    BsFillTelephoneFill,
    BsGeoAltFill,
} from "react-icons/bs";
import ContactIMG from "../assets/contact.webp";

function Contact() {
    return (
        <div>
            {/* Start Section 1 */}
            <div className="flex justify-start items-center gap-3 flex-wrap-reverse lg:flex-nowrap">
                <div className="flex-3 pr-4">
                    <img
                        src={ContactIMG}
                        alt="contact image"
                        className="w-full rounded-tr-3xl rounded-br-3xl object-cover h-[700px]"
                    />
                </div>
                <div className="flex-5 px-4 pt-[40px]">
                    <h2 className="text-[40px] xl:text-[50px] font-normal">
                        Get In Touch
                    </h2>
                    <p className="max-w-[430px] pb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        aliquam, purus sit amet luctus venenatis
                    </p>
                    <div className="h-[1px] w-[70px] bg-zinc-400"></div>
                    <div className="py-5">
                        <div className="flex justify-center items-center flex-wrap gap-4 mb-[56px]">
                            <input
                                type="text"
                                className="flex-1 p-3 pl-0 border-b-[1px] border-black outline-none"
                                placeholder="First Name"
                            />
                            <input
                                type="text"
                                className="flex-1 p-3 pl-0 border-b-[1px] border-black outline-none"
                                placeholder="Last Name"
                            />
                        </div>
                        <div className="flex mb-[56px]">
                            <input
                                type="text"
                                className="w-full p-3 pl-0 border-b-[1px] border-black outline-none"
                                placeholder="Email address"
                            />
                        </div>
                        <div className="flex mb-[40px]">
                            <textarea
                                placeholder="Message"
                                rows={7}
                                className="w-full border-b-[1px] border-black outline-none resize-none"
                            ></textarea>
                        </div>
                        <button className="px-10 py-4 bg-red-400 rounded-[50px] text-white tracking-[7px] font-medium">
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>

            {/* Start Section 2 */}
            <div className="container mx-auto p-4 xxl:px-[150px] py-24">
                <div className="grid grid-cols-1 sm:grid-cols-12 bg-[#fffaef] py-12">
                    <div className="col-span-1 sm:col-span-6 md:col-span-4">
                        <div className="p-4 md:border-r-[1px] md:border-zinc-400 md:p-0">
                            <div className="flex flex-col justify-center items-center gap-5 text-[25px]">
                                <BsFillTelephoneFill />
                                <Link
                                    to=""
                                    className="text-[18px] hover:text-red-400 transition-colors duration-300"
                                >
                                    +11 0203 03023
                                </Link>
                                <Link
                                    to=""
                                    className="text-[18px] hover:text-red-400 transition-colors duration-300"
                                >
                                    +11 0203 03023
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 sm:col-span-6 md:col-span-4">
                        <div className="p-4 md:p-0 md:border-r-[1px] md:border-zinc-400">
                            <div className="flex flex-col justify-center items-center gap-5 text-[25px]">
                                <BsFillEnvelopeFill />
                                <Link
                                    to=""
                                    className="text-[18px] hover:text-red-400 transition-colors duration-300"
                                >
                                    example@demo.com
                                </Link>
                                <Link
                                    to=""
                                    className="text-[18px] hover:text-red-400 transition-colors duration-300"
                                >
                                    demo@example.com
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 sm:col-span-6 md:col-span-4">
                        <div className="p-4 md:p-0">
                            <div className="flex flex-col justify-center items-center gap-5 text-[25px]">
                                <BsGeoAltFill />
                                <p className="text-[18px]">
                                    Sunset Beach, North
                                </p>
                                <p className="text-[18px]">
                                    Carolina(NC), 28468
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
