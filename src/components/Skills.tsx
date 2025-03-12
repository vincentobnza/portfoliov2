import { MagicCard } from "./magicui/magic-card";

import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { Html5, React } from "../assets/icons/Icons";
export const Skills = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const TECH_STACK = [
    {
      id: 1,
      tech: "HTML5",
      icon: Html5,
    },
    {
      id: 2,
      tech: "React",
      icon: React,
    },
    // {
    //   id: 1,
    //   tech: "UI Libraries",
    //   icon: PiStackSimpleFill,
    //   cursor: "pointer",
    //   action: () => {
    //     navigate("/ui-libraries");
    //   },
    // },
  ];
  return (
    <div className="mt-10 w-full justify-start items-start flex flex-col gap-4">
      {/* <div className="flex gap-2 relative">
        <SparklesText text="Tech" />
        <h1 className="text-zinc-800 text-4xl font-extrabold dark:bg-gradient-to-br dark:from-green-800 via-emerald-300 dark:to-emerald-900 dark:bg-clip-text dark:text-transparent">
          Stack
        </h1>
      </div> */}

      <div className="w-full  flex gap-12">
        <div className="w-1/2 flex flex-col gap-2">
          <h3 className="text-lg font-bold text-zinc-700 dark:text-zinc-500">
            # Skills
          </h3>
          <h1 className="text-4xl font-bold mb-3">Front-End Tech Stack</h1>
          <p className="text-md font-semibold text-zinc-500">
            Technologies I use to build modern, responsive, and user-friendly
            web experiences. From frameworks to design tools, these power my
            development workflow.
          </p>
        </div>
        <div className="w-1/2">
          <Cards theme={theme} TECH_STACK={TECH_STACK} />
        </div>
      </div>
    </div>
  );
};

interface CardsProps {
  theme: string;
  TECH_STACK: Array<{
    id: number;
    tech: string;
    yoe: string;
    icon: any;
    cursor?: string;
    action?: () => void;
  }>;
}

const Cards = ({ theme, TECH_STACK }: CardsProps) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {TECH_STACK.map((tech) => {
        const Icon = tech.icon;
        return (
          <MagicCard
            key={tech.id}
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            className="flex flex-col items-center justify-center rounded-md cursor-pointer"
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: tech.id * 0.1,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="w-22 h-22 grid place-items-center"
              // onClick={tech.action}
            >
              <Icon className="size-10" />
            </motion.div>
          </MagicCard>
        );
      })}
    </div>
  );
};
