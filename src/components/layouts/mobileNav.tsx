import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

interface NavbarInterface {
    mobileMode: boolean;
    setMobileMode: (value: boolean) => void;
}

function MobileNavbar(props: NavbarInterface) {
    const { mobileMode, setMobileMode } = props;

    // Define our base class
    const className =
        "fixed bg-zinc-900 w-[300px] transition-[margin-left] ease-in-out duration-500 top-0 bottom-0 left-0 z-40";
    // Append class based on state of sidebar visiblity
    const appendClass = mobileMode ? " ml-0" : " ml-[-300px]";

    // Overlay to prevent clicks in background, also serves as our close button
    const ModalOverlay = () => (
        <div
            className="flex fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30"
            onClick={() => setMobileMode(false)}
        />
    );

    return (
        <>
            <div className={`${className}${appendClass}`}>
                <div className="flex flex-col">
                    <button
                        className="text-white p-5 justify-between items-center flex bg-red-500 hover:bg-black hover:text-red-500 translate-all duration-500"
                        onClick={() => setMobileMode(false)}
                    >
                        Menu
                        <FaArrowLeft />
                    </button>
                    <ul className="flex flex-col">
                        {menu.map((item: MenuInterface, index: number) => (
                            <li key={index} className="text-white p-5 ">
                                <Link
                                    to={item.href}
                                    className="translate-all duration-300 hover:text-red-500"
                                    onClick={() => setMobileMode(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {mobileMode ? <ModalOverlay /> : <></>}
        </>
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

export default MobileNavbar;
