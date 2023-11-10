import { Link } from "react-router-dom";

function BlogCard({ item }: { item: BlogInterface }) {
    return (
        <div className="col-span1 sm:col-span-6 lg:col-span-4">
            <div className="w-full">
                <img src={item.img} alt="blog" className="w-full" />
            </div>
            <div className="py-4">
                <button
                    className={`bg-[${
                        colors[item.color]
                    }] text-red px-5 py-2 rounded-[50px]`}
                >
                    BEAUTY {colors[item.color]}
                </button>
            </div>
            <div className="py-4">
                <Link
                    to={"/"}
                    className="transition-colors duration-500 hover:text-red-500"
                >
                    <h4 className="text-[28px] font-medium">{item.title}</h4>
                </Link>
            </div>
            <div className="flex justify-between items-center text-[13px] font-medium">
                <p>
                    BY:{" "}
                    <Link
                        to="/"
                        className="transition-colors duration-300 hover:text-red-500"
                    >
                        {item.by}
                    </Link>
                </p>
                <p className="font-medium">{item.date}</p>
            </div>
        </div>
    );
}

const colors: string[] = ["#ff9c9c", "#a49cff", "#9cdbff"];

export default BlogCard;
