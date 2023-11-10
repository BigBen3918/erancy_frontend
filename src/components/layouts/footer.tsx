import { Link } from "react-router-dom";
import LogoIMG from "../../assets/logo.webp";
import { FaTwitter, FaFacebook, FaPinterest } from "react-icons/fa";

function Footer() {
    return (
        <div className="bg-[#fafafa] w-full">
            <div className="container mx-auto px-4 xxl:px-[150px]">
                <div className="grid grid-cols-1 sm:grid-cols-12 py-[80px] gap-7">
                    <div className="col-span-1 sm:col-span-6 lg:col-span-4">
                        <div className="w-[95px] mb-[38px]">
                            <img
                                src={LogoIMG}
                                alt="footer-logo"
                                className="w-full"
                            />
                        </div>
                        <p className="max-w-[285px]">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been.
                        </p>
                    </div>
                    <div className="col-span-1 sm:col-span-6 lg:col-span-5">
                        <h4 className="text-[18px] font-semibold mb-[35px]">
                            Information
                        </h4>
                        <div className="flex items-center justify-start gap-8 flex-wrap">
                            {infos.map((item: string, index) => (
                                <Link
                                    to={item}
                                    key={index}
                                    className="capitalize hover:underline hover:text-red-400 transition-colors duration-300"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-1 sm:col-span-6 lg:col-span-3">
                        <h4 className="text-[18px] font-semibold mb-[35px]">
                            Social Info
                        </h4>
                        <div className="flex justify-start items-center text-[25px]">
                            <Link to="/">
                                <FaTwitter />
                            </Link>
                            <Link to="/" className="ml-[30px]">
                                <FaFacebook />
                            </Link>
                            <Link to="/" className="ml-[30px]">
                                <FaPinterest />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="border-t-[1px] border-zinc-300">
                    <p className="p-3 text-center">
                        © 2022 Brancy. Made with ❤ by SuperDeveloper
                    </p>
                </div>
            </div>
        </div>
    );
}

const infos: string[] = ["about", "checkout", "contact"];

export default Footer;
