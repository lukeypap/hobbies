import React from "react";
import { IconType } from "react-icons/lib";

interface props {
    title: string;
    text: string;
    Icon: IconType;
    opacity: (progress: number, itemNumber: number) => number;
    progress: number;
    itemNumber: number;
}

const TechItem = ({ title, text, Icon, opacity, progress, itemNumber }: props) => {
    return (
        <div
            className="py-5 sticky top-0 h-[50vh] flex flex-col items-center"
            style={{
                opacity: opacity(progress, itemNumber),
                transition: "opacity 0.6s",
                transform: "translateY(60%)",
            }}
        >
            <h1 className="mb-2">
                {title}
                <p className="text-fuchsia-700 leading-none -translate-y-4">_</p>
            </h1>

            <p className="text-lg mb-4 lg:w-1/2 font-normal">{text}</p>
            <span className="text-fuchsia-700">
                <Icon />
            </span>
        </div>
    );
};

export default TechItem;
