import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { BoxReveal } from "../components/magicui/box-reveal";
import { useTheme } from "../components/ThemeProvider";
import { Banner } from "../components/Banner";
import {
  SocialInstagramOutline,
  Github,
  TwitterXLine,
  Documents,
} from "../assets/icons/Icons";

const ConnectWithMe = () => {
  return (
    <>
      <Banner
        title="Let's Work Together"
        description="  Connect with me to explore opportunities and craft exceptional designs."
        outlinedText="HIRE ME"
      />
      <SocialMedia />
    </>
  );
};

const List = [
  {
    name: "My Resume",
    link: "/",
    description:
      "A detailed overview of my skills, experience, and achievements in UI/UX design.",
    icon: Documents,
    button: [
      {
        name: "Download",
        action: () => {
          console.log("Download Resume");
        },
      },
      {
        name: "View Resume",
        link: "/",
      },
    ],
  },
  {
    name: "Github",
    link: "/",
    description:
      "Explore my projects, code contributions, and open-source work in UI/UX development.",
    icon: Github,
    button: [
      {
        name: "Visit Github",
        link: "/",
      },
    ],
  },
  {
    name: "X",
    link: "/",
    description:
      "Follow me for insights on design trends, tech discussions, and industry updates.",
    icon: TwitterXLine,
    button: [
      {
        name: "Follow on X",
        link: "/",
      },
    ],
  },
  {
    name: "Instagram",
    link: "/",
    description:
      "A visual showcase of my creative work, design inspirations, and behind-the-scenes projects.",
    icon: SocialInstagramOutline,
    button: [
      {
        name: "Follow on Instagram",
        link: "/",
      },
    ],
  },
];

const SocialMedia = () => {
  const { theme } = useTheme();
  return (
    <div className="w-full max-w-screen-lg mx-auto p-5 flex flex-col gap-6 justify-between items-start">
      {List.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.3 }}
          className="px-0 py-8 md:py-12 border-b border-zinc-200 dark:border-zinc-800 w-full flex flex-col md:flex-row justify-between items-start gap-6 relative overflow-hidden group"
        >
          {/* ICON TO RIGHT */}

          <div className="flex justify-start items-start gap-6">
            <item.icon className="absolute right-0 -bottom-8 text-zinc-200 dark:text-zinc-800 group-hover:dark:text-zinc-400 duration-300 transition-all opacity-40 group-hover:animate-pulse size-32 grayscale group-hover:grayscale-0" />
            <ArrowUpRight className="hidden md:flex m-1 text-zinc-500 dark:text-zinc-600" />
            <BoxReveal
              boxColor={theme === "dark" ? "#1b1b1b" : "#e9ebec"}
              duration={0.5}
            >
              <div className="flex flex-col gap-2">
                <h1 className="text-xl md:text-3xl font-bold text-zinc-700 dark:bg-gradient-to-r dark:from-zinc-600 dark:via-zinc-50 dark:to-zinc-800 dark:bg-clip-text dark:text-transparent mb-1 md:mb-3">
                  {item.name}
                </h1>
                <p className="max-w-lg text-xs md:text-[16px] text-md  text-zinc-600 dark:text-zinc-500">
                  {item.description}
                </p>
              </div>
            </BoxReveal>
          </div>

          <div className="flex gap-2 mt-4 md:mt-0">
            {item.button.map((button, index) => (
              <BoxReveal
                boxColor={theme === "dark" ? "#1b1b1b" : "#e9ebec"}
                duration={0.5}
              >
                <button
                  className="py-1 px-3 text-[13px] font-bold dark:bg-gradient-to-br dark:from-zinc-800/30 dark:bg-zinc-900 dark:border-zinc-800 border rounded-md text-zinc-600 dark:text-zinc-500 dark:hover:brightness-110 cursor-pointer"
                  key={index}
                  onClick={button.action}
                >
                  {button.name}
                </button>
              </BoxReveal>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
export default ConnectWithMe;
