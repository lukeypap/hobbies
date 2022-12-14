import { useRef, useContext } from "react";
import { ScrollContext } from "~/utils/ScrollObserver";
import Computers from "./Programming";
import HowItStarted from "./HowItStarted";
import Today from "./Today";
import Tech from "../tech/Tech";

const Index = () => {
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
                className="sticky top-40 -z-30 bg-white flex justify-center"
                ref={refContainer}
                style={{ transform: `translateY(-${progress * 20}vh)` }}
            >
                <HowItStarted />
            </div>
            <div
                className="sticky top-40 -z-20 bg-black flex justify-center"
                ref={refContainer}
                style={{ transform: `translateY(-${progress * 20}vh)` }}
            >
                <Today />
            </div>
            <div className="bg-white flex justify-center">
                <Computers />
            </div>
            <div className="bg-black flex justify-center">
                <Tech />
            </div>
        </>
    );
};

export default Index;
