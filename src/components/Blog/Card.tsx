import { Link } from "react-router-dom";

function BlogCard({ item }: { item: BlogInterface }) {
    return (
        <div className="col-span1 sm:col-span-6 lg:col-span-4">
            <div className="w-full relative overflow-hidden bg-cover bg-no-repeat rounded-lg">
                <img
                    src={item.img}
                    alt="blog"
                    className="w-full rounded-lg transition duration-300 hover:scale-105"
                />
            </div>
            <div className="py-4">
                <button
                    className={`text-red px-7 py-2 rounded-[50px] opacity-70 hover:opacity-100 font-medium`}
                    style={{ background: `${item.color}` }}
                >
                    BEAUTY
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

export default BlogCard;
