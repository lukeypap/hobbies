import { MdKeyboardArrowUp } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <div className=" bg-white h-[70vh] text-black flex flex-col justify-between items-center">
            <motion.div
                initial={{ opacity: 0, translateY: 30 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center items-center p-10 mt-48"
            >
                <h1 className="text-2xl mb-2">Thank you for reading!</h1>
                <h2 className="text-gray-700">Here's a shortcut to the top.</h2>
                <span className="text-3xl mt-4 animate-bounce cursor-pointer">
                    <Link activeClass="active" to="home" spy={true} offset={-8000} smooth={true}>
                        <MdKeyboardArrowUp />
                    </Link>
                </span>
            </motion.div>
            <motion.div>
                <p className="text-gray-400 p-5 text-sm">
                    Made by Luke. / SVGS by{" "}
                    <a href="https://undraw.co/" className="underline">
                        unDraw
                    </a>
                </p>
            </motion.div>
        </div>
    );
};

export default Footer;
