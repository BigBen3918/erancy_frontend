import { FaStar, FaHeart, FaExpand } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Card({ item }: { item: ProductInterface }) {
    return (
        <div className="relative col-span-1 sm:col-span-6 lg:col-span-4 Card">
            <div className="overflow-hidden bg-cover bg-no-repeat rounded-xl">
                <Link to="/" className="relative">
                    <img
                        src={item.img}
                        alt={`products`}
                        className="w-full rounded-xl transition duration-300"
                    />
                    <div className="absolute top-5 right-5 bg-red-500 px-4 py-1 text-center rounded-[50px] text-white font-medium">
                        new
                    </div>
                </Link>
            </div>
            <div className="sub_card relative rounded-xl bg-[#fafafa]">
                <div className="flex justify-between items-center pt-6 flex-wrap px-4 md:px-7">
                    <div className="flex justify-start items-center gap-1 md:gap-3">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <p className="italic text-gray-500">
                        {item.review} reviews
                    </p>
                </div>
                <h3 className="text-[17px] md:text-[21px] font-normal pt-4 px-4 md:px-7 transition-colors duration-700 hover:text-red-500">
                    <Link to="/">{item.content}</Link>
                </h3>
                <div className="flex items-end justify-start gap-2 pt-4 pb-5 px-4 md:px-7">
                    <h3 className="text-[21px] font-normal">${item.price}</h3>
                    <p className="text-[12px] font-light line-through">
                        300.00
                    </p>
                </div>
                <div className="sub_button">
                    <div className="flex justify-between items-center gap-1 md:gap-6 px-4 md:px-7 pb-7">
                        <button className="flex-1 rounded-[50px] h-[42px] md:h-[50px] border-[2px] border-red-500 text-[11px] md:text-base">
                            ADD TO CART
                        </button>
                        <button className="rounded-full w-[42px] h-[42px] md:h-[50px] md:w-[50px] flex items-center justify-center border-[2px] border-red-500">
                            <FaExpand />
                        </button>
                        <button className="rounded-full w-[42px] h-[42px] md:h-[50px] md:w-[50px] flex items-center justify-center border-[2px] border-red-500">
                            <FaHeart />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
