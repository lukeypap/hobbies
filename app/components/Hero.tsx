import React from "react";

const Hero = () => {
    return (
        <div className="flex justify-center h-screen text-white item">
            <div className="mt-20 flex flex-col items-center">
                <div>
                    <h1 className="text-3xl inline-block mr-3 text-gray-400">Hi, I'm</h1>
                    <h1 className="text-6xl inline-block">Luke</h1>
                </div>
                <p className="m-2 text-gray-400">Scroll to see my</p>
                <h1 className="text-4xl">Hobbies!</h1>
            </div>
        </div>
    );
};

export default Hero;
