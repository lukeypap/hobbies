import { useRef, useContext, useState, useCallback } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ScrollContext } from "~/utils/ScrollObserver";
import Delayed from "./Delayed";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="flex flex-col h-full text-white" id="home">
            <div className="mt-40 flex flex-col items-center">
                <div>
                    <motion.h1
                        initial={{ opacity: 0, translateY: -25 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 1 }}
                        className="text-3xl inline-block mr-3 text-gray-400"
                    >
                        Hi, I'm
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, translateY: -25 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-7xl inline-block"
                    >
                        Luke
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, translateY: -25 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-7xl inline-block text-fuchsia-800 animate-bounce"
                    >
                        .
                    </motion.h1>
                </div>
                <motion.div
                    initial={{ opacity: 0, translateY: 25 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <p className="m-2 text-gray-400">Scroll to see my greatest</p>
                    <div>
                        <h1 className="text-5xl inline-block">Hobby</h1>
                        <h1 className="text-5xl text-fuchsia-800 inline-block">!</h1>
                    </div>
                </motion.div>
                <div
                    className="h-[30vh] mt-24  border-gray-200 border-solid flex items-center justify-center opacity-60"
                    style={{ borderLeftWidth: "1px" }}
                ></div>
            </div>
            <div className="flex flex-col text-3xl items-center content-start mt-10">
                <Delayed waitBeforeShow={0}>
                    <span>
                        <MdKeyboardArrowDown className={`animate-fadeIn opacity-0`} />
                    </span>
                </Delayed>
                <Delayed waitBeforeShow={200}>
                    <span>
                        <MdKeyboardArrowDown className={`animate-fadeIn opacity-0`} />
                    </span>
                </Delayed>
                <Delayed waitBeforeShow={400}>
                    <span>
                        <MdKeyboardArrowDown className={`animate-fadeIn opacity-0`} />
                    </span>
                </Delayed>
            </div>
        </div>
    );
};

export default Hero;
