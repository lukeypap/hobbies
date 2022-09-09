import React from "react";
import computerIllustration from "../../../assets/undraw_code_review_re_woeb.svg";
import { motion } from "framer-motion";

const Computers = () => {
    return (
        <div className="w-screen lg:w-[50vw] flex flex-col md:flex-row p-10 bg-white lg:items-center h-screen">
            <div className="w-full lg:w-1/2">
                <motion.h1
                    initial={{ opacity: 0, translateX: -120 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl lg:text-5xl border-l-4 border-black px-3"
                >
                    <strong>My Passion</strong>
                    <strong className="text-fuchsia-700">.</strong>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="px-3 my-8 tracking-tight lg:text-xl text-lg"
                >
                    <strong>is... Programming!</strong>
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, translateY: 20 }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    className="px-3 my-4 tracking-tight lg:text-lg"
                >
                    During lockdown I found myself looking for new things to try. I'd stumbled upon
                    my old project folder from my school years. This had some really basic Java code
                    and a HTML + CSS website in. Since I enjoyed doing those school projects so much
                    I thought why not try teach myself to code? I started with Java as I had the
                    most experience in this language and quickly grasped the basics. During this
                    time I began wondering how the world of the web works and from there it was a
                    natural progession onto web development. Since I already had experience with
                    HTML and CSS I thought I'd try to learn the language of the web, Javascript.
                    Ever since it's been my full-time hobby! I've been creating apps and websites in
                    any spare time I have.
                </motion.p>
            </div>
            <div className="py-20">
                <motion.img
                    initial={{ opacity: 0, translateY: 20 }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    src={computerIllustration}
                    alt="Illustration of a computer"
                    className="w-96 h-40"
                />
            </div>
        </div>
    );
};

export default Computers;
