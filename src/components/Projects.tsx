import { SparklesText } from "./magicui/sparkles-text";
import { buttonVariants } from "./ui/button";
import { Link } from "react-router-dom";
import { Github, ArrowUpRight } from "lucide-react";
import ProjectImage from "../assets/project.png";
import { Glow } from "./ui/glow";
import { BlurFade } from "./magicui/blur-fade";
import Chip from "./ui/chip";

const PROJECTS = [
  {
    name: "Codecript - A JavaScript Learning Platform",
    date: "October 20, 2024",
    description:
      "A platform for developers to learn the fundamentals of JavaScript.",
    image: ProjectImage,
    tools: ["React", "Supabase", "Tailwind CSS"],
    link: "/projects/codecript",
    repo_link: "/",
  },
  {
    name: "Booky - A Book Recommendation Platform",
    date: "January 25, 2025",
    description:
      "A platform for book lovers to discover new books and share their favorites.",
    image: ProjectImage,
    tools: ["React", "Tailwind CSS"],
    repo_link: "/",
  },
];

export const Projects = () => {
  return (
    <section className="mt-10 w-full justify-start items-start flex flex-col gap-4">
      <div className="w-full flex items-start justify-between mb-4">
        <div className="flex flex-col">
          <div className="flex gap-2">
            <SparklesText text="Featured" />
            <h1 className="text-4xl font-extrabold dark:bg-gradient-to-br dark:from-green-800 via-emerald-300 dark:to-emerald-900 dark:bg-clip-text dark:text-transparent">
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
            className="w-full flex gap-4  border-b border-zinc-200 dark:border-zinc-800 pb-10"
          >
            <div className="flex flex-col w-full md:w-3/4 ">
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-2 font-semibold">
                {project.date}
              </p>
              <h1 className="text-xl font-bold mb-3">{project.name}</h1>
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
                      to="/projects"
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
                      to="/projects"
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
            <div className="hidden md:flex w-1/3 h-30 border border-zinc-200 dark:border-zinc-800 relative">
              <Glow blur="3xl" />
              <BlurFade key={project.image} delay={0.25 + index * 0.05} inView>
                <img
                  src={project.image}
                  alt="Project"
                  className="w-full h-full"
                />
              </BlurFade>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
