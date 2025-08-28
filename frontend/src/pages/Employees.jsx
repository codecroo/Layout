import { motion, AnimatePresence } from "framer-motion";
import { typingVariants, fadeIn } from "../animation/variants";
import { UsersRound } from "lucide-react";


const Employees = () => {
    return (
        <div className="min-h-screen bg-black text-white relative pb-20 px-6 pt-10 max-w-[1440px] mx-auto">
            <div className="flex items-center gap-3 pb-2">
                <UsersRound className="w-8 h-8" />
                <motion.h1
                    variants={typingVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-4xl font-bold overflow-hidden whitespace-nowrap leading-tight"
                >
                    Employees
                </motion.h1>
            </div>
            <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="flex justify-between items-center mt-4 mb-8 flex-wrap gap-4"
            >
                <p className="text-sm text-gray-400 max-w-xl">
                    View and manage all employees
                </p>
            </motion.div>

        </div>
    );
};

export default Employees;