import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";

export const Layout = () => {
  return (
    <div className="mt-12 w-full max-w-screen-lg mx-auto flex space-x-6">
      {/* Main Content */}
      <div className="w-full space-y-12">
        {/* <About /> */}
        <Skills />
        <Projects />
      </div>

      {/* Sticky Sidebar */}
      {/* <aside className="hidden md:flex w-1/4 h-screen sticky top-4 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#181818]/80 rounded-xl shadow-md p-5">
        <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
          Navigations
        </h2>
      </aside> */}
    </div>
  );
};
