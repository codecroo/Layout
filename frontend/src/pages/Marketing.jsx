import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
} from "lucide-react";
import { fadeIn, typingVariants } from "../animation/variants";

const Marketing = () => {

  return (
    <div className="min-h-screen bg-black text-white relative pb-20 px-4 sm:px-6 pt-10 max-w-[1440px] w-full mx-auto overflow-x-hidden">
      {/* Heading */}
      <div className="flex items-center gap-3 pb-2">
        <Sparkles className="w-8 h-8" />
        <motion.h1
          variants={typingVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl font-bold overflow-hidden whitespace-nowrap leading-tight"
        >
          Poster Generator
        </motion.h1>
      </div>

      {/* Subtitle */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="flex justify-between items-center mt-4 mb-8 flex-wrap gap-4"
      >
        <p className="text-sm text-gray-400 max-w-xl">
          Create branded posters with style and precision for your company in seconds.
        </p>
      </motion.div>
    </div >
  );
};

export default Marketing;