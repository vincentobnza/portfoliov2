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
import { useNavigate } from "react-router-dom";
import { IoGitBranch } from "react-icons/io5";
export const Skills = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
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
      yoe: "3 years of experience",
      icon: RiTailwindCssFill,
    },
    {
      id: 8,
      tech: "Supabase",
      yoe: "1 year of experience",
      icon: RiSupabaseFill,
    },
    {
      id: 9,
      tech: "Next.js",
      yoe: "1 year of experience",
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
      tech: "GIT",
      yoe: "2 years of experience",
      icon: IoGitBranch,
    },
    {
      id: 12,
      tech: "UI Libraries",
      yoe: "Click to view",
      icon: PiStackSimpleFill,
      cursor: "pointer",
      action: () => {
        navigate("/ui-libraries");
      },
    },
  ];
  return (
    <div className="mt-10 w-full justify-start items-start flex flex-col gap-4">
      <div className="flex gap-2 relative">
        <SparklesText text="Tech" />
        <h1 className="text-zinc-800 text-4xl font-extrabold dark:bg-gradient-to-br dark:from-green-800 via-emerald-300 dark:to-emerald-900 dark:bg-clip-text dark:text-transparent">
          Stack
        </h1>
      </div>

      <Cards theme={theme} TECH_STACK={TECH_STACK} />
    </div>
  );
};

interface CardsProps {
  theme: string;
  TECH_STACK: Array<{
    id: number;
    tech: string;
    yoe: string;
    icon: React.ComponentType<{ size: number }>;
    cursor?: string;
    action?: () => void;
  }>;
}

const Cards = ({ theme, TECH_STACK }: CardsProps) => {
  return (
    <div className="sticky top-4 z-10 w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
      {TECH_STACK.map((tech) => {
        const Icon = tech.icon;
        return (
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
              className={`p-5 flex items-start justify-start gap-5 border border-zinc-200 dark:border-zinc-800 rounded-md cursor-${tech.cursor} overflow-hidden relative`}
            >
              <div className="m-1">
                <Icon size={20} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-md mb-2 font-semibold">{tech.tech}</h3>
                {/* <p className="text-sm text-zinc-600 dark:text-zinc-500">
                  {tech.yoe}
                </p> */}
              </div>
            </motion.div>
          </MagicCard>
        );
      })}
    </div>
  );
};
