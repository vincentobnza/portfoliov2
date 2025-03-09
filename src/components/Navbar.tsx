import ThemeToggle from "./ThemeToggle";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="w-full max-w-screen-lg mx-auto px-4 sm:px-6 p-5 flex justify-between items-center bg-white dark:bg-[#181818] rounded-lg border-b border-zinc-100 dark:border-zinc-800/90">
      <div>
        <Logo />
      </div>
      <div className="flex items-center gap-8">
        <Link
          to="/connect-with-vincent"
          className="text-sm font-semibold flex items-center gap-2 text-zinc-600 dark:text-zinc-400"
        >
          <ArrowUpRight size={18} strokeWidth={3} />
          Hire Me
        </Link>

        <ThemeToggle />
      </div>
    </nav>
  );
};
