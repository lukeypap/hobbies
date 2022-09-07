import React from "react";
import computerIllustration from "../../assets/undraw_code_review_re_woeb.svg";

const Computers = () => {
    return (
        <div className=" w-screen lg:w-[50vw] flex flex-col md:flex-row p-10 bg-white lg:items-center h-screen">
            <div className="w-full lg:w-1/2">
                <h1 className="text-3xl lg:text-5xl border-l-4 border-black px-3">
                    <strong>My Passion</strong>
                    <strong className="text-fuchsia-700">.</strong>
                </h1>
                <p className="px-3 my-8 tracking-tight lg:text-xl text-lg">
                    <strong>is... Programming!</strong>
                </p>
                <p className="px-3 my-4 tracking-tight lg:text-lg">
                    During lockdown I found myself looking for new things to try. I'd stumbled upon
                    my old project folder from my school years. This had some really basic Java code
                    and a HTML + CSS website in. Since I enjoyed doing those school projects so much
                    I thought why not try teach myself to code? Since I started with Java as I had
                    the most experience in this language and quickly grasped the basics. During this
                    time I began wondering how the world of the web works, this led me to explore
                    Spring Boot. Through this I learnt the world of API's and how templating engines
                    work. From there it was a natural progession onto Frontend development, since I
                    already had experience with HTML and CSS I thought I'd try to learn the language
                    of the web, Javascript. Ever since it's been my full-time hobby! I've been
                    creating apps and websites in any spare time I have.
                </p>
            </div>
            <div className="py-20">
                <img
                    src={computerIllustration}
                    alt="Illustration of a computer"
                    className="w-96 h-40"
                />
            </div>
        </div>
    );
};

export default Computers;
