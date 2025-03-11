import { SparklesText } from "./magicui/sparkles-text";
import { buttonVariants } from "./ui/button";
import { Link } from "react-router-dom";
import { Github, ArrowUpRight } from "lucide-react";
import { Glow } from "./ui/glow";
import { BlurFade } from "./magicui/blur-fade";
import Chip from "./ui/chip";
import Arrow from "../assets/arrow.png";
import { LinkPreview } from "./LinkPreview";

const PROJECTS = [
  {
    name: "Codecript - A JavaScript Learning Platform",
    date: "October 20, 2024",
    description:
      "A platform for developers to learn the fundamentals of JavaScript.",
    image: "https://codescript.vercel.app/",
    tools: ["React", "Supabase", "Tailwind CSS"],
    link: "/projects/codecript",
    repo_link: "/",
  },
  {
    name: "VinceOnCode",
    date: "October 19, 2022",
    description: "A site recommedation for building a website",
    image: "https://shopify-landing-page-eight.vercel.app/",
    tools: ["React", "Tailwind CSS"],
    repo_link: "/",
  },
];

export const Projects = () => {
  return (
    <section className="mt-10 w-full justify-start items-start flex flex-col gap-4">
      <div className="w-full flex items-start justify-between mb-4">
        <div className="flex flex-col relative">
          {/* ARROW IMAGE */}

          <img
            src={Arrow}
            alt="arrow"
            className="absolute size-20 -bottom-8 -right-20"
          />
          <div className="flex gap-2">
            <SparklesText text="Featured" />
            <h1 className="text-zinc-800 text-4xl font-extrabold dark:bg-gradient-to-br dark:from-green-800 via-emerald-300 dark:to-emerald-900 dark:bg-clip-text dark:text-transparent">
              Projects
            </h1>
          </div>

          <p className="text-md font-semibold text-zinc-600 dark:text-zinc-500">
            A selection of projects that I've worked on.
          </p>
        </div>

        <div className="hidden md:flex">
          <Link
            to="/projects"
            className={buttonVariants({ variant: "link", size: "sm" })}
          >
            View More Projects
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      <div className="mt-10 w-full flex flex-col gap-8">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="w-full flex flex-col md:flex-row gap-8 md:gap-16 border-b border-zinc-200 dark:border-zinc-800 pb-10"
          >
            <div className="flex flex-col w-full md:w-3/4">
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-2 font-semibold">
                {project.date}
              </p>
              <h1 className="text-2xl font-bold mb-3 text-zinc-800 dark:bg-gradient-to-l dark:from-zinc-800  dark:to-zinc-200 dark:bg-clip-text dark:text-transparent">
                {project.name}
              </h1>
              <p className="text-sm text-zinc-600 dark:text-zinc-500">
                {project.description}
              </p>

              <div className="mt-10 w-full flex flex-col md:flex-row justify-between gap-4">
                <div className="flex items-center gap-2">
                  {project.tools.map((tool, index) => (
                    <Chip key={index} label={tool} />
                  ))}
                </div>

                <div className="flex gap-1 mt-4 md:mt-0">
                  {project.repo_link && (
                    <Link
                      to={project.repo_link}
                      className={buttonVariants({
                        variant: "link",
                        size: "sm",
                      })}
                    >
                      <Github size={16} />
                      {
                        /* @ts-ignore */
                        "Repository"
                      }
                    </Link>
                  )}

                  {project.link && (
                    <Link
                      to={project.link}
                      className={buttonVariants({
                        variant: "link",
                        size: "sm",
                      })}
                    >
                      <ArrowUpRight size={16} />
                      {
                        /* @ts-ignore */
                        "Live Site"
                      }
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-center items-start w-full md:w-1/4 relative">
              <Glow blur="3xl" />
              <BlurFade key={project.image} delay={0.25 + index * 0.05} inView>
                <LinkPreview url={project.image} width={400} height={250} />
              </BlurFade>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
