import { Swiper, SwiperSlide } from "swiper/react";
import BrandIMG1 from "../../assets/brandSlide/1.webp";
import BrandIMG2 from "../../assets/brandSlide/2.webp";
import BrandIMG3 from "../../assets/brandSlide/3.webp";
import BrandIMG4 from "../../assets/brandSlide/4.webp";

function BrandSlide() {
    return (
        <div className="container mx-auto p-4 xxl:px-[150px] py-[110px]">
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                breakpoints={{
                    450: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
            >
                <SwiperSlide>
                    <div className="flex justify-center items-center">
                        <img src={BrandIMG1} alt="brand1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center items-center">
                        <img src={BrandIMG2} alt="brand1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center items-center">
                        <img src={BrandIMG3} alt="brand1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center items-center">
                        <img src={BrandIMG4} alt="brand1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center items-center">
                        <img src={BrandIMG1} alt="brand1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center items-center">
                        <img src={BrandIMG2} alt="brand1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center items-center">
                        <img src={BrandIMG3} alt="brand1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center items-center">
                        <img src={BrandIMG4} alt="brand1" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default BrandSlide;
