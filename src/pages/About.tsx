import AboutLogo from "../assets/about-1.webp";
import AboutTitle from "../assets/about-title.webp";
import FunFact1 from "../assets/funfact1.webp";
import FunFact2 from "../assets/funfact2.webp";
import FunFact3 from "../assets/funfact3.webp";
import BrandSlide from "../components/BrandSlide";
import Cosmic from "../assets/about2.webp";
import Feature1 from "../assets/feature1.webp";
import Feature2 from "../assets/feature2.webp";
import Feature3 from "../assets/feature3.webp";

function About() {
    return (
        <div>
            {/* Start Section 1 */}
            <div className="container mx-auto p-4 pb-0 xxl:px-[150px]">
                <div className="grid grid-cols-1 md:grid-cols-12">
                    <div className="col-span-1 md:col-span-5">
                        <div className="flex flex-col items-center justify-center h-full">
                            <div className="w-full sm:w-[330px] xl:w-[470px] mb-[-50px]">
                                <img
                                    src={AboutTitle}
                                    alt="about title"
                                    className="w-full"
                                />
                            </div>
                            <h2 className="text-[35px] sm:text-[48px] xl:text-[67px] font-light mb-4">
                                We, are Brancy
                            </h2>
                            <h5 className="tracking-[10px] underline mb-7 text-[18px] xl:text-[21px] font-normal">
                                Best cosmetics provider
                            </h5>
                            <p className="text-[16px] xl:text-[21px] max-w-[470px]">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ut aliquam, purus sit amet
                                luctus venenatis.
                            </p>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-7">
                        <div>
                            <img
                                src={AboutLogo}
                                alt="about logo"
                                className="h-auto max-w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Start Section 2 */}
            <div className="bg-[#fff6f5]">
                <div className="container mx-auto p-4 xxl:px-[150px] py-[90px]">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                        <div className="col-span-1 md:col-span-6 lg:col-span-4">
                            <div className="flex flex-col justify-center items-center border-[3px] border-red-400 rounded-3xl p-12">
                                <div className="w-[70px] h-[70px]">
                                    <img
                                        src={FunFact1}
                                        alt="funfact1"
                                        className="w-full"
                                    />
                                </div>
                                <div className="w-full h-[1px] bg-red-400"></div>
                                <div className="text-center">
                                    <h2 className="text-[38px] font-medium text-[#364958]">
                                        5000+
                                    </h2>
                                    <p>CLIENTS</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-6 lg:col-span-4">
                            <div className="flex flex-col justify-center items-center border-[3px] border-red-400 rounded-3xl p-12">
                                <div className="w-[70px] h-[70px]">
                                    <img
                                        src={FunFact2}
                                        alt="funfact2"
                                        className="w-full"
                                    />
                                </div>
                                <div className="w-full h-[1px] bg-red-400"></div>
                                <div className="text-center">
                                    <h2 className="text-[38px] font-medium text-[#364958]">
                                        250+
                                    </h2>
                                    <p>PROJECTS</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-6 lg:col-span-4">
                            <div className="flex flex-col justify-center items-center border-[3px] border-red-400 rounded-3xl p-12">
                                <div className="w-[70px] h-[70px]">
                                    <img
                                        src={FunFact3}
                                        alt="funfact3"
                                        className="w-full"
                                    />
                                </div>
                                <div className="w-full h-[1px] bg-red-400"></div>
                                <div className="text-center">
                                    <h2 className="text-[38px] font-medium text-[#364958]">
                                        1.5M+
                                    </h2>
                                    <p>REVENUE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Start Section 3 */}
            <BrandSlide />

            {/* Start Section 4 */}
            <div className="container mx-auto p-4 pb-0 xxl:px-[150px]">
                <div className="flex flex-col justify-center items-center gap-2 pb-[100px]">
                    <div>
                        <img src={Cosmic} alt="Cosmetic" />
                    </div>
                    <h3 className="text-center text-[35px] md:text-[50px] font-normal py-5">
                        Best Cosmetics Provider
                    </h3>
                    <p className="text-[16px] md:text-[20px] max-w-[758px] text-zinc-500 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In vel arcu aliquet sem risus nisl. Neque, scelerisque
                        in erat lacus ridiculus habitant porttitor. Malesuada
                        pulvinar sollicitudin enim, quis sapien tellus est.
                        Pellentesque amet vel maecenas nisi. In elementum magna
                        nulla ridiculus sapien mollis volutpat sit. Arcu egestas
                        massa consectetur felis urna porttitor ac.
                    </p>
                </div>
            </div>

            {/* Start Section 5 */}
            <div className="bg-[#fff6f5]">
                <div className="container mx-auto p-4 xxl:px-[150px] py-[90px]">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                        <div className="col-span-1 md:col-span-6 lg:col-span-4">
                            <div className="flex flex-col justify-center items-startp-12">
                                <h5 className="flex items-center text-[21px] font-medium uppercase pb-5">
                                    <img
                                        src={Feature1}
                                        alt="feature1"
                                        className="w-[70px] h-[70px] mr-5"
                                    />
                                    Support Team
                                </h5>
                                <p className="text-[18px] font-normal">
                                    Lorem ipsum dolor amet, consectetur
                                    adipiscing. Ac tortor enim metus, turpis.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-6 lg:col-span-4">
                            <div className="flex flex-col justify-center items-startp-12">
                                <h5 className="flex items-center text-[21px] font-medium uppercase pb-5">
                                    <img
                                        src={Feature2}
                                        alt="feature2"
                                        className="w-[70px] h-[70px] mr-5"
                                    />
                                    Support Team
                                </h5>
                                <p className="text-[18px] font-normal">
                                    Lorem ipsum dolor amet, consectetur
                                    adipiscing. Ac tortor enim metus, turpis.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-6 lg:col-span-4">
                            <div className="flex flex-col justify-center items-startp-12">
                                <h5 className="flex items-center text-[21px] font-medium uppercase pb-5">
                                    <img
                                        src={Feature3}
                                        alt="feature3"
                                        className="w-[70px] h-[70px] mr-5"
                                    />
                                    Support Team
                                </h5>
                                <p className="text-[18px] font-normal">
                                    Lorem ipsum dolor amet, consectetur
                                    adipiscing. Ac tortor enim metus, turpis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
