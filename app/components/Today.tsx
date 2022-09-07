import React from "react";
import booksIllustration from "../../assets/undraw_books_re_8gea.svg";

const Today = () => {
    return (
        <div className="h-screen w-screen lg:w-[50vw] flex flex-col md:flex-row p-10 bg-black text-white lg:items-center">
            <div className="w-full lg:w-1/2">
                <h1 className="text-3xl lg:text-5xl border-l-4 border-white px-3">
                    <strong>Today</strong>
                    <strong className="text-fuchsia-700">.</strong>
                </h1>
                <p className="px-3 my-4 tracking-tight lg:text-lg">
                    Throughout my education I always chose to study about computers, from secondary
                    school to sixth form and now university. I chose to pursue a career in tech and
                    that brings us to my passion.
                </p>
            </div>
            <div className="w-72 h-32 lg:w-[40%] lg:h-[30%] py-10 lg:px-10">
                <img src={booksIllustration} alt="Illustration of a computer" />
            </div>
        </div>
    );
};

export default Today;
