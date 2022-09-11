import React, { useContext, useRef } from "react";
import { ScrollContext } from "~/utils/ScrollObserver";
import {
    SiNestjs,
    SiJavascript,
    SiPostgresql,
    SiJava,
    SiCsharp,
    SiTailwindcss,
    SiPython,
    SiNodedotjs,
    SiHtml5,
} from "react-icons/si";
import TechItem from "./TechItem";

const opacity = (itemProgress: number, itemNumber: number) => {
    const progress = itemProgress - itemNumber;
    if (progress >= 0 && progress < 0.9) return 1;
    return 0;
};

const techIcons = [SiJava, SiCsharp, SiTailwindcss, SiPython, SiNodedotjs, SiHtml5];

const Tech: React.FC = () => {
    const { scrollY } = useContext(ScrollContext);
    const containerRef = useRef<HTMLDivElement>(null);

    const numOfItems = 6;
    let progress = 0;

    const { current: container } = containerRef;

    if (container) {
        const { clientHeight, offsetTop } = container;
        const screenH = window.innerHeight;
        const halfH = screenH / 2;
        const percentY =
            Math.min(clientHeight, Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight;
        progress = percentY * numOfItems - 0.5;
    }

    return (
        <div
            ref={containerRef}
            className="text-white p-10 mt-10 text-4xl flex flex-col tracking-tight font-semibold lg:justify-center lg:items-center w-screen"
        >
            <h1
                className="sticky top-10 border-l-4 pl-4 lg:text-5xl"
                style={{ opacity: progress > numOfItems - 1 ? 0 : 1, transition: "opacity 0.6s" }}
            >
                <strong>Things I've worked with</strong>
                <strong className="text-fuchsia-700">.</strong>
            </h1>
            <div></div>
            <div className="flex flex-col justify-center items-center p-5 mt-10 text-center">
                <TechItem
                    title="Javascript"
                    text="The language I'm most familiar with using this in both front and backend on frameworks such as React and Express usually with Typescript."
                    Icon={SiJavascript}
                    opacity={opacity}
                    progress={progress}
                    itemNumber={1}
                />
                <TechItem
                    title="NestJs"
                    text="I used this for one of my most recent projects. I found the opinionated nature a breath of fresh air. Compared to Express, Nest helped me keep my Controllers seperate from my Services prioritising seperation of concerns making the development process much simpler."
                    Icon={SiNestjs}
                    opacity={opacity}
                    progress={progress}
                    itemNumber={2}
                />
                <TechItem
                    title="Postgres"
                    text="My goto database solution usually used with an ORM such as Prisma or TypeORM."
                    Icon={SiPostgresql}
                    opacity={opacity}
                    progress={progress}
                    itemNumber={3}
                />
                <div
                    className="py-5 sticky top-0 h-[50vh] flex flex-col items-center"
                    style={{
                        opacity: opacity(progress, 4),
                        transition: "opacity 0.6s",
                        transform: "translateY(60%)",
                    }}
                >
                    <h1 className="text-3xl opacity-80">And a bunch more...</h1>
                    <div className="flex py-10 space-x-3 ">
                        {techIcons.map((icon, id) => (
                            <span
                                key={id}
                                className="opacity-60 hover:opacity-100 transition-all hover:scale-105"
                            >
                                {React.createElement(icon)}
                            </span>
                        ))}
                    </div>
                </div>
                <h2 className="h-[50vh] sticky top-0"></h2>
            </div>
        </div>
    );
};

export default Tech;
