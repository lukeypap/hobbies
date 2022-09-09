import React from "react";
import computerGiftIllustration from "../../../assets/undraw_online_wishes_dlmr.svg";
import { motion } from "framer-motion";

const HowItStarted = () => {
    return (
        <div className="h-screen w-screen lg:w-[50vw] flex flex-col md:flex-row p-10 bg-white lg:items-center">
            <div className="w-full lg:w-1/2">
                <motion.h1
                    initial={{ opacity: 0, translateX: -120 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl lg:text-5xl border-l-4 border-black px-3"
                >
                    <strong>How it started</strong>
                    <strong className="text-fuchsia-700">.</strong>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, translateY: 20 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ once: true }}
                    className="px-3 my-4 tracking-tight lg:text-lg"
                >
                    When I was younger I had an obsession with figuring out how things worked. My
                    Mum would find me with all the electronics out and wires everywhere! As I grew
                    older this curiostiy continued and once my parents purchased a family laptop I
                    was fascinated by how this machine was so intelligent!
                </motion.p>
                {/* <p className="px-3 my-4 tracking-tight lg:text-lg">
                    Looking back I felt sorry for my parents as everyday I would ask them if we
                    could get a computer, it was only a matter of time before they gave in. The
                    first thing I did was boot up my favorite game at the time, Sonic the Hedgehog.
                </p> */}
            </div>
            <motion.div
                initial={{ opacity: 0, translateY: 10 }}
                transition={{ duration: 1.5, delay: 0.6 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                className="w-72 h-32 lg:w-[40%] lg:h-[40%] py-10 lg:px-10"
            >
                <img src={computerGiftIllustration} alt="Illustration of a computer" />
            </motion.div>
        </div>
    );
};

export default HowItStarted;
