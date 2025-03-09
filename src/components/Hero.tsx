import { Container } from "./ui/Container";
import { TextAnimate } from "./magicui/text-animate";
import { AnimatePresence, motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { Pointer } from "./magicui/pointer";
import { AuroraText } from "./magicui/aurora-text";
import { TextOutline } from "./ui/textoutline";
import { useEffect, useState } from "react";

export const Hero = () => {
  return (
    <section>
      <Container>
        <TextOutline />
        <Pointer className="fill-indigo-500" />
        <div className="flex flex-col gap-4 text-center justify-center items-center ">
          <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-300">
            <TextAnimate
              animation="blurInUp"
              by="character"
              once
              className=" text-lg font-bold text-zinc-600 dark:text-zinc-500 uppercase"
            >
              Hello, I am Vincent.
            </TextAnimate>
          </p>
          <motion.h1 className="text-7xl md:text-[100px] font-bold dark:bg-gradient-to-l dark:from-emerald-900/20 dark:via-green-400 dark:to-cyan-900 dark:bg-clip-text dark:text-transparent">
            ui/ux {""}
            <span className="dark:bg-gradient-to-l dark:from-zinc-100 dark:to-zinc-700 dark:bg-clip-text dark:text-transparent">
              designer
            </span>
            <span className="animate-pulse">.</span>
          </motion.h1>
        </div>

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
          className="w-90 mt-9 text-md  text-center text-zinc-800 dark:text-zinc-600 "
        >
          {" "}
          a passionate UI/UX designer dedicated to creating intuitive,
          user-friendly, and visually compelling digital experiences.{" "}
        </motion.p>

        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="mt-16 size-16 rounded-full border border-zinc-200 dark:border-zinc-800 grid place-items-center"
        >
          <ArrowDown size={24} className="text-zinc-800 dark:text-zinc-400" />
        </motion.div>

        <RandomAnimatedQuotes />
      </Container>
    </section>
  );
};

const RandomAnimatedQuotes = () => {
  const quotes = [
    {
      quote: "Simplicity is the ultimate sophistication.",
      quoteBy: "Leonardo da Vinci",
    },
    {
      quote:
        "Design is not just what it looks like and feels like. Design is how it works.",
      quoteBy: "Steve Jobs",
    },
    {
      quote: "Good design is obvious. Great design is transparent.",
      quoteBy: "Joe Sparano",
    },
    {
      quote: "Design adds value faster than it adds costs.",
      quoteBy: "Joel Spolsky",
    },
  ];

  const [randomQuote, setRandomQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setRandomQuote(quotes[randomIndex]);
    }, 5000); // Change interval duration to 4 seconds

    return () => clearInterval(interval);
  }, [quotes]);

  return (
    <div className="text-center mt-14">
      <AnimatePresence mode="wait">
        <motion.p
          key={randomQuote.quote}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="text-md  text-zinc-800 dark:text-zinc-500"
        >
          "{randomQuote.quote}"
        </motion.p>
        <motion.p
          key={randomQuote.quoteBy}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-2 text-sm  text-zinc-800 dark:text-zinc-600 italic"
        >
          {"- " + randomQuote.quoteBy}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};
