import React from "react";
import { motion } from "framer-motion";

const index = () => {
    return (
        <div className="w-screen lg:w-[50vw] flex flex-col md:flex-row p-10 text-white">
            <div className="w-full lg:w-1/2">
                <motion.h1
                    initial={{ opacity: 0, translateX: -120 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl lg:text-5xl border-l-4 border-white px-3"
                >
                    <strong>Works</strong>
                    <strong className="text-fuchsia-700">.</strong>
                </motion.h1>
            </div>
        </div>
    );
};

export default index;
