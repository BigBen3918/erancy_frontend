import { Swiper, SwiperSlide } from "swiper/react";
import { FaCaretRight } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { Pagination } from "swiper/modules";
import Card from "../components/Card";
import BlogCard from "../components/Blog/Card";
import Slider1 from "../assets/slider1.webp";
import Slider2 from "../assets/slider2.webp";
import TextLogo from "../assets/text-light.webp";
import Card1 from "../assets/card1.webp";
import Card2 from "../assets/card2.webp";
import Card3 from "../assets/card3.webp";
import P1 from "../assets/product/1.webp";
import P2 from "../assets/product/2.webp";
import P3 from "../assets/product/3.webp";
import P4 from "../assets/product/4.webp";
import P5 from "../assets/product/5.webp";
import P6 from "../assets/product/6.webp";
import MarketIMG from "../assets/market.webp";
import TopIMG1 from "../assets/product/top-1.webp";
import TopIMG2 from "../assets/product/top-2.webp";
import TopIMG3 from "../assets/product/top-3.webp";

import blogIMG1 from "../assets/blog/1.webp";
import blogIMG2 from "../assets/blog/2.webp";
import blogIMG3 from "../assets/blog/3.webp";
import BrandSlide from "../components/BrandSlide";

function Home() {
    1;
    return (
        <div>
            {/* Start Section 1 */}
            <div className="px-4">
                {/* Section 1 */}
                <div className="rounded-3xl w-full bg-[#fcebed]">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                    >
                        <SwiperSlide>
                            <div className="flex justify-center items-center mx-auto w-full sm:max-w-[630px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1300px] p-5 flex-col md:flex-row">
                                <div className="flex flex-1 flex-col px-4 justify-center items-start gap-3 relative">
                                    <img
                                        src={TextLogo}
                                        alt="text-logo"
                                        className="absolute top-[-8vw] sm:top-[-60px] md:top-[-120px] -left-[50px] -z-10 scale-50 lg:scale-75 lg:left-[2px] xl:scale-100"
                                    />
                                    <h1 className="text-[30px] text-[#231942] font-bold pt-[75px] md:pt-[0px] md:text-[45px] lg:text-[55px] xl:text-[67px]">
                                        ANTI AGENING
                                    </h1>
                                    <p className="text-[17] max-w-[410px] text-zinc-600 font-medium lg:text-[21px]">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit ut aliquam, purus sit
                                        amet luctus venenatis.
                                    </p>
                                    <div className="flex justify-start items-center gap-3 pt-3 flex-wrap">
                                        <button className="px-10 py-3 border-[2px] border-[#f87171] rounded-[50px] tracking-[5px] hover:bg-red-400 transition-all duration-300">
                                            BUY NOW
                                        </button>
                                        <button className="flex items-center justify-center gap-3 hover:text-red-600">
                                            <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-red-500 text-white">
                                                <FaCaretRight />
                                            </div>
                                            <h3>Play Now</h3>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-1 justify-center items-center">
                                    <div>
                                        <img
                                            src={Slider1}
                                            alt="Slider-1"
                                            className="object-cover align-middle"
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex justify-center items-center mx-auto w-full sm:max-w-[630px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1300px] p-5 flex-col md:flex-row">
                                <div className="flex flex-1 flex-col px-4 justify-center items-start gap-3 relative">
                                    <img
                                        src={TextLogo}
                                        alt="text-logo"
                                        className="absolute top-[-8vw] sm:top-[-60px] md:top-[-120px] -left-[50px] -z-10 scale-50 lg:scale-75 lg:left-[2px] xl:scale-100"
                                    />
                                    <h1 className="text-[30px] text-[#231942] font-bold pt-[75px] md:pt-[0px] md:text-[45px] lg:text-[55px] xl:text-[67px]">
                                        CLEAN FRESH
                                    </h1>
                                    <p className="text-[17] max-w-[410px] text-zinc-600 font-medium lg:text-[21px]">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit ut aliquam, purus sit
                                        amet luctus venenatis.
                                    </p>
                                    <div className="flex justify-start items-center gap-3 pt-3 flex-wrap">
                                        <button className="px-10 py-3 border-[2px] border-[#f87171] rounded-[50px] tracking-[5px] hover:bg-red-400 transition-all duration-300">
                                            BUY NOW
                                        </button>
                                        <button className="flex items-center justify-center gap-3 hover:text-red-600">
                                            <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-red-500 text-white">
                                                <FaCaretRight />
                                            </div>
                                            <h3>Play Now</h3>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-1 justify-center items-center">
                                    <div>
                                        <img
                                            src={Slider2}
                                            alt="Slider-2"
                                            className="object-cover align-middle"
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            {/* End Section 1 */}

            {/* Start Section 2 */}
            <div className="container mx-auto p-4 xxl:px-[150px] py-24">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-7">
                    <div className="col-span-1 sm:col-span-6 md:col-span-4 leffect">
                        <button className="light relative overflow-hidden bg-cover bg-no-repeat rounded-xl w-full">
                            <img
                                src={Card1}
                                alt="card-1"
                                className="rounded-xl transition duration-300 hover:scale-105 w-full"
                            />
                        </button>
                    </div>
                    <div className="col-span-1 sm:col-span-6 md:col-span-4 leffect">
                        <button className="light relative overflow-hidden bg-cover bg-no-repeat rounded-xl w-full">
                            <img
                                src={Card2}
                                alt="card-2"
                                className="rounded-xl transition duration-300 hover:scale-105 w-full"
                            />
                        </button>
                    </div>
                    <div className="col-span-1 sm:col-span-6 md:col-span-4 leffect">
                        <button className="light relative overflow-hidden bg-cover bg-no-repeat rounded-xl w-full">
                            <img
                                src={Card3}
                                alt="card-3"
                                className="rounded-xl transition duration-300 hover:scale-105 w-full"
                            />
                        </button>
                    </div>
                </div>
            </div>
            {/* End Section  2 */}

            {/* Start Section 3 */}
            <div className="container mx-auto p-4 xxl:px-[150px]">
                <div className="pb-12">
                    <h2 className="text-[50px] font-normal">Best Product</h2>
                    <p className="max-w-[430px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus venenatis
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
                    {products.map((item: ProductInterface, index: number) => (
                        <Card item={item} key={index} />
                    ))}
                </div>
            </div>
            {/* End Section 3 */}

            {/* Start Section 4 */}
            <div className="container mx-auto py-10 p-4 xxl:px-[150px] leffect">
                <button className="light w-full flex relative overflow-hidden bg-cover bg-no-repeat rounded-xl">
                    <img
                        src={MarketIMG}
                        alt=""
                        className="w-full rounded-xl transition duration-300 hover:scale-105"
                    />
                </button>
            </div>
            {/* End Section 4 */}

            {/* Start Section 5 */}
            <div className="container mx-auto p-4 xxl:px-[150px]">
                <div className="pb-12">
                    <h2 className="text-[50px] font-normal">
                        Top Sale Products
                    </h2>
                    <p className="max-w-[430px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus venenatis
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
                    {topProducuts.map(
                        (item: ProductInterface, index: number) => (
                            <Card item={item} key={index} />
                        )
                    )}
                </div>
            </div>
            {/* End Section 5 */}

            {/* Start Section 6 */}
            <BrandSlide />
            {/* End Section 6 */}

            {/* Start Section 7 */}
            <div className="container mx-auto p-4 xxl:px-[150px]">
                <div className="pb-12 flex flex-col items-center justify-center text-center">
                    <h2 className="text-[50px] font-normal">Blog Posts</h2>
                    <p className="max-w-[430px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus venenatis
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-10">
                    {blogs.map((item: BlogInterface, index: number) => (
                        <BlogCard item={item} key={index} />
                    ))}
                </div>
            </div>
            {/* End Section 7 */}

            {/* Start Section 8 */}
            <div className="container p-4 xxl:px-[150px] mx-auto py-[100px]">
                <div
                    className="rounded-xl"
                    style={{
                        backgroundImage: "url(./join_us-back.webp)",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="py-[20px] md:py-[50px] px-[30px] md:px-[150px]">
                        <div className="flex justify-center xl:justify-between items-center gap-3 p-4 flex-wrap">
                            <div>
                                <h2 className="text-[35px] sm:text-[50px] font-medium capitalize pb-3">
                                    Join with us
                                </h2>
                                <p className="text-[1rem] font-normal max-w-[310px]">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit ut aliquam.
                                </p>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="border-[1px] border-[#dc7354] rounded-[10px] font-[13px] italic text-[#979797] pl-5 pr-[70px] py-2.5 outline-none w-full sm:w-[400px]"
                                    placeholder="enter your em"
                                />
                                <button className="bg-[#ce4820] rounded-[10px] absolute top-0 right-0 border-none text-white h-full w-[50px] font-[15px] flex justify-center items-center">
                                    <FaTelegramPlane />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Section 8 */}
        </div>
    );
}

const products: ProductInterface[] = [
    {
        review: 150,
        content: "Readable content DX22",
        price: 210.0,
        img: P1,
    },
    {
        review: 150,
        content: "Readable content DX22",
        price: 210.0,
        img: P2,
    },
    {
        review: 150,
        content: "Readable content DX22",
        price: 210.0,
        img: P3,
    },
    {
        review: 150,
        content: "Readable content DX22",
        price: 210.0,
        img: P4,
    },
    {
        review: 150,
        content: "Readable content DX22",
        price: 210.0,
        img: P5,
    },
    {
        review: 150,
        content: "Readable content DX22",
        price: 210.0,
        img: P6,
    },
];

const topProducuts: ProductInterface[] = [
    {
        review: 150,
        content: "Readable content DX22",
        price: 210.0,
        img: TopIMG1,
    },
    {
        review: 150,
        content: "Readable content DX22",
        price: 210.0,
        img: TopIMG2,
    },
    {
        review: 150,
        content: "Readable content DX22",
        price: 210.0,
        img: TopIMG3,
    },
];

const blogs: BlogInterface[] = [
    {
        title: "Lorem ipsum dolor sit amet consectetur adipiscing.",
        date: "FEBRUARY 13, 2021",
        by: "TOMAS DE MOMEN",
        img: blogIMG1,
        color: "#ff9c9c",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur adipiscing.",
        date: "FEBRUARY 13, 2021",
        by: "TOMAS DE MOMEN",
        img: blogIMG2,
        color: "#a49cff",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur adipiscing.",
        date: "FEBRUARY 13, 2021",
        by: "TOMAS DE MOMEN",
        img: blogIMG3,
        color: "#9cdbff",
    },
];

export default Home;
