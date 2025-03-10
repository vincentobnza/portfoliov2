import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { TextOutline } from "./ui/textoutline";

interface BannerProps {
  title: string;
  description: string;
  outlinedText: string;
}

export const Banner = ({ title, description, outlinedText }: BannerProps) => {
  return (
    <div className="mt-8 w-full relative max-w-screen-lg mx-auto p-5 flex flex-col space-y-14 items-center justify-center">
      <TextOutline>{outlinedText}</TextOutline>

      <div className="w-full max-w-screen-lg mx-auto pb-12 border-b border-zinc-200 dark:border-zinc-800 flex flex-col justify-center items-center relative">
        <Link
          to="/"
          className="absolute -top-12 left-0 py-[1px] px-1 pr-3 text-[13px] font-bold dark:bg-gradient-to-br dark:from-zinc-800/30 dark:bg-zinc-900 dark:border-zinc-800 border rounded-sm shadow text-zinc-600 dark:text-zinc-500 dark:hover:brightness-110 cursor-pointer flex items-center gap-1"
        >
          <ChevronLeft size={14} />
          Back
        </Link>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl text-center text-zinc-800 font-extrabold dark:bg-gradient-to-r dark:from-zinc-700 dark:via-zinc-200 dark:to-zinc-700 dark:bg-clip-text dark:text-transparent leading-none md:leading-relaxed mb-6 md:mb-0"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className="text-md text-zinc-700 dark:text-zinc-500 text-center font-semibold"
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};
