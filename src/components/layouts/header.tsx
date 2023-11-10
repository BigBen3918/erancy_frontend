import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { CartIcon, SearchIcon, AccountIcon } from "../Icons";

import MobileNavbar from "./mobileNav";
import LogoIMG from "../../assets/logo.webp";

function Header() {
    const [mobileMode, setMobileMode] = useState<boolean>(false);

    return (
        <div>
            <div className="grid grid-cols-12 p-4 xxl:max-w-[1730px] mx-auto">
                <div className="col-span-6 lg:col-span-3">
                    <div className="flex items-center h-full">
                        <Link to="/">
                            <img
                                src={LogoIMG}
                                alt="rancy_logo"
                                className="transition-all ease-linear duration-300 w-[70px] xxl:w-[100px]"
                            />
                        </Link>
                    </div>
                </div>
                <div className="col-span-6 max-lg:hidden">
                    <div className="flex justify-start items-center h-full">
                        <ul className="flex gap-5 xxl:gap-16 font-medium">
                            {menu.map((item: MenuInterface, index: number) => (
                                <li
                                    className="p-2 xxl:leading-[120px]"
                                    key={index}
                                >
                                    <Link
                                        to={item.href}
                                        className="text-zinc-800 hover:text-red-500"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="col-span-6 lg:col-span-3">
                    <div className="flex items-center justify-end h-full">
                        <button className="transition-all ease-linear duration-300">
                            <SearchIcon />
                        </button>
                        <button className="transition-all ease-linear duration-300 pl-6 xxl:pl-12">
                            <CartIcon />
                        </button>
                        <button className="transition-all ease-linear duration-300 pl-6 xxl:pl-12">
                            <AccountIcon />
                        </button>
                        <button
                            className="hidden pl-6 max-lg:block"
                            onClick={() => setMobileMode(true)}
                        >
                            <FaBars />
                        </button>
                    </div>
                </div>
            </div>

            <MobileNavbar
                mobileMode={mobileMode}
                setMobileMode={setMobileMode}
            />
        </div>
    );
}

const menu: MenuInterface[] = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "About",
        href: "/about",
    },
    {
        name: "Chekout",
        href: "/checkout",
    },
    {
        name: "Contact",
        href: "/contact",
    },
];

export default Header;
