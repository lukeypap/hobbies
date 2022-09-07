import React from "react";
import computerGiftIllustration from "../../assets/undraw_online_wishes_dlmr.svg";

const HowItStarted = () => {
    return (
        <div className="h-screen w-screen lg:w-[50vw] flex flex-col md:flex-row p-10 bg-white lg:items-center">
            <div className="w-full lg:w-1/2">
                <h1 className="text-3xl lg:text-5xl border-l-4 border-black px-3">
                    <strong>How it started</strong>
                    <strong className="text-fuchsia-700">.</strong>
                </h1>
                <p className="px-3 my-4 tracking-tight lg:text-lg">
                    When I was younger I had an odd obsession with wires and how they worked. My Mum
                    would find me with all the electronics out and wires everywhere! As I grew older
                    my parents purchased a family laptop, from then on I became obsessed with how
                    computers work.
                </p>
                {/* <p className="px-3 my-4 tracking-tight lg:text-lg">
                    Looking back I felt sorry for my parents as everyday I would ask them if we
                    could get a computer, it was only a matter of time before they gave in. The
                    first thing I did was boot up my favorite game at the time, Sonic the Hedgehog.
                </p> */}
            </div>
            <div className="w-72 h-32 lg:w-[40%] lg:h-[40%] py-10 lg:px-10">
                <img src={computerGiftIllustration} alt="Illustration of a computer" />
            </div>
        </div>
    );
};

export default HowItStarted;