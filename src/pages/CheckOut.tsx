import { useState } from "react";
import { Link } from "react-router-dom";
import { FcInfo } from "react-icons/fc";

function CheckOut() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div>
            <div className="flex justify-center items-center py-8 bg-[#fffaef] gap-2">
                <Link
                    to="/"
                    className="hover:text-red-400 transition-colors duration-200"
                >
                    Home
                </Link>
                {"/"}
                <p>Checkout</p>
            </div>
            <div className="container mx-auto p-4 xxl:px-[150px] py-28">
                <div className="mb-[30px]">
                    <div className="flex justify-start items-center gap-3 p-5 bg-zinc-200 border-t-[2px] border-blue-400 mb-5">
                        <FcInfo />{" "}
                        <p>
                            Have a Coupon?{" "}
                            <button
                                className="transition-colors duration-200 hover:text-red-400"
                                onClick={() => setOpen(!open)}
                            >
                                Click here to enter your code
                            </button>
                        </p>
                    </div>
                    {open && (
                        <div className={`border-[1px] border-zinc-200`}>
                            <div className="p-5">
                                <p className="text-zinc-500">
                                    If you have a coupon code, please apply it
                                    below.
                                </p>
                                <div className="flex items-center gap-7 py-4">
                                    <input
                                        type="text"
                                        className="p-3 border-[1px] border-zinc-300 outline-none w-[50%]"
                                        placeholder="Coupon code"
                                    />
                                    <button className="py-3 px-8 border-[1px] border-zinc-300 text-[14px] font-medium hover:bg-red-400 hover:text-white transition-colors duration-300">
                                        APPLY COUPON
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-2">
                    <div className="col-span-1">
                        <div className="mb-[35px]">
                            <h3 className="text-[25px] font-semibold pb-3">
                                Billing Details
                            </h3>
                            <div className="h-[2px] w-[70px] bg-black"></div>
                        </div>
                        <div className="flex gap-5 pb-5">
                            <div className="flex flex-col flex-1">
                                <label id="firstname">
                                    First name <b className="text-red-500">*</b>
                                </label>
                                <input
                                    type="text"
                                    className="flex-1 border-[1px] border-zinc-300 outline-none h-[50px] p-3"
                                />
                            </div>
                            <div className="flex flex-col flex-1">
                                <label id="firstname">
                                    Last name <b className="text-red-500">*</b>
                                </label>
                                <input
                                    type="text"
                                    className="flex-1 border-[1px] border-zinc-300 outline-none h-[50px] p-3"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col pb-5">
                            <label id="firstname">
                                Company name (optional)
                            </label>
                            <input
                                type="text"
                                className="flex-1 border-[1px] border-zinc-300 outline-none h-[50px] p-3"
                            />
                        </div>
                        <div className="flex flex-col pb-5">
                            <label htmlFor="country">
                                Country <b className="text-red-500">*</b>
                            </label>
                            <select
                                id="country"
                                className="border-[1px] border-zinc-300 outline-none h-[50px] p-3"
                            >
                                <option>Bangladesh</option>
                                <option>Afghanistan</option>
                                <option>Albania</option>
                                <option>Armenia</option>
                                <option>India</option>
                                <option>Pakistan</option>
                                <option>England</option>
                                <option>China</option>
                            </select>
                        </div>
                        <div className="flex flex-col pb-5 gap-3">
                            <label id="firstname">
                                Street address
                                <b className="text-red-500">*</b>
                            </label>
                            <input
                                type="text"
                                className="flex-1 border-[1px] border-zinc-300 outline-none h-[50px] p-3"
                                placeholder="House number and street name"
                            />
                            <input
                                type="text"
                                className="flex-1 border-[1px] border-zinc-300 outline-none h-[50px] p-3"
                                placeholder="Apartment, suite, unite etc, (optional)"
                            />
                        </div>
                        <div className="flex flex-col pb-5">
                            <label id="firstname">
                                Town / City <b className="text-red-500">*</b>
                            </label>
                            <input
                                type="text"
                                className="flex-1 border-[1px] border-zinc-300 outline-none h-[50px] p-3"
                            />
                        </div>
                        <div className="flex flex-col pb-5">
                            <label htmlFor="district">
                                District <b className="text-red-500">*</b>
                            </label>
                            <select
                                id="district"
                                className="border-[1px] border-zinc-300 outline-none h-[50px] p-3"
                            >
                                <option>Bangladesh</option>
                                <option>Afghanistan</option>
                                <option>Albania</option>
                                <option>Armenia</option>
                                <option>India</option>
                                <option>Pakistan</option>
                                <option>England</option>
                                <option>China</option>
                            </select>
                        </div>
                        <div className="flex flex-col pb-5">
                            <label id="firstname">
                                Postcode / ZIP (optional)
                            </label>
                            <input
                                type="text"
                                className="flex-1 border-[1px] border-zinc-300 outline-none h-[50px] p-3"
                            />
                        </div>
                        <div className="flex flex-col pb-5">
                            <label id="firstname">Phone (optional)</label>
                            <input
                                type="text"
                                className="flex-1 border-[1px] border-zinc-300 outline-none h-[50px] p-3"
                            />
                        </div>
                        <div className="flex flex-col pb-5">
                            <label id="firstname">
                                Email address <b className="text-red-500">*</b>
                            </label>
                            <input
                                type="text"
                                className="flex-1 border-[1px] border-zinc-300 outline-none h-[50px] p-3"
                            />
                        </div>
                        <div className="flex items-center gap-2 pb-5">
                            <input type="checkbox" id="check_ship" />
                            <label htmlFor="check_ship">
                                Ship to a different address?
                            </label>
                        </div>
                        <div className="flex flex-col items-start">
                            <label htmlFor="order">
                                Order notes (optional)
                            </label>
                            <textarea
                                id="order"
                                rows={5}
                                className="flex-1 w-full border-[1px] border-zinc-300 outline-none h-[50px] p-6 resize-none"
                                placeholder="Notes about your order, e.g. special notes for delivery"
                            ></textarea>
                        </div>
                    </div>

                    <div className="col-span-1 px-10">
                        <div className="border-[1px] border-zinc-400">
                            <div className="flex flex-col p-10">
                                <div className="pb-5">
                                    <h3 className="text-[20px] font-semibold mb-3">
                                        Your Order
                                    </h3>
                                    <div className="h-[2px] w-[70px] bg-zinc-700"></div>
                                </div>
                                <div className="flex justify-between pb-2 border-b-[1px] border-zinc-300 text-zinc-700">
                                    <p>Product</p>
                                    <p>Total</p>
                                </div>
                                <div className="py-5 border-b-[1px] border-zinc-300 text-zinc-700">
                                    <div className="flex justify-between py-1">
                                        <p>Satin gown × 1</p>
                                        <p>£69.99</p>
                                    </div>
                                    <div className="flex justify-between py-1">
                                        <p>Printed cotton t-shirt × 1</p>
                                        <p>£20.00</p>
                                    </div>
                                </div>
                                <div className="flex justify-between py-5 border-b-[1px] border-zinc-300 text-zinc-700">
                                    <p>Subtotal</p>
                                    <p>£89.99</p>
                                </div>
                                <div className="flex justify-between py-5 border-b-[1px] border-zinc-300 text-zinc-700">
                                    <p>Shipping</p>
                                    <p>Flat rate: £2.00</p>
                                </div>
                                <div className="flex justify-between py-5 border-b-[1px] border-zinc-300 text-zinc-700">
                                    <p>Total</p>
                                    <p>£91.99</p>
                                </div>
                                <div className="py-8">
                                    <div className="flex items-center gap-2 py-2">
                                        <input
                                            type="radio"
                                            name="payment"
                                            id="pay1"
                                        />
                                        <label htmlFor="pay1">
                                            DIRECT BANK TRANSFER
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-2 py-2">
                                        <input
                                            type="radio"
                                            name="payment"
                                            id="pay2"
                                        />
                                        <label htmlFor="pay2">
                                            CHECK PAYMENTS
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-2 py-2">
                                        <input
                                            type="radio"
                                            name="payment"
                                            id="pay3"
                                        />
                                        <label htmlFor="pay3">
                                            CASH ON DELIVERY
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-2 py-2">
                                        <input
                                            type="radio"
                                            name="payment"
                                            id="pay4"
                                        />
                                        <label htmlFor="pay4">
                                            PAYPAL EXPRESS CHECKOUT
                                        </label>
                                    </div>
                                </div>
                                <div className="pb-5">
                                    Your personal data will be used to process
                                    your order, support your experience
                                    throughout this website, and for other
                                    purposes described in our{" "}
                                    <b className="text-red-400">
                                        privacy policy.
                                    </b>
                                </div>
                                <div className="flex items-center gap-2 pb-5">
                                    <input type="checkbox" id="agree_check" />
                                    <label htmlFor="agree_check">
                                        I have read and agree to the website
                                        terms and conditions{" "}
                                        <b className="text-red-400">*</b>
                                    </label>
                                </div>
                                <div className="flex pb-5">
                                    <button className="py-4 bg-red-400 w-full text-white font-medium hover:bg-black transition-colors duration-300">
                                        PLACE ORDER
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckOut;
