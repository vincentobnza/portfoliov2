import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Link
        to="/"
        className="text-md md:text-xl font-medium md:font-bold dark:bg-gradient-to-r dark:from-zinc-800 dark:via-zinc-300 dark:to-zinc-700 dark:bg-clip-text dark:text-transparent tracking-tight"
      >
        {"vincntobnza."}
      </Link>
    </div>
  );
};
