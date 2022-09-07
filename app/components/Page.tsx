import { useRef, useContext, useState, useCallback } from "react";
import { ScrollContext } from "~/utils/ScrollObserver";
import Footer from "./Footer";
import Hero from "./Hero";
import Hobbies from "./Hobbies";
import Nav from "./Nav";

const Page = () => {
    const refContainer = useRef<HTMLDivElement>(null);
    const { scrollY } = useContext(ScrollContext);

    let progress = 0;

    const { current: elContainer } = refContainer;
    if (elContainer) {
        progress = Math.min(1, scrollY / elContainer.clientHeight);
    }
    return (
        <div className="font-quicksand sticky">
            <div
                className="h-screen bg-black sticky top-0 -z-30"
                ref={refContainer}
                style={{ transform: `translateY(-${progress * 20}vh)` }}
            >
                <Nav />
                <Hero />
            </div>
            <Hobbies />
            <Footer />
        </div>
    );
};

export default Page;
