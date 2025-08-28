import { motion } from "framer-motion";
import { typingVariants, fadeIn } from "../animation/variants";

import {
    LayoutGrid,

} from "lucide-react";

const Home = () => {

    return (
        <div className="min-h-screen bg-black text-white relative pb-20">
            {/* Heading */}
            <div className="px-6 pt-10 pb-6 max-w-[1440px] mx-auto">
                <div className="flex items-center gap-3 pb-2">
                    <LayoutGrid className="w-8 h-8" />
                    <motion.h1
                        variants={typingVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-4xl font-bold overflow-hidden whitespace-nowrap leading-tight"
                    >
                        Dashboard
                    </motion.h1>
                </div>

                <motion.p
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    className="text-gray-400 mt-4 text-sm max-w-xl"
                >
                    Watch on every activity, track progress, and projects — all in one control center.
                </motion.p>
            </div>
        </div>
    );
};

export default Home;
