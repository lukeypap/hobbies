import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const Footer = () => {
    return (
        <div className="w-screen bg-black h-[70vh] text-white flex flex-col justify-between items-center">
            <div className="flex flex-col justify-center items-center p-10 mt-48">
                <h1 className="text-2xl mb-2">Thank you for reading!</h1>
                <h2 className="text-gray-300">Here's a shortcut to the top.</h2>
                <span className="text-2xl mt-4 animate-bounce">
                    <MdKeyboardArrowUp />
                </span>
            </div>
            <div>
                <p className="text-gray-400 p-5 text-sm">
                    Made by Luke. / SVGS by{" "}
                    <a href="https://undraw.co/" className="underline">
                        unDraw
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
