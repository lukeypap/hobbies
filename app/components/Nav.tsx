import React from "react";
import { AiFillHome } from "react-icons/ai";

const Nav = () => {
    return (
        <div className="flex items-center p-4 text-white fixed">
            <div>
                <span>
                    <AiFillHome />
                </span>
            </div>
        </div>
    );
};

export default Nav;
