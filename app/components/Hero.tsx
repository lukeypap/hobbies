import { MdKeyboardArrowDown } from "react-icons/md";
import Delayed from "./Delayed";

const Hero = () => {
    return (
        <div className="flex flex-col h-full text-white">
            <div className="mt-20 flex flex-col items-center">
                <div>
                    <h1 className="text-3xl inline-block mr-3 text-gray-400">Hi, I'm</h1>
                    <h1 className="text-6xl inline-block">Luke</h1>
                </div>
                <p className="m-2 text-gray-400">Scroll to see my</p>
                <h1 className="text-4xl">Hobbies!</h1>
                <div
                    className="h-[30vh] my-8  border-gray-200 border-solid flex items-center justify-center opacity-60"
                    style={{ borderLeftWidth: "1px" }}
                ></div>
            </div>
            <div className="flex flex-col text-lg items-center">
                <Delayed waitBeforeShow={0}>
                    <span>
                        <MdKeyboardArrowDown className={`animate-fadeIn opacity-0`} />
                    </span>
                </Delayed>
                <Delayed waitBeforeShow={250}>
                    <span>
                        <MdKeyboardArrowDown className={`animate-fadeIn opacity-0`} />
                    </span>
                </Delayed>
                <Delayed waitBeforeShow={500}>
                    <span>
                        <MdKeyboardArrowDown className={`animate-fadeIn opacity-0`} />
                    </span>
                </Delayed>
            </div>
        </div>
    );
};

export default Hero;
