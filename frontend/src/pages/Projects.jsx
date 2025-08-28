import { motion } from "framer-motion";
import { FolderKanban } from "lucide-react";
import { typingVariants, fadeIn } from "../animation/variants";


const Projects = () => {
    return (
        <div className="min-h-screen bg-black text-white relative pb-20 px-6 pt-10 max-w-[1440px] mx-auto">
            <div className="flex items-center gap-3 pb-2">
                <FolderKanban className="w-8 h-8" />
                <motion.h1
                    variants={typingVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-4xl font-bold overflow-hidden whitespace-nowrap leading-tight"
                >
                    Projects
                </motion.h1>
            </div>

            <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="flex justify-between items-center mt-4 mb-8 flex-wrap gap-4"
            >
                <p className="text-sm text-gray-400 max-w-xl">
                    View and manage your ongoing projects, deadlines, and team assignments.
                </p>
            </motion.div>
        </div>
    );
};

export default Projects;