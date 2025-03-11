import { motion } from "motion/react";

export const Loading = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center min-h-screen bg-zinc-100 dark:bg-[#181818] z-10">
      <BarLoader />
    </div>
  );
};

const variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror" as const,
      duration: 1,
      ease: "circIn",
    },
  },
};

const BarLoader = () => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial="initial"
      animate="animate"
      className="flex gap-1"
    >
      <motion.div
        variants={variants}
        className="h-12 w-2 bg-zinc-800 dark:bg-zinc-400"
      />
      <motion.div
        variants={variants}
        className="h-12 w-2 bg-zinc-800 dark:bg-zinc-400"
      />
      <motion.div
        variants={variants}
        className="h-12 w-2 bg-zinc-800 dark:bg-zinc-400"
      />
      <motion.div
        variants={variants}
        className="h-12 w-2 bg-zinc-800 dark:bg-zinc-400"
      />
      <motion.div
        variants={variants}
        className="h-12 w-2 bg-zinc-800 dark:bg-zinc-400"
      />
    </motion.div>
  );
};
