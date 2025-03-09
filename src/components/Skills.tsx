import { SparklesText } from "./magicui/sparkles-text";
import { MagicCard } from "./magicui/magic-card";
import { FaHtml5, FaCss3, FaReact, FaFigma, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  RiTailwindCssFill,
  RiSupabaseFill,
  RiNextjsFill,
} from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { useTheme } from "./ThemeProvider";
import { PiStackSimpleFill } from "react-icons/pi";
import { motion } from "framer-motion";
export const Skills = () => {
  const { theme } = useTheme();
  return (
    <div className="mt-10 w-full justify-start items-start flex flex-col gap-4">
      <div className="flex gap-2">
        <SparklesText text="Tech" />
        <h1 className="text-4xl font-extrabold dark:bg-gradient-to-br dark:from-green-800 via-emerald-300 dark:to-emerald-900 dark:bg-clip-text dark:text-transparent">
          Stack
        </h1>
      </div>

      <Cards theme={theme} />
    </div>
  );
};

const TECH_STACK = [
  {
    id: 1,
    tech: "HTML",
    yoe: "5 years of experience",
    icon: FaHtml5,
  },
  {
    id: 2,
    tech: "CSS",
    yoe: "5 years of experience",
    icon: FaCss3,
  },
  {
    id: 3,
    tech: "JavaScript",
    yoe: "3 years of experience",
    icon: IoLogoJavascript,
  },
  {
    id: 4,
    tech: "React",
    yoe: "2 years of experience",
    icon: FaReact,
  },
  {
    id: 5,
    tech: "Figma",
    yoe: "3 years of experience",
    icon: FaFigma,
  },
  {
    id: 6,
    tech: "Github",
    yoe: "4 years of experience",
    icon: FaGithub,
  },
  {
    id: 7,
    tech: "TailwindCSS",
    yoe: "1 years of experience",
    icon: RiTailwindCssFill,
  },
  {
    id: 8,
    tech: "Supabase",
    yoe: "1 years of experience",
    icon: RiSupabaseFill,
  },
  {
    id: 9,
    tech: "Next.js",
    yoe: "1 years of experience",
    icon: RiNextjsFill,
  },
  {
    id: 10,
    tech: "Framer Motion",
    yoe: "2 years of experience",
    icon: TbBrandFramerMotion,
  },
  {
    id: 11,
    tech: "UI Libraries",
    yoe: "Click to view",
    icon: PiStackSimpleFill,
    cursor: "pointer",
    action: () => {
      alert("Clicked on UI Libraries");
    },
  },
];

interface CardsProps {
  theme: string;
}

const Cards = ({ theme }: CardsProps) => {
  return (
    <div className="sticky top-4 z-10 w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {TECH_STACK.map((tech) => (
        <MagicCard gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
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
            onClick={tech.action}
            key={tech.id}
            className={`p-4 flex items-start justify-start gap-5 border border-zinc-200 dark:border-zinc-800 rounded-md cursor-${tech.cursor} overflow-hidden relative`}
          >
            <tech.icon size={16} className="m-1" />
            <div className="flex flex-col">
              <h3 className="text-sm mb-2 font-semibold">{tech.tech}</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-500">
                {tech.yoe}
              </p>
            </div>
          </motion.div>
        </MagicCard>
      ))}
    </div>
  );
};
