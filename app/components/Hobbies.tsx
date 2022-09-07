import { useRef, useContext, useState, useCallback } from "react";
import { ScrollContext } from "~/utils/ScrollObserver";
import Computers from "./Computers";
import HowItStarted from "./HowItStarted";
import Today from "./Today";

const Hobbies = () => {
    const refContainer = useRef<HTMLDivElement>(null);
    const { scrollY } = useContext(ScrollContext);

    let progress = 0;

    const { current: elContainer } = refContainer;
    if (elContainer) {
        progress = Math.min(1, scrollY / elContainer.clientHeight);
    }
    return (
        <>
            <div
                className="sticky top-40 -z-20 w-screen bg-white flex justify-center"
                ref={refContainer}
                style={{ transform: `translateY(-${progress * 20}vh)` }}
            >
                <HowItStarted />
            </div>
            <div
                className="sticky top-40 -z-10 w-screen bg-black flex justify-center"
                ref={refContainer}
                style={{ transform: `translateY(-${progress * 20}vh)` }}
            >
                <Today />
            </div>
            <div className="sticky w-screen bg-white flex justify-center">
                <Computers />
            </div>
        </>
    );
};

export default Hobbies;
